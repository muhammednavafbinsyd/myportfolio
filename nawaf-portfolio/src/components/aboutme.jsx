import React from "react";
import AboutMeImg from "../assets/Group 50.png";
export default function Aboutme() {
  return (
    <section className="text-white py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center my-10 sm:my-28">
        <h2 className="text-3xl font-bold text-center sm:text-left">
          <span className="text-purple-500">#</span>about-me
        </h2>
        <div className="h-0.5 w-48 sm:w-96 my-4 sm:my-10 bg-purple-500 sm:ml-4"></div>
      </div>     
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="text-center md:text-left max-w-lg">
          <p className="my-10">
            Hello, I’m Nawaf!
          </p>
          <p className="my-10">
            I’m a self-taught full stack developer based in Kerala, India. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </p>
          <p className="my-10">
            Transforming my creativity and knowledge into websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div>
            <button
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm text-white focus:outline-none mt-5"
              style={{ border: "1px solid", borderColor: "#C778DD" }}
            >
              <span
                className="relative px-5 py-2.5"
                style={{ backgroundColor: "#282C33" }}
              >
                Read more ➞
              </span>
            </button>
          </div>
        </div>
        <div className="w-full md:w-auto  lg:w-auto justify-center md:block hidden">
          <img
            src={AboutMeImg}
            alt="About Me"
            className="w-64 h-64 md:w-full md:h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
