import React from 'react';
import { useContent } from '../context/ContentContext';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Blog: React.FC = () => {
  const { posts } = useContent();

  return (
    <div className="pt-24 min-h-screen bg-primary">
      {/* Header */}
      <section className="py-20 bg-primary text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-secondary mb-6">Insights</h1>
          <p className="text-xl text-muted">
            Thoughts, trends, and strategies from our team of digital experts.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-300 group flex flex-col"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-muted mb-4 space-x-4">
                    <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                  </div>
                  <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{post.category}</span>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted text-sm line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="w-fit pl-0 hover:bg-transparent hover:text-accent">
                    Read Article <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
