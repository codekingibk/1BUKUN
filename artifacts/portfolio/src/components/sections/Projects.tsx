import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Terminal, Bot, Shield, Globe, Zap } from "lucide-react";

const projects = [
  {
    title: "Edward MD Bot",
    category: "WHATSAPP BOT // JAVASCRIPT // TYPESCRIPT",
    description:
      "A multi-feature WhatsApp bot with command handling, media tools, group management, and automated responses. Built across multiple iterations (Edward-BOT, Edward-MD, Edward-MD-BOT) demonstrating active, evolving development. Full admin panel included.",
    lang: "JavaScript / TypeScript",
    github: "https://github.com/codekingibk/EDWARD-MD-BOT",
    icon: <Bot className="w-7 h-7 text-primary" />,
    accent: "primary",
    tags: ["WhatsApp", "Bot", "Node.js", "Multi-iteration"],
  },
  {
    title: "Termux Hacking Tools",
    category: "SECURITY // SHELL // OSINT",
    description:
      "A comprehensive collection of hacking and OSINT tools configured for Termux (Android Linux environment). Covers network scanning, information gathering, exploitation frameworks, and security testing utilities. 8 stars on GitHub.",
    lang: "Shell",
    github: "https://github.com/codekingibk/termux-hacking-complete-tools",
    icon: <Shield className="w-7 h-7 text-secondary" />,
    accent: "secondary",
    tags: ["Termux", "OSINT", "Network", "Security"],
    stars: 8,
  },
  {
    title: "Instaboost",
    category: "AUTOMATION // SHELL // PYTHON",
    description:
      "An Instagram automation and boosting tool. Social media automation script with follower/engagement mechanics. 5 stars on GitHub.",
    lang: "Shell",
    github: "https://github.com/codekingibk/Instaboost",
    icon: <Zap className="w-7 h-7 text-yellow-400" />,
    accent: "yellow-400",
    tags: ["Instagram", "Automation", "Shell"],
    stars: 5,
  },
  {
    title: "Certificate Verification System",
    category: "WEB APP // JAVASCRIPT // UTILITY",
    description:
      "A web-based certificate verification system — allows institutions or individuals to issue and verify digital certificates. Practical tooling for credential validation.",
    lang: "JavaScript",
    github: "https://github.com/codekingibk/certificate-verification-system",
    icon: <Globe className="w-7 h-7 text-primary" />,
    accent: "primary",
    tags: ["Verification", "JavaScript", "Web App"],
  },
  {
    title: "CinemaHub",
    category: "PYTHON // MOVIE DATABASE // WEB APP",
    description:
      "A cinema and movie discovery application built in Python. Browse, search, and explore films — a full-featured media web app.",
    lang: "Python",
    github: "https://github.com/codekingibk/Cinemahub",
    icon: <Terminal className="w-7 h-7 text-secondary" />,
    accent: "secondary",
    tags: ["Python", "Movies", "API"],
  },
  {
    title: "UBEC Data Web App",
    category: "JAVASCRIPT // DATA // GOVERNMENT",
    description:
      "A web application implementing data from the official Universal Basic Education Commission (UBEC) spreadsheet — built to make government education data accessible and readable in a structured UI.",
    lang: "JavaScript",
    github: "https://github.com/codekingibk/universal-basic-education-commission",
    icon: <Globe className="w-7 h-7 text-muted-foreground" />,
    accent: "muted-foreground",
    tags: ["Gov Data", "Education", "JavaScript"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="font-mono text-primary text-sm mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" />
            03. PROJECTS
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
            Real Work
          </h3>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-muted-foreground mb-12 flex items-center gap-2"
        >
          <Github className="w-3.5 h-3.5" />
          All projects are live on GitHub —{" "}
          <a
            href="https://github.com/codekingibk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            github.com/codekingibk
          </a>
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group border border-border bg-background/60 backdrop-blur-sm overflow-hidden flex flex-col hover:border-primary/50 transition-colors duration-300"
            >
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 border border-border group-hover:border-primary/50 transition-colors">
                    {project.icon}
                  </div>
                  {project.stars && (
                    <span className="font-mono text-xs text-yellow-400 border border-yellow-400/30 px-2 py-0.5">
                      ★ {project.stars}
                    </span>
                  )}
                </div>

                <div className="font-mono text-xs text-primary/70 mb-2 tracking-widest">
                  {project.category}
                </div>

                <h4 className="text-xl font-bold mb-3 tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>

                <p className="text-muted-foreground text-sm leading-relaxed font-light flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-0.5 border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-border px-6 py-3 flex items-center justify-between bg-card/30">
                <span className="font-mono text-xs text-muted-foreground">{project.lang}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-mono text-xs text-primary hover:text-primary/80 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  View Source
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
