import IMG from '../Img/img.jpeg';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <div className='d-flex flex-column justify-content-between  h-100'>
     
      <nav className="nav flex-column mx-auto text-center mt-5">
      <div className="profile">
          <img src={IMG} alt="" className='mx-auto d-block img-fluid rounded-circle w-75 h-75 border border-3 border-secondary' />
      </div>
        <Link to='/' className="nav-link text-secondary active" aria-current="page">Home</Link>
        <Link to='/about' className="nav-link text-secondary" >About</Link>
        <Link to='/mini-projects' className="nav-link text-secondary" >Minor Projects</Link>
        <Link to='/projects' className="nav-link text-secondary" >Major Projects</Link>
        <Link to='/contact' className="nav-link text-secondary" >Contact</Link>
      </nav>
      <footer className='text-center border-top-1 border-start-0 border-end-0 border-bottom-0 border border-secondary'>
          <p className='mt-3'>@2021 Navdeep</p>
      </footer>
  </div>;
};
export default Navbar;
