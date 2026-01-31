import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary py-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-6">Contact Us</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
              We're Here to <br />
              <span className="text-accent italic font-normal">Welcome You</span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
              Visit our premium clinic in Dar es Salaam or reach out to us through our various communication channels. We look forward to being part of your transformation.
            </p>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent/10 blur-3xl pointer-events-none" />
      </section>

      {/* Contact Info Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            <div className="bg-secondary/20 p-12 rounded-[2rem] border border-border/50">
               <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                 <MapPin className="text-accent" size={28} />
               </div>
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Location</h3>
               <p className="text-foreground/60 leading-relaxed mb-8">
                 Msasani Peninsula, <br />
                 Haile Selassie Road, <br />
                 Dar es Salaam, Tanzania
               </p>
               <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform"
              >
                Get Directions <ArrowRight size={14} className="ml-2" />
              </a>
            </div>

            <div className="bg-secondary/20 p-12 rounded-[2rem] border border-border/50">
               <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                 <Phone className="text-accent" size={28} />
               </div>
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Communication</h3>
               <div className="space-y-4 mb-8">
                 <div className="flex items-center space-x-3 text-foreground/70">
                   <Phone size={18} className="text-accent/50" />
                   <span className="font-medium">+255 123 456 789</span>
                 </div>
                 <div className="flex items-center space-x-3 text-foreground/70">
                   <Mail size={18} className="text-accent/50" />
                   <span className="font-medium">info@drdonald.co.tz</span>
                 </div>
                 <div className="flex items-center space-x-3 text-foreground/70">
                   <MessageCircle size={18} className="text-accent/50" />
                   <span className="font-medium">WhatsApp Available</span>
                 </div>
               </div>
               <a 
                href="https://wa.me/+255123456789"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform"
              >
                Chat on WhatsApp <ArrowRight size={14} className="ml-2" />
              </a>
            </div>

            <div className="bg-secondary/20 p-12 rounded-[2rem] border border-border/50">
               <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm">
                 <Clock className="text-accent" size={28} />
               </div>
               <h3 className="text-2xl font-serif font-bold text-primary mb-4">Clinic Hours</h3>
               <div className="space-y-4 text-foreground/70 mb-8">
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/50 pb-2">
                    <span className="font-medium">Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                   <div className="flex justify-between items-center text-foreground/30">
                    <span className="font-medium">Sunday</span>
                    <span>Closed</span>
                  </div>
               </div>
               <p className="text-[10px] uppercase tracking-widest text-accent font-bold">In-person visits by appointment only</p>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="aspect-[21/9] w-full bg-secondary rounded-[3rem] overflow-hidden relative group">
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="text-center px-6">
                 <MapPin size={48} className="text-accent mx-auto mb-4 animate-bounce" />
                 <h4 className="text-2xl font-serif font-bold text-primary mb-2">Interactive Map Location</h4>
                 <p className="text-foreground/50 text-sm">Msasani Peninsula, Dar es Salaam, Tanzania</p>
                 <Button className="mt-8 rounded-full bg-primary hover:bg-primary/90 px-8">Open in Google Maps</Button>
               </div>
            </div>
            {/* Background pattern for map placeholder */}
            <div className="w-full h-full opacity-10 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-secondary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">Need Immediate Assistance?</h2>
            <p className="text-foreground/60 mb-10 leading-relaxed">
              For urgent inquiries or to reschedule an existing appointment, the fastest way to reach our patient care team is via WhatsApp.
            </p>
            <a href="https://wa.me/+255123456789" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white px-10 py-7 text-lg font-bold shadow-lg shadow-green-500/20">
                <MessageCircle size={24} className="mr-2" />
                Connect on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
