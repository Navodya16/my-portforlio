import React from "react";
import cpp from "../assets/skills/cpp.png";
import java from "../assets/skills/java.png";
import python from "../assets/skills/python.jpg";
import javascript from "../assets/skills/javascript.png";
import reacts from "../assets/skills/react.jpg";
import spring from "../assets/skills/spring.png";

const Skills = () => {
  const skills = [
    { id: 1, src: cpp, title: "C++", style: "shadow-blue-500" },
    { id: 2, src: java, title: "Java", style: "shadow-orange-500" },
    { id: 3, src: python, title: "Python", style: "shadow-blue-500" },
    { id: 4, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 5, src: reacts, title: "React", style: "shadow-blue-500" },
    { id: 6, src: spring, title: "Spring", style: "shadow-orange-500" },
  ];

  return (
    <div
      name="Skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technlogies I have worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
