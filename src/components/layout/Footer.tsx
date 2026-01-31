import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col items-start">
              <span className="text-2xl font-serif font-bold tracking-tight">DR. DONALD</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-semibold -mt-1">
                Plastic & Cosmetic Surgeon
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Providing expert cosmetic and reconstructive surgical care in Dar es Salaam. Focused on natural-looking results and patient safety.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Procedures Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold">Procedures</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/procedures/rhinoplasty" className="hover:text-accent transition-colors">Rhinoplasty</Link></li>
              <li><Link to="/procedures/liposuction" className="hover:text-accent transition-colors">Liposuction</Link></li>
              <li><Link to="/procedures/tummy-tuck" className="hover:text-accent transition-colors">Tummy Tuck</Link></li>
              <li><Link to="/procedures/breast-augmentation" className="hover:text-accent transition-colors">Breast Augmentation</Link></li>
              <li><Link to="/procedures/facelift" className="hover:text-accent transition-colors">Facelift</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link to="/about" className="hover:text-accent transition-colors">About Dr. Donald</Link></li>
              <li><Link to="/gallery" className="hover:text-accent transition-colors">Before & After Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-accent transition-colors">Patient Education</Link></li>
              <li><Link to="/testimonials" className="hover:text-accent transition-colors">Patient Stories</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-semibold">Contact Info</h3>
            <ul className="space-y-4 text-sm text-primary-foreground/70">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-accent shrink-0" />
                <span>Msasani Peninsula, Dar es Salaam, Tanzania</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-accent shrink-0" />
                <span>+255 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-accent shrink-0" />
                <span>info@drdonald.co.tz</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-accent shrink-0" />
                <div>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-widest text-primary-foreground/40">
          <p>© {new Date().getFullYear()} Dr. Donald. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent">Privacy Policy</a>
            <a href="#" className="hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
