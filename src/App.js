import "./App.css";
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import Project from './Pages/Projects'
import MiniProject from './Pages/Miniproject'
import Err from './Pages/Default'
import {CgMenuRightAlt} from 'react-icons/cg'
import { useRef, useState } from "react";
function App() {
  const menubar=useRef()
  
  
    const [navToggle,setnavToggle]=useState(false)
    const [show,setShow]=useState(false)
    const toggleAction=()=>{
      setnavToggle(!navToggle)
     
      setShow(!show)
    }
    
     
   

  return (
    <div>
          <aside  className={` ${show ? 'nav-toggle':' sidebar'}`} >
            <Navbar navToggle={setnavToggle} show={setShow} />
            
          </aside>
          <div className={`menu_bar ${navToggle?'change':''} `}  onClick={()=>toggleAction()}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <main className='px-4'>
          <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/mini-projects' component={MiniProject} />
                <Route path='/projects' component={Project} />
                <Route path='/contact' component={Contact} />
                <Route default component={Err} />
              </Switch>
          </main>
          <div className='clears'></div>
    </div>
  );
}

export default App;
