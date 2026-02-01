import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  const certifications = [
    { year: '2010', title: 'Board Certified Plastic Surgeon', institution: 'International Board of Plastic Surgery' },
    { year: '2012', title: 'Advanced Cosmetic Fellowship', institution: 'Elite Surgical Institute, UK' },
    { year: '2015', title: 'Member of ISAPS', institution: 'International Society of Aesthetic Plastic Surgery' },
    { year: '2018', title: 'Excellence in Reconstructive Care', institution: 'Regional Medical Association' }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">The Surgeon</h2>
                <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-primary mb-8 leading-tight">
                  Driven by Precision, <br />
                  Inspired by <span className="text-accent italic font-normal">Transformation</span>
                </h1>
                <p className="text-foreground/70 text-base leading-relaxed mb-8">
                  Dr. Donald is a board-certified plastic and cosmetic surgeon with over 15 years of experience delivering exceptional surgical care. Based in Dar es Salaam, he has dedicated his career to helping patients achieve their aesthetic goals through safe, world-class procedures.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-10">
                  <div className="flex flex-col">
                    <span className="text-2xl font-serif text-primary font-bold">15+</span>
                    <span className="text-xs uppercase tracking-widest text-foreground/50 font-bold">Years Experience</span>
                  </div>
                   <div className="flex flex-col">
                    <span className="text-2xl font-serif text-primary font-bold">2,000+</span>
                    <span className="text-xs uppercase tracking-widest text-foreground/50 font-bold">Successful Surgeries</span>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="https://v3b.fal.media/files/b/0a8cb7d0/dr1DdIqCQIjm6yFWL8bkl.png"
                  alt="Dr. Donald"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl -z-0" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">Philosophy of Care</h2>
            <p className="text-foreground/60 text-base leading-relaxed">
              "Plastic surgery is not about changing who you are, but about revealing the best version of yourself. My approach combines surgical artistry with medical integrity to ensure that every patient feels confident, safe, and truly cared for."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="text-accent" size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">Patient Safety</h4>
              <p className="text-foreground/60 text-sm">Every procedure is performed in state-of-the-art facilities with the highest safety protocols.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="text-accent" size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">Natural Results</h4>
              <p className="text-foreground/60 text-sm">We focus on subtle enhancements that respect your natural features and unique beauty.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-accent" size={32} />
              </div>
              <h4 className="text-xl font-serif font-bold mb-4">Continuous Learning</h4>
              <p className="text-foreground/60 text-sm">Constantly evolving with the latest surgical techniques and international innovations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-8">Professional Excellence</h2>
              <div className="space-y-6">
                {certifications.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start space-x-6 bg-background p-6 rounded-2xl border border-border shadow-sm"
                  >
                    <div className="text-accent font-serif font-bold text-lg">{cert.year}</div>
                    <div>
                      <h4 className="font-bold text-primary">{cert.title}</h4>
                      <p className="text-foreground/50 text-sm">{cert.institution}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-primary p-12 rounded-[2rem] text-white">
                <Award className="text-accent mb-6" size={48} />
                <h3 className="text-2xl font-serif font-bold mb-4 text-accent">Board Certified Expert</h3>
                <p className="text-white/70 leading-relaxed mb-6">
                  Certification by the International Board of Plastic Surgery is the gold standard in the field. It represents a commitment to the highest levels of professional achievement and ethical conduct.
                </p>
                <Link to="/consultation">
                  <Button className="bg-accent hover:bg-accent/90 text-white rounded-full px-8 group">
                    Book with an Expert
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance Footer */}
      <section className="py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 tracking-tight">
            Ready to start your journey?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/consultation">
              <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 px-10 py-6 text-base">
                Request Consultation
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="rounded-full border-primary/20 px-10 py-6 text-base">
                View Results Gallery
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
