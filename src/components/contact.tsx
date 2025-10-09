"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, MessageCircle } from "lucide-react";
import emailjs from "emailjs-com";
import BlurText from "./BlurText";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_tyqpey9", // ganti dengan service_id kamu
        "template_7e1ttmn", // ganti dengan template_id kamu
        formData,
        "r84FnD-3_mTW7gFaK" // ganti dengan public_key kamu
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email error:", error);
          setStatus("❌ Failed to send message. Try again later.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="container mx-auto px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 flex justify-center mt-20 relative"
      >
        <div className="relative w-full flex flex-col items-center">
          <h1
            className="absolute -top-10 md:-top-16 lg:-top-20 
            text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] 
            font-extrabold text-[#5170ff] opacity-20 select-none pointer-events-none 
            bg-gradient-to-b from-[#5170ff] via-[#6580f7] to-transparent bg-clip-text text-transparent
            leading-none z-0"
            style={{ WebkitTextStroke: "1px rgba(81,112,255,0.2)" }}
          >
            Contact
          </h1>

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

      {/* Contact Form */}
      <div className="max-w-md mx-auto">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
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
              value={formData.name}
              onChange={handleChange}
              required
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
              value={formData.email}
              onChange={handleChange}
              required
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
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Your message here..."
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status && (
            <p className="text-center text-sm mt-3 text-muted-foreground">{status}</p>
          )}
        </motion.form>

        {/* WhatsApp Button */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href="https://wa.me/628528459291?text=Halo%20saya%20tertarik%20dengan%20portfolio%20Anda!"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-8 border border-2 border-primary text-white py-3 rounded-lg font-medium text-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Chat via WhatsApp
        </motion.a>
      </div>
    </div>
  );
}
