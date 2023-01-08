import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectsIntro from '../components/ProjectsSection';

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
    <div className={`sparkle-cursor ${mode}`}>
      <Navbar />
      <ProjectsIntro />
      <Footer />
    </div>
  )
}

export default Projects;