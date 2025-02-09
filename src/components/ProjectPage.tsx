import { ArrowLeft, ArrowRight, Github, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/50 border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 text-lg font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </a>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/yourusername/portal">
                <Github className="w-4 h-4 mr-2" />
                View Source
              </a>
            </Button>
            <Button size="sm" asChild>
              <a href="https://portal-demo.com">
                <Globe className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative py-24 px-4 overflow-hidden bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-08%20at%2020-24-46%20Portal%20-%20your%20beautiful%20freelance%20toolkit-min-3gruAtYm7CBXRlmGrsEzA5MqDiw35o.png')] bg-cover bg-center">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-serif text-white mb-6">Portal</h1>
            <p className="text-xl text-white/90 mb-8">
              A beautiful freelance toolkit that streamlines the process from
              proposals to payments, helping freelancers focus on what they do
              best.
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="bg-white/10 text-white hover:bg-white/20"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Project Details */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-16">
            {/* Overview */}
            <section>
              <h2 className="text-3xl font-serif mb-6">Project Overview</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Portal is a comprehensive solution designed to revolutionize
                  how freelancers manage their client relationships and project
                  workflows. Born from the frustration of juggling multiple
                  tools and sending endless PDF proposals, Portal provides a
                  beautiful, unified platform for everything from project
                  proposals to final deliverables.
                </p>
              </div>
            </section>

            {/* Problem & Solution */}
            <section className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif mb-4">The Problem</h3>
                  <ul className="space-y-3 text-gray-600">
                    {problems.map((problem, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-red-500">•</span>
                        {problem}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-serif mb-4">The Solution</h3>
                  <ul className="space-y-3 text-gray-600``">
                    {solutions.map((solution, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="text-green-500">•</span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-3xl font-serif mb-6">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index}>
                    <CardContent className="pt-6">
                      <feature.icon className="w-8 h-8 text-blue-500 mb-4" />
                      <h3 className="text-lg font-medium mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Technical Details */}
            <section>
              <h2 className="text-3xl font-serif mb-6">
                Technical Implementation
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Portal is built with a modern tech stack focusing on
                  performance, scalability, and developer experience. The
                  frontend utilizes Next.js 14 with React Server Components for
                  optimal performance and SEO. The backend is powered by
                  serverless functions and uses Edge Computing for global
                  availability.
                </p>
                <div className="mt-6 grid sm:grid-cols-2 gap-6">
                  {techDetails.map((detail, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-medium">{detail.category}</h4>
                      <p className="text-sm text-gray-600">
                        {detail.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-serif mb-4">Project Details</h3>
                <dl className="space-y-4">
                  {projectDetails.map((detail, index) => (
                    <div key={index}>
                      <dt className="text-sm text-gray-500">{detail.label}</dt>
                      <dd className="text-gray-900">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-serif mb-4">Next Project</h3>
                <a
                  href="/projects/next-project"
                  className="group flex items-center justify-between hover:text-blue-600"
                >
                  <span>Design System</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  );
}

const technologies = [
  "Next.js 14",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Prisma",
  "PostgreSQL",
  "Stripe",
  "AWS S3",
];

const problems = [
  "Freelancers waste time on repetitive administrative tasks",
  "Multiple disconnected tools for proposals, invoicing, and file sharing",
  "Unprofessional PDF documents for client communication",
  "Manual payment collection and follow-ups",
];

const solutions = [
  "Unified platform for all freelance business needs",
  "Beautiful, branded client portals",
  "Automated payment collection and reminders",
  "Secure file sharing and deliverables",
];

const features = [
  {
    icon: FileText,
    title: "Smart Proposals",
    description:
      "Create and send professional proposals with customizable templates and real-time tracking.",
  },
  {
    icon: Wallet,
    title: "Payment Integration",
    description:
      "Accept payments worldwide with multiple payment methods and automated invoicing.",
  },
  {
    icon: RefreshCcw,
    title: "Subscription Management",
    description:
      "Handle recurring payments and retainers with automated billing and reporting.",
  },
  {
    icon: Send,
    title: "File Delivery",
    description:
      "Secure file sharing with access controls and delivery confirmation.",
  },
];

const techDetails = [
  {
    category: "Frontend Architecture",
    description:
      "React Server Components with Next.js App Router for optimal performance and SEO.",
  },
  {
    category: "Backend Infrastructure",
    description:
      "Serverless functions with Edge Computing for global availability.",
  },
  {
    category: "Database & Storage",
    description: "PostgreSQL with Prisma ORM, AWS S3 for file storage.",
  },
  {
    category: "Authentication & Security",
    description: "NextAuth.js with JWT and role-based access control.",
  },
];

const projectDetails = [
  { label: "Timeline", value: "6 months" },
  { label: "Role", value: "Full Stack Developer" },
  { label: "Team Size", value: "3 members" },
  { label: "Status", value: "Live" },
];

import { FileText, Wallet, RefreshCcw, Send } from "lucide-react";
