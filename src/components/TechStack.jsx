import React, { useEffect, useState } from 'react';
import '../styles/TechStack.css';

const techGroups = [
  {
    label: 'Languages',
    icon: <i className="fa-solid fa-code"></i>,
    color: '#00a1ff',
    items: [
      { name: 'Java', icon: <i className="fa-brands fa-java"></i> },
      { name: 'C++', icon: <i className="fa-solid fa-c"></i> },
      { name: 'Python', icon: <i className="fa-brands fa-python"></i> },
      { name: 'JavaScript', icon: <i className="fa-brands fa-js"></i> },
      //{ name: 'Swift', icon: <i className="fa-brands fa-swift"></i> },
      //{ name: 'Bash', icon: <i className="fa-solid fa-terminal"></i> },
      { name: 'HTML/CSS', icon: <i className="fa-brands fa-html5"></i> },
    ],
  },
  {
    label: 'Frameworks',
    icon: <i className="fa-solid fa-layer-group"></i>,
    color: '#ffb300',
    items: [
      { name: 'React', icon: <i className="fa-brands fa-react"></i> },
      { name: 'Spring Boot', icon: <i className="fa-solid fa-seedling"></i> },
      { name: 'Node.js', icon: <i className="fa-brands fa-node"></i> },
      { name: 'Flask', icon: <i className="fa-solid fa-flask"></i> },
    ],
  },
  {
    label: 'Databases',
    icon: <i className="fa-solid fa-database"></i>,
    color: '#00e676',
    items: [
      { name: 'SQLite', icon: <i className="fa-solid fa-database"></i> },
      { name: 'PostgreSQL', icon: <i className="fa-solid fa-database"></i> },
      { name: 'Hibernate', icon: <i className="fa-solid fa-database"></i> },
      { name: 'Pandas', icon: <i className="fa-solid fa-chart-line"></i> },
    ],
  },
  {
    label: 'ML & Tools',
    icon: <i className="fa-solid fa-robot"></i>,
    color: '#ff4081',
    items: [
      { name: 'TensorFlow', icon: <i className="fa-solid fa-robot"></i> },
      { name: 'Scikit-learn', icon: <i className="fa-solid fa-brain"></i> },
      { name: 'Git', icon: <i className="fa-brands fa-git-alt"></i> },
      { name: 'Linux', icon: <i className="fa-brands fa-linux"></i> },
    ],
  },
];

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const container = document.querySelector('.tech-stack');
    if (container) observer.observe(container);
    return () => { if (container) observer.unobserve(container); };
  }, []);

  return (
    <div className="tech-stack-section">
      <div className="tech-stack-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <h2>Tech Stack</h2>
      </div>
      <div className="horizontal-line"></div>
      <section className={`tech-stack revamped ${isVisible ? 'fade-in' : ''}`}>
        <div className="tech-timeline">
          {techGroups.map((group, idx) => (
            <div className="tech-group" key={group.label} style={{ '--accent': group.color }}>
              <div className="tech-group-header">
                <span className="group-icon" style={{ color: group.color }}>{group.icon}</span>
                <span className="group-label">{group.label}</span>
              </div>
              <div className="tech-bubbles">
                {group.items.map((item) => (
                  <div className="tech-bubble" key={item.name}>
                    <span className="bubble-icon">{item.icon}</span>
                    <span className="bubble-label">{item.name}</span>
                  </div>
                ))}
              </div>
              {idx !== techGroups.length - 1 && <div className="timeline-connector"></div>}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TechStack;
