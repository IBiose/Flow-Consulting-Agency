import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/80 to-primary z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" /> {/* Extra darkening for contrast */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30 grayscale"
          poster="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop"
        >
            <source src="https://cdn.coverr.co/videos/coverr-working-in-office-open-space-5378/1080p.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent text-sm font-semibold tracking-wide backdrop-blur-md shadow-[0_0_20px_rgba(255,111,59,0.15)]">
              <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
              Strategic Digital Agency
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-secondary mb-8 leading-tight tracking-tight">
            We Design <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-secondary to-accent bg-[length:200%_auto] animate-gradient">
              Future Brands
            </span>
          </h1>
          
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted mb-12 font-light leading-relaxed">
            Flowing seamlessly between strategy, design, and technology to build 
            digital experiences that define industries and captivate audiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link to="/contact">
              <Button size="lg" className="group min-w-[180px]">
                Start Project 
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="group min-w-[180px]">
                <PlayCircle className="mr-2 h-4 w-4 group-hover:text-accent transition-colors" />
                View Showreel
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-3">Scroll to explore</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent/10" />
      </motion.div>
    </section>
  );
};

export default Hero;