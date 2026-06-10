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
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/list" ? "active" : ""}`}
              to="/list"
            >
              List
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/form" ? "active" : ""}`}
              to="/form"
            >
              Form
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/multiform" ? "active" : ""}`}
              to="/multiform"
            >
              MultiForm
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/newform" ? "active" : ""}`}
              to="/newform"
            >
              Newform
            </Link>
            <Link
              className={`nav-link ${location.pathname === "/displaydata" ? "active" : ""}`}
              to="/displaydata"
            >
              DisplayData
            </Link>
          </li>
        </ul>
      </div>
    </nav>
</>
  );
};
