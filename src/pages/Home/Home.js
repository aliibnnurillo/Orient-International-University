import React from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import * as Icon from "../../components/Icon";
import "./Home.scss";
const Home = () => {
  const settings = {
    dots: true,
    arrows: false,
  };
  return (
    <div id="team">
      <Slider {...settings}>
        <div className="header-main">
          <div className="header-main-content">
            <div className="header-main-content-first">
              <h3 className="header-main-content-first-title">
                Opening A New World Of Education
              </h3>
              <span className="header-main-content-first-span"></span>
            </div>
            <h2 className="header-main-content-second-title">
              Largest Education Institute
            </h2>
            <h4 className="header-main-content-third-title">
              We are the largest eduction online institute
            </h4>
            <div className="read-more">Read more</div>
          </div>
          <div className="header-main-control">
            <Link to="footer" smooth={true} duration={500} spy={true} exact>
              <span className="header-main-control-icon">
                <Icon.Down />
              </span>
            </Link>
          </div>
        </div>
        <div className="header-main">
          <div className="header-main-content">
            <div className="header-main-content-first">
              <h3 className="header-main-content-first-title">
                Opening A New World Of Education
              </h3>
              <span className="header-main-content-first-span"></span>
            </div>
            <h2 className="header-main-content-second-title">
              Largest Education Institute
            </h2>
            <h4 className="header-main-content-third-title">
              We are the largest eduction online institute
            </h4>
            <div className="read-more">Read more</div>
          </div>
          <div className="header-main-control">
            <Link to="footer" smooth={true} duration={500} spy={true} exact>
              <span className="header-main-control-icon">
                <Icon.Down />
              </span>
            </Link>
          </div>
        </div>
        <div className="header-main">
          <div className="header-main-content">
            <div className="header-main-content-first">
              <h3 className="header-main-content-first-title">
                Opening A New World Of Education
              </h3>
              <span className="header-main-content-first-span"></span>
            </div>
            <h2 className="header-main-content-second-title">
              Largest Education Institute
            </h2>
            <h4 className="header-main-content-third-title">
              We are the largest eduction online institute
            </h4>
            <div className="read-more">Read more</div>
          </div>
          <div className="header-main-control">
            <Link to="footer" smooth={true} duration={500} spy={true} exact>
              <span className="header-main-control-icon">
                <Icon.Down />
              </span>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;
