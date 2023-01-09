import React, {useState, useEffect} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [mode, setMode] = useState('light');
  useEffect(() => {
    if (window.location.pathname === '/projects') {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, []);

  return (
    <div className={`header ${mode}`}>
        <div className="heading">
          <Link to="/">
              <h1>Inga Zhuravleva</h1>
          </Link>
          <div className="sparkle-icon">
            <img src="../../imgs/sparkle.png"></img>
          </div>
        </div>

        <ul className="nav-menu">
            <li><Link to="/projects">projects</Link></li>
            <li><Link to="/resume">resume</Link></li>
        </ul>
    </div>
  )
}

export default Navbar;