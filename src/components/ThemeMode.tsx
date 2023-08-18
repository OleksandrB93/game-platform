import { useState, useEffect } from "react";
import MoonIcon from "../CustomIcons/MoonIcon";
import SunIcon from "../CustomIcons/SunIcon";

const ThemeMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="lg:absolute lg:-top-2 lg:left-8 pt-1">
      <button className="theme-toggle-button" onClick={toggleTheme}>
        {theme === "light" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ThemeMode;
