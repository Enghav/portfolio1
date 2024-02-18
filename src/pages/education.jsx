import React from "react";
import itc from "../image/itc.png";
import { Link } from "react-router-dom";
import gic from '../image/gic.png'
import "./page.css";
const Education = () => {
  return (
    <div className='bg-[#010409] h-[1000px] translate-y-[50px] w-screen"'>
      <div className="flex justify-between flex-col">
        <div className="flex flex-col pl-[130px] pt-10 ">
          <div className=" mb-10 text-emerald-300 text-3xl link cursor-pointer absolute hover:scale-110 duration-200">
            School
          </div>
          <div className="flex translate-y-[30px] mt-10">
            <Link to="https://itc.edu.kh/" target="blank">
              <img
                src={itc}
                alt="img"
                className="mr-6 cursor-pointer hover:scale-110 duration-200"
              />
            </Link>
            <div className="w-[844px] newF l">
              <span style={{ color: "white", fontSize: 30 }}>
                    The Institute of Technology of Cambodia or Institut de
                Technologie du Cambodge, known for short as Sala Techno, is a
                higher education institution in
              </span>
              <span
                className="ml-1"
                style={{
                  color: "white",
                  fontSize: 30,
                  textDecoration: "underline",
                }}
              >
                Phnom Penh
              </span>
              <span style={{ color: "white", fontSize: 30 }}>,</span>
              <span
                className="mr-1"
                style={{
                  color: "white",
                  fontSize: 30,
                  textDecoration: "underline",
                }}
              >
                Cambodia
              </span>
              <span style={{ color: "white", fontSize: 30 }}>
                that trains students in science, technology, and engineering.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-[130px] pt-10 translate-y-[50px]">
          <div className=" mb-10 text-emerald-300 text-3xl link cursor-pointer hover:scale-110 absolute duration-200 ">
            Departement
          </div>
          <div className="flex translate-y-[30px] mt-10">
            <div className="w-[900px] newF">
              <span
              className="ml-10"
                style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "normal",
                }}
              >
                Department of Information and Communication Engineering.
                <br />
                <br />
              </span>
              <li
              className="ml-10"
                style={{
                  color: "white",
                  fontSize: 30,
                  fontWeight: "normal",
                }}
              >
                I’m I4 student.
              </li>
            </div>
            <Link to="https://gic.itc.edu.kh/" target="blank">
              <img
                src={gic}
                alt="img"
                className="mr-6 cursor-pointer hover:scale-110 duration-200 rounded-[15px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
