import React from 'react'
import "./Map.css"
import { useInView } from 'react-intersection-observer'


const Map = () => {
    const {ref:mapElement, inView: mapVisible} = useInView()
  return (
    <div ref={mapElement} className={mapVisible? " view show" : " view  "}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.935717713329!2d76.3203098246047!3d32.20596276295226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b51add89a3e4f%3A0x4ca1a13800ad4bc8!2s206%2C%202nd%20Flr%2C%20Butail%20Cplx%20College%20Rd%2C%20Civil%20Lines%2C%20Dharamshala%2C%20Himachal%20Pradesh%20176215!5e0!3m2!1sen!2sin!4v1689224383167!5m2!1sen!2sin"
              width={"100%"}
              height="350"
              style={{ border: "0" }}
              
              loading="lazy"
              title="Map"
             
            ></iframe>
          </div>
          <div className="col-lg-6">
            <h2 className="mt-4 fw-bold">
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
  )
}

export default Map
