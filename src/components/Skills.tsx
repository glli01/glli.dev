import { FaNodeJs, FaReact, FaDocker, FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { SiAnsible, SiKubernetes, SiTerraform } from "react-icons/si";
import { BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";

const features = [
  {
    icon: <FaNodeJs className="w-5 h-5 text-green-700" />,
    text: "NodeJS: Async Performance",
    href: "https://nodejs.org/",
  },
  {
    icon: <FaReact className="w-5 h-5 text-cyan-500" />,
    text: "React: Component Reusability",
    href: "https://react.dev/",
  },
  {
    icon: <RiOpenaiFill className="w-5 h-5 text-black" />,
    text: "OpenAI: Artificial Intelligence",
    href: "https://openai.com/",
  },
  {
    icon: <FaGolang className="w-5 h-5 text-blue-400" />,
    text: "Go: Fast Execution",
    href: "https://go.dev/",
  },
  {
    icon: <SiKubernetes className="w-5 h-5 text-blue-500" />,
    text: "Kubernetes: Container Orchestration",
    href: "https://kubernetes.io/",
  },
  {
    icon: <BiLogoPostgresql className="w-5 h-5 text-blue-500" />,
    text: "PostgresQL: Relational Databases",
    href: "https://www.postgresql.org/",
  },
  {
    icon: <SiTerraform className="w-5 h-5 text-purple-600" />,
    text: "Terraform: Infrastructure Automation",
    href: "https://www.terraform.io/",
  },
  {
    icon: <FaDocker className="w-5 h-5 text-sky-500" />,
    text: "Docker: Containerized Systems",
    href: "https://www.docker.com/",
  },
  {
    icon: <FaPython className="w-5 h-5 text-yellow-300" />,
    text: "Python: AI + Scripting",
    href: "https://www.python.org/",
  },
  {
    icon: <SiAnsible className="w-5 h-5 text-black" />,
    text: "Ansible: Automation",
    href: "https://github.com/ansible/ansible",
  },
  {
    icon: <BiLogoMongodb className="w-5 h-5 text-green-500" />,
    text: "MongoDB: Document Database",
    href: "https://www.mongodb.com/",
  },
];

export default function SkillsAndTech() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-serif">Skills and Technologies</h2>
        <p className="text-muted-foreground">
          Over the years, I've gained experience in a variety of technologies
          that help me build reliable and scalable applications. My work has
          involved using tools like Terraform for infrastructure, Typescript and
          PL/SQL for development, and Docker and Kubernetes for managing
          clusters.
        </p>
        <p className="text-muted-foreground">
          I've also been part of teams working in agile settings, focusing on
          continuous integration and delivery Below are some of the key
          technologies I've worked with.
        </p>
        <p className="text-muted-foreground"></p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 gap-x-7 gap-y-3">
        {features.map((feature, index) => (
          <a
            key={index}
            href={feature.href}
            className="flex items-center gap-3 hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <div className="p-2 rounded-lg bg-blue-100">{feature.icon}</div>
            <span className="text-sm align-middle">{feature.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
