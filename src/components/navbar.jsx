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
    <nav className="fixed top-0 left-0 w-full z-50 shadow-navbar">
      <div className="h-[60px] pt-3 p-10 pb-3 w-screen   bg-[#030911] flex justify-between items-center">
        <div className="text-[#00C3BF] text-3xl hover:text-[#CC9AB7] linkF">
        <Link to='/home' className={` ${
              activeLink === "home" ? "active" : ""
            }`} onClick={handleBornThisHoodClick}>
            Born this hood
          </Link>
        </div>
        <div className="flex items-center gap-7 space-x-4 translate-x-[150px]">
        <Link
            to="/home"
            className={`link cursor-pointer hover:scale-110  text-white text-2xl  inline-block ${
              activeLink === "home" ? "active" : ""
            }`}
            onClick={() => setActiveLink("home")}
          >
            Home
          </Link>

          <Link
            to="/skill"
            className={`link cursor-pointer hover:scale-110  text-white text-2xl  inline-block ${
              activeLink === "skill" ? "active" : ""
            }`}
            onClick={() => setActiveLink("skill")}
          >
            Skill
          </Link>

          <Link
            to="/edu"
            className={`link cursor-pointer hover:scale-110  text-white text-2xl inline-block ${
              activeLink === "edu" ? "active" : ""
            }`}
            onClick={() => setActiveLink("edu")}
          >
            Education
          </Link>

          <Link
            to="/achievement"
            className={`link cursor-pointer hover:scale-110  text-white text-2xl inline-block ${
              activeLink === "achievement" ? "active" : ""
            }`}
            onClick={() => setActiveLink("achievement")}
          >
            Achievement
          </Link>

          <Link
            to="/contact"
            className={`link cursor-pointer hover:scale-110  text-white text-2xl inline-block ${
              activeLink === "contact" ? "active" : ""
            }`}
            onClick={() => setActiveLink("contact")}
          >
            Contact
          </Link>
        </div>
        <div
          className="github relative cursor-pointer hover:scale-110 "
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
            <span className="absolute translate-y-[20px] top-full w-[150px] transform -translate-x-1/2 text-[#00C3BF] text-sm">
              Check here !
            </span>
          )}
        </div>
        
      </div>
    
      {activeLink === "home" && <Home />}
      {/* <div className={`bg-[#5DECBF] h-[1px] translate-y-[25px]`}/> */}
    </nav>
    
    
  );
};

export default Navbar;
