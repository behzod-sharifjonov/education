import React from "react";
import service_icon_1 from "../assets/service_icon_1.svg";
import service_icon_2 from "../assets/service_icon_2.svg";
import service_icon_3 from "../assets/service_icon_3.svg";
import service_icon_4 from "../assets/service_icon_4.svg";

function Service() {
  return (
    <div className="service container flex align">
      <h1>How is our Service</h1>
      <span>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. <br /> Lorem Ipsum has been the industry's standard dummy
      </span>
      <div className="service-container">
        <div className="service-card">
          <img src={service_icon_1} alt="" />
          <div className="service-card-text flex">
            <h3>Relaxing and Learning</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </span>
            <div className="service-btn">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="service-card">
          <img src={service_icon_2} alt="" />
          <div className="service-card-text flex">
            <h3>Certificate</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </span>
            <div className="service-btn">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="service-card">
          <img src={service_icon_3} alt="" />
          <div className="service-card-text flex">
            <h3>Private Monitor</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </span>
            <div className="service-btn">
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className="service-card">
          <img src={service_icon_4} alt="" />
          <div className="service-card-text flex">
            <h3>Creative Thinking</h3>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </span>
            <div className="service-btn">
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
