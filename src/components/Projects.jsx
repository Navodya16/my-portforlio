import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Audio to Visual Weather News Converter",
      tech: [
        "Python",
        "Flask",
        "PyQt5",
        "Hugging Face",
        "Stable Diffusion",
        "Runway ML",
        "NLP",
        "GCP",
      ],
      github:
        "https://github.com/Weather-News-FYP/Audio-to-visual-weather-news-conversion-with-generativeAI",
    },
    {
      id: 2,
      name: "E Channeling Application",
      tech: [
        "Java",
        "Spring Boot",
        "Eclipse",
        "PostgreSQL",
        "Openfeign",
        "REST APIs",
        "Microservices",
        "React",
      ],
      github: "https://github.com/JeewanthaSenanayake/eChannelling",
    },
    {
      id: 3,
      name: "Medical Condition Prediction and Drug Recommender System",
      tech: ["Python", "React", "Node js", "Flask", "NLP", "NLTK", "MySQL"],
      github:
        "https://github.com/Navodya16/medical-condition-classification-and-drug-recommendation-system-",
    },
    {
      id: 4,
      name: "Covid protocol Assistance System",
      tech: [
        "React",
        "MongoDB",
        "Express.js",
        "Node.js",
        "TensorFlow",
        "Tailwind CSS",
        "Python",
        "Embedded System",
      ],
      github: "https://github.com/CovidPro",
    },
    {
      id: 5,
      name: "Quiz Generation Application - Individual",
      tech: [
        "Java",
        "Spring Boot",
        "Eclipse",
        "PostgreSQL",
        "Openfeign",
        "REST APIs",
        "Microservices",
        "React",
      ],
      github:
        "https://github.com/Navodya16/quiz-application-using-microservices",
    },
    {
      id: 6,
      name: "Smart Mirror Project - Research",
      tech: [
        "Python",
        "Computer Vision",
        "Open CV",
        "PyQt",
        "ML&DL algorithms",
      ],
      github: "https://github.com/DasuniHerath/Face-Recognition",
    },
  ];

  return (
    <div
      name="Projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, name, tech, github }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg p-4 hover:scale-105 duration-300 flex flex-col justify-between"
            >
              <h2 className="text-2xl font-semibold mb-2 text-center">
                {name}
              </h2>
              <ul className="text-gray-300 text-sm mb-4 list-disc list-inside">
                {tech.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 text-white px-4 py-2 mt-auto rounded text-center hover:bg-blue-700 transition"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
