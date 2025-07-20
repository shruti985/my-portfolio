import React, { useEffect, useState } from 'react'
import MyImage from './Shruti3.jpg'
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Hero() {
         const [isMobile, setIsMobile] = useState(false);
         const linestyle = "dark:decoration-purple-400 decoration-pink-400";
         useEffect(() => {
           const checkMobile = () => {
             setIsMobile(window.innerWidth <= 768); 
           };
           checkMobile();
           window.addEventListener("resize", checkMobile);
           return () => window.removeEventListener("resize", checkMobile);
         }, []);
  return (
    <div
      className="translate flex mx-auto justify-center gap-[1rem] mt-[6rem] flex-col sm:flex-row"
      id="about"
    >
      <div className="flex flex-col gap-[2rem] sm:max-w-[30%] max-w-[90%] p-2 sm:p-4 mt-[20vh] sm:mt-0 sm:mx-0 mx-auto">
        <h1 className="md:text-5xl sm:text-4xl text-5xl font-bold animate-pulse">
          <span>Hi Stranger!</span>
          <br /> <span className='text-pink-500 dark:text-purple-500 '>I am Shruti Jain</span>
        </h1>
        {!isMobile && (
          <p className="md:text-2xl">
            I’m a B.Tech CSE student at NIT Kurukshetra with a keen interest in
            web development, data structures and algorithms (DSA), and software
            engineering. I love learning new technologies and applying them to
            practical projects. Whether it’s developing intuitive websites,
            solving algorithmic problems, or exploring efficient coding
            techniques, I’m always excited to grow my skills and contribute to
            meaningful work.
          </p>
        )}

        <a href="/ShrutiJain_Resume.pdf" download>
          {" "}
          <button
            className="rounded-full p-5 shadow-md shadow-pink-900 ring-1 ring-gray-400/30 hover:bg-pink-300 w-[150px] dark:shadow-purple-400 dark:ring-purple-400/30
        dark:hover:bg-purple-950 transition-colors duration-100 ease-in mt-8 sm:mx-0 mx-auto"
          >
            Download CV
          </button>
        </a>
        {isMobile && (
          <div className="flex gap-[1rem] mx-auto mt-12">
            <a
              href="https://github.com/shruti985"
              target="_blank"
              title="GitHub"
            >
              <p>
                <FaGithub size={55} />
              </p>
            </a>
            <a href="https://linkedin.com" target="_blank" title="LinkedIn">
              <p className="bg-blue-600 p-1 text-white">
                <FaLinkedin size={44} />
              </p>
            </a>
          </div>
        )}

        {isMobile && (
          <>
            <h2
              className={`mx-auto text-4xl sm:text-5xl font-bold flex justify-center intems-center mt-24 underline ${linestyle} underline-offset-5`}
            >
              About Me
            </h2>
            <p className="text-center text-xl sm:text-2xl font-semibold text-black-600 dark:text-white-400 mt-4 italic">
              Here's a little about me and my journey so far.
            </p>
          </>
        )}
      </div>
      <div className="sm:mx-0 mx-auto sm:p-4">
        <img
          src={MyImage}
          className={` ${
            isMobile ? "mt-6" : ""
          } border-4 dark:border-gray-400 border-gray-500 rounded-full sm:h-[300px] sm:w-[300px] h-[200px] w-[200px]`}
        ></img>
      </div>
      {isMobile && (
        <p className="md:text-2xl text-xl p-[1rem]">
          I’m a B.Tech CSE student at NIT Kurukshetra with a keen interest in
          web development, data structures and algorithms (DSA), and software
          engineering. I love learning new technologies and applying them to
          practical projects. Whether it’s developing intuitive websites,
          solving algorithmic problems, or exploring efficient coding
          techniques, I’m always excited to grow my skills and contribute to
          meaningful work.
        </p>
      )}
    </div>
  );
}

export default Hero