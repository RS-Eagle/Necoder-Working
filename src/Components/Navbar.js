import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import logo1 from "../img/main.png";
import logo2 from "../img/main2.png";

import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ validate, logo }) => {
  const [menu, setmenu] = useState(false);
  console.log(validate);

  const collapse = () => {
    setmenu(!menu);
  };
  return (
    <div className="navbarr">
      <nav>
        <div className="img">
          <Link to={"/"}>
            <img
              src={logo ? logo1 : logo2}
              alt=""
              style={{ height: "80px", width: "140px" }}
              width="100"
              height="100"
              className="mt-2"
            />
          </Link>
        </div>
        <div className={menu ? " nav_res" : " "}>
          <div
            className={logo ? "links " : "links linkss"}
            style={{ color: "#59A6AE" }}
          >
            <div className="links-menu">
              {menu ? (
                <span className="span"></span>
              ) : (
                <Link
                  className="nav-text"
                  to={`/${validate == "Home" ? "" : validate.toLowerCase()}`}
                >
                  {" "}
                  <span className="span">{validate}</span>
                </Link>
              )}

              <div className={menu ? "newshow " : "newlinks "}>
                <span
                  className="span"
                  onClick={() => {
                    collapse();
                  }}
                >
                  <Link className="nav-text" to={"/"}>
                    {" "}
                    Home
                  </Link>
                </span>
                <span
                  className="span"
                  onClick={() => {
                    collapse();
                  }}
                >
                  <Link className="nav-text" to={"/about"}>
                    {" "}
                    About
                  </Link>
                </span>
                <span
                  className="span"
                  onClick={() => {
                    collapse();
                  }}
                >
                  <Link className="nav-text" to={"/courses"}>
                    {" "}
                    Course
                  </Link>
                </span>
                <span
                  className="span"
                  onClick={() => {
                    collapse();
                  }}
                >
                  <Link className="nav-text" to={"/contact"}>
                    {" "}
                    Contact
                  </Link>
                </span>
              </div>
            </div>

            <div className="icons">
              {menu ? (
                <FontAwesomeIcon
                  className="icon"
                  onClick={collapse}
                  icon={faXmark}
                />
              ) : (
                <FontAwesomeIcon
                  className="icon"
                  onClick={collapse}
                  icon={faBars}
                />
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
