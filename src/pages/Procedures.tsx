import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blink } from '@/lib/blink';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';

interface Procedure {
  id: string;
  title: string;
  slug: string;
  description: string;
  image_url: string;
  category: string;
}

const Procedures = () => {
  const [procedures, setProcedures] = useState<Procedure[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProcedures = async () => {
      try {
        const data = await blink.db.procedures.list();
        setProcedures(data as any);
      } catch (error) {
        console.error('Error fetching procedures:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProcedures();
  }, []);

  const filteredProcedures = procedures.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <section className="bg-secondary/20 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Expert Procedures</h1>
            <p className="text-foreground/60 text-base leading-relaxed mb-10">
              Discover our range of surgical and non-surgical aesthetic treatments, performed with the highest level of care and precision in Dar es Salaam.
            </p>
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Search procedures..." 
                className="pl-10 h-12 rounded-full border-primary/10 focus:ring-accent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <Spinner size="lg" className="text-accent" />
            </div>
          ) : filteredProcedures.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProcedures.map((proc, index) => (
                <motion.div
                  key={proc.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/procedures/${proc.slug}`} className="group h-full block">
                    <Card className="h-full overflow-hidden border-none shadow-md hover:shadow-2xl transition-all duration-500 bg-background flex flex-col">
                      <div className="aspect-[16/10] overflow-hidden relative">
                        <img
                          src={proc.image_url || `https://images.unsplash.com/photo-${1580000000000 + index}?auto=format&fit=crop&q=80&w=800`}
                          alt={proc.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                          {proc.title}
                        </h3>
                        <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                          {proc.description}
                        </p>
                        <div className="flex items-center text-accent font-bold text-xs uppercase tracking-[0.2em] group-hover:translate-x-1 transition-transform">
                          Explore Procedure <ArrowRight size={16} className="ml-2" />
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-foreground/40 text-lg">No procedures found matching your search.</p>
              <Button 
                variant="link" 
                onClick={() => setSearchTerm('')}
                className="text-accent mt-4"
              >
                Clear search
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
             <h2 className="text-2xl font-serif font-bold text-primary mb-6">Not sure which procedure is right for you?</h2>
             <p className="text-foreground/60 text-base mb-10">
               Every patient is unique. During your consultation, Dr. Donald will listen to your concerns and provide professional guidance on the best path forward for your goals.
             </p>
             <Link to="/consultation">
               <Button className="rounded-full bg-accent hover:bg-accent/90 px-10 py-6 text-base">
                 Book a Consultation
               </Button>
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Procedures;
