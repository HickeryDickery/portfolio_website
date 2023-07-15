import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { navLinks } from "../constants";
import { motion } from "framer-motion";

const Navbar = ({ theme }: { theme: string }) => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("home");
    } else {
      setActive(location.pathname.replace("/", ""));
    }
  }, [location]);

  return (
    <nav className="flex justify-center items-center fixed bottom-0 w-full h-20 sm:top-0 sm:right-2 sm:h-screen sm:w-20 z-50">
      <ul className=" max-sm:w-full sm:h-[45%] sm:max-h-[400px] flex justify-between items-center flex-row sm:flex-col navBackground p-1 text-xs m-2">
        {navLinks.map((link) => (
          <li
            key={link.name}
            className={`rounded-lg w-full relative font-semibold ${
              active === link.name.toLowerCase() && "text-white dark:text-black"
            }`}
          >
            {active === link.name.toLowerCase() && (
              <motion.div
                layoutId="background"
                className="absolute rounded-lg h-full w-full -z-10 bg-black dark:bg-white"
              />
            )}
            <Link className="link" to={`${link.path}`}>
              <div
                className={`flex flex-col justify-center items-center p-2 transition-all duration-150 ease-in-out ${
                  active !== link.name.toLowerCase() && "hover:scale-125"
                }`}
              >
                <img
                  src={
                    (theme === "dark" && active === link.name.toLowerCase()) ||
                    (theme === "light" && active !== link.name.toLowerCase())
                      ? link.icons.dark
                      : link.icons.light
                  }
                  alt={`${link.name} icon`}
                />
                <span>{link.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
