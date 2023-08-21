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
import porfolioImage8 from '../images/portfolio/portfolio-8.gif';
import porfolioImage9 from '../images/portfolio/portfolio-9.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.png';

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
  title: 'Geoffrey Wong Resume',
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
  name: `Geoffrey Wong`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a dynamic <strong className="text-stone-100">Data Scientist</strong> with a <strong className="text-stone-100">Full-Stack</strong> flair.<br/>
        Seasoned in the trenches of startups, I've mastered the art of <strong className="text-stone-100"> Collecting, Processing, and Presenting </strong> data🤔.<br/>
        Google Certified <strong className="text-stone-100"> Professional ML Engineer </strong> and <strong className="text-stone-100"> Project Manager </strong>.<br/>
        Exploring <strong className="text-stone-100"> Large Language Models</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/document/CV.pdf',
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

export const skill_summary = "Machine Learning, Data Visualization, Data Engineering, Algorithm Design, MLOps, Finetuning Large Language Model";
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English (8 is also the IELTS Score)',
        level: 8,
      },
      {
        name: 'Cantonese',
        level: 8,
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
        level: 7,
      },
      {
        name: 'Spark',
        level: 6,
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
        name: 'Databricks',
        level: 4,
      },
      {
        name: 'Tensorflow Extended',
        level: 4,
      }
    ],
  }
];

export const portfolioItems: PortfolioItem[] = [
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
    title: 'Colab-AnimateDiff',
    description: 'A notebook on how to run AnimateDiff on Colab. All credit goes to https://animatediff.github.io/.',
    skills: 'Skills: Stable Diffusion',
    url: 'https://github.com/RyanStark223232/Colab-AnimateDiff',
    image: porfolioImage8
  },
  {
    title: 'LLM-Trainer',
    description: 'Notebooks detailing how to use LoRA to finetune Large Language Model. Run a dummy task to create a virtual assistant who speaks like Rick from Rick and Morty. Added logging using MLflow',
    skills: 'Skills: Fine-Tuning LLM',
    url: 'https://github.com/RyanStark223232/LLM-Trainer',
    image: porfolioImage7,
  },
  {
    title: 'Mass-Cover-Letter-Writer',
    description: 'Automated Tailored Cover Letters: Web Crawling and ChatGPT Combine to Maximize Job Application Success. Save Time, Stand Out!',
    skills: 'Skills: Web Crawling, Retrieval Augmented Generation',
    url: 'https://github.com/RyanStark223232/Mass-Cover-Letter-Writer',
    image: porfolioImage6,
  },
  {
    title: 'Mass-Templated-Document-Processing',
    description: 'Effortless Mass Document Conversion: Unleash ChatGPT\'s Power with Template-Based Solution and Streamlined Processing.',
    skills: 'Skills: Web Crawling, Retrieval Augmented Generation',
    url: 'https://github.com/RyanStark223232/Mass-Templated-Document-Processing',
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
    date: 'Sep 2017',
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
    date: 'June 2023 - Now',
    location: 'The Chinese University of Hong Kong Psychiatry Department',
    title: 'Part-time Research Assistant',
    content: (<p/>),
  },
  {
    date: 'July 2021 - June 2023',
    location: 'Hotmob Limited',
    title: 'Data Scientist',
    content: (
      <p>
        ● Transformed web data processing with GPT-2 models, boosting crawling capacity by 10x at half the cost. <br/><br/>
        ● Captivated Client's (Global Insurance Company) Business Intelligence Team with innovative projects, such as fraud prediction using deep learning and revamping data processing system. <br/><br/>
        ● Automated company's data pipeline with Airflow, Apache Beam, and Google Cloud, enhancing efficiency and modularizing processes. <br/><br/>
        ● Created impactful dashboards highlighting exceptional behavior in subscribed emails, browsing patterns, and location-based data. <br/><br/>
        ● For more detail, download my <a href="document/work-porfolio-hotmob-downloadable.pdf" style={{ color:'SteelBlue'}}>Porfolio Summary PDF</a>.
      </p>
    ),
  },
  {
    date: 'July 2020 - September 2020',
    location: 'Flying Milk Tea Limited',
    title: 'AI Developer Summer Intern',
    content: (
      <p>
        ● Performed Web Crawling on Multiple Art-Sharing Websites to Collect Sample 3D Model Data <br></br>
        ● Built Generator that Converts 2D Images into 3D Models <br></br>
      </p>
    ),
  },
];

export const cert_summary = "Professional Machine Learning Engineer, Google Project Management Professional Certificate, Large Language Model Learning Path, MXNet Workshop"
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
      text: 'ryan5tark223232@gmail.com',
      href: 'mailto:ryan5tark223232@gmail.com',
    },
    {
      type: ContactType.Github,
      text: 'RyanStark223232',
      href: 'https://github.com/RyanStark223232',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Geoffrey Wong',
      href: 'https://www.linkedin.com/in/geoffrey-wong-861b51169/',
    },
    {
      type: ContactType.Medium,
      text: 'medium.com/@ryan5tark223232',
      href: 'https://medium.com/@ryan5tark223232',
    },
    {
      type: ContactType.Fiverr,
      text: 'fiverr.com/ryanstark223232',
      href: 'https://www.fiverr.com/ryanstark223232',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
];
