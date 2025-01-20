import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import corusel_image_1 from "../assets/corusel_image_1.svg";
import corusel_image_2 from "../assets/corusel_image_2.svg";
import corusel_image_3 from "../assets/corusel_image_3.svg";
import corusel_image_4 from "../assets/corusel_image_4.svg";

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
    autoplaySpeed: 20000,

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
          slidesToShow: 2.1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1.6,
        },
      },
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
      className="flex"
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
            className="flex slider-card"
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              background: "red",
              margin: "0 10px",
              width: "280px",
              height: "350px",
              borderRadius: "14px",
            }}
          >
            <img width={"100%"} height={"194px"} src={corusel_image_1} alt="" />
            <div className="corusel-card">
              <h3>Card 1</h3>
              <p>This is a sample card.</p>
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
              borderRadius: 8,
            }}
          >
            <img width={"280px"} src={corusel_image_2} alt="" />
            <h3>Card 2</h3>
            <p>This is another sample card.</p>
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
              borderRadius: 8,
            }}
          >
            <img width={"280px"} src={corusel_image_3} alt="" />
            <h3>Card 3</h3>
            <p>This is the third card.</p>
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
              borderRadius: 8,
            }}
          >
            <img width={"280px"} src={corusel_image_4} alt="" />
            <h3>Card 4</h3>
            <p>This is the fourth card.</p>
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
              borderRadius: 8,
            }}
          >
            <img width={"280px"} src={corusel_image_2} alt="" />
            <h3>Card 5</h3>
            <p>This is the fifth card.</p>
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
              borderRadius: 8,
            }}
          >
            <img width={"280px"} src={corusel_image_1} alt="" />
            <h3>Card 5</h3>
            <p>This is the fifth card.</p>
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
              borderRadius: 8,
            }}
          >
            <img width={"280px"} src={corusel_image_4} alt="" />
            <h3>Card 5</h3>
            <p>This is the fifth card.</p>
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
              borderRadius: 8,
            }}
          >
            <img width={"280px"} src={corusel_image_3} alt="" />
            <h3>Card 5</h3>
            <p>This is the fifth card.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Corusel;
