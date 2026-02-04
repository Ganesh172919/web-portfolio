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
    "AI Architect",
    "GenAI Engineer", 
    "Backend Developer"
  ],
  rotatingTags: [
    "Building AI Agents",
    "LLM Systems",
    "Production-grade AI",
    "Research-Driven Engineering",
    "Multi-Agent Architectures",
    "Privacy-First AI"
  ],
  summary: "AI Architect and problem solver with a research-first mindset. Pursuing B.Tech in Data Science & AI with a Minor in Generative AI (9.33 CGPA). Built 4+ production-grade AI systems including multi-agent financial advisors and privacy-preserving synthetic data generators. Solved 500+ DSA problems demonstrating strong algorithmic thinking. Passionate about bridging cutting-edge research with practical, scalable implementations.",
  highlights: {
    researcher: "Research-first approach with hands-on experiments in LLM fine-tuning, hallucination mitigation, and large context window optimization. Deep understanding of transformer architectures and agent reasoning patterns.",
    learner: "Exceptional academic performance with 9.33 CGPA in GenAI Minor covering AI/ML/DL, LLMs, and AI Agents. Self-taught LangChain, LangGraph, and advanced prompting techniques. 500+ competitive programming problems solved.",
    builder: "Shipped 4+ production-ready AI projects—from multi-agent financial systems to offline LLM deployments. 40% performance optimization on onWings. Focus on clean architecture, scalability, and real-world constraints."
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
    subtitle: "Multi-Agent Financial Intelligence System",
    period: "Aug 2025 - Nov 2025",
    technologies: ["Python", "LangChain", "LangGraph", "React.js", "Node.js", "Express.js", "MongoDB"],
    category: "AI Agents",
    description: "Developed financial AI agents using LangChain and LangGraph to provide personalized financial recommendations and automated planning.",
    fullDescription: "A sophisticated multi-agent system that leverages LangChain and LangGraph to create intelligent financial planning assistants. The system features autonomous agents that can analyze spending patterns, suggest budgets, and provide investment recommendations through natural conversation.",
    highlights: [
      "Multi-agent reasoning with LangGraph",
      "Personalized financial recommendations",
      "Automated planning intelligence",
      "Responsive React dashboard",
      "Real-time data synchronization"
    ],
    architecture: {
      agents: ["Budget Analyzer", "Investment Advisor", "Spending Tracker", "Goal Planner"],
      flow: "User Query → Orchestrator Agent → Specialized Agents → Response Synthesis",
      storage: "MongoDB for persistent memory and transaction history"
    },
    challenges: [
      "Coordinating multiple agents for coherent responses",
      "Handling real-time financial data updates",
      "Ensuring accuracy in financial calculations"
    ],
    githubUrl: "https://github.com/Ganesh172919/personal-finance",
    liveUrl: "#",
    featured: true
  },
  {
    id: "synthetic-data-generator",
    title: "Synthetic Data Generator",
    shortTitle: "Synthetic Data Gen",
    subtitle: "Privacy-First Offline AI System",
    period: "Dec 2025 - Jan 2026",
    technologies: ["Python", "AI Agents", "FastAPI", "React.js", "Mistral-7B"],
    category: "AI Agents",
    description: "Designed and developed an offline synthetic data generation system using a locally hosted Mistral-7B LLM, eliminating dependency on external APIs and ensuring complete data privacy.",
    fullDescription: "An innovative privacy-first synthetic data generation platform that runs entirely offline using a locally hosted Mistral-7B model. The system employs specialized AI agents to interpret user-defined schemas, enforce constraints, and generate high-quality tabular datasets without any external API calls.",
    highlights: [
      "Locally hosted Mistral-7B LLM",
      "Zero external API dependencies",
      "Agent-based schema interpretation",
      "Constraint enforcement system",
      "High-quality tabular data generation"
    ],
    architecture: {
      agents: ["Schema Interpreter", "Constraint Validator", "Data Generator", "Quality Checker"],
      flow: "Schema Input → Agent Collaboration → Data Generation → Validation → Output",
      storage: "Local file system with export options"
    },
    challenges: [
      "Optimizing Mistral-7B for local hardware",
      "Maintaining data quality without cloud resources",
      "Complex constraint handling"
    ],
    githubUrl: "https://github.com/Ganesh172919/Synthetic-Data-Generator-1",
    liveUrl: "#",
    featured: true
  },
  {
    id: "medical-chat-application",
    title: "Medical Chat Application",
    shortTitle: "Medical Chat",
    subtitle: "Real-Time ML-Powered Healthcare Chat",
    period: "Mar 2025 - Apr 2025",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "JWT"],
    category: "Full-Stack",
    description: "Integrated WebSockets to enable real-time message updates and connected a trained medical ML model via API to provide specialized, context-aware responses.",
    fullDescription: "A comprehensive medical chat application featuring real-time communication through WebSockets, secure JWT-based authentication, and integration with a trained ML model for medical queries. The system efficiently stores and retrieves chat histories with a well-structured database schema.",
    highlights: [
      "Real-time WebSocket messaging",
      "Medical ML model integration",
      "JWT-based secure authentication",
      "Context-aware responses",
      "Efficient chat history management"
    ],
    architecture: {
      agents: [],
      flow: "User Message → WebSocket Server → ML Model API → Response → Real-time Delivery",
      storage: "MongoDB with optimized schema for chat histories"
    },
    challenges: [
      "Ensuring medical response accuracy",
      "Managing WebSocket connections at scale",
      "Secure storage of sensitive health data"
    ],
    githubUrl: "https://github.com/Ganesh172919/React-App-LLM",
    liveUrl: "#",
    featured: true
  },
  {
    id: "onwings-flight-booking",
    title: "onWings - Flight Booking System",
    shortTitle: "onWings",
    subtitle: "High-Performance Flight Booking Platform",
    period: "Oct 2025 - Nov 2025",
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
    category: "Performance",
    description: "Developed frontend features for multi-step flight booking with React.js, implementing dynamic form handling and state management. Optimized application performance, reducing page loading time by 40% through code splitting and lazy loading.",
    fullDescription: "A highly optimized flight booking platform built with React.js, featuring multi-step booking flows, dynamic form validation, and advanced state management. The project achieved a 40% reduction in page load times through strategic implementation of code splitting and lazy loading techniques.",
    highlights: [
      "40% page load time reduction",
      "Multi-step booking workflow",
      "Dynamic form handling",
      "Code splitting & lazy loading",
      "Optimized React state management"
    ],
    architecture: {
      agents: [],
      flow: "Search → Flight Selection → Passenger Details → Payment → Confirmation",
      storage: "Client-side state with session persistence"
    },
    challenges: [
      "Managing complex multi-step form state",
      "Optimizing bundle size for fast loads",
      "Handling edge cases in booking flow"
    ],
    githubUrl: "https://github.com/Ganesh172919/OnWings.v2",
    liveUrl: "#",
    featured: false
  },
  {
    id: "truth-seeking-ai",
    title: "Truth-Seeking AI with Imbalanced Datasets",
    shortTitle: "Truth-Seeking AI",
    subtitle: "ML Course Project - XAI Approach",
    period: "2024",
    technologies: ["Python", "Jupyter Notebook", "scikit-learn", "Pandas", "NumPy", "XAI"],
    category: "AI Agents",
    description: "Built a maximally truth-seeking AI system using tweets from an imbalanced dataset. Focused on building robust models that can handle real-world data distribution challenges.",
    fullDescription: "An academic ML course project focused on building truth-seeking AI systems that can effectively handle imbalanced datasets. The project explores explainable AI (XAI) techniques to understand model decisions and ensure the AI system is making trustworthy predictions on tweet data.",
    highlights: [
      "Imbalanced dataset handling",
      "Explainable AI (XAI) techniques",
      "Tweet classification system",
      "Truth-seeking model architecture",
      "Academic ML research project"
    ],
    architecture: {
      agents: [],
      flow: "Data Collection → Preprocessing → Feature Engineering → Model Training → XAI Analysis → Predictions",
      storage: "Jupyter Notebook with documented experiments"
    },
    challenges: [
      "Handling severe class imbalance in tweet data",
      "Implementing explainable AI for model transparency",
      "Ensuring model generalizes beyond training distribution"
    ],
    githubUrl: "https://github.com/Ganesh172919/mlcp-xai-ML",
    liveUrl: "#",
    featured: false
  },
  {
    id: "ml-random-forest",
    title: "ML Project - Random Forest Classification",
    shortTitle: "Random Forest ML",
    subtitle: "Machine Learning with Ensemble Methods",
    period: "2024",
    technologies: ["Python", "Jupyter Notebook", "scikit-learn", "Random Forest", "Pandas", "Matplotlib"],
    category: "AI Agents",
    description: "A comprehensive machine learning project using Random Forest algorithm for classification tasks. Explored ensemble methods, hyperparameter tuning, and model evaluation techniques.",
    fullDescription: "A hands-on machine learning project demonstrating proficiency with ensemble methods, particularly Random Forest classification. The project covers the complete ML pipeline from data exploration to model deployment, with emphasis on understanding why ensemble methods outperform single classifiers.",
    highlights: [
      "Random Forest ensemble method",
      "Hyperparameter optimization",
      "Feature importance analysis",
      "Cross-validation techniques",
      "Comprehensive model evaluation"
    ],
    architecture: {
      agents: [],
      flow: "Data Loading → EDA → Feature Engineering → Model Training → Hyperparameter Tuning → Evaluation",
      storage: "Jupyter Notebook with visualizations"
    },
    challenges: [
      "Optimizing hyperparameters for best performance",
      "Understanding feature importance in ensemble",
      "Avoiding overfitting while maximizing accuracy"
    ],
    githubUrl: "https://github.com/Ganesh172919/Ml_project",
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
      { name: "C++", level: 80 },
      { name: "C", level: 75 },
      { name: "Java", level: 75 }
    ]
  },
  aiml: {
    title: "AI/ML Frameworks",
    items: [
      { name: "PyTorch", level: 88, featured: true },
      { name: "LangChain", level: 92, featured: true },
      { name: "LangGraph", level: 90, featured: true },
      { name: "Transformers", level: 85, featured: true },
      { name: "TensorFlow", level: 80 },
      { name: "scikit-learn", level: 85 }
    ]
  },
  aiAreas: {
    title: "AI/ML Areas",
    items: [
      { name: "Generative AI", level: 92, featured: true },
      { name: "AI Agents", level: 95, featured: true },
      { name: "LLM Fine-Tuning", level: 88, featured: true },
      { name: "Deep Learning", level: 85 },
      { name: "Machine Learning", level: 88 }
    ]
  },
  backend: {
    title: "Backend Development",
    items: [
      { name: "Node.js", level: 90, featured: true },
      { name: "Express.js", level: 88 },
      { name: "FastAPI", level: 85, featured: true },
      { name: "REST APIs", level: 90 }
    ]
  },
  frontend: {
    title: "Frontend Development",
    items: [
      { name: "React.js", level: 88, featured: true },
      { name: "HTML/CSS", level: 85 },
      { name: "Next.js", level: 80 }
    ]
  },
  databases: {
    title: "Databases",
    items: [
      { name: "MongoDB", level: 88, featured: true },
      { name: "PostgreSQL", level: 82 },
      { name: "MySQL", level: 80 }
    ]
  },
  tools: {
    title: "Tools & Platforms",
    items: [
      { name: "GitHub", level: 92 },
      { name: "Jupyter", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Google Colab", level: 88 },
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 88 },
      { name: "Tableau", level: 75 }
    ]
  }
};

export const achievements = {
  coding: [
    {
      platform: "LeetCode",
      stats: "272+ Problems Solved",
      rating: "1510 Rating",
      icon: "code",
      color: "#FFA116"
    },
    {
      platform: "CodeChef",
      stats: "Active Competitor",
      rating: "1250 Rating",
      icon: "chef-hat",
      color: "#5B4638"
    },
    {
      platform: "Total Problems",
      stats: "500+ Problems Solved",
      rating: "Across Platforms",
      icon: "trophy",
      color: "#6366f1"
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
  ]
};

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
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Skills", href: "#skills" },
  { name: "Achievements", href: "#achievements" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
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
    url: "https://leetcode.com/u/reddy_1859994",
    icon: "code"
  }
];
