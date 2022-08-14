import React from "react";
import Video from "../../assets/images/Rectangle 3.svg";
import StudentsPhoto from "../../assets/images/depositphotos_68789187-stock-photo-students.jpg";
import Play from "../../assets/images/Group 4play.svg";
import Teacher from "../../assets/images/Intersect (1).svg";
import Faculty from "../../assets/images/Intersect (2).svg";
import "./About.scss";
import * as Icon from "../../components/Icon";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="heading-content">
        <h3 className="heading-title">About us</h3>
        <div className="line">
          <span className="line-one"></span>
          <span className="line-two"></span>
        </div>
      </div>
      <div className="info">
        <div className="info-univer-video">
          <img src={Video} alt="" className="info-univer-video-img" />
          <img src={Play} alt="" className="info-univer-video-icon" />
        </div>
        <div className="info-statistic">
          <div className="card-info">
            <div className="card-info-icon">
              <Icon.Student />
            </div>
            <h3 className="card-info-title">happy Students</h3>
            <h4 className="card-info-status">465+</h4>
            <p className="card-info-description">
              World Largest books and library center is here where you can study
              the latest trends of the education.
            </p>
            <div className="card-info-img">
              <img
                src={StudentsPhoto}
                alt=""
                className="card-info-img about-img"
              />
            </div>
          </div>
          <div className="card-info">
            <div className="card-info-icon">
              <Icon.Teacher />
            </div>
            <h3 className="card-info-title">Teachers</h3>
            <h4 className="card-info-status">30+</h4>
            <p className="card-info-description">
              World Largest books and library center is here where you can study
              the latest trends of the education.
            </p>
            <div className="card-info-img">
              <img src={Teacher} alt="" className="about-img" />
            </div>
          </div>
          <div className="card-info">
            <div className="card-info-icon">
              <Icon.Faculty />
            </div>
            <h3 className="card-info-title">Facultet</h3>
            <h4 className="card-info-status">7+</h4>
            <p className="card-info-description">
              World Largest books and library center is here where you can study
              the latest trends of the education.
            </p>
            <div className="card-info-img">
              <img src={Faculty} alt="" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
