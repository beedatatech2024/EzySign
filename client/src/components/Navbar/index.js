import React from "react";
import "./index.css"; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <img src="images/applogo.png" alt="Logo"/>
                {/* <h1>EZYSIGN</h1> */}
                <div>
                    <ul className="navbar-list">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">About</li>
                        <li className="nav-item">Contact</li>
                        <li className="nav-item">Service</li>
                    </ul>
                    <button>Log in</button>
                    <button>Log out</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
