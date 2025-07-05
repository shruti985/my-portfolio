import React from 'react'
import ProjectCard from './ProjectCard';
import fullDesc from '../Description.js';
import urlImage from '../projectContent/image.png'
import blogImage from '../projectContent/blog.jpeg'
import leetMetric from '../projectContent/leetmetric.jpeg'
import memeGen from '../projectContent/memeGen.jpeg'
function Projects() {
    return (
      <>
        <div id="projects">
          <h2
            className={`mx-auto text-3xl sm:text-5xl font-bold flex justify-center intems-center mt-[6rem] underline dark:decoration-purple-400 decoration-pink-400 underline-offset-5`}
          >
            PROJECTS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 grid-flow-row gap-[2rem] mx-auto w-[50%] mt-20">
          <ProjectCard
            title={"Blogging Platform"}
            fullDesc={fullDesc.blog}
            desc={"A secure and dynamic blogging platform built with Node.js.."}
            skills={[
              "Html",
              "CSS",
              "JavaScript",
              "NodeJs",
              "MongoDB",
              "ExpressJs",
              "Multer",
            ]}
            Image={
              blogImage
            }
          />
          <ProjectCard
            title={"URL Shortner"}
            fullDesc={fullDesc.url}
            desc={
              "A secure URL shortener application built with Node.js, Express.js,and MongoDB..."
            }
            skills={[
              "Html",
              "CSS",
              "JavaScript",
              "NodeJs",
              "MongoDB",
              "ExpressJs",
            ]}
            Image={urlImage}
          />
          <ProjectCard
            title={"Meme Generator"}
            desc={"A web application to browse, edit, and create memes.."}
            fullDesc={fullDesc.meme}
            skills={["Html", "CSS", "JavaScript", "ReactJs", "BootStrap"]}
            Image={
              memeGen
            }
          />
          <ProjectCard
            title={"LeetMetric"}
            fullDesc={fullDesc.leetMetric}
            desc={
              "A powerful and user-friendly React.js application designed to.."
            }
            skills={["Html", "CSS", "JavaScript"]}
            Image={
             leetMetric
            }
          />
        </div>
      </>
    );
}

export default Projects