import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "SecureVault App",
    subtitle: "Golang Microservices, Format-Preserving Encryption",
    description:
      "A secure data management platform built using Golang microservices, implementing format-preserving encryption (FPE), gRPC communication, OAuth2, and containerized via Docker Compose.",
    stack: ["Go", "gRPC", "Docker", "OAuth2", "Postgres", "NATS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Fake News Detection",
    subtitle: "Deep Learning, Text Classification",
    description:
      "Applied machine learning models to detect fake news articles using a Kaggle dataset. Trained CNN, LSTM, and RNN using TensorFlow and visualized insights with Google Data Studio.",
    stack: ["Python", "TensorFlow", "Deep Learning", "Google Data Studio"],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">What I’ve Built</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{project.subtitle}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-black" />
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300 hover:text-black" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

