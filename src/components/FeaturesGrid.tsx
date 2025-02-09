import {
  FileText,
  Wallet,
  RefreshCcw,
  Gift,
  Download,
  LineChart,
  Send,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: <FileText className="w-5 h-5 text-blue-600" />,
    text: "NodeJS: Async Performance",
  },
  {
    icon: <Wallet className="w-5 h-5 text-green-600" />,
    text: "React: Component Reusability",
  },
  {
    icon: <RefreshCcw className="w-5 h-5 text-orange-600" />,
    text: "Golang: Fast Execution",
  },
  {
    icon: <Gift className="w-5 h-5 text-pink-600" />,
    text: "LLMs: Intelligent Automation",
  },
  {
    icon: <Download className="w-5 h-5 text-purple-600" />,
    text: "Kubernetes: Container Orchestration",
  },
  {
    icon: <LineChart className="w-5 h-5 text-blue-600" />,
    text: "Python: Rapid Development",
  },
  {
    icon: <Send className="w-5 h-5 text-green-600" />,
    text: "Terraform: Infrastructure Automation",
  },
  {
    icon: <ArrowRight className="w-5 h-5 text-orange-600" />,
    text: "Docker: Consistent Deployment",
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
          <div key={index} className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-100">{feature.icon}</div>
            <span className="text-sm">{feature.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
