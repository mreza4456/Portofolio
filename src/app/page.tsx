"use client";
/// <reference path="../types/three-extensions.d.ts" />

import React, { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Lanyard from '@/components/lanyard';
import TextType from '@/components/texttype';
import Navbar from '@/components/navbar';

import BlurText from '@/components/BlurText';

import { Button } from '@/components/ui/button';
import SpotlightCard from '@/components/SpotlightCard';
import TiltedCard from '@/components/TiltedCard';
import { Card } from '@/components/ui/card';
import ElectricBorder from '@/components/ElectricBorder';
import { ArrowBigUp, ArrowUpRight, ExternalLink, ExternalLinkIcon, Github, GithubIcon, SquareArrowDownRight, SquareArrowOutUpRight, SquareArrowUpRight, SquareArrowUpRightIcon } from 'lucide-react';
import AnimatedContent from '@/components/AnimatedContent';

import Projects from '@/components/project';
import Skills from '@/components/skills';
import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { OrbitControls } from '@react-three/drei';




const Portfolio = () => {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);


  // Scrollspy functionality
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      rootMargin: '-20% 0px -55% 0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Temporarily disable the observer to prevent immediate activeSection change
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-primary min-h-screen scroll-smooth dark:bg-black overflow-x-hidden">

      <Navbar />
      <main
        className="
        min-h-screen 
        
      "
      >

        {/* Hero Section */}
        <section
          id="home"
          className="
    relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between
    text-gray-900 dark:text-gray-100 overflow-hidden
    bg-[radial-gradient(circle_at_top,rgba(0,70,130,0.4)_0%,rgba(0,70,130,0)_70%)] 
    dark:bg-[radial-gradient(circle_at_top,rgba(0,70,130,0.5)_0%,rgba(0,0,0,1)_70%)]
    before:absolute before:top-0 before:left-0 before:w-full before:h-full before:content-[''] before:pointer-events-none
  "
        >
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="z-0 w-full md:w-1/2 text-center max-w-7xl md:text-left order-2 md:order-1 mt-8 md:mt-0 relative"
          >
            <div>
              <h1 className='md:text-5xl text-3xl font-bold font-mono'>
                <TextType
                  text={["Hi Im M Reza Rizky", "Web Developer"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                  textColors={["#5170ff"]}
                />
              </h1>

              <div className='max-w-150 mt-10 px-3 text-muted-foreground font-mono md:text-lg p-5'>
                <AnimatedContent
                  distance={150}
                  direction="vertical"
                  reverse={false}
                  duration={1}
                  ease="fade.out"
                  initialOpacity={0}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.5}
                >
                  Saya adalah seorang Web Developer yang berpengalaman dalam pembuatan website modern, responsif, dan user-friendly.
                  Memiliki pengalaman dalam front-end maupun back-end, serta terbiasa menggunakan teknologi seperti HTML, CSS, JavaScript, React, dan Node.js.
                  Dengan perhatian pada detail dan performa, saya selalu berusaha menghadirkan solusi digital yang efektif dan sesuai kebutuhan pengguna.
                </AnimatedContent>
              </div>
            </div>
          </motion.div>

          {/* Lanyard content */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end z-20">
            {/* Desktop */}
            <div className="hidden md:block absolute right-[20%] top-1/2 -translate-y-1/2 z-0 w-full h-full">
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>

            {/* Mobile */}
            <div
              className=" block md:hidden w-full  touch-none"
              onTouchStart={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.preventDefault()}
            >
              <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
            </div>
            <a href="#about" className='absolute block md:hidden bg-primary p-3 px-5 top-[50%] rounded-full'>Get Started</a>
          </div>
        </section>


        {/* About Section */}
        <section id="about" className="min-h-screen py-25 ">
          <About />
        </section>



        {/* Skills Section */}
        <section id="skills" className="min-h-screen ">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-25">
         
          <Projects />

        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-25">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <Footer />
      </footer>
    </div >

  );
};

export default Portfolio;
