import React, { useRef, useState } from "react";
import group119 from "../img/Group 119.png";
import group157 from "../img/Group 157.png";
import group159 from "../img/Group 159.png";
import vector from "../img/vector-2 1.png";
import emailjs from "@emailjs/browser";
import vectordownload from "../img/vectordownload.png";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

const Contact = ({ setlogoNew, validateHandler }) => {
  const navigate = useNavigate();
  const [val, setVal] = useState(5);

  validateHandler("Contact");
  setlogoNew(true);
  const firstMain = useRef(null);
  const secondMain = useRef(null);
  const thirdMain = useRef(null);

  const sliderHandler = () => {
    firstMain.current.style.left = "-100%";
    secondMain.current.style.left = "0";
  };

  const redirector = () => {
    const intervalId = setInterval(() => {
      setVal((preVal) => preVal - 1);
      console.log(val);
    }, 1000);

    setTimeout(() => {
      navigate("/");
      clearInterval(intervalId);
      setVal(5);
    }, 5000);
  };
  const sliderHandler2 = () => {
    secondMain.current.style.left = "-100%";
    thirdMain.current.style.left = "0";
    redirector();
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tnc2j6d",
        "template_mma7sdg",
        form.current,
        "MXgqsaUAQAfzCZGeb"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(form.current);
  };

  return (
    <>
      <div className="colorbg pt-5">
        <div className="container pb-5 pt-5">
          <div className="row  mt-lg-5 pt-lg-5">
            <div className="col-lg-6  col-md-6 contact">
              <img
                src={group119}
                alt="chatting icon"
                height="40px"
                width="40px"
              />
              <span
                style={{
                  color: "#FA8352",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                {" "}
                Chat to us
              </span>
              <p className="ps-5" style={{ marginTop: "-8px" }}>
                Send us your query anytime!
              </p>
              <h6 className="ps-5">info@netcoder.in</h6>
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <img
                    src={group157}
                    alt="chatting icon"
                    height="40px"
                    width="40px"
                  />
                  <span
                    style={{
                      color: "#FA8352",
                      fontWeight: "bold",
                      fontSize: "18px",
                    }}
                  >
                    {" "}
                    Office
                  </span>
                  <p className="ps-5" style={{ marginTop: "-8px" }}>
                    Come say hello at our office HQ.
                  </p>
                  <h6 className="ps-5">
                    Netcoder Technology, 206 Civil Lines, Butail Complex,
                    Dharamshala, Himachal Pradesh 176215
                  </h6>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <img
                    src={group159}
                    alt="chatting icon"
                    height="40px"
                    width="40px"
                  />
                  <span
                    style={{
                      color: "#FA8352",
                      fontWeight: "bold",
                      fontSize: "16px",
                    }}
                  >
                    {" "}
                    Phone
                  </span>
                  <p className="ps-5" style={{ marginTop: "-9px" }}>
                    Mon to Sat 9am to 6 pm.
                  </p>
                  <h6 className="ps-5 ">
                    98167-32055, <br /> 01892 223-777
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 text-center main ">
              <form action="" onSubmit={sendEmail} ref={form}>
                <div ref={firstMain} className="main1">
                  <div>
                    <img
                      src={vector}
                      alt="a girl with a laptop"
                      height="250px"
                      width="250px"
                      className="text-center mt-5"
                    />
                    <h4>
                      Let us know what are <br />
                      you want learn ?
                    </h4>
                    <select
                      className="form-select w-50 ms-auto me-auto mt-4"
                      aria-label="Default"
                      onChange={(e) => {
                        e.target.setAttribute("name", "course");
                      }}
                    >
                      <option value="Graphic Designing">
                        Graphic Designing
                      </option>
                      <option value="Web Designing">Web Designing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Ethical Hacking">Ethical Hacking</option>
                      <option value="Digital Marketing">
                        Digital Marketing
                      </option>
                      <option value="2D/3D Animation">2D/3D Animation</option>
                      <option value="Video Editing">Video Editing</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="AutoCAD">AutoCAD</option>
                    </select>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3 pb-5 ">
                      <button
                        className="btn"
                        type="button"
                        style={{ backgroundColor: "#59A6AE", color: "white" }}
                        onClick={sliderHandler}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>

                <div ref={secondMain} className="main2">
                  <div className="m-5">
                    <h2>Tell us about yourself</h2>
                    <div className="inputs">
                      <p className="text-start">Name</p>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="from_name"
                      />
                      <p className="text-start">Phone Number</p>
                      <input
                        type="text"
                        placeholder="77788-89999"
                        name="no_phone"
                      />
                      <p className="text-start">Email</p>
                      <input
                        type="mail"
                        placeholder="you@mail.com"
                        name="email"
                      />
                      <p className="text-start">Address</p>
                      <input
                        type="text"
                        placeholder="Your full address"
                        name="address"
                      />
                      <p className="text-start">Message</p>
                      <input type="text" placeholder="Enter your discription" />

                      <button
                        type="submit"
                        value="Send"
                        className="btn mt-4"
                        style={{ backgroundColor: "#59A6AE", color: "white" }}
                        onClick={sliderHandler2}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
                <div ref={thirdMain} className="main3">
                  <div className="conatiner-main3">
                    <img src={vectordownload} alt="girl" width={100} />
                    <h3>Congratulations!</h3>
                    <p className="p11">Your Details Submit Successfully</p>
                    <p>
                      You will be automatically <br /> redirect to homepage in{" "}
                      {val} sec.
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer start --> */}
    </>
  );
};

export default Contact;
