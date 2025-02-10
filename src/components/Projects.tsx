import { Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[url(../assets/background.jpeg)] bg-cover bg-top px-4">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif">Featured Projects</h1>
          <h2 className="text-2xl md:text-3xl font-serif">
            A collection of my best work in web development
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
                <h3 className="text-3xl font-serif">{project.title}</h3>
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
                  <a
                    href={project.github}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    View Source
                  </a>
                  <a
                    href={project.demo}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-serif">Let's work together</h2>
          <p className="text-gray-600">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors text-lg"
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
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform built with Next.js and Stripe, featuring real-time inventory management, user authentication, and a seamless checkout process.",
    image: "https://placehold.co/600x400",
    technologies: ["Next.js", "React", "TypeScript", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    id: 2,
    title: "AI Writing Assistant",
    description:
      "An AI-powered writing tool that helps improve content quality and SEO performance. Built with OpenAI's GPT-4 API and real-time collaboration features.",
    image: "https://placehold.co/600x400",
    technologies: ["React", "Node.js", "OpenAI", "Socket.io"],
    github: "https://github.com/yourusername/ai-writer",
    demo: "https://ai-writer-demo.com",
  },
  {
    id: 3,
    title: "3D Portfolio Visualizer",
    description:
      "An interactive 3D visualization of stock portfolio performance using Three.js and real-time market data. Features custom shaders and animations.",
    image: "https://placehold.co/600x400",
    technologies: ["Three.js", "WebGL", "React", "D3.js"],
    github: "https://github.com/yourusername/portfolio-3d",
    demo: "https://portfolio-3d-demo.com",
  },
];
