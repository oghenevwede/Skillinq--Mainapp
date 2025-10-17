export type Job = {
  id: string;
  title: string;
  company: string;
  jobLocation: string;
  type: string;
  category: string;
  salary: string;
  jobLevel: string;
  experience: string;
  education: string;
  postedDate: string;
  expiryDate: string;
  description: string[];
  requirements: string[];
  // logo filename in /public (e.g. 'vercel.svg')
  logo?: string;
};

// Raw job list (logo assigned below via company mapping)
type JobBase = Omit<Job, 'logo'>;
const rawJobs: JobBase[] = [
  {
    id: "job-1",
    title: "Software Engineer",
    company: "Tech Solutions Co.",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$80,000 - $120,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in Computer Science",
    postedDate: "2025-10-01",
    expiryDate: "2025-11-01",
    description: [
      "Develop and maintain high-quality software using modern frameworks.",
      "Collaborate with product and design teams to define and implement new features.",
      "Participate in code reviews and ensure code quality and performance."
    ],
    requirements: [
      "Proficiency in JavaScript/TypeScript and one modern framework (React, Angular, or Vue).",
      "Experience with cloud services (AWS, Azure, or GCP).",
      "Strong understanding of data structures and algorithms."
    ]
  },
  {
    id: "job-2",
    title: "Product Manager",
    company: "Innovate Ltd.",
    jobLocation: "Abuja, Nigeria",
    type: "Full-time",
    category: "Product Management",
    salary: "$90,000 - $130,000",
    jobLevel: "Senior-level",
    experience: "5+ years",
    education: "Bachelor's Degree in Business or Engineering",
    postedDate: "2025-10-02",
    expiryDate: "2025-11-02",
    description: [
      "Define the product strategy, roadmap, and requirements for a key product area.",
      "Work closely with engineering, design, and marketing to launch new features.",
      "Analyze market trends and user feedback to inform product decisions."
    ],
    requirements: [
      "Proven experience as a Product Manager in a tech-driven environment.",
      "Excellent communication and presentation skills.",
      "Experience with agile development methodologies."
    ]
  },
  {
    id: "job-3",
    title: "Data Analyst",
    company: "DataCorp Analytics",
    jobLocation: "Port Harcourt, Nigeria",
    type: "Full-time",
    category: "Data Science",
    salary: "$60,000 - $90,000",
    jobLevel: "Entry-level",
    experience: "1+ years",
    education: "Bachelor's Degree in Statistics or Mathematics",
    postedDate: "2025-10-03",
    expiryDate: "2025-11-03",
    description: [
      "Collect, process, and perform statistical analyses on large datasets.",
      "Develop dashboards and reports to visualize key business metrics.",
      "Provide actionable insights to various departments."
    ],
    requirements: [
      "Proficiency in SQL and at least one programming language (Python or R).",
      "Experience with data visualization tools (Tableau, Power BI, or similar).",
      "Strong analytical and problem-solving skills."
    ]
  },
  {
    id: "job-4",
    title: "UX/UI Designer",
    company: "Creative Minds Agency",
    jobLocation: "Lagos, Nigeria",
    type: "Contract",
    category: "Design",
    salary: "$70,000 - $100,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in Design or a related field",
    postedDate: "2025-10-04",
    expiryDate: "2025-11-04",
    description: [
      "Design intuitive and aesthetically pleasing user interfaces.",
      "Conduct user research, usability testing, and analyze feedback.",
      "Create wireframes, prototypes, and high-fidelity designs."
    ],
    requirements: [
      "Expertise with design and prototyping tools (Figma, Sketch, Adobe XD).",
      "Strong portfolio demonstrating successful UX/UI projects.",
      "Understanding of accessibility and human-centered design principles."
    ]
  },
  {
    id: "job-5",
    title: "Digital Marketing Specialist",
    company: "Growth Hacking Experts",
    jobLocation: "Remote, Nigeria",
    type: "Full-time",
    category: "Marketing",
    salary: "$50,000 - $75,000",
    jobLevel: "Mid-level",
    experience: "2+ years",
    education: "Bachelor's Degree in Marketing or Communications",
    postedDate: "2025-10-05",
    expiryDate: "2025-11-05",
    description: [
      "Plan and execute all digital marketing, including SEO/SEM, email, social media, and display advertising.",
      "Measure and report on the performance of all digital marketing campaigns.",
      "Identify trends and insights, and optimize spend and performance based on insights."
    ],
    requirements: [
      "Proven working experience in digital marketing.",
      "Solid knowledge of website analytics tools (e.g., Google Analytics).",
      "Experience in setting up and optimizing Google Adwords campaigns."
    ]
  },
  {
    id: "job-6",
    title: "HR Manager",
    company: "People First Solutions",
    jobLocation: "Abuja, Nigeria",
    type: "Full-time",
    category: "Human Resources",
    salary: "$70,000 - $100,000",
    jobLevel: "Senior-level",
    experience: "5+ years",
    education: "Master's Degree in Human Resources or Business Admin",
    postedDate: "2025-10-06",
    expiryDate: "2025-11-06",
    description: [
      "Oversee all HR functions, including recruitment, compensation, and employee relations.",
      "Develop and implement HR policies and procedures.",
      "Ensure legal compliance throughout human resource management."
    ],
    requirements: [
      "Extensive knowledge of Nigerian labor law.",
      "Excellent leadership and team management skills.",
      "Experience with HRIS systems."
    ]
  },
  {
    id: "job-7",
    title: "Financial Analyst",
    company: "Global Finance Group",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Finance",
    salary: "$75,000 - $110,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in Finance or Accounting",
    postedDate: "2025-10-07",
    expiryDate: "2025-11-07",
    description: [
      "Conduct financial forecasting, reporting, and operational metrics tracking.",
      "Analyze financial data and create financial models for decision support.",
      "Identify and drive process improvements, including the creation of standard reporting."
    ],
    requirements: [
      "Strong proficiency with Microsoft Excel and financial modeling.",
      "In-depth understanding of financial principles and accounting practices.",
      "CFA or equivalent certification is a plus."
    ]
  },
  {
    id: "job-8",
    title: "Customer Support Specialist",
    company: "Service Excellence Co.",
    jobLocation: "Ibadan, Nigeria",
    type: "Part-time",
    category: "Customer Service",
    salary: "$30,000 - $45,000",
    jobLevel: "Entry-level",
    experience: "0-1 years",
    education: "High School Diploma or equivalent",
    postedDate: "2025-10-08",
    expiryDate: "2025-11-08",
    description: [
      "Manage incoming calls and customer service inquiries.",
      "Identify and assess customers' needs to achieve satisfaction.",
      "Provide accurate, valid and complete information by using the right methods/tools."
    ],
    requirements: [
      "Excellent verbal and written communication skills.",
      "Ability to handle high-stress situations with professionalism.",
      "Familiarity with CRM systems and practices."
    ]
  },
  {
    id: "job-9",
    title: "Sales Executive",
    company: "Market Movers Inc.",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Sales",
    salary: "$60,000 - $95,000",
    jobLevel: "Mid-level",
    experience: "2+ years",
    education: "Bachelor's Degree in Business Administration",
    postedDate: "2025-10-09",
    expiryDate: "2025-11-09",
    description: [
      "Actively seek out new sales opportunities through cold calling, networking, and social media.",
      "Set up meetings with potential clients and listen to their wishes and concerns.",
      "Negotiate/close deals and handle complaints or objections."
    ],
    requirements: [
      "Proven experience as a Sales Executive or relevant role.",
      "Proficiency in English and excellent knowledge of MS Office.",
      "Thorough understanding of marketing and negotiating techniques."
    ]
  },
  {
    id: "job-10",
    title: "Operations Manager",
    company: "Logistics Pro",
    jobLocation: "Kano, Nigeria",
    type: "Full-time",
    category: "Operations",
    salary: "$85,000 - $125,000",
    jobLevel: "Senior-level",
    experience: "7+ years",
    education: "Master's Degree in Operations Management or Supply Chain",
    postedDate: "2025-10-10",
    expiryDate: "2025-11-10",
    description: [
      "Oversee daily operations of the company and the work of executives.",
      "Establish and track operational goals and metrics.",
      "Ensure all company operations comply with legal and regulatory standards."
    ],
    requirements: [
      "Proven work experience as Operations Manager or similar role.",
      "Knowledge of organizational effectiveness and operations management.",
      "Familiarity with financial and customer service principles."
    ]
  },
  {
    id: "job-11",
    title: "Frontend Developer",
    company: "Design First Tech",
    jobLocation: "Remote, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$70,000 - $110,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in Computer Science",
    postedDate: "2025-10-11",
    expiryDate: "2025-11-11",
    description: [
      "Build and maintain user-facing features using React.js and modern web technologies.",
      "Ensure the technical feasibility of UI/UX designs.",
      "Optimize applications for maximum speed and scalability."
    ],
    requirements: [
      "Strong proficiency in HTML, CSS, and JavaScript/ES6+.",
      "Deep experience with React and its ecosystem (Redux, Hooks, etc.).",
      "Understanding of server-side rendering is a plus."
    ]
  },
  {
    id: "job-12",
    title: "Scrum Master",
    company: "AgileWorks",
    jobLocation: "Abuja, Nigeria",
    type: "Contract",
    category: "Project Management",
    salary: "$95,000 - $140,000",
    jobLevel: "Senior-level",
    experience: "4+ years",
    education: "Certified Scrum Master (CSM) or equivalent",
    postedDate: "2025-10-12",
    expiryDate: "2025-11-12",
    description: [
      "Facilitate Scrum events and ensure the team adheres to Scrum theory, practices, and rules.",
      "Coach the Development Team in self-organization and cross-functionality.",
      "Remove impediments and foster a productive environment."
    ],
    requirements: [
      "Proven experience as a Scrum Master for a software development team.",
      "Good skills and knowledge of servant leadership, facilitation, and conflict resolution.",
      "Knowledge of multiple agile frameworks (Kanban, XP, etc.)."
    ]
  },
  {
    id: "job-13",
    title: "Content Writer",
    company: "Content King Ltd.",
    jobLocation: "Remote, Nigeria",
    type: "Freelance",
    category: "Writing/Editorial",
    salary: "$40,000 - $60,000",
    jobLevel: "Entry-level",
    experience: "1+ years",
    education: "Bachelor's Degree in English, Journalism, or Marketing",
    postedDate: "2025-10-13",
    expiryDate: "2025-11-13",
    description: [
      "Research industry-related topics and create compelling, engaging content (articles, blog posts, website copy).",
      "Proofread and edit copy for grammatical errors, punctuation, and style.",
      "Optimize content for search engines (SEO)."
    ],
    requirements: [
      "Excellent writing and editing skills in English.",
      "Experience with SEO best practices and keyword research.",
      "A portfolio of published articles."
    ]
  },
  {
    id: "job-14",
    title: "Cloud Architect",
    company: "Future Cloud Services",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$120,000 - $180,000",
    jobLevel: "Director",
    experience: "8+ years",
    education: "Master's Degree in Computer Science or Engineering",
    postedDate: "2025-10-14",
    expiryDate: "2025-11-14",
    description: [
      "Design and implement scalable, highly available, and fault-tolerant systems on AWS/Azure/GCP.",
      "Develop and maintain cloud governance policies and standards.",
      "Lead a team of engineers in deploying and managing cloud infrastructure."
    ],
    requirements: [
      "Extensive experience with at least one major cloud provider and its services.",
      "Strong understanding of networking, security, and DevOps practices (CI/CD, IaC).",
      "Cloud Architect certification (e.g., AWS Certified Solutions Architect - Professional)."
    ]
  },
  {
    id: "job-15",
    title: "Junior Accountant",
    company: "Accurate Books Co.",
    jobLocation: "Port Harcourt, Nigeria",
    type: "Full-time",
    category: "Accounting",
    salary: "$45,000 - $65,000",
    jobLevel: "Entry-level",
    experience: "1+ years",
    education: "Bachelor's Degree in Accounting or Finance",
    postedDate: "2025-10-15",
    expiryDate: "2025-11-15",
    description: [
      "Assist with the preparation of financial statements and reports.",
      "Manage accounts payable and receivable.",
      "Perform bank reconciliations and general ledger maintenance."
    ],
    requirements: [
      "Solid understanding of basic accounting principles.",
      "Proficiency in MS Office, especially Excel.",
      "Experience with accounting software (QuickBooks, SAP, etc.)."
    ]
  },
  {
    id: "job-16",
    title: "Quality Assurance Tester",
    company: "Reliable Software Inc.",
    jobLocation: "Abuja, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$60,000 - $90,000",
    jobLevel: "Mid-level",
    experience: "2+ years",
    education: "Bachelor's Degree in a technical field or equivalent experience",
    postedDate: "2025-10-16",
    expiryDate: "2025-11-16",
    description: [
      "Design and execute test plans and test cases for new features.",
      "Identify, document, and track bugs and inconsistencies.",
      "Work closely with developers to ensure timely resolution of issues."
    ],
    requirements: [
      "Experience with various testing methodologies (manual and automated).",
      "Familiarity with bug tracking tools (Jira, Asana, etc.).",
      "Knowledge of at least one scripting language for test automation is a plus."
    ]
  },
  {
    id: "job-17",
    title: "Executive Assistant",
    company: "Leadership Offices",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Administrative",
    salary: "$55,000 - $80,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Associate's or Bachelor's Degree",
    postedDate: "2025-10-17",
    expiryDate: "2025-11-17",
    description: [
      "Provide high-level administrative support to the CEO/Executive Team.",
      "Manage complex calendars, arrange travel, and schedule meetings.",
      "Prepare reports, presentations, and correspondence."
    ],
    requirements: [
      "Proven experience as an Executive Assistant or Senior Administrator.",
      "Excellent organizational and time management skills.",
      "Discretion and confidentiality."
    ]
  },
  {
    id: "job-18",
    title: "Technical Writer",
    company: "Documentation Experts",
    jobLocation: "Remote, Nigeria",
    type: "Contract",
    category: "Writing/Editorial",
    salary: "$65,000 - $95,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in a technical field or Journalism",
    postedDate: "2025-10-18",
    expiryDate: "2025-11-18",
    description: [
      "Produce high-quality documentation that is appropriate for its intended audience.",
      "Write easy-to-understand user manuals, technical specifications, and API documentation.",
      "Work with internal teams to obtain an in-depth understanding of the product and documentation requirements."
    ],
    requirements: [
      "Proven working experience in writing technical documentation.",
      "Ability to quickly grasp complex technical concepts and make them easily understandable.",
      "Proficiency in document authoring tools."
    ]
  },
  {
    id: "job-19",
    title: "DevOps Engineer",
    company: "Automation Pro",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$100,000 - $150,000",
    jobLevel: "Senior-level",
    experience: "5+ years",
    education: "Bachelor's Degree in Computer Science or equivalent",
    postedDate: "2025-10-19",
    expiryDate: "2025-11-19",
    description: [
      "Implement and manage CI/CD pipelines (e.g., Jenkins, GitLab CI).",
      "Manage and optimize cloud infrastructure using Infrastructure as Code (e.g., Terraform, Ansible).",
      "Monitor system performance and troubleshoot production issues."
    ],
    requirements: [
      "Strong background in Linux administration and scripting (Bash, Python).",
      "Expertise with containerization (Docker, Kubernetes).",
      "Experience with monitoring and logging tools (Prometheus, ELK stack)."
    ]
  },
  {
    id: "job-20",
    title: "Business Development Manager",
    company: "Strategy & Growth Inc.",
    jobLocation: "Abuja, Nigeria",
    type: "Full-time",
    category: "Business Development",
    salary: "$80,000 - $120,000",
    jobLevel: "Senior-level",
    experience: "5+ years",
    education: "MBA or Master's in a relevant field is preferred",
    postedDate: "2025-10-20",
    expiryDate: "2025-11-20",
    description: [
      "Develop a growth strategy focused both on financial gain and customer satisfaction.",
      "Conduct research to identify new markets and customer needs.",
      "Arrange business meetings with prospective clients."
    ],
    requirements: [
      "Proven working experience as a Business Development Manager, Sales Executive, or a relevant role.",
      "Experience in proposal writing and contract negotiation.",
      "Strong market knowledge of the Nigerian business landscape."
    ]
  },
  {
    id: "job-21",
    title: "Mechanical Engineer",
    company: "Industrial Innovations",
    jobLocation: "Port Harcourt, Nigeria",
    type: "Full-time",
    category: "Engineering",
    salary: "$70,000 - $110,000",
    jobLevel: "Mid-level",
    experience: "4+ years",
    education: "Bachelor's Degree in Mechanical Engineering",
    postedDate: "2025-10-21",
    expiryDate: "2025-11-21",
    description: [
      "Design, develop, and test all aspects of mechanical components, equipment, and machinery.",
      "Apply engineering principles to design products that meet customer needs.",
      "Conduct system-level testing and analysis."
    ],
    requirements: [
      "Proficiency in CAD software (e.g., AutoCAD, SolidWorks).",
      "Experience with manufacturing processes and materials.",
      "Strong understanding of thermodynamics, fluid mechanics, and structural analysis."
    ]
  },
  {
    id: "job-22",
    title: "UX Researcher",
    company: "User Centric Design",
    jobLocation: "Ibadan, Nigeria",
    type: "Full-time",
    category: "Design",
    salary: "$75,000 - $115,000",
    jobLevel: "Senior-level",
    experience: "4+ years",
    education: "Master's Degree in HCI, Psychology, or related field",
    postedDate: "2025-10-22",
    expiryDate: "2025-11-22",
    description: [
      "Plan and conduct a variety of user research methods (interviews, surveys, field studies).",
      "Analyze research findings and translate them into actionable insights and design recommendations.",
      "Present research findings to stakeholders."
    ],
    requirements: [
      "Deep knowledge of qualitative and quantitative research methodologies.",
      "Experience working closely with product and design teams.",
      "Excellent communication and storytelling skills."
    ]
  },
  {
    id: "job-23",
    title: "Cybersecurity Analyst",
    company: "Secure Systems Group",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$90,000 - $130,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in IT Security or Computer Science",
    postedDate: "2025-10-23",
    expiryDate: "2025-11-23",
    description: [
      "Monitor security access and conduct security assessments.",
      "Respond to and investigate security alerts and incidents.",
      "Implement and maintain security tools and technologies."
    ],
    requirements: [
      "Experience with SIEM, IDS/IPS, and vulnerability scanning tools.",
      "Strong knowledge of network security and operating system security.",
      "Relevant certifications (e.g., CISSP, CompTIA Security+) are highly desired."
    ]
  },
  {
    id: "job-24",
    title: "Brand Manager",
    company: "Consumer Brands Ltd.",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Marketing",
    salary: "$65,000 - $100,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in Marketing or Business",
    postedDate: "2025-10-24",
    expiryDate: "2025-11-24",
    description: [
      "Develop and implement marketing strategies for the brand.",
      "Monitor market trends and competitive activities.",
      "Manage advertising campaigns and promotional activities."
    ],
    requirements: [
      "Proven work experience as a Brand Manager or Associate Brand Manager.",
      "Excellent understanding of the full marketing mix.",
      "Data-driven thinking and an affinity for numbers."
    ]
  },
  {
    id: "job-25",
    title: "Mobile App Developer (iOS/Android)",
    company: "Mobile First Tech",
    jobLocation: "Remote, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$85,000 - $125,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in Computer Science or Engineering",
    postedDate: "2025-10-25",
    expiryDate: "2025-11-25",
    description: [
      "Design and build advanced applications for the iOS and/or Android platform.",
      "Collaborate with cross-functional teams to define, design, and ship new features.",
      "Work with outside data sources and APIs."
    ],
    requirements: [
      "Proven software development experience and experience with mobile development.",
      "For iOS: proficiency with Swift/Objective-C. For Android: proficiency with Kotlin/Java.",
      "Experience with performance and memory tuning."
    ]
  },
  {
    id: "job-26",
    title: "Supply Chain Analyst",
    company: "Efficient Logistics",
    jobLocation: "Kano, Nigeria",
    type: "Full-time",
    category: "Operations",
    salary: "$60,000 - $90,000",
    jobLevel: "Mid-level",
    experience: "2+ years",
    education: "Bachelor's Degree in Supply Chain Management or equivalent",
    postedDate: "2025-10-26",
    expiryDate: "2025-11-26",
    description: [
      "Analyze data to monitor performance and plan improvements to the supply chain.",
      "Develop and implement strategies to increase efficiency and reduce costs.",
      "Identify opportunities to optimize inventory levels."
    ],
    requirements: [
      "Proven working experience as a Supply Chain Analyst or relevant role.",
      "Familiarity with supply chain processes (inventory management, warehousing, etc.).",
      "Proficiency in data analysis and reporting tools."
    ]
  },
  {
    id: "job-27",
    title: "Public Relations Specialist",
    company: "Media Relations Pro",
    jobLocation: "Abuja, Nigeria",
    type: "Full-time",
    category: "Communications",
    salary: "$55,000 - $85,000",
    jobLevel: "Mid-level",
    experience: "2+ years",
    education: "Bachelor's Degree in PR, Communications, or Journalism",
    postedDate: "2025-10-27",
    expiryDate: "2025-11-27",
    description: [
      "Write and edit press releases, speeches, and other PR collateral.",
      "Develop media relations strategy, seeking high-level placements in print, broadcast, and online media.",
      "Monitor, analyze, and communicate PR results on a quarterly basis."
    ],
    requirements: [
      "Proven experience in developing and executing PR campaigns.",
      "Exceptional writing and editing skills.",
      "Solid experience with media outreach in Nigeria and internationally."
    ]
  },
  {
    id: "job-28",
    title: "Systems Administrator",
    company: "Network Security Experts",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Technology",
    salary: "$70,000 - $105,000",
    jobLevel: "Mid-level",
    experience: "3+ years",
    education: "Bachelor's Degree in IT or a related field",
    postedDate: "2025-10-28",
    expiryDate: "2025-11-28",
    description: [
      "Install, configure, and maintain operating systems, application software, and system management tools.",
      "Ensure high availability and acceptable levels of performance of mission-critical host computer resources.",
      "Perform regular security monitoring to identify any possible intrusions."
    ],
    requirements: [
      "Solid experience in administering and managing Linux and/or Windows environments.",
      "Experience with virtualization and containerization (VMware, Docker).",
      "Knowledge of backup and recovery procedures."
    ]
  },
  {
    id: "job-29",
    title: "Research Scientist (AI/ML)",
    company: "Deep Learning Labs",
    jobLocation: "Remote, Nigeria",
    type: "Full-time",
    category: "Data Science",
    salary: "$110,000 - $170,000",
    jobLevel: "Senior-level",
    experience: "5+ years",
    education: "PhD or Master's in Computer Science or a quantitative field",
    postedDate: "2025-10-29",
    expiryDate: "2025-11-29",
    description: [
      "Conduct fundamental and applied research in machine learning and artificial intelligence.",
      "Develop and implement algorithms and models for complex problems.",
      "Publish research findings in top-tier conferences and journals."
    ],
    requirements: [
      "Strong background in machine learning, deep learning, and statistical modeling.",
      "Expertise in programming languages like Python and deep learning frameworks (TensorFlow, PyTorch).",
      "Demonstrated track record of publications and innovative research."
    ]
  },
  {
    id: "job-30",
    title: "Technical Sales Engineer",
    company: "Enterprise Solutions Inc.",
    jobLocation: "Lagos, Nigeria",
    type: "Full-time",
    category: "Sales",
    salary: "$85,000 - $125,000",
    jobLevel: "Mid-level",
    experience: "4+ years",
    education: "Bachelor's Degree in Engineering or a related technical field",
    postedDate: "2025-10-30",
    expiryDate: "2025-11-30",
    description: [
      "Present and demonstrate the technical aspects of products to prospective clients.",
      "Work with the sales team to understand customer requirements and provide technical expertise.",
      "Prepare and deliver technical presentations explaining products or services to customers."
    ],
    requirements: [
      "Proven work experience as a Sales Engineer or Pre-Sales Consultant.",
      "Ability to communicate complex technical concepts clearly.",
      "Knowledge of IT infrastructure, software, or industry-specific technology."
    ]
  }
];

// Map companies to logo filenames in /public
const companyLogoMap: Record<string, string> = {
  'Tech Solutions Co.': 'vercel.svg',
  'Innovate Ltd.': 'next.svg',
  'DataCorp Analytics': 'file.svg',
  'Creative Minds Agency': 'window.svg',
  'Growth Hacking Experts': 'vercel.svg',
  'People First Solutions': 'next.svg',
  'Global Finance Group': 'file.svg',
  'Service Excellence Co.': 'window.svg',
  // Add more mappings as desired; defaults will use globe.svg
};

export const jobsData: Job[] = rawJobs.map((j) => ({
  ...j,
  logo: companyLogoMap[j.company] ?? 'globe.svg',
}));

// no default export — use the named `jobsData` export