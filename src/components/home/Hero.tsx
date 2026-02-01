import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://v3b.fal.media/files/b/0a8cb7d0/y_qqocGeZkNG75dZHuKs0.png"
          alt="Luxury Clinic"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">
              Expert Surgical Care in Dar es Salaam
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-[1.1] mb-6 text-primary"
          >
            Dr. Donald — Trusted <br />
            <span className="text-accent italic font-normal">Plastic Surgeon</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-base md:text-lg text-foreground/70 leading-relaxed mb-10 max-w-2xl text-balance"
          >
            Enhancing natural beauty with surgical precision and patient-centered care. 
            Experience world-class cosmetic and reconstructive procedures in the heart of Tanzania.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <Link to="/consultation" className="w-full sm:w-auto">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-base group">
                Book a Consultation
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a 
              href="https://wa.me/+255123456789" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full sm:w-auto"
            >
              <Button size="lg" variant="outline" className="w-full border-primary/20 hover:bg-primary/5 rounded-full px-8 py-6 text-base">
                <MessageCircle className="mr-2 text-accent" />
                Chat on WhatsApp
              </Button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center space-x-8 text-foreground/40 text-xs font-semibold uppercase tracking-[0.2em]"
          >
            <div className="flex flex-col">
              <span className="text-primary text-lg font-serif mb-1">15+</span>
              <span>Years Experience</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex flex-col">
              <span className="text-primary text-lg font-serif mb-1">2k+</span>
              <span>Successful Procedures</span>
            </div>
             <div className="w-px h-8 bg-border" />
            <div className="flex flex-col">
              <span className="text-primary text-lg font-serif mb-1">Board</span>
              <span>Certified Surgeon</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full z-0 hidden lg:block opacity-20 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-full h-full text-accent fill-current">
          <circle cx="200" cy="200" r="150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="10 10" />
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
