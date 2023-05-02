import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
} from '@heroicons/react/outline';

//import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
//import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import springImage from '../images/00058-701382191.png';
import summerImage from '../images/00060-256204503.png';
import autumnImage from '../images/00044-3704105173.png';
import winterImage from '../images/00055-756246651.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.png';
import porfolioImage2 from '../images/portfolio/portfolio-2.png';
import porfolioImage3 from '../images/portfolio/portfolio-3.gif';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.gif';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import profilepic from '../images/profilepic.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume',
  description: "Credit: site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'about',
  About: 'about',
  Resume: 'resume',
  Skills: 'skills',
  Portfolio: 'portfolio',
  Contact: 'contact',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc1: springImage,
  imageSrc2: summerImage,
  imageSrc3: autumnImage,
  imageSrc4: winterImage,
  name: `Geoffrey Wong`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Technically my job title is <strong className="text-stone-100">Data Scientist</strong>.
        Though working in a startup company gave me experience from collecting and processing data from requests
        to data reporting and pitching. I think the word is <strong className="text-stone-100">Full-Stack Data Scientist 🤔</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
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

/**
 * About section
 */
const tdy = new Date().getTime();
const birthday = new Date('1999-08-21T13:29:15.524486Z').getTime();
const years_lived = Math.floor((tdy - birthday)/1000/60/60/24/365);

export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Use this bio section as your way of describing yourself and saying what you do, what technologies you like
  to use or feel most comfortable with, describing your personality, or whatever else you feel like throwing
  in.`,
  aboutItems: [
    {label: 'Age', text: '' + years_lived, Icon: CalendarIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English (The IELTS Score)',
        level: 8.5,
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
    name: 'Cloud Platform',
    skills: [
      {
        name: 'Google Cloud',
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
    name: 'Programming',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Java',
        level: 4,
      },
      {
        name: 'C',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Parkinson\'s Diagnosis from Video of Actions',
    description: 'Developed a state-of-the-art AI system that accurately diagnoses the severity of Parkinson\'s disease by analyzing videos of patients performing actions in the UPDRS test, resulting in superior performance compared to existing methods.',
    url: 'https://github.com/RyanStark223232/tfjs-app',
    image: porfolioImage6,
  },
  {
    title: 'Card Shuffling Prediction with AI (Recurrent Neural Network)',
    description: 'Utilized Recurrent Neural Network to predict outcome of riffle card shuffling, showcasing room for improvement as AI consistently outperformed existing algorithmic approaches. Investigated reasons for improvement, but a conclusive explanation was not reached.',
    url: 'https://github.com/RyanStark223232/Card_Shuffle_Prediction',
    image: porfolioImage7,
  },
  {
    title: 'Prudential Client Project: Explainable Machine Learning',
    description: 'The Business Intelligence Team of Prudential HK was impressed by a project that included out-of-scope exploration. This project involved training models to predict insurance frauds and experimenting with adding prediction explanation to the standard pipeline of Azure Model Hosting.',
    url: '#portfolio',
    image: porfolioImage1,
  },
  {
    title: 'Prudential Client Project: Data Processing in Power Query',
    description: 'We established our first project with Prudential HK, and since then, our relationship has remained strong. As part of the project, I successfully revamped their entire data processing system in SAS with Power Query and seamlessly ported the data to the highly efficient PowerBI Dashboard.',
    url: '#portfolio',
    image: porfolioImage3,
  },
  {
    title: 'NLP System',
    description: 'Developed a web crawling system and implemented simplified machine learning models trained with GPT-2 (Traditional Chinese) to analyze sentiments, classify interests, and extract keywords. Furthermore, automated the monthly re-training of all models. Resulted in a significant increase in workload processing capacity, allowing the company to process 10 times more URLs while reducing costs by 50%.',
    url: '#portfolio',
    image: porfolioImage4,
  },
  {
    title: 'Automated Data Workflow',
    description: 'Using Airflow, I have modularized each component of the company\'s pipeline, including log file preprocessing and the generation of client-facing reports. Additionally, I have set up automated deployment (CICD) on Gitlab.',
    url: '#portfolio',
    image: porfolioImage2,
  },
  {
    title: 'Dashboards',
    description: 'Developed two dashboards to showcase exceptional behavior in subscribed emails and browsing patterns, which include web and app usage and location-based data.',
    url: '#portfolio',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Sep 2017',
    location: 'The Chinese University (HK)',
    title: 'BSc (Hons) in Computer Science',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'July 2021 - June 2023',
    location: 'Hotmob Limited',
    title: 'Data Scientist',
    content: (
      <p>
        - Data Engineering with Cloud Services <br></br>
        - Machine Learning (Mostly Natural Language Processing) <br></br>
        - Data Dashboard Building/ Pitching Deck/ Data Report <br></br>
      </p>
    ),
  },
  {
    date: 'July 2020 - September 2020',
    location: 'Flying Milk Tea Limited',
    title: 'AI Developer Intern (Summer Intern)',
    content: (
      <p>
        - Performed Web Crawling on Multiple Art-Sharing Websites to Collect Sample 3D Model Data <br></br>
        - Built Generator that Converts 2D Images into 3D Models <br></br>
      </p>
    ),
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contact',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
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
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
];
