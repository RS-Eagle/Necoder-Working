import React, { useState } from "react";
import "./Button.css";
import { ReactComponent as Arrow } from "../img/arrowcircleright2.svg";
const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (e) => {
    setIsHovered(true);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  return (
    <div>
      <button
        className=" m-2 read  "
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {" "}
        <Arrow className={isHovered ? "hoverable hovered" : "hoverable"} />{" "}
        <p className={isHovered ? "hoverablep hoveredp" : "hoverablep"}>
          Read More
        </p>
      </button>
    </div>
  );
};

export default Button;
