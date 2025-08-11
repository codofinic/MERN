import './css/style.css'
import {Link}  from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
    <Link to="/"><li>Home</li></Link>
    <Link to="/services"><li>Services</li></Link>
    <Link to="/about"><li>About Us</li></Link>
    <Link to="/contact"><li>Contact Us</li></Link>  
    </div>
  )
}

export default Header