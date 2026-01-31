import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, Ruler, User, Star, Plus } from 'lucide-react';
import { Card } from '@/components/ui/card';

const procedures = [
  {
    title: 'Rhinoplasty',
    slug: 'rhinoplasty',
    icon: <Scissors className="w-6 h-6" />,
    description: 'Refining nasal aesthetics and improving breathing functionality.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Liposuction',
    slug: 'liposuction',
    icon: <Ruler className="w-6 h-6" />,
    description: 'Precision body contouring to remove persistent fat deposits.',
    image: 'https://images.unsplash.com/photo-1598449356475-b9f71db7d847?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Facelift',
    slug: 'facelift',
    icon: <User className="w-6 h-6" />,
    description: 'Restoring youthful facial definition and reducing sagging skin.',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Breast Augmentation',
    slug: 'breast-augmentation',
    icon: <Star className="w-6 h-6" />,
    description: 'Enhancing volume and symmetry for a balanced, aesthetic silhouette.',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800'
  }
];

const ProceduresPreview = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Popular Procedures</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold tracking-tight text-primary">
              Transformative Care Tailored to Your Unique Beauty
            </h3>
          </div>
          <Link to="/procedures" className="hidden md:flex items-center space-x-2 text-accent font-semibold hover:translate-x-1 transition-transform mt-6 md:mt-0">
            <span>View All Procedures</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {procedures.map((proc, index) => (
            <motion.div
              key={proc.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/procedures/${proc.slug}`} className="group block h-full">
                <Card className="h-full border-none shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden bg-background relative flex flex-col">
                  <div className="aspect-[4/5] overflow-hidden relative">
                    <img
                      src={proc.image}
                      alt={proc.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 text-white">
                       <div className="w-10 h-10 rounded-full glass flex items-center justify-center mb-2">
                        {proc.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h4 className="text-xl font-serif font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {proc.title}
                    </h4>
                    <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1">
                      {proc.description}
                    </p>
                    <div className="flex items-center text-xs font-bold uppercase tracking-wider text-accent group-hover:translate-x-1 transition-transform">
                      Learn More <Plus size={14} className="ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link to="/procedures" className="md:hidden flex items-center justify-center space-x-2 text-accent font-semibold mt-12">
          <span>View All Procedures</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default ProceduresPreview;
