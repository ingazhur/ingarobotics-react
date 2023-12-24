import React from 'react'
import Navbar from '../components/Navbar';
import IntroSection from '../components/IntroSection';
import CenterSection from '../components/CenterSection';
import FeaturedSection from '../components/FeaturedSection';
import Footer from '../components/Footer';

import '../index.css';
import { useEffect, useState } from 'react';

import { Analytics } from '@vercel/analytics/react';

const Home = () => {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    if (window.location.pathname === '/projects') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);
  return (
    <div className={`${mode}`}>
      <Navbar />
      <IntroSection />
      <CenterSection />
      <FeaturedSection />
      <Footer />
      <Analytics />
    </div>
  )
}

export default Home;