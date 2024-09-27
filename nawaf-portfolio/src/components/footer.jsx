import React from "react";
import Logo from "../assets/NF (1).png";
import Github from "../assets/GitHub(icon).png";
import Twitter from "../assets/Twittet(icon).png";


export default function Footer() {
  return (
    <div>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-500" />
      <section className="text-white py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div class="grid grid-rows-4 grid-flow-col gap-4 md:justify-center">
            <div className="flex items-center gap-2">
              <div>
                <img src={Logo} className="w-6" alt="Logo" />
              </div>
              <div>
                <h3>Nawaf</h3>
              </div>
              <div>
                <a href="muhammednavafbinsyd@gmail.com">muhammednawafdev</a>
              </div>
            </div>
            <div>
              <p>Wordpress designer and full stack developer</p>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl">Media</h1>
            </div>
            <div className="flex items-center justify-center gap-3 my-3"> 
              <div>
                <img src={Github} alt="No Img" />
              </div>
              <div>
                <img src={Twitter} alt="No Img" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
          <div className="items-center justify-center w-full" >
            <p className="text-center">© Copyright 2023. Made by Nawaf</p>
          </div>
      </section>
    </div>
  );
}
