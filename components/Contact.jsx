"use client"

import { motion } from "framer-motion"

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa"

const Contact = () => {

  return (

    <section
      id="contact"
      className="py-20 md:py-28 px-4 md:px-8 bg-black text-white relative overflow-hidden"
    >

      {/* Glow Background */}

      <div className="absolute w-72 h-72 bg-purple-500 blur-[120px] opacity-20 top-0 left-0"></div>

      <div className="absolute w-72 h-72 bg-blue-500 blur-[120px] opacity-20 bottom-0 right-0"></div>

      <motion.div
        initial={{opacity:0,y:40}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="relative z-10"
      >

        <h1 className="text-3xl md:text-5xl font-bold text-center mb-6">

          Contact Me

        </h1>

        <p className="text-center text-gray-400 max-w-2xl mx-auto text-base md:text-lg mb-14 leading-8">

          Feel free to contact me for internships, collaborations or freelance opportunities.

        </p>

        {/* Contact Cards */}

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* Email */}

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sh.hafizabdulmuizzraashidlateef@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center gap-5 hover:-translate-y-2 hover:border-purple-500 duration-500"
          >

            <div className="text-4xl text-purple-400">

              <FaEnvelope />

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-2">

                Email

              </h2>

              <p className="text-gray-400">

                Contact through Gmail

              </p>

            </div>

          </a>

          {/* GitHub */}

          <a
            href="https://github.com/HafizAbdulMuizz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center gap-5 hover:-translate-y-2 hover:border-white duration-500"
          >

            <div className="text-4xl">

              <FaGithub />

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-2">

                GitHub

              </h2>

              <p className="text-gray-400">

                Explore my repositories

              </p>

            </div>

          </a>

          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/hafiz-abdul-muizz-29a391267/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center gap-5 hover:-translate-y-2 hover:border-blue-500 duration-500"
          >

            <div className="text-4xl text-blue-400">

              <FaLinkedin />

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-2">

                LinkedIn

              </h2>

              <p className="text-gray-400">

                Connect professionally

              </p>

            </div>

          </a>

          {/* WhatsApp */}

          <a
            href="https://wa.me/923008412464"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 flex items-center gap-5 hover:-translate-y-2 hover:border-green-500 duration-500"
          >

            <div className="text-4xl text-green-400">

              <FaWhatsapp />

            </div>

            <div>

              <h2 className="text-2xl font-semibold mb-2">

                WhatsApp

              </h2>

              <p className="text-gray-400">

                Chat directly on WhatsApp

              </p>

            </div>

          </a>

        </div>

      </motion.div>

    </section>

  )
}

export default Contact