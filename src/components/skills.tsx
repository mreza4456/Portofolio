"use client";

import { motion } from "framer-motion";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiNodedotjs,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiBootstrap,
    SiSupabase,
    SiShadcnui,
    SiAdobephotoshop,
    SiCoreldraw,
    SiFigma,
    SiMysql,
    SiPhp,
    SiPostgresql,
    SiCanva,
    SiLaravel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

import BlurText from "./BlurText";
import { Card } from "./ui/card";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";

// ✅ Update kategori: frontend, backend, design
const projects = [
    // ✅ Frontend
    { logo: <SiJavascript className="text-yellow-400" />, name: "JavaScript", category: "Frontend" },
    { logo: <SiTypescript className="text-blue-400" />, name: "TypeScript", category: "Frontend" },
    { logo: <SiHtml5 className="text-orange-500" />, name: "HTML5", category: "Frontend" },
    { logo: <SiCss3 className="text-blue-500" />, name: "CSS3", category: "Frontend" },
    { logo: <SiReact className="text-sky-400" />, name: "React", category: "Frontend" },
    { logo: <SiNextdotjs className="dark:text-white" />, name: "Next.js", category: "Frontend" },
    { logo: <SiShadcnui className="dark:text-white" />, name: "Shadcn", category: "Frontend" },
    { logo: <SiTailwindcss className="text-cyan-400" />, name: "TailwindCSS", category: "Frontend" },
    { logo: <SiBootstrap className="text-violet-500" />, name: "Bootstrap", category: "Frontend" },

    // ✅ Backend
    { logo: <SiNodedotjs className="text-green-500" />, name: "Node.js", category: "Backend" },
    { logo: <SiLaravel className="text-red-400" />, name: "Laravel", category: "Backend" },
    { logo: <SiPhp className="text-violet-400" />, name: "PHP", category: "Backend" },
    { logo: <SiSupabase className="text-green-600" />, name: "Supabase", category: "Database" },
    { logo: <SiMysql className="text-blue-300" />, name: "MySQL", category: "Database" },
    { logo: <SiPostgresql className="text-blue-600" />, name: "PostgreSQL", category: "Database" },


    // ✅ Design
    { logo: <SiAdobephotoshop className="text-blue-700" />, name: "Photoshop", category: "Design" },
    { logo: <SiCoreldraw className="text-green-500" />, name: "CorelDraw", category: "Design" },
    { logo: <SiFigma className="dark:text-white" />, name: "Figma", category: "Design" },
    { logo: <SiCanva className="text-cyan-500" />, name: "Canva", category: "Design" },
    // bisa dipindah sesuai kebutuhan
];

// Ambil kategori unik
const categories = [...new Set(projects.map((p) => p.category))];

export default function Skills() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="py-20 px-4"
        >
            <div className="max-w-7xl mx-auto">
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
                                WebkitTextStroke: '1px rgba(81,112,255,0.2)',
                            }}
                        >
                            Technologies
                        </h1>

                        {/* Teks utama */}
                        <BlurText
                            text="Tools & Technologies"
                            delay={150}
                            animateBy="words"
                            direction="top"
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 z-10 text-[#5170ff] relative"
                        />

                        <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
                    </div>
                </motion.div>

                {/* Tabs */}


                <Tabs defaultValue="Frontend" className="w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}

                    >
                        <TabsList className="flex flex-wrap justify-center gap-2 mb-8 dark:bg-black mx-auto">
                            {categories.map((cat) => {
                                let activeColor = "";
                                if (cat)
                                    activeColor =
                                        "data-[state=active]:!bg-primary data-[state=active]:!text-white";


                                return (
                                    <TabsTrigger
                                        key={cat}
                                        value={cat}
                                        className={`px-4 py-3  rounded-full text-md font-medium ${activeColor}`}
                                    >
                                        {cat}
                                    </TabsTrigger>
                                );
                            })}
                        </TabsList>
                    </motion.div>

                    {categories.map((cat) => (
                        <TabsContent key={cat} value={cat}>
                            <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                                {projects
                                    .filter((p) => p.category === cat)
                                    .map((project, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 40 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: false }}
                                            whileHover={{ scale: 1.05, y: -6 }}
                                            transition={{
                                                delay: i * 0.05,
                                                duration: 0.5,
                                                ease: "easeInOut",
                                                type: "tween",
                                            }}
                                            className="flex"
                                        >
                                            <Card className="bg-muted/50 border-0 w-full h-full flex flex-col items-center justify-center text-center p-3 sm:p-4 md:p-5">
                                                <div className="text-4xl sm:text-5xl md:text-6xl mb-2">
                                                    {project.logo}
                                                </div>
                                                <p className="text-sm sm:text-base md:text-lg dark:text-white font-medium">
                                                    {project.name}
                                                </p>
                                            </Card>
                                        </motion.div>
                                    ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

            </div>
        </motion.section>
    );
}
