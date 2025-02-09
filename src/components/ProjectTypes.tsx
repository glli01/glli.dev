import React from "react";
import { Image } from "lucide-react";

const ProjectTypes = () => {
  const projectTypes = [
    {
      title: "Rapid Prototyping",
      description:
        "Quick development of core features to validate ideas and gather feedback",
    },
    {
      title: "Agile Development",
      description: "Iterative sprints with continuous delivery and deployment",
    },
    {
      title: "Continuous Integration",
      description: "Automated testing and deployment for reliable delivery",
    },
    {
      title: "Performance Optimization",
      description:
        "Systematic improvements to enhance speed and resource efficiency",
    },
  ];
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12">
          Rapid development solutions for your digital needs. From concept to
          deployment, I deliver high-quality web applications with efficiency
          and precision.
        </h2>

        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">
                Streamlined Development Process for Maximum Efficiency
              </h3>
              <p className="text-gray-600">
                Whether you need a quick prototype, full-scale application, or
                performance optimization, glli.dev delivers results through an
                agile approach focused on rapid iteration and continuous
                feedback.
              </p>
            </div>
            <div className="space-y-4">
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 shrink-0 rounded bg-gray-900" />
                  <div>
                    <h4 className="font-medium">{type.title}</h4>
                    <p className="text-sm text-gray-500">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://placehold.co/400x400"
                alt="Development Process"
                width={400}
                height={400}
                className="rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-serif mb-4">
                Transparent Development Cycle with Regular Updates
              </h3>
              <p className="text-gray-600">
                Stay informed throughout the development process with regular
                progress updates and milestone reviews. Access development
                builds, provide feedback, and see your project evolve in
                real-time through our collaborative workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
