"use client";
import { motion, AnimatePresence } from 'framer-motion';

import BlurText from '@/components/BlurText';

import { Button } from '@/components/ui/button';

import TiltedCard from '@/components/TiltedCard';
import { Card } from '@/components/ui/card';
import ElectricBorder from '@/components/ElectricBorder';
import { ArrowBigUp, ArrowUpRight, ExternalLink, ExternalLinkIcon, Github, GithubIcon, SquareArrowDownRight, SquareArrowOutUpRight, SquareArrowUpRight, SquareArrowUpRightIcon } from 'lucide-react';

export default function About() {
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

    )
}
