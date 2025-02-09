import { Github, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">My Projects</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="object-cover h-48 w-full rounded-t-lg"
              />
              <CardContent className="flex-grow">
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github}>
                    <Github className="w-4 h-4 mr-2" />
                    View Source
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.demo}>
                    <Globe className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500">
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    id: 1,
    title: "Portal",
    description:
      "A beautiful freelance toolkit for managing client projects from proposals to payments.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%2020-24-46%20Portal%20-%20your%20beautiful%20freelance%20toolkit-min-3gruAtYm7CBXRlmGrsEzA5MqDiw35o.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/yourusername/portal",
    demo: "https://portal-demo.com",
  },
  {
    id: 2,
    title: "AI Writing Assistant",
    description:
      "An AI-powered writing tool that helps improve content quality and SEO performance.",
    image: "/placeholder.svg",
    technologies: ["Python", "Flask", "TensorFlow", "React"],
    github: "https://github.com/yourusername/ai-writing-assistant",
    demo: "https://ai-writing-demo.com",
  },
  {
    id: 3,
    title: "Eco Tracker",
    description:
      "A mobile app for tracking and reducing personal carbon footprint with community features.",
    image: "/placeholder.svg",
    technologies: ["React Native", "Node.js", "MongoDB", "D3.js"],
    github: "https://github.com/yourusername/eco-tracker",
    demo: "https://eco-tracker-demo.com",
  },
  {
    id: 4,
    title: "Smart Home Hub",
    description:
      "An IoT platform for integrating and controlling various smart home devices.",
    image: "/placeholder.svg",
    technologies: ["Raspberry Pi", "Python", "MQTT", "Vue.js"],
    github: "https://github.com/yourusername/smart-home-hub",
    demo: "https://smart-home-hub-demo.com",
  },
  {
    id: 5,
    title: "Code Mentor",
    description:
      "An interactive platform for learning programming through real-time mentorship and code challenges.",
    image: "/placeholder.svg",
    technologies: ["Ruby on Rails", "WebSockets", "PostgreSQL", "Angular"],
    github: "https://github.com/yourusername/code-mentor",
    demo: "https://code-mentor-demo.com",
  },
  {
    id: 6,
    title: "Health Tracker",
    description:
      "A comprehensive health and fitness tracking app with personalized insights and goal setting.",
    image: "/placeholder.svg",
    technologies: ["Swift", "HealthKit", "Core ML", "Firebase"],
    github: "https://github.com/yourusername/health-tracker",
    demo: "https://health-tracker-demo.com",
  },
];
