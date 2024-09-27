import React from "react";
import HomeImg from "../assets/Group 46.png";
import Rectangle from "../assets/Rectangle 27.png";
export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mt-20">
            <h1 className="text-start text-3xl text-white">
              Nawaf is a <span style={{ color: "#C778DD" }}>wordpress designer</span>{" "}
              and <br />{" "}
              <span style={{ color: "#C778DD" }}> Full stack developer</span>
            </h1>
            <p className="text-start mt-5">
              He crafts responsive websites where technologies <br /> meet
              creativity
            </p>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm text-white focus:outline-none mt-5"
              style={{ border: "1px solid", borderColor: "#C778DD" }}
            >
              <span
                className="relative px-5 py-2.5"
                style={{ backgroundColor: "#282C33" }}
              >
                Contact me !!
              </span>
            </button>
          </div>
          <div className="">
            <div>
              <img src={HomeImg} alt="HomeImg" />
              <div className="flex justify-center items-center">
                <div className="w-full border border-gray-600 p-2  flex justify-start items-center gap-2">
                  <img src={Rectangle} alt="No Image" />
                  <p className="text-gray-500">
                    Currently working on <span className="font-black text-white">Portfolio</span>                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="hidden md:flex justify-center items-center  my-10">
            <div className="relative max-w-lg p-8  bg-transparent border border-gray-600  text-white ">
              <div className="absolute top-0 left-4 text-gray-500 text-4xl font-bold">
                &ldquo;
              </div>
              <p className="text-lg text-center">
                With great power comes great electricity bill
              </p>
              <div className="absolute bottom-0 right-4 text-gray-500 text-4xl font-bold">
                &rdquo;
              </div>
              <p className="text-right mt-4  text-white font-bold">- Dr. Who</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
