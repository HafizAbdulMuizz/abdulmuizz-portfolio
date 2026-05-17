"use client"

import { motion } from "framer-motion"

const Skills = () => {

  const skills = [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub"
  ]

  return (

    <section
      id="skills"
      className="py-20 md:py-28 px-4 md:px-8 bg-black text-white"
    >

      <motion.h1
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="text-3xl md:text-5xl font-bold text-center mb-14"
      >

        Skills

      </motion.h1>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">

        {skills.map((skill,index)=>(

          <motion.div
            key={index}

            initial={{opacity:0,y:30}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:0.5,delay:index*0.1}}
            viewport={{once:true}}

            className="bg-gradient-to-r from-zinc-900 to-zinc-800 border border-zinc-700 px-7 py-4 rounded-2xl hover:scale-110 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/20 duration-300"
          >

            {skill}

          </motion.div>

        ))}

      </div>

    </section>

  )
}

export default Skills