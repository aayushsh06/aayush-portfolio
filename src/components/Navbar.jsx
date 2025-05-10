import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const NAV_ITEMS = [
  { label: 'About', section: 'about' },
  { label: 'Education', section: 'education' },
  { label: 'Tech Stack', section: 'tech-stack' },
  { label: 'Experience', section: 'experience' },
  { label: 'Projects', section: 'projects' },
];

const Navbar = ({ currentSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionClass) => {
    if (location.pathname !== '/aayush-portfolio') {
      navigate('/aayush-portfolio', { replace: false });
      setTimeout(() => {
        scrollToSection(sectionClass + '-section');
      }, 50);
    } else {
      scrollToSection(sectionClass + '-section');
    }
  };

  const scrollToSection = (sectionClass) => {
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      const nav = document.querySelector('.navigation, .navbar');
      const yOffset = nav ? -nav.offsetHeight : 0;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      {NAV_ITEMS.map(item => (
        <button
          key={item.section}
          className={currentSection === item.section ? 'active' : ''}
          onClick={() => handleNavClick(item.section)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar; 