"use client";
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer(){
    return(
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
    )
}