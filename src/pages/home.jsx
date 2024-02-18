import "../components/after.css";
import React, { useState, useEffect } from "react";
import image from "../image/cj.jpg";
import { Link } from "react-router-dom";
import "./page.css";

const Home = () => {
  const [typedText, setTypedText] = useState("");

  const [activeLink, setActiveLink] = useState("contact");
  const textToType = "Seng Enghav.";
  const handleContactClick = () => {
    setActiveLink("contact");
  };

  useEffect(() => {
    let timer;
    if (typedText === textToType) {
      timer = setTimeout(() => {
        setTypedText("");
      }, 1000); // Adjust the pause duration before resetting the text
    } else {
      timer = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, 200); // Adjust the speed of typing animation as needed
    }

    return () => clearTimeout(timer);
  }, [typedText, textToType]);

  return (
    <div className="bg-[#010409] h-[679px] absolute translate-y-[50px] w-screen">
      <div className={`flex justify-between  text-white translate-y-[135px]`}>
        <div className="link translate-x-[200px] translate-y-[30px]">
          <div
            style={{
              fontSize:40,
              fontWeight: "700",
              wordWrap: "break-word",
              animation: "colorChange 10s infinite", // Applying the color change animation
            }}
          >
            What’s up !
          </div>

          <div
            className=""
            style={{
              fontSize:40,
              fontWeight: "600",
              wordWrap: "break-word",
            }}
          >
            I'm {typedText}
          </div>
          <div
            className="animate-spin"
            style={{
              fontSize:24,
              width: 406,
              height: 182,
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            <div className=" animate-ping  bg-gradient-to-r from-[#cf33e0] to-[#161b21] w-[430px] h-[2px] rounded-md"></div>
           <div className="mt-4">Life is like a dick <br /> <li>Sometimes it's up</li> <li>Sometimes it's down</li></div>
          {/* <div className=" mt-4 mb-4 text-[#00D2CC] font-bold">( ANDREW TATE )</div> */}
            <Link to="" className={``}>
              <div
                className=" hover:scale-110  h-[50px] mt-5 border-2 cursor-pointer bg-gradient-to-r from-[#cf33e0] to-[#161b21] text-[#cfe3da] font-bold w-[150px] text-center rounded-md p-2 "
                style={{ animation: "earthquake 0.05s infinite ", }}
              >
                Date ?
              </div>
            </Link>
          </div>
        </div>
        <div>
          <div className="animate-bounce">
            <span className="image1 absolute bg-gradient-to-t from-[#cf33e0]  to-[#161b21] w-[475px] h-[475px]  rounded-full translate-x-[-210px] translate-y-[-10px]"></span>
            <img
              src={image}
              className={`className="w-[455px] h-[455px] rounded-full translate-x-[-200px] `}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
