import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/*eslint-disable*/}
      <NavLink to="/home" className="navbar-brand">
        MoBarki
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink to="/movies" className="nav-item nav-link">
            Movies
          </NavLink>
          <NavLink to="/customer" className="nav-item nav-link">
            Customer
          </NavLink>
          <NavLink to="/market" className="nav-item nav-link">
            Market
          </NavLink>
          <NavLink to="/login" className="nav-item nav-link">
            Login
          </NavLink>
          <NavLink to="/register" className="nav-item nav-link">
            Register
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
