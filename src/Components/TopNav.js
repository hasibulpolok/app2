import React from "react";
import { Link, useLocation } from "react-router-dom";


export const TopNav = () => {
 const location = useLocation();

  return (
    <>
    <nav  className="navbar navbar-expand-sm bg-dark navbar-dark mb-4">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/props" ? "active" : ""}`}
              to="/props"
            >
              Props
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/props" ? "active" : ""}`}
              to="/events"
            >
              Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
</>
  );
};
