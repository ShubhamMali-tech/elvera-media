import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, animate, useInView } from 'motion/react';
import { ArrowUpRight, Play, Star, ChevronRight, Menu, X, Instagram, Twitter, Linkedin, Facebook, MoveRight, Quote, Upload, CheckCircle2, Check } from 'lucide-react';
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { supabase } from "../supabase";

import chateImg from "../imports/ChatGPT_Image_Apr_15__2026__11_16_26_PM.png";
import heavenImg from "../imports/Gemini_Generated_Image_icouxzicouxzicou.png";
import ashokImg from "../imports/ChatGPT_Image_Apr_27__2026__10_11_29_PM.png";
import sairamImg from "../imports/Find_Your_Wild__Bring_Earth_s_Calm_Home_.jpeg";

import chateLogo from "../imports/ChatGPT_Image_May_25__2026__04_55_08_PM.png";
import heavenLogo from "../imports/ChatGPT_Image_May_25__2026__04_55_58_PM.png";
import ashokLogo from "../imports/ChatGPT_Image_Apr_22__2026__06_25_27_PM.png";
import sairamLogo from "../imports/ChatGPT_Image_May_25__2026__04_53_33_PM.png";

import heroLeftImg from "../imports/LOGO2.png";
import heroRightImg from "../imports/RESULTS.png";
import jwelleryImg from "../imports/ChatGPT_Image_Jul_10__2026__10_11_04_PM.png";
import resortCampaignImg from "../imports/ChatGPT_Image_Mar_29__2026__10_04_17_AM.png";
import attaChakkiImg from "../imports/photo_2026-07-19_13-35-05.jpg";
import educationalInstituteImg from "../imports/ChatGPT_Image_Jul_19__2026__01_44_30_PM.png";
import woodenDoorImg from "../imports/ChatGPT_Image_Jul_19__2026__01_48_07_PM.png";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Magnetic({ children }: { children: React.ReactElement }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-fit"
    >
      {children}
    </motion.div>
  );
}

function Navbar({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavigate = (page: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col items-center pt-6 px-4 pointer-events-none">
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto w-full max-w-6xl flex items-center justify-between py-3 px-4 md:px-6 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)] rounded-full"
      >
        <Magnetic>
          <div onClick={() => onNavigate('home')} className="text-xl md:text-2xl font-heading font-bold tracking-tight pl-2 cursor-pointer hover:text-primary/80 transition-colors">Elvera Media.</div>
        </Magnetic>
        
        <nav className="hidden md:flex items-center gap-8 bg-white/50 px-6 py-2.5 rounded-full border border-white/70 shadow-sm backdrop-blur-md">
          <button onClick={() => onNavigate('work')} className="text-sm font-medium hover:text-primary/60 transition-colors">Work</button>
          <button onClick={() => onNavigate('services')} className="text-sm font-medium hover:text-primary/60 transition-colors">Services</button>
          <button onClick={() => onNavigate('packages')} className="text-sm font-medium hover:text-primary/60 transition-colors">Packages</button>
          <button onClick={() => onNavigate('about')} className="text-sm font-medium hover:text-primary/60 transition-colors">About</button>
        </nav>
        
        <Magnetic>
          <button onClick={() => onNavigate('lets-grow')} className="hidden md:flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-medium hover:scale-105 transition-transform shadow-md">
            LET'S GROW
          </button>
        </Magnetic>
        <button 
          onClick={() => setIsMobileMenuOpen(prev => !prev)} 
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/60 border border-white/80 mr-1 backdrop-blur-md"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isMobileMenuOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-5 h-5" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto md:hidden w-full max-w-6xl mt-3 flex flex-col gap-2 bg-white/80 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.08)] rounded-[28px] p-4"
          >
            <button onClick={() => handleMobileNavigate('work')} className="text-left text-base font-medium px-4 py-3 rounded-2xl hover:bg-primary/5 transition-colors">Work</button>
            <button onClick={() => handleMobileNavigate('services')} className="text-left text-base font-medium px-4 py-3 rounded-2xl hover:bg-primary/5 transition-colors">Services</button>
            <button onClick={() => handleMobileNavigate('packages')} className="text-left text-base font-medium px-4 py-3 rounded-2xl hover:bg-primary/5 transition-colors">Packages</button>
            <button onClick={() => handleMobileNavigate('about')} className="text-left text-base font-medium px-4 py-3 rounded-2xl hover:bg-primary/5 transition-colors">About</button>
            <button onClick={() => handleMobileNavigate('lets-grow')} className="mt-2 flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-md">
              LET'S GROW
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionGrid() {
  return (
    <div 
      className="absolute inset-0 z-0 pointer-events-none opacity-60" 
      style={{ 
        backgroundImage: 'linear-gradient(#E6E6E6 1px, transparent 1px), linear-gradient(90deg, #E6E6E6 1px, transparent 1px)', 
        backgroundSize: '40px 40px',
        WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
        maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'
      }} 
    />
  );
}

function Hero({ onNavigate }: { onNavigate: (page: string) => void }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y3 = useTransform(scrollY, [0, 1000], [0, 10]);
  const y4 = useTransform(scrollY, [0, 1000], [0, -10]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-20 overflow-hidden">
      <SectionGrid />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-neutral-200 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-neutral-300 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[30%] w-[600px] h-[600px] bg-neutral-100 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="container relative z-30 mx-auto px-6 md:px-12 flex flex-col items-center text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-primary/10 bg-white/60 backdrop-blur-md mb-10 shadow-sm pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">Accepting new projects</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl md:text-8xl lg:text-[8rem] font-heading font-medium leading-[1.05] tracking-tight max-w-6xl mx-auto"
        >
          We Turn Attention <br className="hidden md:block" /> Into <span className="italic font-light text-primary/70">Revenue.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed"
        >
          Elvera Media helps schools, resorts, local businesses and growing brands increase visibility, generate leads and build a stronger digital presence through content creation, social media management and performance marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-center gap-6 pointer-events-auto"
        >
          <Magnetic>
            <button onClick={() => onNavigate('start-project')} className="rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300 shadow-xl shadow-primary/10">
              LET'S GROW <ArrowUpRight className="w-4 h-4" />
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Floating Image Elements */}
      <motion.div
        style={{ y: y3, perspective: 1000 }}
        className="absolute hidden lg:block left-[4%] top-[50%] z-0"
      >
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: -8, y: 0 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            rotate: [-8, -6, -10, -8], 
            y: [-8, 8, -8] 
          }}
          transition={{ 
            opacity: { duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.0 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.0 }
          }}
          whileHover={{ scale: 1.03, rotate: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }}
          className="relative w-[180px] h-[260px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 bg-white cursor-pointer hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] transition-shadow duration-250 ease-out"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")` }}
        >
          <img src={jwelleryImg} alt="Jewellery Campaign" className="w-full h-full object-cover scale-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none mix-blend-overlay" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: y4, perspective: 1000 }}
        className="absolute hidden lg:block right-[4%] top-[55%] z-0"
      >
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: 10, y: 0 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            rotate: [10, 8, 12, 10], 
            y: [8, -8, 8] 
          }}
          transition={{ 
            opacity: { duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 1.4, delay: 0.7, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.1 },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }
          }}
          whileHover={{ scale: 1.03, rotate: 0, rotateX: 0, rotateY: 0, rotateZ: 0 }}
          className="relative w-[180px] h-[260px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 bg-white cursor-pointer hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.2)] transition-shadow duration-250 ease-out"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E")` }}
        >
          <img src={resortCampaignImg} alt="Resort Campaign" className="w-full h-full object-cover scale-[1.05]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none mix-blend-overlay" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: y1, perspective: 1000 }}
        className="absolute hidden lg:block left-[8%] top-[20%] z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: 100, rotate: 0, y: 0 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            rotate: -6, 
            y: [-15, 15, -15] 
          }}
          transition={{ 
            opacity: { duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.8 }
          }}
          whileHover={{ scale: 1.03, rotateX: 10, rotateY: -10, rotateZ: -2 }}
          className="relative w-[180px] h-[260px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 bg-white/40 backdrop-blur-xl flex items-center justify-center"
        >
          <img src={heroLeftImg} alt="Project Showcase Left" className="w-full h-full object-contain drop-shadow-sm scale-[1.35]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/60 pointer-events-none mix-blend-overlay" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ y: y2, perspective: 1000 }}
        className="absolute hidden lg:block right-[8%] top-[30%] z-10"
      >
        <motion.div
          initial={{ opacity: 0, x: -100, rotate: 0, y: 0 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            rotate: 4, 
            y: [15, -15, 15] 
          }}
          transition={{ 
            opacity: { duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
            x: { duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] },
            y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.9 }
          }}
          whileHover={{ scale: 1.03, rotateX: -10, rotateY: 10, rotateZ: 2 }}
          className="relative w-[200px] h-[280px] rounded-[32px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] border border-white/50 bg-white/40 backdrop-blur-xl flex items-center justify-center"
        >
          <img src={heroRightImg} alt="Project Showcase Right" className="w-full h-full object-contain drop-shadow-sm scale-[1.25]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-white/60 pointer-events-none mix-blend-overlay" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FeaturedWork({ isStandalone, onNavigate }: { isStandalone?: boolean, onNavigate?: (page: string) => void }) {
  const projects = [
    {
      title: "Chate Group of Education",
      category: "Education Marketing & Lead Generation",
      metrics: "100+ Admission Inquiries",
      story: "During the admission season, Chate Group of Education wanted to improve visibility and generate more student inquiries. Through a combination of content creation and targeted Meta advertising, we helped connect the institution with the right audience and increase admission-related engagement.",
      results: ["100+ Admission Inquiries", "5L+ Reach", "3 Month Campaign", "Meta Ads & Content Strategy"],
      image: chateImg,
      shape: "rounded-[40px] md:rounded-[40px] md:rounded-tr-[120px]",
      width: "w-full md:w-[58%]"
    },
    {
      title: "Heaven Valley Resort",
      category: "Content Creation & Social Media Growth",
      metrics: "2L+ Organic Reach",
      story: "Heaven Valley Resort wanted to strengthen its digital presence and showcase its experience online. Through professional content creation, promotional videos and a focused social media strategy, we helped increase visibility and attract a wider audience organically.",
      results: ["2L+ Organic Reach", "4 Promotional Videos", "Improved Brand Visibility", "Social Media Growth Strategy"],
      image: heavenImg,
      shape: "rounded-[40px] md:rounded-[40px] md:rounded-bl-[120px]",
      width: "w-full md:w-[38%]"
    },
    {
      title: "Dr. Ashok Mali Int. School",
      category: "School Branding & Digital Presence",
      metrics: "Improved Parent Engagement",
      story: "We helped the school create a stronger digital identity through consistent content, educational storytelling and professional communication. The result was a more engaging online presence that better reflected the institution's values and vision.",
      results: ["Improved Parent Engagement", "Professional Brand Positioning", "Consistent Content Strategy", "Enhanced Digital Presence"],
      image: ashokImg,
      shape: "rounded-[40px] md:rounded-[120px] md:rounded-br-[40px]",
      width: "w-full md:w-[45%]"
    },
    {
      title: "Shree Sairam Industries",
      category: "Industrial Branding & Business Marketing",
      metrics: "Stronger Online Presence",
      story: "Shree Sairam Industries required a stronger online presence to represent its capabilities and professionalism. Through branding-focused content and digital communication, we helped create a more credible and business-ready digital identity.",
      results: ["Stronger Online Presence", "Improved Brand Credibility", "Professional Business Content", "Increased Market Visibility"],
      image: sairamImg,
      shape: "rounded-[40px] md:rounded-[40px] md:rounded-tl-[120px]",
      width: "w-full md:w-[51%]"
    }
  ];

  return (
    <section id="work" className={cn("bg-white relative z-20 shadow-[0_-20px_60px_-15px_rgba(17,17,17,0.05)]", isStandalone ? "py-32 min-h-screen" : "py-32 rounded-t-[60px] md:rounded-t-[100px]")}>
      <SectionGrid />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {isStandalone && onNavigate && (
          <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>
        )}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="text-sm font-medium text-primary mb-6">FEATURED WORK</div>
            <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">Real Businesses. Real Growth.</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every project is built around a simple goal — helping businesses attract attention, build trust and generate measurable growth through strategic marketing, content creation and performance-driven campaigns.
            </p>
          </div>
          {!isStandalone && onNavigate && (
            <Magnetic>
              <button onClick={() => onNavigate('work')} className="rounded-full border border-primary/10 px-6 py-3 font-medium flex items-center gap-2 hover:bg-primary/5 transition-colors">
                View Case Studies <MoveRight className="w-4 h-4" />
              </button>
            </Magnetic>
          )}
        </div>

        <div className="flex flex-wrap gap-8 md:gap-x-[4%] md:gap-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn("group cursor-pointer relative", project.width)}
            >
              <div className={cn("overflow-hidden relative w-full aspect-[4/3] bg-neutral-100", project.shape)}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.metrics}
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-heading font-medium">{project.title}</h3>
                    <p className="text-primary font-medium mt-1 text-sm">{project.category}</p>
                  </div>
                  <div className="w-12 h-12 flex-shrink-0 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground leading-relaxed">{project.story}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.results.map((r, idx) => (
                    <span key={idx} className="text-xs font-medium px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-full">{r}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({ isStandalone, onNavigate }: { isStandalone?: boolean, onNavigate?: (page: string) => void }) {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    { 
      name: "Social Media Management", 
      delay: 0,
      description: "Manage your brand consistently across social platforms through strategic planning, content publishing, audience engagement, and monthly performance tracking.",
      features: ["Content Planning", "Daily Posting", "Community Management", "Monthly Analytics"]
    },
    { 
      name: "Performance Marketing", 
      delay: 0.1,
      description: "Generate qualified leads and measurable business growth through optimized Meta and Google advertising campaigns.",
      features: ["Meta Ads", "Google Ads", "Lead Generation", "Campaign Optimization"]
    },
    { 
      name: "Content Creation", 
      delay: 0.2,
      description: "Create premium visual content that builds trust and increases engagement across all digital platforms.",
      features: ["Reels & Short Videos", "Graphic Design", "Product Photography", "Video Editing"]
    },
    { 
      name: "Brand Strategy", 
      delay: 0.3,
      description: "Develop a strong and memorable brand identity with strategic positioning, messaging, and visual consistency.",
      features: ["Brand Identity", "Logo & Visual System", "Brand Messaging", "Growth Strategy"]
    }
  ];

  const handleLearnMore = () => {
    if (onNavigate) {
      const contactEl = document.getElementById('contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        onNavigate('lets-grow');
      }
    }
  };

  return (
    <section id="services" className={cn("bg-background relative overflow-hidden", isStandalone ? "pt-32 pb-20 min-h-screen" : "py-32")}>
      <SectionGrid />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {isStandalone && onNavigate && (
          <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>
        )}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">Capabilities</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A full spectrum of creative and technical services designed to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: service.delay, type: "spring", bounce: 0.4 }}
              onClick={() => setActiveService(activeService === i ? null : i)}
              className={cn(
                "group rounded-full border shadow-sm px-8 py-5 md:px-10 md:py-6 flex items-center gap-3 justify-center text-center cursor-pointer transition-all duration-300",
                activeService === i 
                  ? "bg-[#111111] text-white border-[#111111] shadow-[0_4px_20px_rgba(17,17,17,0.15)] scale-[0.98]" 
                  : "bg-white text-black border-primary/5 hover:border-primary/20 hover:shadow-lg hover:-translate-y-1"
              )}
            >
              <h3 className="text-lg md:text-xl font-medium relative z-10">{service.name}</h3>
              <motion.div
                variants={{
                  hover: { x: 0, opacity: 1, width: "auto", display: "block" }
                }}
                animate={activeService === i ? { x: 0, opacity: 1, width: "auto", display: "block" } : {}}
                initial={{ x: -10, opacity: 0, width: 0, display: "none" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={cn("overflow-hidden flex items-center justify-center", activeService === i ? "text-white" : "text-primary")}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.div>
          ))}
        </div>

      <WhatsAppFloatingButton />
      
      <AnimatePresence mode="wait">
          {activeService !== null && (
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="bg-white rounded-[40px] p-8 md:p-12 lg:p-16 border border-primary/5 shadow-sm max-w-4xl mx-auto flex flex-col items-center text-center">
                <div className="flex-1 w-full">
                  <h3 className="text-3xl md:text-4xl font-heading font-medium mb-6">
                    {services[activeService].name}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
                    {services[activeService].description}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto text-left">
                    {services[activeService].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-background/50 rounded-2xl p-4 border border-primary/5">
                        <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary shrink-0">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-primary/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Magnetic>
                      <button 
                        onClick={handleLearnMore}
                        className="rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-primary/10"
                      >
                        Learn More <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </Magnetic>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Counter({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    let controls: any;
    if (inView && ref.current) {
      controls = animate(0, value, {
        duration: 2.5,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          if (ref.current) {
            ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
          }
        }
      });
    }
    return () => controls?.stop();
  }, [inView, value, prefix, suffix, decimals]);

  return <span ref={ref} dangerouslySetInnerHTML={{ __html: `${prefix}0${suffix}` }} />;
}

function Packages({ isStandalone, onNavigate }: { isStandalone?: boolean, onNavigate?: (page: string) => void }) {
  const packages = [
    {
      name: "Starter",
      price: "₹12,000",
      period: " / Month",
      description: "Best for small businesses.",
      features: [
        "6 Professional Reels",
        "6 Social Media Posts (4 Creative Posters & 2 Basic Posts)",
        "Instagram & Facebook Management",
        "WhatsApp Business Setup",
        "Basic Content Strategy"
      ],
      buttonText: "Get Started",
      popular: false
    },
    {
      name: "Growth",
      price: "₹22,000",
      period: " / Month",
      description: "Most Popular",
      features: [
        "12 Professional Reels",
        "12 Social Media Posts (8 Premium Campaign Posters & 4 Carousels/Other)",
        "Instagram & Facebook Management",
        "WhatsApp Business Setup",
        "Meta Ads Setup",
        "4 Marketing Campaigns",
        "Monthly Performance Report"
      ],
      buttonText: "Choose Growth",
      popular: true
    },
    {
      name: "Premium",
      price: "₹33,000",
      period: " / Month",
      description: "For brands focused on maximum growth.",
      features: [
        "18 Premium Reels",
        "15 Creative Posts (12 Premium Creative Posters & 3 Carousels)",
        "4 A+ Design Posters",
        "Instagram & Facebook Management",
        "WhatsApp Business Setup",
        "Meta Ads Setup",
        "6 Marketing Campaigns",
        "Influencer Collaboration Support",
        "Priority Support"
      ],
      buttonText: "Contact Us",
      popular: false
    }
  ];

  return (
    <section id="packages" className={cn("bg-background relative overflow-hidden", isStandalone ? "pt-32 pb-20 min-h-screen" : "py-32")}>
      <SectionGrid />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {isStandalone && onNavigate && (
          <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>
        )}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">Packages</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the plan that best fits your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.25, delay: i * 0.1, ease: "easeOut" }}
              className={cn(
                "relative bg-white rounded-[24px] p-8 md:p-10 flex flex-col transition-all duration-200",
                pkg.popular 
                  ? "border border-primary/10 shadow-[0_8px_40px_rgba(17,17,17,0.06)] ring-1 ring-primary/5" 
                  : "border border-primary/5 shadow-sm hover:shadow-md"
              )}
            >
              {pkg.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#111111] text-white text-xs font-medium px-4 py-1.5 rounded-full tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-heading font-medium mb-4">{pkg.name}</h3>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="text-4xl font-heading font-medium tracking-tight">{pkg.price}</span>
                  <span className="text-muted-foreground font-medium text-sm">{pkg.period}</span>
                </div>
                <p className={cn("text-sm", pkg.popular ? "text-primary/90 font-medium" : "text-muted-foreground")}>{pkg.description}</p>
              </div>

              <div className="flex-1">
                <div className="text-sm font-medium mb-4 text-primary/60">Included:</div>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm text-primary/80 leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => onNavigate?.('lets-grow')}
                className="w-full rounded-full bg-[#111111] text-white px-6 py-4 text-sm font-medium hover:bg-black/80 hover:shadow-md active:scale-[0.98] transition-all duration-200 ease-out"
              >
                {pkg.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results({ onNavigate }: { onNavigate?: (page: string) => void }) {
  const metrics = [
    { value: 10, prefix: "", suffix: "L+", label: "Reach Generated", decimals: 0 },
    { value: 100, prefix: "", suffix: "+", label: "Admission Leads", decimals: 0 },
    { value: 1000, prefix: "", suffix: "+", label: "Customer Interactions", decimals: 0 },
    { value: 10, prefix: "", suffix: "+", label: "Projects Delivered", decimals: 0 }
  ];

  return (
    <section className="py-32 bg-primary text-primary-foreground relative rounded-[60px] md:rounded-[100px] mx-4 md:mx-12 my-12 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
         <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full mix-blend-overlay filter blur-[120px] animate-blob" />
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6 leading-tight">
              Numbers that <br className="hidden md:block"/> speak for <span className="italic text-white/70">themselves.</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg">
              We don't just create beautiful designs; we engineer systems that consistently outperform industry benchmarks.
            </p>
            <Magnetic>
              <button onClick={() => onNavigate?.('work')} className="rounded-full bg-white text-primary px-8 py-4 font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                View Case Studies <ArrowUpRight className="w-4 h-4" />
              </button>
            </Magnetic>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-10 flex flex-col justify-center items-center text-center hover:bg-white/15 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-heading font-medium mb-2">
                  <Counter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} decimals={metric.decimals} />
                </div>
                <div className="text-sm md:text-base text-white/70">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const defaultTestimonials = [
    {
      name: "Chate Group of Education",
      role: "Client",
      image: chateLogo,
      text: "The campaigns delivered consistent admission inquiries and helped us reach the right audience during the admission season."
    },
    {
      name: "Heaven Valley Resort",
      role: "Client",
      image: heavenLogo,
      text: "The content quality and social media strategy significantly improved our online visibility and engagement."
    },
    {
      name: "Dr. Ashok Mali Int. School",
      role: "Client",
      image: ashokLogo,
      text: "Professional execution, quality content and a clear understanding of educational branding."
    },
    {
      name: "Shree Sairam Industries",
      role: "Client",
      image: sairamLogo,
      text: "Elvera Media helped present our business professionally and improved our digital presence."
    }
  ];

  const [reviews, setReviews] = useState(defaultTestimonials);
  const [clientName, setClientName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [reviewMessage, setReviewMessage] = useState('');
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

 useEffect(() => {
  loadReviews();
}, []);

const loadReviews = async () => {
  const { data, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  const dbReviews =
    data?.map((review) => ({
      name: review.name,
      role: review.business_name,
      text: review.review_text,
      image: review.profile_image,
      isCustom: true,
    })) || [];

  setReviews([...defaultTestimonials, ...dbReviews]);
};

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!clientName || !businessName || !reviewMessage || !profilePic) return;

  setIsSubmitting(true);
  loadReviews();

  // Save review in Supabase
  const { error } = await supabase.from("reviews").insert([
    {
      name: clientName,
      business_name: businessName,
      review_text: reviewMessage,
      profile_image: profilePic,
      approved: false
    }
  ]);

  if (error) {
    console.error(error);
    alert("Failed to submit review.");
    setIsSubmitting(false);
    return;
  }

  // WhatsApp Notification
  const waMessage = `Hello Elvera Media,

A new review has been submitted.

Name : ${clientName}

Business : ${businessName}

Review :
${reviewMessage}`;

  window.open(
    `https://wa.me/919356601391?text=${encodeURIComponent(waMessage)}`,
    "_blank"
  );

  setClientName("");
  setBusinessName("");
  setReviewMessage("");
  setProfilePic(null);

  if (fileInputRef.current) {
    fileInputRef.current.value = "";
  }

  setIsSubmitting(false);
  setShowSuccess(true);

  setTimeout(() => setShowSuccess(false), 4000);
};

  return (
    <section ref={sectionRef} className="py-32 bg-background overflow-hidden relative">
      <SectionGrid />
      <div className="text-center mb-20 px-6 relative z-10">
        <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">Client Voices</h2>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
          {[...reviews, ...reviews].map((t: any, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] mx-4 bg-white border border-primary/5 shadow-lg shadow-primary/5 rounded-[40px] rounded-bl-sm p-8 md:p-10 flex-shrink-0"
            >
              <Quote className="w-10 h-10 text-primary/10 mb-6" />
              <p className="text-lg md:text-xl font-medium leading-relaxed mb-8">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 border border-[#EAEAEA] shadow-sm overflow-hidden ${t.isCustom ? 'bg-white p-0' : 'bg-[#FFFFFF] p-2.5'}`}>
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className={`w-full h-full ${t.isCustom ? 'object-cover' : 'object-contain'}`} 
                  />
                </div>
                <div>
                  <div className="font-heading font-medium">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leave a Review Form */}
      <div className="max-w-2xl mx-auto mt-24 px-6 relative z-20">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_8px_40px_rgba(17,17,17,0.03)] border border-primary/[0.03]">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-heading font-medium mb-3">Leave a Review</h3>
            <p className="text-muted-foreground text-sm md:text-base">Share your experience working with Elvera Media.</p>
          </div>

          {showSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="w-8 h-8 text-green-500" />
              </div>
              <h4 className="text-xl font-medium mb-2">Review Submitted!</h4>
              <p className="text-muted-foreground text-sm">Thank you for sharing your experience.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center mb-8">
                <input 
                  type="file" 
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden" 
                  id="profile-upload"
                />
                <label 
                  htmlFor="profile-upload" 
                  className="w-24 h-24 rounded-full border-2 border-dashed border-primary/20 flex flex-col items-center justify-center cursor-pointer hover:bg-primary/5 transition-colors overflow-hidden group relative"
                >
                  {profilePic ? (
                    <>
                      <img src={profilePic} alt="Upload preview" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Upload className="w-6 h-6 text-white" />
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload className="w-6 h-6 text-primary/40 mb-2 group-hover:text-primary/60 transition-colors" />
                      <span className="text-[10px] text-primary/40 font-medium">UPLOAD</span>
                    </>
                  )}
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-primary/80 mb-2 ml-4">Client Name</label>
                  <input 
                    type="text" 
                    required
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full bg-background border border-primary/5 rounded-full px-6 py-4 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary/80 mb-2 ml-4">Business Name</label>
                  <input 
                    type="text" 
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Acme Corp"
                    className="w-full bg-background border border-primary/5 rounded-full px-6 py-4 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-primary/80 mb-2 ml-4">Your Review</label>
                <textarea 
                  required
                  value={reviewMessage}
                  onChange={(e) => setReviewMessage(e.target.value)}
                  placeholder="Tell us about your experience..."
                  rows={4}
                  className="w-full bg-background border border-primary/5 rounded-[24px] px-6 py-5 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all resize-none"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <Magnetic>
                  <button 
                    type="submit"
                    disabled={isSubmitting || !profilePic}
                    className="rounded-full bg-primary text-primary-foreground px-10 py-4 text-sm font-medium flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 shadow-xl shadow-primary/10 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Review'}
                    {!isSubmitting && <ArrowUpRight className="w-4 h-4" />}
                  </button>
                </Magnetic>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function About({ isStandalone, onNavigate }: { isStandalone?: boolean, onNavigate?: (page: string) => void }) {
  return (
    <section id="about" className={cn("bg-primary text-primary-foreground shadow-[0_-20px_60px_-15px_rgba(17,17,17,0.1)] relative z-20 overflow-hidden", isStandalone ? "pt-32 pb-20 min-h-screen rounded-none mx-0 mb-0" : "py-32 rounded-[60px] md:rounded-[100px] mx-4 md:mx-12 mb-12")}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-white rounded-full mix-blend-overlay filter blur-[100px] animate-blob" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {isStandalone && onNavigate && (
          <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-white/60 hover:text-white transition-colors font-medium">
            <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>
        )}
        <div className="max-w-5xl mx-auto text-center mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[7rem] font-heading font-medium tracking-tight mb-8 leading-[1.05]">
            Not Your Typical <br className="hidden md:block" />
            <span className="italic font-light text-white/60">Marketing Agency.</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-3xl mx-auto font-light">
            Elvera Media is a growth-focused digital marketing agency helping schools, resorts, local businesses and brands build visibility, generate leads and create meaningful customer connections. We combine strategic thinking, content creation and performance marketing to help businesses grow with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-[40px] bg-white/5 border border-white/10 p-10 md:p-14 min-h-[400px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500"
          >
            <div>
              <div className="text-sm font-medium text-white/40 mb-6">01 — Highlight</div>
              <h3 className="text-3xl md:text-4xl font-heading font-medium mb-4 text-white">Creative Excellence.</h3>
            </div>
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-700 opacity-50 group-hover:opacity-100">
               <div className="w-64 h-64 border border-white/20 rounded-full flex items-center justify-center">
                 <div className="w-48 h-48 border border-white/20 rounded-full flex items-center justify-center">
                   <div className="w-32 h-32 border border-white/20 rounded-full" />
                 </div>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group relative overflow-hidden rounded-[40px] bg-white/5 border border-white/10 p-10 md:p-14 min-h-[400px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500"
          >
             <div>
              <div className="text-sm font-medium text-white/40 mb-6">02 — Highlight</div>
              <h3 className="text-3xl md:text-4xl font-heading font-medium mb-4 text-white">Performance Driven.</h3>
            </div>
            <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-gradient-to-tl from-white/20 to-transparent rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group relative overflow-hidden rounded-[40px] bg-white/5 border border-white/10 p-10 md:p-14 min-h-[400px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500"
          >
             <div>
              <div className="text-sm font-medium text-white/40 mb-6">03 — Highlight</div>
              <h3 className="text-3xl md:text-4xl font-heading font-medium mb-4 text-white">Transparent Communication.</h3>
            </div>
            <div className="absolute right-10 bottom-10 flex gap-2 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
               {[1,2,3].map(i => (
                 <div key={i} className="w-2 h-16 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="w-full bg-white" 
                      initial={{ height: "0%" }}
                      whileInView={{ height: `${Math.random() * 60 + 40}%` }}
                      transition={{ duration: 1, delay: i * 0.2 }}
                    />
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group relative overflow-hidden rounded-[40px] bg-white/5 border border-white/10 p-10 md:p-14 min-h-[400px] flex flex-col justify-between hover:bg-white/10 transition-colors duration-500"
          >
            <div>
              <div className="text-sm font-medium text-white/40 mb-6">04 — Highlight</div>
              <h3 className="text-3xl md:text-4xl font-heading font-medium mb-4 text-white">Long-Term Growth Focus.</h3>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 translate-x-1/4 translate-y-1/4 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
              <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M10,90 Q40,90 50,50 T90,10" />
                <circle cx="90" cy="10" r="4" fill="currentColor" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Contact({ onNavigate, isStandalone }: { onNavigate: (page: string) => void, isStandalone?: boolean }) {
  const [services, setServices] = useState<string[]>([]);
  const [businessType, setBusinessType] = useState<string>("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [businessBrandName, setBusinessBrandName] = useState("");
  const [projectDetails, setProjectDetails] = useState("");

  const toggleService = (s: string) => {
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const handleGrowSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    const waMessage = `Hello Elvera Media,

A new "Ready To Grow" inquiry has been submitted.

Name: ${fullName || "-"}
Phone: ${phoneNumber || "-"}
Email: ${emailAddress || "-"}
Business / Brand Name: ${businessBrandName || "-"}

Services Needed: ${services.length ? services.join(", ") : "-"}
Business Type: ${businessType || "-"}

Project Details:
${projectDetails || "-"}`;

    window.open(
      `https://wa.me/919356601391?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    );

    onNavigate('thank-you');
  };

  return (
    <section id="contact" className={cn("bg-background relative z-20 overflow-hidden", isStandalone ? "pt-32 pb-20 min-h-screen" : "py-32")}>
      <SectionGrid />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {isStandalone && (
          <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
            <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
          </button>
        )}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[40px] md:rounded-[80px] p-8 md:p-20 lg:p-24 shadow-[0_8px_40px_rgba(17,17,17,0.03)] border border-primary/[0.03] flex flex-col lg:flex-row gap-16 lg:gap-24"
        >
          {/* Left Column */}
          <div className="lg:w-1/3 flex flex-col">
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8 leading-[1.1]">
                Ready To <br className="hidden lg:block"/> <span className="italic font-light text-primary/50">Grow?</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
                Let's discuss how Elvera Media can help your business generate more visibility, leads and growth.
              </p>
              
              <div className="space-y-6 text-lg">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Phone / WhatsApp</div>
                  <a href="tel:+919356601391" className="font-medium hover:text-primary transition-colors">+91 9356601391</a>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                  <a href="mailto:elveramedia@gmail.com" className="font-medium hover:text-primary transition-colors">elveramedia@gmail.com</a>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Instagram</div>
                  <a href="https://www.instagram.com/elveramedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">@elveramedia</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column / Form */}
          <div className="lg:w-2/3 flex flex-col gap-14">
            
            {/* 1. Your Details */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.6 }} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-heading font-medium flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary text-sm">1</span>
                Your Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <input type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 text-base outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all" />
                <input type="tel" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 text-base outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all" />
                <input type="email" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 text-base outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all md:col-span-2" />
                <input type="text" placeholder="Business / Brand Name" value={businessBrandName} onChange={(e) => setBusinessBrandName(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 text-base outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all md:col-span-2" />
              </div>
            </motion.div>

            {/* 2. Services */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-heading font-medium flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary text-sm">2</span>
                What Services Do You Need?
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Social Media Management", "Lead Generation", "Content Creation", "Photography", "Videography", "Meta Ads", "Branding", "Website Design"].map(s => (
                  <button 
                    key={s} 
                    type="button" 
                    onClick={() => toggleService(s)} 
                    className={cn(
                      "rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02]", 
                      services.includes(s) 
                        ? "bg-primary text-primary-foreground border-primary shadow-md" 
                        : "bg-transparent text-muted-foreground border-primary/10 hover:border-primary/30 hover:text-foreground hover:bg-primary/5"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* 3. Business Type */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-heading font-medium flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary text-sm">3</span>
                Business Type
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Resort / Waterpark", "School / Institute", "Real Estate", "Restaurant", "Startup", "Local Business", "Other"].map(b => (
                  <button 
                    key={b} 
                    type="button" 
                    onClick={() => setBusinessType(b)} 
                    className={cn(
                      "rounded-full border px-6 py-3 text-sm font-medium transition-all duration-300 hover:scale-[1.02]", 
                      businessType === b 
                        ? "bg-primary text-primary-foreground border-primary shadow-md" 
                        : "bg-transparent text-muted-foreground border-primary/10 hover:border-primary/30 hover:text-foreground hover:bg-primary/5"
                    )}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* 4. Details */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }} className="space-y-6">
              <h3 className="text-xl md:text-2xl font-heading font-medium flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary text-sm">4</span>
                Project Details
              </h3>
              <textarea 
                placeholder="Tell us about your business, goals, and how we can help you grow." 
                rows={5} 
                value={projectDetails}
                onChange={(e) => setProjectDetails(e.target.value)}
                className="w-full bg-background border border-primary/5 rounded-[24px] px-6 py-5 text-base outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all resize-none"
              ></textarea>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }}>
              <Magnetic>
                <button 
                  onClick={handleGrowSubmit} 
                  className="group w-full md:w-auto rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm md:text-base font-medium flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/10 mt-4"
                >
                  Submit Form
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                </button>
              </Magnetic>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer({ onNavigate }: { onNavigate?: (page: string) => void }) {
  return (
    <footer className="bg-primary text-primary-foreground pt-32 pb-12 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-heading font-medium tracking-tight mb-8">
              Let's build <span className="italic text-white/70">something</span> extraordinary.
            </h2>
            <Magnetic>
              <button onClick={() => onNavigate?.('lets-grow')} className="rounded-full bg-white text-primary px-10 py-5 text-lg font-medium flex items-center gap-3 hover:scale-105 transition-transform duration-300">
                Start a Conversation <ArrowUpRight className="w-5 h-5" />
              </button>
            </Magnetic>
          </div>

          <div className="flex flex-col gap-8 w-full md:w-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-[30px] p-8 border border-white/10">
              <h3 className="text-xl font-heading font-medium mb-4">Leave a Review</h3>
              <p className="text-white/60 mb-6 text-sm">Share your experience working with Elvera Media.</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Write your review..." 
                  className="bg-white/10 border-none rounded-full px-6 py-3 text-sm flex-1 outline-none focus:ring-2 focus:ring-white/30 placeholder:text-white/40"
                />
                <button className="bg-white text-primary rounded-full px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors">
                  Submit
                </button>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="https://www.instagram.com/elveramedia?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 flex items-center gap-3 px-6 py-3 hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
                <span className="font-medium text-sm">@elveramedia</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-white/40 text-sm gap-4">
          <div>&copy; {new Date().getFullYear()} Elvera Media. All rights reserved.</div>
          <div className="flex gap-8">
            <button onClick={() => onNavigate?.('privacy-policy')} className="hover:text-white transition-colors">Privacy Policy</button>
            <button onClick={() => onNavigate?.('terms-and-conditions')} className="hover:text-white transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
      
      {/* Huge Background Text */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 text-[20vw] font-heading font-bold text-white/[0.03] whitespace-nowrap pointer-events-none select-none">
        ELVERA
      </div>
    </footer>
  );
}

function ProjectOnboarding({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("Less than ₹5 Lakhs");
  const [projectVision, setProjectVision] = useState("");

  const handleOnboardingSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    const waMessage = `Hello Elvera Media,

A new "Let's Build Together" onboarding request has been submitted.

Name: ${firstName || "-"} ${lastName || "-"}
Company Email: ${companyEmail || "-"}
Estimated Budget: ${estimatedBudget || "-"}

Project Vision:
${projectVision || "-"}`;

    window.open(
      `https://wa.me/919356601391?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    );

    onNavigate('thank-you');
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6 flex flex-col justify-center">
      <div className="container mx-auto max-w-4xl relative z-10">
        <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
          <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
        </button>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[40px] md:rounded-[80px] p-8 md:p-16 lg:p-20 shadow-[0_8px_40px_rgba(17,17,17,0.03)] border border-primary/[0.03]"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-6">Let's build <br/><span className="italic font-light text-primary/50">together.</span></h1>
          <p className="text-xl text-muted-foreground mb-12">We've received your intent. Complete this short onboarding form so we can prepare for our first discovery call.</p>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium ml-2 text-primary/70">First Name</label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-2 text-primary/70">Last Name</label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-2 text-primary/70">Company Email</label>
              <input type="email" value={companyEmail} onChange={(e) => setCompanyEmail(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-2 text-primary/70">Estimated Budget</label>
              <select value={estimatedBudget} onChange={(e) => setEstimatedBudget(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all appearance-none cursor-pointer">
                <option>Less than ₹5 Lakhs</option>
                <option>₹5L - ₹15L</option>
                <option>₹15L - ₹50L</option>
                <option>₹50L+</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium ml-2 text-primary/70">Project Vision</label>
              <textarea rows={4} placeholder="Describe what success looks like for this project." value={projectVision} onChange={(e) => setProjectVision(e.target.value)} className="w-full bg-background border border-primary/5 rounded-2xl px-6 py-4 outline-none focus:bg-white focus:ring-2 focus:ring-primary/5 focus:border-primary/10 transition-all resize-none" />
            </div>
            
            <div className="pt-4">
              <Magnetic>
                <button onClick={handleOnboardingSubmit} className="group rounded-full bg-primary text-primary-foreground px-8 py-4 font-medium flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 w-fit shadow-xl shadow-primary/10">
                  Submit Request 
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              </Magnetic>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ThankYou({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6 flex flex-col justify-center items-center text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl mx-auto space-y-8"
      >
        <div className="w-24 h-24 mx-auto bg-primary/5 rounded-full flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-heading font-medium tracking-tight">
          Request Received
        </h1>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          Thank you for reaching out. We've received your details and our team will get back to you within 24 hours to discuss how we can grow your business.
        </p>

        <div className="pt-8 flex justify-center">
          <Magnetic>
            <button 
              onClick={() => onNavigate('home')} 
              className="group rounded-full bg-primary text-primary-foreground px-8 py-4 text-base font-medium flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-primary/10"
            >
              Return Home
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </button>
          </Magnetic>
        </div>
      </motion.div>
    </div>
  );
}

function PrivacyPolicy({ onNavigate }: { onNavigate: (page: string) => void }) {
  const sections = [
    {
      title: "1. Introduction",
      body: "Elvera Media (\"we\", \"our\", \"us\") respects your privacy and is committed to protecting the personal data you share with us through this website, our forms, WhatsApp, email, and social channels. This Privacy Policy explains what information we collect, how we use it, and the choices you have."
    },
    {
      title: "2. Information We Collect",
      body: "When you fill out our contact, onboarding, or review forms, we may collect your name, phone number, email address, business/brand name, project details, budget range, and any uploaded images. We may also collect basic technical data such as browser type, device information, and pages visited to help us improve the website."
    },
    {
      title: "3. How We Use Your Information",
      body: "We use the information you provide to respond to your inquiry, prepare proposals, deliver our services (social media management, ads, branding, content, photography/videography, and web design), communicate with you over WhatsApp, email, or phone, and improve our offerings. We do not sell your personal data to third parties."
    },
    {
      title: "4. WhatsApp & Third-Party Communication",
      body: "Form submissions on this website may be forwarded to our WhatsApp Business number to allow our team to respond quickly. By submitting a form, you consent to being contacted on the phone number or email you provide, for purposes related to your inquiry or project."
    },
    {
      title: "5. Cookies & Analytics",
      body: "We may use cookies and similar technologies, including third-party tools such as Meta Pixel and analytics services, to understand how visitors use our website and to measure the performance of our marketing campaigns. You can control cookies through your browser settings."
    },
    {
      title: "6. Data Sharing",
      body: "We may share information with trusted service providers (such as hosting, database, and communication platforms) who help us operate this website and deliver our services, under confidentiality obligations. We may also disclose information where required by law."
    },
    {
      title: "7. Data Retention & Security",
      body: "We retain your information only as long as necessary to fulfil the purposes outlined in this policy or as required by law, and we take reasonable technical and organisational measures to protect it from unauthorised access, loss, or misuse."
    },
    {
      title: "8. Your Rights",
      body: "You may request access to, correction of, or deletion of your personal data held by us at any time by contacting us using the details below. We will respond to reasonable requests within a reasonable timeframe."
    },
    {
      title: "9. Changes to This Policy",
      body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Updates will be posted on this page with a revised effective date."
    },
    {
      title: "10. Contact Us",
      body: "If you have any questions about this Privacy Policy or how your data is handled, please reach out to us at elveramedia@gmail.com or +91 9356601391."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl relative z-10">
        <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
          <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
        </button>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[40px] md:rounded-[80px] p-8 md:p-16 lg:p-20 shadow-[0_8px_40px_rgba(17,17,17,0.03)] border border-primary/[0.03]"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-4">Privacy <span className="italic font-light text-primary/50">Policy</span></h1>
          <p className="text-muted-foreground mb-12">Effective Date: January 1, 2026</p>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-heading font-medium">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function TermsAndConditions({ onNavigate }: { onNavigate: (page: string) => void }) {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      body: "By accessing this website or engaging Elvera Media for any service, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website or services."
    },
    {
      title: "2. Our Services",
      body: "Elvera Media provides digital marketing and creative services including but not limited to social media management, lead generation, content creation, photography, videography, Meta Ads, branding, and website design. The specific scope, timeline, and deliverables for any project will be confirmed separately in a proposal or agreement."
    },
    {
      title: "3. Proposals & Onboarding",
      body: "Information submitted through our \"Ready To Grow\" or onboarding forms is used to understand your requirements and prepare a proposal. Submitting a form does not create a binding contract; a formal engagement begins only once both parties agree on scope, pricing, and timelines."
    },
    {
      title: "4. Payments",
      body: "Unless otherwise agreed in writing, projects require an upfront payment or retainer before work begins, with the remaining balance payable as per the agreed schedule. Delayed payments may result in a pause of ongoing services."
    },
    {
      title: "5. Client Responsibilities",
      body: "You agree to provide timely feedback, necessary assets (logos, brand guidelines, product images, access credentials, etc.), and approvals required for us to deliver the agreed services on schedule."
    },
    {
      title: "6. Intellectual Property",
      body: "Final deliverables (creatives, campaigns, designs) become the property of the client upon full payment, unless agreed otherwise. Elvera Media retains the right to showcase completed work, including images and results, in our portfolio and marketing materials unless the client requests confidentiality in writing."
    },
    {
      title: "7. Advertising & Third-Party Platforms",
      body: "Where our services involve running ads on third-party platforms (such as Meta/Instagram/Facebook), results depend on factors outside our control, including platform algorithms, budgets, and market conditions. We do not guarantee specific results, rankings, or return on investment."
    },
    {
      title: "8. Cancellation & Refunds",
      body: "Either party may terminate an ongoing engagement with prior written notice as agreed in the service proposal. Amounts already paid for work completed or in progress, and any third-party ad spend already incurred, are non-refundable."
    },
    {
      title: "9. Limitation of Liability",
      body: "Elvera Media shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability for any claim shall not exceed the fees paid by you for the specific service in question."
    },
    {
      title: "10. Governing Law",
      body: "These Terms & Conditions are governed by the laws of India, and any disputes shall be subject to the jurisdiction of the courts in Maharashtra."
    },
    {
      title: "11. Contact Us",
      body: "For any questions regarding these Terms & Conditions, please contact us at elveramedia@gmail.com or +91 9356601391."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl relative z-10">
        <button onClick={() => onNavigate('home')} className="mb-12 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium">
          <ChevronRight className="w-5 h-5 rotate-180" /> Back to Home
        </button>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white rounded-[40px] md:rounded-[80px] p-8 md:p-16 lg:p-20 shadow-[0_8px_40px_rgba(17,17,17,0.03)] border border-primary/[0.03]"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-medium tracking-tight mb-4">Terms & <span className="italic font-light text-primary/50">Conditions</span></h1>
          <p className="text-muted-foreground mb-12">Effective Date: January 1, 2026</p>

          <div className="space-y-10">
            {sections.map((s, i) => (
              <div key={i} className="space-y-3">
                <h2 className="text-xl md:text-2xl font-heading font-medium">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function CreativePortfolio() {
  const filters = ["All", "Education", "Hospitality", "Manufacturing", "Healthcare", "Web Design"];
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "School Admission Campaign",
      industry: "Education",
      category: "Education",
      desc: "Instagram Campaign",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop",
      badge: "Top Campaign",
      services: ["Branding", "Posters", "Meta Ads", "Social Media"],
      challenge: "Needed to increase enrollment numbers during the peak admission season while establishing a premium educational brand identity.",
      solution: "Developed a targeted Meta Ads campaign combined with engaging Instagram reels highlighting campus facilities and student success stories.",
      outcome: "Generated over 500+ qualified admission leads with a 3x return on ad spend."
    },
    {
      id: 2,
      title: "Resort Promotion",
      industry: "Hospitality",
      category: "Hospitality",
      desc: "Social Media & Ads",
      image: "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=800&auto=format&fit=crop",
      badge: "Most Viewed",
      services: ["Reels", "Meta Ads", "Social Media"],
      challenge: "Low off-season bookings and weak social media presence.",
      solution: "Created high-quality cinematic reels showcasing the resort experience, paired with targeted weekend getaway offers.",
      outcome: "Increased weekend occupancy by 45% and gained 10k+ new Instagram followers."
    },
    {
      id: 3,
      title: "Wooden Door Manufacturer",
      industry: "Manufacturing",
      category: "Manufacturing",
      desc: "B2B Lead Generation",
      image: woodenDoorImg,
      badge: "",
      services: ["Meta Ads", "Posters"],
      challenge: "Expanding B2B distributor network.",
      solution: "Targeted lead generation campaigns focusing on quality and durability.",
      outcome: "120+ new distributor inquiries in 2 months."
    },
    {
      id: 4,
      title: "Atta Chakki Branding",
      industry: "Retail",
      category: "Branding",
      desc: "Brand Identity Design",
      image: attaChakkiImg,
      badge: "Recent Project",
      services: ["Branding", "Posters"],
      challenge: "Outdated brand identity losing market share to modern competitors.",
      solution: "Complete visual rebranding and packaging redesign.",
      outcome: "Successfully repositioned as a premium organic choice in local markets."
    },
    {
      id: 10,
      title: "Educational Institute",
      industry: "Education",
      category: "Education",
      desc: "Brand Awareness",
      image: educationalInstituteImg,
      badge: "",
      services: ["Branding", "Social Media"],
      challenge: "Needed to communicate the institute's modern teaching methodologies.",
      solution: "A cohesive content strategy featuring student life and faculty.",
      outcome: "Enhanced brand perception and a 50% increase in social engagement."
    }
  ];

  const filteredProjects = activeFilter === "All" ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <SectionGrid />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight mb-6">Featured Work</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A selection of creative projects we've delivered for businesses across different industries.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-250 ease-out",
                activeFilter === f ? "bg-black text-white border-black shadow-md" : "bg-white text-black border-[#ECECEC] hover:border-black/30 hover:bg-neutral-50"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="columns-1 md:columns-2 lg:columns-4 gap-6 space-y-6">
          <AnimatePresence>
            {filteredProjects.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                onClick={() => setSelectedProject(p)}
                className="group relative bg-white border border-[#ECECEC] rounded-[24px] overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-250 ease-out hover:-translate-y-[6px] break-inside-avoid"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-neutral-100">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-250 ease-out group-hover:scale-[1.03]" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-250 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-250 ease-out bg-white text-black px-6 py-3 rounded-full font-medium text-sm shadow-lg flex items-center gap-2">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  {p.badge && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 text-xs font-medium rounded-full shadow-sm text-black">
                      {p.badge}
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="inline-block bg-neutral-100 text-neutral-600 px-3 py-1 rounded-md text-xs font-medium mb-3 group-hover:-translate-y-1 transition-transform duration-250 ease-out">
                    {p.industry}
                  </div>
                  <h3 className="text-xl font-heading font-medium mb-1 tracking-tight text-neutral-900">{p.title}</h3>
                  <p className="text-sm text-neutral-500 font-medium">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-xl p-4 md:p-12 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              className="bg-white rounded-[32px] md:rounded-[48px] w-full max-w-6xl shadow-[0_20px_80px_rgba(0,0,0,0.1)] border border-[#ECECEC] flex flex-col md:flex-row overflow-hidden max-h-[90vh]"
            >
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto relative bg-neutral-100 shrink-0">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-16 flex flex-col overflow-y-auto">
                <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 md:top-8 md:right-8 w-10 h-10 bg-neutral-100/80 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-neutral-200 transition-colors z-[100] shadow-sm">
                  <X className="w-5 h-5 text-neutral-600" />
                </button>
                <div className="inline-block bg-neutral-100 text-neutral-600 px-3 py-1.5 rounded-md text-xs font-medium mb-4 w-fit">
                  {selectedProject.industry}
                </div>
                <h2 className="text-3xl md:text-5xl font-heading font-medium tracking-tight mb-8 text-neutral-900">{selectedProject.title}</h2>
                
                <div className="mb-10">
                  <h4 className="text-sm font-medium text-neutral-400 mb-4 uppercase tracking-wider">Services Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.services.map((s: string, idx: number) => (
                      <span key={idx} className="bg-neutral-50 border border-[#ECECEC] px-4 py-2 rounded-full text-sm font-medium text-neutral-700">{s}</span>
                    ))}
                  </div>
                </div>

                <div className="space-y-8 flex-1">
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-neutral-900">Challenge</h4>
                    <p className="text-neutral-500 leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-neutral-900">Solution</h4>
                    <p className="text-neutral-500 leading-relaxed">{selectedProject.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-2 text-neutral-900">Outcome</h4>
                    <p className="text-neutral-500 leading-relaxed font-medium">{selectedProject.outcome}</p>
                  </div>
                </div>

                <div className="pt-10 mt-10 border-t border-[#ECECEC]">
                  <button onClick={() => setSelectedProject(null)} className="w-full md:w-auto rounded-full bg-black text-white px-8 py-4 font-medium flex items-center justify-center gap-3 hover:bg-black/80 hover:scale-[0.98] transition-all duration-200">
                    View More Projects
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function WhatsAppFloatingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-6 right-6 z-[100] flex items-center justify-center"
    >
      <motion.a
        href="https://wa.me/919356601391"
        target="_blank"
        rel="noopener noreferrer"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white transition-shadow duration-300 shadow-[0_12px_30px_rgba(37,211,102,0.25)] before:content-[''] before:absolute before:inset-0 before:rounded-full before:backdrop-blur-md before:-z-10"
      >
        <div className="absolute -top-12 opacity-0 group-hover:opacity-100 transition-opacity duration-250 ease-out bg-black/80 backdrop-blur-sm text-white text-xs py-2 px-4 rounded-full pointer-events-none whitespace-nowrap shadow-lg">
          Chat with us
        </div>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 w-7 h-7 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.405-.883-.733-1.48-1.639-1.653-1.935-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </motion.div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page: string) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF9F7] text-foreground font-sans antialiased selection:bg-primary selection:text-primary-foreground">
      <Navbar onNavigate={navigateTo} />
      <WhatsAppFloatingButton />
      
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.div 
            key="home" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, y: -20 }} 
            transition={{ duration: 0.5 }}
          >
            <main>
              <Hero onNavigate={navigateTo} />
              <FeaturedWork onNavigate={navigateTo} />
              <Services onNavigate={navigateTo} />
              <Packages onNavigate={navigateTo} />
              <CreativePortfolio />
              <Results onNavigate={navigateTo} />
              <Testimonials />
              <About onNavigate={navigateTo} />
              <Contact onNavigate={navigateTo} />
            </main>
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}
        
        {currentPage === 'lets-grow' && (
          <motion.div 
            key="lets-grow" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Contact onNavigate={navigateTo} isStandalone={true} />
          </motion.div>
        )}
        
        {currentPage === 'start-project' && (
          <motion.div 
            key="start-project" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <ProjectOnboarding onNavigate={navigateTo} />
          </motion.div>
        )}
        
        {currentPage === 'work' && (
          <motion.div 
            key="work" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-white min-h-screen"
          >
            <FeaturedWork isStandalone onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentPage === 'services' && (
          <motion.div 
            key="services" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-background min-h-screen"
          >
            <Services isStandalone onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentPage === 'packages' && (
          <motion.div 
            key="packages" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-background min-h-screen"
          >
            <Packages isStandalone onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentPage === 'about' && (
          <motion.div 
            key="about" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-primary min-h-screen"
          >
            <About isStandalone onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentPage === 'privacy-policy' && (
          <motion.div 
            key="privacy-policy" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-background min-h-screen"
          >
            <PrivacyPolicy onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentPage === 'terms-and-conditions' && (
          <motion.div 
            key="terms-and-conditions" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-background min-h-screen"
          >
            <TermsAndConditions onNavigate={navigateTo} />
            <Footer onNavigate={navigateTo} />
          </motion.div>
        )}

        {currentPage === 'thank-you' && (
          <motion.div 
            key="thank-you" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }}
            className="bg-background min-h-screen"
          >
            <ThankYou onNavigate={navigateTo} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
