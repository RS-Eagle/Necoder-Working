import React from "react";
import "./Courses.css";
import eliipsImage from "../img/Ellipse 25.png";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import graphicDesign from "../img/User flow-pana 4.png";
import webDesign from "../img/User flow-pana 5.png";
import webDev from "../img/User flow-pana 6.png";
import digitalMarket from "../img/User flow-pana 7.png";
import ethicalHacking from "../img/User flow-pana 8.png";
import animation from "../img/User flow-pana 9.png";
import videoEditing from "../img/User flow-pana 10.png";
import uidesign from "../img/User flow-pana 11.png";
import autoCad from "../img/User flow-pana 12.png";
import Button from "../Components/Button";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Courses = ({ setlogoNew, validateHandler }) => {
  validateHandler("Courses");
  setlogoNew(false);

  const color1 = useRef(null);
  const color2 = useRef(null);
  const color3 = useRef(null);
  const color4 = useRef(null);
  const color5 = useRef(null);
  const color6 = useRef(null);
  const color7 = useRef(null);
  const color8 = useRef(null);
  const color9 = useRef(null);
  const color10 = useRef(null);
  const color11 = useRef(null);
  const color12 = useRef(null);
  const color13 = useRef(null);
  const color14 = useRef(null);
  const color15 = useRef(null);
  const color16 = useRef(null);
  const color17 = useRef(null);
  const color18 = useRef(null);
  const container = useRef(null);

  const { ref: text1, inView: courseText1 } = useInView();
  const { ref: text2, inView: courseText2 } = useInView();
  const { ref: text3, inView: courseText3 } = useInView();
  const { ref: text4, inView: courseText4 } = useInView();
  const { ref: text5, inView: courseText5 } = useInView();
  const { ref: text6, inView: courseText6 } = useInView();
  const { ref: text7, inView: courseText7 } = useInView();
  const { ref: text8, inView: courseText8 } = useInView();
  const { ref: text9, inView: courseText9 } = useInView();

  useEffect(() => {
    const elements = [
      color1.current,
      color2.current,
      color3.current,
      color4.current,
      color5.current,
      color6.current,
      color7.current,
      color8.current,
      color9.current,
      color10.current,
      color11.current,
      color12.current,
      color13.current,
      color14.current,
      color15.current,
      color16.current,
      color17.current,
      color18.current,
    ];
    gsap.to(elements, {
      yPercent: 110,
      duration: 2,
      stagger: 2,
      scrollTrigger: {
        trigger: container.current,
        start: "top 50%",
        end: "bottom bottom",
        scrub: 3,
        toggleActions: "restart pause reverse pause",
      },
    });
  }, []);

  return (
    <div>
      <div className="box">
        <div className="courses-circle1"></div>
        <div className="courses-circle2"></div>
        <div className="courses-circle3"></div>
        <div className="courses-circle4"></div>
        <h1>popular Courses</h1>
        <img alt="load" src={eliipsImage} className="ellipseImage" />
      </div>
      <div ref={container} className="container margin-container">
        <div className="row changeMargin">
          <div className="col-lg-4 responsive ">
            <h2
              ref={text1}
              className={courseText1 ? "default orange1" : "default"}
            >
              Graphic Designing
            </h2>
            <p className="neweff">
              Graphic design is the creative planning and execution of visual
              communication. ... The students will employ both analog media
              drawing with pencil and paper, etc. and digital media -- using
              up-to-date computer tools graphics hardware and software - for
              drawing, painting, layout, typography, scanning, and photography
            </p>
            <Link to={"/graphic"}>
              <Button />
            </Link>
          </div>
          <div className="col-lg-8 text-end">
            <img
              alt="load"
              src={graphicDesign}
              width={"45%"}
              style={{ marginTop: "-50px" }}
            />
          </div>
        </div>
        <div className="row changeMargin">
          <div className="col-lg-8">
            {" "}
            <img
              alt="load"
              src={webDesign}
              width={"45%"}
              style={{ marginTop: "-40px" }}
            />
          </div>
          <div className="col-lg-4 responsive">
            <h2
              ref={text2}
              className={courseText2 ? "default orange1" : "default"}
            >
              Website Designing
            </h2>
            <p className="neweff">
              Web design is the process of creating websites. It encompasses
              several different aspects, including webpage layout, content
              production, and graphic design. While the terms web design and web
              development are often used interchangeably, web design is
              technically a subset of the broader category of web development.
            </p>
            <Link to={"/website-designing"}>
              <Button />
            </Link>
          </div>
        </div>
        <div className="row mt-4 changeMargin">
          <div className="col-lg-4 responsive">
            <h2
              ref={text3}
              className={courseText3 ? "default blue1" : "default"}
            >
              Web Development
            </h2>
            <p className="neweff">
              Web development is the work involved in developing a web site for
              the Internet (World Wide Web) or an intranet (a private
              network).[1] Web development can range from developing a simple
              single static page of plain text to complex web-based internet
              applications (web apps), electronic businesses, and social network
              services.
            </p>
            <Link to={"/web-development"}>
              <Button />
            </Link>
          </div>
          <div className="col-lg-8 text-end">
            <img
              alt="load"
              src={webDev}
              width={"45%"}
              style={{ marginTop: "-60px" }}
            />
          </div>
        </div>

        <div className="row changeMargin">
          <div className="col-lg-8">
            <img
              alt="load"
              src={digitalMarket}
              width={"45%"}
              style={{ marginTop: "-50px" }}
            />
          </div>
          <div className="col-lg-4 responsive">
            <h2
              ref={text4}
              className={courseText4 ? "default blue1" : "default"}
            >
              Digital Marketing
            </h2>
            <p className="neweff">
              Digital marketing is simply online marketing and it’s the process
              of evaluating the market and promoting brands or services through
              the internet. It’s a very broad area of specialization and
              includes electronic customer relationship, email marketing, Search
              engine optimization and through social media.
            </p>
            <Link to={"/digital-marketing"}>
              <Button />
            </Link>
          </div>
        </div>
        <div className="row changeMargin">
          <div className="col-lg-4 responsive ">
            <h2
              ref={text5}
              className={courseText5 ? "default orange1" : "default"}
            >
              Ethical Hacking
            </h2>
            <p className="neweff">
              The purpose of ethical hacking is to evaluate the security of and
              identify vulnerabilities in systems, networks or system
              infrastructure. It includes finding and attempting to exploit any
              vulnerabilities to determine whether unauthorized access or other
              malicious activities are possible.
            </p>
            <Link to={"/ethical-hacking"}>
              <Button />
            </Link>
          </div>
          <div className="col-lg-8 text-end">
            <img
              alt="load"
              className=""
              src={ethicalHacking}
              width={"30%"}
              style={{ marginTop: "0px", marginRight: "80px" }}
            />
          </div>
        </div>
        <div className="row mt-4 changeMargin">
          <div className="col-lg-8">
            <img
              alt="load"
              src={animation}
              width={"45%"}
              style={{ marginTop: "-50px" }}
            />
          </div>
          <div className="col-lg-4 ">
            <h2
              ref={text6}
              className={courseText6 ? "default orange1" : "default"}
            >
              2D/3D Animation
            </h2>
            <p className="neweff">
              Animation is a method in which pictures are manipulated to appear
              as moving images. ... Computer animation can be very detailed 3D
              animation, while 2D computer animation can be used for stylistic
              reasons, low bandwidth or faster real-time renderings.
            </p>
            <Link to={"/animation"}>
              <Button />
            </Link>
          </div>
        </div>
        <div className="row mt-5 changeMargin">
          <div className="col-lg-4 responsive">
            <h2
              ref={text7}
              className={courseText7 ? "default blue1" : "default"}
            >
              Video Editing
            </h2>
            <p className="neweff">
              Video editing is the key to blending images and sounds to make us
              feel emotionally connected and sometimes truly there in the film
              we're watching. It's a safe assumption to say that video editing
              is among the most important jobs in the film industry
            </p>
            <Link to={"/video-editing"}>
              <Button />
            </Link>
          </div>
          <div className="col-lg-8 text-end">
            <img
              alt="load"
              src={videoEditing}
              width={"45%"}
              style={{ marginTop: "-50px" }}
            />
          </div>
        </div>
        <div className="row mt-4 changeMargin">
          <div className="col-lg-8">
            <img
              alt="load"
              src={uidesign}
              width={"35%"}
              style={{ marginTop: "-50px", marginLeft: "20px" }}
            />
          </div>
          <div className="col-lg-4 responsive">
            <h2
              ref={text8}
              className={courseText8 ? "default blue1" : "default"}
            >
              UI & UX Design
            </h2>
            <p className="neweff">
              UI and UX Design are two essential components in the creation of
              digital products and services, focusing on optimizing user
              experiences and interactions.
            </p>
            <Link to={"/design"}>
              <Button />
            </Link>
          </div>
          <div className="row mt-5 changeMargin">
            <div className="col-lg-4 responsive">
              <h2
                ref={text9}
                className={courseText9 ? "default orange1" : "default"}
              >
                AutoCAD
              </h2>
              <p className="neweff">
                AutoCAD is a 2-D and 3-D computer-aided drafting software
                application used in architecture, construction, and
                manufacturing to assist in the preparation of blueprints and
                other engineering plans. Professionals who use AutoCAD are often
                referred to as drafters.
              </p>
              <Link to={"/autocad"}>
                <Button />
              </Link>
            </div>
            <div className="col-lg-8 text-end">
              <img
                alt="load"
                src={autoCad}
                width={"45%"}
                style={{ marginTop: "-60px" }}
              />
            </div>
          </div>
        </div>

        <div className="drop-effect">
          <div className="effect-layer"></div>
          <div className="shapes">
            <div className="main-shape">
              <div className="circle">
                <div ref={color1} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color2} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color3} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color4} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color5} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color6} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color7} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color8} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color9} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color10} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color11} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color12} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color13} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color14} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color15} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color16} className="new-color"></div>
              </div>
            </div>
            <div className="main-shape">
              <div className="circle">
                <div ref={color17} className="new-color"></div>
              </div>
              <div className="line-shape">
                <div className="original-color"></div>
                <div ref={color18} className="new-color"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
