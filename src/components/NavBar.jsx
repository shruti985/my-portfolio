import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

function NavBar() {
  const [darktheme, setDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDark(false);
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  function toggleDarkMode() {
    const newtheme = !darktheme;
    setDark(newtheme);
    document.documentElement.classList.toggle("dark");
    if (newtheme) localStorage.setItem("theme", "dark");
    else localStorage.setItem("theme", "light");
  }
  const bracket = "dark:text-purple-500 text-pink-500";
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex justify-center items-center gap-[3rem] p-3 sm:p-4 border-b dark:border-purple-300 border-pink-300 fixed top-0 w-full ${
          scrolled ? " bg-gray-500 text-white backdrop-blur-xl" : ""
        }`}
      >
        <p>
          <span className="font-semibold text-2xl">
            <span className={bracket}>&lt;</span>Shruti
            <span className={bracket}> /</span> Jain
            <span className={bracket}>&gt;</span>
          </span>
        </p>
        <div className="flex gap-[1rem]">
          {menuItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              <p>{item.label}</p>
            </a>
          ))}
        </div>
        <div className="flex gap-[1rem]">
          <a href="https://github.com/shruti985" target="_blank" title="GitHub">
            <p>
              <FaGithub size={24} />
            </p>
          </a>
          <a href="https://linkedin.com" target="_blank" title="LinkedIn">
            <p>
              <FaLinkedin size={24} />
            </p>
          </a>
        </div>
        <div className="fixed top-4 right-16 z-50">
          <button
            onClick={toggleDarkMode}
            title={darktheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
            className="text-2xl p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darktheme ? (
              <FiSun className="text-yellow-400" size={24} />
            ) : (
              <FiMoon className="text-blue-500" size={24} />
            )}
          </button>
        </div>
      </div>

      <button
        onClick={toggleDarkMode}
        title={darktheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        className="mt-3 ml-2 md:hidden text-2xl p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {darktheme ? (
          <FiSun className="text-yellow-400" size={30} />
        ) : (
          <FiMoon className="text-blue-500" size={30} />
        )}
      </button>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        {isOpen ? (
          <FiX
            className="text-3xl dark:text-[#8245ec] text-pink-400 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FiMenu
            className="text-3xl dark:text-[#8245ec] text-pink-400 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-40 rounded-lg shadow-lg md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id} className="cursor-pointer hover:text-white">
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
            <div className="flex space-x-4">
              <a
                href="https://github.com/shruti985"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}

export default NavBar;
