import React from "react";
import fb from "../img/Facebook.png";
import insta from "../img/instagram.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mt-4">
          <div className="row flex">
            <div className="col-lg-2 col-md-4 pt-lg-5 mt-4 pe-lg-5">
              <h5
                className=" ps-lg-2 ps-md-2 fw-bold"
                style={{ color: "#FA8352" }}
              >
                Quick Links
              </h5>
              <div className="links mt-3">
                <Link className="ani" to={"/"}>
                  Student Work
                </Link>
                <Link className="ani" to={"/about"}>
                  {" "}
                  About Us{" "}
                </Link>
                <br />
                <Link className="ani" to={"#flavors"}>
                  Blogs
                </Link>
                <Link className="ani" to={"/contact"}>
                  {" "}
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 links mt-4 pt-lg-5 ps-lg-3">
              <h5
                className="ps-lg-2 ps-md-2 fw-bold"
                style={{ color: "#FA8352" }}
              >
                Courses
              </h5>
              <Link className="ani" to={"/graphic"}>
                Graphic Designing
              </Link>
              <Link className="ani" to={"/web-development"}>
                Web Development
              </Link>
              <Link className="ani" to={"/ethical-hacking"}>
                Ethical Hacking
              </Link>
              <Link className="ani" to={"/animation"}>
                2d/ 3d Animation
              </Link>
              <Link className="ani" to={"/design"}>
                UI/UX
              </Link>
            </div>
            <div className="col-lg-2 col-md-4 pt-lg-5 mt-4 ps-lg-5  links">
              <h5
                className=" ps-lg-2 ps-md-2 fw-bold"
                style={{ color: "#FA8352" }}
              >
                Internship
              </h5>
              <Link className="ani" to="/ethical-hacking">
                Ethical Hacking
              </Link>
              <Link className="ani" to="/autocad">
                Auto CAD
              </Link>
              <Link style={{ width: "140px" }} className="ani" to="/graphic">
                Graphic Designing
              </Link>
              <Link
                style={{ width: "140px" }}
                className="ani"
                to="/web-development"
              >
                Web Development
              </Link>
            </div>
            <div className="row mt-5" style={{ fontSize: "12px" }}>
              <div className="col-lg-5 ">
                <p className="text-lg-start text-center">
                  Copyright ©2023 All rights reserved by{" "}
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <span style={{ color: "#FA8352" }}>NetCoder</span>
                  </Link>
                </p>
              </div>
              <div className="col-lg-3 ">
                <p className="text-lg-start text-center">
                  Designed By{" "}
                  <Link
                    target="_blank"
                    to={"https://www.decodersolutions.in/"}
                    style={{ textDecoration: "none" }}
                  >
                    <span style={{ color: "#FA8352" }}>Decoder Solutions</span>
                  </Link>
                </p>
              </div>
              <div className="col-lg-4 text-lg-end  icons">
                Follow Us:{" "}
                <img
                  src={fb}
                  alt=""
                  height="25px"
                  width="25px"
                  className="m-1"
                />
                <img src={insta} alt="" height="25px" width="25px" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
