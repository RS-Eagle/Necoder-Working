import React, { useState } from "react";
import "./Courses.css";
// import useIsInViewport from '../Effects/veiwPort';
import { useInView } from "react-intersection-observer";
import oo from "../../img/oo.png";
import blue from "../../img/blue.png";
import black from "../../img/blck.png";

const Courses = () => {
  const { ref: elementRef, inView: elementvisible } = useInView();
  const { ref: elementRef1, inView: elementvisible1 } = useInView();
  const { ref: elementRef2, inView: elementvisible2 } = useInView();
  const { ref: elementRef3, inView: elementvisible3 } = useInView();
  const { ref: elementRef4, inView: elementvisible4 } = useInView();
  const { ref: elementRef5, inView: elementvisible5 } = useInView();

  return (
    <div ref={elementRef} id="scrollContainer">
      <div
        class="container-fluid mt-5 pt-lg-5 text-center fullwidth"
        style={{ backgroundColor: "#FA8352" }}
      >
        <h2 class="pt-3 " style={{ color: "white" }}>
          Popular Courses we offer
        </h2>
        <p class="fw-light pt-2" style={{ color: "white" }}>
          There is a moment in the life of any aspiring
        </p>
      </div>
      <div class="container courses">
        <div class="row justify-content-center hide">
          <div class="col-lg-8 my-5 ">
            <h2 class="fw-bold pe-lg-5">
              <img src={oo} alt="" class="mt-lg-5 pt-3 " />
              <span class="graphic"> Graphic Designing</span>
            </h2>
            <p class="graph ps-lg-5">
              Web design is the process of creating websites. It encompasses
              several different aspects, including webpage layout, content
              production, and graphic design. While the terms web design and web
              development are often used interchangeably, web design is
              technically a subset of the broader category of web development.
            </p>
          </div>
          <div class="col-lg-8  my-5 text-lg-end text-md-end">
            <h2 class="fw-bold">
              {" "}
              <span class="web">Web Development</span>{" "}
              <img
                src={blue}
                alt=""
                class="mt-lg-5 pt-3"
                style={{ zIindex: "-1" }}
              />
            </h2>
            <p class="graph2">
              Web development is the work involved in developing a web site for
              the Internet or an intranet (a private network). Web development
              can range from developing a simple single static page of plain
              text to complex web-based internet applications (web apps),
              electronic businesses, and social network services.
            </p>
          </div>
          <div class="col-lg-8 my-5">
            <h2 class="fw-bold pe-lg-5">
              <img src={black} alt="" class="mt-lg-5 pt-3" />
              <span class="graphic"> Digital Marketing</span>
            </h2>
            <p class="graph ps-lg-5">
              Digital marketing is simply online marketing and it’s the process
              of evaluating the market and promoting brands or services through
              the internet. It’s a very broad area of specialization and
              includes electronic customer relationship, email marketing, Search
              engine optimization and through social media.
            </p>
          </div>
          <div class="col-lg-8  my-5 text-lg-end text-md-end">
            <h2 class="fw-bold">
              {" "}
              <span class="web">Ethical Hacking</span>{" "}
              <img
                src={oo}
                alt=""
                class="mt-lg-5 pt-3"
                style={{ zIindex: "-1" }}
              />
            </h2>
            <p class="graph2">
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
          <div class="col-lg-8 my-5">
            <h2 class="fw-bold pe-lg-5">
              <img src={blue} alt="" class="mt-lg-5 pt-3" />
              <span class="graphic"> 2D/ 3D Animation</span>
            </h2>
            <p class="graph ps-lg-5">
              Animation is a method in which pictures are manipulated to appear
              as moving images. ... Computer animation can be very detailed 3D
              animation, while 2D computer animation can be used for stylistic
              reasons, low bandwidth or faster real-time renderings.
            </p>
          </div>
          <div class="col-lg-8 my-5 text-lg-end text-md-end">
            <h2 class="fw-bold">
              {" "}
              <span class="web">Video Editing</span>{" "}
              <img
                src={black}
                alt=""
                class="mt-lg-5 pt-3"
                style={{ zIindex: "-1" }}
              />
            </h2>
            <p class="graph2">
              Video editing is the key to blending images and sounds to make us
              feel emotionally connected and sometimes truly there in the film
              we're watching. It's a safe assumption to say that video editing
              is among the most important jobs in the film industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
