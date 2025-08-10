export const contactInfo = [
  {
    image: '/images/contact/linkedin.png',
    text: 'Connect with me on LinkedIn',
    linkText: 'LinkedIn Profile',
    linkUrl: 'https://www.linkedin.com/in/geoffreywonghin/',
  },
  {
    image: '/images/contact/gmail.png',
    text: 'Send me an email anytime',
    linkText: 'Email Me',
    linkUrl: 'mailto:geoffreywonghin@gmail.com',
  },
  {
    image: '/images/contact/mobile.png',
    text: 'Give me a call or text',
    linkText: '+1 (825) 945 7174',
  },
  {
    image: '/images/contact/github.png',
    text: 'Check out my projects',
    linkText: 'GitHub Repos',
    linkUrl: 'https://github.com/RyanStark223232',
  },
]

export const portfolioItems = [
  {
    title: 'GCP End-to-End Data Pipeline + Recommendation System',
    image: '/images/portfolio/portfolio-12.png',
    skillsUsed: ['Apache Beam', 'GCP', 'Looker', 'Matrix Factorization', 'Recommender System'],
    description:
      'School project in UofC focusing on demonstrating ability to create Machine Learning Applications on Cloud.',
    link: 'https://ryanstark223232.github.io/fullstack-GCP/',
  },
  {
    title: 'Visualization-based Study on Airline On Time Performance in US',
    image: '/images/portfolio/portfolio-11.png',
    skillsUsed: ['Data Visualization'],
    description: 'School project in UofC focusing on finding insights using data visualization.',
    link: 'https://uofc601l02g7.github.io/UofC601L02_Project/',
  },
  {
    title: 'Youtube Recommendation System Study',
    image: '/images/portfolio/portfolio-10.png',
    skillsUsed: ['Deep Learning', 'Recommender System'],
    description:
      'This document serves as an experimental notebook outlining the process of replicating a simplified version of the YouTube Recommendation Algorithm.',
    link: 'https://ryanstark223232.github.io/Youtube-Recommendation-Study/Recommendation.html',
  },
  {
    title: 'Optimizing Ad Serving with ML',
    image: '/images/portfolio/portfolio-9.png',
    skillsUsed: [
      'Data Analysis',
      'Hyperparameter Tuning',
      'HyperOpt',
      'Explainable ML',
      'Business Intelligence',
    ],
    description:
      'This is the entrance test that I was required to complete prior to assuming my position as a Data Scientist at Hotmob. I was able to outperform other Data Scientists with over five years of experience.',
    link: 'https://ryanstark223232.github.io/Hotmob-Entrance-Test/Analyst_Report.html',
  },
  {
    title: 'Forcasting App Usage with ARIMA & LSTM',
    image: '/images/portfolio/portfolio-8.png',
    skillsUsed: ['Forcasting', 'PyTorch', 'LSTM'],
    description:
      'Focusing on the usage of communication apps, which exhibit a seasonal pattern of higher usage during work hours, the demonstration reveals that LSTM is superior at capturing more complex patterns compared to ARIMA, with a lower Mean Squared Error.',
    link: 'https://ryanstark223232.github.io/fullstack-GCP/html/App_Usage_LSTM_forcasting.html',
  },
  {
    title: 'Linear Regression Analysis on App Usage vs Time',
    image: '/images/portfolio/portfolio-13.png',
    skillsUsed: ['Linear Regression', 'R'],
    description:
      'Analyze the usage of different types of apps versus the time of day and week using linear regression, including assumption checking.',
    link: 'https://ryanstark223232.github.io/fullstack-GCP/html/App-Usage-and-Time.html',
  },
  {
    title: 'Causal-ML Study using DoWhy',
    image: '/images/portfolio/portfolio-5.png',
    skillsUsed: ['Statistic', 'Causal ML'],
    description:
      'A self-study project on Causal ML using DoWhy and a dataset of US Birth Record in 2022. Investigating the treatment effectiveness of NICU to the survival of infant.',
    link: 'https://ryanstark223232.github.io/causalStudy/',
  },
  {
    title: "Parkinson's Diagnosis from Video of Actions",
    image: '/images/portfolio/portfolio-2.gif',
    skillsUsed: ['Computer Vision', 'Medical Research'],
    description:
      "Developed AI system that accurately diagnoses the severity of Parkinson's disease by analyzing videos of patients performing actions in the UPDRS test, resulting in superior performance compared to existing methods.",
    link: 'https://github.com/RyanStark223232/Pose_PD_Diagnosis',
  },
  {
    title: 'Hotmob Full-Stack Data Scientist Portfolio',
    image: '/images/portfolio/portfolio-3.gif',
    skillsUsed: ['Data Engineering', 'Data Science', 'Data Analysis'],
    description:
      'A collection of work that I cannot fully disclose. However, I have documented highlights and results to demonstrate my capability.',
    link: 'https://github.com/RyanStark223232/work-porfolio-hotmob',
  },
  {
    title: 'Card Shuffling Prediction with AI',
    image: '/images/portfolio/portfolio-1.png',
    skillsUsed: ['Keras', 'LSTM'],
    description:
      'Utilized Recurrent Neural Network to predict outcome of riffle card shuffling, showcasing room for improvement as AI consistently outperformed existing algorithmic approaches. Investigated reasons for improvement, but a conclusive explanation was not reached.',
    link: 'https://github.com/RyanStark223232/Card_Shuffle_Prediction',
  },
  {
    title: 'LLM-Trainer (LoRA)',
    image: '/images/portfolio/portfolio-7.png',
    skillsUsed: ['Huggingface', 'LLM', 'LoRA'],
    description:
      'Notebooks detailing how to use LoRA to finetune Large Language Model. Run a dummy task to create a virtual assistant who speaks like Rick from Rick and Morty. Added logging using MLflow.',
    link: 'https://github.com/RyanStark223232/LLM-Trainer',
  },
  {
    title: 'NowHere: a Mock Travelling Site',
    image: '/images/portfolio/portfolio-6.png',
    skillsUsed: ['Frontend', 'ReactJS', 'TensorFlowJS'],
    description:
      'My School Project about Software Engineering. My major responsibility is building the landing page and an Image Search for similar travelling destinations using TFJS & Transfer Learning, though it no longer works since Firebase and ML endpoint is expensive.',
    link: 'https://nowhere-571c3.web.app/#/',
  },
]

export const workExperience = [
  {
    position: 'Research Assistant',
    company: 'Shatin Hospital',
    period: '06/2023 - 08/2024',
    achievements: [
      'Developed agentic chatbots in LangChain with 95% accuracy to autonomously query SQL databases and generate visual reports.',
      'Boosted the Computer Vision Diagnostic model AUC to 73% by applying advanced feature engineering and data augmentation, like Autoencoding and FFT.',
      'Cut operational costs by 80% by integrating pre-trained face masking CV models and LLMs into ML pipelines, enabling real-time personal information redaction at scale.',
    ],
  },
  {
    position: 'Data Scientist',
    company: 'Hotmob Limited',
    period: '07/2021 - 06/2023',
    achievements: [
      'Increased NLP website comprehension system throughput by 10x while reducing inference cost by 50% via GPT-2 fine-tuning and optimized deployment.',
      'Scaled ETL pipeline performance 14x by implementing a graph-based max connected component algorithm for high-volume ID matching.',
      'Automated model retraining and data quality checks using Airflow and MLflow, eliminating up to 3 hours of manual intervention daily.',
      'Led cloud MLOps enablement for a global insurance provider, integrating interpretable ML solutions, managing SAS-to-Databricks migration, and deploying Power BI dashboards for real-time insights.',
    ],
  },
  {
    position: 'AI Developer Summer Intern',
    company: 'Flying Milk Tea Limited',
    period: '07/2020 - 09/2020',
    achievements: [
      'Scraped and processed over 1,000 3D models from top art platforms like Pinterest, utilizing AWS and Blender to generate training data for a 3D mesh generation system.',
    ],
  },
]

export const education = [
  {
    degreeName: 'MDSc. Data Science and Analytics in Health Science',
    school: 'University of Calgary',
    gpa: '3.98',
    awards: [],
  },
  {
    degreeName: 'BSc. Computer Science in Artificial Intelligence',
    school: 'Chinese University of Hong Kong',
    gpa: '3.85',
    awards: [
      'Dean’s List',
      'Gold Award for Outstanding Academic Performance',
      'Prof SC Loh Scholarship for CSE',
      'Li Po Chun Charit T Fund UGD',
      'Yu To Sang Memorial Scholarship 2019/20',
      'ELITE Stream Scholarship',
      'CodeVita 2018 Hong Kong 1st runner-up (Python & C)',
    ],
  },
]

export const skills = [
  {
    session: 'Programming Languages',
    skills: ['Python', 'SQL', 'Java', 'C', 'R', 'DAX', 'Pick up New Language ☝️'],
  },
  {
    session: 'Machine Learning',
    skills: ['Pytorch', 'Scikit-Learn', 'Keras', 'Tensorflow', 'MLFlow', 'HyperOpt'],
  },
  {
    session: 'Large Language Model',
    skills: ['Huggingface', 'LangChain (Agents)', 'FAISS', 'Pinecone', 'LoRA (PEFT)', 'RAG'],
  },
  {
    session: 'Orchestration & Deployment',
    skills: ['Airflow', 'Kubernetes', 'FastAPI', 'Flask'],
  },
  {
    session: 'Data Engineering',
    skills: ['PySpark', 'Apache Beam', 'Databricks', 'Hadoop'],
  },
  {
    session: 'Data Dashboards',
    skills: ['Looker (Data) Studio', 'Tableau', 'Power BI'],
  },
  {
    session: 'Cloud Platform',
    skills: ['Google Cloud Platform', 'Azure', 'AWS'],
  },
  {
    session: 'Spoken Languages',
    skills: ['English', 'Cantonese', 'Mandarin'],
  },
]

export const certifications = [
  {
    certName: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Udemy',
    period: '06/2025',
    image: '/images/certifications/kubernetes_cert.jpg',
    link: 'https://www.udemy.com/certificate/UC-745259c4-3062-45ce-8bb8-2c6d74a9df76/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com',
  },
  {
    certName: 'Google Project Management Certificate',
    issuer: 'Coursera',
    period: '07/2023',
    image: '/images/certifications/google-project-management-certificate.2.png',
    link: 'https://www.credly.com/badges/7aa1ce4d-666c-4065-bd91-54066062e5a2/public_url',
  },
  {
    certName: 'Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    period: '06/2023 - 06/2025',
    image: '/images/certifications/Google_ML_Engineer.png',
    link: 'https://google.accredible.com/40a5196e-5ff5-43fa-b7e7-b6b25939faa7',
  },
  {
    certName: "Google's Large Language Model (LLM) Learning Path",
    issuer: 'Cloud Skill Boost',
    period: '06/2023',
    image: '/images/certifications/GenAI_Path_Completion.png',
    link: 'https://www.cloudskillsboost.google/public_profiles/2fec738c-c5ed-4828-9be9-700b4a7de855',
  },
  {
    certName: 'Dive into Deep Learning Using MXNet Workshop',
    issuer: 'AWS',
    period: '08/2019',
    image: '/images/certifications/MXNet_Cert.png',
  },
]

export const name = 'Geoffrey Wong Hin'
export const careerSummary =
  'Results-driven Data Scientist and AI Developer with over 3 years of experience designing scalable ML pipelines, developing NLP and computer vision solutions, and optimizing performance in resource-constrained environments. Proven track record of boosting efficiency, automating workflows, and delivering impactful data products in both academic and industry settings.'
export const resumeLink =
  'https://docs.google.com/document/d/1TFEV5j4_wGhTOM0Qm_G8kPaXMZFgKSpW4ei3i6EpCUM/edit?usp=sharing'

export const homePageMeta = {
  title: 'Geoffrey Wong Hin | Full-stack Data Scientist',
  description: 'Welcome to my portfolio landing page.',
}
