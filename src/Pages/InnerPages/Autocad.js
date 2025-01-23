import React, { useState } from "react";
import one from "../../img/l.png";
import flow_pana from "../../img/User flow-pana 2.png";
import flow_pana1 from "../../img/User flow-pana 3.png";
import r from "../../img/r.png";
import ps from "../../img/ps.png";
import Group451 from "../../img/Group 451.png";
import illus from "../../img/Illustrator.png";
import ae from "../../img/AE.png";
import id from "../../img/ID.png";
import Figma from "../../img/Figma.png";
import Book from "../../Components/HomePage/Book";

const Autocad = ({ setlogoNew, validateHandler, formValidator }) => {
  const [faq, setFaq] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (e) => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  setlogoNew(true);
  validateHandler("Home");
  return (
    <>
      <div className="pt-5 mt-5">
        <div id="aboutus">
          <div class="container  pb-lg-5">
            <div class="row">
              <div class="col-lg-4 order-lg-1 order-2 left align-self-end mb-3 ">
                <p style={{ marginBottom: "7px" }}>Format</p>
                <h5 style={{ color: "#FA8352", fontWeight: "bold" }}>
                  Offline
                </h5>
                <p style={{ marginBottom: "7px", marginTop: "20px" }}>
                  Duration
                </p>
                <h5 style={{ color: "#FA8352", fontWeight: "bold" }}>
                  6 Month
                </h5>
              </div>
              <div class="col-lg-8 order-lg-1 order-1 mt-5 pt-lg-4">
                <h1 class="fw-bold text-lg-end" style={{ color: "#FA8352" }}>
                  AutoCad
                </h1>
                <p class=" mt-4" style={{ textAlign: "justify" }}>
                  Graphic design is the creative planning and execution of
                  visual communication. ... The students will employ both analog
                  media (drawing with pencil and paper, etc.) and digital media
                  -- using up-to-date computer tools (graphics hardware and
                  software - for drawing, painting, layout, typography,
                  scanning, and photographyIn Graphics Design Program, students
                  will have the opportunity to learn the industory related
                  skills and techniques of computer graphics, electronic imaging
                  and production. In addition, our graphic design course utilize
                  scanners, cameras, computer based hardware and softwareand
                  provide all other essential skills you will need as a
                  professional. Students learn too blance words, icons, colors
                  and perspectives to create aesthetically pleasing and
                  eye-catching images or promotional publications
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- section1 end --> */}

        {/* <!-- section2 start --> */}
        <div class="container mt-4 pt-lg-5">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6  mb-3 d-flex">
              <img
                src={one}
                alt="circle"
                width="110px"
                class="d-lg-block d-md-block d-none"
              />
              <div class="top">
                <h2 class="cour mt-4 ms-lg-3 ms-md-3">Courses Outline</h2>
                <li class="mt-4">Introduction to Graphic Designing</li>
                <li>Elements of Graphic Designing</li>
                <li>Color theory</li>
                <li>Raster & Vector Graphics</li>
                <li>Portfolio Creation & Optimization.</li>
                <li>Image Layout and Effects</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Indesign </li>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 align-self-center">
              <img
                src={flow_pana}
                alt="Searching courses"
                height="auto"
                width="100%"
                class="d-lg-block d-md-block d-none"
              />
            </div>
          </div>
        </div>

        {/* <!-- 2nd --> */}
        <div class="container mt-4 pt-lg-5">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 order-lg-1 order-md-1 order-2 align-self-center">
              <img
                src={flow_pana1}
                alt="Searching courses"
                height="auto"
                width="100%"
                class=" pe-lg-5"
              />
            </div>
            <div class="col-lg-4 col-md-6 mt-lg-5  mb-3 d-flex order-lg-2 order-md-2 order-1">
              <div class="top">
                <h2
                  style={{ color: "#FA8352", fontWeight: "bold" }}
                  class="mt-md-5"
                >
                  Eligibility
                </h2>
                <p style={{ lineHeight: "30px" }}>
                  Students who have successfully passed 12th Standard (or
                  equivalent level of examination) from any recognized school
                  board in India.{" "}
                </p>
              </div>
              <img
                src={r}
                alt="circle"
                width="80px"
                height="250px"
                class="d-lg-block d-md-block d-none"
              />
            </div>
          </div>
        </div>

        {/* <!-- tools --> */}
        <div class="container mt-5 pt-lg-5">
          <h2 class="fw-bold text-center">Tools Include in this course</h2>
          <div class="row mt-4">
            <div class="col-12 text-center ">
              <img src={ps} alt=" Photoshop Tool" height="auto" width="8%" />
              <img
                src={Group451}
                alt=" Photoshop Tool"
                height="auto"
                width="12%"
                class="margin"
              />
              <img src={illus} alt=" Photoshop Tool" height="auto" width="8%" />
              <img
                src={Group451}
                alt=" Photoshop Tool"
                height="auto"
                width="12%"
                class="margin"
              />
              <img src={ae} alt=" Photoshop Tool" height="auto" width="8%" />
            </div>
            <div class="col-12 text-center ">
              <img src={id} alt=" Photoshop Tool" height="auto" width="8%" />
              <img
                src={Group451}
                alt=" Photoshop Tool"
                height="auto"
                width="12%"
                class="margin"
              />
              <img src={Figma} alt=" Photoshop Tool" height="auto" width="8%" />
            </div>
          </div>
        </div>

        {/* <!-- courses --> */}
        <div class="container mt-5 pt-lg-5">
          <h2 class="fw-bold text-center">Other Interesting Courses</h2>
          <div class="row mt-4"></div>
        </div>

        {/* <!-- frequently --> */}
        <div className="container mt-5">
          <h2 className="pt-4 text-center fw-bold" style={{ color: "#FA8352" }}>
            Frequently Asked <br /> Questions
          </h2>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(1);
            }}
            className="mt-5"
          >
            <li
              className={
                faq === 1 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="first">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>

                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="first" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(2);
            }}
          >
            <li
              className={
                faq === 2 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="second">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="second" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(3);
            }}
          >
            <li
              className={
                faq === 3 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="third">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="third" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(4);
            }}
          >
            <li
              className={
                faq === 4 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="fourth">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="fourth" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(5);
            }}
          >
            <li
              className={
                faq === 5 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="fifth">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="fifth" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
        </div>
        {/* <!-- book start --> */}
        <Book formValidator={formValidator} />
      </div>
    </>
  );
};

export default Autocad;
