import React from "react";
import ArrLeft from "../../assets/images/Vector 2arrright.svg";
import ArrRight from "../../assets/images/Vector 2arrleft.svg";
import Slider from "react-slick";
import "./Faculties.scss";
const slider = [
  {
    image: require("../../assets/images/Rectangle 11technologies.jpg"),
    text: "International business adminstration",
    description:
      "Lorem Ipsum is simply dummy text of the printingv Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    image: require("../../assets/images/Rectangle 11adminstration.jpg"),
    text: "International business adminstration",
    description:
      "Lorem Ipsum is simply dummy text of the printingv Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    image: require("../../assets/images/Rectangle 11adminstration.jpg"),
    text: "International business adminstration",
    description:
      "Lorem Ipsum is simply dummy text of the printingv Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    image: require("../../assets/images/Rectangle 11adminstration.jpg"),
    text: "International business adminstration",
    description:
      "Lorem Ipsum is simply dummy text of the printingv Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
  {
    image: require("../../assets/images/Rectangle 11adminstration.jpg"),
    text: "International business adminstration",
    description:
      "Lorem Ipsum is simply dummy text of the printingv Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley oftype and scrambled it to make a type specimen book.",
  },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "orange",
        border: "none",
        padding: "10px 15px",
        cursor: "pointer",
        position: "absolute",
        right: -10,
        top: "45%",
        zIndex: 100,
      }}
      onClick={onClick}
    >
      <img src={ArrRight} alt="" className="btn-slider-icon" />
    </button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <button
      className={className}
      style={{
        ...style,
        display: "block",
        background: "orange",
        border: "none",
        padding: "10px 15px",
        cursor: "pointer",
        position: "absolute",
        top: "45%",
        left: -10,
        zIndex: 10,
      }}
      onClick={onClick}
    >
      <img src={ArrLeft} alt="" className="btn-slider-icon" />
    </button>
  );
}

const Slide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className="box">
      <Slider {...settings}>
        {slider.map((item) => (
          <div className="card">
            <div className="card-img">
              <img src={item.image} alt="" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-content-title">{item.text}</h3>
              <p className="card-content-description">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slide;
