import React from "react";
import "./Map.css";
import { useInView } from "react-intersection-observer";
import mapImage from "../../img/multi.png";

const Map = () => {
  const { ref: mapElement, inView: mapVisible } = useInView();
  return (
    <div ref={mapElement} className={mapVisible ? " view show" : " view  "}>
      <div className="container">
        <div className="row mt-3">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={mapImage} width="80%" alt="tetxt" />
          </div>
          <div className="col-lg-6">
            <h2 className="mt-4 fw-bold pt-5">
              <span style={{ color: "#fa8352" }}>Himachal Pradesh</span> - Where
              The Multimedia Is A Latest Trend
            </h2>
            <p className="intro ">
              Immerse yourself in the multimedia revolution of Himachal Pradesh,
              where captivating visuals and digital storytelling converge.
              Amidst the majestic Himalayas, this vibrant hub embraces the
              latest trends, blending art and technology seamlessly. Discover
              the limitless possibilities and creative expression that thrive in
              the breathtaking landscapes of Himachal Pradesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
