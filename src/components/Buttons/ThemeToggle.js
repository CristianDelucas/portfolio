import React, { useEffect, useState } from "react";
import { BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light"
  );

  const handleClick = () => {
    switch (theme) {
      case "dark":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      default:
        setTheme("light");
        break;
    }
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.setItem("theme", "light");
        break;
    }
  }, [theme]);

  return (
    <button
      id="theme-toggle"
      type="button"
      onClick={handleClick}
      className=" fixed bottom-3 right-3 w-12 rounded-full bg-slate-600 p-2.5  text-sm  text-gray-900  dark:text-gray-400  z-20"
    >
      {theme === "light" ? (
        <MdDarkMode
          style={{ width: "100%", height: "auto", borderRadius: '100%' }}
          data-aos="zoom-in"
        />
      ) : (
        <BsSun style={{ width: "100%", height: "auto", borderRadius: '100%' }} data-aos="zoom-in" />
      )}
    </button>
  );
};

export default ThemeToggle;
