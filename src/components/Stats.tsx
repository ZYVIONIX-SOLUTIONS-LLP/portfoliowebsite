import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Award, Smartphone, Rocket } from 'lucide-react';

interface StatItem {
  value: string;
  label: string;
  subtext?: string;
  icon: ReactNode;
}

export const Stats = () => {
  const stats: StatItem[] = [
    {
      value: '2+ Years',
      label: 'Flutter & Dart Experience',
      subtext: 'Cross-Platform Mobile Specialist',
      icon: <Award className="w-5 h-5 text-[#D0B58D]/70" />,
    },
    {
      value: '5+ Apps',
      label: 'Production Applications',
      subtext: 'Healthcare, Rewards, Booking & Tools',
      icon: <Smartphone className="w-5 h-5 text-[#D0B58D]/70" />,
    },
    {
      value: '100%',
      label: 'Android & iOS Parity',
      subtext: 'Pixel-Perfect 60 FPS Performance',
      icon: <Rocket className="w-5 h-5 text-[#D0B58D]/70" />,
    },
  ];

  return (
    <section className="py-12 sm:py-16 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="stat-card-gradient relative rounded-2xl py-8 px-6 text-center flex flex-col items-center justify-center transition-all duration-300 group overflow-hidden"
            >
              {/* Subtle top inner light highlight */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#D0B58D]/40 to-transparent" />
              
              {/* Ambient bottom golden flare on hover */}
              <div className="absolute -bottom-10 inset-x-0 h-20 bg-[#B69A70]/20 blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none" />

              {/* Number Value */}
              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>

              {/* Stat Label */}
              <div className="text-sm sm:text-base font-normal text-white/90 tracking-wide font-sans">
                {stat.label}
              </div>

              {/* Subtle Subtext */}
              <div className="text-[11px] text-[#BDBDBD]/70 mt-1 uppercase tracking-wider">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
