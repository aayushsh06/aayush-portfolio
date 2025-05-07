import React, { useState, useEffect } from 'react';
import '../styles/AboutMe.css';
import UmichLogo from '../assets/Umich.png';

const AboutMe = () => {
    const roles = ['Full Stack Developer', 'Comp Sci Student', 'Software Engineer'];
    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
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

        const container = document.querySelector('.about-container');
        if (container) {
            observer.observe(container);
        }

        return () => {
            if (container) {
                observer.unobserve(container);
            }
        };
    }, []);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            typingSpeed = 1500;
            setTimeout(() => setIsDeleting(true), typingSpeed);
            return;
        }

        if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
            return;
        }

        const timeout = setTimeout(() => {
            setDisplayText(
                isDeleting
                    ? currentRole.substring(0, charIndex - 1)
                    : currentRole.substring(0, charIndex + 1)
            );
            setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, roleIndex, roles]);

    return (
        <div className={`about-container ${isVisible ? 'fade-in' : ''}`}>
            <div className="about-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <h2>About Me</h2>
            </div>

            <div className="horizontal-line"></div>

            <div className="about-content">
                <div className="profile-section">
                    <img
                        className="profile-image"
                        src="https://media.licdn.com/dms/image/v2/D5603AQFdRbA2LNo9Uw/profile-displayphoto-shrink_800_800/B56ZYxYS3BGoAg-/0/1744585175267?e=1752105600&v=beta&t=E-WWfRSisDFtEQH0Q7c9D9OF8TbID6E7jlUNX-LRs1c"
                        alt="Aayush Profile"
                    />
                    <div className="profile-info">
                        <h1>Aayush</h1>
                        <h2>
                            I'm a{' '}
                            <span className="trait-container">
                                <span className="trait">{displayText}</span>
                                <span className="cursor"></span>
                            </span>
                        </h2>
                    </div>
                </div>

                <div className="info-cards">
                    <div className="info-card">
                        <img src={UmichLogo} alt="University of Michigan Logo" className="info-icon" />
                        <span>University of Michigan</span>
                    </div>
                    <div className="info-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                            <path d="M16 18l6-6-6-6M8 6l-6 6 6 6"></path>
                        </svg>
                        <span>Computer Science</span>
                    </div>
                    <div className="info-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                            <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        </svg>
                        <span>Class of 2027</span>
                    </div>
                    <div className="info-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>MI, United States</span>
                    </div>
                    <div className="info-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                            <path d="M9 3h6v2H9zM7 8h10m-5 8v-5M8 21h8a2 2 0 0 0 2-2v-6.4a2 2 0 0 0-.6-1.4l-4.7-4.7a1 1 0 0 1-.3-.7V3a1 1 0 0 0-1-1H10a1 1 0 0 0-1 1v2.9a1 1 0 0 1-.3.7l-4.7 4.7a2 2 0 0 0-.6 1.4V19a2 2 0 0 0 2 2z"></path>
                        </svg>
                        <span>Researcher</span>
                    </div>
                    <div className="info-card">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span>Open Source Contributor</span>
                    </div>
                </div>

                <div className="connect-section">
                    <h3>Let's Connect</h3>
                    <div className="connect-links">
                        <a href="https://www.linkedin.com/in/aayushksharma" target="_blank" rel="noreferrer" className="connect-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="connect-icon">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                            LinkedIn
                        </a>
                        <a href="https://github.com/aayushsh06" target="_blank" rel="noreferrer" className="connect-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="connect-icon">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            GitHub
                        </a>
                        <a href="mailto:aayushksharma2006@gmail.com" className="connect-link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="connect-icon">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
