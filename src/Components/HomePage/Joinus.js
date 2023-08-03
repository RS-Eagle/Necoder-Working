import React from "react";
import e1 from "../../img/e1.png";
import first from "../../img/frst.png";
import second from "../../img/scnd.png";
import third from "../../img/thrd.png";
import fourth from "../../img/fourth.png";
import { useInView } from 'react-intersection-observer'
import "./Joinus.css"
const Joinus = () => {
  const { ref: imageref1, inView: imagevisible1 } = useInView();
  const { ref: imageref2, inView: imagevisible2 } = useInView();
   

  return (
    <div>
      <div className="container mt-5 pt-lg-5">
        <h2 className="pt-3 text-center fw-bold" style={{ color: "#FA8352" }}>
          Who Can Join Our Courses?
        </h2>

        <div ref={imageref1} className={imagevisible1 ? "row center image1 show-1": "row center image1"}>
           
          <div  className="col-lg-12 mt-5 text-lg-end ">
            <img
              src={e1}
              alt=""
              className="img-fluid image1"
              height="auto"
              width="4%"
            />
         
          </div>
          <div className="col-lg-6 mt-5  text-center">
            <img
              src={first}
              alt=""
              height="auto"
              width="60%"
              className="img-fluid "
            />
          </div>
          <div className="col-lg-6 mt-lg-5 pt-lg-4 text-center">
            <img
              src={second}
              alt=""
              height="auto"
              width="60%"
              className="img-fluid mt-lg-5 pt-lg-5"
            />
          </div>
        </div>

        <div ref={imageref2} className={imagevisible2 ? "row  image2 show-2": "row  image2"}>
          <div className="col-lg-6 mt-lg-5  text-center">
            <img
              src={third}
              alt=""
              height="auto"
              width="60%"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 mt-lg-5 pt-lg-4 text-center ">
            <img
              src={fourth}
              alt=""
              height="auto"
              width="60%"
              className="img-fluid mt-lg-5 pt-lg-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
