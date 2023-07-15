import { Link } from "react-router-dom";
import { text, textWhite } from "../assets";

const HireMe = ({ theme }: { theme: string }) => {
  return (
    <div className="lg:ml-10 max-lg:mt-4 w-40 h-40 sm:h-60 sm:w-60 lg:h-80 lg:w-80">
      <div className="relative flex justify-center items-center">
        <img
          src={theme === "dark" ? textWhite : text}
          alt="Full Stack"
          // height={800}
          // width={800}
          className="object-cover animate-spin-slow"
        />

        <Link
          to="/contact"
          className="absolute flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black dark:border-white hover:bg-black hover:text-white hover:dark:text-black hover:dark:bg-white hover:border-white hover:dark:border-black h-[50%] w-[50%] font-semibold transition-all duration-150 ease-in-out"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
