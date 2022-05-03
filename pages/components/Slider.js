import React from "react";

function Slider({ testimonial, name, country }) {
  return (
    <div className="bg-white flex items-center justify-center flex-col md:h-[50vh] h-[70vh]">
      <p className="md:text-base text-xs w-4/5 p-3">{testimonial}</p>
      <div className="flex items-center justify-center ">
        <span className="font-bold text-lg">{name}</span>
        <span className="text-red-400 mx-3 text-xl">{country}</span>
      </div>
    </div>
  );
}

export default Slider;
