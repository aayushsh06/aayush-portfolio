import AboutMe from './AboutMe.jsx'
import TechStack from './TechStack.jsx'
import Experience from './Experience.jsx'
import '../styles/App.css'
import Current from './Current.jsx'
import ProjectCard from './ProjectCard.jsx'

function App() {
  const scrollToTechStack = () => {
    document.querySelector('.techStack-section').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='home-section'>
        <AboutMe />
        <button className='scroll-button' onClick={scrollToTechStack}>Learn About Me</button>
      </div>
      <div className='techStack-section'>
        <TechStack />
      </div>
      <div className='experience-section'>
        <Experience />
      </div>
              <Current />

      <div className='app'>
        <div className='column-1'>

        </div>
        <div className='column-2'>

        </div>
        <div className='column-3'>
          <ProjectCard
            projectName='Algo-Visualizer'
            date='February 2025 - Present'
            projectImage='https://private-user-images.githubusercontent.com/179483573/421164490-3afa6e95-9abc-4608-9a40-fe95110f3689.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDIwOTQ5MzksIm5iZiI6MTc0MjA5NDYzOSwicGF0aCI6Ii8xNzk0ODM1NzMvNDIxMTY0NDkwLTNhZmE2ZTk1LTlhYmMtNDYwOC05YTQwLWZlOTUxMTBmMzY4OS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzE2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxNlQwMzEwMzlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04YWYzNmRmZDEwOGU2ODZjZmEzOGNhMzEwYmUwMjY1MDFiYWRkNDQwZTY2NTNkY2I4OTExN2FkNjkzOWY3ZDZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.giXpBaNHQRv-ybdEiQsCmtEOvxniFQx-P0tskLunjOo'
            githubLink='https://github.com/aayushsh06/Algo-Visualizer'
            demoLink='https://aayushsh06.github.io/Algo-Visualizer/'
            techStack={[
              <p key='13' className='frontend'>JavaScript</p>,
              <p key='14' className='framework'>React</p>,
              <p key='15' className='html-css'>HTML/CSS</p>
            ]}
          />
          <ProjectCard
            projectName='Maize Market'
            date='December 2024 - March 2025'
            projectImage='https://github.com/aayushsh06/Maize-Market/raw/master/project-images/landingPage.png'
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
            projectName='Text-to-AI'
            date='November 2024 - January 2025'
            projectImage='https://github.com/aayushsh06/Text-to-AI/raw/main/Text-to-AI.png'
            githubLink='https://github.com/aayushsh06/Text-to-AI'
            techStack={[
              <p key='1' className='backend'>Python</p>,
              <p key='2' className='framework'>Flask</p>,
              <p key='3' className='frontend'>JavaScript</p>,
              <p key='4' className='html-css'>HTML/CSS</p>
            ]}
          />
          <ProjectCard
            projectName='Diffnosis'
            date='September 2024 - November 2024'
            projectImage='https://private-user-images.githubusercontent.com/179483573/421170369-bfd40673-cfd6-47e0-9622-88f8d2395417.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE4MTU0OTEsIm5iZiI6MTc0MTgxNTE5MSwicGF0aCI6Ii8xNzk0ODM1NzMvNDIxMTcwMzY5LWJmZDQwNjczLWNmZDYtNDdlMC05NjIyLTg4ZjhkMjM5NTQxNy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMlQyMTMzMTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0xNzY1ZjBjZTQ0YTNiMDg2MzE1MThjZmEzMmQ0MmU4NmU5ODdhYjRlYzkzYzRlZTI3NTY5NGRkMGU2ZTI1ZTgwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.dopQz5agSyvxb2Vn99M3RkwgcY_1ZpQlRn13nfb0d4Y'
            githubLink='https://github.com/aayushsh06/Diffnosis'
            demoLink=''
            techStack={[
              <p key='10' className='frontend'>Swift</p>,
              <p key='11' className='backend'>Python</p>,
              <p key='12' className='framework'>Pandas</p>
            ]}
          />
          <ProjectCard
            projectName='Discord Server Bot'
            date='June 2024 - August 2024'
            projectImage='https://media.licdn.com/dms/image/v2/D562DAQFDfWl3Mw6etg/profile-treasury-image-shrink_160_160/profile-treasury-image-shrink_160_160/0/1736391977579?e=1742022000&v=beta&t=0G8p6ZtUht1OhKfONyVeuPXd7oNC3lTPqlbJ2OMMs0I'
            githubLink='https://github.com/aayushsh06/Discord-Bots'
            demoLink='https://github.com/aayushsh06/Text-to-AI'
            techStack={[
              <p key='13' className='frontend'>Swift</p>,
              <p key='14' className='backend'>Python</p>,
              <p key='15' className='framework'>Pandas</p>
            ]}
          />

        </div>
      </div>

    </>

  )
}

export default App
