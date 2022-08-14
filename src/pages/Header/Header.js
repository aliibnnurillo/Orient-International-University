import React from "react";
import Phone from "../../assets/images/Vectorphone.svg";
import Convert from "../../assets/images/phoneconvert.svg";
import Orient from "../../assets/images/Group 2 2.svg";
import ArrDown from "../../assets/images/Vector (5).svg";
import User from "../../assets/images/phoneUser.svg";
import Flag from "../../assets/images/image 2.svg";
import HeaderIcon from "../../assets/images/Vector 1hedervector.svg";
import "./Header.scss";
import Button from "../../components/Button";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-contact">
          <div className="header-top-contact-box">
            <img src={Phone} alt="" className="header-top-contact-box-image" />
            <h3 className="header-top-contact-box-title">+998(90) 123 45 67</h3>
          </div>
          <div className="header-top-contact-box">
            <img
              src={Convert}
              alt=""
              className="header-top-contact-box-images"
            />
            <h3 className="header-top-contact-box-title">
              johnsmith@gmail.com
            </h3>
          </div>
        </div>
        <ul className="list">
          <li className="list-item">
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={100}
              duration={500}
            >
              Header
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="faculties"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Faculties
            </Link>
          </li>
          <li className="list-item">
            <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
              About us
            </Link>
          </li>
          <li className="list-item">
            <Link to="news" spy={true} smooth={true} offset={10} duration={500}>
              News
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="partner"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Partners
            </Link>
          </li>
          <li className="list-item">
            <Link to="team" spy={true} smooth={true} offset={10} duration={500}>
              Team
            </Link>
          </li>
          <li className="list-item">
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              Footer
            </Link>
          </li>
        </ul>
      </div>
      <navbar className="navbar">
        <div className="navbar-inner">
          <img src={Orient} alt="" className="navbar-brand" />
          <ul className="nav-list">
            <li className="nav-list-item active">Asosiy</li>
            <li className="nav-list-item">
              Abiturientlarga
              <img src={ArrDown} alt="" className="nav-list-item-img" />
            </li>
            <li className="nav-list-item">
              Talabalrga{" "}
              <img src={ArrDown} alt="" className="nav-list-item-img" />
            </li>
            <li className="nav-list-item">
              Yangiliklar
              <img src={ArrDown} alt="" className="nav-list-item-img" />
            </li>
            <li className="nav-list-item">
              Biz haqimizda
              <img src={ArrDown} alt="" className="nav-list-item-img" />
            </li>
            <li className="nav-list-item">
              Aloqa
              <img src={ArrDown} alt="" className="nav-list-item-img" />
            </li>
            <li className="nav-list-item">
              Ish o'rinlari
              <img src={ArrDown} alt="" className="nav-list-item-img" />
            </li>
          </ul>
          <div className="nav-btn">
            <Button title={"Apply now"} src={User} />
            <Button title={"O'zbekcha"} src={Flag} variant={"languages"} />
          </div>
        </div>
      </navbar>
      <div className="header-main">
        <div className="header-main-content">
          <div className="header-main-content-first">
            <h3 className="header-main-content-first-title">
              Opening A New World Of Education
            </h3>
            <span className="header-main-content-first-span"></span>
          </div>
          <h2 className="header-main-content-second-title">
            Largest Education Institute{" "}
          </h2>
          <h4 className="header-main-content-third-title">
            We are the largest eduction online institute
          </h4>
          <Button title={"Read More"} variant={"read-more"} hide={"hide"} />
        </div>
        <div className="header-main-control">
          <div className="header-main-control-items">
            <span className="header-main-control-items-icon"></span>
            <span className="header-main-control-items-icon-active"></span>
            <span className="header-main-control-items-icon"></span>
          </div>
          <img src={HeaderIcon} alt="" className="header-main-control-icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
