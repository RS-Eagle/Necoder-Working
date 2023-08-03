import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/net-coder-logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [navValu, setnavVal] = useState("Home");

  const collapse = () => {
    setmenu(!menu);
  };
  return (
    <div>
      <nav>
        <div className="img">
          <img src={logo} alt="" style={{height: "126px",
    width: "126px"}} width="100" height="100"/>
        </div>
        <div className="links linkss" style={{color:"#59A6AE"}}>
          <div className="links-menu">
            {menu ? (
              <span className="span"></span>
            ) : (
              <span className="span">{navValu}</span>
            )}

            <div className={menu ? "newshow" : "newlinks"}>
              <span
                className="span"
                onClick={() => {
                  setnavVal("Home");
                  collapse();
                }}
              >
                Home
              </span>
              <span
                className="span"
                onClick={() => {
                  setnavVal("About");
                  collapse();
                }}
              >
                About
              </span>
              <span
                className="span"
                onClick={() => {
                  setnavVal("Course");
                  collapse();
                }}
              >
                Course
              </span>
              <span
                className="span"
                onClick={() => {
                  setnavVal("Contact");
                  collapse();
                }}
              >
                Contact
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
      </nav>
    </div>
  );
};

export default Navbar;
