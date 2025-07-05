import React from 'react'
import Card from './Card'

function Skills() {
    const linestyle="dark:decoration-purple-400 decoration-pink-400";
  return (
    <>
    <div id="skills">
        <h2 className={`mx-auto text-3xl sm:text-5xl font-bold flex justify-center intems-center mt-[6rem] underline ${linestyle} underline-offset-5`}>SKILLS</h2>
    </div>
      <div className="md:grid space-y-[1.5rem] grid-cols-2 grid-rows-2 gap-[2rem] mx-auto w-[50%] mt-20">
        <Card
          skills={["Html", "CSS", "JavaScript", "ReactJs", "Tailwind CSS","BootStrap"]}
          title="Frontend"
        />
        <Card skills={["NodeJs", "MongoDB", "ExpressJs"]} title="Backend" />
        <Card
          skills={["C", "Java", "Python", "JavaScript"]}
          title="Languages"
        />
        <Card
          skills={["Git", "GitHub", "PostMan", "Docker", "VS Code"]}
          title="Tools"
        />
      </div>
    </>
  );
}

export default Skills