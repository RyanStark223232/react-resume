import dynamic from 'next/dynamic';
import { FC, memo, useEffect, useState, CSSProperties } from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import About from '../components/Sections/About';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import { homePageMeta } from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const HomePageWrapper: FC = ({ children }) => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateImageUrls = () => {
      const urls: string[] = [];
      for (let i = 1; i <= 7; i++) {
        const imageNumber = String(i).padStart(4, '0');
        const imageUrl = `/images/${imageNumber}.jpg`;
        urls.push(imageUrl);
      }
      return urls;
    };

    const urls = generateImageUrls();

    Promise.all(urls.map((url) => new Promise((resolve) => {
      const image = new Image();
      image.onload = () => {
        resolve(url);
      };
      image.src = url;
    }))
    ).then((urls) => {
      setImageUrls(urls as string[]);
      setIsLoading(false);
    });

    // Preload all background images
    urls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.clientHeight;

      // Set the background image index based on the current scroll position
      const newIndex = Math.floor((scrollTop / (totalHeight - windowHeight)) * 6.5);
      setBackgroundImageIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    transition: 'background-image 0.2s ease-in-out',
  };

  const loadingStyle = {
    backgroundColor: '#555845', // Replace with your desired background color
    ...backgroundImageStyle,
  };

  const loadedStyle = {
    backgroundImage: `url("${imageUrls[backgroundImageIndex]}")`,
    ...backgroundImageStyle,
  };



  // Update the extraBackgroundStyle object with explicit type annotation
  const extraBackgroundStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    backgroundImage: `url("/images/extra-background.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <div style={extraBackgroundStyle} />
      <div style={isLoading ? loadingStyle : loadedStyle}>
        <Page {...homePageMeta}>{children}</Page>
      </div>
    </div>
  );
};

const Home: FC = memo(() => {
  return (
    <HomePageWrapper>
      <Header />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </HomePageWrapper>
  );
});

export default Home;