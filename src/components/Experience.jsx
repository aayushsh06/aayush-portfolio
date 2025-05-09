import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';
import WashintonLogo from '../assets/Washington.png';
import AmazonLogo from '../assets/Amazon.png';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      company: "Coding Competitions Club",
      title: "Vice President",
      date: "September 2021 - May 2024",
      icon: "code",
      skills: ["Leadership", "DSA", "Problem Solving", "Competitive Programming"],
      description: [
        "Served as Vice President, overseeing the planning and execution of weekly club meetings and activities",
        "Led livecoding sessions and guided problem-solving discussions to enhance member engagement",
        "Coordinated club operations, including going over various Data Structures and Algorithms topics",
        "Mentored students, significantly improving their coding and algorithmic thinking skills"
      ]
    },
    {
      company: "University of Washington",
      title: "Research Intern",
      date: "January 2022 - December 2023",
      icon: WashintonLogo,
      skills: ["Machine Learning", "Data Science", "Research", "Python", "HTML/CSS"],
      description: [
        "Engineered features to boost ML model accuracy (95%+) and performance (30%) for land cover and flood prediction in TerrSet",
        "Developed Python algorithms to merge API-based raster data and optimize processing workflows",
        "Built an HTML/CSS flood mitigation primer website for decision-makers to help obtain crowdsourced data",
        "Produced a high-resolution Dasymetric map of the Contiguous U.S. using parallel processing",
        "Presented research at the NSF Civic Innovation Challenge, benefiting thousands of Michigan residents"
      ]
    },
    {
      company: "Amazon",
      title: "Junior Software Development Engineer",
      date: "June 2025 -  Present",
      icon: AmazonLogo,
      skills: ["Java", "???", "???", "???"],
      description: [
        "Upcoming..."
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const container = document.querySelector('.experience-container');
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  // Function to render the appropriate icon
  const renderIcon = (iconName) => {
    switch (iconName) {
      case 'code':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tab-button-icon">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        );
      case WashintonLogo:
        return (
          <img src={WashintonLogo} alt="University of Washington" className="tab-button-icon" />
        );
      case AmazonLogo:
        return (
          <img src={AmazonLogo} alt="Amazon" className="tab-button-icon" />
        );
      default:
        return null;
    }
  };

  return (
    <div className={`experience-container ${isVisible ? 'fade-in' : ''}`}>
      <div className="experience-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
        </svg>
        <h2>Experience</h2>
      </div>
      <div className="horizontal-line"></div>

      <div className="tab-list">
        {experiences.map((exp, index) => (
          <button
            key={index}
            className={`tab-button ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {renderIcon(exp.icon)}
            <div className="tab-content">
              <div className="company-title">{exp.company}</div>
              <div className="position-title">{exp.title}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="chevron-icon">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        ))}
      </div>

      <div className="content-area">
        <h3 className="role-title">{experiences[activeTab].title}</h3>
        <div className="company-name">{experiences[activeTab].company}</div>
        
        <div className="date">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          {experiences[activeTab].date}
        </div>
        
        <div className="skills-section">
          <div className="section-label">Skills</div>
          <div className="skills-container">
            {experiences[activeTab].skills.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="responsibilities">
          <div className="section-label">Responsibilities</div>
          <ul className="bullet-list">
            {experiences[activeTab].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;