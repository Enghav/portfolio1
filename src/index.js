import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/home";
import Skill from "../src/pages/skill";
import Educa from "../src/pages/education";
import Achi from "../src/pages/achievement";
import Contact from "../src/pages/contact";
import Navbar from "./components/navbar";

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/skill" element={<Skill />} />
      <Route path="/edu" element={<Educa />} />
      <Route path="/achievement" element={<Achi />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
