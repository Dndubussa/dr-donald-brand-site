import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { blink } from '@/lib/blink';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { CheckCircle2, ShieldCheck, Clock, Calendar, MessageSquare, ArrowRight } from 'lucide-react';

const Consultation = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    procedure: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await blink.db.consultations.create({
        ...formData,
        userId: 'system', // In a real app, this might be a specific user or 'anonymous'
        status: 'pending'
      });
      toast.success('Consultation request sent successfully! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', procedure: '', message: '' });
    } catch (error) {
      console.error('Error submitting consultation:', error);
      toast.error('Failed to send request. Please try again or contact us via WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 bg-background">
      {/* Hero Section */}
      <section className="bg-secondary/20 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
               <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-accent font-bold uppercase tracking-[0.3em] text-sm mb-6">Take the first step</h2>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-8 leading-tight">
                  Start Your <br />
                  <span className="text-accent italic font-normal">Aesthetic Journey</span>
                </h1>
                <p className="text-foreground/60 text-lg leading-relaxed mb-10 text-balance">
                  Schedule a private consultation with Dr. Donald in Dar es Salaam. We'll discuss your goals, answer your questions, and design a personalized treatment plan for you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Confidential & Private</h4>
                      <p className="text-sm text-foreground/50">Your consultation and medical history are strictly confidential.</p>
                    </div>
                  </div>
                   <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="text-accent" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">Focused Evaluation</h4>
                      <p className="text-sm text-foreground/50">Spend quality time with Dr. Donald for a thorough aesthetic analysis.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-background p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative z-10 border border-border/50"
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-8">Request a Consultation</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input 
                      placeholder="Full Name" 
                      required 
                      className="h-14 rounded-xl border-border bg-secondary/30 px-6"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Input 
                        type="email" 
                        placeholder="Email Address" 
                        required 
                        className="h-14 rounded-xl border-border bg-secondary/30 px-6"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                      <Input 
                        type="tel" 
                        placeholder="Phone Number" 
                        required 
                        className="h-14 rounded-xl border-border bg-secondary/30 px-6"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <Select 
                      required 
                      onValueChange={(val) => setFormData({ ...formData, procedure: val })}
                      value={formData.procedure}
                    >
                      <SelectTrigger className="h-14 rounded-xl border-border bg-secondary/30 px-6 text-foreground/60">
                        <SelectValue placeholder="Procedure of Interest" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rhinoplasty">Rhinoplasty</SelectItem>
                        <SelectItem value="liposuction">Liposuction</SelectItem>
                        <SelectItem value="breast-augmentation">Breast Augmentation</SelectItem>
                        <SelectItem value="tummy-tuck">Tummy Tuck</SelectItem>
                        <SelectItem value="facelift">Facelift</SelectItem>
                        <SelectItem value="other">Other / General Inquiry</SelectItem>
                      </SelectContent>
                    </Select>
                    <Textarea 
                      placeholder="Your Message (Optional)" 
                      className="min-h-[120px] rounded-xl border-border bg-secondary/30 px-6 py-4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-8 text-lg font-bold group"
                    disabled={loading}
                  >
                    {loading ? 'Sending...' : 'Submit Request'}
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-[10px] text-center text-foreground/40 uppercase tracking-widest leading-relaxed">
                    By submitting this form, you agree to our privacy policy and consent to being contacted regarding your inquiry.
                  </p>
                </form>
              </motion.div>
              
              {/* Decorative behind form */}
              <div className="absolute -top-10 -right-10 w-full h-full border-2 border-accent/10 rounded-[2.5rem] -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Other Ways to Connect</h2>
            <div className="w-20 h-1 bg-accent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
             <div className="bg-secondary/20 p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-secondary/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <MessageSquare className="text-accent" size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-2">WhatsApp Chat</h4>
                <p className="text-foreground/60 text-sm mb-8">For quick inquiries and direct communication with our patient coordinator.</p>
                <a href="https://wa.me/+255123456789" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white">
                    Start WhatsApp Chat
                  </Button>
                </a>
             </div>

             <div className="bg-secondary/20 p-10 rounded-3xl flex flex-col items-center text-center group hover:bg-secondary/40 transition-colors">
                <div className="w-16 h-16 rounded-full bg-background flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <Calendar className="text-accent" size={32} />
                </div>
                <h4 className="text-xl font-serif font-bold text-primary mb-2">Office Visit</h4>
                <p className="text-foreground/60 text-sm mb-8">Visit our premium clinic at Msasani Peninsula for an in-person consultation.</p>
                <Link to="/contact">
                  <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary hover:text-white">
                    View Office Location
                  </Button>
                </Link>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation;
