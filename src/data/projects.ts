export const projectsData = {
  msuApp: {
    title: "Michigan State Orientation App",
    description: "Mobile app serving 11,000+ students annually with 40% engagement increase. Built with React Native, Node.js, and Firebase with Okta SSO integration.",
    longDescription: "Led full-stack development of Michigan State University's official New Student Orientation app, serving as the primary digital platform for 11,000+ incoming students annually. This enterprise mobile solution increased student participation by 40% through a gamified points-based check-in system. Built with React Native for cross-platform deployment to iOS App Store and Google Play Store. The backend uses Node.js and Firebase for real-time synchronization, with Okta SSO for secure university-wide authentication. Features include offline capability, push notifications, interactive campus maps, and analytics dashboard for administrators.",
    technologies: ["React Native", "Node.js", "Firebase", "Okta SSO", "JavaScript", "Google Cloud", "iOS", "Android"],
    achievements: [
      "Increased student engagement by 40% for 11,000+ users annually with gamified check-in system",
      "Achieved zero security breaches through enterprise Okta SSO integration",
      "Deployed to iOS App Store and Google Play Store with 4.8+ star ratings",
      "Built scalable architecture handling 11K+ concurrent users during peak periods",
      "Reduced check-in processing time by 75% with automated QR code scanning",
      "Secured 90% positive feedback from university orientation coordinators",
      "Implemented offline-first architecture with 95%+ push notification delivery rates",
      "Created analytics dashboard providing insights for orientation optimization"
    ],
    challenges: [
      "Architected complex Okta SSO integration with secure token exchange across university ecosystem",
      "Designed granular Firestore security rules with role-based access control and minimum privilege principles",
      "Optimized real-time database performance for thousands of simultaneous check-ins without latency",
      "Implemented offline-first data synchronization with conflict resolution algorithms",
      "Coordinated requirements gathering across IT, Student Affairs, and Academic Services departments",
      "Built robust error handling with automated monitoring and comprehensive logging",
      "Developed automated testing pipeline achieving 95%+ code coverage",
      "Managed App Store compliance, privacy policies, and security audits"
    ],
    metrics: {
      users: "11,000+ annually",
      engagement: "40% increase",
      performance: "Zero security breaches"
    },
    images: [
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/cd/40/c0/cd40c0d2-57aa-bb4e-6779-2573994cbf35/IMG_4328.PNG/300x0w.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/9b/13/5b/9b135b61-16e8-dc59-b4c7-7762e190454a/IMG_4331.PNG/300x0w.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/30/51/74/30517405-8bb4-c833-5e0f-1735da2728e4/IMG_4332.PNG/300x0w.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/4d/96/ea/4d96ea95-c755-ad75-15b9-2b51810e1d92/IMG_4330.PNG/300x0w.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/e1/a9/3e/e1a93e62-3c1b-c1a4-d24d-4f5fe53d9c41/IMG_4329.PNG/300x0w.jpg",
      "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/5b/f3/f6/5bf3f6ad-c0c2-ef0b-ffc5-25cba91d9e5f/IMG_4333.PNG/300x0w.jpg"
    ],
    teamSize: 3,
    duration: "May 2023 - May 2025",
    links: {
      appStore: "https://apps.apple.com/us/app/michigan-state-orientation/id6593659522"
      // github: "https://github.com/username/msu-orientation-app" // Add if available
    }
  },

  agenticCollaborator: {
    title: "Agentic Collaborator for Ally Financial",
    description: "AI-powered email analysis tool using OpenAI API for sentiment analysis and consensus building with multi-agent coordination architecture.",
    longDescription: "Architected a multi-agent AI system for Ally Financial that transforms enterprise email analysis and consensus-building workflows. The solution uses LangChain and LangGraph frameworks to orchestrate specialized AI agents in a dynamic graph-tree architecture for sentiment analysis, content summarization, and consensus tracking. Integrates with Microsoft Outlook through custom add-ins, processing policy-related email threads and generating real-time insights. Built with enterprise security featuring audit trails, role-based access control, and regulatory compliance logging. The React dashboard visualizes consensus patterns and sentiment trends, enabling faster data-driven policy decisions. Backend uses Flask APIs, PostgreSQL storage, and Docker containerization.",
    technologies: ["Python", "Flask", "React", "PostgreSQL", "LangChain", "OpenAI API", "Docker", "TypeScript", "Material-UI"],
    achievements: [
      "Reduced manual email review time by 80% through automated sentiment analysis",
      "Architected multi-agent AI system using LangGraph with dynamic graph-tree coordination",
      "Implemented enterprise audit trail system meeting financial compliance standards",
      "Delivered production-ready Microsoft Outlook integration with custom add-ins",
      "Achieved 95% accuracy in sentiment analysis through advanced prompt engineering",
      "Created responsive React dashboard with real-time consensus visualization",
      "Built scalable Docker architecture supporting concurrent email thread processing",
      "Developed robust error handling ensuring reliability during high-volume processing",
      "Implemented role-based access control aligned with Ally Financial security policies"
    ],
    challenges: [
      "Architected complex multi-agent coordination using LangGraph with dynamic graph-tree structures",
      "Developed sophisticated prompt engineering achieving 95% sentiment analysis accuracy",
      "Implemented enterprise audit trail with immutable logging meeting financial compliance standards",
      "Built secure Microsoft Outlook integration with enterprise authentication and permissions",
      "Optimized OpenAI API usage with intelligent caching while maintaining sub-second response times",
      "Coordinated requirements across Compliance, Legal, IT Security, and Business Operations",
      "Built robust PostgreSQL schema with optimized indexing for high-volume processing",
      "Implemented comprehensive monitoring and automated recovery for production reliability"
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
    longDescription: "Built a data visualization web application for Grassroots Midwest, a Michigan political consulting firm, to analyze relationships in their client database. The application features individual and company lookup pages with interactive relationship mapping using network graphs. Developed as a 5-person capstone project for CMSE 495 at Michigan State University. The system connects to their Google Cloud SQL database to generate interactive visualizations showing connections between contacts, companies, and projects. Built with Python Flask backend for data processing and React frontend with Vis.js for network visualization.",
    technologies: ["Python", "Flask", "React", "Google Cloud SQL", "JavaScript", "Vis.js", "HTML/CSS", "SQLAlchemy"],
    achievements: [
      "Built full-stack web application with individual and company lookup functionality",
      "Created interactive network graph visualizations using Vis.js for relationship mapping",
      "Developed Flask API endpoints connecting to Google Cloud SQL database",
      "Implemented React frontend with responsive design and search suggestions",
      "Processed database queries to generate dynamic relationship visualizations",
      "Collaborated in 5-person team using agile development with weekly client meetings",
      "Delivered production-ready tool for political consulting firm's database analysis",
      "Created comprehensive documentation and installation instructions"
    ],
    challenges: [
      "Connected to Google Cloud SQL database and handled complex relational queries",
      "Designed user-friendly interface for non-technical political consulting staff",
      "Implemented network graph visualization showing complex relationship connections",
      "Coordinated development across 5-person team with different technical backgrounds",
      "Built Flask backend to handle database connections and API requests efficiently",
      "Integrated React frontend with Vis.js library for interactive graph rendering",
      "Worked with client requirements to deliver tool meeting political consulting needs",
      "Created installation documentation and deployment instructions for client use"
    ],
    teamSize: 5,
    duration: "January 2025 - May 2025",
    links: {
      // video: "https://www.youtube.com/watch?v=RwhB-6ntZxg" // Removed demo video
    }
  },

  hurricanePrediction: {
    title: "Hurricane Prediction System",
    description: "Web-based system displaying and comparing hurricane predictions from National Hurricane Center and machine learning models for improved forecast visualization.",
    longDescription: "Developed a web-based meteorological platform integrating National Hurricane Center data with custom machine learning models to enhance hurricane forecasting accuracy. This research system combines satellite imagery, atmospheric pressure, wind speed, and historical patterns to generate comprehensive tracking predictions. Features interactive maps, temporal analysis charts, and comparative model performance metrics. Built with Python backend using scikit-learn, pandas, and NumPy, plus responsive JavaScript frontend with D3.js visualization. Implements real-time data ingestion from National Weather Service APIs, automated model retraining, and statistical accuracy comparisons between official forecasts and ML predictions.",
    technologies: ["HTML", "CSS", "JavaScript", "Python", "Machine Learning", "Data Visualization", "Weather APIs"],
    achievements: [
      "Achieved 15% improvement in 48-hour hurricane track prediction accuracy over official forecasts",
      "Built automated ML pipeline processing 500+ historical hurricane datasets",
      "Created interactive web interface for side-by-side forecast comparison",
      "Developed sophisticated D3.js dashboard with real-time updates and interactive maps",
      "Implemented statistical validation framework with confidence intervals and error metrics",
      "Demonstrated improvement in intensity prediction through ensemble learning techniques",
      "Built scalable data ingestion system with error handling and validation",
      "Contributed to research community by open-sourcing algorithms and benchmarking results"
    ],
    challenges: [
      "Engineered robust API integration handling complex data formats and real-time updates",
      "Developed ML models incorporating atmospheric pressure, wind patterns, and historical trajectories",
      "Implemented feature engineering extracting predictive signals from raw meteorological data",
      "Created responsive visualizations with smooth real-time updates and interactive exploration",
      "Built statistical validation framework with cross-validation and comprehensive error analysis",
      "Designed intuitive UI balancing accessibility with advanced analytical capabilities",
      "Optimized computational performance for real-time prediction while maintaining accuracy",
      "Implemented data quality assurance with outlier detection and consistency validation"
    ],
    teamSize: 2,
    duration: "September 2021 - December 2022",
    links: {
      // demo: "https://hurricane-prediction-demo.com" // Add if available
    }
  }
};