import React from "react";
import cx from "classnames";
import "./Button.scss";

const Butoon = ({ title, icon, variant }) => {
  return (
    <button className={cx("btn", variant && `btn-variant-${variant}`)}>
      {!!icon && <div className="btn-icon">{icon}</div>}
      <h3 className="btn-title">{title}</h3>
    </button>
  );
};

export default Butoon;
