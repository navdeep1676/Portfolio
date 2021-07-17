import "./App.css";
import {Switch,Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import Contact from './Pages/Contact'
import Project from './Pages/Projects'
import MiniProject from './Pages/Miniproject'
import Err from './Pages/Default'
function App() {
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-2 g-0">
          <aside>
            <Navbar/>
            
          </aside>
        </div>
        <div className="col-10 g-0">
          <main className='px-5 py-4'>
          <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/mini-projects' component={MiniProject} />
                <Route path='/projects' component={Project} />
                <Route path='/contact' component={Contact} />
                <Route default component={Err} />
              </Switch>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
