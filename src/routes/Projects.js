import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../index.css';
import { useEffect, useState } from 'react';

const Projects = () => {
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
      <Footer />
    </div>
  )
}

export default Projects;