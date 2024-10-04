import React from 'react';
import { Link } from 'react-router-dom';
import './layout.css'
import logo from '../../client/components/logo.png'

export default function Layout() {
    return (
        <>
          <nav className="navbar">
            <div className="navContent">
              <img src={logo} alt="logo" className='logo' />
              
            </div>
            <div className="desktopMenu">
            <nav>
            
            <div>
            <Link to="/">Home</Link> | 
                <Link to="/about">About Me</Link> | 
                <Link to="/service">Service</Link> | 
                <Link to="/project">Project</Link> | 
                <Link to="/contact">Contact</Link>
            </div>
            
              </nav>
          
            </div>
          </nav>
          
        </>
        
      );
    }