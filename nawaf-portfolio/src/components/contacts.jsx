import React from "react";
import EmailPng from "../assets/Vector.png";
import LinkedInPng from "../assets/Vector (1).png";

export default function Contacts() {
  return (
    <section className="text-white py-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center my-10 sm:my-28">
        <h2 className="text-3xl font-bold text-center sm:text-left">
          <span className="text-purple-500">#</span>contacts
        </h2>
        <div className="h-0.5 w-48 sm:w-96 my-4 sm:my-10 bg-purple-500 sm:ml-4"></div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left max-w-lg">
          <p className="text-lg leading-relaxed">
            I’m interested in freelance opportunities. However, if you have
            another request or question, don’t hesitate to contact me.
          </p>
        </div>
        <div className="box-content w-full max-w-xs p-6 border border-gray-500 ">
          <div className="mb-4">
            <h4 className="text-xl font-semibold text-center md:text-left text-gray-500">
              Message me <span className="text-white"> here</span>
            </h4>
          </div>
          <div className="flex  items-center  py-2 gap-3">
            <div>
              <img className="w-6 h-6" src={EmailPng} alt="Email" />
            </div>
            <div>
              <a className="text-sm">navafnaz555@gmail.com</a>
            </div>
          </div>
          <div className="flex items-center py-2 gap-3">
            <div>
              <img className="w-6 h-6" src={LinkedInPng} alt="LinkedIn" />
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/muhammed-nawaf-t-t-93a167275"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm "
              >
                muhammed nawaf tt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
