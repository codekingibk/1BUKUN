import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/images/profile.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-card/30 border-t border-border/50">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:bg-primary/30 transition-colors duration-700" />
            <div className="relative z-10 overflow-hidden border border-border">
              <img
                src={profileImg}
                alt="Adegboyega Ibukun Enoch"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>

            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-2 border-r-2 border-primary z-0 opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-t-2 border-l-2 border-secondary z-0 opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-mono text-primary text-sm mb-2 flex items-center gap-2">
                <span className="w-8 h-[1px] bg-primary" />
                01. ABOUT
              </h2>
              <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
                Builder<span className="text-primary">.</span> Researcher<span className="text-secondary">.</span> Exposer<span className="text-destructive">.</span>
              </h3>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-base leading-relaxed space-y-4 font-light"
            >
              <p>
                I'm Adegboyega Ibukun Enoch — 19, studying at the University of Ibadan, Nigeria. I build modern web applications and conduct security research.
              </p>
              <p>
                My security work focuses on a specific and rampant problem: internet fraud originating from Nigeria. Online scam operations — particularly fake betting prediction sites — have become widespread. Fraudsters build slick-looking platforms, collect payments, and vanish. I reverse-engineer these sites, extract the source code evidence, and publish my findings publicly.
              </p>
              <p>
                This isn't just a side interest. It's accountability work. Every site on this page was actively defrauding people when I investigated it. The evidence is real — extracted directly from their own JavaScript bundles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid sm:grid-cols-3 gap-4 font-mono text-sm"
            >
              <div className="p-4 border border-border bg-background/50 hover:bg-card hover:border-primary/50 transition-colors group">
                <div className="text-muted-foreground mb-1 group-hover:text-primary transition-colors text-xs">LOCATION</div>
                <div className="text-foreground font-bold">Ibadan, Nigeria</div>
              </div>
              <div className="p-4 border border-border bg-background/50 hover:bg-card hover:border-secondary/50 transition-colors group">
                <div className="text-muted-foreground mb-1 group-hover:text-secondary transition-colors text-xs">CERTIFIED BY</div>
                <div className="text-foreground font-bold">Appclick Academy</div>
              </div>
              <div className="p-4 border border-border bg-background/50 hover:bg-card hover:border-primary/50 transition-colors group">
                <div className="text-muted-foreground mb-1 group-hover:text-primary transition-colors text-xs">GITHUB</div>
                <a
                  href="https://github.com/codekingibk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  codekingibk
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
