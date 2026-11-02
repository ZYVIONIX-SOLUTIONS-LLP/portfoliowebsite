import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink,
  MessageCircle,
  FileText
} from 'lucide-react';

export const Contact = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 relative bg-[#050505] overflow-hidden">
      {/* Background ambient lighting */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-[#B69A70] rounded-full blur-[140px] pointer-events-none -z-10"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#B69A70] uppercase mb-3"
          >
            <MessageSquare className="w-4 h-4 text-[#B69A70]" />
            <span>Direct Communication</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase max-w-3xl"
          >
            LET'S <span className="text-[#D0B58D]">CONNECT</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm sm:text-base md:text-lg text-[#BDBDBD] max-w-2xl font-light"
          >
            Whether you have an upcoming mobile project, need a dedicated Flutter specialist, or want to discuss full-time engineering roles, I'm always open to high-impact conversations.
          </motion.p>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B69A70] to-transparent mt-6" />
        </div>

        {/* Quick Action Buttons Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="https://wa.me/919961593179"
            target="_blank"
            rel="noreferrer"
            className="gold-btn px-7 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-3 shadow-xl cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-[#D0B58D]" />
            <span>Chat on WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:melvincherian0190@gmail.com"
            className="px-7 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-3 bg-[#11100e] text-white border border-[#8F7654]/40 hover:border-[#D0B58D] hover:bg-[#1a1712] transition-all shadow-xl cursor-pointer"
          >
            <Mail className="w-5 h-5 text-[#D0B58D]" />
            <span>Send Email</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            href="tel:+919961593179"
            className="px-7 py-4 rounded-full text-sm font-semibold tracking-wide inline-flex items-center gap-3 bg-[#11100e] text-white border border-[#8F7654]/40 hover:border-[#D0B58D] hover:bg-[#1a1712] transition-all shadow-xl cursor-pointer"
          >
            <Phone className="w-5 h-5 text-[#D0B58D]" />
            <span>Call Directly</span>
          </motion.a>
        </div>

        {/* Interactive Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Email */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="p-7 rounded-2xl bg-[#0c0c0c] border border-[#8F7654]/25 hover:border-[#D0B58D]/70 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#14120e] border border-[#8F7654]/40 flex items-center justify-center mb-5 text-[#D0B58D] group-hover:border-[#D0B58D] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#BDBDBD]/60 block mb-1">
                Email Address
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white break-all mb-4">
                melvincherian0190@gmail.com
              </h3>
            </div>
            
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => copyToClipboard('melvincherian0190@gmail.com', 'email')}
                className="text-xs text-[#D0B58D] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
              <a
                href="mailto:melvincherian0190@gmail.com"
                className="text-xs text-[#BDBDBD] hover:text-[#D0B58D] transition-colors inline-flex items-center gap-1"
              >
                <span>Compose</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Phone & WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="p-7 rounded-2xl bg-[#0c0c0c] border border-[#8F7654]/25 hover:border-[#D0B58D]/70 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#14120e] border border-[#8F7654]/40 flex items-center justify-center mb-5 text-[#D0B58D] group-hover:border-[#D0B58D] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#BDBDBD]/60 block mb-1">
                Phone & WhatsApp
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-4">
                +91 99615 93179
              </h3>
            </div>
            
            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <button
                type="button"
                onClick={() => copyToClipboard('+919961593179', 'phone')}
                className="text-xs text-[#D0B58D] hover:text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
              <a
                href="https://wa.me/919961593179"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-[#BDBDBD] hover:text-[#D0B58D] transition-colors inline-flex items-center gap-1"
              >
                <span>WhatsApp</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Location & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="p-7 rounded-2xl bg-[#0c0c0c] border border-[#8F7654]/25 hover:border-[#D0B58D]/70 transition-all duration-300 flex flex-col justify-between group shadow-lg"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#14120e] border border-[#8F7654]/40 flex items-center justify-center mb-5 text-[#D0B58D] group-hover:border-[#D0B58D] transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-xs uppercase tracking-wider text-[#BDBDBD]/60 block mb-1">
                Base Location
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                Kottayam, Kerala, India
              </h3>
              <p className="text-xs text-[#BDBDBD] font-light">
                Open to Remote Roles & Global Relocation
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/5 flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-emerald-400">
                Available Immediately
              </span>
            </div>
          </motion.div>

        </div>

        {/* Social Links Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-[#8F7654]/30 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#14120e] border border-[#8F7654]/40 flex items-center justify-center text-[#D0B58D] flex-shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Full Professional Profile</h4>
              <p className="text-xs text-[#BDBDBD]">Explore verified repositories and professional recommendations.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#14120e] border border-[#8F7654]/30 hover:border-[#D0B58D] text-xs font-semibold text-white hover:text-[#D0B58D] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/melvin-cherian-5a1281297?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#14120e] border border-[#8F7654]/30 hover:border-[#D0B58D] text-xs font-semibold text-white hover:text-[#D0B58D] transition-colors inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
