"use client";
import { ExternalLinkIcon, Github } from "lucide-react";
import BlurText from "./BlurText";
import SpotlightCard from "./SpotlightCard";
import { motion, AnimatePresence } from 'framer-motion';
import CarouselWithFooter from "./carousel-07";
export default function Projects() {

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 flex justify-center mt-20 relative"
      >
        <div className="relative w-full flex flex-col items-center">
          {/* Teks besar di belakang */}
          <h1
            className="absolute -top-10 md:-top-16 lg:-top-20 
                 text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] 
                 font-extrabold text-[#5170ff] opacity-20 
                 select-none pointer-events-none 
                 bg-gradient-to-b from-[#5170ff] via-[#6580f7] to-transparent bg-clip-text text-transparent
                 leading-none z-0"
            style={{
              WebkitTextStroke: '1px rgba(81,112,255,0.2)',
            }}
          >
            PROJECTS
          </h1>

          {/* Teks utama */}
          <BlurText
            text="My Projects"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 z-10 text-[#5170ff] relative"
          />

          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </motion.div>


      <div className="flex flex-col gap-8">
        {[1, 2, 3].map((project) => (
          <motion.div
            key={project}
            initial={{ opacity: 0.3, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}

            transition={{ duration: 0.5, }}
            className="overflow-hidden"
          >
            <div
              className="border-0 bg-muted/50  border border-5 border-primary rounded-xl p-8 "
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="w-full">
                  <CarouselWithFooter />
                </div>

                <div className="p-4 md:p-6 flex flex-col justify-between">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    A modern web application with responsive design and excellent user experience.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'Node.js', 'MongoDB'].map((tech) => (
                      <span key={tech} className="bg-secondary px-2 py-1 rounded text-xs sm:text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="flex flex-wrap gap-3"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white text-sm"
                    >
                      <Github size={16} /> Code
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 border border-cyan-400/30 rounded-lg text-cyan-400 text-sm"
                    >
                      <ExternalLinkIcon size={16} /> Demo
                    </motion.button>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}