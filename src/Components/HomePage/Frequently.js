import React, { useState } from "react";
import "./Frequently.css";

const Frequently = () => {
  const [faq, setFaq] = useState(0);

  return (
    <>
      <div>
        <div className="container mt-5">
          <h2 className="pt-4 text-center fw-bold" style={{ color: "#FA8352" }}>
            Frequently Asked <br /> Questions
          </h2>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(1);
            }}
            className="mt-5"
          >
            <li
              className={
                faq === 1 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="first">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>

                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="first" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(2);
            }}
          >
            <li
              className={
                faq === 2 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="second">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="second" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(3);
            }}
          >
            <li
              className={
                faq === 3 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="third">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="third" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(4);
            }}
          >
            <li
              className={
                faq === 4 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="fourth">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="fourth" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
          <ul
            id="acoordion"
            onClick={() => {
              setFaq(5);
            }}
          >
            <li
              className={
                faq === 5 ? "buttonColorChange" : "backgroundColorborder"
              }
            >
              <label htmlFor="fifth">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Mollitia, labore.
                </p>
                <span className="arrow">&#x3e;</span>
              </label>
              <input type="radio" name="acoordion" id="fifth" />
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  tempora omnis explicabo ipsam obcaecati dolor optio,
                  voluptates eaque odit, magnam neque recusandae voluptatibus
                  velit consectetur tempore at nobis fuga. Architecto.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Frequently;
