import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import cg_logo from '../assets/cg-logo.png';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg'>
      <div class='container-fluid'>
        <img src={cg_logo} class='cg-logo' alt='CG logo' />

        <div class='collapse navbar-collapse nav-links mx-5' id='navbarNav'>
          <ul class='navbar-nav nav-options'>
            <li class='nav-item'>
              <Link to='#about' class='nav-link active'>
                About
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='#experience' class='nav-link active'>
                Experience
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='#projects' class='nav-link active'>
                Projects
              </Link>
            </li>
            <li class='nav-item'>
              <Link to='#contact' class='nav-link active'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
