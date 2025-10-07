"use client";
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
    <div className="bg-background text-primary min-h-screen scroll-smooth dark:bg-black">

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
    relative w-full min-h-screen flex flex-col md:flex-row items-center justify-center
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
            className="z-10 w-full md:w-1/2 text-center max-w-7xl md:text-left order-2 md:order-1 mt-8 md:mt-0 relative mt-200"
          >
            <div className="p-5">
              <h1 className='text-7xl font-bold font-mono'>
                <TextType
                  text={["Hi Im M Reza Rizky", "Web Developer"]}
                  typingSpeed={75}
                  pauseDuration={1500}
                  showCursor={true}
                  cursorCharacter="_"
                  textColors={["#5170ff"]}

                />

              </h1>
              <div className='max-w-150 mt-10 px-3 text-muted-foreground font-mono md:text-lg'>
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
                  Saya adalah seorang Web Developer yang berpengalaman dalam pembuatan website modern, responsif, dan user-friendly. Memiliki pengalaman dalam front-end maupun back-end, serta terbiasa menggunakan teknologi seperti HTML, CSS, JavaScript, React, dan Node.js. Dengan perhatian pada detail dan performa, saya selalu berusaha menghadirkan solusi digital yang efektif dan sesuai kebutuhan pengguna.
                </AnimatedContent>


              </div>

            </div>


          </motion.div>

          {/* Lanyard content */}

          <div className="hidden md:block absolute top-0 right-[-300px] h-full w-full z-20 ">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>
          <div className=" block md:hidden absolute top-0  h-full w-full z-20 ">
            <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
          </div>


        </section>


        {/* About Section */}
        <section id="about" className="min-h-screen py-25 ">
          <div className="container mx-auto px-6">
            
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
                  ABOUT
                </h1>

                {/* Teks utama */}
                <BlurText
                  text="About Me"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 z-10 text-[#5170ff] relative"
                />

                <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
              </div>
            </motion.div>



            <div >
              {/* Image */}
              <ElectricBorder
                color="#5170ff"

                thickness={2}
                style={{ borderRadius: 50 }} >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-16 p-6 py-10 bg-muted/30 border-0 shadow rounded rounded-[50px]">
                  <motion.div

                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center"
                  >

                    <div className='flex justify-center mx-auto    '>
                      <TiltedCard
                        imageSrc="/foto1.jpeg"
                        altText="M Reza"
                        captionText="M Reza Rizky"
                        containerHeight="400px"
                        containerWidth="400px"
                        imageHeight="100%"
                        imageWidth="100%"
                        rotateAmplitude={12}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                      />


                    </div>

                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="col-span-2"
                  >
                    <div className="flex flex-col justify-between h-full text-center md:text-left space-y-8 p-5">

                      <h1 className='text-xl font-semibold'>Moch Reza Rizky Priyanto</h1>
                      {/* Teks di bagian atas */}
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-mono">
                        Lulusan SMKN 8 Malang jurusan Rekayasa Perangkat Lunak dengan ketertarikan kuat di bidang pengembangan website.
                        Memiliki kemampuan dalam membangun website modern, responsif, dan user-friendly, baik pada sisi front-end maupun back-end.
                        Terampil menggabungkan aspek teknis pemrograman dengan kreativitas desain grafis, serta terbiasa menggunakan berbagai tools
                        dan framework modern. Berkomitmen untuk terus berkembang dan memberikan kontribusi terbaik dalam menciptakan solusi digital
                        yang efisien serta mendukung produktivitas perusahaan.
                      </p>

                      {/* Tombol di bagian bawah */}
                      <div className="flex flex-col sm:flex-row gap-4 w-ful">
                        <motion.div
                          initial={{ opacity: 0, y: 80, rotateX: -45 }}
                          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                          whileHover={{ y: -10, scale: 1.02 }}
                          className="flex-1"
                        >
                          <Button className="w-full py-5 flex items-center justify-center gap-2">
                            <GithubIcon /> Github
                          </Button>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 80, rotateX: -45 }}
                          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                          whileHover={{ y: -10, scale: 1.02 }}
                          className="flex-1"
                        >
                          <Button className="w-full py-5 flex items-center justify-center gap-2">
                            Download CV <SquareArrowOutUpRight />
                          </Button>
                        </motion.div>
                      </div>

                    </div>
                  </motion.div>

                </div>
              </ElectricBorder>

            </div>
          </div>

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
          <div className="container mx-auto px-6">
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
                  Contact
                </h1>

                {/* Teks utama */}
                <BlurText
                  text="Get In Touch"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 z-10 text-[#5170ff] relative"
                />

                <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
              </div>
            </motion.div>

            <div className="max-w-md mx-auto">
              <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Your message here..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-lg"
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex justify-center space-x-6">
              {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  whileHover={{ scale: 1.1 }}
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {social}
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground">
              © 2025 M Reza. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div >

  );
};

export default Portfolio;
