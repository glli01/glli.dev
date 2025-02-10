import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative md:min-h-screen sm:max-h-screen/2 sm:min-h-120 flex items-center justify-center bg-[url(../assets/background.jpeg)] bg-cover bg-top px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif">Featured Projects</h1>
          <h2 className="text-2xl md:text-3xl font-serif">
            A collection of my best work in development
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            From full-stack applications to interactive experiences, here are
            some of the projects I've built using modern web technologies.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-4 shadow-xl">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-2xl w-full"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-serif">
                  {project.title} {project.inProgress ? "⏳" : ""}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Source
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-full cursor-not-allowed"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Source
                    </button>
                  )}
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </a>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-300 text-white rounded-full cursor-not-allowed"
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-serif mb-2.5">Let's work together</h2>
          <p className="text-muted-foreground ">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <a
            href="https://www.linkedin.com/in/glli01/"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors text-md"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "glli.dev",
    description:
      "A personal website portfolio showcasing projects and skills, built with modern web technologies like Astro.js, React, and TypeScript, featuring a responsive design.",
    image: "./src/assets/projects/gllidev.png",
    technologies: [
      "Astro.js",
      "React",
      "TypeScript",
      "Next.js",
      "Vite.js",
      "Tailwind CSS",
    ],
    github: "https://github.com/glli01/glli.dev",
    demo: "https://glli.dev",
    inProgress: false,
  },
  {
    id: 2,
    title: "ankinotes",
    description:
      "An AI-powered tool that helps individuals learn through spaced repetition",
    image: "./src/assets/projects/ankinotes.png",
    technologies: [
      "Vite/React",
      "Node.js",
      "OpenAI",
      "LangChain",
      "Typescript",
      "PostgresQL",
      "Docker-compose",
    ],
    inProgress: true,
  },
  {
    id: 3,
    title: "Pathyy",
    description:
      "An interactive 2D visualization tool of pathfinding algorithms such as dijkstra's, a-star, and BFS. Includes Maze generation through Prim's algorithm and visually appealing animations.",
    image: "./src/assets/projects/pathyy.png",
    technologies: ["React", "CSS", "Node.js"],
    github: "https://github.com/glli01/visualizer",
  },
];
