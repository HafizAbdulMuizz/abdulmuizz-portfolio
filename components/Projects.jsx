"use client"

import { motion } from "framer-motion"

import {
  FaGithub
} from "react-icons/fa"

import {
  FiExternalLink
} from "react-icons/fi"

const projects = [
{
  title: "Shinova Detailing Management System",

  description:
    "Full Stack car detailing management system built with Next.js, MongoDB Atlas and Tailwind CSS featuring online appointment booking, admin dashboard, booking status tracking, revenue analytics and cloud deployment.",

  live:
    "https://shinova-detailing.vercel.app/",

  github:
    "https://github.com/HafizAbdulMuizz/shinova-detailing",
},
{
    title: "Spotify Clone",

    description:
      "Spotify-inspired music web application built using HTML, CSS, JavaScript and Node.js with dynamic functionality.",

    live:
      "https://uniquespotify.netlify.app/",

    github:
      "https://github.com/HafizAbdulMuizz/project-2-spotify-clone-using-html-css-js",
  },
   {
    title: "Todo Application",

    description:
      "Full stack Todo application built using React.js, Express.js and Tailwind CSS with CRUD functionality.",

    live:
      "https://uniquetoodolist.netlify.app/",

    github:
      "https://github.com/HafizAbdulMuizz/react-todo-list",
  },

  {
    title: "Netflix Clone",

    description:
      "Responsive Netflix-inspired landing page built using HTML5 and CSS3 with modern UI styling and responsive layouts.",

    live:
      "https://uniquenetfliqs.netlify.app/",

    github:
      "https://github.com/HafizAbdulMuizz/project-1-netflix-colon-using-html-and-css",
  },

  
  {
    title: "Twitter Clone",

    description:
      "Responsive Twitter-inspired frontend interface created using Tailwind CSS with clean and modern layout design.",

    live:
      "https://uniquetwitter.netlify.app/",

    github:
      "https://github.com/HafizAbdulMuizz/project-3-twitter-clone-using-tailwindcss",
  },

 

]

const Projects = () => {

  return (

    <section
      id="projects"
      className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
    >

      <motion.h1
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="text-3xl md:text-5xl font-bold text-center mb-16"
      >

       Featured Projects

      </motion.h1>
      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
  A collection of real-world projects showcasing my skills in
  frontend development, full stack applications, databases,
  cloud deployment and modern web technologies.
</p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {projects.map((project,index)=>(

          <motion.div
            key={index}

            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.6,delay:index*0.2}}
            viewport={{once:true}}

            className="bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20 duration-500"
          >

            <h2 className="text-3xl font-bold mb-5">

              {project.title}

            </h2>

            <p className="text-gray-400 leading-8 mb-8">

              {project.description}

            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4">

              {/* Live Demo */}

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 px-6 py-3 rounded-2xl font-semibold hover:scale-105 duration-300"
              >

                <FiExternalLink />

                Live Demo

              </a>

              {/* GitHub */}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-zinc-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black hover:scale-105 duration-300"
              >

                <FaGithub />

                GitHub Repo

              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  )
}

export default Projects