import React from "react";
import group472 from "../img/Group 472.png";
import tech from "../img/tech company-amico 1.png";
import nextStep from "../img/Next steps-pana 1.png";
import slider from "../img/slider.png";
import frame from "../img/Frame 3.png";
import group473 from "../img/Group 473.png";
import group474 from "../img/Group 474.png";
import star from "../img/star.png";
import "./About.css";

const About = ({ setlogoNew, validateHandler }) => {
  validateHandler("About");
  setlogoNew(true);

  return (
    <>
      {/* <!-- heading --> */}
      <div className="container mt-5 pt-5">
        <div className="row text-center">
          <div className=" col-12 mt-5">
            <img src={group472} alt="" height="auto" width="50%" />
            <p className="center">A Center of Excellence</p>
          </div>
        </div>
      </div>
      {/* <!-- heading end  --> */}

      {/* <!-- section1 start --> */}
      <div id="aboutus">
        <div className="container  pb-lg-5">
          <div className="row">
            <div className="col-lg-6 text-lg-start text-center ">
              <img src={tech} alt="" height="auto" width="80%" />
            </div>
            <div className="col-lg-6 mt-lg-5 pt-lg-4">
              <p className="intro mt-lg-5">
                <span style={{ color: "#FA8352" }}>Netcoder technology </span>{" "}
                is an ISO (International Standard Organization) Certified Co.
                Netcoder technology was founded by Nitin Kapoor in 2016.
                Netcoder technology is an educational institute that was
                established to address the influx of high quality IT experts.
                Over the past years, we have managed to provide the missing link
                that many graduates failed to ascertain.{" "}
              </p>
              <p>
                In this digital age, we have emerged as one of the pioneers who
                deliver cutting edge education. Our courses are curated to
                channel each grandaunt to become practically prepared for the
                current job market. We thank our partners for giving us a
                conducive environment to exercise our duties diligently.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- section1 end --> */}

      {/* <!-- our strength start --> */}
      <div className="container mt-4">
        <h2 className="pt-3 text-center fw-bold" style={{ color: "#FA8352" }}>
          Our strength is derived from
        </h2>
        <p style={{ color: "#59A6AE", textAlign: "center" }}>
          Who are in extremely love with eco friendly system.
        </p>
        <div className="row mt-2">
          <div className="col-lg-6 mt-lg-3">
            {/* <!-- first--> */}
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{ backgroundColor: "#FA8352", color: "white" }}
                    >
                      Success
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Netcoder technology institute is ISO and AITA
                        affiliated. We are proud to inform you that apart from
                        offering stellar education our institute belongs to ISO
                        family too. Our state of the art systems, quality and
                        experienced staff has enabled us to gain recognition. We
                        have qualified since we meet international standards for
                        a quality management system. Such recognition has
                        enabled us to perform our duties diligently.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!-- second --> */}
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                    style={{ backgroundColor: "#F9F4F1" }}
                  >
                    info
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the second item's accordion body. Let's imagine this being
                    filled with some actual content.
                  </div>
                </div>
              </div>

              {/* <!-- third --> */}
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                    style={{ backgroundColor: "#F9F4F1" }}
                  >
                    We beleive
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>

              {/* <!-- fourth --> */}
              <div className="accordion-item mt-3">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapsefour"
                    aria-expanded="false"
                    aria-controls="flush-collapsefour"
                    style={{ backgroundColor: "#F9F4F1" }}
                  >
                    We offer
                  </button>
                </h2>
                <div
                  id="flush-collapsefour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingfour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    Placeholder content for this accordion, which is intended to
                    demonstrate the <code>.accordion-flush</code> class. This is
                    the third item's accordion body. Nothing more exciting
                    happening here in terms of content, but just filling up the
                    space to make it look, at least at first glance, a bit more
                    representative of how this would look in a real-world
                    application.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end text-center mt-3">
            <img src={nextStep} alt="" height="auto" width="70%" />
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <!-- strength end --> */}

      {/* <!-- latext blog --> */}
      <div className="container mt-5 pt-lg-5">
        <h2 className="pt-3  fw-bold" style={{ color: "#FA8352" }}>
          OUR EXPERTS <span>_____________</span>
        </h2>
        <p style={{ color: "#59A6AE" }}>
          A Team of Seasoned Professionals Ready to Guide You Towards Success
        </p>
        <div className="row  mt-lg-5 mt-md-5 ">
          <div className="col-lg-4 col-md-6 p-2">
            <div className="slide1 float-lg-start">
              <img src={slider} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  <b>Nitin Kapoor</b>
                  <p>Founder of Netcoder Technology</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  p-2 ">
            <div className=" slide1">
              <img src={slider} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  <b>Nitin Kapoor</b>
                  <p>Founder of Netcoder Technology</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  p-2 offset-lg-0 offset-md-3">
            <div className="slide1 float-lg-end">
              <img src={slider} alt="Avatar" className="image" />
              <div className="overlay">
                <div className="text">
                  <b>Nitin Kapoor</b>
                  <p>Founder of Netcoder Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- blogs end --> */}

      {/* <!-- netcoder technology --> */}
      <div className="background mt-5 pt-lg-5">
        <img
          src={frame}
          alt="Snow"
          style={{ width: "100%", height: 470 }}
          className="img-fluid d-lg-block  d-none"
        />
        <div className="centerd">
          <div className="container-fluid tech ">
            <div className="container pb-4">
              <div className="row ">
                <div className="col-lg-6 text-lg-start  ">
                  <img src={group473} alt="" height="auto" width="35%" />
                  <img
                    src={group474}
                    alt=""
                    height="auto"
                    width="35%"
                    className="pt-lg-5 mt-lg-5 pt-md-5"
                  />
                </div>
                <div className="col-lg-6   text-lg-start text-md-start float-md-end">
                  <h2 className=" fw-bold mt-4 pt-lg-5 black ">
                    Why Join <br />
                    Netcoder Technology!
                  </h2>
                  <p className="pt-lg-3 reason">
                    The reason why Netcoder technology doesn’t produce
                    half-baked grandaunts is that we have a strong mission. We
                    are the leading learning institute to produce grandaunts who
                    are practically fit for the job market. Our programs are
                    curated to enable each student to maximize practical talent.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- netcoder technology end --> */}

        {/* <!-- our students --> */}
        <div className="container mt-5 pt-lg-5 py-lg-3">
          <div className="row  p-lg-5 p-md-4 outline">
            <h2
              className="pt-3 text-center fw-bold"
              style={{ color: "#FA8352" }}
            >
              What Our Students <br />
              Have To Say
            </h2>
            <div className="col-lg-12 text-center mt-3 pt-lg-5">
              <img
                src={star}
                alt=""
                className="img-fluid"
                height="auto"
                width="150px"
              />
            </div>

            <div className="col-lg-8 text-lg-start offset-lg-2">
              <h6
                className=" mt-5 pe-lg-5 text-center text-lg-start"
                style={{ color: "#59A6AE" }}
              >
                Samar Kapoor
              </h6>
              <p className="  text-center" style={{ color: "black" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                fames enim lacus, vestibulum. Ultrices vitae tellus fringilla
                lectus id vel. Consequat in convallis commodo aenean
                pellentesque et vitae. Amet, mauris pulvinar est nibh iaculis
                dui quis nulla.
              </p>
            </div>
            <div className="col-lg-12 text-center mt-3 pb-3">
              <div className="dots">
                <div className="div1"></div>
                <div className="div1"></div>
                <div className="div1"></div>
                <div className="div1"></div>
                <div className="div1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- students sectn end --> */}
    </>
  );
};

export default About;
