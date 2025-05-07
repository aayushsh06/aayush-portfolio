import AboutMe from './AboutMe.jsx'
import TechStack from './TechStack.jsx'
import Experience from './Experience.jsx'
import '../styles/App.css'
import Current from './Current.jsx'
import ProjectCard from './ProjectCard.jsx'
import { useEffect } from 'react';
import AlgoScope from '../assets/AlgoScope.png'
import MaizeMarket from '../assets/MaizeMarket.png'
import TextToAI from '../assets/TextToAI.png'
import Diffnosis from '../assets/Diffnosis.png'
import DiscordBots from '../assets/DiscordBots.png'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectPage from './ProjectPage'; 
import Navbar from './Navbar';
import Education from './Education';
import projects from './projectsData';

function App() {

  const scrollToSection = (sectionClass) => {
    //navigate("/");
    const element = document.querySelector(`.${sectionClass}`);
    if (element) {
      const yOffset = -document.querySelector('.navigation').offsetHeight; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };


  return (
    <Router>
      <div className="portfolio-container">
        <Navbar />
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Routes>
            <Route path="/" element={
              <main>
                <section className="about-section">
                  <AboutMe />
                </section>

                <section className='education-section'>
                  <Education />
                </section>

                <section className="tech-stack-section">
                  <TechStack />
                </section>

                <section className="experience-section">
                  <Experience />
                </section>

                {/*<section className="current-section">
                  <Current />
                </section> */}

                <section className="projects-section">
                  <div className="projects-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <path d="M9 9h6v6H9z"></path>
                    </svg>
                    <h2>Featured Projects</h2>
                  </div>
                  <div className="horizontal-line"></div>
                  <div className="projects-grid">
                    {projects.map((project) => (
                      <ProjectCard
                        key={project.id}
                        projectId={project.id}
                        projectName={project.name}
                        date={project.dates}
                        projectImage={project.image}
                        githubLink={project.githubLink}
                        demoLink={project.demoLink}
                        techStack={project.techStack.map((tech, idx) => (
                          <p key={idx} className={tech.toLowerCase().replace(/[^a-z0-9]/g, '-')}>{tech}</p>
                        ))}
                      />
                    ))}
                  </div>
                </section>
              </main>
            } />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App
