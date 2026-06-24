import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa"

const Footer = () => {

  return (

    <footer className="bg-zinc-950 text-white border-t border-zinc-800 py-10 px-4">

      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">

        <h1 className="text-3xl font-bold">

          Hafiz Abdul Muizz

        </h1>

        <p className="text-gray-400 text-center">

          Built with Next.js, Tailwind CSS and lots of ☕
        </p>

        <div className="flex gap-6 text-3xl">

          <a
            href="https://github.com/HafizAbdulMuizz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-125 duration-300"
          >

            <FaGithub />

          </a>

          <a
            href="https://www.linkedin.com/in/hafiz-abdul-muizz-29a391267/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 hover:scale-125 duration-300"
          >

            <FaLinkedin />

          </a>

          <a
            href="https://wa.me/923008412464"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 hover:scale-125 duration-300"
          >

            <FaWhatsapp />

          </a>

        </div>

        <p className="text-gray-500 text-sm">

© 2026 Hafiz Abdul Muizz | Full Stack Developer
        </p>

      </div>

    </footer>

  )
}

export default Footer