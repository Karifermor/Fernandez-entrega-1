import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';


function Navbar () {
  return (
    <nav id='navbar'>
    
      <Link to='/'><span><img className='linkLogo' src='../images/logo.PNG'></img></span></Link>
      <Link to='/category/knitwear'><span className='link'>KNITWEAR |</span></Link>
      <Link to='/category/pattern'><span className='link'>PATTERNS |</span></Link>
      <Link to='/category/test'><span className='link'>TEST CALLS |</span></Link>
      <Link to='/'><span className='link'>ALL</span></Link>

      <div className='cartNav'><CartWidget></CartWidget></div>

    </nav>
  )
}

export default Navbar;