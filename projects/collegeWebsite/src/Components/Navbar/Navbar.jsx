import React from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li>
          <button className="btn">Contact us </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
