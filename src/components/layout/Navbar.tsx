import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Procedures', href: '/procedures' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-background/80 backdrop-blur-md border-b py-3 shadow-sm' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex flex-col items-start">
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-primary">
              DR. DONALD
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold -mt-1">
              Plastic & Cosmetic Surgeon
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-accent',
                  location.pathname === link.href ? 'text-accent' : 'text-foreground/80'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/consultation">
              <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-full px-6">
                Book Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-4">
             <Link to="/consultation" className="sm:block hidden">
              <Button size="sm" variant="outline" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white">
                Book Now
              </Button>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background z-40 animate-fade-in">
          <div className="flex flex-col p-6 space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-lg font-medium border-b pb-4',
                  location.pathname === link.href ? 'text-accent border-accent' : 'text-foreground/80 border-border'
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/consultation" onClick={() => setIsOpen(false)}>
              <Button className="w-full bg-accent hover:bg-accent/90 py-6 text-lg rounded-xl">
                Book Consultation
              </Button>
            </Link>
            <div className="flex flex-col space-y-4 pt-4">
              <a href="tel:+255123456789" className="flex items-center space-x-3 text-foreground/70">
                <Phone size={20} className="text-accent" />
                <span>+255 123 456 789</span>
              </a>
               <div className="flex items-center space-x-3 text-foreground/70">
                <Calendar size={20} className="text-accent" />
                <span>Mon - Sat: 9 AM - 6 PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
