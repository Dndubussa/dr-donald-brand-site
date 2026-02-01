import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Filter, Eye, AlertCircle } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const categories = [
  { id: 'all', name: 'All Results' },
  { id: 'face', name: 'Facial' },
  { id: 'body', name: 'Body' },
  { id: 'breast', name: 'Breast' },
  { id: 'reconstructive', name: 'Reconstructive' }
];

const galleryItems = [
  { id: 1, title: 'Rhinoplasty', category: 'face', image: 'https://v3b.fal.media/files/b/0a8cb7d0/kLJ8UNLlgQu_KIMYbwM_I.png' },
  { id: 2, title: 'Liposuction', category: 'body', image: 'https://v3b.fal.media/files/b/0a8cb7d0/l4QatJy-HWyWe3xvikX26.png' },
  { id: 3, title: 'Breast Augmentation', category: 'breast', image: 'https://v3b.fal.media/files/b/0a8cb7d1/we1oRsj_X1jcpB5Xx2iXz.png' },
  { id: 4, title: 'Facelift', category: 'face', image: 'https://v3b.fal.media/files/b/0a8cb7d0/wNGpfl3f5ekHAcXAQT9ZF.png' },
  { id: 5, title: 'Tummy Tuck', category: 'body', image: 'https://v3b.fal.media/files/b/0a8cb7d0/l4QatJy-HWyWe3xvikX26.png' },
  { id: 6, title: 'Scar Revision', category: 'reconstructive', image: 'https://v3b.fal.media/files/b/0a8cb7d0/dr1DdIqCQIjm6yFWL8bkl.png' }
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Before & After Gallery</h1>
            <p className="text-foreground/60 text-base leading-relaxed mb-8">
              Explore the surgical excellence of Dr. Donald through our gallery of real patient results. 
              Our focus is always on creating natural-looking, harmonious transformations.
            </p>
            <div className="flex items-center justify-center space-x-2 text-accent bg-accent/5 px-6 py-3 rounded-full inline-flex">
              <AlertCircle size={18} />
              <span className="text-sm font-bold uppercase tracking-widest">Results vary per patient</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-center mb-16">
            <Tabs defaultValue="all" className="w-full max-w-2xl" onValueChange={setActiveCategory}>
              <TabsList className="w-full flex flex-wrap justify-center bg-transparent gap-2 h-auto p-0">
                {categories.map(cat => (
                  <TabsTrigger 
                    key={cat.id} 
                    value={cat.id}
                    className="rounded-full px-8 py-3 data-[state=active]:bg-primary data-[state=active]:text-white border border-primary/10 hover:bg-secondary transition-all"
                  >
                    {cat.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-lg relative bg-secondary/20">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Comparison Overlay (Mockup) */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col text-white p-6 text-center">
                       <Eye size={40} className="mb-4 text-accent" />
                       <h4 className="text-xl font-serif font-bold mb-2">{item.title} Result</h4>
                       <p className="text-sm text-white/70">Click to view full case study and comparison</p>
                    </div>
                    {/* Watermark */}
                    <div className="absolute top-4 right-4 bg-primary/20 backdrop-blur-sm px-3 py-1 rounded text-[10px] text-white/80 uppercase tracking-widest font-bold">
                      Dr. Donald Surgical Result
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Gallery Disclaimer */}
          <div className="mt-24 p-12 bg-secondary/20 rounded-[2rem] max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-primary mb-4">Patient Privacy & Consent</h3>
            <p className="text-foreground/60 leading-relaxed text-sm">
              All images in our gallery are of actual patients of Dr. Donald who have provided explicit written consent for their photos to be used for educational and informational purposes. To protect patient privacy, we do not show full faces unless necessary for the procedure results (such as Rhinoplasty or Facelifts). 
              <br /><br />
              <span className="font-bold">Medical Disclaimer:</span> Individual results may vary. Surgical outcomes depend on numerous factors, including patient anatomy, healing capacity, and adherence to post-operative instructions.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">Ready to achieve your goals?</h2>
          <Button size="lg" className="rounded-full bg-accent hover:bg-accent/90 px-10 py-6 text-base font-bold">
            Schedule a Private Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
