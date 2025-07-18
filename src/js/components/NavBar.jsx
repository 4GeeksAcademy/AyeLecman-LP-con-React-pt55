import React from "react";
import { NavLink } from "react-router-dom";

//create your first component
const NavBar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/" end>Start Bootstrap</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/" end>Home</NavLink>
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        <NavLink className="nav-link" to="#">Services</NavLink>
                        <NavLink className="nav-link" to="#">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;