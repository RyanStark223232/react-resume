import dynamic from 'next/dynamic';
import { FC, memo, useEffect, useState } from 'react';

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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    Promise.all(
      backgroundImageUrls.map((url) => {
        const image = new Image();
        image.src = url;
        return new Promise((resolve, reject) => {
          image.onload = resolve;
          image.onerror = reject;
        });
      })
    ).then(() => {
      setImagesLoaded(true);
    });

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const totalHeight = document.body.clientHeight;

      // Set the background image index based on the current scroll position
      const newIndex = Math.floor((scrollTop / (totalHeight - windowHeight)) * 3.5);
      setBackgroundImageIndex(newIndex);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const backgroundImageUrls = [
    '/images/00058-701382191.png',
    '/images/00060-256204503.png',
    '/images/00044-3704105173.png',
    '/images/00055-756246651.png',
  ];

  return (
    <>
      {!imagesLoaded && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffff',
          }}
        >
          <p>Loading...</p>
        </div>
      )}
      <div
        style={{
          backgroundImage: `url("${backgroundImageUrls[backgroundImageIndex]}")`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          transition: 'background-image 1s ease-in-out',
          opacity: imagesLoaded ? 1 : 0,
          pointerEvents: imagesLoaded ? 'auto' : 'none',
        }}
      >
        <Page {...homePageMeta}>{children}</Page>
      </div>
    </>
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
