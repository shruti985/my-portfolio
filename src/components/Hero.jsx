import React from 'react'
import MyImage from './Shruti3.jpg'
function Hero() {
  return (
    <div
      className="translate flex mx-auto justify-center gap-[1rem] mt-[6rem]"
      id="about"
    >
      <div className="flex flex-col gap-[2rem] sm:max-w-[30%] max-w-[50%] p-2 sm:p-4">
        <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold animate-pulse">
          Hi Stranger! I am Shruti Jain
        </h1>
        <p className="md:text-2xl text-[13px]">
          I’m a B.Tech CSE student at NIT Kurukshetra with a keen interest in
          web development, data structures and algorithms (DSA), and software
          engineering. I love learning new technologies and applying them to
          practical projects. Whether it’s developing intuitive websites,
          solving algorithmic problems, or exploring efficient coding
          techniques, I’m always excited to grow my skills and contribute to
          meaningful work.
        </p>
        <a href="/ShrutiJain_Resume.pdf" download>
          {" "}
          <button
            className="rounded-full p-3 sm:p-5 shadow-md shadow-pink-900 ring-1 ring-gray-400/30 hover:bg-pink-300 w-[150px] dark:shadow-purple-400 dark:ring-purple-400/30
        dark:hover:bg-purple-950 transition-colors duration-100 ease-in"
          >
            Download CV
          </button>
        </a>
      </div>
      <div className=" sm:p-4">
        <img
          src={MyImage}
          className={`border-4 dark:border-gray-400 border-gray-500 rounded-full sm:h-[300px] sm:w-[300px] h-[200px] w-[250px]`}
        ></img>
      </div>
    </div>
  );
}

export default Hero