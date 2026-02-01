import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Award, Users } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent" />,
      title: 'Safety First',
      description: 'Adhering to the highest international medical standards for surgical safety and hygiene.'
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: 'Expert Precision',
      description: 'Board-certified expertise with a focus on natural-looking, refined aesthetic results.'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-accent" />,
      title: 'Personalized Care',
      description: 'Bespoke treatment plans designed to align with your individual aesthetic goals.'
    },
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: 'Patient Trust',
      description: 'A compassionate approach that builds long-term relationships and patient confidence.'
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img
                src="https://v3b.fal.media/files/b/0a8cb7d0/dr1DdIqCQIjm6yFWL8bkl.png"
                alt="Dr. Donald Professional Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Background decorative square */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-accent/20 rounded-2xl -z-0" />
            <div className="absolute -bottom-10 -right-10 bg-primary p-8 rounded-xl shadow-xl z-20 hidden md:block max-w-xs">
              <p className="text-white text-base font-serif italic mb-2">
                "My mission is to deliver world-class surgical excellence right here in Dar es Salaam."
              </p>
              <div className="w-12 h-0.5 bg-accent mb-2" />
              <p className="text-white/60 text-xs font-bold uppercase tracking-widest">
                Dr. Donald, Surgeon
              </p>
            </div>
          </motion.div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Why Choose Dr. Donald</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-primary mb-8 leading-tight">
              Surgical Excellence Meets Compassionate Care
            </h3>
            <p className="text-foreground/70 mb-12 text-base leading-relaxed">
              Dr. Donald brings years of international training and hundreds of successful procedures to Tanzania. We believe that every patient deserves a personalized experience that prioritizes their safety, comfort, and ultimate aesthetic goals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col space-y-3"
                >
                  <div className="mb-1">{item.icon}</div>
                  <h4 className="text-lg font-serif font-bold text-primary">{item.title}</h4>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
