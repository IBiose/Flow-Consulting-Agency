import React from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary">
       <div className="bg-primary pt-32 pb-24 relative overflow-hidden">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/2 h-full bg-surface/30 skew-x-12 pointer-events-none" />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
             {/* Contact Info */}
             <div>
                <span className="text-accent font-bold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
                <h1 className="text-4xl md:text-6xl font-sans font-bold text-secondary mb-6">Let's create something extraordinary.</h1>
                <p className="text-xl text-muted mb-12 leading-relaxed">
                  Have a project in mind? We'd love to hear about it. Drop us a line and let's start the conversation.
                </p>

                <div className="space-y-8 mb-12">
                  <div className="flex items-start space-x-6">
                    <div className="bg-surface p-3 rounded-lg border border-white/5">
                        <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-secondary font-bold text-lg mb-1">Headquarters</p>
                      <p className="text-muted">123 Innovation Blvd, Tech District<br/>New York, NY 10012</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-surface p-3 rounded-lg border border-white/5">
                        <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-secondary font-bold text-lg mb-1">Phone</p>
                      <p className="text-muted">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-6">
                    <div className="bg-surface p-3 rounded-lg border border-white/5">
                        <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-secondary font-bold text-lg mb-1">Email</p>
                      <p className="text-muted">hello@luminacreative.com</p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="h-64 bg-surface rounded-2xl overflow-hidden border border-white/5 relative group">
                    <img 
                        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600&h=400" 
                        alt="Map" 
                        className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-black/80 backdrop-blur-sm border border-white/10 px-6 py-3 rounded-full flex items-center gap-2">
                             <MapPin className="w-4 h-4 text-accent" />
                             <span className="text-secondary text-sm font-medium">View on Google Maps</span>
                        </div>
                    </div>
                </div>
             </div>

             {/* Form */}
             <div className="bg-surface/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
                <ContactForm />
             </div>
           </div>
         </div>
       </div>
    </div>
  );
};

export default Contact;