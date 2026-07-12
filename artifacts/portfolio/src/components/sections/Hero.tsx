import React from "react";
import { motion } from "framer-motion";
import heroBg from "../../assets/images/hero-bg.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Digital Landscape" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container relative z-10 px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="font-mono text-primary flex items-center gap-2 text-sm md:text-base">
            <span className="text-secondary">&gt;</span> System initialized. User authenticated.
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground uppercase">
            ADEGBOYEGA<br />
            <span className="text-primary">IBUKUN ENOCH</span>
          </h1>

          <div className="font-mono text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
            <span className="text-secondary">Web Developer</span> // <span className="text-destructive">Security Researcher</span>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl font-light">
            I code with purpose. Building real, performant systems — and exposing the fake ones that exploit the vulnerable.
          </p>

          <div className="pt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={() => document.getElementById("scams")?.scrollIntoView({ behavior: "smooth" })} className="font-mono px-8 py-4 bg-primary text-primary-foreground font-bold tracking-widest hover:bg-primary/90 transition-all border border-primary uppercase text-sm">
              View Threat Reports
            </button>
            <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })} className="font-mono px-8 py-4 bg-transparent text-foreground border border-border hover:border-primary hover:text-primary transition-all uppercase text-sm tracking-widest">
              Explore Arsenal
            </button>
          </div>
        </motion.div>
      </div>

      {/* Terminal prompt floating */}
      <div className="absolute bottom-10 left-6 font-mono text-xs text-muted-foreground hidden md:block">
        <span className="text-primary">ibk@root</span>:~$ <span className="cursor-blink">_</span>
      </div>
    </section>
  );
}
