export const portfolioData = {
  personal: {
    name: "Sanjay Suthraye",
    title: "Data Scientist / AI/ML Engineer",
    tagline: "Designing AI/ML solutions that drive real-world impact",
    status: "Available Immediately",
    email: "sanjay.suthraye96@gmail.com",
    phone: "+49 15207556339",
    location: "Berlin, Germany",
    bio: "Data scientist with 7 years of experience designing and implementing AI/ML and core data science solutions in enterprise environments. I have a solid grasp of generative AI, LLMs, and RAG systems, and I'm well-versed in NLP, predictive analytics, and machine learning architectures like LSTM, XGBoost, Random Forest, and CatBoost.",
    image: "/profile.jpg",
    languages: ["English - Fluent", "German - A1 and A2 (Learning)"],
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
  
  volunteering: [
    {
      role: "Industry Mentor",
      organization: "Christ University, Bangalore",
      duration: "Apr 2025 - Jan 2026 · 10 mos",
      cause: "Education",
      description: "Recognized as Industry Mentor under 'Inheritance-2025' for M.Sc. (Data Science) 2024–'26 batch students aspiring to become Data Scientists."
    },
    {
      role: "Volunteer",
      organization: "Make A Difference",
      duration: "Jan 2017 - Jun 2017 · 6 mos",
      cause: "Children",
      description: "Volunteered with Make-A-Difference India, focusing on enriching lives and supporting children's development."
    },
    {
      role: "Guest Speaker",
      organization: "Christ University, Bangalore",
      duration: "",
      cause: "Education",
      description: "Delivered guest lectures on data science and AI topics for undergraduate and postgraduate students."
    },
    {
      role: "Event Coordinator",
      organization: "AMC Engineering College",
      duration: "Mar 2017 - Apr 2017 · 2 mos",
      cause: "Arts and Culture",
      description: "Coordinated college events encompassing arts and cultural programs."
    }
  ],

  skills: {
    "Machine Learning & AI": [
      "Generative AI",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Natural Language Processing (NLP)",
      "XGBoost, Random Forest, Clustering",
      "Predictive Modeling",
      "Reinforcement Learning",
      "Survival Analysis",
      "Time-Series Forecasting",
      "Model Explainability (XAI)",
      "Fairness & Bias Detection"
    ],
    "Core Competencies": [
      "Churn Prediction",
      "Market Mix Modelling",
      "Customer Segmentation",
      "Enrichment Models",
      "Pricing Models",
      "ROI Optimization",
      "A/B Testing",
      "Causal Inference"
    ],
    "Libraries": [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Hugging Face Transformers",
      "LangChain",
      "XGBoost",
      "LightGBM",
      "spaCy",
      "NLTK",
      "OpenCV",
      "Pandas",
      "NumPy"
    ],
    "Cloud & MLOps": [
      "AWS (Lambda, ECS, EKS, S3, API Gateway, Serverless)",
      "GCP Vertex AI",
      "Docker",
      "Kubernetes",
      "MLflow",
      "Apache Airflow",
      "Databricks",
      "CI/CD Pipelines",
      "Model Deployment",
      "Model Monitoring"
    ],
    "Programming & Tools": [
      "Python",
      "R",
      "SQL",
      "PySpark",
      "Spark",
      "Snowflake",
      "Git",
      "Shell Scripting",
      "REST APIs",
      "Postman",
      "Jupyter",
      "VS Code"
    ],
    "Data Engineering": [
      "Apache Kafka",
      "BigQuery",
      "MongoDB",
      "Tableau",
      "Power BI",
      "Seaborn",
      "Matplotlib",
      "Dash"
    ],
    "Leadership": [
      "Technical Mentorship",
      "AI/ML Strategy",
      "Cross-Functional Collaboration",
      "Agile/Scrum",
      "Stakeholder Communication",
      "Ethical & Responsible AI"
    ]
  },
  
  experience: [
    {
      company: "ASTRAZENECA",
      domain: "Pharmaceuticals / Healthcare",
      duration: "Apr 2023 - Present",
      location: "Remote",
      roles: [
        { position: "AI Engineering Specialist", duration: "Sep 2025 - Present" },
        { position: "Data Scientist", duration: "Apr 2023 - Sep 2025" }
      ],
      description: "Leading AI/ML and GenAI engineering initiatives across the Oncology Business Unit, building scalable intelligence systems for pharmaceutical applications.",
      achievements: [
        "Received the Achiever Z Annual Award (Sep 2024) for spearheading the Patient Journey Analytics project in the Lead AI and Insights category",
        "Presented the Patient Journey LLM system architecture at the PMSA Conference in New Delhi, receiving top recognition",
        "Designed an Agentic AI Platform (LangGraph, MCP) to automate marketing workflows, reducing data access latency by 30%",
        "Engineered AWS Step Functions for Precision Targeting, deploying 5+ predictive models via CI/CD with automated retraining; used SHAP for feature selection and business explainability",
        "Directed Time-Series Forecasting projects comparing SARIMAX with LSTM across NBRx trend forecasting, cutting operational costs by 30%",
        "Mitigated ground truth scarcity using Weak Supervision (Snorkel) and Active Learning; built Snowpark pipelines delivering a 10% improvement in dependent label quality",
        "Built a comprehensive A/B Testing and Experimentation Framework using Hypothesis Testing and Central Composite Design to empirically assess model effects"
      ]
    },
    {
      company: "TESCO BENGALURU",
      position: "Senior Applied Data Scientist",
      duration: "Aug 2021 - Apr 2023",
      location: "Bengaluru, India",
      description: "Led data science initiatives focused on customer analytics, churn prediction, and business optimization.",
      achievements: [
        "Received Employee of the Month award (Apr'22) through the Spotlight program for data science contributions",
        "Led a hackathon-winning project (Apr'22) focused on employee health that improved workplace wellbeing",
        "Developed a customer churn prediction model forecasting attrition 6 weeks ahead for 200K+ households using Random Forest, Logistic Regression, and CatBoost",
        "Ran A/B tests on churn prevention models that increased household retention by 38% and highlighted critical gaps in shopping patterns",
        "Built a Product Choice Optimizer using a multi-model approach to maximize ROI, incorporating Adstock variables as marketing impact features"
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
      domain: "IT Services",
      duration: "Jun 2018 - Apr 2020",
      location: "India",
      roles: [
        { position: "Senior Analyst at Helpdesk", duration: "Mar 2019 - Apr 2020" },
        { position: "Technical Analyst (Contractor)", duration: "Jun 2018 - Mar 2019" }
      ],
      description: "Applied ML and data analysis to optimize helpdesk operations and customer service metrics.",
      achievements: [
        "Designed an ML model using Named Entity Recognition to analyze customer reviews and identify primary sentiment drivers",
        "Optimized team traffic workflows with regression analysis, reducing average handling time by 15%",
        "Examined call flow data to identify trends that improved first-call resolution rates",
        "Managed SQL/MS SQL databases and maintained a centralized knowledge repository that improved information dissemination"
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
