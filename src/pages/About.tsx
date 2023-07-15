import { Transition } from "../components";
import { me } from "../assets";
import { motion } from "framer-motion";
import { skills } from "../constants";

const About = () => {
  return (
    <div className="sm:pr-[15%] sm:pl-[8%] max-sm:mx-[10%] flex flex-1 flex-col my-auto items-center justify-center">
      <div>
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 font-bold">
            Biography
          </h1>
          <div className="flex flex-col-reverse md:flex-row gap-10 sm:pl-[4px] max-lg:items-center justify-between">
            <p className="text-sm md:text-base md:max-w-[65%]">
              <span className="text-2xl">Hi there! </span> <br /> <br />
              I'm Khizar Nawab, a passionate and experienced full stack web
              developer. Coding and problem-solving are my true calling, and I
              pour my heart into creating extraordinary web applications.
              <br /> <br /> With a deep understanding of front-end and back-end
              development, I bring ideas to life with seamless web experiences.
              From HTML, CSS, and JavaScript to cutting-edge frameworks like
              React and Node.js, I harness the power of technology to deliver
              exceptional results.
              <br /> <br /> I thrive on tackling complex challenges head-on.
              Whether it's optimizing user interfaces, fine-tuning databases for
              maximum efficiency, or pushing the boundaries of performance, I
              revel in finding elegant and innovative solutions that surpass
              expectations.
              {/* <br /> <br /> Crafting clean and maintainable code is not just a
              habit; it's a commitment. I adhere to industry best practices,
              following rigorous standards to ensure robust and scalable
              applications that endure the test of time. Constantly staying
              abreast of emerging trends and technologies, I strive to deliver
              forward-thinking solutions. */}
              <br /> <br /> But it's not just about coding for me. It's about
              creating meaningful experiences that make a difference. I'm driven
              by the desire to make a positive impact through my work. Every
              line of code I write is infused with passion and purpose, as I aim
              to contribute to a better digital landscape.
            </p>
            <motion.div
              animate={{
                y: ["-7px", "7px"], // Animation range: move up 10px and down 10px
              }}
              transition={{
                duration: 2, // Duration of each animation cycle (2 seconds in this example)
                repeat: Infinity, // Repeat the animation infinitely
                repeatType: "reverse", // Reverse the animation when repeating
                ease: "easeInOut", // Easing function for smooth animation
              }}
              className="flex relative xs:max-w-[40%]"
            >
              <div className="absolute top-0 w-full h-full bg-black dark:bg-white rounded-lg m-2" />
              <img
                src={me}
                alt="profile picture"
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out rounded-lg  border-2 border-black dark:border-white w-full bg-white dark:bg-black"
              />
            </motion.div>
          </div>
        </div>

        <div className="mt-16 lg:mt-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl mb-8 font-bold text-center">
            Technologies I've Worked With
          </h2>
          <ul className="flex justify-center gap-10 flex-wrap  sm:mx-20 lg:mx-40 my-16 lg:my-20">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="flex flex-col justify-center items-center"
              >
                <img src={skill.icon} width={70} height={70} alt={skill.name} />
                <span className="text-sm font-semibold">{skill.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Transition />
    </div>
  );
};

export default About;
