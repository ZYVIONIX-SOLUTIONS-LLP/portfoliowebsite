import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: 'Why choose Flutter for building iOS and Android applications?',
      answer:
        'Flutter allows creating truly native-compiled, high-performance applications for both iOS and Android from a single Dart codebase. This reduces development cost and time-to-market by up to 50% while delivering buttery-smooth 60fps animations and identical brand aesthetics across all devices.',
    },
    {
      question: 'Which state management approaches do you use and recommend?',
      answer:
        'I have hands-on production experience with BLoC, Provider, and GetX. For complex enterprise applications, BLoC is ideal for unidirectional data flow and testability. For fast-paced agile apps, Provider offers lightweight, reactive state management. I select the architecture that best fits your product roadmap.',
    },
    {
      question: 'Can you handle third-party payment gateways like Razorpay and Stripe?',
      answer:
        'Yes. I have implemented custom payment flows with Razorpay (as seen in VFARMS), including webhooks, order status reconciliation, receipt generation, and fallback handling for network drops.',
    },
    {
      question: 'Do you manage deployment to Google Play Store and Apple App Store?',
      answer:
        'Absolutely. I handle everything from app bundle generation, Keystore signing, App Store Connect certificates, app privacy manifests, splash screen asset generation, and resolving store review guidelines for smooth approvals.',
    },
    {
      question: 'How do you ensure apps remain functional in low or zero network conditions?',
      answer:
        'I implement offline-first architectures using local persistent storage like Hive and Sqflite alongside SharedPreferences. Data is cached locally and synced seamlessly over WebSockets or background REST workers as soon as connectivity resumes.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 relative bg-[#050505]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest text-[#B69A70] uppercase mb-3">
            <HelpCircle className="w-4 h-4 text-[#B69A70]" />
            <span>Developer Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
            FREQUENTLY ASKED <span className="text-[#D0B58D]">QUESTIONS</span>
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#B69A70] to-transparent mt-5" />
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-xl border border-[#8F7654]/25 bg-[#0a0a0a] overflow-hidden transition-all duration-300 hover:border-[#D0B58D]/50"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-5 px-6 sm:px-8 flex items-center justify-between text-left focus:outline-none group cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#D0B58D] group-hover:text-white transition-colors duration-200 pr-4">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#8F7654]/40 flex items-center justify-center flex-shrink-0 group-hover:border-[#D0B58D] group-hover:bg-[#1a1712] transition-colors">
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-[#D0B58D]" />
                    ) : (
                      <Plus className="w-4 h-4 text-[#D0B58D]" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                    >
                      <div className="px-6 sm:px-8 pb-6 pt-1 text-sm sm:text-base text-[#BDBDBD] font-light leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
