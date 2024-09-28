import { useState, useEffect } from "react";
import { darkswitch } from "../assets/icons";
const DarkSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <button onClick={toggleDarkMode} className="p-2 bg-slate-500 rounded-lg">
      <img src={darkswitch} alt="dark switch icon" className="w-6 h-6" />
    </button>
  );
};

export default DarkSwitch;
