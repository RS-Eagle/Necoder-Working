import React, { useRef, useEffect } from "react";
import "./Courses.css";
// import useIsInViewport from '../Effects/veiwPort';
// import { useInView } from "react-intersection-observer";
import oo from "../../img/oo.png";
import blue from "../../img/blue.png";
import black from "../../img/blck.png";
import { gsap } from "gsap";

const Courses = () => {
  // const { ref: elementRef, inView: elementvisible } = useInView();
  const scroll1 = useRef(null);
  const scroll2 = useRef(null);
  const scroll3 = useRef(null);
  const scroll4 = useRef(null);
  const scroll5 = useRef(null);
  const scroll6 = useRef(null);
  const scrollContainer = useRef(null);

  useEffect(() => {
    const elements = [
      scroll1.current,
      scroll2.current,
      scroll3.current,
      scroll4.current,
      scroll5.current,
      scroll6.current,
    ];
    gsap.to(elements, {
      x: 0,
      duration: 0.3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: scrollContainer.current,
        scroller: scrollContainer.current,
        scrub: true,
        start: "top 50%",
        end: "460% bottom",
      },
    });
  });

  return (
    <div id="scrollContainer">
      <div
        className="container-fluid mt-5 pt-lg-5 text-center fullwidth"
        style={{ backgroundColor: "#FA8352" }}
      >
        <h2 className="pt-3 " style={{ color: "white" }}>
          Popular Courses we offer
        </h2>
        <p className="fw-light pt-2" style={{ color: "white" }}>
          There is a moment in the life of any aspiring
        </p>
      </div>
      <div ref={scrollContainer} className="container courses">
        <div className="row justify-content-center hide">
          <div ref={scroll1} className="col-lg-8 new-op my-5  ">
            <h2 className="fw-bold pe-lg-5">
              <img src={oo} alt="" className="mt-lg-5 pt-3 " />
              <span className="graphic"> Graphic Designing</span>
            </h2>
            <p className="graph ps-lg-5">
              Web design is the process of creating websites. It encompasses
              several different aspects, including webpage layout, content
              production, and graphic design. While the terms web design and web
              development are often used interchangeably, web design is
              technically a subset of the broader category of web development.
            </p>
          </div>
          <div
            ref={scroll2}
            className="col-lg-8 new-op  my-5 text-lg-end text-md-end"
          >
            <h2 className="fw-bold">
              {" "}
              <span className="web">Web Development</span>{" "}
              <img
                src={blue}
                alt=""
                className="mt-lg-5 pt-3"
                style={{ zIindex: "-1" }}
              />
            </h2>
            <p className="graph2">
              Web development is the work involved in developing a web site for
              the Internet or an intranet (a private network). Web development
              can range from developing a simple single static page of plain
              text to complex web-based internet applications (web apps),
              electronic businesses, and social network services.
            </p>
          </div>
          <div ref={scroll3} className="col-lg-8 new-op my-5">
            <h2 className="fw-bold pe-lg-5">
              <img src={black} alt="" className="mt-lg-5 pt-3" />
              <span className="graphic"> Digital Marketing</span>
            </h2>
            <p className="graph ps-lg-5">
              Digital marketing is simply online marketing and it’s the process
              of evaluating the market and promoting brands or services through
              the internet. It’s a very broad area of specialization and
              includes electronic customer relationship, email marketing, Search
              engine optimization and through social media.
            </p>
          </div>
          <div
            ref={scroll4}
            className="col-lg-8 new-op  my-5 text-lg-end text-md-end"
          >
            <h2 className="fw-bold">
              {" "}
              <span className="web">Ethical Hacking</span>{" "}
              <img
                src={oo}
                alt=""
                className="mt-lg-5 pt-3"
                style={{ zIindex: "-1" }}
              />
            </h2>
            <p className="graph2">
              Ethical hacking is the process of locating vulnerabilities and
              weaknesses in a computer, network and information systems through
              the duplication of the intent and actions of hackers. The purpose
              of ethical hacking is to evaluate the security of and identify
              vulnerabilities in systems, networks or system infrastructure. It
              includes finding and attempting to exploit any vulnerabilities to
              determine whether unauthorized access or other malicious
              activities are possible.
            </p>
          </div>
          <div ref={scroll5} className="col-lg-8 new-op my-5">
            <h2 className="fw-bold pe-lg-5">
              <img src={blue} alt="" className="mt-lg-5 pt-3" />
              <span className="graphic"> 2D/ 3D Animation</span>
            </h2>
            <p className="graph ps-lg-5">
              Animation is a method in which pictures are manipulated to appear
              as moving images. ... Computer animation can be very detailed 3D
              animation, while 2D computer animation can be used for stylistic
              reasons, low bandwidth or faster real-time renderings.
            </p>
          </div>
          <div
            ref={scroll6}
            className="col-lg-8 new-op my-5 text-lg-end text-md-end"
          >
            <h2 className="fw-bold">
              {" "}
              <span className="web">Video Editing</span>{" "}
              <img
                src={black}
                alt=""
                className="mt-lg-5 pt-3"
                style={{ zIindex: "-1" }}
              />
            </h2>
            <p className="graph2">
              Video editing is the key to blending images and sounds
              <br /> to make us feel emotionally connected and sometimes truly
              there
              <br /> in the film we're watching. It's a safe assumption to say
              that video <br />
              editing is among the most important jobs in the film industry.
            </p>
          </div>
          <div className="height"></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
