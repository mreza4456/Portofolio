"use client";

import { motion } from "framer-motion";
import { Instagram, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          {/* Instagram */}
            <div className="flex flex-col justify-center items-center">
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://www.instagram.com/mreza4456" // 🔗 ganti dengan akun Instagram kamu
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-[#E4405F] transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </motion.a>
           <span className="text-center dark:text-white text-sm ">Instagram</span>
          </div>

          {/* GitHub */}
          <div className="flex flex-col justify-center items-center">
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://github.com/mreza4456" // 🔗 ganti dengan akun GitHub kamu
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#171515] dark:hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
            <span className="text-center dark:text-white text-sm ">Github</span>
          </div>
         <div className="flex flex-col justify-center items-center">
            {/* WhatsApp */}
            <motion.a
              whileHover={{ scale: 1.1, y: -3 }}
              href="https://wa.me/6289528459291?text=Halo%20Reza%2C%20saya%20tertarik%20dengan%20portfolio%20Anda!"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.a>
            <span className="text-center dark:text-white text-sm ">Whatsapp</span>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-muted-foreground text-sm">
          © 2025 <span className="text-muted-foreground font-semibold">M Reza</span>. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}
