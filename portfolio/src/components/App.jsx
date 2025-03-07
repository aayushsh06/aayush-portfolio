import AboutMe from './AboutMe'
import TechStack from './TechStack'
import Experience from './Experience'
import '../styles/App.css'
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
        </div>
      </div>

    </>

  )
}

export default App
