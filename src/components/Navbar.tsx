import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="logo">DEMO SINGLE PAGE APP</div>
            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/test">Test Page</Link></li>
                <li><Link to="/inaccessible" >Inaccessible Page</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
