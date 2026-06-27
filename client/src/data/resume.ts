// Resume Data for J. Ganesh Kumar Reddy

export const personalInfo = {
  name: "J. Ganesh Kumar Reddy",
  firstName: "Ganesh",
  lastName: "Kumar Reddy",
  email: "kumarreddyganesh126@gmail.com",
  phone: "+91 96180 59142",
  github: "Ganesh172919",
  githubUrl: "https://github.com/Ganesh172919",
  linkedin: "j-ganesh-kumar-reddy",
  linkedinUrl: "https://www.linkedin.com/in/j-ganesh-kumar-reddy-b65693274",
  location: "India",
  roles: [
    "AI/ML Engineer",
    "LLM Fine-Tuning & RAG Systems",
    "Startup Founder & Builder"
  ],
  rotatingTags: [
    "LLM Fine-Tuning (LoRA/QLoRA/PEFT)",
    "Building RAG Systems",
    "Generative AI Applications",
    "Deep Learning & Transformers",
    "Multi-Agent Workflows",
    "Production ML Systems",
    "Systems Thinking",
    "Solving Complex Problems"
  ],
  summary: "Data Science & AI undergraduate (B.Tech, IIIT Dharwad — CGPA 8.35) with a Minor in Generative AI (CGPA 9.33). A curious, passionate builder who thrives on complex problems — deep thinking and systems thinking drive every project. Started coding at 15, founded an AI startup at 16. Specializing in LLM fine-tuning, RAG systems, generative AI, and production ML deployments. Shipped multiple real-world production systems for interactive learning, fixed complex bugs in distributed architectures, and learned new domains fast to deliver solutions. Mentored 100+ students. Always building something cool.",
  highlights: {
    researcher: "Deep-diving into LLM fine-tuning (LoRA/QLoRA/PEFT), generative AI architectures, RAG pipeline optimization, and foundational model training. A deep thinker who doesn't just use AI tools — I understand the systems beneath them and push their boundaries through hands-on experimentation.",
    learner: "A curious mind that learns fast and thinks in systems. Started coding at 15, founded AI startup at 16. 9.33 CGPA in GenAI Minor. Competitive programmer — LeetCode Knight, CodeChef 4★ (1960). 500+ problems solved. I pick up new technologies quickly and apply them to real-world production problems. Mentored 100+ students on DSA, ML, and engineering.",
    builder: "Passionate about building cool stuff that works in production. Deployed multiple real-world systems — multi-agent AI copilots, RAG-powered chatbots, automated ML pipelines, interactive learning platforms. I fix complex bugs, architect scalable solutions, and ship products that solve real problems. Every project is a system design challenge I enjoy solving."
  }
};

export const education = [
  {
    id: 1,
    degree: "B.Tech Major in Data Science and AI",
    institution: "IIIT Dharwad",
    period: "2023 - 2027",
    cgpa: "8.35",
    highlight: true
  },
  {
    id: 2,
    degree: "B.Tech Minor in Generative AI",
    institution: "IIIT Dharwad",
    period: "2024 - 2026",
    cgpa: "9.33",
    highlight: true,
    courses: "Foundations of AI/ML/DL, LLMs, Generative AI, AI Agents"
  },
  {
    id: 3,
    degree: "Senior Secondary",
    institution: "Andhra Pradesh State Board of Intermediate Education",
    period: "2021 - 2023",
    cgpa: "94.9%",
    highlight: false
  }
];

export const projects = [
  {
    id: "personal-finance-assistant",
    title: "Personal Finance Assistant",
    shortTitle: "Finance AI Startup",
    subtitle: "Open-Source AI Startup — Multi-Agent Financial Copilot",
    period: "Aug 2025 - Present",
    technologies: ["Python", "LangChain", "LangGraph", "FastAPI", "Google Gemini API", "React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "Docker", "Prometheus", "OpenTelemetry"],
    category: "Startup",
    description: "Founder & lead engineer of an open-source multi-agent AI startup. LangGraph DAG routing + Google Gemini for anomaly detection, budget reallocation, receipt OCR, and autonomous financial planning — building toward production-scale deployment.",
    fullDescription: "An open-source startup product: a sophisticated multi-agent financial AI copilot leveraging LangChain and LangGraph for intelligent financial planning. Features autonomous agents for anomaly detection, budget reallocation, receipt OCR, and multi-step financial plans. Production-grade back-end with 100+ RESTful API endpoints, distributed job processing with BullMQ, JWT/OAuth2 security, and comprehensive AI observability with Prometheus + OpenTelemetry. Currently focused on scaling and open-source community building.",
    highlights: [
      "Startup founder — open-source multi-agent AI product",
      "Multi-agent AI Copilot with LangGraph DAG routing",
      "100+ RESTful API endpoints with Zod validation",
      "Redis caching + Prometheus + OpenTelemetry observability",
      "BullMQ distributed job processing + JWT/OAuth2 + TOTP 2FA"
    ],
    architecture: {
      agents: ["Budget Analyzer", "Anomaly Detector", "Receipt OCR", "Goal Planner"],
      flow: "User Query → Orchestrator Agent → Specialized Agents → Response Synthesis",
      storage: "MongoDB (48 Mongoose models) + Redis caching"
    },
    challenges: [
      "Coordinating multiple agents for coherent responses",
      "Building AI observability with Prometheus + OpenTelemetry",
      "Scaling open-source community and product adoption"
    ],
    githubUrl: "https://github.com/Ganesh172919/personal-finance",
    liveUrl: "#",
    featured: true
  },
  {
    id: "medical-llm-application",
    title: "Medical LLM Application",
    shortTitle: "Medical LLM",
    subtitle: "Domain Chatbot with Fine-Tuned LLM & Advanced RAG",
    period: "Mar 2025 - Present",
    technologies: ["Python", "PyTorch", "HuggingFace Transformers", "LoRA", "QLoRA", "PEFT", "LangChain", "Google Gemini API", "PubMed API", "ChromaDB", "FastAPI", "MongoDB", "WebSocket", "JWT", "pytest"],
    category: "AI Agents",
    description: "Domain-specific medical chatbot with multi-technique fine-tuning (LoRA, QLoRA, PEFT, adapter layers) on MEDQUAD dataset. Advanced RAG pipeline with ChromaDB vector retrieval, PubMed API evidence grounding, and NLP-based intelligent query routing for accurate, evidence-backed medical responses.",
    fullDescription: "A comprehensive medical AI application featuring multi-technique LLM fine-tuning (LoRA, QLoRA, PEFT, adapter-based approaches) on the MEDQUAD dataset with systematic evaluation using BLEU/ROUGE metrics. Advanced multi-stage RAG pipeline combining ChromaDB vector retrieval with PubMed API for evidence-backed responses. NLP-based query classification intelligently routes prompts between local fine-tuned model, Gemini API, and PubMed retrieval. Features hybrid search (semantic + keyword), re-ranking for retrieval quality, context window optimization, and hallucination mitigation through source attribution. Includes WebSocket streaming, JWT authentication, rate limiting, and comprehensive pytest test suite.",
    highlights: [
      "Multi-technique fine-tuning: LoRA, QLoRA, PEFT, adapter layers on MEDQUAD",
      "BLEU/ROUGE systematic evaluation & statistical benchmarking",
      "Advanced RAG: ChromaDB + PubMed API + hybrid search + re-ranking",
      "NLP-based query classification & intelligent routing",
      "Hallucination mitigation via source attribution & context optimization",
      "WebSocket streaming + JWT auth + rate limiting + pytest"
    ],
    architecture: {
      agents: [],
      flow: "Query → NLP Classification → Route (Local LLM / Gemini / PubMed) → Hybrid RAG (Semantic + Keyword) → Re-ranking → Source Attribution → Response",
      storage: "MongoDB + ChromaDB (Vector DB) + PubMed API"
    },
    challenges: [
      "Optimizing multi-technique fine-tuning with limited compute",
      "Building advanced RAG with hybrid search and re-ranking for retrieval quality",
      "Minimizing hallucinations through evidence-backed source attribution"
    ],
    githubUrl: "https://github.com/Ganesh172919/React-App-LLM",
    liveUrl: "#",
    featured: true
  },
  {
    id: "synthetic-data-generator",
    title: "Synthetic Data Generator",
    shortTitle: "Synthetic Data Gen",
    subtitle: "Fully Automated LLM-Driven Data Pipeline — Zero Manual Effort",
    period: "Dec 2025 - Present",
    technologies: ["Python", "Mistral-7B-Instruct", "LoRA", "PEFT", "LLM Fine-Tuning", "Docker Compose", "Node.js", "Express.js", "React.js"],
    category: "AI Agents",
    description: "Fully automated synthetic data pipeline where the LLM handles everything — schema inference, domain adaptation, prompt generation, quality filtering, deduplication, and validation — zero manual effort. Mistral-7B (4-bit quantized) achieves 167 Q&A pairs/min on a T4 GPU with complete data privacy.",
    fullDescription: "A zero-manual-effort AI data generation system: the LLM autonomously handles the entire pipeline — schema inference, domain-specific prompt generation, quality scoring, statistical filtering, MD5-based deduplication, and format validation. Built with Mistral-7B (4-bit quantized) for high-throughput generation (167 Q&A pairs/min on T4 GPU) with FlashAttention 2, checkpoint-based crash recovery, and async buffered I/O. Features 6 domain templates, multi-format export (JSONL/CSV/JSON) compatible with HuggingFace fine-tuning pipelines, and Docker Compose deployment. The system requires no human intervention from schema input to final dataset export.",
    highlights: [
      "Fully automated — LLM handles schema, generation, filtering, dedup, validation",
      "167 Q&A pairs/min with Mistral-7B (4-bit quantized) on T4 GPU",
      "Zero external API calls — complete data privacy",
      "FlashAttention 2 + checkpoint-based crash recovery",
      "MD5 deduplication + quality scoring + async buffered I/O",
      "Docker Compose deployment with 6 domain templates + multi-format export"
    ],
    architecture: {
      agents: ["Schema Interpreter", "Prompt Generator", "Domain Adapter", "Quality Scorer", "Deduplication Engine", "Format Validator"],
      flow: "Schema Input → LLM Prompt Generation → Domain Adaptation → LLM Generation → Quality Scoring → Filtering → Deduplication → Validation → Multi-format Export",
      storage: "Local file system + JSONL/CSV/JSON export"
    },
    challenges: [
      "Eliminating all manual intervention while maintaining data quality",
      "Optimizing Mistral-7B with 4-bit quantization for T4 GPU",
      "Building fault-tolerant pipeline with checkpoint-based crash recovery"
    ],
    githubUrl: "https://github.com/Ganesh172919/Synthetic-Data-Generator-1",
    liveUrl: "#",
    featured: true
  },
  {
    id: "foundational-llm-training",
    title: "Foundational LLM Training",
    shortTitle: "Custom LLM",
    subtitle: "Training a Small Language Model with Custom Architecture",
    period: "2025 - Present",
    technologies: ["Python", "PyTorch", "HuggingFace Transformers", "LoRA", "QLoRA", "PEFT", "FlashAttention", "Custom Architecture", "Tokenizers"],
    category: "AI Agents",
    description: "Training a very small foundational language model with custom architecture from scratch — focused on efficient reasoning capabilities through architectural innovations and targeted fine-tuning for improved chain-of-thought and problem-solving.",
    fullDescription: "Research and engineering project focused on training a small foundational language model with a custom transformer architecture optimized for reasoning tasks. Involves designing efficient attention mechanisms, custom tokenization strategies, and training pipelines optimized for constrained hardware. Fine-tuning with LoRA/QLoRA/PEFT for improved chain-of-thought reasoning, mathematical problem-solving, and code generation. Emphasis on architectural efficiency — making small models reason well through smart design choices rather than scale.",
    highlights: [
      "Custom transformer architecture optimized for reasoning",
      "Small model training on constrained hardware",
      "Fine-tuning with LoRA/QLoRA/PEFT for chain-of-thought",
      "Efficient attention mechanisms and tokenization",
      "Targeted reasoning and problem-solving capabilities"
    ],
    architecture: {
      agents: [],
      flow: "Architecture Design → Tokenizer Training → Pre-training → Fine-tuning (LoRA/QLoRA) → Evaluation → Iteration",
      storage: "Custom training pipeline + HuggingFace Hub"
    },
    challenges: [
      "Designing efficient architecture for small-scale reasoning",
      "Training on constrained GPU hardware",
      "Achieving competitive reasoning with minimal parameters"
    ],
    githubUrl: "https://github.com/Ganesh172919",
    liveUrl: "#",
    featured: true
  },
  {
    id: "ai-auto-news",
    title: "AI Auto News",
    shortTitle: "Auto News",
    subtitle: "Serverless AI-Powered Continuous News Platform",
    period: "2025 - Present",
    technologies: ["Python", "AI/ML", "Serverless", "Web Scraping", "NLP", "React.js", "API Integration"],
    category: "Full-Stack",
    description: "A serverless website for continuous automated news updation — AI-powered news aggregation, summarization, and real-time delivery without any manual intervention.",
    fullDescription: "An AI-powered serverless news platform that continuously aggregates, summarizes, and delivers news without manual effort. Uses NLP for topic classification, automated summarization, and relevance scoring. Serverless architecture ensures zero-maintenance deployment with automatic scaling. Features real-time updates, personalized feeds, and AI-driven content curation.",
    highlights: [
      "Serverless architecture — zero maintenance, auto-scaling",
      "AI-powered news aggregation and summarization",
      "Continuous automated updation — no manual intervention",
      "NLP-based topic classification and relevance scoring",
      "Real-time delivery with personalized feeds"
    ],
    architecture: {
      agents: [],
      flow: "News Sources → AI Aggregation → NLP Classification → Summarization → Relevance Scoring → Serverless Delivery",
      storage: "Serverless backend + CDN delivery"
    },
    challenges: [
      "Building reliable automated news aggregation pipelines",
      "Ensuring AI summarization accuracy and relevance",
      "Serverless architecture design for continuous operation"
    ],
    githubUrl: "https://github.com/Ganesh172919/Problem_solve",
    liveUrl: "#",
    featured: false
  },
  {
    id: "competitive-programming",
    title: "Problem Solving & Competitive Programming",
    shortTitle: "Competitive Coding",
    subtitle: "500+ Solutions Across Platforms",
    period: "2023 - Present",
    technologies: ["C++", "Python", "Algorithms", "Data Structures", "Dynamic Programming", "Graph Theory", "Segment Trees"],
    category: "Performance",
    description: "Curated repository of 500+ competitive programming solutions across LeetCode, CodeChef, and Codeforces — covering dynamic programming, graph algorithms, segment trees, binary search, and number theory.",
    fullDescription: "A comprehensive repository of 500+ competitive programming solutions spanning LeetCode (Knight, 340+ problems, WC 435 Rank 553), CodeChef (4★, Rating 1960, Global Rank 1923), and Codeforces (Pupil, Rating 1227). Covers dynamic programming, graph algorithms, segment trees, binary search, number theory, and advanced data structures.",
    highlights: [
      "LeetCode Knight — 340+ problems, WC 435 Rank 553",
      "CodeChef 4★ — Rating 1960, Global Rank 1923",
      "Codeforces Pupil — Rating 1227",
      "500+ problems across platforms",
      "DP, graphs, segment trees, number theory"
    ],
    architecture: {
      agents: [],
      flow: "Problem Analysis → Algorithm Design → Implementation → Optimization",
      storage: "GitHub repository with categorized solutions"
    },
    challenges: [
      "Solving hard graph theory problems",
      "Optimizing solutions for tight time limits",
      "Implementing advanced data structures from scratch"
    ],
    githubUrl: "https://github.com/Ganesh172919/Problem_solve",
    liveUrl: "#",
    featured: false
  }
];

export const skills = {
  programming: {
    title: "Programming Languages",
    items: [
      { name: "Python", level: 95, featured: true },
      { name: "JavaScript", level: 90, featured: true },
      { name: "TypeScript", level: 85, featured: true },
      { name: "C++", level: 85, featured: true },
      { name: "Java", level: 75 },
      { name: "C", level: 75 },
      { name: "Scala", level: 50 }
    ]
  },
  aiml: {
    title: "AI / ML / DL",
    items: [
      { name: "Generative AI & LLMs", level: 92, featured: true },
      { name: "LLM Fine-Tuning (LoRA/QLoRA/PEFT)", level: 90, featured: true },
      { name: "RAG Systems & Pipelines", level: 92, featured: true },
      { name: "Deep Learning (CNNs, RNNs, Transformers)", level: 88, featured: true },
      { name: "Machine Learning (Classical + Modern)", level: 88, featured: true },
      { name: "NLP & Text Processing", level: 88, featured: true },
      { name: "Prompt Engineering", level: 95, featured: true },
      { name: "Model Evaluation & Benchmarking", level: 85 },
      { name: "Explainable AI (SHAP/LIME)", level: 80 }
    ]
  },
  aiAreas: {
    title: "AI Frameworks",
    items: [
      { name: "PyTorch", level: 90, featured: true },
      { name: "HuggingFace Transformers", level: 90, featured: true },
      { name: "LangChain", level: 92, featured: true },
      { name: "LangGraph", level: 90, featured: true },
      { name: "scikit-learn", level: 88, featured: true },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "OpenAI / Gemini APIs", level: 90, featured: true }
    ]
  },
  mlPipeline: {
    title: "ML & Data Pipeline",
    items: [
      { name: "Feature Engineering", level: 85, featured: true },
      { name: "Data Preprocessing & Augmentation", level: 88 },
      { name: "Vector Databases (ChromaDB, FAISS)", level: 85, featured: true },
      { name: "Embedding Models & Semantic Search", level: 88, featured: true },
      { name: "Model Quantization (4-bit, GPTQ)", level: 82 },
      { name: "Distributed Training", level: 75 },
      { name: "MLOps & Experiment Tracking", level: 78 }
    ]
  },
  backend: {
    title: "Back-End & APIs",
    items: [
      { name: "Python (FastAPI, Flask)", level: 90, featured: true },
      { name: "Node.js / Express.js", level: 88, featured: true },
      { name: "RESTful API Design", level: 92, featured: true },
      { name: "WebSocket", level: 82 },
      { name: "JWT/OAuth2", level: 85 },
      { name: "BullMQ (Message Queues)", level: 78 },
      { name: "Redis", level: 82, featured: true }
    ]
  },
  infrastructure: {
    title: "AI Infrastructure",
    items: [
      { name: "Docker / Docker Compose", level: 85, featured: true },
      { name: "Prometheus", level: 78, featured: true },
      { name: "OpenTelemetry", level: 75 },
      { name: "4-bit Quantization", level: 80 },
      { name: "FlashAttention", level: 75 },
      { name: "CI/CD Pipelines", level: 78 }
    ]
  },
  databases: {
    title: "Databases",
    items: [
      { name: "MongoDB", level: 88, featured: true },
      { name: "PostgreSQL", level: 82 },
      { name: "ChromaDB (Vector DB)", level: 85, featured: true },
      { name: "Redis", level: 82, featured: true },
      { name: "MySQL", level: 78 }
    ]
  },
  tools: {
    title: "Testing & Tools",
    items: [
      { name: "pytest / unittest", level: 85, featured: true },
      { name: "Git & GitHub", level: 92 },
      { name: "Linux", level: 85 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "Matplotlib / Seaborn", level: 82 },
      { name: "AWS (basics)", level: 65 },
      { name: "Hugging Face Hub", level: 85 }
    ]
  }
};

export const achievements = {
  coding: [
    {
      platform: "LeetCode",
      stats: "Knight · 340+ Solved",
      rating: "Weekly Contest 435 — Rank 553",
      icon: "code",
      color: "#FFA116",
      url: "https://leetcode.com/u/ganeshrgk1/"
    },
    {
      platform: "CodeChef",
      stats: "4★ · Rating 1960",
      rating: "Global Rank 1923 · Country Rank 1468",
      icon: "chef-hat",
      color: "#5B4638",
      url: "https://www.codechef.com/users/ganesh_352004"
    },
    {
      platform: "Codeforces",
      stats: "Pupil · Rating 1227",
      rating: "Max Rating 1227",
      icon: "trophy",
      color: "#318CE7",
      url: "https://codeforces.com/profile/Ganesh_iiit"
    },
    {
      platform: "Total Problems",
      stats: "500+ Solved",
      rating: "Across All Platforms",
      icon: "trophy",
      color: "#6366f1",
      url: "#"
    }
  ],
  hackathons: [
    {
      name: "Smart India Hackathon (SIH)",
      achievement: "Participant — AI-powered solution under competitive constraints",
      year: "2025",
      color: "#10b981"
    },
    {
      name: "Adobe GenAI Hackathon",
      achievement: "Participant — GenAI product prototyping",
      year: "2025",
      color: "#FF0000"
    },
    {
      name: "Amazon ML Challenge",
      achievement: "Participant — ML pipeline under time constraints",
      year: "2025",
      color: "#FF9900"
    }
  ],
  academic: [
    {
      title: "JEE Mains",
      achievement: "Top 5% among 1M+ participants",
      icon: "graduation-cap"
    },
    {
      title: "NTSE Stage 1",
      achievement: "Top 1%",
      icon: "award"
    },
    {
      title: "IAPT & Pre-RMO",
      achievement: "Olympiads Qualified",
      icon: "medal"
    },
    {
      title: "Class 12 State Board",
      achievement: "Top 1%",
      icon: "star"
    }
  ],
  startup: {
    title: "Startup Founder & Open Source",
    description: "Founded an open-source AI startup at 16, started coding at 15. Building efficient local AI systems — multi-agent financial copilot (LangGraph), domain-specific SLM fine-tuning pipelines, and automated synthetic data generation. Mentored 100+ students on DSA, internships, career guidance, and web development. Active open-source contributor to NanaChat and community AI projects."
  }
};

export const technicalExperience = [
  {
    id: 1,
    title: "AI Engineering & Startup Product Development",
    period: "2024 – Present",
    technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "Google Gemini", "HuggingFace Transformers", "LoRA", "QLoRA", "PyTorch", "Prompt Engineering", "Model Evaluation", "Docker"],
    highlights: [
      "Founded and building an open-source AI startup — independently designed and shipped production-grade multi-agent financial AI copilot (LangGraph + Gemini), medical LLM chatbot with advanced RAG, and fully automated synthetic data pipeline across 4+ repositories.",
      "Training foundational small language models with custom architectures; fine-tuning domain-specific LLMs using LoRA/QLoRA/PEFT with BLEU/ROUGE evaluation and systematic benchmarking.",
      "Orchestrated multi-agent AI systems via LangGraph DAG routing, built multi-stage RAG pipelines with hybrid search and re-ranking, and developed AI infrastructure with Prometheus observability and distributed processing."
    ]
  },
  {
    id: 2,
    title: "Full-Stack & Back-End Systems Engineering",
    period: "2024 – Present",
    technologies: ["Python", "FastAPI", "Node.js", "Express.js", "React.js", "TypeScript", "MongoDB", "Redis", "BullMQ", "JWT/OAuth2", "TOTP 2FA", "pytest", "Docker", "Prometheus", "OpenTelemetry"],
    highlights: [
      "Designed and shipped production-grade full-stack systems — REST API architecture (100+ endpoints, Zod validation, versioned routing) to React 18 TypeScript frontends — applying clean layered architecture, SOLID principles, and OOP design patterns.",
      "Built distributed, fault-tolerant back-end services with Redis-backed BullMQ job queues, WebSocket real-time streaming, checkpoint-based crash recovery, and async buffered processing for high-throughput workloads.",
      "Architected secure multi-tenant services with JWT/OAuth2, TOTP 2FA, CSRF protection, bcrypt hashing, OTP email verification, and rate limiting — enterprise-grade security standards."
    ]
  }
];

export const openSourceContributions = [
  {
    name: "NanaChat — Open-Source AI Chat Platform",
    description: "Contributing to NanaChat, an open-source AI-powered chat platform — implementing feature enhancements, performance improvements, and bug fixes across the full-stack codebase. Engaging in code reviews and community-driven development.",
    githubUrl: "https://github.com/Ganesh172919"
  },
  {
    name: "Personal Finance AI Copilot — Open-Source Startup",
    description: "Founder & lead engineer — open-sourcing the multi-agent LangGraph financial AI copilot as a standalone product. Building efficient local AI systems with domain-specific fine-tuning pipelines and automated synthetic data generation.",
    githubUrl: "https://github.com/Ganesh172919/personal-finance"
  },
  {
    name: "Problem Solving Repository",
    description: "Maintaining a comprehensive repository of 500+ competitive programming solutions and AI/ML project implementations — open-source contributions to the developer community.",
    githubUrl: "https://github.com/Ganesh172919/Problem_solve"
  }
];

export const research = {
  current: [
    {
      title: "Foundational SLM Training",
      description: "Training a very small language model with custom architecture — focused on efficient reasoning through architectural innovations and targeted fine-tuning",
      status: "In Progress",
      tags: ["SLMs", "Custom Architecture", "Fine-Tuning", "Reasoning"]
    },
    {
      title: "LLM Fine-Tuning Experiments",
      description: "Systematic experimentation with LoRA, QLoRA, PEFT, and adapter-based fine-tuning across multiple LLM architectures — optimizing for domain-specific reasoning, code generation, and medical QA with BLEU/ROUGE benchmarking",
      status: "Active",
      tags: ["LoRA", "QLoRA", "PEFT", "Fine-Tuning", "Evaluation"]
    },
    {
      title: "RAG Pipeline Optimization",
      description: "Building and optimizing advanced RAG systems — hybrid search (semantic + keyword), re-ranking strategies, context window management, and hallucination mitigation through source attribution",
      status: "Active",
      tags: ["RAG", "Vector DB", "Hybrid Search", "Re-ranking"]
    },
    {
      title: "Multi-Agent Workflow Systems",
      description: "Designing and scaling multi-agent systems with LangGraph for complex task automation and financial AI workflows",
      status: "Ongoing",
      tags: ["LangGraph", "Multi-Agent", "Automation"]
    }
  ],
  future: [
    {
      title: "Generative AI Applications",
      description: "Exploring novel generative AI applications — synthetic data pipelines, AI-powered content creation, and autonomous research agents"
    },
    {
      title: "SLM Edge Inference",
      description: "Optimizing small language models for efficient edge deployment and real-time inference on constrained hardware"
    },
    {
      title: "Production ML Systems",
      description: "Building robust ML pipelines — model versioning, A/B testing, drift detection, and automated retraining for production AI systems"
    }
  ]
};

export const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
  { name: "Learn", href: "/learn" }
];

// Blog preview data for the homepage Blog section
// Keep in sync with markdown frontmatter in src/content/posts/
export const blogPreview = [
  {
    slug: 'ai-system-design-critical-problems',
    title: "Designing AI Systems That Solve Critical Problems — A Practical Framework",
    excerpt: "Most AI projects fail not because of bad models, but because of bad system design. Here's the DARTS framework I use to design AI systems that actually solve critical real-world problems.",
    category: 'System Design',
    readTime: '12 min read',
    date: 'Jun 27, 2026',
    featured: true,
  },
  {
    slug: 'i-dont-trust-ai-tools',
    title: "I Don't Trust AI Tools — Until I Understand the System Beneath Them",
    excerpt: "Every week, a new AI tool launches. But the more tools I used, the less I actually understood. AI tools don't remove complexity — they hide it. Here's how I learned to think in systems.",
    category: 'AI Philosophy',
    readTime: '8 min read',
    date: 'Feb 4, 2026',
    featured: true,
  },
  {
    slug: 'why-reading-ai-research-feels-impossible',
    title: 'Why Reading AI Research Feels Impossible (And How I Fixed It)',
    excerpt: "AI papers feel like dense math, new terminology every paragraph, and assumptions you were 'supposed to already know'. The problem wasn't my intelligence — it was my approach.",
    category: 'Learning',
    readTime: '7 min read',
    date: 'Feb 4, 2026',
    featured: true,
  },
  {
    slug: 'building-ai-systems-taught-me-more',
    title: 'Building AI Systems Taught Me More Than Any Model Ever Could',
    excerpt: "I believed mastering AI meant knowing PyTorch deeply. What actually made me better? Building end-to-end AI systems — because most failures aren't model failures, they're system failures.",
    category: 'AI Engineering',
    readTime: '7 min read',
    date: 'Feb 4, 2026',
    featured: false,
  },
  {
    slug: 'ai-didnt-kill-coding',
    title: "AI Didn't Kill Coding — It Exposed Who Actually Understands It",
    excerpt: "People ask: 'Is coding dead?' Syntax was never the real skill. AI exposed this brutally — and created a clear split between developers who understand systems and those who just write code.",
    category: 'Industry Insights',
    readTime: '6 min read',
    date: 'Feb 4, 2026',
    featured: false,
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Ganesh172919",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/j-ganesh-kumar-reddy-b65693274",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:kumarreddyganesh126@gmail.com",
    icon: "mail"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/ganeshrgk1/",
    icon: "code"
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/ganesh_352004",
    icon: "code"
  },
  {
    name: "Codeforces",
    url: "https://codeforces.com/profile/Ganesh_iiit",
    icon: "code"
  }
];
