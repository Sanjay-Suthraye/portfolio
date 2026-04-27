export const portfolioData = {
  personal: {
    name: "Sanjay Suthraye",
    title: "Senior Data Scientist | AI & ML Engineer",
    tagline: "Designing AI/ML solutions that drive real-world impact",
    email: "sanjay.suthraye96@gmail.com",
    phone: "+49 15207556339",
    location: "Berlin, Germany",
    bio: "Full Stack Data Scientist and AI Engineer with 7 years of expertise integrating Statistical Modelling and Generative AI. Specialist in developing comprehensive intelligence systems, encompassing the design of Agentic Frameworks (LangGraph, MCP) and RAG solutions, as well as the implementation of robust Predictive Models (XGBoost, Random Forest) and Time-Series Forecasts. Demonstrated success at AstraZeneca and Tesco in transforming traditional analytics into scalable, containerised microservices (Docker, FastAPI) that yield quantifiable business results.",
    image: "/profile.jpg",
    languages: ["English - Fluent", "German - A2 (Enrolled in Intensive Course)"],
  },

  socials: {
    github: "https://github.com/Sanjay-Suthraye",
    linkedin: "https://www.linkedin.com/in/sanjaysuthraye/",
    email: "mailto:sanjay.suthraye96@gmail.com",
    calendly: "https://calendly.com/sanjay-suthraye96/30min",
  },
  
  companies: [
    {
      name: "AstraZeneca",
      logo: "/logos/astrazeneca.png",
      type: "Current Employer"
    },
    {
      name: "Tesco",
      logo: "/logos/tesco.png",
      type: "Former Employer"
    },
    {
      name: "Cartesian Consulting",
      logo: "/logos/cartesian.png",
      type: "Former Employer"
    },
    {
      name: "DXC Technology",
      logo: "/logos/dxc.png",
      type: "Former Employer"
    },
    {
      name: "HAL (Hindustan Aeronautics Limited)",
      logo: "/logos/hal.jpg",
      type: "Industry Partner"
    }
  ],
  
  collaborations: [
    {
      name: "Christ University",
      logo: "/logos/christ.jpg",
      type: "Academic Collaboration"
    },
    {
      name: "Chegg",
      logo: "/logos/chegg.png",
      type: "Collaboration"
    },
    {
      name: "PMSA (Pharmaceutical Management Science Association)",
      logo: "/logos/pmsa.png",
      type: "Professional Association"
    }
  ],
  
  skills: {
    "Machine Learning & AI": [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Agentic Frameworks (LangGraph, MCP)",
      "Retrieval-Augmented Generation (RAG)",
      "GraphRAG",
      "Natural Language Processing (NLP)",
      "XGBoost, Random Forest, CatBoost, LightGBM",
      "Predictive Modeling & Statistical Analysis",
      "A/B Testing & Causal Inference",
      "Time-Series Forecasting (SARIMAX, LSTM, Prophet)",
      "Weak Supervision (Snorkel)",
      "Active Learning",
      "Model Explainability (SHAP, LIME)",
      "Survival Analysis",
      "Clustering (K-Means++, DBSCAN)"
    ],
    "Advanced Techniques": [
      "Churn Prediction",
      "Market Mix Modelling",
      "Customer Segmentation",
      "Pricing Models",
      "ROI Optimization",
      "Hypothesis Testing",
      "Central Composite Design",
      "Adstock Transforms"
    ],
    "Libraries & Frameworks": [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Hugging Face Transformers",
      "LangChain",
      "FastAPI",
      "XGBoost",
      "LightGBM",
      "spaCy",
      "NLTK",
      "OpenCV",
      "Pandas",
      "NumPy",
      "SciPy"
    ],
    "Cloud & MLOps": [
      "AWS (SageMaker, S3, ECS, Lambda, Step Functions)",
      "GCP Vertex AI",
      "Docker",
      "Kubernetes",
      "MLflow",
      "Apache Airflow",
      "Databricks",
      "CI/CD Pipelines",
      "Model Deployment & Monitoring"
    ],
    "Data Platforms": [
      "Snowflake",
      "Snowpark",
      "BigQuery",
      "Apache Kafka",
      "Tableau",
      "Power BI",
      "MongoDB"
    ],
    "Programming & Tools": [
      "Python",
      "R",
      "SQL",
      "PySpark",
      "Spark",
      "Git",
      "Shell Scripting",
      "REST APIs",
      "Postman",
      "Jupyter",
      "VS Code"
    ],
    "Leadership": [
      "Technical Mentorship",
      "Data Science Strategy",
      "Cross-Functional Collaboration",
      "Agile/Scrum",
      "Stakeholder Communication",
      "Ethical & Responsible AI"
    ]
  },
  
  experience: [
    {
      company: "ASTRAZENECA",
      position: "AI Engineering Specialist / Data Scientist",
      duration: "Sep 2025 - Present / Apr 2023 - Sep 2025",
      location: "Remote",
      description: "Leading AI/ML initiatives and building advanced LLM-based solutions for healthcare and pharmaceutical applications.",
      achievements: [
        "Designed an Agentic AI Platform (LangGraph, MCP) to automate intricate marketing procedures, decreasing data access latency by 30%",
        "Engineered and implemented AWS Step Functions for Precision Targeting, deploying more than 5 predictive models (Supervised & Unsupervised) via CI/CD with automated retraining",
        "Utilised SHAP analysis to determine feature selection and enhance business explainability",
        "Won the Achiever Z Annual Award (Sep'24) for Patient Journey LLM project in the Lead AI and Insights category",
        "Presented Patient Journey LLM technical architecture at the PMSA Conference in New Delhi, receiving top recognition",
        "Directed Time-Series Forecasting projects by comparing Statistical methods (SARIMAX) with Deep Learning techniques (LSTM)",
        "Mitigated inadequacy of Ground Truth data utilising Weak Supervision (Snorkel) and Active Learning techniques",
        "Engineered Snowpark pipelines to provide augmented labels to classifiers, yielding a 10% enhancement in Ground Truth labels",
        "Developed comprehensive Experimentation Framework (A/B Testing) employing Hypothesis Testing and Central Composite Design"
      ]
    },
    {
      company: "TESCO BENGALURU",
      position: "Senior Applied Data Scientist",
      duration: "Aug 2021 - Apr 2023",
      location: "Bengaluru, India",
      description: "Led data science initiatives focused on customer analytics, churn prediction, and business optimization.",
      achievements: [
        "Developed and containerised Churn Prediction Microservice employing XGBoost and CatBoost, overseeing more than 200k homes",
        "Validated model effectiveness by rigorous A/B testing, yielding a 38% enhancement in retention",
        "Engineered scalable Product Choice Optimiser and Market Mix Modelling framework utilising PySpark, managing millions of transactions",
        "Employed Adstock transforms to model advertising decay and applied multi-objective optimisation to achieve substantial enhancements in return on advertising investment",
        "Automated High Value Customer (HVC) segmentation processes employing K-Means++ on Hadoop clusters to efficiently categorise customers according to behavioural characteristics",
        "Implemented machine learning models to identify clients with significant growth potential inside cohorts, enabling dynamic tracking that informed targeted marketing activities",
        "Led a hackathon-winning project (Apr 2022) focused on employee wellness, improving workplace welfare",
        "Recognised as Employee of the Month (Apr 2022) within the Spotlight program for contributions to data science"
      ]
    },
    {
      company: "CARTESIAN CONSULTING",
      position: "Senior Data Analyst",
      duration: "Feb 2021 - Aug 2021",
      location: "Remote",
      description: "Delivered data-driven insights and ML solutions for business optimization and dealer performance improvement.",
      achievements: [
        "Created an ML model with Levenshtein Algorithm to find similar products, using the Pareto principle to focus on the top 20% of recommendations",
        "Built the Dealer Health Index from scratch, handling everything from data collection to visualization in Tableau and Excel",
        "Improved metrics for 62% of underperforming dealers through data-driven recommendations"
      ]
    },
    {
      company: "DXC TECHNOLOGY",
      position: "Senior Analyst at Helpdesk",
      duration: "Mar 2019 - Apr 2020",
      location: "India",
      description: "Optimized helpdesk operations using ML and data analysis to improve customer service metrics.",
      achievements: [
        "Designed an ML model using Named-entity recognition to analyze customer reviews, identifying key sentiment drivers",
        "Optimized team traffic workflows with regression analysis, cutting average handling time by 15%",
        "Managed SQL/MS SQL databases and maintained a central knowledge base that improved information sharing"
      ]
    }
  ],
  
  education: [
    {
      institution: "University of Hyderabad",
      degree: "Post Graduate Diploma in Artificial Intelligence and Machine Learning",
      duration: "Jan 2021 - Dec 2022",
      gpa: "3.4/4.0",
    },
    {
      institution: "AMC College of Engineering",
      degree: "Bachelor of Engineering",
      duration: "Jan 2014 - Dec 2018",
      gpa: "7.0/10.0",
    },
  ],
  
  projects: [
    {
      title: "AI Study Buddy App",
      description: "An intelligent study companion application leveraging AI to help students learn more effectively through personalized recommendations and adaptive learning paths.",
      technologies: ["Python", "AI/ML", "NLP"],
      github: "https://github.com/Sanjay-Suthraye/AI-STUDY-BUDDY-APP",
      featured: true,
    },
    {
      title: "Anime Recommender System",
      description: "A sophisticated recommendation engine that suggests anime based on user preferences, viewing history, and collaborative filtering techniques.",
      technologies: ["Python", "Machine Learning", "Recommendation Systems"],
      github: "https://github.com/Sanjay-Suthraye/ANIME-RECOMMENDER-SYSTEM",
      featured: true,
    },
    {
      title: "Medical RAG Chatbot",
      description: "A Retrieval-Augmented Generation chatbot for medical queries, combining LLMs with medical knowledge bases to provide accurate, context-aware health information.",
      technologies: ["Python", "LLMs", "RAG", "LangChain", "Healthcare AI"],
      github: "https://github.com/Sanjay-Suthraye/MEDICAL-RAG-CHATBOT",
      featured: true,
    },
    {
      title: "Multi-AI Agent System",
      description: "An advanced multi-agent framework that coordinates multiple AI agents to solve complex tasks through collaboration and intelligent task distribution.",
      technologies: ["Python", "LLMs", "Multi-Agent Systems", "LangGraph"],
      github: "https://github.com/Sanjay-Suthraye/MULTI-AI-AGENT",
      featured: true,
    },
    {
      title: "Product Recommender System",
      description: "E-commerce product recommendation engine using collaborative filtering and content-based filtering to personalize shopping experiences.",
      technologies: ["Python", "Machine Learning", "Recommendation Algorithms"],
      github: "https://github.com/Sanjay-Suthraye/PRODUCT-RECOMMENDER-SYSTEM",
      featured: true,
    },
    {
      title: "Merceri Price Challenge",
      description: "Kaggle competition solution for predicting product prices using regression models and performance optimization techniques (RMGLE metric).",
      technologies: ["Python", "Regression", "Jupyter Notebook", "Kaggle"],
      github: "https://github.com/Sanjay-Suthraye/MERCERI-PRICE-CHALLENGE-COMPETITION",
      featured: true,
    },
  ],
  
  awards: [
    {
      title: "Achiever Z Annual Award",
      issuer: "AstraZeneca",
      date: "September 2024",
      description: "Lead AI and Insights category for Patient Journey LLM project"
    },
    {
      title: "PMSA Conference Speaker",
      issuer: "PMSA Conference, New Delhi",
      date: "2024",
      description: "Top recognition for Patient Journey LLM presentation"
    },
    {
      title: "Employee of the Month",
      issuer: "Tesco Bengaluru - Spotlight Program",
      date: "April 2022",
      description: "Recognition for outstanding data science contributions"
    },
    {
      title: "Hackathon Winner",
      issuer: "Tesco Bengaluru",
      date: "April 2022",
      description: "Employee health project that improved workplace wellbeing"
    },
  ],
};
