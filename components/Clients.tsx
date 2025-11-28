
import React from 'react';
import { CLIENTS } from '../constants';

const Clients: React.FC = () => {
  // Duplicate the client list to create a seamless infinite scroll loop
  const duplicatedClients = [...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS];

  return (
    <section className="py-12 bg-black border-b border-white/5 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-muted text-sm font-semibold tracking-[0.2em] uppercase">Trusted by Industry Leaders</p>
      </div>
      
      <div className="relative w-full overflow-hidden">
        {/* Gradients to fade out edges */}
        <div className="absolute top-0 left-0 w-20 md:w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute top-0 right-0 w-20 md:w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

        <div className="flex animate-marquee whitespace-nowrap items-center">
          {duplicatedClients.map((client, index) => (
            <div 
              key={`${client.name}-${index}`} 
              className="mx-8 md:mx-12 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <img 
                src={client.logo} 
                alt={client.name} 
                className="h-10 md:h-14 w-auto object-contain max-w-[150px] brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
