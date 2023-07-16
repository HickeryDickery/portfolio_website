import { headerLinks } from "../constants";
import { logo, logoWhite } from "../assets";
import { Link } from "react-router-dom";

const Header = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleThemeChange = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setTheme(localStorage.theme);
  };

  return (
    <header className="top-0 right-0 left-0 w-full flex flex-col sm:flex-row gap-4 sm:gap-0 justify-center mb-6 sm:m-0 sm:justify-between items-center py-8 sm:pr-[15%] sm:pl-[8%] z-10">
      <Link to="/" className="flex gap-2">
        <img src={theme === "dark" ? logoWhite : logo} height={24} width={24} />
        <p className=" text-lg">
          <span className="font-bold">Khizar</span> Nawab
        </p>
      </Link>
      <div className="flex flex-row items-center">
        <ul className="flex gap-6 mr-6">
          {headerLinks.map((link, index) => (
            <li key={link.name}>
              <a
                key={index}
                href={link.path}
                target="_blank"
                rel="noreferrer"
                className=""
              >
                <img
                  src={`${
                    theme === "dark" ? link.icons.dark : link.icons.light
                  }`}
                  alt={`${link.name} icon`}
                  className="h-6 w-6 object-cover hover:scale-125 transition-all duration-100 ease-in-out"
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="w-[1px] h-[20px] bg-gray-700" />

        <div className="ml-6">
          <label className="switch link hover:scale-125 transition-all duration-100 ease-in-out">
            <input
              type="checkbox"
              onClick={() => handleThemeChange()}
              checked={theme === "light"}
            />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
