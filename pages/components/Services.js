import React from "react";

function Services() {
  return (
    <div className="h-auto md:h-[120vh] w-full bg-[#06102c] pb-8">
      <div className="w-9/12 mx-auto h-auto flex flex-col items-center justify-start">
        <div className="flex flex-col items-center justify-center space-y-3 mb-3 pt-[100px]">
          <h2 className="text-xl font-sans text-white ">Services</h2>
          <span className="md:text-3xl text-lg font-bold text-purple-500">
            WHAT WE DO WELL?
          </span>
        </div>

        <div className="md:flex items-center justify-between md:space-x-5 space-y-3 pt-5 w-full">
          <div className="bg-white  w-5/5 md:w-80 h-auto md:h-[400px] rounded-t-md">
            <h2 className="text-purple-500 w-[150px] md:w-[100px] md:ml-9 mx-auto md:text-3xl text-lg">
              IT Skills Solutions
            </h2>
            <p className="text-black md:w-[300px] w-[250px] md:text-lg text-sm p-3 md:p-0 mx-auto my-5 font-mono">
              Bethel Digitech has a wide range of IT solution in several
              industries using modern day software for both experienced and
              in-experienced
            </p>
          </div>
          <div className="bg-white w-5/5 md:w-80 h-auto md:h-[400px] rounded-t-md">
            <h2 className="text-purple-500 w-[150px] md:ml-9 mx-auto md:text-3xl text-md">
              IT Careers Solutions
            </h2>
            <p className="text-black md:w-[300px] w-[250px] md:text-lg text-sm p-3 md:p-0 mx-auto my-5 font-mono">
              We provide IT solution & services to Multinational
              Intermediary/SME Companies. Whatever level service you currently
              require we can have a chat on how to get started.
            </p>
          </div>
          <div className="bg-white w-5/5 md:w-80 h-auto md:h-[400px] rounded-t-md">
            <h2 className="text-purple-500  w-[150px] md:w-[50px] md:ml-9 mx-auto md:text-3xl text-lg ">
              Business Solutions
            </h2>
            <p className="text-black md:w-[300px] w-[250px] md:text-lg text-sm p-3 md:p-0 mx-auto my-5 font-mono ">
              We are known for endless business relationships. We are versatile
              using modern software and processes at the highest professional
              level. Producing business growth for our client.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
