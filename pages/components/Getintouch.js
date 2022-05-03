import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
function Getintouch() {
  return (
    <div className="w-full h-[30vh] bg-[#06102c] flex items-center justify-center pt-[70px] md:pt-0">
      <div className="w-11/12 md:w-9/12 md:flex items-center md:justify-around mx-auto py-5 space-y-4 md:space-y-0">
        <div className="flex items-center justify-center bg-slate-50 md:bg-inherit p-2 md:p-0">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-3 bg-purple-500">
            <FaPhoneAlt className="w-4 md:w-6 h-4 md:h-6" />
          </div>
          <div className="text-purple-500 text-sm md:text-base">
            <h2>Call Us: +234-8023487586</h2>
            <span>Km 123, Lekki , Lagos</span>
          </div>
        </div>

        <div className="flex items-center justify-center bg-slate-50 md:bg-inherit p-2 md:p-0">
          <div className="w-12 ml-6 md:ml-0 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-3 bg-purple-500 ">
            <FaClock className="w-4 md:w-6 h-4 md:h-6" />
          </div>
          <div className="text-purple-500">
            <h2>Opening Hours</h2>
            <span>Monday-Sat[8am - 5pm]</span>
          </div>
        </div>
        <div className="p-3 h-12 rounded-md  text-sm border-solid text-slate-50 md:text-black hover:shadow-md font-sans flex items-center justify-center cursor-pointer hover:bg-fuchsia-500 bg-fuchsia-400">
          Make an Appointment
        </div>
      </div>
    </div>
  );
}

export default Getintouch;
