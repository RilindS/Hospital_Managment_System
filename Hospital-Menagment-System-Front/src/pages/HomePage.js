// HomePage.jsx
import React from 'react';
//import { NavLink } from 'react-router-dom';
//import { Nav } from 'react-bootstrap';
//import './HomePage.css'; // Update the CSS file as needed

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to the Hospital Management System</h1>
     
    </div>
  );
};

export default HomePage;

/*

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import classes from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={classes.homePage}>
      <h1>Welcome to the Hospital Management System</h1>
      <Nav className="flex-column">
        <NavLink to="/patient" className={classes.navLink}>
          Go to Patient Management
        </NavLink>
        <NavLink to="/doctor" className={classes.navLink}>
          Go to Doctor Management
        </NavLink>
        <NavLink to="/department" className={classes.navLink}>
          Go to department Management
        </NavLink>
      </Nav>
    </div>
  );
};

export default HomePage;
*/