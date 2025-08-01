import './App.css'
import { Intro } from './component/Intro'
import { About } from './component/About'
import { Skill } from './component/Skill'
import Services from './component/Services'
import { Contect } from './component/Contect'
import Projects from './component/Projects'

function App() {

  return (
    <>
    <div>
    <Intro/>

    </div>
    <div>
    <About/>

    </div>
    <div>
    <Skill/>

    </div>
    {/* <div>
    <Services/>

    </div> */}
    <div>
    <Projects/>

    </div>
    {/* <div>
    <Contect/>

    </div> */}


    </>
  )
}

export default App
