import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container relative z-10 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-mono text-primary/70 text-sm tracking-widest uppercase"
          >
            Web Developer & Security Researcher
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter text-foreground uppercase leading-none">
            ADEGBOYEGA<br />
            <span className="text-primary">IBUKUN</span> ENOCH
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            I build real, performant systems — and I expose the fraudulent ones that exploit people's trust.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => document.getElementById("scams")?.scrollIntoView({ behavior: "smooth" })}
              className="font-mono px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest hover:bg-primary/90 transition-all border border-primary uppercase text-sm"
            >
              View Threat Reports
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="font-mono px-8 py-4 bg-transparent text-foreground border border-border hover:border-primary hover:text-primary transition-all uppercase text-sm tracking-widest"
            >
              My Projects
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
