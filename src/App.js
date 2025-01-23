import "./App.css";
import Footer from "./Components/Footer";
// import "cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
import Navbar from "./Components/Navbar";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Graphic from "./Pages/InnerPages/Graphic";
import Website from "./Pages/InnerPages/Website";
import Development from "./Pages/InnerPages/Development";
import Marketing from "./Pages/InnerPages/Marketing";
import Hacking from "./Pages/InnerPages/Hacking";
import Animation from "./Pages/InnerPages/Animation";
import VideoEditing from "./Pages/InnerPages/VideoEditing";
import Ui from "./Pages/InnerPages/Ui";
import Autocad from "./Pages/InnerPages/Autocad";
import Scroller from "./Components/Scroller";
import Form from "./Components/Form";

function App() {
  const [logo, setlogo] = useState(true);
  const [validate, setValidate] = useState("Home");
  const setlogoNew = (logoval) => {
    setlogo(logoval);
  };

  const validateHandler = (newvalidateVal) => {
    setValidate(newvalidateVal);
  };
  const [form, setForm] = useState(false);
  const formValidator = () => {
    setForm(!form);
    console.log(form);
  };

  return (
    <Router>
      <Scroller />
      <Navbar validate={validate} logo={logo} />
      <Form form={form} formValidator={formValidator} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/courses"
          element={
            <Courses
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
            />
          }
        />
        <Route
          path="/about"
          element={
            <About setlogoNew={setlogoNew} validateHandler={validateHandler} />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
            />
          }
        />
        <Route
          path="/graphic"
          element={
            <Graphic
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/website-designing"
          element={
            <Website
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/web-development"
          element={
            <Development
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/digital-marketing"
          element={
            <Marketing
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/ethical-hacking"
          element={
            <Hacking
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/animation"
          element={
            <Animation
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/video-editing"
          element={
            <VideoEditing
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/design"
          element={
            <Ui
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
        <Route
          path="/autocad"
          element={
            <Autocad
              setlogoNew={setlogoNew}
              validateHandler={validateHandler}
              formValidator={formValidator}
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
