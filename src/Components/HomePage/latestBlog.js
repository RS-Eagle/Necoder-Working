import React from "react";
import rec1 from "../../img/Rectangle 121.png";
import rec2 from "../../img/Rectangle 122.png";
import rec3 from "../../img/Rectangle 123.png";
import arrow from "../../img/arrowcircleright2.png";

const latestBlog = () => {
  return (
    <div>
      <div
        class="container-fluid mt-5 pt-lg-5 p-3"
        style={{ backgroundColor: "#F9F4F1" }}
      >
        <h2 class="pt-3 text-center fw-bold" style={{ color: "#FA8352" }}>
          Our Latest Blogs
        </h2>
        <div class="container mt-5 pt-lg-1">
          <div class="row justify-content-around f-wrap mt-4 ">
            <div class="card new-style2">
              <img src={rec1} class="card-img-top" alt="..." />
              <h5 class="fw-bold mt-3" style={{ color: "#FA8352" }}>
                Graphic Designing{" "}
                <span class="float-end text-center new-style1">
                  13 July 2023
                </span>
              </h5>
              <p class="card-text pe-lg-3">
                We offer training in all parts of web development including web
                design, interface design, web hosting, and web maintenance.
              </p>
            </div>
            <div class="card new-style2 ">
              <img src={rec2} class="card-img-top" alt="..." />
              <h5 class="fw-bold mt-3" style={{ color: "#FA8352" }}>
                Web Development{" "}
                <span class="float-end text-center new-style3 ">
                  13 July 2023
                </span>
              </h5>
              <p class="card-text pe-lg-5">
                Web development is the work involved in developing a website for
                the Internet. Web development usually refers to ....
              </p>
            </div>
            <div class="card new-style2">
              <img src={rec3} class="card-img-top" alt="..." />
              <h5 class="fw-bold mt-3" style={{ color: "#FA8352" }}>
                Digital Marketing{" "}
                <span class="float-end text-center new-style3">
                  13 July 2023
                </span>
              </h5>
              <p class="card-text pe-lg-5">
                Digital marketing is simply online marketing and it’s the
                process of evaluating the market and promoting brands or
                services through the internet.
              </p>
            </div>
            <div class="col-lg-12 text-lg-end text-center mt-lg-4">
              <button class=" m-2 read">
                {" "}
                <img src={arrow} alt="" height="auto" width="12%" />
                Read More Blogs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default latestBlog;
