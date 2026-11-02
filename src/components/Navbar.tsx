import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SERVICES', href: '#services' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#8F7654]/20 py-4 shadow-2xl shadow-black/80'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Monogram Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-sm border border-[#8F7654]/60 flex items-center justify-center bg-[#0a0a0a] group-hover:border-[#D0B58D] transition-all duration-300 shadow-[0_0_15px_rgba(182,154,112,0.15)] group-hover:shadow-[0_0_20px_rgba(208,181,141,0.35)]">
            <span className="font-serif text-sm font-bold tracking-widest text-[#D0B58D] group-hover:text-white transition-colors">
              MC
            </span>
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#B69A70] rounded-full animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-widest text-white/95 uppercase font-serif">
              Melvin Cherian
            </span>
            <span className="text-[10px] tracking-wider text-[#B69A70] uppercase">
              Flutter Developer • 2+ Yrs Exp
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-semibold tracking-widest text-[#BDBDBD] hover:text-[#D0B58D] transition-colors duration-200 relative py-1 group uppercase font-sans"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B69A70] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="gold-btn text-xs tracking-wider font-medium px-5 py-2.5 rounded-full inline-flex items-center gap-2"
          >
            Get In Touch
            <ArrowUpRight className="w-3.5 h-3.5 text-[#D0B58D]" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[#D0B58D] hover:text-white p-2 rounded-lg focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-[#8F7654]/30 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-widest font-medium text-[#BDBDBD] hover:text-[#D0B58D] py-2 border-b border-white/5 uppercase"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="gold-btn text-xs text-center py-3 rounded-full mt-3 font-medium"
            >
              Start a Conversation →
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
