import React from "react";
import additional_image from "../assets/additional_image.svg";

function Additional() {
  return (
    <div className="additional-section container flex align">
      <div className="additional-container flex align">
        <div className="additional-text flex">
          <h1>
            Access to learning anytime <br /> and anywhere
          </h1>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard <br />
            dummyLorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the industry's
          </span>
          <button className="btn additional-btn">Get Stared</button>
        </div>

        <img className="additional-image" src={additional_image} alt="" />
      </div>
    </div>
  );
}

export default Additional;
