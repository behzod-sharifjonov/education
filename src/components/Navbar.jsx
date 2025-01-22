import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import "./components.css";
import { RiMenu3Fill } from "react-icons/ri";

function Navbar() {
//   const [toggleMenu, setToggleMenu] = useState(false);

//   console.log(toggleMenu);

  return (
    <nav className="flex align container">
      <img src={Logo} alt="" />
      {/* <ul className={`flex nav-ul ${toggleMenu ? "active" : ""} `}>
        <li>Home</li>
        <li>Course</li>
        <li>Monitors</li>
        <li>Testimonials</li>
        <li>Blog</li>
      </ul> */}
      <button className="btn">Contact</button>
      {/* <button className={`nav-menu`} onClick={() => setToggleMenu(!toggleMenu)}>
        <RiMenu3Fill />
      </button> */}
    </nav>
  );
}

export default Navbar;
