import React from "react";
import { Image } from "lucide-react";

const ProjectTypes = () => {
  const projectTypes = [
    {
      title: "Fixed price",
      description:
        "Set a fixed price for your project with optional milestone payments",
    },
    {
      title: "Hourly rate",
      description: "Track and bill hours with automatic payment collection",
    },
    {
      title: "Subscription",
      description: "Recurring payments for ongoing services or retainers",
    },
    {
      title: "Milestone-based",
      description:
        "Break down large projects into manageable, billable milestones",
    },
  ];
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16">
          A freelance toolkit you can use for any type of project, big or small.
          Create Portals, share hours, transfer assets, get paid, and never send
          another invoice again.
        </h2>

        <div className="space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif mb-4">
                Create Portals for a wide range of projects
              </h3>
              <p className="text-gray-600">
                Whether it's a one-off gig, ongoing hourly work,
                milestone-driven project, or even subscription, Portal makes
                everything easy and joyful to manage for both you and your
                client.
              </p>
            </div>
            <div className="space-y-4">
              {projectTypes.map((type, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm"
                >
                  <div className="w-8 h-8 rounded bg-gray-100" />
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
                alt="Portal Interface"
                width={400}
                height={400}
                className="rounded-xl"
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-serif mb-4">
                Transfer large files or deliverables, before or after the client
                pays
              </h3>
              <p className="text-gray-600">
                Easily transfer up to 5GB as deliverables, with full control
                over access. Decide whether clients can download files before or
                after payment, and get notified when they do - it's up to you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
