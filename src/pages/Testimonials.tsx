import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { blink } from '@/lib/blink';
import { Card } from '@/components/ui/card';
import { Spinner } from '@/components/ui/spinner';
import { Star, Quote, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface Testimonial {
  id: string;
  patient_name: string;
  quote: string;
  rating: number;
  procedure: string;
  created_at: string;
}

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await blink.db.testimonials.list({
          orderBy: { created_at: 'desc' }
        });
        setTestimonials(data as any);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background">
      {/* Header */}
      <section className="bg-secondary/30 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-6">Patient Stories</h2>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
              Real Stories, <br />
              <span className="text-accent italic font-normal">Real Results</span>
            </h1>
            <p className="text-foreground/60 text-lg leading-relaxed mb-10">
              Read about the experiences of our patients and the life-changing results achieved through Dr. Donald's personalized surgical care.
            </p>
            <div className="flex flex-wrap justify-center gap-12 pt-4 border-t border-primary/5">
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-primary font-bold">500+</span>
                  <span className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Happy Patients</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-serif text-primary font-bold">4.9/5</span>
                  <div className="flex space-x-1 mb-1">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" className="text-yellow-500" />)}
                  </div>
                  <span className="text-xs uppercase tracking-widest text-foreground/40 font-bold">Average Rating</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials List */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <Spinner size="lg" className="text-accent" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {testimonials.map((test, index) => (
                <motion.div
                  key={test.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-10 md:p-12 h-full border-none bg-secondary/20 rounded-[2.5rem] relative flex flex-col hover:bg-secondary/30 transition-colors">
                    <Quote className="absolute top-10 right-10 text-accent/10" size={80} />
                    <div className="flex space-x-1 mb-8 relative z-10">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="currentColor" className="text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-xl md:text-2xl font-serif italic text-primary leading-relaxed mb-10 flex-1 relative z-10">
                      "{test.quote}"
                    </p>
                    <div className="flex items-center space-x-4 relative z-10">
                      <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center font-serif text-xl font-bold text-accent shadow-sm">
                        {test.patient_name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-primary">{test.patient_name}</h4>
                        <p className="text-xs uppercase tracking-widest text-foreground/40 font-bold">
                          {test.procedure} Patient
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Featured Video Section (Placeholder) */}
      <section className="py-24 bg-primary text-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Patient Perspectives</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8">Video Testimonials</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Sometimes the best way to understand the patient journey is to hear it directly from them. Watch our patient stories to learn about their motivations, experiences, and outcomes.
              </p>
              <Link to="/consultation">
                <Button className="rounded-full bg-accent hover:bg-accent/90 text-white px-10 py-7 text-lg font-bold group">
                  Start Your Own Journey
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
            <div className="relative group cursor-pointer">
               <div className="aspect-video bg-white/5 rounded-[2rem] border border-white/10 overflow-hidden flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                  </div>
               </div>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Reassurance */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
          <MessageSquare className="text-accent mx-auto mb-8" size={48} />
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
            We'd love to help you achieve <br /> your aesthetic goals.
          </h2>
          <p className="text-foreground/60 text-lg mb-12">
            Every transformation begins with a single conversation. Schedule your private consultation today and discover what's possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/consultation">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-10 py-7 text-lg w-full sm:w-auto">
                Book Consultation
              </Button>
            </Link>
            <a href="https://wa.me/+255123456789" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 px-10 py-7 text-lg w-full">
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
