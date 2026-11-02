import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, 
  Layers, 
  Wifi, 
  Cloud, 
  Database, 
  UploadCloud, 
  ArrowUpRight 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: ReactNode;
  title: string;
  description: string;
  deliverables: string[];
}

export const Services = () => {
  const services: ServiceItem[] = [
    {
      id: 'cross-platform',
      icon: <Smartphone className="w-6 h-6 text-[#D0B58D]" />,
      title: 'Cross-Platform Mobile Apps',
      description:
        'Crafting responsive, native-feel iOS and Android applications with single Flutter codebases, delivering fluid 60fps animations and seamless platform adaptation.',
      deliverables: ['Android & iOS Builds', 'Pixel-Perfect UI', 'Material 3 & Cupertino'],
    },
    {
      id: 'state-architecture',
      icon: <Layers className="w-6 h-6 text-[#D0B58D]" />,
      title: 'State Architecture & Clean Code',
      description:
        'Structuring scalable, testable application code using BLoC, Provider, or GetX patterns to ensure maintainability, rapid feature iteration, and zero memory leaks.',
      deliverables: ['BLoC / Provider Stack', 'Clean Architecture', 'Modular Codebases'],
    },
    {
      id: 'realtime-apis',
      icon: <Wifi className="w-6 h-6 text-[#D0B58D]" />,
      title: 'APIs & Real-Time Communications',
      description:
        'Seamless integration of RESTful microservices, WebSocket channels for live chat/status, and secure payment workflows including Razorpay.',
      deliverables: ['REST API Integration', 'WebSockets Sync', 'Razorpay Payment Gateway'],
    },
    {
      id: 'firebase-cloud',
      icon: <Cloud className="w-6 h-6 text-[#D0B58D]" />,
      title: 'Firebase & Cloud Solutions',
      description:
        'Full cloud integration covering Firebase Authentication, Cloud Firestore real-time databases, Firebase Cloud Messaging (FCM) push notifications, and Cloudinary media.',
      deliverables: ['Firebase Auth & Security', 'FCM Push Alerts', 'Cloud Firestore & Media'],
    },
    {
      id: 'local-db',
      icon: <Database className="w-6 h-6 text-[#D0B58D]" />,
      title: 'Offline Storage & Local DB',
      description:
        'Robust offline-first architecture utilizing Hive, Sqflite, and SharedPreferences so users enjoy uninterrupted app workflows regardless of network quality.',
      deliverables: ['Hive Fast Key-Value', 'Sqflite Relational DB', 'Offline-First Sync'],
    },
    {
      id: 'deployment',
      icon: <UploadCloud className="w-6 h-6 text-[#D0B58D]" />,
      title: 'App Store & Play Store Release',
      description:
        'End-to-end guidance from keystore generation and App Store certificates to compliance audits, Google Play Console rollouts, and version management.',
      deliverables: ['Google Play Console', 'App Store Connect', 'Release Optimization'],
    },
  ];

  return (
    <section id="services" className="py-24 sm:py-32 relative bg-[#070707] border-y border-[#8F7654]/15">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#B69A70]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#B69A70] uppercase mb-3">
            Flutter Engineering Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase max-w-2xl">
            MOBILE SOLUTIONS CRAFTED FOR <span className="text-[#D0B58D]">SPEED & SCALE</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B69A70] to-transparent mt-5" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="relative p-8 rounded-2xl bg-[#0c0c0c] border border-[#8F7654]/25 hover:border-[#D0B58D]/70 transition-all duration-300 group flex flex-col justify-between overflow-hidden shadow-lg hover:shadow-[0_10px_35px_-5px_rgba(182,154,112,0.18)]"
            >
              {/* Subtle top sheen */}
              <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D0B58D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Minimal Gold Icon Container */}
                <div className="w-14 h-14 rounded-xl bg-[#14120e] border border-[#8F7654]/40 flex items-center justify-center mb-6 group-hover:border-[#D0B58D] group-hover:bg-[#1a1712] transition-colors duration-300 shadow-inner">
                  {service.icon}
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D0B58D] transition-colors duration-200">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-[#BDBDBD] leading-relaxed font-light mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverable Tags */}
              <div className="pt-4 border-t border-white/5">
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium text-[#D0B58D]/80 bg-[#161410] border border-[#8F7654]/30 px-2.5 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B69A70] group-hover:text-white transition-colors"
                >
                  <span>Discuss Your App Idea</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
