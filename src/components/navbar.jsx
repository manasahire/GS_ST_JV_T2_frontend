import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Error from "./Error";
import GrievanceForm from "./GrivenceFormU";
import LoginPage from "./loginpage";
import home from "./home";
import AboutUs from "./aboutus";
import mainemp from '../EMP/mainemp'
// import ContactForm from "./contactUs";
import mainprm from "../PRM/mainprm";
import mainhod from "../HOD/mainhod";


function Navbar() {
  return (
    <>
      <Router>
        <div className="container" style={{ backgroundColor: "#FBF6EE" }}>
          <nav
            className="navbar navbar-expand-lg navbar-dark"
            style={{ backgroundColor: "#5375e2" }}
          >
            <div className="container-fluid">
              <Link className="navbar-brand text-white" to="/home">
                Home Page
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/Grivance"
                    >
                      GrievanceForm
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link
                      className="nav-link text-white"
                      aria-current="page"
                      to="/ContactForm"
                    >
                      Contact Us 
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>

          <Routes>
            <Route path="" Component={home}></Route>
            <Route path="home" Component={home}></Route>
            <Route path="Grivance" Component={GrievanceForm}></Route>
            <Route path="login" Component={LoginPage}></Route>
            <Route path="aboutus" Component={AboutUs}></Route>
            <Route path="*" Component={Error}></Route>
            <Route path="mainemp" Component={mainemp}></Route>
            <Route path="mainprm" Component={mainprm}></Route>
            <Route path="mainhod" Component={mainhod}></Route>
            {/* <Route path="ContactForm" Component={ContactForm}></Route> */}

            
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default Navbar;
