import React from "react";
import { motion } from "framer-motion";

export function Skills() {
  const devSkills = ["HTML5", "CSS3", "JavaScript (ES6+)", "Python", "React / UI Craft", "Tailwind CSS"];
  const secSkills = ["Penetration Testing", "Security Enumeration", "Network Analysis", "Digital Forensics", "Scam Exposure", "OSINT"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-mono text-primary text-sm mb-2 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-primary" />
            02. TECHNICAL_ARSENAL
          </h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Capabilities</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Developer Stack */}
          <div className="space-y-8">
            <div className="border-b border-border pb-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-secondary/10 border border-secondary/30 flex items-center justify-center">
                <span className="w-3 h-3 bg-secondary rounded-sm" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">Development Stack</h4>
                <div className="font-mono text-xs text-secondary mt-1">BUILD_MODE: ACTIVE</div>
              </div>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {devSkills.map(skill => (
                <motion.div 
                  key={skill} 
                  variants={item}
                  className="p-4 bg-card/50 backdrop-blur border border-border text-muted-foreground font-mono text-sm hover:border-secondary hover:text-secondary hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-secondary/50 mr-2">&gt;</span>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Security Stack */}
          <div className="space-y-8">
            <div className="border-b border-border pb-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded bg-destructive/10 border border-destructive/30 flex items-center justify-center">
                <span className="w-3 h-3 bg-destructive animate-pulse rounded-sm" />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-foreground">Security & Forensics</h4>
                <div className="font-mono text-xs text-destructive mt-1">THREAT_HUNTING: ENABLED</div>
              </div>
            </div>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {secSkills.map(skill => (
                <motion.div 
                  key={skill} 
                  variants={item}
                  className="p-4 bg-card/50 backdrop-blur border border-border text-muted-foreground font-mono text-sm hover:border-destructive hover:text-destructive hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span className="text-destructive/50 mr-2 group-hover:hidden">&gt;</span>
                  <span className="text-destructive mr-2 hidden group-hover:inline">#</span>
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
