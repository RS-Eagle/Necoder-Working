import React, { useState } from "react";
import "./Button2.css";
import { ReactComponent as Arrow } from "../img/arrowcircleright2.svg";

const Button2 = ({ formValidator }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (e) => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <div>
        <button
          className=" m-2 read1  "
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          onClick={formValidator} 
        >
          {" "}
          <Arrow
            className={isHovered ? "hoverableNew hoveredNew" : "hoverableNew"}
          />{" "}
          <p
            className={
              isHovered ? "hoverablepNew hoveredpNew" : "hoverablepNew"
            }
          >
            Book A Demo Class
          </p>
        </button>
      </div>
    </div>
  );
};

export default Button2;
