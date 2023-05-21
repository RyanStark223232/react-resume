import {
  DownloadIcon,
} from '@heroicons/react/outline';

import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.gif';
import porfolioImage3 from '../images/portfolio/portfolio-3.gif';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';

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
        I'm a dynamic <strong className="text-stone-100">Data Scientist</strong> with a <strong className="text-stone-100">Full-Stack</strong> flair. 
        Seasoned in the trenches of startups, I've mastered the art of Machine Learning + collecting, processing, and presenting data 🤔.
      </p>
    </>
  ),
  actions: [
    {
      href: '/document/CV 2023-05-15.pdf',
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

export const skill_summary = "Machine Learning, Data Visualization, Data Engineering, Algorithm Design";
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
        level: 8,
      },
      {
        name: 'Azure',
        level: 5,
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
        level: 8,
      },
      {
        name: 'Keras',
        level: 7,
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
        name: 'Hadoop',
        level: 3,
      },
      {
        name: 'Spark',
        level: 3,
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
        level: 3,
      }
    ],
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'FreeChatGPT-Mimic-API',
    description: 'API allows you to seamlessly integrate ChatGPT into any simple script, giving you the power to perform tasks such as writing resumes, classifying local directories, and simple Q&A. Especially for people living in places where ChatGPT is now accessible and have a hard time paying for the service.',
    url: 'https://github.com/RyanStark223232/FreeChatGPT-Mimic-API',
    image: porfolioImage4,
  },
  {
    title: 'Hotmob Full-Stack Data Scientist Portfolio',
    description: 'Developed a state-of-the-art AI system that accurately diagnoses the severity of Parkinson\'s disease by analyzing videos of patients performing actions in the UPDRS test, resulting in superior performance compared to existing methods.',
    url: 'https://github.com/RyanStark223232/Pose_PD_Diagnosis',
    image: porfolioImage3,
  },
  {
    title: 'Parkinson\'s Diagnosis from Video of Actions',
    description: 'Developed a state-of-the-art AI system that accurately diagnoses the severity of Parkinson\'s disease by analyzing videos of patients performing actions in the UPDRS test, resulting in superior performance compared to existing methods.',
    url: 'https://github.com/RyanStark223232/Pose_PD_Diagnosis',
    image: porfolioImage2,
  },
  {
    title: 'Card Shuffling Prediction with AI (Recurrent Neural Network)',
    description: 'Utilized Recurrent Neural Network to predict outcome of riffle card shuffling, showcasing room for improvement as AI consistently outperformed existing algorithmic approaches. Investigated reasons for improvement, but a conclusive explanation was not reached.',
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
    GPA: 3.85 <br></br>
    Scholarship/Award: <br></br>
    ● Gold Award for Outstanding Academic Performance <br></br>
    ● Prof SC Loh Scholarship for CSE <br></br>
    ● Li Po Chun Charit T Fund UGD <br></br>
    ● Yu To Sang Memorial Scholarship 2019/20 <br></br>
    ● ELITE Stream Scholarship <br></br>
    ● CodeVita 2018 Hong Kong 1st runner-up (Python & C)
    </p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - June 2023',
    location: 'Hotmob Limited',
    title: 'Data Scientist',
    content: (
      <p>
        ● Transformed web data processing with GPT-2 models, boosting crawling capacity by 10x at half the cost. <br/><br/>
        ● Captivated Prudential HK's Business Intelligence Team with innovative projects, such as fraud prediction using deep learning and revamping data processing system. <br/><br/>
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
      href: 'https://github.com/RyanStark223232/',
    },
    {
      type: ContactType.Fiverr,
      text: 'fiverr.com/ryanstark223232',
      href: 'https://www.fiverr.com/ryanstark223232',
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
