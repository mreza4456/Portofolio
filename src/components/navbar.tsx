"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Tools & Technologies" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 
      bg-white dark:bg-muted dark:border-2 border-primary
      backdrop-blur-md shadow-lg 
      rounded-2xl px-6 py-3 
      z-50 flex justify-between items-center w-[90%] max-w-5xl
      transition-colors duration-300"
    >
      {/* Logo */}
      <div className="text-xl md:text-2xl font-bold tracking-widest">
        PORTFOLIO
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8">
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`relative px-2 py-1 transition-colors duration-300 ${
                active === id ? "text-primary" : "text-inherit"
              }`}
            >
              {label}
              {active === id && (
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary rounded-full animate-pulse"></span>
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Theme toggle + Mobile hamburger */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Animated */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute top-full left-0 mt-3 w-full 
              bg-white/90 dark:bg-muted backdrop-blur-md 
              shadow-lg rounded-xl md:hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 text-lg transition-colors duration-300 ${
                      active === id ? "text-primary" : "text-inherit"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
