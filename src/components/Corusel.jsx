import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import corusel_image_1 from "../assets/corusel_image_1.svg";
import corusel_image_2 from "../assets/corusel_image_2.svg";
import corusel_image_3 from "../assets/corusel_image_3.svg";
import corusel_image_4 from "../assets/corusel_image_4.svg";

import user_icon from "../assets/user_icon.svg";
import star_icon from "../assets/star_icon.svg";

import "./components.css";

const Corusel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.6, // Bir vaqtning o'zida necha karta ko'rinishini sozlaydi
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.6,
        },
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2,
        },
      },
      //   {
      //     breakpoint: 767,
      //     settings: {
      //       slidesToShow: 1.6,
      //     },
      //   },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 0.9,
        },
      },
    ],
  };

  return (
    <div
      className="flex corusel-flex"
      style={{
        width: "85%",
        margin: "auto",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <h2
        style={{
          color: "white",
          fontSize: "clamp(1rem, calc(5.5vw + 0.4rem), 2.5rem)",
        }}
      >
        Chose the Class that <br /> according to your help
      </h2>
      <Slider {...settings}>
        <div>
          <div
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
            className="flex slider-card"
          >
            <img width={"100%"} height={"163px"} src={corusel_image_1} alt="" />
            <div className="corusel-card flex">
              <h3>The level of creativity and student activity</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex slider-card"
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
          >
            <img width={"100%"} height={"163px"} src={corusel_image_2} alt="" />
            <div className="corusel-card flex">
              <h3>Knowledge of earth and world geography</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex slider-card"
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
          >
            <img width={"100%"} height={"163px"} src={corusel_image_3} alt="" />
            <div className="corusel-card flex">
              <h3>Logic and numeric general calculations</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex slider-card"
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
          >
            <img width={"100%"} height={"163px"} src={corusel_image_4} alt="" />
            <div className="corusel-card flex">
              <h3>Drawing and coloring picture Book</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex slider-card"
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
          >
            <img width={"100%"} height={"163px"} src={corusel_image_2} alt="" />
            <div className="corusel-card flex">
              <h3>Knowledge of earth and world geography</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex slider-card"
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
          >
            <img width={"100%"} height={"163px"} src={corusel_image_1} alt="" />
            <div className="corusel-card flex">
              <h3>The level of creativity and student activity</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex slider-card"
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
          >
            <img width={"100%"} height={"163px"} src={corusel_image_4} alt="" />
            <div className="corusel-card flex">
              <h3>Drawing and coloring picture Book</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="flex slider-card"
            style={{
              padding: "10 0",
              background: "#f5f5f5",
              margin: "0 10px",
              width: "280px",
              height: "auto",
              borderRadius: 12,
            }}
          >
            <img width={"100%"} height={"163px"} src={corusel_image_3} alt="" />
            <div className="corusel-card flex">
              <h3>Logic and numeric general calculations</h3>
              <div className="corusel-card-bottom flex">
                <div className="flex align gap-10">
                  <div className="corusel-card-user flex align gap-5">
                    <img className="corusel_icon" src={user_icon} alt="" />
                    <span>200 Students</span>
                  </div>
                  <div className="corusel-card-rating flex align gap-5">
                    <img className="corusel_icon" src={star_icon} alt="" />
                    <span>4.9</span>
                  </div>
                </div>
                <div className="corusel-card-price">
                  <span>170$</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Corusel;
