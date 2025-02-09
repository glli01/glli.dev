import { FaNodeJs, FaReact, FaPython, FaDocker } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { SiKubernetes, SiTerraform } from "react-icons/si";
import React from "react";

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
    text: "OpenAI: Intelligent Automation",
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
    icon: <FaPython className="w-5 h-5 text-yellow-300" />,
    text: "Python: Rapid Development",
    href: "https://www.python.org/",
  },
  {
    icon: <SiTerraform className="w-5 h-5 text-purple-600" />,
    text: "Terraform: Infrastructure Automation",
    href: "https://www.terraform.io/",
  },
  {
    icon: <FaDocker className="w-5 h-5 text-sky-500" />,
    text: "Docker: Consistent Deployment",
    href: "https://www.docker.com/",
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl font-serif">
          Your web projects deserve a solid foundation, not another glitchy
          site. Build with stability, impress users, and grow your business.
        </h2>
        <p className="text-gray-600">
          glli.dev ensures your software projects are stable, efficient, and
          future-ready. No more bugs, slowdowns, or missed deadlines—just
          smooth, reliable delivery.
        </p>
        <p className="text-gray-600">
          Instead, glli.dev gives your software project a stable, efficient
          foundation, built for long-term success. It helps you streamline
          critical processes, from managing tasks to tracking progress, ensuring
          smooth delivery and growth.
        </p>
        <p className="text-gray-600">
          At the same time, ensuring your project runs smoothly with efficient
          workflows and robust performance, while keeping clients updated on
          progress.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
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
