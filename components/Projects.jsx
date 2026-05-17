const Projects = () => {

  const projects = [

    {
      title:"Netflix Clone",
      description:"Responsive Netflix landing page clone using HTML and CSS.",
      live:"https://uniquenetfliqs.netlify.app/"
    },

    {
      title:"Twitter Clone",
      description:"Twitter UI clone using Tailwind CSS.",
      live:"https://uniquetwitter.netlify.app/"
    },

    {
      title:"Spotify Clone",
      description:"Spotify inspired music app using JavaScript and Node.js.",
      live:"https://uniquespotify.netlify.app/"
    },

    {
      title:"Todo List App",
      description:"React and Tailwind based Todo application.",
      live:"https://uniquetoodolist.netlify.app/"
    }

  ]

  return (
    <section id="projects" className="py-24 px-8 bg-zinc-950 text-white">

      <h1 className="text-4xl font-bold text-center mb-14">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

        {projects.map((project,index)=>(
          <div
            key={index}
           className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/10 duration-500"
          >

            <h2 className="text-2xl font-bold mb-4">
              {project.title}
            </h2>

            <p className="text-gray-400 mb-6">
              {project.description}
            </p>

            <a
              href={project.live}
              target="_blank"
              className="bg-white text-black px-5 py-2 rounded-xl"
            >
              Live Demo
            </a>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Projects