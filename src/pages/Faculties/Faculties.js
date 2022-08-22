import React from "react";

import { GiGraduateCap } from "react-icons/gi";
import { AiFillStar, AiOutlineGlobal } from "react-icons/ai";
import { VscBook } from "react-icons/vsc";
import { TbDeviceHeartMonitor, TbHeartRateMonitor } from "react-icons/tb";
import "./Faculties.scss";
import Button from "../../components/Button";
import Slider from "./Slider";
const Faculties = () => {
  return (
    <div className="faculties" id="faculties">
      <div className="faculties-content">
        <h2 className="faculties-title">
          Our <span className="faculties-title-text">Courses</span>
        </h2>
        <div className="faculties-box">
          <span className="faculties-title-icon"></span>
          <AiFillStar color="#033399" />
          <AiFillStar size={20} color="#033399" />
          <AiFillStar color="#033399" />
          <span className="faculties-title-icon"></span>
        </div>
      </div>
      <div className="our-faculties">
        <div className="our-faculties-card">
          <GiGraduateCap size={50} color="white" />
          <h3 className="our-faculties-card-title">Pre-Foundation Course</h3>
          <p className="our-faculties-card-description">
            World Largest books and library center is here where you can study
            the latest trends of the education.
          </p>
          <Button title={"Apply Now"} variant={"apply"} hide={"hide"} />
        </div>
        <div className="our-faculties-card">
          <VscBook size={50} color="white" />
          <h3 className="our-faculties-card-title">Foundation course</h3>
          <p className="our-faculties-card-description">
            World Largest books and library center is here where you can study
            the latest trends of the education.
          </p>
          <Button title={"Apply Now"} variant={"apply"} hide={"hide"} />
        </div>
        <div className="our-faculties-card">
          <AiOutlineGlobal size={50} color="white" />
          <h3 className="our-faculties-card-title">International business</h3>
          <p className="our-faculties-card-description">
            World Largest books and library center is here where you can study
            the latest trends of the education.
          </p>
          <Button title={"Apply Now"} variant={"apply"} hide={"hide"} />
        </div>
        <div className="our-faculties-card">
          <TbHeartRateMonitor size={50} color="white" />
          <h3 className="our-faculties-card-title">Digital innovation</h3>
          <p className="our-faculties-card-description">
            World Largest books and library center is here where you can study
            the latest trends of the education.
          </p>
          <Button title={"Apply Now"} variant={"apply"} hide={"hide"} />
        </div>
        <div className="our-faculties-card">
          <TbDeviceHeartMonitor size={50} color="white" />
          <h3 className="our-faculties-card-title">Marketing</h3>
          <p className="our-faculties-card-description">
            World Largest books and library center is here where you can study
            the latest trends of the education.
          </p>
          <Button title={"Apply Now"} variant={"apply"} hide={"hide"} />
        </div>
      </div>
      <div className="heading-box">
        <h1 className="heading-title">Our faculties</h1>
        <div className="line-box">
          <span className="line-1"></span>
          <span className="line-2"></span>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default Faculties;
