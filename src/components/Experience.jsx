import React, { useState, useEffect } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(2);
  const [isVisible, setIsVisible] = useState(false);

  const experiences = [
    {
      company: "Coding Competitions Club",
      title: "Vice President",
      date: "January 2023 - Present",
      icon: "code",
      skills: ["Leadership", "Algorithm Design", "Problem Solving", "Team Management"],
      description: [
        "Led weekly coding workshops for over 30 members, covering advanced algorithms and data structures",
        "Coordinated team participation in 5 regional competitions, achieving top 3 placements",
        "Developed and maintained the club's problem archive system using React and Node.js",
        "Mentored 12 junior members, resulting in 75% improvement in problem-solving capabilities"
      ]
    },
    {
      company: "University of Washington",
      title: "Research Intern",
      date: "June 2022 - August 2022",
      icon: "flask",
      skills: ["Data Analysis", "Research Methodology", "Python", "TensorFlow"],
      description: [
        "Conducted research on machine learning applications in healthcare data analysis",
        "Implemented and evaluated 3 prediction models using Python and TensorFlow",
        "Collaborated with a team of 5 graduate students on data collection and preprocessing",
        "Co-authored a research paper presented at the university's annual symposium"
      ]
    },
    {
      company: "Ally Financial",
      title: "Software Engineer Intern",
      date: "September 2022 - December 2022",
      icon: "building",
      skills: ["JavaScript", "React", "GraphQL", "Agile Methodology"],
      description: [
        "Developed new features for the company's customer dashboard using React and GraphQL",
        "Optimized API calls resulting in 40% faster load times for critical customer pages",
        "Participated in daily stand-ups and bi-weekly sprint planning with a team of 8 engineers",
        "Implemented automated testing protocols improving code coverage by 25%"
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
      case 'flask':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tab-button-icon">
            <path d="M9 3h6v2H9zM7 8h10m-5 8v-5M8 21h8a2 2 0 0 0 2-2v-6.4a2 2 0 0 0-.6-1.4l-4.7-4.7a1 1 0 0 1-.3-.7V3a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v2.9a1 1 0 0 1-.3.7l-4.7 4.7a2 2 0 0 0-.6 1.4V19a2 2 0 0 0 2 2z"></path>
          </svg>
        );
      case 'building':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tab-button-icon">
            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
            <path d="M9 22v-4h6v4"></path>
            <path d="M8 6h.01"></path>
            <path d="M16 6h.01"></path>
            <path d="M12 6h.01"></path>
            <path d="M12 10h.01"></path>
            <path d="M12 14h.01"></path>
            <path d="M16 10h.01"></path>
            <path d="M16 14h.01"></path>
            <path d="M8 10h.01"></path>
            <path d="M8 14h.01"></path>
          </svg>
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