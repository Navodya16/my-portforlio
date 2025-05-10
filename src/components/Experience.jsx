import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Faculty of Engineering, University of Sri Jayewardenepura",
      position: "Research Assistant",
      period: "Sep 2024 - Present",
      location: "Colombo, Sri Lanka",
      summary:
        "Works in research projects related to Machine Learning, Image Processing and Computer Vision.",
    },
    {
      id: 2,
      company: "Synopsys Lanka (Pvt) Ltd",
      position: "Research & Development Intern",
      period: "Feb 2023 - Aug 2023",
      location: "Colombo, Sri Lanka",
      summary:
        "Worked as a R&D intern in the Zebu Front-end team to test and debug issues in the HDL designs",
    },
  ];

  return (
    <div
      name="Experience"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map(
            ({ id, company, position, period, location, summary }) => (
              <div key={id} className="bg-gray-900 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">{company}</h3>
                <p className="text-xl text-indigo-400 font-medium">
                  {position}
                </p>
                <p className="text-gray-400 text-sm">
                  {period} | {location}
                </p>
                <p className="mt-4 text-gray-300">{summary}</p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
