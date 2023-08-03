import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./Home.css";

import Courses from "../Components/HomePage/Courses";
import Map from "../Components/HomePage/Map";
import ArrowCircle from "../img/arrowcircleright2.png";
import PenTool from "../img/Pen tool-amico 1.png";
import Dev from "../img/dev.png";
import Digital from "../img/digital.png";
import Joinus from "../Components/HomePage/Joinus";
import OurStudent from "../Components/HomePage/OurStudent";
import Latest from "../Components/HomePage/latestBlog";

const Home = () => {
  return (
    <div>
      {/* Slider */}

      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active "
            aria-current="true"
            aria-label="Slide 1"
            style={{
              backgroundColor: "#59A6AE",
              height: "10px",
              width: "10px",
              marginTop: "20px",
            }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            style={{
              backgroundColor: "#59A6AE",
              height: "10px",
              width: "10px",
              marginTop: "20px",
            }}
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            style={{
              backgroundColor: "#59A6AE",
              height: "10px",
              width: "10px",
              marginTop: "20px",
            }}
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container mt-5 pt-lg-5">
              <div class="row">
                <div class="col-lg-6 ">
                  <h1 class="fw-bold  create">
                    Create, Innovate, and Inspire with{" "}
                    <span style={{ color: "#FB8454" }}>Graphic Designing</span>{" "}
                  </h1>
                  <p class="mt-4">
                    Graphic design is the process of visual communication and
                    problem-solving through the use of typography, photography,
                    iconography and illustration.
                  </p>
                  <button class="class text-start mt-1">
                    {" "}
                    <img
                      src={ArrowCircle}
                      alt=""
                      height="auto"
                      width="12%"
                    />{" "}
                    Book Demo Class
                  </button>
                </div>
                <div class="col-lg-6 text-lg-end pb-5 text-center">
                  <img src={PenTool} alt="" height="auto" width="80%" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container mt-5 pt-lg-5">
              <div class="row">
                <div class="col-lg-6 ">
                  <h1 class="fw-bold create">
                    Code, Create, and Conquer with{" "}
                    <span style={{ color: "#FB8454" }}>Web Development </span>{" "}
                  </h1>
                  <p class="mt-4">
                    Web development is the work involved in developing a web
                    site for the Internet (World Wide Web) or an intranet (a
                    private network).
                  </p>
                  <button class="class text-start">
                    {" "}
                    <img
                      src={ArrowCircle}
                      alt=""
                      height="auto"
                      width="12%"
                    />{" "}
                    Book Demo Class
                  </button>
                </div>
                <div class="col-lg-6 text-lg-end pb-5 text-center">
                  <img src={Dev} alt="" height="auto" width="80%" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container mt-5 pt-lg-5">
              <div class="row">
                <div class="col-lg-6 ">
                  <h1 class="fw-bold create">
                    Thrive in the Online World with{" "}
                    <span style={{ color: "#FB8454" }}>Digital Marketing</span>{" "}
                  </h1>
                  <p class="mt-4">
                    Digital marketing is simply online marketing and it’s the
                    process of evaluating the market and promoting brands or
                    services through the internet.
                  </p>
                  <button class="class text-start">
                    {" "}
                    <img
                      src={ArrowCircle}
                      alt=""
                      height="auto"
                      width="12%"
                    />{" "}
                    Book Demo Class
                  </button>
                </div>
                <div class="col-lg-6 text-lg-end pb-5 text-center">
                  <img src={Digital} alt="" height="auto" width="80%" />
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Slider End */}

      {/* Box */}
      <div class="container mt-5">
        <div
          class="row align-self-center p-4 rounded-4 border-lg bor"
          style={{ backgroundColor: "#FA8352" }}
        >
          <div class="col-lg-3 col-md-6 text-center mt-lg-3 endline">
            <h5 class="fw-bold">200+</h5>
            <p>Student trained</p>
          </div>
          <div class="col-lg-3 col-md-6 text-center mt-lg-3 line">
            <h5 class="fw-bold">Free Internship</h5>
            <p>Available</p>
          </div>
          <div class="col-lg-3 col-md-6 text-center mt-lg-3 endline">
            <h5 class="fw-bold">EMI Installation</h5>
            <p>Available</p>
          </div>
          <div class="col-lg-3 col-md-6 mt-lg-3 text-center ">
            <h5 class="fw-bold">Customized</h5>
            <p>courses</p>
          </div>
        </div>
      </div>
      {/* Box-End */}

      {/* Map */}
      <Map />
      {/* Courses */}
      <Courses />
      {/* Join Us  */}
      <Joinus />

      {/* Join End  */}

      {/* Our Student */}

      <OurStudent />
      {/* <!-- students sectn end --> */}

      {/* <!-- latext blog --> */}
      <Latest />
      {/* <!-- blogs end --> */}
    </div>
  );
};

export default Home;
