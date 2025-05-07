import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const NAV_ITEMS = [
  { label: 'About', section: 'about-section' },
  { label: 'Skills', section: 'tech-stack-section' },
  { label: 'Experience', section: 'experience-section' },
  { label: 'Projects', section: 'projects-section' },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionClass) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        scrollToSection(sectionClass);
      }, 50);
    } else {
      scrollToSection(sectionClass);
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
        <button key={item.section} onClick={() => handleNavClick(item.section)}>
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default Navbar; 