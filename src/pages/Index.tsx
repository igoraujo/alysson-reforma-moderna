import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Professionals from '@/components/Professionals';
import About from '@/components/About';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const Index = () => {
  useEffect(() => {
    // Smooth scroll animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Professionals />
      <About />
      <Blog />
      <Contact />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Index;
