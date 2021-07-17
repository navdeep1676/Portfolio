import { FaFacebook,FaGithub,FaLinkedin } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div className="HomePage">
      <header>
          <h1>
              Hi, I am 
              <span className='text-warning ms-2 '>
                  Navdeep.
              </span>
          </h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde debitis, quaerat quo laborum beatae illum culpa 
              fugit ex, voluptatibus tempore laboriosam officiis asperiores id ut, qui iste repellat fuga harum.</p>
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
  );
};
export default HomePage;
