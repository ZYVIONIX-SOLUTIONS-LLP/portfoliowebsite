import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Layers, Cpu, Cloud, Database } from 'lucide-react';

export const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#B69A70]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic User Portrait (No suit/coat) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient golden halo */}
            <div className="absolute inset-0 bg-[#B69A70]/15 rounded-full blur-3xl transform scale-90 -z-10 pointer-events-none" />

            <div className="relative max-w-[380px] w-full rounded-3xl overflow-hidden group border border-[#8F7654]/30 bg-[#0a0a0a]">
              {/* Authentic User Image with Sunglasses */}
              <img
                src="/about-portrait.jpg"
                alt="Melvin Cherian - Flutter Developer"
                className="w-full h-auto aspect-[4/5] sm:aspect-[3/4] object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Natural Black Vignette Fade around the edges */}
              <div className="absolute inset-0 bg-radial from-transparent via-black/10 to-black/70 pointer-events-none" />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#050505]/70 to-transparent pointer-events-none" />

              {/* Subtle Gold Accent Frame on Hover */}
              <div className="absolute inset-0 rounded-3xl border border-[#8F7654]/30 group-hover:border-[#D0B58D]/60 transition-colors duration-500 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Column: ABOUT ME Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Condensed Giant Title */}
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-wider text-[#B69A70] font-display uppercase leading-none mb-6">
              ABOUT ME
            </h2>

            {/* First Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-light mb-6">
              Hi, I'm Melvin Cherian,{' '}
              <span className="text-[#D0B58D] font-semibold">
                Flutter Developer with 2+ years of experience
              </span>
              , specializing in building high-performance cross-platform mobile applications using{' '}
              <span className="text-[#D0B58D] underline decoration-[#8F7654] underline-offset-4 hover:text-white transition-colors cursor-pointer">
                Flutter & Dart
              </span>
              . I excel in{' '}
              <span className="text-[#D0B58D] underline decoration-[#8F7654] underline-offset-4 hover:text-white transition-colors cursor-pointer">
                Provider & BLoC Architecture
              </span>
              ,{' '}
              <span className="text-[#D0B58D] underline decoration-[#8F7654] underline-offset-4 hover:text-white transition-colors cursor-pointer">
                REST API & WebSockets
              </span>
              ,{' '}
              <span className="text-[#D0B58D] underline decoration-[#8F7654] underline-offset-4 hover:text-white transition-colors cursor-pointer">
                Firebase Cloud Suite
              </span>
              , and payment gateway integration like Razorpay.
            </p>

            {/* Second Paragraph */}
            <p className="text-sm sm:text-base md:text-lg text-[#BDBDBD] leading-relaxed font-light mb-8">
              Based in{' '}
              <span className="text-[#D0B58D] font-semibold">
                Kottayam & Kochi, Kerala
              </span>
              , I have contributed to production applications spanning healthcare, rewards & gamification, creative design tools, and booking workflows at{' '}
              <span className="text-white font-medium">Zyvionix Solutions</span> and{' '}
              <span className="text-white font-medium">Pixelmind Solutions</span>. My approach centers on clean, maintainable architecture, sub-second screen responsiveness, and exceptional user experiences.
            </p>

            {/* Expandable Technical Skills Breakdown */}
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full mb-8 pt-4 border-t border-[#8F7654]/30 space-y-4"
                >
                  <h4 className="text-sm font-semibold tracking-widest text-[#D0B58D] uppercase">
                    Technical Stack & Core Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {[
                      { icon: <Cpu className="w-4 h-4 text-[#B69A70]" />, text: 'Languages & Core: Dart, Flutter SDK' },
                      { icon: <Layers className="w-4 h-4 text-[#B69A70]" />, text: 'State Management: BLoC, Provider, GetX' },
                      { icon: <Cloud className="w-4 h-4 text-[#B69A70]" />, text: 'Real-time & APIs: REST APIs, WebSocket, Razorpay' },
                      { icon: <Cloud className="w-4 h-4 text-[#B69A70]" />, text: 'Cloud: Firebase Auth, Firestore, FCM, Cloudinary' },
                      { icon: <Database className="w-4 h-4 text-[#B69A70]" />, text: 'Local DB: Hive, Sqflite, SharedPreferences' },
                      { icon: <CheckCircle2 className="w-4 h-4 text-[#B69A70]" />, text: 'Dev Tools: Git, GitHub, VS Code, Figma, Postman' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#BDBDBD] bg-[#0c0c0c] p-2.5 rounded-lg border border-white/5">
                        {item.icon}
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Know More Pill Button */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setExpanded(!expanded)}
                className="gold-btn px-8 py-3 rounded-full text-xs sm:text-sm font-medium tracking-wider uppercase inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{expanded ? 'Show Less' : 'Know more'}</span>
                {expanded ? (
                  <ChevronUp className="w-4 h-4 text-[#D0B58D]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-[#D0B58D]" />
                )}
              </button>

              <a
                href="#projects"
                className="text-xs sm:text-sm tracking-wider uppercase text-[#BDBDBD] hover:text-[#D0B58D] transition-colors py-3 px-5 inline-flex items-center gap-1.5"
              >
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
