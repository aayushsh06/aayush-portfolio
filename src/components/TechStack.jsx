import React, { useEffect, useState } from 'react';
import '../styles/TechStack.css';

const techGroups = [
  {
    label: 'Languages',
    icon: <i className="fa-solid fa-code"></i>,
    color: '#00d4ff',
    gradient: 'linear-gradient(135deg, #00d4ff 0%, #00a1ff 100%)',
    items: [
      { name: 'Java', icon: <i className="fa-brands fa-java"></i> },
      { name: 'C++', icon: <i className="fa-solid fa-c"></i> },
      { name: 'Python', icon: <i className="fa-brands fa-python"></i> },
      { name: 'JavaScript', icon: <i className="fa-brands fa-js"></i> },
      { name: 'TypeScript', icon: <i className="fa-solid fa-code"></i> },
      { name: 'HTML/CSS', icon: <i className="fa-brands fa-html5"></i> },
    ],
  },
  {
    label: 'Frameworks',
    icon: <i className="fa-solid fa-layer-group"></i>,
    color: '#7c3aed',
    gradient: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)',
    items: [
      { name: 'React', icon: <i className="fa-brands fa-react"></i> },
      { name: 'Spring', icon: <i className="fa-solid fa-seedling"></i> },
      { name: 'Spring Boot', icon: <i className="fa-solid fa-seedling"></i> },
      { name: 'JUnit', icon: <i className="fa-solid fa-vial"></i> },
      { name: 'Redux', icon: <i className="fa-brands fa-react"></i> },
      { name: 'Node.js', icon: <i className="fa-brands fa-node"></i> },
      { name: 'Express', icon: <i className="fa-brands fa-node"></i> },
      { name: 'Flask', icon: <i className="fa-solid fa-flask"></i> },
    ],
  },
  {
    label: 'Databases',
    icon: <i className="fa-solid fa-database"></i>,
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
    items: [
      { name: 'SQLite', icon: <i className="fa-solid fa-database"></i> },
      { name: 'PostgreSQL', icon: <i className="fa-solid fa-database"></i> },
      { name: 'Redis', icon: <i className="fa-solid fa-database"></i> },
      { name: 'Hibernate', icon: <i className="fa-solid fa-database"></i> },
    ],
  },
  {
    label: 'ML & Tools',
    icon: <i className="fa-solid fa-robot"></i>,
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    items: [
      { name: 'TensorFlow', icon: <i className="fa-solid fa-robot"></i> },
      { name: 'Scikit-learn', icon: <i className="fa-solid fa-brain"></i> },
      { name: 'Pandas', icon: <i className="fa-solid fa-chart-line"></i> },
      { name: 'Git', icon: <i className="fa-brands fa-git-alt"></i> },
      { name: 'Linux', icon: <i className="fa-brands fa-linux"></i> },
    ],
  },
  {
    label: 'Cloud & DevOps',
    icon: <i className="fa-solid fa-cloud"></i>,
    color: '#ec4899',
    gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
    items: [
      { name: 'AWS', icon: <i className="fa-brands fa-aws"></i> },
    ],
  },
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const container = document.querySelector('.tech-stack.revamped');
    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, []);

  return (
    <div className="tech-stack-section">
      <div className="tech-stack-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <h2>Tech Stack</h2>
      </div>
      <div className="horizontal-line"></div>
      <section className={`tech-stack revamped ${isVisible ? 'fade-in' : ''}`}>
        <div className="tech-grid-container">
          {techGroups.map((group, idx) => (
            <div 
              className="tech-group-card" 
              key={group.label}
              style={{ 
                '--accent-color': group.color,
                '--accent-gradient': group.gradient,
                animationDelay: `${idx * 0.1}s`
              }}
            >
              <div className="tech-group-header-new">
                <div className="group-icon-wrapper" style={{ background: group.gradient }}>
                  <span className="group-icon-new">{group.icon}</span>
                </div>
                <h3 className="group-label-new">{group.label}</h3>
              </div>
              <div className="tech-items-grid">
                {group.items.map((item, itemIdx) => (
                  <div 
                    className="tech-item-card" 
                    key={item.name}
                    style={{ animationDelay: `${(idx * 0.1) + (itemIdx * 0.05)}s` }}
                  >
                    <div className="tech-item-icon-wrapper">
                      <span className="tech-item-icon">{item.icon}</span>
                    </div>
                    <span className="tech-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
