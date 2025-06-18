import {
  DownloadIcon,
} from '@heroicons/react/outline';

import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.gif';
import porfolioImage3 from '../images/portfolio/portfolio-3.gif';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage9 from '../images/portfolio/portfolio-9.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.png';
import porfolioImage11 from '../images/portfolio/portfolio-11.png';
import porfolioImage12 from '../images/portfolio/portfolio-12.png';

import {
  About,
  ContactSection,
  ContactType,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'Geoffrey CV',
  description: "Credit: site built with Tim Baker's react resume template",
};

export const SectionId = {
  About: 'about',
  Resume: 'resume',
  Skills: 'skills',
  Portfolio: 'portfolio',
  Contact: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

export const heroData: About = {
  name: `Geoffrey`,
  description: (
    <>
      <style>
        {`
          .text-deep-blue {
            color: #dcf1f2; /* Deep blue color */
            text-shadow: 1px 1px 0 #000; /* Black text outline */
          }
        `}
      </style>
      <p className="prose-sm text-deep-blue sm:prose-base lg:prose-lg">
        I'm a dynamic <strong>Full-Stack Data Scientist</strong>.<br/>
        Seasoned in the trenches of startups, I've mastered the art of <strong> Collecting, Processing, and Presenting </strong> data🤔.<br/>
        Google Certified <strong> Professional ML Engineer </strong> and <strong> Project Manager </strong>.<br/>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/19VbDM9a4DRx4-bOvTjKU4ZwjPb9klSiFl8WTDiuHK4I/edit?usp=sharing',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

export const skill_summary = "- Machine Learning\n- Data Visualization\n- Data Engineering\n- Algorithm Design\n- MLOps\n- Finetuning Large Language Model";
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English (8.5 is also the IELTS Score)',
        level: 8.5,
      },
      {
        name: 'Cantonese',
        level: 8.5,
      },
      {
        name: 'Mandarin',
        level: 5,
      },
    ],
  },
  {
    name: 'Cloud Platform',
    skills: [
      {
        name: 'Google Cloud Platform',
        level: 9,
      },
      {
        name: 'Azure',
        level: 6,
      },
      {
        name: 'AWS',
        level: 3,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'Pytorch',
        level: 9,
      },
      {
        name: 'Scikit-Learn',
        level: 9,
      },
      {
        name: 'Keras',
        level: 9,
      },
      {
        name: 'Tensorflow',
        level: 7,
      },
    ],
  },
  {
    name: 'Algorithm Design',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'C',
        level: 5,
      },
      {
        name: 'Pick up New Language ☝️',
        level: 4,
      }
    ],
  },
  {
    name: 'Data Engineering',
    skills: [
      {
        name: 'Apache Beam',
        level: 8,
      },
      {
        name: 'Spark',
        level: 7,
      },
      {
        name: 'Hadoop',
        level: 5,
      }
    ],
  },
  {
    name: 'Data Dashboards',
    skills: [
      {
        name: 'Looker (Data) Studio',
        level: 9,
      },
      {
        name: 'Tableau',
        level: 7,
      },
      {
        name: 'PowerBI',
        level: 7,
      }
    ],
  },
  {
    name: 'MLOps',
    skills: [
      {
        name: 'Airflow',
        level: 9,
      },
      {
        name: 'MLflow',
        level: 7,
      },
      {
        name: 'Kubernetes',
        level: 5,
      },
      {
        name: 'Databricks',
        level: 4,
      },
      {
        name: 'Tensorflow Extended',
        level: 4,
      }
    ],
  },
  {
    name: 'Data Analytic Language',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'DAX (PowerBI)',
        level: 7,
      },
      {
        name: 'R',
        level: 7,
      },
    ],
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'GCP End-to-End Data Pipeline + Recommendation System',
    description: 'School project in UofC focusing on demonstrating ability to create Machine Learning Applications on Cloud',
    skills: 'Skills: Data Engineering, Machine Learning',
    url: 'https://604project2-team03.github.io/GCP-Data-DevOps/',
    image: porfolioImage12
  },
  {
    title: 'Visualization-based Study on Airline On Time Performance in US',
    description: 'School project in UofC focusing on finding insights using data visualization.',
    skills: 'Skills: Data Visualization',
    url: 'https://uofc601l02g7.github.io/UofC601L02_Project/',
    image: porfolioImage11
  },
  {
    title: 'Youtube Recommendation System Study',
    description: 'This document serves as an experimental notebook outlining the process of replicating a simplified version of the YouTube Recommendation Algorithm.',
    skills: 'Skills: Deep Learning, Recommendation System',
    url: 'https://ryanstark223232.github.io/Youtube-Recommendation-Study/Recommendation.html',
    image: porfolioImage10
  },
  {
    title: 'Optimizing Ad Serving with ML',
    description: 'This is the entrance test that I was required to complete prior to assuming my position as a Data Scientist at Hotmob. I was able to outperform other Data Scientists with over five years of experience.',
    skills: 'Skills: Data Analysis, Hyperparameter Tuning, Explainable ML, Business Insights',
    url: 'https://ryanstark223232.github.io/Hotmob-Entrance-Test/Analyst_Report.html',
    image: porfolioImage9
  },
  {
    title: 'LLM-Trainer (LoRA)',
    description: 'Notebooks detailing how to use LoRA to finetune Large Language Model. Run a dummy task to create a virtual assistant who speaks like Rick from Rick and Morty. Added logging using MLflow',
    skills: 'Skills: Fine-Tuning LLM',
    url: 'https://github.com/RyanStark223232/LLM-Trainer',
    image: porfolioImage7,
  },
  {
    title: 'NowHere: a Mock Travelling Site',
    description: 'My School Project about Software Engineering. My major responsibility is building the landing page and an Image Search for similar travelling destinations using TFJS & Transfer Learning, though it no longer works since Firebase and ML endpoint is expensive',
    skills: 'Skills: Frontend, Machine Learning on Web',
    url: 'https://nowhere-571c3.web.app/#/',
    image: porfolioImage6,
  },
  {
    title: 'Causal-ML Study using DoWhy',
    description: 'A self-study project on Causal ML using DoWhy and a dataset of US Birth Record in 2022. Investigating the treatment effectiveness of NICU to the survival of infant',
    skills: 'Skills: Statistic, Causal ML',
    url: 'https://ryanstark223232.github.io/causalStudy/',
    image: porfolioImage5,
  },
  {
    title: 'FreeChatGPT-Mimic-API',
    description: 'API allows you to seamlessly integrate ChatGPT into any simple script for free. Especially helpful for people living in places where ChatGPT is now accessible and have a hard time paying for the service.',
    skills: 'Skills: Web Crawling',
    url: 'https://github.com/RyanStark223232/FreeChatGPT-Mimic-API',
    image: porfolioImage4,
  },
  {
    title: 'Hotmob Full-Stack Data Scientist Portfolio',
    description: 'A collection of work that I cannot fully disclose. However, I have documented highlights and results to demonstrate my capability.',
    skills: 'Skills: Data Engineering + Science + Analysis',
    url: 'https://github.com/RyanStark223232/work-porfolio-hotmob',
    image: porfolioImage3,
  },
  {
    title: 'Parkinson\'s Diagnosis from Video of Actions',
    description: 'Developed AI system that accurately diagnoses the severity of Parkinson\'s disease by analyzing videos of patients performing actions in the UPDRS test, resulting in superior performance compared to existing methods.',
    skills: 'Skills: Computer Vision, Medical Research',
    url: 'https://github.com/RyanStark223232/Pose_PD_Diagnosis',
    image: porfolioImage2,
  },
  {
    title: 'Card Shuffling Prediction with AI',
    description: 'Utilized Recurrent Neural Network to predict outcome of riffle card shuffling, showcasing room for improvement as AI consistently outperformed existing algorithmic approaches. Investigated reasons for improvement, but a conclusive explanation was not reached.',
    skills: 'Skills: Recurrent Neural Network',
    url: 'https://github.com/RyanStark223232/Card_Shuffle_Prediction',
    image: porfolioImage1,
  },
];

export const education: TimelineItem[] = [
  {
    date: 'Sep 2024 - Now',
    location: 'University of Calgary (CA)',
    title: 'Master of Data Science and Analytics',
    content: <p>
    GPA: 3.96 <br/>
    </p>,
  },
  {
    date: 'Sep 2017 - July 2021',
    location: 'The Chinese University (HK)',
    title: 'BSc (Hons) in Computer Science',
    content: <p>
    GPA: 3.85 <br/>
    Scholarship/Award: <br/>
    ● Gold Award for Outstanding Academic Performance <br/>
    ● Prof SC Loh Scholarship for CSE <br/>
    ● Li Po Chun Charit T Fund UGD <br/>
    ● Yu To Sang Memorial Scholarship 2019/20 <br/>
    ● ELITE Stream Scholarship <br/>
    ● CodeVita 2018 Hong Kong 1st runner-up (Python & C)
    </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2023 - August 2024',
    location: 'The Chinese University of Hong Kong Psychiatry Department',
    title: 'Research Assistant',
    content: (
      <p>
        ● Optimized prediction AUC to 73% in Deep Neural Networks despite a data size of fewer than 300 by implementing data augmentation such as Autoencoding and fast Fourier transform on video data. <br/><br/>
        ● Developed chatbots achieving up to 95% accuracy in emulating the functions of a human data scientist by independently querying SQL databases and producing graphs using an agent-based Large Language Model. <br/><br/>
        ● Slashed 80% of the budget by implementing off-the-shelf Computer Vision AI face masking and LLM into data pipelines to eliminate personally identifiable information, replacing costly manual labeling service. <br/><br/>
      </p>
    ),
  },
  {
    date: 'July 2021 - June 2023',
    location: 'Hotmob Limited',
    title: 'Data Scientist',
    content: (
      <p>
        ● Boosted data extraction efficiency by over 10x at half the cost, while successfully implementing sentiment analysis, interest classification, and keyword extraction through transfer learning with GPT-2 for website comprehension. <br/><br/>
        ● Improved scalability and memory usage by 14x and reduced the processing time by 50% in our ETL pipeline by implementing the max connected component algorithm in the ID matching system.  <br/><br/>
        ● Removed up to 3 hours of manual labor daily with MLOps. Fully automated data pipelines using Airflow, allowing autonomous monitoring of data quality, updating ML models, and generating reports through dashboards. <br/><br/>
        ● Brought in new revenue streams through a partnership with a global insurance company by impressing them with projects incorporating interpretable ML to Azure AI Suites and developing PowerBI dashboards. <br/><br/>
        ● Led cross-functional teams in developing two data dashboards and a Machine Learning fraud detection client project, orchestrating efficient work parallelization to achieve delivery within 1 month. <br/><br/>
        ● Established a fully scalable web crawling system for user profiling capable of processing 15,000 websites daily using Kafka and Kubernetes. <br/><br/>
        ● For more detail, download my <a href="document/work-porfolio-hotmob-downloadable.pdf" style={{ color:'SteelBlue'}}>Portfolio Summary PDF</a>.
      </p>
    ),
  },
  {
    date: 'July 2020 - September 2020',
    location: 'Flying Milk Tea Limited',
    title: 'AI Developer Summer Intern',
    content: (
      <p>
        ● Scraped and processed more than 1,000 3D models sourced from leading art platforms such as Pinterest with AWS and Blender Program for training images to 3D Mesh Generator. <br></br>
      </p>
    ),
  },
];

export const cert_summary = "- Professional Machine Learning Engineer\n- Google Project Management Professional Certificate\n- Large Language Model Learning Path\n- MXNet Workshop\n- Certified Kubernetes Administrator (CKA)"
export const certificate: TimelineItem[] = [
  {
    date: 'June 2023 - June 2025',
    location: 'Google Cloud Certified',
    title: 'Professional Machine Learning Engineer',
    content: 
    <a href="https://google.accredible.com/40a5196e-5ff5-43fa-b7e7-b6b25939faa7"><img 
      alt="Professional Machine Learning Engineer" 
      src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/76397785"
    /></a>,
  },
  {
    date: 'July 2023 Onward',
    location: 'Coursera',
    title: 'Google Project Management Certificate',
    content: 
    <a href="https://www.credly.com/badges/7aa1ce4d-666c-4065-bd91-54066062e5a2/public_url"><img 
      alt="Google Project Management Certificate" 
      src="images/google-project-management-certificate.2.png"
    /></a>,
  },
  {
    date: 'June 2023 Onward',
    location: 'Cloud Skill Boost',
    title: 'Google\'s Large Language Model (LLM) Learning Path',
    content: (
      <a href="https://www.cloudskillsboost.google/public_profiles/2fec738c-c5ed-4828-9be9-700b4a7de855">
        <img alt="GenAI Path" src="images/GenAI_Path_Completion.png"/>
      </a>
    ),
  },
  {
    date: 'June 2025 Onward',
    location: 'Udemy',
    title: 'Certified Kubernetes Administrator (CKA)',
    content: (
      <a href="https://www.udemy.com/certificate/UC-745259c4-3062-45ce-8bb8-2c6d74a9df76/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com">
        <img alt="CKA" src="images/kubernetes_cert.jpg"/>
      </a>
    ),
  },
  {
    date: 'Auguest 2019 Onward',
    location: 'AWS',
    title: 'Dive into Deep Learning Using MXNet Workshop',
    content: (
      <img alt="MXNet Cert" src="images/MXNet_Cert.png"/>
    ),
  },
];

export const contact: ContactSection = {
  headerText: 'Contact',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'geoffreywonghin@gmail.com',
      href: 'mailto:geoffreywonghin@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'RyanStark223232',
      href: 'https://github.com/RyanStark223232',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Geoffrey Wong',
      href: 'https://www.linkedin.com/in/geoffreywonghin/',
    },
    {
      type: ContactType.Medium,
      text: 'medium.com/@ryan5tark223232',
      href: 'https://medium.com/@ryan5tark223232',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
];
