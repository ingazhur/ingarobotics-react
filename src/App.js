import React from 'react';
import './App.css';

import Home from './routes/Home';
import Projects from './routes/Projects';

import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';


function App() {
  const [mode, setMode] = useState('light');
  useEffect(() => {
    if (window.location.pathname === '/projects') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

  return (
    <div className={`App ${mode}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
