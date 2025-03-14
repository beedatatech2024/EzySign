import React from "react";
import "./index.css"; 
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src="images/applogo.png" alt="Logo" className="navbar-logo"/>
                <div className="navbar-content">
                    <ul className="navbar-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Contact</li>
                        <li className="nav-item">Service</li>
                    </ul>
                    <button className="nav-button login-btn"><Link className="login-link" to={"/auth"}>Log in</Link></button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
