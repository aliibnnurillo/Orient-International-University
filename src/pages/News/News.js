import React, { useState } from "react";

import { BsArrowRight } from "react-icons/bs";
import "./News.scss";
const News = () => {
  const news = [
    {
      img: require("../../assets/images/Intersect (3).svg").default,
      name: "Academy of Art Ranks in Top",
      text: "Animation Schools in America",
      date: "August 14, 2022",
      key: "bachalore",
    },
    {
      img: require("../../assets/images/Intersect (4).svg").default,
      name: "Academy of Art Ranks in Top",
      text: "Animation Schools in America",
      date: "August 14, 2022",
      key: "international",
    },
    {
      img: require("../../assets/images/Intersect (5).svg").default,
      name: "Academy of Art Ranks in Top",
      text: "Animation Schools in America",
      date: "August 14, 2022",
      key: "bachalore",
    },
  ];

  const [foundItem, setFoundItem] = useState(news);

  function removeStyles() {
    const categories = document.querySelector("#list").children;
    console.log(categories);
    for (let item of categories) {
      item.style.backgroundColor = "unset";
    }
  }

  const filter = (e) => {
    const type = e.target.getAttribute("datatype");
    removeStyles();
    console.log(e.target);
    e.target.style.backgroundColor = "#fdb827";
    if (type === "all") {
      setFoundItem(news);
      return;
    }

    const filtered = news.filter((item) => {
      const univerCategory = item.key.toLowerCase().split(", ");

      return univerCategory.includes(type.toLowerCase());
    });

    setFoundItem(filtered);
  };

  return (
    <div className="news" id="news">
      <div className="heading-content">
        <h3 className="heading-title">Latest news</h3>
        <div className="line">
          <span className="line-one"></span>
          <span className="line-two"></span>
        </div>
      </div>
      <ul className="list-group" id="list">
        <li className="list-group-item " datatype="all" onClick={filter}>
          All
        </li>
        <li className="list-group-item" datatype="bachalore" onClick={filter}>
          Bachalore
        </li>
        <li
          className="list-group-item"
          datatype="international"
          onClick={filter}
        >
          International Foundation
        </li>
        <li className="list-group-item" datatype="country" onClick={filter}>
          Bachalore in Russia
        </li>
        <li className="list-group-item" datatype="countrytwo" onClick={filter}>
          Bachalore in English
        </li>
      </ul>
      <div className="news-card-box">
        {Array.isArray(foundItem) &&
          news.map((item) => {
            const card = (
              <div className="news-card-box-inner">
                <img src={item.img} alt="" className="news-card-box-image" />
                <div className="news-card-box-inner-content">
                  <h3 className="news-card-box-inner-title">{item.name}</h3>
                  <h3 className="news-card-box-inner-title">{item.text}</h3>
                  <span className="news-card-box-inner-date">{item.date}</span>
                </div>
              </div>
            );
            return card;
          })}
      </div>
      {/* <div className="news-card-box">
        {Array.isArray(foundItem) &&
          news.map((item) => {
            const card = (
              <div className="news-card-box-inner">
                <img src={item.img} alt="" className="news-card-box-image" />
                <div className="news-card-box-inner-content">
                  <h3 className="news-card-box-inner-title">{item.name}</h3>
                  <h3 className="news-card-box-inner-title">{item.text}</h3>
                  <span className="news-card-box-inner-date">{item.date}</span>
                </div>
              </div>
            );
            return card;
          })}
      </div> */}
      <div className="views-box">
        <div className="views-btn">
          <span className="views-btn-title"> view all news</span>{" "}
          <BsArrowRight color="black" />
        </div>
        <div className="line-orange">
          <span className="line-orange-one"></span>
          <span className="line-orange-two"></span>
        </div>
      </div>
    </div>
  );
};

export default News;
