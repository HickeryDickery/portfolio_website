import { Transition } from "../components";
import { chevronRight, chevronWhite } from "../assets";
// import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { HireMe } from "../components";

const Home = ({ theme }: { theme: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[8%] flex flex-1 my-auto items-center">
      <div className="flex flex-col lg:flex-row w-full justify-between items-center max-w-6xl">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold">
            Crafting Exceptional Web Experiences
          </h1>
          <div>
            <span className="text-xl md:pl-[3px]">Hi, my name is</span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              KHIZAR NAWAB
            </h2>
            <p className="mb-6 md:pl-[3px]">
              I specialize in crafting captivating digital experiences that
              combine the power of front-end and back-end technologies. With a
              passion for turning ideas into reality, I bring together the art
              of design and the science of development to deliver seamless web
              solutions that leave a lasting impression.
            </p>

            <Link to="/projects">
              <button
                className="border-2 border-black dark:border-white hover:text-white dark:hover:text-black hover:bg-black hover:dark:bg-white hover:border-white hover:dark:border-black rounded-lg p-4 transition-all duration-150 ease-in-out"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div className="flex items-center justify-center">
                  My Projects
                  <img
                    src={
                      (theme === "light" && !hover) ||
                      (theme === "dark" && hover)
                        ? chevronRight
                        : chevronWhite
                    }
                    alt="chevron right"
                    className="ml-4"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* <HireMe theme={theme} /> */}
      </div>
      <Transition />
    </div>
  );
};

export default Home;
