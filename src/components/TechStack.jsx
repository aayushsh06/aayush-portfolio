import React, { useState, useEffect } from 'react';
import '../styles/TechStack.css';

const TechStack = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const container = document.querySelector('.tech-stack');
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
        <div className={`tech-stack ${isVisible ? 'fade-in' : ''}`}>
            <div className="tech-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <h2>Tech Stack</h2>
            </div>

            <div className="horizontal-line"></div>

            <div className="items">
                <div className="tech-section">
                    <h3>Languages</h3>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <i className="fa-brands fa-java"></i>
                            <span>Java</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-c"></i>
                            <span>C++</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-python"></i>
                            <span>Python</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-js"></i>
                            <span>JavaScript</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-database"></i>
                            <span>SQL</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-html5"></i>
                            <span>HTML/CSS</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-terminal"></i>
                            <span>Bash</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-swift"></i>
                            <span>Swift</span>
                        </div>
                    </div>
                </div>

                <div className="tech-section">
                    <h3>Frameworks & Technologies</h3>
                    <div className="tech-grid">
                        <div className="tech-item">
                            <i className="fa-solid fa-seedling"></i>
                            <span>Spring Boot</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-react"></i>
                            <span>React</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-database"></i>
                            <span>Hibernate</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-node"></i>
                            <span>Node.js</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-flask"></i>
                            <span>Flask</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-chart-line"></i>
                            <span>Pandas</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-brain"></i>
                            <span>Scikit-learn</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-robot"></i>
                            <span>TensorFlow</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-brands fa-linux"></i>
                            <span>Linux</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-database"></i>
                            <span>SQLite</span>
                        </div>
                        <div className="tech-item">
                            <i className="fa-solid fa-database"></i>
                            <span>PostgreSQL</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechStack;
