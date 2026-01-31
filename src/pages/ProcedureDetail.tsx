import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blink } from '@/lib/blink';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { 
  ArrowLeft, CheckCircle2, Info, Clock, ShieldAlert, 
  ChevronRight, MessageSquare, Calendar 
} from 'lucide-react';
import { 
  Accordion, AccordionContent, AccordionItem, AccordionTrigger 
} from '@/components/ui/accordion';

interface Procedure {
  id: string;
  title: string;
  slug: string;
  description: string;
  who_its_for: string;
  benefits: string;
  recovery_timeline: string;
  risks: string;
  image_url: string;
}

const ProcedureDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [procedure, setProcedure] = useState<Procedure | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProcedure = async () => {
      try {
        const data = await blink.db.procedures.list({
          where: { slug: slug }
        });
        if (data.length > 0) {
          setProcedure(data[0] as any);
        }
      } catch (error) {
        console.error('Error fetching procedure:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProcedure();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center">
        <Spinner size="lg" className="text-accent" />
      </div>
    );
  }

  if (!procedure) {
    return (
      <div className="pt-24 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Procedure not found</h2>
        <Link to="/procedures">
          <Button variant="outline" className="rounded-full">Back to all procedures</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Header */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={procedure.image_url || `https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1600`}
            alt={procedure.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link to="/procedures" className="text-white/70 hover:text-white flex items-center space-x-2 text-sm uppercase tracking-widest font-bold mb-6 group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Procedures</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              {procedure.title}
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl">
              {procedure.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Who it's for */}
              <div className="animate-fade-in">
                <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <Info className="text-accent" size={20} />
                  </span>
                  Who it's for
                </h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  {procedure.who_its_for || "Contact us for more information on candidacy for this procedure."}
                </p>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <CheckCircle2 className="text-accent" size={20} />
                  </span>
                  The Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {procedure.benefits?.split(',').map((benefit, i) => (
                    <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-secondary/30">
                      <ChevronRight className="text-accent mt-0.5 shrink-0" size={18} />
                      <span className="text-foreground/80 font-medium">{benefit.trim()}</span>
                    </div>
                  )) || "Improved confidence and aesthetic harmony."}
                </div>
              </div>

              {/* Recovery */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <Clock className="text-accent" size={20} />
                  </span>
                  Recovery Timeline
                </h2>
                <div className="p-8 rounded-2xl border-l-4 border-accent bg-secondary/20">
                  <p className="text-foreground/70 leading-relaxed italic">
                    {procedure.recovery_timeline || "Consult with Dr. Donald for a personalized recovery plan."}
                  </p>
                </div>
              </div>

               {/* Risks */}
               <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-6 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-4">
                    <ShieldAlert className="text-accent" size={20} />
                  </span>
                  Safety & Risks
                </h2>
                <div className="p-8 rounded-2xl bg-destructive/5 border border-destructive/10">
                  <p className="text-destructive font-bold uppercase tracking-widest text-[10px] mb-4">Important Safety Information</p>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {procedure.risks || "All surgical procedures carry some degree of risk. These will be discussed in detail during your consultation."}
                  </p>
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h2 className="text-2xl font-serif font-bold text-primary mb-8">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b-border/50">
                    <AccordionTrigger className="text-left font-serif text-lg">How long does the procedure take?</AccordionTrigger>
                    <AccordionContent className="text-foreground/60 leading-relaxed">
                      Surgical times vary depending on the individual patient and complexity, but generally last between 1 to 4 hours.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2" className="border-b-border/50">
                    <AccordionTrigger className="text-left font-serif text-lg">When can I return to work?</AccordionTrigger>
                    <AccordionContent className="text-foreground/60 leading-relaxed">
                      Most patients can return to sedentary work within 1 to 2 weeks, depending on the specific procedure and their individual healing rate.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3" className="border-b-border/50">
                    <AccordionTrigger className="text-left font-serif text-lg">Will there be visible scarring?</AccordionTrigger>
                    <AccordionContent className="text-foreground/60 leading-relaxed">
                      Dr. Donald uses advanced techniques to minimize scarring and places incisions in discreet locations whenever possible.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Sidebar Sticky CTA */}
            <div className="lg:block">
              <div className="sticky top-32 space-y-8">
                <div className="bg-primary p-8 rounded-3xl text-white shadow-2xl">
                  <h3 className="text-2xl font-serif font-bold mb-4">Start Your Transformation</h3>
                  <p className="text-white/60 text-sm mb-8 leading-relaxed">
                    Schedule a private consultation with Dr. Donald to discuss if {procedure.title} is right for you.
                  </p>
                  <div className="space-y-4">
                    <Link to="/consultation">
                      <Button className="w-full bg-accent hover:bg-accent/90 py-6 rounded-full font-bold">
                        Book Consultation
                      </Button>
                    </Link>
                    <a href="https://wa.me/+255123456789" className="block">
                      <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 py-6 rounded-full font-bold flex items-center justify-center">
                         <MessageSquare size={18} className="mr-2 text-accent" />
                         Chat on WhatsApp
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="bg-secondary/30 p-8 rounded-3xl border border-border/50">
                   <h4 className="font-bold text-primary mb-4 flex items-center">
                    <Calendar size={18} className="text-accent mr-2" />
                    Clinic Hours
                  </h4>
                  <div className="space-y-2 text-sm text-foreground/60 font-medium">
                    <div className="flex justify-between border-b border-border/50 pb-2">
                      <span>Mon - Fri</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span>Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcedureDetail;
