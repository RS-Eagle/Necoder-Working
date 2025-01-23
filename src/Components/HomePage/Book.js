import React, { useState } from "react";
import bg from "../../img/bg.png";
import "./Book.css";
import { ReactComponent as Arrow } from "../../img/arrowcircleright2.svg";

const Book = ({ formValidator }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (e) => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="background ">
        <img src={bg} alt="Snow" className="img-fluid adjustment-img" />
        <div className="centered">
          <div className="container">
            <div className="row newflex ">
              <div className="col-lg-6 col-md-6 ">
                <h1 className="fw-bold adjustment-h1 ">
                  Book your demo class today
                </h1>
                <p className="adjustment-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  fames enim lacus, vestibulum. Ultrices vitae tellus fringilla
                  lectus id vel.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 text-lg-end text-md-end text-end mt-lg-3 mt-md-5 newbtnclass">
                <button
                  className=" m-2 read2  "
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={formValidator}
                >
                  {" "}
                  <Arrow
                    className={
                      isHovered ? "hoverableNew2 hoveredNew2" : "hoverableNew2"
                    }
                  />{" "}
                  <p
                    className={
                      isHovered
                        ? "hoverablepNew2 hoveredpNew2"
                        : "hoverablepNew2"
                    }
                  >
                    Book Now
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
