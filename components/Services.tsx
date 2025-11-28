import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../context/ContentContext';
import { Megaphone, Fingerprint, Code, Palette, Zap, ArrowRight, Activity, Search, Layout, Smartphone } from 'lucide-react';

// Extended icon map for dynamic services
const iconMap: Record<string, React.FC<any>> = {
  Megaphone, Fingerprint, Code, Palette, Zap, Activity, Search, Layout, Smartphone
};

const Services: React.FC = () => {
  const { services } = useContent();

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
       {/* Decorative Lines */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
                <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
                <h3 className="text-4xl md:text-5xl font-sans font-bold text-secondary leading-tight">
                    Comprehensive solutions for <br/>
                    <span className="text-muted">modern businesses.</span>
                </h3>
            </div>
            <p className="text-muted max-w-sm mt-6 md:mt-0 text-sm leading-relaxed">
                We combine data-driven strategy with world-class creativity to deliver results that matter.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Zap;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group glass-panel p-8 rounded-2xl hover:bg-white/[0.05] hover:border-accent/50 transition-all duration-500 flex flex-col h-full"
              >
                <div className="mb-6 inline-flex p-3 rounded-xl bg-white/5 text-accent group-hover:bg-accent group-hover:text-black transition-colors duration-300 w-fit">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                
                <h4 className="text-xl font-bold text-secondary mb-4 group-hover:text-accent transition-colors">{service.title}</h4>
                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow group-hover:text-secondary/80 transition-colors">
                  {service.description}
                </p>
                
                <div className="flex items-center text-sm font-semibold text-secondary group-hover:text-accent transition-colors cursor-pointer">
                    Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
