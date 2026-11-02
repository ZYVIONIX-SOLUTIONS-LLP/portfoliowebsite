import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface BlogPost {
  id: string;
  image: string;
  category: string;
  title: string;
  snippet: string;
  date: string;
  readTime: string;
}

export const Blogs = () => {
  const blogs: BlogPost[] = [
    {
      id: 'growth-analytics',
      image: '/blog-1.jpg',
      category: 'Data & Growth',
      title: 'Precision Metrics: Moving Beyond Vanity Impressions in 2026',
      snippet:
        'Why revenue attribution and customer lifetime value (LTV) have replaced click-through rates as the benchmark for luxury brands.',
      date: 'Oct 28, 2026',
      readTime: '5 min read',
    },
    {
      id: 'luxury-branding',
      image: '/blog-2.jpg',
      category: 'Brand Architecture',
      title: 'The Psychology of Black & Gold: Crafting High-Ticket Perception',
      snippet:
        'How deliberate visual minimalism, typography hierarchy, and tactile design elevate customer willingness-to-pay by over 300%.',
      date: 'Oct 19, 2026',
      readTime: '7 min read',
    },
    {
      id: 'scaling-gcc',
      image: '/blog-3.jpg',
      category: 'Market Scaling',
      title: 'The Riyadh & Dubai Digital Playbook: Dominating Search & Social',
      snippet:
        'Tactical frameworks for capturing premium market share across Saudi Arabia and the UAE through bilingual digital funnels.',
      date: 'Sep 30, 2026',
      readTime: '6 min read',
    },
  ];

  return (
    <section id="blogs" className="py-24 sm:py-32 relative bg-[#070707] border-t border-[#8F7654]/15">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#B69A70] uppercase mb-3 block">
              Insights & Thought Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight uppercase">
              LATEST <span className="text-[#D0B58D]">ARTICLES & GUIDES</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#D0B58D] hover:text-white transition-colors inline-flex items-center gap-2 group self-start sm:self-auto"
          >
            <span>Read All Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group rounded-2xl bg-[#0c0c0c] border border-[#8F7654]/25 hover:border-[#D0B58D]/70 overflow-hidden transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_12px_35px_-8px_rgba(182,154,112,0.22)]"
            >
              <div>
                {/* Thumbnail Image Container */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                  {/* Gold Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-semibold tracking-wider text-black bg-[#D0B58D] px-3 py-1 rounded-full uppercase shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-[#BDBDBD]/70 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#B69A70]" />
                      <span>{post.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#B69A70]" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#D0B58D] transition-colors duration-200 line-clamp-2 leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Snippet */}
                  <p className="text-sm text-[#BDBDBD] font-light leading-relaxed line-clamp-2">
                    {post.snippet}
                  </p>
                </div>
              </div>

              {/* Read More Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-white/5">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#D0B58D] group-hover:text-white transition-colors">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
