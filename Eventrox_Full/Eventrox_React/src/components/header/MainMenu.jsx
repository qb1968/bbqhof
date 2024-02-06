import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'

const MainMenu = ({ parentMenu, toggleMenu, toggleMultiMenu }) => {
    return (
      <>
        <ul className="navigation clearfix">
          <li className={`dropdown ${parentMenu === "home" ? "current" : ""} `}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>

            <div className="dropdown-btn">
              <span className="fa fa-angle-down"></span>
            </div>
          </li>
          {/* <li className={`dropdown ${parentMenu === 'about' ? 'current' : ''}`}>
                    <Link to={void (0)} onClick={toggleMenu}>About</Link>
                    <ul className='sub-menu'>
                        <li><Link to="/about-us#" >About Us</Link></li>
                        <li><Link to="/pricing#" >Pricing</Link></li>
                        <li><Link to="/faqs#" >FAQs</Link></li>
                        <li><Link to="/gallery#" >Gallery</Link></li>
                        <li><Link to="/coming-soon#" >Coming Soon</Link></li>
                    </ul>
                    <div className="dropdown-btn" ><span className="fa fa-angle-down"></span></div>
                </li> */}

          <li
            className={`dropdown ${parentMenu === "schedule" ? "current" : ""}`}
          >
            <Link to="/event-detail/1/1#" onClick={toggleMenu}>
              Ceremony
            </Link>
           
          </li>
          
          <li>
            <Link to="/contact#">Contact</Link>
          </li>
        </ul>
      </>
    );
};

export default MainMenu;