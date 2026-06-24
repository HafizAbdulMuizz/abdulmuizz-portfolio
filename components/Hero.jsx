"use client"

import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa"

import { TypeAnimation } from "react-type-animation"

const Hero = () => {

  return (

    <section className="min-h-[100vh] bg-black text-white flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">

      {/* Animated Glow Background */}

      <div className="absolute w-72 h-72 bg-purple-500 rounded-full blur-[140px] opacity-20 top-10 left-10 animate-pulse"></div>

      <div className="absolute w-72 h-72 bg-blue-500 rounded-full blur-[140px] opacity-20 bottom-10 right-10 animate-pulse"></div>

      <div className="absolute w-52 h-52 bg-pink-500 rounded-full blur-[120px] opacity-20 top-1/2 left-1/2"></div>

      {/* Main Content */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >

        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-extrabold mb-6 leading-tight"
        >

          Hafiz Abdul Muizz

        </motion.h1>

        {/* Typing Animation */}

        <div className="text-2xl md:text-4xl font-semibold mb-8 h-16 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 text-transparent bg-clip-text">

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "Next.js Developer",
              2000,
              "MERN Stack Developer",
              2000,
              "Frontend Enthusiast",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />

        </div>

        <p className="max-w-3xl text-gray-400 text-base md:text-xl leading-9 mx-auto">

        Full Stack Developer specializing in Next.js, React.js, Node.js and MongoDB. Experienced in building production-ready SaaS platforms, management systems, service marketplaces, authentication systems and cloud-deployed web applications. Currently pursuing BSCS while working on real-world software engineering projects.

        </p>

        {/* Buttons */}

        <div className="flex flex-col md:flex-row gap-5 justify-center mt-12">

          <a
            href="/cv 4.pdf"
            download
            className="bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-2xl font-semibold hover:scale-110 duration-300 shadow-lg shadow-purple-500/30"
          >

            Download CV

          </a>

          <a
            href="#contact"
            className="border border-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black hover:scale-110 duration-300"
          >

            Contact Me

          </a>

        </div>
        <div className="grid grid-cols-3 gap-8 mt-12 max-w-lg mx-auto">

          <div>
            <h3 className="text-3xl font-bold text-purple-400">
           10+
            </h3>

            <p className="text-gray-400">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">
              20+
            </h3>

            <p className="text-gray-400">
              Technologies
            </p>
             <div>
            <h3 className="text-3xl font-bold text-blue-400">
              1+
            </h3>

            <p className="text-gray-400">
              Internship
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-pink-400">
              3+
            </h3>

            <p className="text-gray-400">
              Years Learning
            </p>
          </div>

        </div>

        {/* Social Icons */}

        <div className="flex justify-center gap-8 mt-12 text-4xl">

          <a
            href="https://github.com/HafizAbdulMuizz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 hover:scale-125 hover:-translate-y-2 duration-300"
          >

            <FaGithub />

          </a>

          <a
            href="https://www.linkedin.com/in/hafiz-abdul-muizz-29a391267/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-125 hover:-translate-y-2 duration-300"
          >

            <FaLinkedin />

          </a>

          <a
            href="https://wa.me/923008412464"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-125 hover:-translate-y-2 duration-300"
          >

            <FaWhatsapp />

          </a>

        </div>

      </motion.div>

    </section>

  )
}

export default Hero