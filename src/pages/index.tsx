import dynamic from 'next/dynamic';
import { FC, memo, CSSProperties } from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import About from '../components/Sections/About';
import Portfolio from '../components/Sections/Portfolio';
import Resume from '../components/Sections/Resume';
import { homePageMeta } from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

const Home: FC = memo(() => {
  const videoUrl = '/images/background-video.mp4';

  const videoStyle: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
    objectFit: 'cover',
    zIndex: -1,
  };

  return (
    <div>
      <video autoPlay loop muted style={videoStyle}>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Page {...homePageMeta}>
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </Page>
    </div>
  );
});

export default Home;