import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#B69A70] selection:text-black">
      {/* Top Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section (with user original photo in arch frame) */}
        <Hero />

        {/* 2. Achievement Statistics (Flutter experience, apps deployed, cross-platform) */}
        <Stats />

        {/* 3. About Me Section (with user original photo & skills breakdown) */}
        <About />

        {/* 4. Professional Experience & Education (Zyvionix, Pixelmind, Brototype) */}
        <Experience />

        {/* 5. Selected Projects (Edit Ezy, Redeemly, Clynix, VFARMS, Clynix Rider) */}
        <Projects />

        {/* 6. Flutter Mobile Services */}
        <Services />

        {/* 7. FAQ Section */}
        <FAQ />

        {/* 8. Contact Section (Direct phone, email, WhatsApp, Kottayam) */}
        <Contact />
      </main>

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
