import AboutMe from './AboutMe'
import TechStack from './TechStack'
import Experience from './Experience'
import '../styles/App.css'
import Current from './Current'

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
      </div>

    </>

  )
}

export default App
