import { Transition } from "../components";
import { Link } from "react-router-dom";
import { proj } from "../constants";
import { clip, clipWhite, github, githubWhite } from "../assets";

const Projects = ({ theme }: { theme: string }) => {
  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 flex-col my-auto items-center justify-center">
      <div>
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold text-center">
            Passion begets Perfection
          </h1>
          <h2 className="text-center">
            Discover the diverse range of projects I have undertaken, showcasing
            my expertise in creating dynamic websites and applications. From
            responsive designs that adapt beautifully to any device, to scalable
            back-end systems that handle complex data interactions, each project
            in my portfolio demonstrates my commitment to quality and
            excellence.
          </h2>
        </div>
        <ul className="flex flex-col justify-center items-center">
          {proj.map((project, index) => (
            <li
              key={project.name}
              className={`flex w-full items-center justify-center my-10 flex-col md:gap-0 bg-white dark:bg-black md:bg-transparent md:dark:bg-transparent border-2 border-black dark:border-white md:border-0 p-4 md:p-0 rounded-lg ${
                index % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="relative flex rounded-lg dark:bg-white bg-black md:hover:scale-[102%] transition-all duration-150 ease-in-out">
                <img
                  src={project.image}
                  alt={`${project.name} image`}
                  className=" aspect-[5/3] md:max-w-[500px] w-full h-full object-cover rounded-lg md:border-2 border-black dark:border-white"
                />
              </div>
              <div
                className={`relative w-full md:w-[50%] bg-white dark:bg-black md:border-2 rounded-lg border-black dark:border-white py-6 md:p-6 z-10 md:hover:scale-[102%] transition-all duration-150 ease-in-out ${
                  index % 2 == 0
                    ? "md:-ml-[25%] lg:-ml-[10%]"
                    : "md:-mr-[25%] lg:-mr-[10%]"
                }`}
              >
                <div className="flex justify-between">
                  <h2 className="text-xl sm:text-3xl font-bold mb-4">
                    {project.name}
                  </h2>
                  <div className="flex gap-4">
                    <Link
                      to={project.github}
                      target="_blank"
                      className="w-8 h-8 rounded-full flex justify-center items-center bg-black dark:bg-white hover:scale-150 transition-all duration-150 ease-in-out"
                    >
                      <img
                        src={theme === "dark" ? github : githubWhite}
                        width={20}
                        height={20}
                        className="w-1/2 h-1/2 object-contain "
                      />
                    </Link>

                    {project.deployment !== "" && (
                      <Link
                        to={project.deployment}
                        target="_blank"
                        className="w-8 h-8 rounded-full flex justify-center items-center bg-black dark:bg-white hover:scale-150 transition-all duration-150 ease-in-out"
                      >
                        <img
                          src={theme === "dark" ? clip : clipWhite}
                          width={20}
                          height={20}
                          className="w-1/2 h-1/2 object-contain "
                        />
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-sm  pl-[3px]">{project.description}</p>
                <ul className="flex flex-wrap justify-start gap-x-4 mt-6 pl-[3px]">
                  {project.tags.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-gray-500 dark:text-gray-400"
                    >
                      #{tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Transition />
    </div>
  );
};

export default Projects;
