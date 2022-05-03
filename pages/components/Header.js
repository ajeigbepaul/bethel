import React, { useState, useContext } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import { GoThreeBars } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { ToggleContext } from "../../ToggleContext";
// import styles from "../../styles/Header.module.css";
function Header() {
  const { handleToggle, toggle } = useContext(ToggleContext);
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full h-[10vh] flex items-center justify-between shadow-lg px-6 fixed bg-white/90 z-50">
      <div className="flex cursor-pointer ">
        <Image
          src="/Betheldigitechlogo.jpg"
          width={40}
          height={30}
          className="object-cover"
        />
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-bold md:text-2xl text-md font-sans">
            BETHEL DIGITECH
          </h1>
          {/* <span>IT Consulting | Software</span> */}
        </div>
      </div>
      {/* navigation */}
      <div className=" hidden md:flex w-[670px] justify-around p-2 font-sans">
        <div
          onClick={() => setActive("Home")}
          className={`cursor-pointer text-base hover:shadow-md p-6  ${
            active === "Home" && "bg-purple-300 animate-bounce"
          } `}
        >
          Home
        </div>
        <div
          onClick={() => setActive("About")}
          className={`cursor-pointer text-base hover:shadow-md p-6 ${
            active === "About" && "bg-purple-300 animate-bounce"
          } `}
        >
          About
        </div>
        <div
          onClick={() => setActive("Workplacement")}
          className={`cursor-pointer text-base hover:shadow-md p-6 ${
            active === "Workplacement" && "bg-purple-300 animate-bounce"
          } `}
        >
          Work Placement
        </div>
        <div
          onClick={() => setActive("Career")}
          className={`cursor-pointer text-base hover:shadow-md p-6 ${
            active === "Career" && "bg-purple-300 animate-bounce"
          } `}
        >
          Careers
        </div>
        <div
          onClick={() => setActive("Contact")}
          className={`cursor-pointer text-base hover:shadow-md p-6 ${
            active === "Contact" && "bg-purple-300 animate-bounce"
          } `}
        >
          Contact
        </div>
        <div
          onClick={() => setActive("More")}
          className={`cursor-pointer text-base hover:shadow-md p-6 ${
            active === "More" && "bg-purple-300 animate-bounce"
          } `}
        >
          More
        </div>
      </div>
      <div className=" hidden md:flex">
        <select className="bg-transparent shadow-md text-purple-400 border-0 outline-none p-1 rounded-sm">
          <option className="text-black">EN</option>
          <option className="text-black">Fr</option>
        </select>
      </div>
      <div
        onClick={handleToggle}
        className=" text-purple-500 cursor-pointer md:hidden"
      >
        {toggle ? (
          <FaTimes className="w-8 h-8" />
        ) : (
          <GoThreeBars className="w-8 h-8" />
        )}
      </div>
      {toggle && (
        <div className="w-[50%] h-[90vh] bg-black/90 text-white top-[10vh] absolute right-0">
          {/* Mobile menu */}
          <div className="flex flex-col w-full justify-around p-2 font-sans items-center space-y-4">
            <div
              onClick={() => setActive("Home")}
              className={`cursor-pointer text-base hover:shadow-md p-3  ${
                active === "Home" && "bg-purple-400 animate-bounce"
              } `}
            >
              Home
            </div>
            <div
              onClick={() => setActive("About")}
              className={`cursor-pointer text-base hover:shadow-md p-3 ${
                active === "About" && "bg-purple-400 animate-bounce"
              } `}
            >
              About
            </div>
            <div
              onClick={() => setActive("Workplacement")}
              className={`cursor-pointer text-base hover:shadow-md p-3 ${
                active === "Workplacement" && "bg-purple-400 animate-bounce"
              } `}
            >
              Work Placement
            </div>
            <div
              onClick={() => setActive("Career")}
              className={`cursor-pointer text-base hover:shadow-md p-3 ${
                active === "Career" && "bg-purple-400 animate-bounce"
              } `}
            >
              Careers
            </div>
            <div
              onClick={() => setActive("Contact")}
              className={`cursor-pointer text-base hover:shadow-md p-3 ${
                active === "Contact" && "bg-purple-400 animate-bounce"
              } `}
            >
              Contact
            </div>
            <div
              onClick={() => setActive("More")}
              className={`cursor-pointer text-base hover:shadow-md p-3 ${
                active === "More" && "bg-purple-400 animate-bounce"
              } `}
            >
              More
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
