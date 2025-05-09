import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
          consequuntur labore nemo ullam eos soluta qui, architecto placeat
          dolore exercitationem odio maxime harum eaque ipsa, unde molestias
          sunt tempore ab culpa quia explicabo ad in eveniet! Quisquam quaerat
          iste veniam reprehenderit laborum quibusdam hic, eligendi deleniti
          aliquam distinctio itaque rem!
        </p>

        <br />

        <p className="text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          dolorum quis voluptatum sed qui obcaecati nulla pariatur labore
          tempora deserunt, repellendus ipsam in voluptatibus? Sunt aliquid sit
          magni? Quas quo debitis quam architecto culpa expedita repellendus
          quod! Adipisci dolorem totam magnam deleniti, consequatur quae
          exercitationem, eaque quisquam doloremque earum vero!
        </p>
      </div>
    </div>
  );
};

export default About;
