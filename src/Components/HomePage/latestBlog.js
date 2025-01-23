import React, { useRef, useEffect } from "react";
import rec1 from "../../img/Rectangle 121.png";
import rec2 from "../../img/Rectangle 122.png";
import rec3 from "../../img/Rectangle 123.png";
import arrow from "../../img/arrowcircleright2.png";
import "./latestBlog.css";
import { gsap } from "gsap";

import { Tilt } from "react-tilt";

const LatestBlog = () => {
  const latest1 = useRef(null);
  const latest2 = useRef(null);
  const latest3 = useRef(null);
  const mainlatest = useRef(null);
  const widthref = useRef(window.innerWidth);
  useEffect(() => {
    gsap.to([latest1.current, latest2.current, latest3.current], {
      opacity: 1,
      y: -10,
      duration: 1,
      stagger: 0.3,
      delay: 0.3,
      ease: "Power4.easeOut",
      scrollTrigger: {
        trigger: mainlatest.current,
      },
    });

    console.log(widthref.current);
  });

  const defaultOptions = {
    max: 15,
    glare: true,
    glarePrerender: true,
    maxGlare: 1,
    scale: 1.05,
    speed: 10,
    transition: true,
    axis: null,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  // const tiltRef = useRef(null);
  // useEffect(() => {
  //   VanillaTilt.init(tiltRef.current, {
  //     max: 25,
  //     speed: 400,
  //     glare: true,
  //     "max-glare": 0.5,
  //   });
  // });
  return (
    <div>
      <div
        className="container-fluid mt-5 pt-lg-5 p-3 latestblog"
        style={{ backgroundColor: "#F9F4F1" }}
      >
        <h2 className="pt-3 text-center fw-bold" style={{ color: "#FA8352" }}>
          Our Latest Blogs
        </h2>
        <div ref={mainlatest} className="container mt-5 pt-lg-1">
          <div className="blog-sec">
            <div ref={latest1} className="res-latest">
              <Tilt
                glareEnable={true}
                options={defaultOptions}
                style={{ height: "100%", width: "100%" }}
              >
                <div className="card-blog new-style2">
                  <img src={rec1} className="card-img-top" alt="..." />
                  <h5 className="fw-bold mt-3" style={{ color: "#FA8352" }}>
                    Graphic Designing{" "}
                    <span className="float-end text-center new-style1">
                      13 July 2023
                    </span>
                  </h5>
                  <p className="card-text pe-lg-3">
                    We offer training in all parts of web development including
                    web design, interface design, web hosting, and web
                    maintenance.
                  </p>
                </div>
              </Tilt>
            </div>
            <div ref={latest2} className="res-latest">
              <Tilt
                options={defaultOptions}
                style={{ height: "100%", width: "100%" }}
              >
                <div className="card-blog new-style2 ">
                  <img src={rec2} className="card-img-top" alt="..." />
                  <h5 className="fw-bold mt-3" style={{ color: "#FA8352" }}>
                    Web Development{" "}
                    <span className="float-end text-center new-style3 ">
                      13 July 2023
                    </span>
                  </h5>
                  <p className="card-text pe-lg-5">
                    Web development is the work involved in developing a website
                    for the Internet. Web development usually refers to ....
                  </p>
                </div>
              </Tilt>
            </div>
            <div ref={latest3} className="res-latest">
              <Tilt
                options={defaultOptions}
                style={{ height: "100%", width: "100%" }}
              >
                <div className="card-blog new-style2">
                  <img src={rec3} className="card-img-top" alt="..." />
                  <h5 className="fw-bold mt-3" style={{ color: "#FA8352" }}>
                    Digital Marketing{" "}
                    <span className="float-end text-center new-style3">
                      13 July 2023
                    </span>
                  </h5>
                  <p className="card-text pe-lg-5">
                    Digital marketing is simply online marketing and it’s the
                    process of evaluating the market and promoting brands or
                    services through the internet.
                  </p>
                </div>
              </Tilt>
            </div>
          </div>
          <div className="col-lg-12 text-lg-end text-center mt-lg-4 home">
            <button className="latest-button  m-2 read">
              {" "}
              <img src={arrow} alt="" height="auto" width="12%" />
              Read More Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
