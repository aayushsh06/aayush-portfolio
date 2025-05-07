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
                    <ProjectCard
                      projectId='algoscope'
                      projectName='AlgoScope'
                      date='February 2025 - Present'
                      projectImage={AlgoScope}
                      githubLink='https://github.com/aayushsh06/AlgoScope'
                      demoLink='https://aayushsh06.github.io/AlgoScope/'
                      techStack={[
                        <p key='13' className='frontend'>JavaScript</p>,
                        <p key='14' className='framework'>React</p>,
                        <p key='15' className='html-css'>HTML/CSS</p>
                      ]}
                    />
                    <ProjectCard
                      projectId='maize-market'
                      projectName='Maize Market'
                      date='December 2024 - March 2025'
                      projectImage={MaizeMarket}
                      githubLink='https://github.com/aayushsh06/Maize-Market'
                      techStack={[
                        <p key='5' className='backend'>Java</p>,
                        <p key='6' className='framework'>SpringBoot</p>,
                        <p key='7' className='frontend'>JavaScript</p>,
                        <p key='8' className='framework'>React</p>,
                        <p key='9' className='html-css'>HTML/CSS</p>
                      ]}
                    />
                    <ProjectCard
                      projectId='text-to-ai'
                      projectName='Text-to-AI'
                      date='November 2024 - January 2025'
                      projectImage={TextToAI}
                      githubLink='https://github.com/aayushsh06/Text-to-AI'
                      techStack={[
                        <p key='1' className='backend'>Python</p>,
                        <p key='2' className='framework'>Flask</p>,
                        <p key='3' className='frontend'>JavaScript</p>,
                        <p key='4' className='html-css'>HTML/CSS</p>
                      ]}
                    />
                    <ProjectCard
                      projectId='diffnosis'
                      projectName='Diffnosis'
                      date='September 2024 - November 2024'
                      projectImage={Diffnosis}
                      githubLink='https://github.com/aayushsh06/Diffnosis'
                      demoLink=''
                      techStack={[
                        <p key='10' className='frontend'>Swift</p>,
                        <p key='11' className='backend'>Python</p>,
                        <p key='12' className='framework'>Pandas</p>
                      ]}
                    />
                    <ProjectCard
                      projectId='discord-server-bot'
                      projectName='Discord Server Bot'
                      date='June 2024 - August 2024'
                      projectImage={DiscordBots}
                      githubLink='https://github.com/aayushsh06/Discord-Bots'
                      demoLink='https://github.com/aayushsh06/Text-to-AI'
                      techStack={[
                        <p key='13' className='frontend'>Swift</p>,
                        <p key='14' className='backend'>Python</p>,
                        <p key='15' className='framework'>Pandas</p>
                      ]}
                    />
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
