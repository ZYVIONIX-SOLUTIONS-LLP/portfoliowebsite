import { ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-[#8F7654]/20 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Upper Footer: Brand & Socials */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Logo & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm border border-[#8F7654]/60 flex items-center justify-center bg-[#0a0a0a] shadow-[0_0_15px_rgba(182,154,112,0.15)]">
              <span className="font-serif text-sm font-bold tracking-widest text-[#D0B58D]">
                MC
              </span>
            </div>
            <div>
              <span className="text-sm font-semibold tracking-widest text-white uppercase font-serif block">
                Melvin Cherian
              </span>
              <span className="text-xs text-[#B69A70] tracking-wider uppercase font-light">
                Flutter Developer • Kottayam & Kochi, Kerala
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#8F7654] hover:text-[#D0B58D] transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#8F7654] hover:text-[#D0B58D] transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919961593179"
              target="_blank"
              rel="noreferrer"
              className="text-[#8F7654] hover:text-[#D0B58D] transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href="mailto:melvincherian0190@gmail.com"
              className="text-[#8F7654] hover:text-[#D0B58D] transition-colors p-2 rounded-full hover:bg-white/5"
              aria-label="Email"
            >
              <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </a>
          </div>

          {/* Scroll to Top Button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-[#8F7654]/40 flex items-center justify-center text-[#D0B58D] hover:text-white hover:border-[#D0B58D] hover:bg-[#1a1712] transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        {/* Lower Footer: Quick Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#BDBDBD]/60 gap-4">
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium tracking-wider uppercase">
            <a href="#home" className="hover:text-[#D0B58D] transition-colors">Home</a>
            <a href="#about" className="hover:text-[#D0B58D] transition-colors">About</a>
            <a href="#experience" className="hover:text-[#D0B58D] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[#D0B58D] transition-colors">Projects</a>
            <a href="#services" className="hover:text-[#D0B58D] transition-colors">Services</a>
            <a href="#faq" className="hover:text-[#D0B58D] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[#D0B58D] transition-colors">Contact</a>
          </div>

          <p className="text-center sm:text-right">
            © {new Date().getFullYear()} Melvin Cherian. All rights reserved. Crafted in Champagne Gold & Pure Black.
          </p>
        </div>
      </div>
    </footer>
  );
};
