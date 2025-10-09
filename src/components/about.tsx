"use client";
import { motion } from "framer-motion";

import BlurText from "@/components/BlurText";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  SquareArrowOutUpRight,
  Linkedin,
  Instagram,
  Mail,
} from "lucide-react";
import ElectricBorder from "./ElectricBorder";

export default function About() {
  return (
    <div className="container mx-auto px-6">
      {/* Judul */}
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
              WebkitTextStroke: "1px rgba(81,112,255,0.2)",
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

      {/* Konten utama */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end"
          >
            <ElectricBorder color="#5170ff"className="rounded-full p-1">
            <motion.img
              src="foto1.jpeg"
              alt="Foto Profil"
              className="
                rounded-full
                w-48 h-48
                sm:w-60 sm:h-60
                md:w-72 md:h-72
                lg:w-80 lg:h-80
                object-cover
                shadow-lg
                mx-auto
              "
            
            />
          </ElectricBorder>
          </motion.div>

          {/* Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-2 flex flex-col justify-center"
          >
            <div className="flex flex-col justify-between h-full text-center md:text-left space-y-8 md:p-5">
              <div>
                <h1 className="text-primary text-3xl md:text-5xl font-bold">Hello, I'm</h1>
                <h1 className="text-xl md:text-4xl dark:text-white font-bold">
                  Moch Reza Rizky Priyanto
                </h1>
              </div>

              <p className="text-base sm:text-base text-muted-foreground leading-relaxed">
                Lulusan SMKN 8 Malang jurusan Rekayasa Perangkat Lunak dengan
                ketertarikan kuat di bidang pengembangan website. Memiliki
                kemampuan dalam membangun website modern, responsif, dan
                user-friendly, baik pada sisi front-end maupun back-end.
                Terampil menggabungkan aspek teknis pemrograman dengan
                kreativitas desain grafis, serta terbiasa menggunakan berbagai
                tools dan framework modern. Berkomitmen untuk terus berkembang
                dan memberikan kontribusi terbaik dalam menciptakan solusi
                digital yang efisien serta mendukung produktivitas perusahaan.
              </p>

              {/* Tombol utama */}
              <div className="flex flex-col md:flex-row gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 80, rotateX: -45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex-1"
                >
                  <Button
                    className="w-full py-5 flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() =>
                      window.open("https://github.com/mreza4456", "_blank")
                    }
                  >
                    <GithubIcon /> Github
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 80, rotateX: -45 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="flex-1"
                >
                  <a
                    href="/_CV Resume.pdf"
                    download="Moch-Reza-Rizky-Priyanto-CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button className="w-full py-5 flex items-center justify-center gap-2 cursor-pointer">
                      Download CV <SquareArrowOutUpRight />
                    </Button>
                  </a>
                </motion.div>
              </div>

              {/* 🔗 Media Sosial */}
            
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
