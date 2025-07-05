import React from 'react'

function Card({skills,title}) {
    
  return (
    <div
      className={`anim bg-gray-400/10 border  border-pink-500 dark:border-purple-400 dark:shadow-purple-300
         shadow-pink-300 p-2 sm:p-[3rem] shadow-md rounded-xl space-y-[1rem] transition-all hover:shadow-[2px_2px_10px]
         dark:hover:shadow-purple-900 hover:shadow-pink-400 hover:translate-y-[-5px] duration-200`}
    >
      <h3 className="md:text-4xl text-[17] sm:text-2xl font-bold ">{title}</h3>
      <div className="flex flex-wrap sm:gap-2 gap-[0.5rem] ">
        {skills.map((skill) => {
          return (
            <p
              className={`md:text-xl sm:text-[13px] text-[10px] rounded-full md:p-3 border sm:p-2  border-pink-500 dark:border-purple-400 dark:hover:bg-purple-400 hover:bg-pink-400 inline-block p-2 `}
            >
              {skill}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Card