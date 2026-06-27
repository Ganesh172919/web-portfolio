---
title: "Designing AI Systems That Solve Critical Problems — A Practical Framework"
date: "2026-06-27"
category: "System Design"
excerpt: "Most AI projects fail not because of bad models, but because of bad system design. Here's the framework I use to design AI systems that actually solve critical real-world problems — from medical diagnosis to financial fraud detection."
featured: true
tags: ["System Design", "AI Architecture", "Production AI", "Engineering Framework"]
---

## The Problem: 85% of AI Projects Fail

According to Gartner, 85% of AI projects fail to deliver value. Not because the models are bad — modern LLMs and ML models are remarkably capable. They fail because of **system design problems**:

- The model works in the notebook but fails in production
- The system doesn't handle edge cases gracefully
- There's no fallback when the AI gives wrong answers
- The architecture doesn't scale beyond the demo
- Nobody designed for observability, so failures are invisible

I've built multiple production AI systems — multi-agent financial copilots, medical chatbots with RAG, automated data pipelines — and I've made every one of these mistakes. Here's the framework I now use to avoid them.

## The Framework: DARTS

I use a framework I call **DARTS** for designing AI systems that solve critical problems:

- **D**efine the problem precisely
- **A**rchitect the system, not just the model
- **R**edundancy and fallback design
- **T**esting at every layer
- **S**hipping with observability

Let me break down each step with real examples.

## Step 1: Define the Problem Precisely

The most common mistake is starting with "We need AI" instead of "We need to solve X."

### Bad Definition
> "We need an AI chatbot for our medical platform."

### Good Definition
> "Patients frequently ask medical questions that have evidence-backed answers in our database. We need a system that retrieves relevant medical information, generates accurate responses with source citations, and explicitly states when it doesn't have enough information — with less than 5% hallucination rate."

The good definition specifies:
- **Input**: Patient medical questions
- **Expected behavior**: Retrieve, generate, cite
- **Failure behavior**: Explicit uncertainty
- **Success metric**: <5% hallucination rate

### Problem Decomposition

Once you have a precise definition, decompose it into sub-problems:

```
Medical Question Answering System
├── Query Understanding
│   ├── Is this a medical question?
│   ├── What medical domain? (cardiology, neurology, etc.)
│   └── What type of answer? (factual, procedural, diagnostic)
├── Information Retrieval
│   ├── Vector search in medical knowledge base
│   ├── PubMed API for recent research
│   └── Relevance scoring and ranking
├── Response Generation
│   ├── Context-aware generation
│   ├── Source citation
│   └── Uncertainty expression
└── Safety & Validation
    ├── Medical accuracy check
    ├── Harmful content filtering
    └── Confidence thresholding
```

This decomposition reveals the true complexity — and shows that "AI" is just one component among many.

## Step 2: Architect the System, Not Just the Model

Most AI tutorials focus on the model. Real AI systems need architecture:

```
┌──────────────────────────────────────────────────────────────┐
│                      Client Layer                            │
│  (React Frontend / Mobile App / API Consumer)                │
└──────────────────────┬───────────────────────────────────────┘
                       │
┌──────────────────────┴───────────────────────────────────────┐
│                      API Gateway                             │
│  (Rate Limiting, Auth, Request Routing)                      │
└──────────────────────┬───────────────────────────────────────┘
                       │
┌──────────────────────┴───────────────────────────────────────┐
│                   Orchestration Layer                        │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │ Query   │  │Retrieval│  │Generation│  │ Safety  │       │
│  │Analysis │→ │ Engine  │→ │  Engine  │→ │ Checker │       │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
└──────────────────────┬───────────────────────────────────────┘
                       │
┌──────────────────────┴───────────────────────────────────────┐
│                      Data Layer                              │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐       │
│  │Vector DB│  │Document │  │  Cache   │  │ Message │       │
│  │(ChromaDB)│ │  Store  │  │ (Redis)  │  │  Queue  │       │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘       │
└──────────────────────────────────────────────────────────────┘
```

### Key Architecture Decisions

**1. Separation of Concerns**: Each component has a single responsibility. The retrieval engine doesn't know about generation. The safety checker doesn't know about retrieval.

**2. Interface Contracts**: Define clear interfaces between components:

```python
class RetrievalResult:
    documents: List[Document]
    confidence: float
    sources: List[str]

class GenerationResult:
    response: str
    citations: List[Citation]
    uncertainty_score: float
```

**3. Stateless Components**: Each request is independent. State lives in the data layer, not in the orchestration layer. This enables horizontal scaling and crash recovery.

## Step 3: Redundancy and Fallback Design

This is where most AI systems fail. The model gives a wrong answer, and the system has no way to handle it.

### The Fallback Pyramid

Design your system with multiple layers of fallback:

```
        ┌─────────────────┐
        │   AI Response   │  ← Highest quality, highest risk
        │  (with citations)│
        ├─────────────────┤
        │  RAG Response   │  ← Good quality, lower risk
        │ (retrieved docs) │
        ├─────────────────┤
        │ Template Response│  ← Acceptable quality, minimal risk
        │  (rule-based)   │
        ├─────────────────┤
        │ Safe Default    │  ← Always works, lowest quality
        │("Consult a doctor")│
        └─────────────────┘
```

### Real Example: Medical Chatbot Fallback

```python
async def get_medical_response(query: str) -> Response:
    # Level 1: Full AI pipeline (RAG + Generation)
    try:
        retrieval = await retrieve_medical_info(query)
        if retrieval.confidence > 0.8:
            response = await generate_with_citations(query, retrieval)
            if await safety_check(response):
                return response
    except Exception as e:
        logger.error("full_pipeline_failed", error=e)

    # Level 2: RAG-only (no generation, just retrieved docs)
    try:
        retrieval = await retrieve_medical_info(query)
        if retrieval.documents:
            return format_retrieved_docs(retrieval)
    except Exception as e:
        logger.error("rag_fallback_failed", error=e)

    # Level 3: Template-based response
    domain = classify_medical_domain(query)
    if domain in MEDICAL_TEMPLATES:
        return MEDICAL_TEMPLATES[domain]

    # Level 4: Safe default
    return Response(
        text="I don't have enough information to answer this question. "
             "Please consult a healthcare professional for medical advice.",
        confidence=0.0,
        sources=[]
    )
```

Every level is a valid response. The system never fails — it just varies in quality.

## Step 4: Testing at Every Layer

Traditional testing (unit tests, integration tests) is necessary but insufficient for AI systems. You also need:

### 1. Model-Level Testing
- Accuracy on a held-out test set
- Performance on edge cases (ambiguous queries, adversarial inputs)
- Latency under load

### 2. System-Level Testing
- What happens when the vector DB is down?
- What happens when the LLM returns garbage?
- What happens when two requests arrive simultaneously?
- What happens when the context window overflows?

### 3. Adversarial Testing
- Can users extract system prompts?
- Can users make the system generate harmful content?
- Can users bypass safety filters?

### 4. Regression Testing
When you update prompts or models, do existing capabilities still work? I maintain a test suite of 100+ queries with expected behavior that runs on every change.

## Step 5: Shipping with Observability

You cannot improve what you cannot measure. Every AI system needs:

### Structured Logging

```python
logger.info("request_processed", {
    "query_type": "medical_factual",
    "retrieval_confidence": 0.85,
    "generation_latency_ms": 1200,
    "citations_count": 3,
    "safety_check": "passed",
    "fallback_level": "none"
})
```

### Key Metrics to Track

| Metric | What It Tells You |
|--------|-------------------|
| Retrieval confidence distribution | Is your knowledge base good enough? |
| Fallback rate | How often does the AI fail? |
| Hallucination rate | How often does the AI make things up? |
| Latency percentiles | Is the system fast enough? |
| User satisfaction | Is the system actually helpful? |

### Alerting

Set up alerts for:
- Fallback rate exceeding 20% (system quality degrading)
- Latency p99 exceeding 5 seconds (performance issue)
- Safety check failures (potential harmful output)
- Error rate spikes (system failure)

## Real-World Example: Financial Fraud Detection

Let me apply DARTS to a real problem — detecting fraudulent transactions:

**Define**: Flag suspicious transactions in real-time with <1% false positive rate and <100ms latency.

**Architect**:
```
Transaction → Feature Extraction → ML Model → Rule Engine → Decision
                    │                   │            │
                    ▼                   ▼            ▼
              Feature Store      Model Registry   Rule Config
```

**Redundancy**:
- Level 1: ML model (highest accuracy, highest latency)
- Level 2: Rule engine (good accuracy, lowest latency)
- Level 3: Block transaction for manual review (safest)

**Test**: Adversarial transactions, latency under load, model drift detection.

**Ship**: Log every decision with features, model score, and rule matches. Alert on false positive rate spikes.

## The Takeaway

Designing AI systems that solve critical problems isn't about having the best model — it's about having the best **system design**. The DARTS framework helps you:

1. **Define** problems precisely so you know what success looks like
2. **Architect** systems that are maintainable and scalable
3. Build **redundancy** so the system never fully fails
4. **Test** at every layer, not just the model
5. **Ship** with observability so you can improve over time

The model is just one component. The system is what delivers value.

---

*This framework is based on my experience building production AI systems for healthcare, finance, and data automation. Every lesson came from real failures — and the systems that worked because I designed for failure from the start.*
