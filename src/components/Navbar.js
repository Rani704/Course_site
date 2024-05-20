import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="nav1">
          <h1>Logo</h1>
          <div className="nav-buttons">
            <button className="login-button">Login</button>
            <button className="signup-button">SignUp</button>
          </div>
        </div>
        <div id="header">
          <h4>Overview</h4>
          <h4>Curriculum</h4>
          <h4>Refund</h4>
          <h4>Testimonials</h4>
        </div>
      </div>
    </>
  );
};

export default Navbar;
