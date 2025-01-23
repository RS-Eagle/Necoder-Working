import React from "react";
import { useInView } from "react-intersection-observer";
import star from "../../img/star.png";
import "./OurStudent.css";

const OurStudent = () => {
  const { ref: ourStudentsref, inView: ourvisible } = useInView();
  return (
    <div ref={ourStudentsref} className={!ourvisible ? "our" : "our show"}>
      <div className="container mt-5 pt-lg-5 py-lg-5 ">
        <div className="row  p-lg-5 p-md-4 outline">
          <h2 className="pt-3 text-center fw-bold" style={{ color: "#FA8352" }}>
            What Our Students <br />
            Have To Say
          </h2>
          <div className="col-lg-12 text-center pt-lg-3">
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
            <p className="  text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              fames enim lacus, vestibulum. Ultrices vitae tellus fringilla
              lectus id vel. Consequat in convallis commodo aenean pellentesque
              et vitae. Amet, mauris pulvinar est nibh iaculis dui quis nulla.
            </p>
          </div>
          <div className="col-lg-12 text-center mt-3 ">
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
  );
};

export default OurStudent;
