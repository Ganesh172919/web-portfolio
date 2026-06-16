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
    "Generative AI Engineer",
    "Full-Stack Developer",
    "Open Source Contributor"
  ],
  rotatingTags: [
    "Building AI Agents",
    "LLM Fine-Tuning & RAG",
    "Production-grade APIs",
    "Multi-Agent Architectures",
    "Privacy-First AI",
    "Open Source Builder"
  ],
  summary: "Aspiring Generative AI Engineer pursuing B.Tech in Data Science & AI with a Minor in Generative AI (9.33 CGPA) from IIIT Dharwad. Hands-on experience integrating AI/LLMs into production products, building scalable Python RESTful APIs (FastAPI, Flask), and developing AI infrastructure including observability pipelines and caching mechanisms. Proficient in prompt engineering, model evaluation & fine-tuning (LoRA, QLoRA, PEFT), RAG pipelines, and agentic AI workflows (LangChain, LangGraph). Active open-source contributor with a startup founder mindset.",
  highlights: {
    researcher: "Research-first approach with hands-on experiments in LLM fine-tuning (LoRA, QLoRA, PEFT), model evaluation with BLEU/ROUGE metrics, hallucination mitigation, and large context window optimization. Deep understanding of transformer architectures and agent reasoning patterns.",
    learner: "Exceptional academic performance with 9.33 CGPA in GenAI Minor covering AI/ML/DL, LLMs, and AI Agents. Self-taught LangChain, LangGraph, and advanced prompting techniques. 500+ competitive programming problems solved — LeetCode Knight, CodeChef 4★.",
    builder: "Shipped 4+ production-ready AI projects — from multi-agent financial systems to offline LLM deployments. Built 100+ REST API endpoints, AI observability pipelines, and distributed job processing systems. Focus on clean architecture, scalability, and real-world constraints."
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
    shortTitle: "Finance AI Agent",
    subtitle: "AI-Powered Full-Stack Platform",
    period: "Aug 2025 - Nov 2025",
    technologies: ["Python", "LangChain", "LangGraph", "FastAPI", "Google Gemini API", "React.js", "Node.js", "Express.js", "MongoDB", "Redis", "BullMQ", "Docker", "Prometheus", "OpenTelemetry"],
    category: "AI Agents",
    description: "Integrated a multi-agent AI Copilot (LangGraph DAG routing + Google Gemini LLM) into the product, enabling AI-driven anomaly detection, budget reallocation, receipt OCR, and atomic multi-step financial plans.",
    fullDescription: "A sophisticated multi-agent system that leverages LangChain and LangGraph to create intelligent financial planning assistants. Features autonomous agents for anomaly detection, budget reallocation, receipt OCR, and multi-step financial plans. Built with 100+ RESTful API endpoints, distributed job processing with BullMQ, and comprehensive AI observability with Prometheus + OpenTelemetry.",
    highlights: [
      "Multi-agent AI Copilot with LangGraph DAG routing",
      "100+ RESTful API endpoints with Zod validation",
      "Redis caching + Prometheus + OpenTelemetry observability",
      "BullMQ distributed job processing",
      "JWT/OAuth2, TOTP 2FA, CSRF protection"
    ],
    architecture: {
      agents: ["Budget Analyzer", "Anomaly Detector", "Receipt OCR", "Goal Planner"],
      flow: "User Query → Orchestrator Agent → Specialized Agents → Response Synthesis",
      storage: "MongoDB (48 Mongoose models) + Redis caching"
    },
    challenges: [
      "Coordinating multiple agents for coherent responses",
      "Building AI observability with Prometheus + OpenTelemetry",
      "Ensuring accuracy in financial calculations"
    ],
    githubUrl: "https://github.com/Ganesh172919/personal-finance",
    liveUrl: "#",
    featured: true
  },
  {
    id: "medical-llm-application",
    title: "Medical LLM Application",
    shortTitle: "Medical LLM",
    subtitle: "Domain Chatbot with Fine-Tuned LLM & RAG",
    period: "Mar 2025 - Apr 2025",
    technologies: ["Python", "PyTorch", "HuggingFace Transformers", "LoRA", "QLoRA", "PEFT", "Google Gemini API", "PubMed API", "FastAPI", "MongoDB", "WebSocket", "JWT", "pytest"],
    category: "AI Agents",
    description: "Fine-tuned domain-specific medical LLMs using LoRA, QLoRA, and PEFT on the MEDQUAD dataset with BLEU/ROUGE evaluation metrics. Built multi-stage RAG pipeline combining ChromaDB vector retrieval and PubMed API.",
    fullDescription: "A comprehensive medical AI application featuring fine-tuned domain-specific LLMs, multi-stage RAG pipeline with ChromaDB and PubMed API, NLP-based query classification for intelligent routing between local model, Gemini API, and PubMed retrieval. Includes WebSocket streaming, JWT authentication, rate limiting, and comprehensive pytest test suite.",
    highlights: [
      "LLM fine-tuning with LoRA, QLoRA, PEFT on MEDQUAD",
      "BLEU/ROUGE metrics for model evaluation",
      "Multi-stage RAG: ChromaDB + PubMed API",
      "NLP-based query classification & routing",
      "WebSocket streaming + JWT auth + rate limiting"
    ],
    architecture: {
      agents: [],
      flow: "Query → NLP Classification → Route (Local LLM / Gemini / PubMed) → RAG Pipeline → Response",
      storage: "MongoDB + ChromaDB (Vector DB)"
    },
    challenges: [
      "Optimizing fine-tuning with limited compute",
      "Building graceful degradation to Gemini API fallback",
      "Ensuring medical response accuracy"
    ],
    githubUrl: "https://github.com/Ganesh172919/React-App-LLM",
    liveUrl: "#",
    featured: true
  },
  {
    id: "synthetic-data-generator",
    title: "Synthetic Data Generator",
    shortTitle: "Synthetic Data Gen",
    subtitle: "Automated LLM-Driven Data Pipeline",
    period: "Dec 2025 - Jan 2026",
    technologies: ["Python", "Mistral-7B-Instruct", "LoRA", "PEFT", "LLM Fine-Tuning", "Docker Compose", "Node.js", "Express.js", "React.js"],
    category: "AI Agents",
    description: "Built a fully automated data generation pipeline where Mistral-7B (4-bit quantized) autonomously handles schema inference, domain adaptation, quality filtering, and deduplication — achieving 167 Q&A pairs/min on a T4 GPU.",
    fullDescription: "An AI-native product built from the ground up: a fully automated data generation pipeline with Mistral-7B (4-bit quantized) handling schema inference, domain adaptation, quality filtering, and MD5-based deduplication. Features async buffered writing, checkpoint-based crash recovery, FlashAttention 2, and multi-format export (JSONL/CSV/JSON) compatible with HuggingFace fine-tuning pipelines.",
    highlights: [
      "167 Q&A pairs/min with Mistral-7B (4-bit quantized)",
      "Zero external API calls — complete data privacy",
      "FlashAttention 2 + checkpoint-based crash recovery",
      "MD5-based deduplication + async buffered I/O",
      "Docker Compose deployment with 6 domain templates"
    ],
    architecture: {
      agents: ["Schema Interpreter", "Domain Adapter", "Quality Filter", "Deduplication Engine"],
      flow: "Schema Input → LLM Generation → Quality Filtering → Deduplication → Multi-format Export",
      storage: "Local file system + JSONL/CSV/JSON export"
    },
    challenges: [
      "Optimizing Mistral-7B with 4-bit quantization for T4 GPU",
      "Building fault-tolerant pipeline with crash recovery",
      "Maintaining data quality without cloud resources"
    ],
    githubUrl: "https://github.com/Ganesh172919/Synthetic-Data-Generator-1",
    liveUrl: "#",
    featured: true
  },
  {
    id: "ml-pipelines-xai",
    title: "ML Pipelines — Explainable AI & Predictive Analytics",
    shortTitle: "ML Pipelines",
    subtitle: "End-to-End ML with SHAP & LIME",
    period: "2024",
    technologies: ["Python", "scikit-learn", "PyTorch", "SHAP", "LIME", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    category: "Full-Stack",
    description: "Developed end-to-end machine learning pipelines for fraud detection, stroke prediction, and time-series forecasting with SHAP & LIME explainability, statistical analysis, feature engineering, and hyperparameter tuning.",
    fullDescription: "End-to-end machine learning pipelines covering fraud detection, stroke prediction, and time-series forecasting. Features statistical analysis, feature engineering, hyperparameter tuning with scikit-learn and PyTorch. Applied SHAP & LIME for global and per-instance explainability with comprehensive data visualizations.",
    highlights: [
      "Fraud detection & stroke prediction models",
      "SHAP & LIME explainability analysis",
      "Statistical feature engineering",
      "Comprehensive data visualizations",
      "Hyperparameter tuning pipelines"
    ],
    architecture: {
      agents: [],
      flow: "Data Loading → EDA → Feature Engineering → Model Training → SHAP/LIME Analysis → Evaluation",
      storage: "Jupyter Notebook with documented experiments"
    },
    challenges: [
      "Handling class imbalance in fraud detection",
      "Implementing per-instance SHAP explanations",
      "Optimizing time-series forecasting accuracy"
    ],
    githubUrl: "https://github.com/Ganesh172919",
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
    fullDescription: "A comprehensive repository of 500+ competitive programming solutions spanning LeetCode (Knight, 340+ problems, WC 435 Rank 553), CodeChef (4★, Rating 1960), and Codeforces (Pupil, Rating 1227). Covers dynamic programming, graph algorithms, segment trees, binary search, number theory, and advanced data structures.",
    highlights: [
      "LeetCode Knight — 340+ problems, WC 435 Rank 553",
      "CodeChef 4★ — Rating 1960",
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
    githubUrl: "https://github.com/Ganesh172919",
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
    title: "AI / ML",
    items: [
      { name: "Generative AI & LLMs", level: 92, featured: true },
      { name: "Prompt Engineering", level: 95, featured: true },
      { name: "LLM Fine-Tuning (LoRA/QLoRA/PEFT)", level: 88, featured: true },
      { name: "RAG Pipelines", level: 90, featured: true },
      { name: "Model Evaluation", level: 85, featured: true },
      { name: "NLP", level: 85 },
      { name: "Explainable AI (SHAP/LIME)", level: 80 }
    ]
  },
  aiAreas: {
    title: "AI Frameworks",
    items: [
      { name: "LangChain", level: 92, featured: true },
      { name: "LangGraph", level: 90, featured: true },
      { name: "HuggingFace Transformers", level: 88, featured: true },
      { name: "PyTorch", level: 88, featured: true },
      { name: "TensorFlow", level: 80 },
      { name: "scikit-learn", level: 88, featured: true }
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
      { name: "ChromaDB (Vector DB)", level: 80, featured: true },
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
      { name: "Hugging Face Hub", level: 80 }
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
      rating: "Active Competitor",
      icon: "chef-hat",
      color: "#5B4638",
      url: "https://www.codechef.com/users/ganesh_352004"
    },
    {
      platform: "Codeforces",
      stats: "Pupil · Rating 1227",
      rating: "Active Competitor",
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
      achievement: "Participant",
      year: "2025",
      color: "#10b981"
    },
    {
      name: "Adobe GenAI Hackathon",
      achievement: "Participant",
      year: "2025",
      color: "#FF0000"
    },
    {
      name: "Amazon ML Challenge",
      achievement: "Participant",
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
    title: "Startup & Open Source",
    description: "Founder of an open-source multi-agent AI startup (open-sourcing LangGraph financial copilot); active open-source contributor to NanaChat and community AI projects."
  }
};

export const technicalExperience = [
  {
    id: 1,
    title: "AI Engineering & Product Integration",
    period: "2024 – Present",
    technologies: ["Python", "FastAPI", "LangChain", "LangGraph", "Google Gemini", "HuggingFace Transformers", "LoRA", "QLoRA", "Prompt Engineering", "Model Evaluation", "Docker"],
    highlights: [
      "Integrated AI technologies into existing products and built AI-native applications from the ground up across 4+ repositories — conducting prompt engineering, model evaluation, and LLM fine-tuning (LoRA/QLoRA/PEFT) for domain-specific use cases.",
      "Orchestrated multi-agent AI systems via LangGraph DAG routing and built multi-stage RAG pipelines with vector retrieval.",
      "Developed AI infrastructure including observability tools (Prometheus, OpenTelemetry), Redis caching mechanisms, checkpoint-based crash recovery, and 4-bit quantized model serving."
    ]
  },
  {
    id: 2,
    title: "Software & API Development",
    period: "2024 – Present",
    technologies: ["Python", "FastAPI", "Node.js", "Express.js", "React.js", "TypeScript", "MongoDB", "Redis", "BullMQ", "JWT/OAuth2", "pytest", "Docker"],
    highlights: [
      "Designed and developed RESTful APIs using Python to integrate AI models seamlessly into applications; built production-grade back-end systems (100+ endpoints, Zod validation, versioned routing) with clean layered architecture and SOLID principles.",
      "Collaborated with cross-functional teams and participated in code reviews; wrote and maintained unit tests (pytest, unittest) to ensure AI model reliability and quality assurance.",
      "Applied best practices in coding, testing, and documentation across all projects; optimized AI applications for performance, scalability, and security."
    ]
  }
];

export const openSourceContributions = [
  {
    name: "NanaChat — Open-Source AI Chat Platform",
    description: "Contributed to NanaChat, an open-source AI-powered chat platform — implementing feature enhancements, performance improvements, and bug fixes across the full-stack codebase.",
    githubUrl: "https://github.com/Ganesh172919"
  },
  {
    name: "Multi-Agent LangGraph Financial AI Copilot",
    description: "Actively building toward open-sourcing the multi-agent LangGraph financial AI copilot as a standalone open-source product — demonstrating commitment to community-driven AI tooling.",
    githubUrl: "https://github.com/Ganesh172919/personal-finance"
  }
];

export const research = {
  current: [
    {
      title: "LLM Fine-Tuning Experiments",
      description: "Exploring efficient fine-tuning techniques for domain-specific LLMs using LoRA and QLoRA approaches",
      status: "In Progress",
      tags: ["LLMs", "Fine-Tuning", "LoRA"]
    },
    {
      title: "Large Context Window Exploration",
      description: "Investigating methods to effectively utilize and optimize large context windows in modern LLMs",
      status: "Research",
      tags: ["Context Windows", "LLMs", "Optimization"]
    },
    {
      title: "AI Hallucination Mitigation",
      description: "Developing techniques to reduce hallucinations in LLM outputs through retrieval augmentation and validation",
      status: "Ongoing",
      tags: ["RAG", "Validation", "Quality"]
    }
  ],
  future: [
    {
      title: "Agent Memory & Planning",
      description: "Building persistent memory systems for AI agents with long-term planning capabilities"
    },
    {
      title: "Multi-Modal Agents",
      description: "Extending agent architectures to handle vision, audio, and text seamlessly"
    },
    {
      title: "Federated Learning for Privacy",
      description: "Implementing privacy-preserving model training across distributed systems"
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
    slug: 'i-dont-trust-ai-tools',
    title: "I Don't Trust AI Tools — Until I Understand the System Beneath Them",
    excerpt: "Every week, a new AI tool launches. Agents. IDE copilots. AutoGPTs. But I noticed something: the more tools I used, the less I actually understood. AI tools don't remove complexity — they hide it.",
    category: 'AI Philosophy',
    readTime: '5 min read',
    date: 'Feb 4, 2026',
    featured: true,
  },
  {
    slug: 'why-reading-ai-research-feels-impossible',
    title: 'Why Reading AI Research Feels Impossible (And How I Fixed It)',
    excerpt: "AI papers feel like dense math, new terminology every paragraph, and assumptions you were 'supposed to already know'. For a long time, I thought maybe I'm not research material. That was wrong.",
    category: 'Learning',
    readTime: '6 min read',
    date: 'Feb 4, 2026',
    featured: true,
  },
  {
    slug: 'building-ai-systems-taught-me-more',
    title: 'Building AI Systems Taught Me More Than Any Model Ever Could',
    excerpt: "I believed mastering AI meant knowing PyTorch deeply, training models from scratch, reading cutting-edge papers daily. What actually made me better? Building end-to-end AI systems — even with a basic model.",
    category: 'AI Engineering',
    readTime: '5 min read',
    date: 'Feb 4, 2026',
    featured: false,
  },
  {
    slug: 'ai-didnt-kill-coding',
    title: "AI Didn't Kill Coding — It Exposed Who Actually Understands It",
    excerpt: "People ask: 'Is coding dead?' What they really mean is: 'Is memorizing syntax still valuable?' Syntax was never the real skill. AI exposed this brutally.",
    category: 'Industry Insights',
    readTime: '5 min read',
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
