import { FaFacebook,FaGithub,FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  return (
   <div className='home'>
      <div className="HomePage d-flex flex-wrap flex-column justify-content-center mx-auto">
      <header>
          <h1>
              Hi, I am 
              <span className='text-warning ms-2 '>
                  Navdeep.
              </span>
          </h1>
          <p>Fresher B.Tech/B.E. (Computer Science and Engineering) looking for a job/internship with Frontend Development skills living in Sonipat/Sonepat</p>
           <div className='icons'>
           <ul className="nav justify-content-center">
                <li className="nav-item">
                  <a href='https://www.facebook.com/profile.php?id=100009425366705'  className="nav-link mx-2 bg-success" ><FaFacebook className='display-6 '/></a>
                </li>
                <li className="nav-item">
                  <a href='https://github.com/Navdeep1676' className="nav-link mx-2 bg-danger"><FaGithub className='display-6 '/></a>
                </li>
                <li className="nav-item">
                  <a href='https://www.linkedin.com/in/navdeep-719016186/'  className="nav-link mx-2 bg-warning"><FaLinkedin className='display-6 '/></a>
                </li>
                
             </ul>
           </div>
            
      </header>
    </div>
   </div>
  );
};
export default HomePage;
