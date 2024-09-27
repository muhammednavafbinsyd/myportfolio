import React from "react";
import FiraDesign from "../assets/Group 36.png";

export default function Skills() {
  return (
    <section className="text-white py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center my-10 sm:my-28">
        <h2 className="text-3xl font-bold text-center sm:text-left">
          <span className="text-purple-500">#</span>skills
        </h2>
        <div className="h-0.5 w-48 sm:w-96 my-4 sm:my-10 bg-purple-500 sm:ml-4"></div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-around items-center">
        {/* Image Section */}
        <div className="hidden md:w-auto lg:w-auto md:block">
          <img
            src={FiraDesign}
            alt="Design Illustration"
            className="w-full h-auto"
          />
        </div>
        {/* Skills Grid */}
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white w-full max-w-5xl p-4">
            {/* Languages Section */}
            <div className="border border-gray-600 p-4">
              <h2 className="text-lg font-bold">Languages</h2>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500" />
              <ul className="mt-2 space-y-1">
                <li>TypeScript</li>
                <li>Php</li>
                <li>JavaScript</li>
              </ul>
            </div>
            {/* Databases Section */}
            <div className="border border-gray-600 p-4 ">
              <h2 className="text-lg font-bold">Databases</h2>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500" />
              <ul className="mt-2 space-y-1">
                <li>Mysql</li>
                <li>Mongo</li>
              </ul>
            </div>
            {/* Tools Section */}
            <div className="border border-gray-600 p-4 ">
              <h2 className="text-lg font-bold">Tools</h2>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500" />
              <ul className="mt-2 space-y-1">
                <li>VSCode</li>
                <li>Figma</li>
                <li>Git</li>
                <li>Font Awesome</li>
              </ul>
            </div>
            {/* Frameworks Section */}
            <div className="border border-gray-600 p-4 ">
              <h2 className="text-lg font-bold">Frameworks</h2>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500" />
              <ul className="mt-2 space-y-1">
                <li>React</li>
                <li>Vue</li>       
                <li>Express.js</li>
              </ul>
            </div>
            {/* Other Section */}
            <div className="border border-gray-600 p-4">
              <h2 className="text-lg font-bold">Other</h2>
              <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500" />
              <ul className="mt-2 space-y-1">
                <li>HTML</li>
                <li>CSS</li>
                <li>EJS</li>
                <li>REST</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
