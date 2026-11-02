import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      title: 'Senior Flutter Developer',
      company: 'Zyvionix Solutions (Full-time)',
      location: 'Kochi, Kerala',
      period: 'Jul 2026 – Present',
      bullets: [
        'Develop Flutter screens and robust mobile features directly from product requirements and Figma UI designs.',
        'Integrate complex REST APIs, optimize application state, and spearhead debugging and release readiness for Android & iOS stores.',
        'Mentor junior engineers on state management and maintainable clean architecture.',
      ],
    },
    {
      title: 'Flutter Developer',
      company: 'Pixelmind Solutions (Full-time)',
      location: 'Hyderabad, Telangana',
      period: 'Apr 2025 – Jun 2026',
      bullets: [
        'Successfully built and deployed multiple commercial mobile applications on Android and iOS.',
        'Built dynamic Flutter features, connected REST APIs and Firebase services, and systematically resolved UI and integration bugs.',
        'Leveraged Provider state management to organize application state for responsive, maintainable 60fps UI updates.',
        'Integrated WebSocket-based real-time communication for instant message and notification workflows.',
      ],
    },
    {
      title: 'Flutter Developer Intern',
      company: 'Brototype',
      location: 'Kochi, Kerala',
      period: 'Oct 2023 – Apr 2025',
      bullets: [
        'Practised rigorous Flutter UI development, state management, API integration, and debugging.',
        'Mastered Git-based team collaboration workflows through intensive hands-on production project development.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 relative bg-[#050505]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#B69A70] uppercase mb-3">
            <Briefcase className="w-4 h-4 text-[#B69A70]" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            PROFESSIONAL <span className="text-[#D0B58D]">EXPERIENCE</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B69A70] to-transparent mt-5" />
        </div>

        {/* Experience Timeline */}
        <div className="relative border-l border-[#8F7654]/30 ml-2 sm:ml-6 md:ml-24 space-y-10 sm:space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-6 sm:pl-8 md:pl-12 group"
            >
              {/* Timeline Gold Node */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#050505] border-2 border-[#D0B58D] group-hover:scale-125 group-hover:bg-[#B69A70] transition-all duration-300 shadow-[0_0_10px_rgba(208,181,141,0.5)]" />

              <div className="bg-[#0a0a0a] border border-[#8F7654]/25 hover:border-[#D0B58D]/70 p-5 sm:p-8 rounded-2xl transition-all duration-300 shadow-xl">
                {/* Meta Row: Period & Location */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#D0B58D] bg-[#14120e] px-3 py-1 rounded-full border border-[#8F7654]/30">
                    <Calendar className="w-3.5 h-3.5 text-[#B69A70]" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#BDBDBD]/70">
                    <MapPin className="w-3.5 h-3.5 text-[#B69A70]" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#D0B58D] transition-colors">
                  {exp.title}
                </h3>
                <h4 className="text-sm font-medium text-[#B69A70] mb-5 tracking-wide">
                  {exp.company}
                </h4>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#BDBDBD] font-light leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#B69A70] mt-0.5 flex-shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Highlight Card */}
        <div className="mt-14 sm:mt-16 bg-[#0c0c0c] border border-[#8F7654]/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#14120e] border border-[#8F7654]/40 flex items-center justify-center text-[#D0B58D] flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Diploma in Computer Engineering</h4>
              <p className="text-xs text-[#B69A70]">Government Polytechnic College, Thodupuzha (2020 – 2023)</p>
            </div>
          </div>
          <div className="text-xs text-[#BDBDBD] bg-[#050505] border border-white/5 px-4 py-2 rounded-full">
            Full-time Flutter Bootcamp Graduate — Brototype Kochi
          </div>
        </div>

      </div>
    </section>
  );
};
