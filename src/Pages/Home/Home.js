import React from 'react';

import Header from '../../Components/Home-components/Header/Header';
import Features from '../../Components/Home-components/Features/Features';
import Footer from '../../Components/Home-components/Footer/Footer';
import './Home.css';

function Home() {
  return (
    <React.Fragment>
      <Header />
      <Features />
      <Footer />
    </React.Fragment>
  );
}

export default Home;