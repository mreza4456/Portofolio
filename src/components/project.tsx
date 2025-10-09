"use client";
import { ExternalLinkIcon, Github, SquareArrowDown, SquareArrowOutUpRight } from "lucide-react";
import BlurText from "./BlurText";
import { motion } from "framer-motion";
import CarouselWithFooter from "./carousel-07";
import { useState } from "react";
import { Badge } from "./ui/badge";

interface Tech {
  tech: string;
}

interface CarouselImage {
  image: string;
}

interface Project {
  title: string;
  description: string;
  tech: Tech[];
  carousel: CarouselImage[];
  github: string;
  basis?: string;
}
export default function Projects() {
  const projects = [
    {
      title: "Membuat Website Untuk Ticket Bioskop",
      description: "Platform pemesanan tiket bioskop online yang mengambil referensi dari cinemaXX1 yang dibangun menggunakan Next.js dan Supabase. Website ini memungkinkan pengguna untuk menjelajahi daftar film terbaru, melihat jadwal tayang, memilih kursi secara interaktif, dan melakukan pembayaran.Aplikasi ini memiliki sistem autentikasi pengguna, dashboard admin untuk pengelolaan film dan jadwal tayang, serta integrasi payment gateway untuk proses transaksi.",
      tech: [{ tech: "Next.js" }, { tech: "Supabase" }, { tech: "ShadCN" }, { tech: "TailwindCSS" }],
      carousel: [
        { image: "/carousel/movie-1.png" },
        { image: "/carousel/movie-2.png" },
        { image: "/carousel/movie-3.png" },
        { image: "/carousel/movie-4.png" },
        { image: "/carousel/movie-6.png" },
      ],
      github: "https://github.com/mreza4456/movie-ticket.git"

    },
    {
      title: "Membuat Website Aplikasi untuk Absensi",
      description: "Platform absensi digital berbasis web yang dibangun menggunakan Next.js dan Supabase. Sistem ini dirancang untuk mendukung multi sekolah dalam satu platform, sehingga setiap sekolah dapat mengelola data absensi secara mandiri namun tetap dalam satu sistem terpusat. Proses absensi dilakukan secara otomatis menggunakan RFID card, sehingga lebih cepat, akurat, dan efisien. Aplikasi ini mendukung autentikasi multi-role dengan menggunakan RBAC (Role-Based Access Control) untuk membedakan hak akses pengguna, serta pencatatan kehadiran otomatis",
      tech: [{ tech: "Next.js" }, { tech: "Supabase" }, { tech: "ShadCN" }, { tech: "TailwindCSS" }],
      carousel: [
        { image: "/carousel/Screenshot (234).png" },
        { image: "/carousel/Screenshot (235).png" },
        { image: "/carousel/Screenshot (236).png" },
        { image: "/carousel/Screenshot (237).png" },
        { image: "/carousel/Screenshot (238).png" },
        { image: "/carousel/Screenshot (239).png" },
        { image: "/carousel/Screenshot (240).png" },


      ],
      github: "https://github.com/mreza4456/Presensi.git"
    },
    {
      title: "Membuat Undangan Online 1",
      description: "website undangan digital interaktif yang dibangun menggunakan HTML, CSS, JavaScript, dan Bootstrap, dengan animasi menggunakan AOS (Animate On Scroll). Website ini dirancang untuk memberikan kesan elegan dan modern pada setiap acara seperti pernikahan, ulang tahun, gathering, atau acara resmi lainnya. Pengunjung dapat melihat detail acara, lokasi, galeri foto, serta melakukan RSVP langsung dari website. Data RSVP akan tersimpan otomatis ke file Excel, sehingga pemilik acara dapat dengan mudah memantau daftar tamu undangan yang akan hadir.",
      tech: [{ tech: "HTML" }, { tech: "CSS" }, { tech: "bootsrap" }],
      carousel: [
        { image: "/carousel/Screenshot_19.png" },
        { image: "/carousel/Screenshot_1.png" },
        { image: "/carousel/Screenshot_2.png" },
        { image: "/carousel/Screenshot_3.png" },
        { image: "/carousel/Screenshot_4.png" },
        { image: "/carousel/Screenshot_5.png" },
        { image: "/carousel/Screenshot_6.png" },
        { image: "/carousel/Screenshot_7.png" },
        { image: "/carousel/Screenshot_8.png" },


      ],
      basis: "basis-1/3",
      github: "https://github.com/mreza4456/Undangan-Digital.git",
      dots:7
    },
    {
      title: "Membuat Undangan Online 2",
      description: "Website undangan online interaktif yang dibangun menggunakan Next.js sebagai frontend framework, Tailwind CSS untuk styling responsif, dan Framer Motion untuk efek animasi yang halus dan profesional. Proyek ini dikembangkan untuk memberikan pengalaman undangan digital yang modern, elegan, dan mudah dikelola. Website ini dilengkapi dengan halaman admin untuk mengelola data RSVP (tamu undangan), yang terhubung langsung dengan Supabase sebagai database real-time. Setiap tamu dapat mengisi RSVP langsung dari halaman undangan, dan data tersebut secara otomatis tersimpan di database untuk memudahkan pemantauan kehadiran.",
      tech: [{ tech: "Next.js" }, { tech: "Supabase" }, { tech: "Tailwind" }],
      carousel: [
        { image: "/carousel/Screenshot_9.png" },
        { image: "/carousel/Screenshot_10.png" },
        { image: "/carousel/Screenshot_11.png" },
        { image: "/carousel/Screenshot_12.png" },
        { image: "/carousel/Screenshot_13.png" },
        { image: "/carousel/Screenshot_14.png" },
        { image: "/carousel/Screenshot_15.png" },
        { image: "/carousel/Screenshot_16.png" },


      ],
      basis: "basis-1/3",
      github: "https://github.com/UndanganDigital-Hansel/Alvina-Angga.git",
      dots:6
    },
    {
      title: "Membuat Web Data Ekskul Siswa",
      description: "Website ini merupakan aplikasi manajemen data ekstrakurikuler siswa yang dikembangkan menggunakan Laravel sebagai framework backend dan Bootstrap untuk tampilan antarmuka yang responsif dan modern. Sistem ini dirancang untuk mempermudah pihak sekolah dalam mengelola kegiatan ekstrakurikuler",
      tech: [{ tech: "Laravel" }, { tech: "Bootstrap" }],
      carousel: [
        { image: "/carousel/Screenshot_18.png" },
        { image: "/carousel/Screenshot_20.png" },
        { image: "/carousel/Screenshot_21.png" },



      ],
      github: "https://github.com/mreza4456/Laravel-DataSiswa.git"

    },
    {
      title: "Slicing Web Design dari Figma ke HTML",
      description: "Project ini berfokus pada proses slicing desain UI dari Figma menjadi halaman web yang interaktif dan responsif menggunakan Bootstrap 5. Tujuannya adalah mengubah desain statis menjadi website fungsional yang sesuai dengan tampilan dan gaya visual rancangan awal, sekaligus memastikan pengalaman pengguna yang optimal di berbagai ukuran layar.",
      tech: [{ tech: "HTML" }, { tech: "Bootstrap" }, { tech: "CSS" }],
      carousel: [
        { image: "/carousel/Screenshot_22.png" },
        { image: "/carousel/Screenshot_23.png" },
        { image: "/carousel/Screenshot_24.png" },
        { image: "/carousel/Screenshot_25.png" },
        { image: "/carousel/Screenshot_26.png" },
        { image: "/carousel/Screenshot_27.png" },
        { image: "/carousel/Screenshot_28.png" },
        { image: "/carousel/Screenshot_29.png" },
        { image: "/carousel/Screenshot_30.png" },
      ],
      github: "https://github.com/mreza4456/slicing.git"

    },
  ];

  // ==== 🔧 State Hooks ====
  const [visibleCount, setVisibleCount] = useState<number>(3);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  // ==== ⚙️ Handlers ====
  const toggleReadMore = (index: number) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  // ==== 🧱 UI ====
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            text-[3rem] sm:text-[5rem] md:text-[8rem] lg:text-[10rem] 
            font-extrabold text-[#5170ff] opacity-20 select-none
            pointer-events-none bg-gradient-to-b from-[#5170ff]
            via-[#6580f7] to-transparent bg-clip-text text-transparent
            leading-none z-0"
          >
            PROJECTS
          </h1>

          <BlurText
            text="My Projects"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 z-10 text-[#5170ff]"
          />
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto"></div>
        </div>
      </motion.div>

      {/* Project Cards */}
      <div className="flex flex-col gap-8">
        {projects.slice(0, visibleCount).map((p, index) => {
          const isExpanded = expanded[index];
          const shortText = p.description.length > 180
            ? p.description.slice(0, 180) + "..."
            : p.description;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0.3, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              <div className="bg-muted/50 border border-primary rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                  {/* Carousel */}
                  <div className="w-full">
                    <CarouselWithFooter images={p.carousel} basisClass={p.basis || "basis-full"} customDotsCount={p.dots}/>
                  </div>

                  {/* Text Section */}
                  <div className="p-2 sm:p-4 md:p-6 flex flex-col justify-between gap-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold ">
                      {p.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 justify-start md:justify-start">
                      {p.tech.map((t, i) => (
                        <Badge
                          key={i}
                          className="bg-secondary/60 rounded "
                        >
                          {t.tech}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed text-justify">
                      {isExpanded ? p.description : shortText}


                      {p.description.length > 200 && (
                        <span className="cursor-pointer ml-2 text-primary underline"  onClick={() => toggleReadMore(index)}>
                            {isExpanded ? "Read Less" : "Read More"}
                        </span>
                      )}
                    </p>


                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex justify-center w-full  md:justify-end gap-3 mt-4"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-6 py-2 bg-primary cursor-pointer rounded-lg text-white text-sm font-medium shadow hover:shadow-lg transition-all"
                        onClick={() => window.open(p.github, "_blank")}
                      >
                        <Github size={16} />View On Github<ExternalLinkIcon size={16} />
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < projects.length && (
        <div className="flex justify-center mt-10">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={loadMore}
            className="px-6 py-2 bg-primary text-white rounded-lg text-sm font-medium shadow hover:shadow-lg transition-all"
          >
            Load More
          </motion.button>
        </div>
      )}
    </div>
  );
}