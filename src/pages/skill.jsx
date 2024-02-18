import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import html from "../image/i1.png";
import css from "../image/css.png";
import js from "../image/js.png";
import sql from "../image/sql.png";
import java from "../image/ja.png";
import cpp from "../image/cpp.png";
import python from "../image/py.png";
import php from "../image/php.png";
import tailwindcss from "../image/tail.png";
import react from "../image/react.png";
import vue from "../image/vue.png";
import node from "../image/node.png";
import laravel from "../image/la.png";
import spring from "../image/sp.png";
import intell_j from '../image/ij.png'
import vscode from '../image/vs.png'
import xampp from '../image/xampp.png'
import phycharm from '../image/pyc.png'
import figma from '../image/fig.png'
import docker from '../image/docker.png'
import ubuntu from '../image/ubuntu.png'

import "./page.css";
const Skill = () => {
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
    <div className="bg-[#010409] h-[1360px]">
      <div className="translate-y-[100px] text-white ">
        <div className="flex justify-between">
          <div className="flex flex-col pl-[130px] pt-10 ">
            <div className=" mb-10 text-emerald-300 text-3xl link">
              Languege
            </div>
            <div className="flex translate-y-[30px]">
              <div>
                <div className="flex ">
                  <img src={html} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                  
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-80  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={css} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[290px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={js} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[200px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10">
                  <img src={sql} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[120px] translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
              </div>
              <div className="translate-x-[650px]">
                <div className="flex ">
                  <img src={cpp} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[200px] translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-5">
                  <img src={java} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[180px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-7">
                  <img src={python} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[200px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-12 translate-y-[10px]">
                  <img src={php} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[20px] translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between translate-y-[100px]">
          <div className="flex flex-col pl-[130px] pt-10 ">
            <div className=" flex mb-10 text-emerald-300 text-3xl link">
              <div>Framework</div>
              <div className="translate-x-[600px]">Tool</div>
            </div>
            <div className="flex translate-y-[30px]">
              <div>
                <div className="flex mb-5">
                  <img src={tailwindcss} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[300px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10 translate-y-[15px]">
                  <img src={react} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[200px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10 translate-y-[30px]">
                  <img z src={vue} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[150px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10 translate-y-[30px]">
                  <img src={node} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[80px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10 translate-y-[30px]">
                  <img src={laravel} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[20px]  translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
                <div className="flex mt-10 translate-y-[30px]">
                  <img src={spring} className="mr-10 cursor-pointer hover:scale-110" alt="" />
                  <div className="flex items-center">
                    <div className="absolute w-[380px] h-2 bg-[#ffffff] rounded-[10px]" />
                    <div className="link1 absolute w-[60px] translate-y-[-4px]" />
                    {/* <div className="percent absolute right-[850px] animate-fill ">
              {count}%
              </div> */}
                  </div>
                </div>
              </div>

              <div className="translate-x-[650px]">
                <div className="flex flex-col gap-10">
                  <div className="flex w-[400px] justify-between">
                    <Link to="https://www.jetbrains.com/idea/" target="blank"><img className="cursor-pointer hover:scale-110" src={intell_j} alt="" /></Link>
                    <Link to='https://code.visualstudio.com/'target="blank" ><img className="cursor-pointer hover:scale-110" src={vscode} alt="" /></Link>
                    <Link to='https://www.apachefriends.org/' target="blank"><img className="cursor-pointer hover:scale-110" src={xampp} alt="" /></Link>
                  </div>
                  <div className="flex w-[400px] justify-between">
                    <Link to='https://www.jetbrains.com/pycharm/' target="blank" ><img className="cursor-pointer hover:scale-110 translate-x-[-30px]" src={phycharm} alt="" /></Link>
                    <Link to='https://figma.com/' target="blank"><img className="cursor-pointer hover:scale-110 translate-x-[-20px]" src={figma} alt="" /></Link>
                    <Link to='https://www.docker.com/'target="blank" ><img className=" cursor-pointer hover:scale-110" src={docker} alt="" /></Link>
                  </div>
                  <div className="flex w-[400px] justify-between">
                    <Link to='https://ubuntu.com/'target="blank" ><img className="cursor-pointer hover:scale-110" src={ubuntu} alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
