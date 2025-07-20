import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useSwipeable } from 'react-swipeable';
const skillsData = [
  {
    title: "Frontend",
    skills: [
      "Html",
      "CSS",
      "JavaScript",
      "ReactJs",
      "Tailwind CSS",
      "BootStrap",
    ],
  },
  {
    title: "Backend",
    skills: ["NodeJs", "MongoDB", "ExpressJs"],
  },
  {
    title: "Languages",
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "PostMan", "Docker", "VS Code"],
  },
];

function Skills() {
    const linestyle="dark:decoration-purple-400 decoration-pink-400";
      const [index, setIndex] = useState(0);
       const [isMobile, setIsMobile] = useState(false);
       useEffect(() => {
         const checkMobile = () => {
           setIsMobile(window.innerWidth <= 768); 
         };
         checkMobile();
         window.addEventListener("resize", checkMobile);
         return () => window.removeEventListener("resize", checkMobile);
       }, []);
      const handlers = useSwipeable({
        onSwipedLeft: () => setIndex((index + 1) % 4),
        onSwipedRight: () =>
          setIndex((index - 1 + 4) % 4),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
      });
  return (
    <>
      <div id="skills">
        <h2
          className={`mx-auto text-3xl sm:text-5xl font-bold flex justify-center intems-center mt-[6rem] underline ${linestyle} underline-offset-5`}
        >
          SKILLS
        </h2>
      </div>
      <div
        {...(isMobile ? handlers : {})}
        className="md:grid space-y-[1.5rem] grid-cols-2 grid-rows-2 gap-[2rem] mx-auto w-[50%] mt-20"
      >
        {skillsData.map((item, i) =>
          isMobile ? (
            i === index && (
              <Card key={i} skills={item.skills} title={item.title} />
            )
          ) : (
            <Card key={i} skills={item.skills} title={item.title} />
          )
        )}
      </div>
      {isMobile && (
        <div className="flex justify-center mt-4 space-x-2">
          {skillsData.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-black scale-110" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Skills