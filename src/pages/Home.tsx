import React from 'react';
import Hero from '@/components/home/Hero';
import Highlights from '@/components/home/Highlights';
import ProceduresPreview from '@/components/home/ProceduresPreview';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Shield, Award, Users, ArrowRight } from 'lucide-react';

const Home = () => {
  const galleryImages = [
    'https://v3b.fal.media/files/b/0a8cb7d0/kLJ8UNLlgQu_KIMYbwM_I.png',
    'https://v3b.fal.media/files/b/0a8cb7d0/l4QatJy-HWyWe3xvikX26.png',
    'https://v3b.fal.media/files/b/0a8cb7d1/we1oRsj_X1jcpB5Xx2iXz.png'
  ];

  return (
    <div className="overflow-hidden">
      <Hero />
      <Highlights />
      <ProceduresPreview />
      
      {/* Before & After Preview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Results Speak for Themselves</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-primary mb-6">
              Exceptional Transformations
            </h3>
            <p className="text-foreground/60 text-lg leading-relaxed">
              Explore our gallery of real patient results to see the standard of care and aesthetic precision we deliver. 
              <span className="block mt-2 text-sm italic">*Results vary per patient. Consent obtained for all images.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white text-lg font-serif mb-2">Patient Transformation</p>
                  <Link to="/gallery" className="text-accent text-sm font-bold uppercase tracking-widest flex items-center">
                    View Gallery <ArrowRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
             <Link to="/gallery">
              <Button variant="outline" className="rounded-full border-primary/20 px-8 py-6 text-base hover:bg-primary/5">
                View Full Results Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Patient Experiences</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-primary mb-8">
                What Our Patients Are Saying
              </h3>
              <div className="flex space-x-12 mb-10">
                <div className="flex flex-col">
                  <span className="text-3xl font-serif text-accent mb-1">98%</span>
                  <span className="text-xs uppercase tracking-widest text-foreground/50 font-bold">Patient Satisfaction</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-serif text-accent mb-1">5.0</span>
                  <div className="flex space-x-0.5 mb-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" className="text-yellow-500" />)}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-foreground/50 font-bold">Average Rating</span>
                </div>
              </div>
              <Link to="/testimonials">
                <Button variant="link" className="text-primary font-bold uppercase tracking-widest p-0 flex items-center group">
                  Read More Testimonials <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-background p-10 rounded-2xl shadow-xl relative">
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white shadow-lg">
                  <Users size={24} />
                </div>
                <div className="flex space-x-1 mb-6">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} size={18} fill="currentColor" className="text-yellow-500" />)}
                </div>
                <p className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed mb-8">
                  "Dr. Donald and his team provided exceptional care throughout my entire journey. The results are beyond my expectations, and the follow-up care was so comforting."
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100" alt="Patient" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Sarah J.</h4>
                    <p className="text-xs text-foreground/50 uppercase tracking-widest">Rhinoplasty Patient</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background blobs */}
        <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-24 text-center relative overflow-hidden group">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/20 opacity-90" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,var(--accent-foreground),transparent_70%)] opacity-10" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-6">Take the first step</h2>
              <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                Your Journey to Confidence Starts Today
              </h3>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-12">
                Schedule a private consultation with Dr. Donald to discuss your aesthetic goals and discover the best personalized treatment plan for you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link to="/consultation" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-white rounded-full px-10 py-8 text-lg font-bold">
                    Book Consultation Now
                  </Button>
                </Link>
                <Link to="/contact" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="w-full border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-8 text-lg font-bold">
                    Visit Our Clinic
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Trust badges */}
            <div className="relative z-10 mt-16 pt-16 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50">
              <div className="flex items-center space-x-2">
                <Shield className="text-white" size={24} />
                <span className="text-white text-[10px] uppercase tracking-widest font-bold">Safe Surgery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="text-white" size={24} />
                <span className="text-white text-[10px] uppercase tracking-widest font-bold">Certified Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="text-white" size={24} />
                <span className="text-white text-[10px] uppercase tracking-widest font-bold">Privacy Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
