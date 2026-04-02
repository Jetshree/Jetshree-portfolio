'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MacbookScroll } from '../ui/macbook-scroll';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Jetshree";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" className="min-h-screen flex items-start px-6 md:px-12 relative overflow-hidden backdrop-blur-sm pt-24 lg:pt-32">
      {/* Deep Teal Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-cyan-800/30 rounded-full blur-[120px] pointer-events-none" />

      {/* Sophisticated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_2px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_2px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_100%_at_10%_0%,#000_10%,transparent_100%)] pointer-events-none" />



      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start z-10 relative">

        {/* Left Side: Content - Now comes first on mobile */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left flex flex-col justify-start pt-8 lg:pt-12 order-1"
        >
          <h2 className="text-lg md:text-xl font-medium text-electric-blue mb-4 tracking-widest uppercase">
            Hello, I&apos;m
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter leading-none">
            {text}
            <span className="animate-pulse shadow-blue-500">_</span>
          </h1>
          <p className="max-w-xl text-base md:text-lg lg:text-xl text-accent font-light leading-relaxed mb-8 md:mb-10">
            A passionate developer crafting <span className="text-white hover:text-violet-glow transition-colors cursor-default underline decoration-violet-glow/30 underline-offset-8">modern, high-performance web experiences</span> with a focus on sleek design and seamless interaction.
          </p>

          <motion.div
            className="flex flex-wrap gap-4 md:gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <a href="#projects" className="px-6 md:px-8 py-3 md:py-4 bg-white text-background font-black rounded-2xl hover:bg-electric-blue hover:text-white transition-all duration-300 shadow-lg shadow-white/5 flex items-center justify-center text-sm md:text-base">
              View My Work
            </a>
            <a href="#contact" className="px-6 md:px-8 py-3 md:py-4 border border-white/10 text-white font-bold rounded-2xl hover:border-electric-blue/50 hover:bg-white/5 transition-all duration-300 flex items-center justify-center text-sm md:text-base">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Macbook Showcase - Top-aligned with text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-2 flex justify-center lg:justify-end items-start h-auto lg:h-[185vh] overflow-hidden lg:overflow-visible mt-8 lg:mt-6"
        >
          {/* Wrapper with origin-top to ensure scaled component stays within reach */}
          <div className="scale-[1.0] sm:scale-[0.9] lg:scale-[0.85] xl:scale-100 transform origin-top transition-transform duration-700 h-full flex items-start">
            <MacbookScroll
              src="/skills2.gif"
              showGradient={false}
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-accent/50 hidden lg:block"
      >
        <div className="w-6 h-10 border-2 border-accent/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent/20 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
