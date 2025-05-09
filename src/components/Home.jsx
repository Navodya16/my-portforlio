import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="Home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex flex-col items-center justify-center"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center px-4 md:flex-row">
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I am a Software Engineer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            i have 4 years of experience building and designing software
            currently, i love to work on web applications using technologies
            like react, php.
          </p>
          <div>
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 sm:my-1 mb-2 sm:mb-0 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Portforlio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full mt-2 sm:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
