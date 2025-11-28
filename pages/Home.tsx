import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import StatsCounter from '../components/StatsCounter';
import Clients from '../components/Clients';
import { STATS } from '../constants';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-primary border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map(stat => (
              <StatsCounter key={stat.id} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <Clients />

      <Services />
      <Portfolio />

      {/* CTA Section */}
      <section className="py-32 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-multiply"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-black mb-6"
          >
            Ready to Ignite Your Brand?
          </motion.h2>
          <p className="text-black/80 text-xl mb-10 max-w-2xl mx-auto font-medium">
            Let's create something extraordinary together. Schedule a free consultation today.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="font-bold border-none shadow-xl">
                Get Started Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;