import React from "react";
import cx from "classnames";
import "./Button.scss";
const Butoon = ({ title, src, variant, hide }) => {
  return (
    <button className={cx("btn", variant && `btn-variant-${variant}`)}>
      <img
        src={src}
        alt=""
        className={cx("btn-img", hide && `btn-img-${hide}`)}
      />
      <h3 className="btn-title">{title}</h3>
    </button>
  );
};

export default Butoon;
