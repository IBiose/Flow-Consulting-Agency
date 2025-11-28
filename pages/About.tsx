import React from 'react';
import { TEAM } from '../constants';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-primary text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">Who We Are</h1>
          <p className="text-xl text-muted">
            A collective of dreamers, thinkers, and doers. We are passionate about pushing the boundaries of what's possible in the digital space.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary mb-12 text-center">Meet The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {TEAM.map((member, i) => (
              <motion.div 
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary rounded-xl overflow-hidden border border-white/10 group shadow-lg"
              >
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                    <img 
                        src={member.imageUrl} 
                        alt={member.name} 
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary">{member.name}</h3>
                  <p className="text-accent text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-muted text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;