import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import { Spinner } from './components/ui/spinner';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Procedures = lazy(() => import('./pages/Procedures'));
const ProcedureDetail = lazy(() => import('./pages/ProcedureDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Blog = lazy(() => import('./pages/Blog'));
const Consultation = lazy(() => import('./pages/Consultation'));
const Contact = lazy(() => import('./pages/Contact'));
const Testimonials = lazy(() => import('./pages/Testimonials'));

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-[60vh]">
            <Spinner size="lg" className="text-accent" />
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/procedures" element={<Procedures />} />
            <Route path="/procedures/:slug" element={<ProcedureDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};

export default App;
