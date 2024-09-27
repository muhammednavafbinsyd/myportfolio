import React from "react";
import IconBudingtuning from '../assets/Web_capture_1-11-2023_94336_-removebg.png';
import IconCastmee from '../assets/castmee footer logo.png' 

export default function Projects() {
  const projects = [
    {
      name: "Bodytuning",
      description: "Fitness web application",
      technologies: ["React", "Node", "Express", "Mongo"],
      buttons: [
        { text: "Live", link: "https://body-tuning-fitness.vercel.app/" },
        { text: "GitHub", link: "https://github.com/muhammednavafbinsyd/BodyTuning.git" },
      ],
      image: IconBudingtuning
    },
    {
      name: "Castmee",
      description: "Talent community platform",
      technologies:[
        "HTML",
        "CSS",
        "React",
        "Bootstrap",
        "Meterial UI",
        "Express",
        "Node.js",
        "Mongo",
      ],
      buttons: [
        { text: "Live", link: "https://castmee.netlify.app/" },
        { text: "GitHub", link: "https://github.com/muhammednavafbinsyd/Castmee.git" },
      ],
      image: IconCastmee,
    },
    {
      name: "Weather app ",
      description: "Seacrh locations get live weather updates",
      technologies: ["Vue", "Bootstrap" ,"Node", "Express","Mongo"],
      buttons: [
        { text: "GitHub", link: "https://github.com/muhammednavafbinsyd/Weather-app.git" },
      ],
      image: "path-to-kahoot-image",
    },
  ];

  return (
    <section className="text-white py-10 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
      <div className="flex items-center">
        <h2 className="text-3xl font-bold">
          <span className="text-purple-500">#</span>projects
        </h2>
        <div className="h-0.5 w-96 my-10 bg-purple-500 ml-4"></div>
      </div>
      <div className="text-right my-10 ">
        <a href="/projects" className="text-white">
          View all ➞
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project,index) => (
          <div key={index} className="p-5 border border-gray-600 ">
            <img
              src={project.image}
              alt={project.name}
              className="w-52 h-48 object-cover rounded-lg mb-4"
            />
            
            <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm text-gray-400 mb-4">
              {project.technologies.join(" | ")}
            </p>
            <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-500" />
            <div className="flex space-x-2">
              {project.buttons.map((button, idx) => (
                <a
                  key={idx}
                  href={button.link}
                  className="border border-purple-500 text-white px-4 py-2"
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
