import React, { useState } from "react";
import cx from "classnames";
import Button from "../Button";
import * as Icon from "../Icon";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = () => {
  const [open, setOpen] = useState("asosiy");
  const menu = [
    { title: "Asosiy", value: "asosiy" },
    {
      title: "Abiturientlarga",
      value: "abiturient",
      image: <Icon.ArrDown />,
      list: "Qabul komissiyasi",
      list1: "Ko'rsatmlar",
      list2: "Bakalvriat",
      list3: "Magistratura",
      list4: "Ikkinchi oliy ta'lim",
      list5: "Ro'yxatdan o'tish",
    },
    {
      title: "Talabalarga",
      value: "students",
      image: <Icon.ArrDown />,
      list: "Iqtidorli talabalarimiz",
      list1: "Stipendiyalar va grantlar",
      list2: "On-line darslar",
    },
    {
      title: "Yangiliklar",
      value: "news",
      image: <Icon.ArrDown />,
      list: "Kafedra tizimi bo'yicha",
      list1: "Yo'nalishlar bo'yicha",
      list2: "Kirish imtihon ballari",
      list3: "Yangi yo'nalishlar",
      list4: "Kunduzgi ta'lim",
      list5: "Sirtqi ta'lim",
    },
    {
      title: "Biz haqimizda",
      value: "about",
      image: <Icon.ArrDown />,
      list: "Umumiy",
      list1: "Ko'p so'raladigan savollar",
      list2: "Bizning takliflarimiz",
    },

    {
      title: "Ish o'rinlari",
      value: "vacancy",
      image: <Icon.ArrDown />,
      list: "Yangi ish o'rinlari",
      list1: "Amaliyot uchun",
      list2: "On-line darslar",
    },
  ];
  const [show, setShow] = useState(false);
  return (
    <div className="header">
      <div className="header-top">
        <div className="header-top-contact">
          <div className="header-top-contact-box">
            <div className="header-top-contact-box-images">
              <Icon.Phone />
            </div>
            <h3 className="header-top-contact-box-title">+998(90) 123 45 67</h3>
          </div>
          <div className="header-top-contact-box">
            <div className="header-top-contact-box-images">
              <Icon.Convert />
            </div>

            <h3 className="header-top-contact-box-title">
              johnsmith@gmail.com
            </h3>
          </div>
        </div>
        <ul className="list">
          <li>
            <NavLink
              className="list-item"
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              activeClassName="active"
              exact
            >
              Header
            </NavLink>
          </li>
          <li>
            <Link to="faculties" smooth={true} duration={500} spy={true}>
              <NavLink
                className="list-item list"
                to="/faculties"
                spy={true}
                smooth={true}
                duration={500}
                exact
              >
                Faculties
              </NavLink>
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} spy={true}>
              <NavLink
                exact
                className="list-item list"
                to="/about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About us
              </NavLink>
            </Link>
          </li>
          <li>
            <Link to="news" smooth={true} duration={500} spy={true}>
              <NavLink
                exact
                className="list-item"
                to="/news"
                spy={true}
                smooth={true}
                duration={500}
              >
                News
              </NavLink>
            </Link>
          </li>
          <li>
            <Link to="partner" smooth={true} duration={500} spy={true}>
              <NavLink
                exact
                className="list-item"
                to="/partner"
                spy={true}
                smooth={true}
                duration={500}
              >
                Partners
              </NavLink>
            </Link>
          </li>
          <li>
            <Link to="team" smooth={true} duration={500} spy={true}>
              <NavLink
                exact
                className="list-item"
                to="/team"
                spy={true}
                smooth={true}
                duration={500}
              >
                Team
              </NavLink>
            </Link>
          </li>
          <li>
            <Link to="footer" smooth={true} duration={500} spy={true}>
              <NavLink
                exact
                className="list-item"
                to="/footer"
                spy={true}
                smooth={true}
                duration={500}
              >
                Footer
              </NavLink>
            </Link>
          </li>
        </ul>
      </div>
      <nav className="navbar">
        <div className="navbar-inner">
          <div className="navbar-brand">
            <Icon.LogoOrient />
          </div>

          <ul className="nav-list">
            {menu.map((item) => (
              <li
                className={cx("nav-list-item")}
                onClick={() => setOpen(item.value)}
              >
                {item.title}
                {!!item.image && (
                  <span className="nav-list-item-img">{item.image}</span>
                )}

                <div
                  className={cx(
                    "abiturient-box",
                    item.value === open && "open"
                  )}
                >
                  {!!item.list && (
                    <ul className="nav_list">
                      <li className="nav_list-item">{item.list}</li>
                      <li className="nav_list-item">{item.list1}</li>
                      <li className="nav_list-item">{item.list2}</li>
                      {item.list3 && (
                        <li className="nav_list-item">{item.list3}</li>
                      )}
                      {item.list4 && (
                        <li className="nav_list-item">{item.list4}</li>
                      )}
                      {item.list5 && (
                        <li className="nav_list-item">{item.list5}</li>
                      )}
                    </ul>
                  )}
                </div>
              </li>
            ))}
            <NavLink to="/contact" className="aloqa">
              <li className="nav-list-item">Aloqa</li>
            </NavLink>
          </ul>
          <div className="nav-btn">
            <Button title={"Apply now"} icon={<Icon.User />} />
            <div className="language" onClick={() => setShow(!show)}>
              <span className="language-title">O'zbekcha</span>
              <Icon.Flag />
              <div className={cx("dropdown", show && "dropdown-open")}>
                <div className="dropdown-menu">
                  <span>O'zbekcha</span>
                  {/* <Icon.Flag /> */}
                  <Icon.RuFlag />
                </div>
                <div className="dropdown-menu">
                  <span>O'zbekcha</span>
                  <Icon.Flag />
                  {/* <Icon.RuFlag /> */}
                </div>
              </div>
            </div>
            {/* <Button
              title={"O'zbekcha"}
              icon={<Icon.Flag />}
              variant={"languages"}
            /> */}
            {/* <Button title={"O'zbekcha"} image={Flag} variant={"languages"} /> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
