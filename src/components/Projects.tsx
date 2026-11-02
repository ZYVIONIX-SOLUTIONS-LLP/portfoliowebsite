import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Smartphone, Star, ChevronRight, CheckCircle2 } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  techStack: string[];
  keyHighlights: string[];
  playStoreUrl: string;
  featured?: boolean;
}

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const projects: ProjectItem[] = [
    {
      id: 'edit-ezy',
      title: 'Edit Ezy',
      category: 'Business Tools',
      tagline: 'Poster Making & Dynamic Business Branding',
      description:
        'Customizable festival and business poster generation platform with dynamic user text, brand logo placement, customer contact organization, and automated event reminders.',
      techStack: ['Flutter', 'Dart', 'Provider', 'Cloudinary', 'Canvas Rendering'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.posternova.posternova',
      keyHighlights: [
        'Dynamic canvas layer manipulation and text/logo placement',
        'Cloudinary cloud storage integration for multi-resolution assets',
        'Customer contact sync and automated festival push notification reminders',
      ],
      featured: true,
    },
    {
      id: 'redeemly',
      title: 'Redeemly',
      category: 'Rewards & Gamification',
      tagline: 'Rewards & Activity Engagement Platform',
      description:
        'Interactive rewards experience featuring spin-wheel engagement, sensor-based step tracking, real-time quizzes, reading activities, and automated coin redemption workflows.',
      techStack: ['Flutter', 'Firebase Auth', 'Firestore', 'Sensors API', 'BLoC'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.srikanth.redeemly',
      keyHighlights: [
        'Real-time pedometer and device accelerometer sensor integration',
        'Gamified spin-wheel engine with provably fair coin disbursement',
        'BLoC state architecture maintaining smooth 60fps animations across active tasks',
      ],
      featured: true,
    },
    {
      id: 'clynix',
      title: 'Clynix Healthcare',
      category: 'Healthcare',
      tagline: 'Patient & Medicine Management Platform',
      description:
        'Comprehensive healthcare mobile application supporting prescription workflows, medical service discovery, doctor scheduling, and medicine inventory via a streamlined, HIPAA-aligned interface.',
      techStack: ['Flutter', 'REST APIs', 'Provider', 'Push Notifications (FCM)', 'Hive'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.clynix.clynix',
      keyHighlights: [
        'Offline-first medicine scheduling with Hive local persistent caching',
        'FCM push notification triggers for critical daily dosages',
        'Provider state architecture handling live medical record sync',
      ],
      featured: true,
    },
    {
      id: 'vfarms',
      title: 'VFARMS',
      category: 'Hospitality',
      tagline: 'Farmhouse Discovery & Instant Booking',
      description:
        'Property discovery and reservation workflow helping travelers explore luxury farmhouses, check real-time availability, inspect high-res galleries, and process bookings securely.',
      techStack: ['Flutter', 'Razorpay', 'WebSocket', 'Sqflite', 'Custom UI'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.farmhouse.farmhouse_app',
      keyHighlights: [
        'Integrated Razorpay checkout workflow with webhook status reconciliation',
        'WebSocket live availability listener for double-booking prevention',
        'Sqflite offline caching for viewed properties and favorite listings',
      ],
    },
    {
      id: 'clynix-rider',
      title: 'Clynix Rider',
      category: 'Logistics',
      tagline: 'Rider-Side Companion & Order Fulfillment',
      description:
        'Task-focused companion app engineered for delivery riders, featuring active order manifests, geofenced routing, real-time push status alerts, and daily payout metrics.',
      techStack: ['Flutter', 'WebSocket', 'Google Maps API', 'Background Location'],
      playStoreUrl: 'https://play.google.com/store/apps/details?id=com.pixelmind.clynixrider',
      keyHighlights: [
        'Background geolocation and live telemetry transmission to dispatch dispatchers',
        'Interactive map routing with turn-by-turn waypoint indicators',
        'Ultra-responsive job card acceptance flow with audio cues',
      ],
    },
  ];

  const categories = ['All', 'Healthcare', 'Rewards & Gamification', 'Business Tools', 'Hospitality', 'Logistics'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 sm:py-32 relative bg-[#070707] border-t border-[#8F7654]/15">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-[#B69A70]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#B69A70] uppercase mb-3">
              <Smartphone className="w-4 h-4 text-[#B69A70]" />
              <span>Production Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              SELECTED <span className="text-[#D0B58D]">FLUTTER PROJECTS</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#BDBDBD] max-w-md font-light">
            Real-world commercial mobile applications engineered with clean BLoC/Provider state architectures and deployed to the Google Play Store.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                selectedFilter === cat
                  ? 'bg-[#D0B58D] text-black shadow-lg shadow-[#B69A70]/20'
                  : 'bg-[#100e0b] text-[#BDBDBD] border border-[#8F7654]/30 hover:border-[#D0B58D] hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with Framer Motion Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={`relative rounded-2xl bg-[#0c0c0c] border p-7 sm:p-8 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xl hover:shadow-[0_12px_35px_-8px_rgba(182,154,112,0.22)] ${
                  project.featured
                    ? 'border-[#8F7654]/40 hover:border-[#D0B58D]'
                    : 'border-[#8F7654]/20 hover:border-[#D0B58D]/70'
                }`}
              >
                {/* Top ambient gold line */}
                <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#D0B58D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Header row: Category & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold tracking-wider text-[#D0B58D] bg-[#1a1610] border border-[#8F7654]/30 px-3 py-1 rounded-full uppercase">
                      {project.category}
                    </span>
                    {project.featured && (
                      <div className="inline-flex items-center gap-1 text-[11px] text-[#B69A70]">
                        <Star className="w-3.5 h-3.5 fill-[#B69A70]" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Project Title & Tagline */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#D0B58D] transition-colors duration-200 mb-1">
                    {project.title}
                  </h3>
                  <h4 className="text-xs font-medium text-[#B69A70] tracking-wide mb-4">
                    {project.tagline}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-[#BDBDBD] font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5 mb-5">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] text-white/80 bg-[#14120e] border border-[#8F7654]/20 px-2.5 py-1 rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5">
                    {/* Direct Google Play Store Link */}
                    <a
                      href={project.playStoreUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D0B58D] hover:text-white transition-colors group/link py-1"
                      aria-label={`View ${project.title} on Google Play Store`}
                    >
                      <svg className="w-4 h-4 fill-currentColor text-[#B69A70] group-hover/link:text-[#D0B58D] transition-colors" viewBox="0 0 24 24">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 01-.61-1.614V3.428c0-.623.228-1.19.61-1.614zm11.235 11.238l2.58 2.58-12.72 7.34 10.14-9.92zm2.58-2.58l-2.58-2.58 10.14-9.92-12.72 7.34 5.16 5.16zm1.052 1.053l3.633-2.097a1.69 1.69 0 000-2.936l-3.633-2.098-2.58 3.565 2.58 3.566z" />
                      </svg>
                      <span>Play Store</span>
                      <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>

                    {/* Architecture Details Trigger */}
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1 text-xs text-[#BDBDBD] hover:text-white transition-colors cursor-pointer py-1"
                    >
                      <span>Architecture</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#B69A70]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative max-w-lg w-full bg-[#0d0c0a] border border-[#D0B58D]/50 rounded-2xl p-6 sm:p-8 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold tracking-wider text-[#D0B58D] bg-[#1a1610] px-3 py-1 rounded-full uppercase">
                    {activeModalProject.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="text-[#BDBDBD] hover:text-white p-1 rounded-lg text-lg cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {activeModalProject.title}
                </h3>
                <p className="text-xs text-[#B69A70] mb-4">
                  {activeModalProject.tagline}
                </p>
                <p className="text-sm text-[#BDBDBD] font-light leading-relaxed mb-6">
                  {activeModalProject.description}
                </p>

                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D0B58D] mb-3">
                  Technical Architecture Highlights:
                </h4>
                <ul className="space-y-2 mb-6">
                  {activeModalProject.keyHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[#BDBDBD] font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#B69A70] mt-0.5 flex-shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={activeModalProject.playStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="gold-btn text-xs px-5 py-2.5 rounded-full inline-flex items-center gap-2 cursor-pointer"
                  >
                    <svg className="w-3.5 h-3.5 fill-currentColor" viewBox="0 0 24 24">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.38 2.38 0 01-.61-1.614V3.428c0-.623.228-1.19.61-1.614zm11.235 11.238l2.58 2.58-12.72 7.34 10.14-9.92zm2.58-2.58l-2.58-2.58 10.14-9.92-12.72 7.34 5.16 5.16zm1.052 1.053l3.633-2.097a1.69 1.69 0 000-2.936l-3.633-2.098-2.58 3.565 2.58 3.566z" />
                    </svg>
                    <span>View on Google Play</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(null)}
                    className="text-xs text-[#BDBDBD] hover:text-white cursor-pointer px-3 py-1.5"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
