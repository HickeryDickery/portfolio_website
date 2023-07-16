import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import { Navbar, Header, Footer } from "./components";
import { Landing } from "./pages";
import FOG from "vanta/src/vanta.fog.js";
import { vantConfigDark, vantConfigLight } from "./styles";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const [theme, setTheme] = useState("dark");
  let vantaInstance: { destroy: () => void } | null = null;

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
      localStorage.theme = "dark";
      // eslint-disable-next-line react-hooks/exhaustive-deps
      vantaInstance = FOG(vantConfigDark);
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
      localStorage.theme = "light";
      vantaInstance = FOG(vantConfigLight);
    }

    return () => {
      vantaInstance?.destroy();
    };
  }, [theme]);

  return (
    <div className="w-screen min-h-screen m-0 p-0 flex flex-col">
      <BrowserRouter>
        <Landing theme={theme} />
        <AnimatedCursor
          color={theme === "dark" ? "0,0,0" : "255, 255, 255"}
          innerSize={8}
          outerSize={40}
          innerScale={1}
          outerScale={1.5}
          outerStyle={{
            backgroundColor: "white",
            mixBlendMode: "difference",
          }}
          trailingSpeed={7}
        />
        <Navbar theme={theme} />
        <Header theme={theme} setTheme={setTheme} />

        {/* <button
          type="button"
          onClick={() => {
            localStorage.theme =
              localStorage.theme === "dark" ? "light" : "dark";
            setTheme(localStorage.theme);
            // window.location.reload();
          }}
        >
          Change Dark Mode
        </button> */}

        <AnimatedRoutes theme={theme} />

        <div
          id="background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
