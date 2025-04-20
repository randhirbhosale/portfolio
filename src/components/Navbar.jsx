import { useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        randhir.dev
      </h1>
      <ul className="flex items-center space-x-6 text-gray-700 dark:text-gray-200">
        <li><a href="#projects" className="hover:underline">Projects</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li><a href="#resume" className="hover:underline">Resume</a></li> {/* Added Resume link */}
        <li>
          <button onClick={toggleDarkMode} className="hover:text-yellow-500 transition">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </li>
      </ul>
    </nav>
  );
}

