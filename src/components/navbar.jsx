import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./after.css";
import "../pages/page.css";
import github from "../image/github.png";
import Home from "../pages/home";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");  
  const [showText, setShowText] = useState(false);
  const handleBornThisHoodClick = () => {
    setActiveLink("home");
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="h-[50px] p-10 pb-3 w-screen bg-[#1B1D2A] flex justify-between items-center">
        <div className="text-emerald-300 text-3xl hover:text-rose-500 font-normal font-[inconsolata]">
        <Link to='/home' className={` text-3xl font-normal font-[inconsolata] ${
              activeLink === "home" ? "active" : ""
            }`} onClick={handleBornThisHoodClick}>
            Born this hood
          </Link>
        </div>
        <div className="flex items-center gap-7 space-x-4 translate-x-[150px]">
        <Link
            to="/home"
            className={`link text-white text-2xl font-normal font-[inconsolata] inline-block ${
              activeLink === "home" ? "active" : ""
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>

          <Link
            to="/skill"
            className={`link text-white text-2xl font-normal font-[inconsolata] inline-block ${
              activeLink === "skill" ? "active" : ""
            }`}
            onClick={() => setActiveLink("skill")}
          >
            Skill
          </Link>

          <Link
            to="/edu"
            className={`link text-white text-2xl font-normal font-[inconsolata] inline-block ${
              activeLink === "edu" ? "active" : ""
            }`}
            onClick={() => setActiveLink("edu")}
          >
            Education
          </Link>

          <Link
            to="/achievement"
            className={`link text-white text-2xl font-normal font-[inconsolata] inline-block ${
              activeLink === "achievement" ? "active" : ""
            }`}
            onClick={() => setActiveLink("achievement")}
          >
            Achievement
          </Link>

          <Link
            to="/contact"
            className={`link text-white text-2xl font-normal font-[inconsolata] inline-block ${
              activeLink === "contact" ? "active" : ""
            }`}
            onClick={() => setActiveLink("contact")}
          >
            Contact
          </Link>
        </div>
        <div
          className="github relative"
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
          <Link to="https://github.com/Enghav" target="_blank">
            <img
              src={github}
              className="w-10 h-10 cursor-pointer"
              alt=""
            />
          </Link>
          {showText && (
            <span className="absolute top-full w-[150px] transform -translate-x-1/2 text-pink-500 text-sm">
              Check my Account
            </span>
          )}
        </div>
      </div>
      {activeLink === "home" && <Home />}
    </nav>
    
  );
};

export default Navbar;
