import React from 'react';
import './Navbar.css';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();  // Initialize useNavigate

    // Handle logout and redirect
    const handleLogout = () => {
        // Perform any logout actions here, like clearing session data
        navigate('/');  // Redirect to login page
    };


    return (
        <div className="navbar">
            <div className="navbar-logo">
            JobPortal
            </div>
            <ul className="navbar-links">
           
            <li className='one'> <Link to="/home">Home</Link></li>
               <li className='two'><Link to="/about">About</Link></li>
               <li className='three'><Link to="/joblisting">Job Listing</Link></li>
               <li className='four'><Link to="/contact">Contact</Link></li>
               <li className='five'><Link to="/companyshowcase">Company Showcase</Link></li>
        
               
               <li>
                   <button onClick={handleLogout} className="logout-button">Logout</button>
               </li> 
            </ul>
        </div>
    );
}

export default Navbar;