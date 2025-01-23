import React from "react";
import one from "../../img/one.png";
import two from "../../img/two.png";

const Netcoder = () => {
  return (
    <div>
      <div
        className="container-fluid tech "
        style={{ backgroundColor: "#F9F4F1" }}
      >
        <div className="container pb-4">
          <div className="row width">
            <div className="col-lg-6 text-lg-start text-center ">
              <img
                src={one}
                alt=""
                height="auto"
                width="35%"
                className="ms-lg-5"
              />
              <img
                src={two}
                alt=""
                height="auto"
                width="35%"
                className="pt-lg-5 mt-lg-5"
              />
            </div>
            <div className="col-lg-6 ">
              <h2 className=" fw-bold mt-4 pt-lg-5">
                <span style={{ color: "#FA8352 " }}>Why Join</span> <br />
                Netcoder Technology!
              </h2>
              <p className="pt-lg-3 float-lg-end pe-lg-5">
                The reason why Netcoder technology doesn’t produce half-baked
                grandaunts is that we have a strong mission. We are the leading
                learning institute to produce grandaunts who are practically fit
                for the job market. Our programs are curated to enable each
                student to maximize practical talent
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netcoder;
