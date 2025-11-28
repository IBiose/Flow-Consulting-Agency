import React from 'react';
import Services from '../components/Services';
import { useContent } from '../context/ContentContext';

const ServicesPage: React.FC = () => {
    // We can use the existing component but wrap it with a specific header
    return (
        <div className="pt-20 min-h-screen bg-primary">
            <section className="py-24 bg-primary text-center">
                <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-6">Our Services</h1>
                <p className="text-xl text-muted">
                    We offer a full spectrum of digital solutions to help your business grow.
                </p>
                </div>
            </section>
            {/* The Services component now pulls from Context, so it will show CMS updates */}
            <div className="-mt-32">
                 <Services />
            </div>
        </div>
    );
};

export default ServicesPage;
