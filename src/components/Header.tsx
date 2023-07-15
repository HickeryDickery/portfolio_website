import { headerLinks } from "../constants";

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
    <header className="top-0 right-0 left-0 w-full flex justify-center mb-6 sm:m-0 sm:justify-end items-center py-8 px-[10%] z-50">
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

      <div></div>
    </header>
  );
};

export default Header;
