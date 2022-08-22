import React, { useState } from "react";
import NewsCategory from "./NewsCategory";
import { BsArrowRight } from "react-icons/bs";
import "./News.scss";
import cx from "classnames";
import { useQueryParams } from "react-router-query-hooks";

const News = () => {
  const [query, { pushQuery }] = useQueryParams();

  const [data, setData] = useState(NewsCategory);

  const [filter, setFilter] = useState(query.tab || "all");

  const getFilteredDate = (category) => {
    if (category === "all") {
      setData(NewsCategory);
      return;
    }
    const result = NewsCategory.filter((currentData) => {
      return currentData.key === category;
    });

    setData(result);
    pushQuery({ ...query, tab: category });
  };

  //first EXAMPLE////////////////////////////////////////////////////////////////////////////////

  // const [foundItem, setFoundItem] = useState(news);

  // function removeStyles() {
  //   const categories = document.querySelector("#list").children;
  //   console.log(categories);
  //   for (let item of categories) {
  //     item.style.backgroundColor = "unset";
  //   }
  // }

  // const filter = (e) => {
  //   const type = e.target.getAttribute("datatype");
  //   removeStyles();
  //   console.log(e.target);
  //   e.target.style.backgroundColor = "#fdb827";
  //   if (type === "all") {
  //     setFoundItem(news);
  //     return;
  //   }

  //   const filtered = news.filter((item) => {
  //     const newscategory = item.key.toLocaleLowerCase();
  //     return newscategory.includes(type.toLowerCase());

  //     // const univerCategory = item.key.toLowerCase().split(", ");

  //     // return univerCategory.includes(type.toLowerCase());
  //   });

  //   setFoundItem(filtered);
  // };

  const tab = [
    { title: "All", value: "all" },
    { title: "Bachalore", value: "bachalore" },
    { title: "International Foundation", value: "international" },
    { title: "Bachalore in Russia", value: "country" },
    { title: "Bachalore in English", value: "countrytwo" },
  ];

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
        {tab.map((item) => (
          <li
            key={item.value}
            className={cx(
              "list-group-item",
              item.value === filter && "bg-color"
            )}
            onClick={() => {
              setFilter(item.value);
              getFilteredDate(item.value);
            }}
          >
            {item.title}
          </li>
        ))}
      </ul>
      <div className="news-card-box">
        {data.map((item) => {
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

      <div className="views-box">
        <div className="views-btn">
          <span className="views-btn-title"> view all news</span>
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
