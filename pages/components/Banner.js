import React, { useContext } from "react";
import Image from "next/image";
import sytles from "../../styles/Home.module.css";
import { ToggleContext } from "../../ToggleContext";

function Banner() {
  const { toggle } = useContext(ToggleContext);
  return (
    <div
      className={`w-full h-screen relative object-cover md:blur-none ${
        toggle && "blur-sm"
      }`}
    >
      <Image
        src="/banner1.jpg"
        layout="fill"
        objectFit="cover"
        className={sytles.home__image}
      />
      <div className="absolute z-20 text-5xl text-white top-[40%] left-[14%] md:left-[20%]">
        <h1 className="text-3xl font-semibold">IT Consulting & SOFTWARE</h1>
        <div className="text-[14px] tracking-wide leading-5 md:text-[18px] w-4/5 md:w-2/5 mt-4 p-3 bg-black/70">
          BETHEL DIGITECH is an IT Consulting & Software company. We offer
          business solutions across several industries using modern technology
          to navigate and carry out services in the highest professional level
          and the best efficient manner.
        </div>
      </div>
    </div>
  );
}

export default Banner;
