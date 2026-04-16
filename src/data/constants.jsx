import { CheckCircle2, CircleDot, Award, BookOpen, Clock, ExternalLink } from 'lucide-react';
import metaLogo from '../assets/metalogo.png';
import ibmLogo from '../assets/ibmlogo.png';
import princetonLogo from '../assets/princetonlogo.png';
import leetcodeLogo from '../assets/leetcodelogo.png';

export const projects = [
  {
    id: 1,
    title: "CyberShield — AI threat detection",
    category: ["AI", "Cybersecurity"],
    tagColor: "bg-red-50 text-red-700",
    summary: "Dual-model ensemble with honeypot feedback loop and SHAP explainability",
    context: "Inter-College Hackathon • Mar 2026",
    overview: "Built an AI/ML-based network intrusion detection system using a dual-model ensemble. Detects cyber threats in real time with a honeypot feedback loop that continuously retrains on confirmed-malicious traffic. SHAP values provide transparent, interpretable decisions for each alert.",
    problem: "Security analysts face alert fatigue from rule-based systems with high false-positive rates and zero explainability.",
    solution: "Ensemble ML model (Random Forest + SGDClassifier meta-classifier) with honeypot-nginx-Redis redirect loop for automatic adversarial retraining.",
    result: "~90 tests passing. Dual-model architecture reduces false positives vs single model. SHAP output provides per-feature attribution.",
    tech: ["Python", "Scikit-learn", "SHAP", "Random Forest", "SGDClassifier", "FastAPI", "Redis", "Nginx", "Kaggle CLI"],
    datasets: ["CIC-IDS 2017", "ADFA-LD"],
    github: "https://github.com/RubinaathKP/CyberShield26",
    report: "#",
  },
  {
    id: 2,
    title: "ClearAir India — emission hotspot mapping",
    category: ["Simulation", "Pollution Map"],
    tagColor: "bg-blue-50 text-blue-700",
    summary: "Satellite fusion + DBSCAN clustering + Leaflet.js dashboard for Indian cities",
    context: "Capstone Project • 2026",
    overview: "Software-only urban emission hotspot mapping platform fusing satellite data with regulatory sources to identify and cluster pollution hotspots using unsupervised ML.",
    problem: "Indian cities lack unified real-time emission monitoring combining satellite, regulatory, and traffic data for actionable insights.",
    solution: "Fused ISRO Bhuvan, Sentinel-5P, NASA MODIS/FIRMS with CPCB and MoRTH Vahan data. Applied DBSCAN clustering and built an interactive Leaflet.js dashboard.",
    result: "Interactive visualization of emission clusters across major Indian metros with drill-down by source category.",
    tech: ["Python", "DBSCAN", "Leaflet.js", "DuckDB", "Google Earth Engine", "CPCB API", "OSM"],
    datasets: ["Sentinel-5P", "CPCB Public Dataset"],
    github: "https://github.com/RubinaathKP/GreenAtlas.git",
    report: "#",
  },
  {
    id: 3,
    title: "Loan AI — prediction model",
    category: ["ML", "Finance"],
    tagColor: "bg-emerald-50 text-emerald-700",
    summary: "KNN + K-Means with preprocessing pipelines for loan approval classification",
    context: "Hackathon Project • 2026",
    overview: "Loan approval prediction system using KNN classification and K-Means clustering, built with preprocessing and feature engineering pipelines.",
    problem: "Manual loan approval is slow and inconsistent. ML can standardize and accelerate the decision pipeline.",
    solution: "Feature engineering + preprocessing pipelines feeding into KNN and K-Means models with cross-validation.",
    result: "Functional prediction pipeline. Strong foundational project establishing ML workflow practices.",
    tech: ["Python", "KNN", "K-Means", "Pandas", "Scikit-learn"],
    datasets: ["Synthetic Loan Dataset"],
    github: "https://github.com/RubinaathKP/NBCFDC-Loan-Approval-AI.git",
    report: "#",
  },
  {
    id: 4,
    title: "Little Lemon Restaurant — Website Project",
    category: ["Front-End Development"],
    tagColor: "bg-yellow-50 text-yellow-700",
    summary: "React-based restaurant management platform with smart reservations and admin dashboard",
    context: "Course Project • Jul 2025 – Aug 2025",
    overview: "Developed a Front-end Restaurant Management Platform using React to solve operational inefficiencies for restaurants. The client-facing side features an interactive menu, and a smart reservation system. The admin side includes a secure dashboard for real-time management of orders, reservations, table statuses, and the menu, creating a single, unified system for staff and customers.",
    problem: "Restaurants often experience operational inefficiencies when using separate, disconnected systems for menu browsing, reservations, and backend management.",
    solution: "Built a single, unified Frontend platform featuring an interactive client-facing interface and a secure admin dashboard for real-time operations.",
    result: "A cohesive restaurant management solution that streamlines staff workflow while providing a smooth reservation experience for customers.",
    tech: ["React.js", "HTML", "CSS", "Front-End Development"],
    datasets: [],
    github: "#",
    report: "#",
  },
];

export const experience = [
  {
    title: "Green Internship",
    org: "1M1B (One Million for One Billion)",
    status: "Completed",
    date: "Jan–Mar 2026",
    icon: <CheckCircle2 className="w-5 h-5 text-green-600" aria-hidden="true" />,
    desc: "Worked on climate and sustainability-focused problem statements as part of the 1M1B initiative — a global youth program bridging student talent with real-world environmental challenges.",
    tags: ["Climate Tech", "Sustainability", "Remote"],
  },
  {
    title: "Springboard Virtual Internship 7.0",
    org: "Infosys Springboard",
    status: "Upcoming",
    date: "2026",
    icon: <CircleDot className="w-5 h-5 text-blue-600 animate-pulse" aria-hidden="true" />,
    desc: "Industry-aligned learning and project tracks under Infosys Springboard — covering software engineering fundamentals and emerging technologies.",
    tags: ["Industry Training", "Software Engineering"],
  },
  {
    title: "Open Source Contributor",
    org: "Social Summer of Code (SSoC)",
    status: "Upcoming",
    date: "Summer 2026",
    icon: <CircleDot className="w-5 h-5 text-purple-600 animate-pulse" aria-hidden="true" />,
    desc: "Contributing to open source projects under the Social Summer of Code program — a structured open source internship for students to build real-world collaboration and contribution experience.",
    tags: ["Open Source", "Community", "GitHub Contributions"],
  },
];

export const certifications = [
  {
    title: "Meta Front-End Developer",
    organization: "Meta",
    icon: metaLogo,
    status: "Completed",
    totalCourses: 9,
    completedCourses: 9,
    overallProgress: 100,
    verificationLink: "https://coursera.org/share/88b10071f2bf264572856973456e6ca5",
    skills: ["React", "JavaScript", "UX/UI", "Git"],
    modules: [
      "Introduction to Front-End Development",
      "Programming with JavaScript",
      "Version Control",
      "HTML and CSS in depth",
      "React Basics",
      "Advanced React",
      "Principles of UX/UI Design",
      "Front-End Developer Capstone",
      "Coding Interview Preparation"
    ]
  },
  {
    title: "LeetCode Dashboard",
    organization: "Competitive Programming",
    icon: leetcodeLogo,
    isLeetCode: true,
    status: "Active",
    rank: "940,178",
    totalSolved: 165,
    acceptanceRate: "81.2%",
    maxStreak: 34,
    overallProgress: 16,
    verificationLink: "https://leetcode.com/u/rubinaath/",
    skills: ["Array", "String", "Math", "Hash Table", "DP"],
    modules: [
      "Level: Easy | Solved: 124 | Beats: 93.06%",
      "Level: Medium | Solved: 41 | Beats: 70.55%",
      "Global Rank: 940,178",
      "Current Max Streak: 34 Days",
      "Acceptance Rate: 81.2%"
    ],
    stats: [
      { label: "Easy", solved: 124, beats: "93.06%", color: "#22c55e" },
      { label: "Med", solved: 41, beats: "70.55%", color: "#eab308" },
    ]
  },
  {
    title: "Building AI Agents & Agentic Workflow",
    organization: "IBM",
    icon: ibmLogo,
    status: "In Progress",
    totalCourses: 3,
    completedCourses: 0,
    overallProgress: 18,
    currentModule: "Fundamentals of Building AI Agents",
    skills: ["LangChain", "CrewAI", "Agentic Workflows"],
    modules: [
      "Fundamentals of Building AI Agents",
      "Agentic AI with LangChain and LangGraph",
      "Agentic AI with CrewAI, AutoGen and BeeAI"
    ]
  },
  {
    title: "IBM Java Developer",
    organization: "IBM",
    icon: ibmLogo,
    status: "In Progress",
    totalCourses: 14,
    completedCourses: 2,
    overallProgress: 21,
    currentModule: "Object Oriented Programming in Java",
    skills: ["Java", "OOP", "Spring Framework", "Microservices"],
    modules: [
      "Introduction to Software Engineering",
      "Java Programming for Beginners",
      "Object Oriented Programming in Java",
      "Java App Development Project",
      "Introduction to HTML, CSS, & JavaScript",
      "Getting Started with Git and GitHub",
      "Spring Framework for Java Development",
      "Java Development with Databases",
      "Cloud Native, Microservices, Containers, DevOps and Agile",
      "Java: Design Patterns, Testing, and Deployment",
      "Java Development Capstone Project",
      "Generative AI: Elevate your Software Development Career",
      "Generative AI for Java and Spring Development",
      "Software Developer Career Guide and Interview Preparation"
    ]
  },
  {
    title: "Algorithms, Part I",
    organization: "Princeton University",
    icon: princetonLogo,
    status: "In Progress",
    totalCourses: 1,
    completedCourses: 0,
    overallProgress: 6,
    skills: ["Data Structures", "Union-Find", "Algorithm Analysis"],
    modules: ["Quick Find", "Quick Union", "Weighted Quick Union"]
  }
];

