import React from "react";
import TeamPhoto from "../../assets/images/Intersect (9).svg";
import TeamPhoto2 from "../../assets/images/Intersect (10).svg";
import TeamPhoto3 from "../../assets/images/Intersect (11).svg";
import "./Team.scss";
const Team = () => {
  return (
    <div className="team" id="team">
      <div className="heading-content-partner">
        <h3 className="heading-title">Our Team</h3>
        <div className="line">
          <span className="line-one"></span>
          <span className="line-two"></span>
        </div>
      </div>
      <div className="team-card">
        <div className="team-card-inner">
          <img src={TeamPhoto} alt="" className="team-card-image" />
          <div className="team-card-inner-content">
            <h3 className="team-card-inner-content-title">
              Babaxodjavev Sarvar
            </h3>
            <h3 className="team-card-inner-content-title">Nadjimovich</h3>
            <span className="team-card-inner-content-text">
              Kuzatuv kengashi raisi
            </span>
          </div>
        </div>
        <div className="team-card-inner">
          <img src={TeamPhoto2} alt="" className="team-card-image" />
          <div className="team-card-inner-content">
            <h3 className="team-card-inner-content-title">Xodjayev Nosir</h3>
            <h3 className="team-card-inner-content-title">Nodirovich</h3>
            <span className="team-card-inner-content-text">Rektor</span>
          </div>
        </div>
        <div className="team-card-inner">
          <img src={TeamPhoto3} alt="" className="team-card-image" />
          <div className="team-card-inner-content">
            <h3 className="team-card-inner-content-title">Sheraliyev Oybek</h3>
            <h3 className="team-card-inner-content-title">Rixsillayevich</h3>
            <span className="team-card-inner-content-text">
              Kuzatuv kengashi raisi
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
