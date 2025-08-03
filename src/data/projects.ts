export const projectsData = {
  msuApp: {
    title: "Michigan State Orientation App",
    description: "Mobile app serving 11,000+ students annually with 40% engagement increase. Built with React Native, Node.js, and Firebase with Okta SSO integration.",
    longDescription: "Developed and launched a comprehensive mobile application for Michigan State University's New Student Orientation program. The app serves as a central hub for orientation activities, featuring a points-based check-in system that gamifies the orientation experience, resource access, event scheduling, and real-time updates. The application successfully increased student engagement by 40% and now serves over 11,000 new students annually during orientation season.",
    technologies: ["React Native", "Node.js", "Firebase", "Okta SSO", "JavaScript", "Google Cloud", "iOS", "Android"],
    achievements: [
      "Increased student engagement by 40% for over 11,000 users annually",
      "Implemented zero-breach security with Okta SSO integration",
      "Achieved 90% positive feedback rate from orientation coordinators",
      "Successfully deployed to both iOS App Store and Google Play Store",
      "Built scalable architecture to handle 11K+ concurrent users during peak orientation periods"
    ],
    challenges: [
      "Integrated complex Okta SSO authentication with token exchange for secure university-wide access",
      "Designed Firestore security rules ensuring minimum privilege access and preventing data breaches",
      "Optimized real-time database performance for thousands of simultaneous check-ins during events",
      "Coordinated with multiple university departments to align app features with orientation requirements"
    ],
    metrics: {
      users: "11,000+ annually",
      engagement: "40% increase",
      performance: "Zero security breaches"
    },
    teamSize: 3,
    duration: "May 2023 - May 2025",
    links: {
      // github: "https://github.com/username/msu-orientation-app" // Add if available
    }
  },

  agenticCollaborator: {
    title: "Agentic Collaborator for Ally Financial",
    description: "AI-powered email analysis tool using OpenAI API for sentiment analysis and consensus building with multi-agent coordination architecture.",
    longDescription: "Built an enterprise-grade AI solution for Ally Financial that revolutionizes email analysis and policy decision-making. The system uses multiple coordinated AI agents in a dynamic graph-tree architecture to process complex policy communications, perform sentiment analysis, and build consensus among stakeholders. Features a comprehensive web dashboard for visualizing AI-generated insights and maintaining detailed audit trails for compliance and decision tracking.",
    technologies: ["Python", "Flask", "React", "PostgreSQL", "LangChain", "OpenAI API", "Docker", "TypeScript", "Material-UI"],
    achievements: [
      "Reduced manual email review time by automating sentiment analysis for policy communications",
      "Implemented multi-agent AI system with dynamic graph-tree coordination architecture",
      "Built comprehensive audit trail system for compliance and policy decision tracking",
      "Created intuitive web dashboard for visualizing complex AI-generated insights",
      "Successfully integrated with Microsoft Outlook for seamless enterprise workflow"
    ],
    challenges: [
      "Designed complex multi-agent coordination system where AI agents collaborate through graph-tree architecture",
      "Implemented sophisticated prompt engineering for accurate sentiment analysis of policy documents",
      "Built robust audit trail system meeting enterprise compliance requirements",
      "Coordinated with Ally Financial stakeholders to ensure solution met business objectives",
      "Optimized AI model performance for processing large volumes of email data"
    ],
    metrics: {
      performance: "Automated sentiment analysis",
      engagement: "Enterprise deployment ready"
    },
    teamSize: 6,
    duration: "September 2024 - December 2024",
    links: {
      // github: "https://github.com/username/agentic-collaborator" // Add if available
    }
  },

  graphRoots: {
    title: "GraphRoots",
    description: "Interactive graph-based visualization tool to analyze relationships between companies and employees. Built for Grassroots Midwest with modular algorithms.",
    longDescription: "Designed and developed an interactive data visualization platform for Grassroots Midwest, a political consulting firm in Michigan. The tool leverages their Google Cloud database to create dynamic relationship maps between companies, employees, and projects. Features sophisticated search functionality, interactive graph visualizations, and modular algorithms that provide reusable tools for relationship analysis and comparison. The system helps the firm better understand and visualize their extensive network of political and business relationships.",
    technologies: ["Python", "Flask", "React", "Google Cloud SQL", "JavaScript", "Vis.js", "HTML/CSS", "SQLAlchemy"],
    achievements: [
      "Created comprehensive relationship mapping system for political consulting firm's database",
      "Built modular and well-documented algorithms for relationship analysis and visualization",
      "Implemented both individual and business entity lookup with interactive graph generation",
      "Delivered production-ready tool through iterative client feedback sessions",
      "Provided reusable visualization components for future relationship analysis projects"
    ],
    challenges: [
      "Processed and visualized complex relational data from large Google Cloud SQL database",
      "Designed intuitive user interface for non-technical political consulting staff",
      "Implemented efficient graph algorithms for real-time relationship visualization",
      "Collaborated extensively with Grassroots Midwest to define use cases and requirements",
      "Built scalable architecture to handle large datasets and complex queries"
    ],
    images: [
      "/Individual_Search.png",
      "/Individual_Graph.png", 
      "/Business_Search.png",
      "/Business_Graph.png",
      "/Software_Architechture.jpeg"
    ],
    teamSize: 5,
    duration: "January 2025 - May 2025",
    links: {
      video: "https://www.youtube.com/watch?v=RwhB-6ntZxg"
    }
  },

  hurricanePrediction: {
    title: "Hurricane Prediction System",
    description: "Web-based system displaying and comparing hurricane predictions from National Hurricane Center and machine learning models for improved forecast visualization.",
    longDescription: "Developed a sophisticated web-based visualization system that combines official National Hurricane Center predictions with machine learning model forecasts. The system provides meteorologists and researchers with tools to compare different prediction models, analyze forecast accuracy, and improve hurricane tracking capabilities. Built during research work at Michigan State University, this project demonstrates the practical application of machine learning in weather prediction and disaster preparedness.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Machine Learning", "Data Visualization", "Weather APIs"],
    achievements: [
      "Successfully integrated National Hurricane Center data with custom ML prediction models",
      "Created intuitive web interface for comparing multiple hurricane forecast models",
      "Improved forecast visualization and analysis capabilities for research purposes",
      "Demonstrated practical application of machine learning in meteorological research",
      "Built foundation for enhanced hurricane tracking and prediction accuracy"
    ],
    challenges: [
      "Integrated real-time weather data from National Hurricane Center APIs",
      "Developed machine learning models for hurricane path and intensity prediction",
      "Created responsive visualizations for complex meteorological data",
      "Ensured accuracy and reliability of prediction model comparisons",
      "Built user-friendly interface for researchers and meteorological professionals"
    ],
    teamSize: 2,
    duration: "September 2021 - September 2022",
    links: {
      // demo: "https://hurricane-prediction-demo.com" // Add if available
    }
  }
};