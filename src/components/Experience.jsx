import React, { useEffect, useState } from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const [activeItem, setActiveItem] = useState(null);
  
  const experiences = [
    {
      title: "Coding Competitions Club Vice President",
      date: "January 2023 - Present",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Research Intern at University of Washington",
      date: "June 2022 - August 2022",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Software Engineer Intern at Ally Financial",
      date: "September 2022 - December 2022",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('.timeline-item');
    items.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  return (
    <div className="timeline-container">
      <h1 className="experience-title">
        <i className="fas fa-briefcase"></i> Experience
      </h1>
      
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div 
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${activeItem === index ? 'active-item' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <div className="timeline-node"></div>
            <div className="timeline-content">
              <h3>{experience.title}</h3>
              <p className="date">{experience.date}</p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;