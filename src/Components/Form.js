import React, { useRef } from "react";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";

const Form = ({ form, formValidator }) => {
  const formm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tnc2j6d",
        "template_o8hhasj",
        formm.current,
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
      {form ? (
        <form action="" onSubmit={sendEmail} ref={formm}>
          <div className="fullscreen">
            <section class="main-form-z">
              <FontAwesomeIcon
                onClick={formValidator}
                className="crossBtn"
                icon={faXmark}
              />
              <div class="main-form">
                <h1>Book your demo class today</h1>

                <div class="row">
                  <div class="col-md">
                    <label for="courses">Select Courses</label>
                    <select
                      name="courses"
                      id="courses"
                      placeholder="Choose Course"
                      onChange={(e) => {
                        e.target.setAttribute("name", "course");
                      }}
                    >
                      <option value="Ethical Hacking">Ethical Hacking</option>
                      <option value="Full Stack Development">
                        Full Stack Development
                      </option>
                      <option value="Website Design">Website Design</option>
                      <option value="Graphics Design">Graphics Design</option>
                      <option value="Graphics Design">UI/UX Design</option>
                      <option value="Graphics Design">Digital Marketing</option>
                      <option value="Graphics Design">Video editing</option>
                      <option value="Graphics Design">2D, 3D Animation</option>
                      <option value="Graphics Design">Auto CAD</option>
                    </select>
                  </div>
                  <div class="col-md">
                    <label for="date">Select Date</label>
                    <input type="date" name="date" id="date" />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <label for="name">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      id="name"
                      name="from_name"
                    />
                  </div>
                  <div class="col-md">
                    <label for="phone">Phone Number</label>
                    <input
                      type="number"
                      placeholder="Phone no."
                      id="phone"
                      name="no_phone"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-md">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      placeholder="Email"
                      id="email"
                      name="email"
                    />
                  </div>
                  <div class="col-md">
                    <label for="address">Address</label>
                    <input type="text" id="address" name="address" />
                  </div>
                </div>

                <div class="btn-flex d-flex justify-content-center">
                  <button
                    type="submit"
                    value="Send"
                    class="btn-sub"
                    onClick={formValidator}
                  >
                    Submit Your Details
                  </button>
                </div>
              </div>
            </section>
          </div>
        </form>
      ) : (
        ""
      )}
    </>
  );
};

export default Form;
