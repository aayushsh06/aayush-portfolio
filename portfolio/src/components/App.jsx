import AboutMe from './AboutMe'
import TechStack from './TechStack'
import Experience from './Experience'
import '../styles/App.css'
import Current from './Current'
import ProjectCard from './ProjectCard.jsx'

function App() {
  return (
    <>
      <div className='app'>
        <div className='column-1'>
          <AboutMe />
          <TechStack />
        </div>
        <div className='column-2'>
          <Experience />
          <Current />
        </div>
        <div className='column-3'>
          <ProjectCard
            projectName='Text-to-AI'
            projectImage='https://github.com/aayushsh06/Text-to-AI/raw/main/Text-to-AI.png'
            githubLink='https://github.com/aayushsh06/Text-to-AI'
            techStack={[<p className='backend'>Python</p>,
            <p className='framework'>Flask</p>,
            <p className='frontend'>JavaScript</p>,
            <p className='html-css'>HTML/CSS</p>]}
          />
          <ProjectCard
            projectName='Maize Market'
            projectImage='https://github.com/aayushsh06/Text-to-AI/raw/main/Text-to-AI.png'
            githubLink='https://github.com/aayushsh06/Text-to-AI'
            demoLink='https://github.com/aayushsh06/Text-to-AI'
            techStack={[<p className='backend'>Java</p>,
              <p className='framework'>SpringBoot</p>,
              <p className='frontend'>JavaScript</p>,
              <p className='framework'>React</p>,
              <p className='html-css'>HTML/CSS</p>]}
          />
          <ProjectCard
            projectName='Diffnosis'
            projectImage='https://github.com/aayushsh06/Text-to-AI/raw/main/Text-to-AI.png'
            githubLink='https://github.com/aayushsh06/Text-to-AI'
            demoLink='https://github.com/aayushsh06/Text-to-AI'
            techStack={[<p className='frontend'>Swift</p>,
              <p className='backend'>Python</p>,
              <p className='framework'>Pandas</p>]}
          />
          <ProjectCard
            projectName='Other App'
            projectImage='https://github.com/aayushsh06/Text-to-AI/raw/main/Text-to-AI.png'
            githubLink='https://github.com/aayushsh06/Text-to-AI'
            demoLink='https://github.com/aayushsh06/Text-to-AI'
            techStack={[<p className='frontend'>Swift</p>,
              <p className='backend'>Python</p>,
              <p className='framework'>Pandas</p>]}
          />
        </div>
      </div>

    </>

  )
}

export default App
