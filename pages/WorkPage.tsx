import React from 'react';
import { useContent } from '../context/ContentContext';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const WorkPage: React.FC = () => {
  const { projects } = useContent();

  return (
    <div className="pt-24 min-h-screen bg-primary">
        <section className="py-20 text-center">
            <h1 className="text-5xl font-bold text-secondary mb-6">Our Work</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto px-4">
                A showcase of our finest projects, delivering impact through design and technology.
            </p>
        </section>

        <section className="pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {projects.map((project, index) => (
                    <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group cursor-pointer"
                    >
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
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
        </section>
    </div>
  );
};

export default WorkPage;
