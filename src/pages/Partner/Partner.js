import React from "react";
import Logo from "../../assets/images/image 9.svg";
import Logo2 from "../../assets/images/image 10.svg";
import Logo3 from "../../assets/images/image 11.svg";
import Logo4 from "../../assets/images/image 12.svg";

import "./Partrner.scss";
const Partner = () => {
  return (
    <div className="partner" id="partner">
      <div className="heading-content-partner">
        <h3 className="heading-title">Our Partners</h3>
        <div className="line">
          <span className="line-one"></span>
          <span className="line-two"></span>
        </div>
      </div>
      <div className="partner-logo">
        <img src={Logo} alt="" />
        <img src={Logo2} alt="" />
        <img src={Logo3} alt="" />
        <img src={Logo4} alt="" />
      </div>
    </div>
  );
};

export default Partner;
