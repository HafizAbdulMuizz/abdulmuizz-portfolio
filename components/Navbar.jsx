"use client"

import { useState } from "react"

const Navbar = () => {

  const [menuOpen,setMenuOpen] = useState(false)

  return (

    <nav className="bg-black/70 backdrop-blur-md text-white px-6 md:px-10 py-5 border-b border-gray-800 sticky top-0 z-50">

      <div className="flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          Muizz.dev
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-lg">

          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        {/* Mobile Button */}

        <button
          className="md:hidden text-3xl"
          onClick={()=>setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <ul className="flex flex-col gap-5 mt-6 md:hidden text-lg">

          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

      )}

    </nav>

  )
}

export default Navbar