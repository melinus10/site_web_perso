'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  
  const style = {
    section: "relative w-full min-h-screen bg-transparent text-white flex flex-col overflow-hidden",
    navBar:       "w-full flex justify-between items-center p-6 fixed top-0 z-50 backdrop-blur-sm bg-black/30 border-b border-white/10",
    navLink:      "hover:text-white cursor-pointer transition-colors",
    container:    "flex-1 flex flex-col lg:flex-row items-center justify-center container mx-auto px-4 mt-20 gap-70",
    
    photoContainer: "relative w-64 h-64 lg:w-116 lg:h-116 flex-shrink-0",
    glowEffect:     "absolute inset-0 bg-violet-600 rounded-full blur-[100px] opacity-50 animate-pulse",
    avatarCircle:   "relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden bg-zinc-900 flex items-center justify-center",
    
    badgeCode:    "px-4 py-2 rounded-lg border border-violet-500/30 bg-black/50 backdrop-blur-md text-violet-400 text-sm font-mono shadow-[0_0_15px_rgba(139,92,246,0.3)]",
    grosTitre:    "text-5xl lg:text-7xl font-bold leading-tight",
    description:  "text-zinc-400 text-lg",
    boutonBlanc:  "bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-zinc-200 transition-colors",
    boutonTransp: "px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors",

    socialLink: "p-3 rounded-full border border-white/10 bg-white/5 hover:bg-violet-500 hover:text-white hover:border-violet-500 transition-all duration-300 hover:scale-110 flex items-center justify-center group"
    
  };

  const [text, setText] = useState("");
  const fullText = 'console.log("Hello World");';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={style.section}>
      
      <nav className={style.navBar}>
        <div className="text-xl font-bold tracking-tighter">MonPortfolio<span className="text-violet-500">.</span></div>
        <ul className="flex gap-20 text-sm font-medium text-zinc-400">
          <li className={style.navLink}>Accueil</li>
          <li className={style.navLink}>Skills</li>
          <li className={style.navLink}>Projets</li>
          <li className={style.navLink}>Contact</li>
        </ul>
      </nav>

      <div className={style.container}>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
          className={style.photoContainer}
        >
          <div className={style.glowEffect}></div>
          <div className={style.avatarCircle}>
   <img 
     src="ma_photo1.jpeg" 
     alt="Mon portrait" 
     className="w-full h-full object-cover absolute inset-0 z-10" 
   />
   
   <span className="text-zinc-500 z-0">ma Photo</span>
</div>
        </motion.div>

        <div className="flex flex-col items-start space-y-4 max-w-xl z-10">
          
          <div className={style.badgeCode}>
            <span>&gt; </span>{text}<span className="animate-pulse">|</span>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className={style.grosTitre}
          >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500">Développeuse</span> Full Stack
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
            className={style.description}
          >
            Je conçois des expériences web créatives et performantes. 
            J'aime quand le code est propre et que les pixels bougent.
          </motion.p>

         <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className="flex gap-6 pt-6" 
          >
            
            <a 
              href="https://github.com/melinus10" 
              target="_blank" 
              rel="noopener noreferrer"
              className={style.socialLink}
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/in/boukharimelina/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={style.socialLink}
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

             <a 
              href="mailto:boukharimelina44@gmail.com" 
              className={style.socialLink}
              aria-label="Email"
            >
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}