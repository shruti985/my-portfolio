import React, { useState } from 'react'
function ProjectCard({Image,title,desc,skills,fullDesc}) {
   const [isOpen,setIsOpen]=useState(false);
    function handleIsOpen(){
        setIsOpen(!isOpen);
    }
   return (
     <>
       <div
         onClick={handleIsOpen}
         className={`anim bg-gray-400/10 border border-pink-500 dark:border-purple-400 relative p-2 sm:p-[3rem] space-y-[1rem] transition-all hover:shadow-[2px_2px_10px]  dark:shadow-purple-400 shadow-pink-400 hover:translate-y-[-5px] duration-200`}
       >
         <div
           className={` bg-gray-500 opacity-0 absolute z-50 inset-0 hover:opacity-80 transition duration-10 flex text-2xl font-extrabold justify-center items-center dark:text-purple-900 text-pink-900`}
         >
           Click to view
         </div>
         <img src={Image} alt={title} />
         <h3 className="sm:text-4xl text-2xl font-bold">{title}</h3>
         <div className="flex flex-wrap gap-2">
           <p className={`  sm:p-2 inline-block p-1 `}> {desc}</p>
         </div>
         <div className="flex flex-wrap gap-2">
           {skills.map((skill) => {
             return (
               <p
                 className={`rounded-full p-1 sm:p-2 border border-pink-500 dark:border-purple-400 dark:hover:bg-purple-400 hover:bg-pink-400 inline-block  `}
               >
                 {skill}
               </p>
             );
           })}
         </div>
       </div>
       {isOpen && (
         <div
           className={`flex items-center justify-center dark:bg-purple-900 text-white bg-pink-900 opacity-90 fixed z-50 inset-0 backdrop-blur `}
         >
           <div className="flex flex-col h-[90vh] gap-[1rem] w-[50vw] sm:p-2 p-1 overflow-y-auto">
             <button
               onClick={handleIsOpen}
               className="
                 dark:text-white text-black
                text-3xl font-bold"
             >
               &times;
             </button>
             <img
               src={Image}
               className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl h-[55%]"
             />
             <h3 className="sm:text-4xl text-2xl font-bold">{title}</h3>
             <p>{fullDesc}</p>
             <button
               className={`rounded-full p-3 sm:p-5 shadow-lg  dark:shadow-purple-300 dark:hover:bg-purple-900 dark:bg-purple-50 shadow-pink-900 hover:bg-pink-600 bg-pink-400`}>
               View Code
             </button>
           </div>
         </div>
       )}
     </>
   );
}

export default ProjectCard