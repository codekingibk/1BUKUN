import React from "react";
import { motion } from "framer-motion";
import { FiGithub, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-card border-t border-border relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center space-y-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="font-mono text-primary text-sm tracking-widest flex justify-center items-center gap-2">
            <span className="w-4 h-[1px] bg-primary" />
            05. SECURE_CHANNEL
            <span className="w-4 h-[1px] bg-primary" />
          </h2>
          <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Initiate Contact</h3>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light pt-4">
            Whether it's building a robust frontend application or investigating a suspicious platform, my inbox is open. Let's build something real.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a href="https://wa.me/2347019706826" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 border border-border bg-background/50 hover:bg-card hover:border-primary/50 hover:text-primary transition-all duration-300 font-mono group relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <FaWhatsapp className="text-xl relative z-10" />
            <span className="relative z-10 tracking-wider">+234 701 970 6826</span>
          </a>
          
          <a href="mailto:gboyegaibk@gmail.com" className="flex items-center justify-center gap-3 p-5 border border-border bg-background/50 hover:bg-card hover:border-secondary/50 hover:text-secondary transition-all duration-300 font-mono group relative overflow-hidden">
            <div className="absolute inset-0 bg-secondary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <FiMail className="text-xl relative z-10" />
            <span className="relative z-10 tracking-wider">gboyegaibk@gmail.com</span>
          </a>
          
          <a href="https://github.com/codekingibk" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-5 border border-border bg-background/50 hover:bg-card hover:border-foreground/50 hover:text-foreground transition-all duration-300 font-mono group relative overflow-hidden">
            <div className="absolute inset-0 bg-foreground/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            <FiGithub className="text-xl relative z-10" />
            <span className="relative z-10 tracking-wider">codekingibk</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border text-center font-mono text-xs text-muted-foreground relative z-20">
      <p>&copy; {new Date().getFullYear()} Adegboyega Ibukun Enoch. All rights reserved.</p>
      <p className="mt-2 text-primary/70 tracking-widest font-bold">BUILDING REAL THINGS // EXPOSING FAKE ONES</p>
    </footer>
  );
}
