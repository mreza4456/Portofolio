"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-md mx-auto">
        <Card className="glass">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Get in Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-foreground/80">Let's build something amazing together.</p>
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:you@example.com">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/you">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://twitter.com/you">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
