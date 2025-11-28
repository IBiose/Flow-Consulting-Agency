import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
             <Link to="/" className="inline-block mb-6">
                <img 
                    src="https://flowconsulting.ng/wp-content/uploads/2025/01/Group-43867.png" 
                    alt="Logo" 
                    className="h-10 w-auto object-contain"
                />
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              We are a full-service creative agency helping brands thrive in a digital-first world. 
              Driven by data, fueled by creativity.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-secondary font-semibold mb-4 uppercase tracking-wider text-sm">Services</h3>
            <ul className="space-y-2 text-muted text-sm">
              <li><Link to="/services" className="hover:text-accent transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Branding</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Creative Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-secondary font-semibold mb-4 uppercase tracking-wider text-sm">Company</h3>
            <ul className="space-y-2 text-muted text-sm">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/work" className="hover:text-accent transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
             <h3 className="text-secondary font-semibold mb-4 uppercase tracking-wider text-sm">Stay Updated</h3>
             <form className="mt-2" onSubmit={(e) => e.preventDefault()}>
               <div className="flex flex-col space-y-2">
                 <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="bg-white/5 border border-white/10 rounded-md px-4 py-2 text-sm text-secondary focus:outline-none focus:border-accent placeholder:text-gray-600"
                 />
                 <button className="bg-accent text-black px-4 py-2 rounded-md text-sm font-bold hover:bg-white hover:text-black transition-colors">
                   Subscribe
                 </button>
               </div>
             </form>
             <div className="flex space-x-4 mt-6">
                <a href="#" className="text-muted hover:text-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-muted hover:text-accent transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-muted hover:text-accent transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-muted hover:text-accent transition-colors"><Linkedin size={20} /></a>
             </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} Lumina Agency. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-secondary">Privacy Policy</a>
            <a href="#" className="hover:text-secondary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;