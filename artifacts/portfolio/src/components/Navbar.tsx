import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { id: "about", label: "About", color: "text-muted-foreground hover:text-primary" },
    { id: "skills", label: "Skills", color: "text-muted-foreground hover:text-primary" },
    { id: "projects", label: "Projects", color: "text-muted-foreground hover:text-primary" },
    { id: "scams", label: "Threat Reports", color: "text-destructive hover:text-destructive/80 font-semibold" },
    { id: "contact", label: "Contact", color: "text-muted-foreground hover:text-primary" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div
            className="font-bold text-lg text-foreground tracking-tight cursor-pointer hover:text-primary transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Ibukun<span className="text-primary">.</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`${link.color} transition-colors font-mono tracking-wide text-xs uppercase`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center border-l border-border"
          >
            <button
              className="absolute top-6 right-6 text-foreground hover:text-primary p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col gap-8 font-mono text-xl items-center">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => scrollTo(link.id)}
                  className={`${link.color} uppercase tracking-widest`}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
