import React from 'react'
import NITKKR from "./NITKKR.png";
import SDVN from "./SDVN.webp"


function Education() {
  return (
    <>
      <div id="education">
        <h2
          className={`mx-auto text-3xl sm:text-5xl font-bold flex justify-center intems-center mt-[6rem] 
            dark:decoration-purple-400 decoration-pink-400 underline underline-offset-5`}
        >
          Education
        </h2>
      </div>
      <div className="mx-auto m-[3rem] w-[60vw] sm:gap-[3rem] space-y-[2rem]">
        <EduCard
          name="NIT Kurukshetra"
          timeline="Aug 2024-Apr 2028"
          degree="Bachelor of Technology-B.Tech (Computer Science)"
          grade="9.4"
          image={NITKKR}
        />
        <EduCard
          name="Savitri Devi Vidya Niketan,Punhana"
          timeline="2022-2023"
          degree="CBSE(XII) - PCM"
          desc="Helloooooo"
          grade="96.8%"
          image={SDVN}
        />
      </div>
    </>
  );
}
function EduCard({degree,image,timeline,grade,name}){
    return (
      <div
        className={`mx-auto bg-gray-400/10 anim flex flex-col gap-2 border p-3 border-pink-500 dark:border-purple-400 rounded-2xl shadow-[2px_2px_10px]
           dark:shadow-purple-400 shadow-pink-400 transform duration-200 hover:scale-[1.06]`}
      >
        <div className="flex gap-[2rem] sm:gap-[3rem]">
          <div>
            <img
              className="h-[70px] w-[110px] sm:h-base sm:w-base"
              src={image}
              alt="clg image"
            />
          </div>
          <div>
            <h2 className="font-bold sm:text-2xl text-xl">{degree}</h2>
            <p className={`font-semibold`}>{name}</p>
            <p className="text-gray-600 text-[15px]">{timeline}</p>
          </div>
        </div>
        <p className="text-gray-600 font-bold">Grade: {grade}</p>
        {/* <p>{desc}</p> */}
      </div>
    );
}

export default Education