import React, { useState, useEffect } from "react";
import html from "../image/i1.png";
import css from "../image/css.png";
import js from "../image/js.png";
import sql from "../image/sql.png";

import "./page.css";
const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 80) {
        setCount((prevCount) => prevCount + 1);
      } else {
        clearInterval(interval);
      }
    }, 55); // Adjust the interval duration as needed

    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="bg-[#1B1D2A] h-[1650px]">
      <div className="translate-y-[50px] text-white ">
        <div className="flex justify-between">
          <div className="flex flex-col pl-[130px] pt-10 ">
            <div className=" mb-10 text-emerald-300 text-3xl font-normal font-[Imprima]">
              Languege
            </div>
            <div className="flex">
              <div>
                <div className="flex ">
                  <img src={html} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-80  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={css} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-[290px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={js} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-[200px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={sql} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-[120px] translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
              </div>
              <div className="translate-x-[650px]">
                <div className="flex ">
                  <img src={html} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-80  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={css} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-[290px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={js} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-[200px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={sql} className="mr-10" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#EAEEFF] rounded-[10px]" />
                    <div className="link1 absolute w-[120px] translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
