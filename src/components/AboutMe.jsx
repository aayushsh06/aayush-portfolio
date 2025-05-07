import React, { useState, useEffect } from 'react';
import '../styles/AboutMe.css';
import UmichLogo from '../assets/Umich.png';

const AboutMe = () => {
    const roles = ['Full Stack Developer', 'Comp Sci Student', 'Software Engineer'];
    const [displayText, setDisplayText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

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
        <div className="about-me">
            <div className="intro">
                <img
                    className="profile"
                    src="https://media.licdn.com/dms/image/v2/D5603AQFdRbA2LNo9Uw/profile-displayphoto-shrink_800_800/B56ZYxYS3BGoAg-/0/1744585175267?e=1752105600&v=beta&t=E-WWfRSisDFtEQH0Q7c9D9OF8TbID6E7jlUNX-LRs1c"
                    alt="Aayush Profile"
                />
                <div className="intro-text">
                    <h1>Aayush</h1>
                    <h2>
                        I'm a{' '}
                        <span className="trait-container">
                            <span className="trait">{displayText}</span>
                            <span className="cursor">|</span>
                        </span>
                    </h2>
                </div>
            </div>

            <div className="labels">
                <div>
                    <img src={UmichLogo} alt="University of Michigan Logo" />
                    <p>University of Michigan</p>
                </div>
                <div>
                    <i className="fas fa-laptop-code"></i>
                    <p>Computer Science</p>
                </div>
                <div>
                    <i className="fas fa-graduation-cap"></i>
                    <p>Class of 2027</p>
                </div>
                <div>
                    <i className="fas fa-map-pin"></i>
                    <p>MI, United States</p>
                </div>
                <div>
                    <i className="fas fa-flask"></i>
                    <p>Researcher</p>
                </div>
                <div>
                    <i className="fas fa-cogs"></i>
                    <p>Open Source Contributor</p>
                </div>
            </div>

            <div className="connect">
                <h2>Let's Connect</h2>
                <div className="connection-links">
                    <a href="https://www.linkedin.com/in/aayushksharma" target="_blank" rel="noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://github.com/aayushsh06" target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:aayushksharma2006@gmail.com">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
