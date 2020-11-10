import React from 'react';
import Avatar from'./Avatar';
import Contacts from './Contacts';
import { Link } from 'react-router-dom';
import '../pages/style.css'

function Navbar () {
  

   return (
      <div className="fixed-top App " >
      <header className="light navbar-bottom">
      <Avatar   img="assets/images/jivko4a.jpg" >
      </Avatar>
        
       <h1>Hello there, I am Jivko</h1>
       
       <ul className=" links-nav ">
      <li className="nav-item ">
      <Link className="nav-link links-nav " to="/">About</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link links-nav" to="/portfolio">Portfolio</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link links-nav" to="/contact">Contact</Link>
      </li>
    </ul>
    
      </header>
    </div>
   )
}

export default Navbar;