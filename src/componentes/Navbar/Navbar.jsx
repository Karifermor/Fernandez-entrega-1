import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import React, { useState } from 'react';


function Navbar () {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };
  
  const handleMouseLeave = () => {
    setTimeout(() => {
      setDropdownVisible(false);
    }, 300); 
  };
  

  return (
    <div id='navbar'>

      <div className='navbarLogo'>
        <Link to='/'><span><img className='linkLogonuevo' src='../images/logo.png'></img></span></Link>
      </div>

      <div className='categoryLinks'>

        <button className='dropdownButton' onClick={toggleDropdown}>
          <span className='filterText'>Filter</span>
          <img className='hamburgerIcon' src='../images/hamburger.png'></img>
        </button>

        <div className={`dropdownWrapper ${dropdownVisible ? 'show' : ''}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div className={`dropdownContent ${dropdownVisible ? 'show' : ''}`}>
            <div><Link to='/category/knitwear'><span className='link'>KNITWEAR</span></Link></div>
            <div><Link to='/category/pattern'><span className='link'>PATTERNS</span></Link></div>
            <div><Link to='/category/test'><span className='link'>TEST CALLS</span></Link></div>
            <div><Link to='/'><span className='link'>ALL</span></Link></div>
          </div>
        </div>

      </div>
      
      <NavLink to='/cart'><div className='cartNav'><CartWidget/></div></NavLink>
    </div>
  )
}

export default Navbar;



