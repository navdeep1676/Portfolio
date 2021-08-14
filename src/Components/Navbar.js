import IMG from '../Img/img.jpeg';
import {Link} from 'react-router-dom'
const Navbar = ({navToggle,show}) => {
  const handelClick=(e)=>{

show(false)
navToggle(false)
  }
  return <div className='mt-4 d-flex justify-content-between flex-column position-absolute'>
     <div className="profile mb-2  ">
          <img src={IMG} alt="" className='m-auto d-block img-fluid rounded-circle w-75 h-75 border border-3 border-secondary' />
      </div>
      <nav className="nav d-flex flex-column  text-center my-5">
      
        <Link onClick={(e)=>handelClick(e)}  to='/' className="nav-link text-secondary active" aria-current="page"> Home</Link>
        <Link onClick={(e)=>handelClick(e)} to='/about' className="nav-link text-secondary" >About</Link>
        <Link onClick={(e)=>handelClick(e)} to='/mini-projects' className="nav-link text-secondary" >Minor Projects</Link>
        <Link onClick={(e)=>handelClick(e)} to='/projects' className="nav-link text-secondary" >Major Projects</Link>
        <Link onClick={(e)=>handelClick(e)} to='/contact' className="nav-link text-secondary" >Contact</Link>
      </nav>
     
  </div>;
};
export default Navbar;
