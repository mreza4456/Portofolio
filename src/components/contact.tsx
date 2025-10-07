"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";
import BlurText from "./BlurText";

export default function Contact() {
  return (
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
  );
}
