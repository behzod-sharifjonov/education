import React from "react";
import Navbar from "./Navbar";
import { FaCirclePlay } from "react-icons/fa6";
import header_image_1 from "../assets/header_image_1.svg";
import header_image_2 from "../assets/header_image_2.svg";
import header_image_3 from "../assets/header_image_3.svg";
import header_image_4 from "../assets/header_image_4.svg";

import header_bottom_1 from "../assets/header_bottom_1.svg";
import header_bottom_2 from "../assets/header_bottom_2.svg";
import header_bottom_3 from "../assets/header_bottom_3.svg";
import header_bottom_4 from "../assets/header_bottom_4.svg";
import header_bottom_5 from "../assets/header_bottom_5.svg";

function Header() {
  return (
    <header>
      <Navbar />
      <div className="header-container container">
        <div className="header-title flex align">
          <h1>
            Let’s Learn about new <br /> Knowledge and abilities.
          </h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. <br /> Lorem Ipsum has been the industry's standard dummy
          </span>
          <div className="header-btns flex align">
            <button className="btn">Get Started</button>
            <button className="header-btn-2 flex align">
              <FaCirclePlay className="play-icon" />
              Watch Video
            </button>
          </div>
        </div>

        <div className="header-images flex">
          <div className="header-img-card">
            <img src={header_image_1} alt="" />
          </div>
          <div className="header-img-card">
            <img src={header_image_2} alt="" />
          </div>
          <div className="header-img-card">
            <img src={header_image_3} alt="" />
          </div>
          <div className="header-img-card">
            <img src={header_image_4} alt="" />
          </div>
        </div>
        <div className="header-partner flex align">
          <div className="header-partner-card">
            <img width={'180px'} src={header_bottom_1} alt="" />
          </div>
          <div className="header-partner-card">
            <img width={'180px'} src={header_bottom_2} alt="" />
          </div>
          <div className="header-partner-card">
            <img width={'180px'} src={header_bottom_3} alt="" />
          </div>
          <div className="header-partner-card">
            <img width={'180px'} src={header_bottom_4} alt="" />
          </div>
          <div className="header-partner-card">
            <img width={'180px'} src={header_bottom_5} alt="" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
