import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Smartphone, Code2, Layers, CheckCircle2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center overflow-hidden">
      {/* Dynamic Animated Ambient Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-[320px] sm:w-[520px] h-[320px] sm:h-[520px] bg-[#B69A70] rounded-full blur-[130px] sm:blur-[160px] pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.06, 0.14, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/3 left-4 sm:left-10 w-[260px] sm:w-[400px] h-[260px] sm:h-[400px] bg-[#D0B58D] rounded-full blur-[110px] sm:blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10 text-left"
          >
            {/* Small Intro Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#14120e] border border-[#8F7654]/40 mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D0B58D] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B69A70]"></span>
              </span>
              <span className="text-xs font-medium text-[#D0B58D] tracking-wide">
                Hey, I'm Melvin Cherian
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#B69A70]" />
            </motion.div>

            {/* Main Punchy Professional Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
              <span className="text-white">CROSS-PLATFORM </span>
              <span className="text-[#B69A70]">FLUTTER</span>
              <br />
              <span className="text-[#B69A70]">DEVELOPER </span>
              <span className="text-white">& </span>
              <span className="text-[#D0B58D]">APP SPECIALIST</span>
            </h1>

            {/* Professional Summary Description */}
            <p className="text-sm sm:text-base md:text-lg text-[#BDBDBD] leading-relaxed max-w-xl mb-8 font-light">
              Building robust, responsive cross-platform mobile applications for iOS & Android with 
              <span className="text-white font-medium"> Flutter & Dart</span>. Experienced in state architecture (BLoC & Provider), 
              REST APIs, WebSockets, Firebase, and frictionless payment workflows.
            </p>

            {/* Interactive Tech Stack Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-9">
              {[
                { icon: <Smartphone className="w-3.5 h-3.5 text-[#B69A70]" />, label: 'Flutter & Dart' },
                { icon: <Code2 className="w-3.5 h-3.5 text-[#B69A70]" />, label: 'BLoC • Provider • GetX' },
                { icon: <Layers className="w-3.5 h-3.5 text-[#B69A70]" />, label: 'REST APIs & WebSockets' },
                { icon: <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A70]" />, label: 'Firebase Suite' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -2, scale: 1.03 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e0c0a] border border-[#8F7654]/30 text-xs text-[#D0B58D] shadow-sm cursor-default"
                >
                  {badge.icon}
                  <span>{badge.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="gold-btn group inline-flex items-center justify-between gap-5 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-xl cursor-pointer w-full sm:w-auto text-center"
              >
                <span>Connect With Me</span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#B69A70] group-hover:text-black transition-colors duration-300">
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </motion.a>
              
              <a
                href="#projects"
                className="text-xs sm:text-sm tracking-wider uppercase text-[#BDBDBD] hover:text-[#D0B58D] transition-colors py-3.5 px-6 border border-white/10 rounded-full hover:border-[#8F7654]/40 w-full sm:w-auto text-center"
              >
                Explore Projects (5)
              </a>
            </div>
          </motion.div>

          {/* Right Column - Arched Portrait with User's Authentic Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end relative"
          >
            {/* Ambient Golden Halo Behind Arch */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#B69A70]/25 via-[#B69A70]/10 to-transparent blur-3xl -z-10 rounded-t-full scale-105 transform translate-y-4" />

            {/* Arch Outer Border Container */}
            <div className="relative p-1.5 rounded-t-[170px] sm:rounded-t-[210px] rounded-b-2xl border border-[#8F7654]/50 arch-border-glow bg-gradient-to-b from-[#2A2115]/50 via-black/40 to-black/80 max-w-[290px] sm:max-w-[360px] md:max-w-[390px] w-full shadow-2xl">
              
              {/* Arch Inner Border */}
              <div className="relative overflow-hidden rounded-t-[165px] sm:rounded-t-[205px] rounded-b-xl border border-[#D0B58D]/30 bg-black aspect-[3/4]">
                
                {/* The user's exact authentic photograph (no coat, no suit!) */}
                <img
                  src="/user_portrait_original.jpg"
                  alt="Melvin Cherian - Flutter Developer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Subtle bottom shadow blend into dark background */}
                <div className="absolute inset-x-0 bottom-0 h-24 sm:h-28 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
                
                {/* Subtle top arch golden rim reflection */}
                <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#D0B58D]/15 to-transparent pointer-events-none" />
              </div>

              {/* Decorative Corner Gold Dots */}
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border border-[#B69A70]/60 rounded-full bg-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#D0B58D] rounded-full" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border border-[#B69A70]/60 rounded-full bg-black flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-[#D0B58D] rounded-full" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
