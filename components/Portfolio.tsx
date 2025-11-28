import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './ui/Button';

const Portfolio: React.FC = () => {
  const { projects } = useContent();

  // Display only first 4 projects on home/components if there are many
  const displayProjects = projects.slice(0, 4);

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
             <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Selected Work</h2>
             <h3 className="text-4xl md:text-5xl font-sans font-bold text-secondary">Featured Case Studies</h3>
          </div>
          <Link to="/work" className="hidden md:block">
             <Button variant="outline">View All Projects</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10" />
                 <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
                 />
                 <div className="absolute top-4 right-4 z-20 bg-secondary backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <ArrowUpRight className="w-5 h-5 text-black" />
                 </div>
              </div>
              
              <div className="flex justify-between items-start">
                  <div>
                    <span className="text-accent text-xs font-bold uppercase tracking-wider mb-2 block">{project.category}</span>
                    <h4 className="text-2xl font-bold text-secondary mb-2 group-hover:text-accent transition-colors">{project.title}</h4>
                    <p className="text-muted text-sm line-clamp-2 max-w-md">{project.description}</p>
                  </div>
                  <span className="text-gray-600 text-sm font-mono mt-1">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Link to="/work">
                <Button variant="outline" className="w-full">View All Projects</Button>
            </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
