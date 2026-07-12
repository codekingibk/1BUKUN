import React from "react";
import { motion } from "framer-motion";
import { FolderGit2, ShieldAlert, Code2 } from "lucide-react";

const projects = [
  {
    title: "SecureAuth Dashboard",
    category: "REACT // TAILWIND // ZOD",
    description: "A conceptual financial dashboard built with security-first UI practices. Implements strict data sanitization, CSP headers, and defensive frontend architecture against XSS.",
    icon: <ShieldAlert className="w-8 h-8 text-primary" />,
    accent: "primary"
  },
  {
    title: "Odds Analyzer / Scraper",
    category: "PYTHON // BS4 // PANDAS",
    description: "A utility tool that scrapes and compares historical betting odds vs actual outcomes to highlight statistical anomalies in tipster claims.",
    icon: <Code2 className="w-8 h-8 text-secondary" />,
    accent: "secondary"
  },
  {
    title: "Forensic URL Investigator",
    category: "JS // API // OSINT",
    description: "A lightweight web app that aggregates WHOIS data, SSL certificate chains, and known scam database flags to rate the trust score of betting domains.",
    icon: <FolderGit2 className="w-8 h-8 text-foreground" />,
    accent: "foreground"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-mono text-primary text-sm mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" />
            03. ARCHITECTURE
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Project Showcase</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group border border-border bg-background overflow-hidden flex flex-col h-full hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video bg-card p-6 flex items-center justify-center relative overflow-hidden border-b border-border/50">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                <div className={`absolute inset-0 bg-${project.accent}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className={`font-mono text-xs font-bold text-${project.accent} mb-4 tracking-widest`}>
                  {project.category}
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mt-auto">
                  {project.description}
                </p>
                
                <div className="mt-8 pt-4 border-t border-border/50 font-mono text-xs text-muted-foreground flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>STATUS: SECURE</span>
                  <span className="text-primary hover:underline cursor-pointer">VIEW_SOURCE</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
