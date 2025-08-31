import React, { useEffect, useState } from 'react';
        import { Helmet } from 'react-helmet';
        
        import Header from '../../components/ui/Header';
        import HeroSection from './components/HeroSection';
        import ServiceFeatures from './components/ServiceFeatures';
        import PriceComparisonDemo from './components/PriceComparisonDemo';
        import TestimonialsSection from './components/TestimonialsSection';
        import FAQSection from './components/FAQSection';
        import Footer from '../home-page/components/Footer';

        const ServicesPage = () => {
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

          return (
            <>
              <Helmet>
                <title>Our Services - The Gadget Hub | Intelligent Price Comparison & Quality Assurance</title>
                <meta 
                  name="description" 
                  content="Discover how The Gadget Hub's intelligent price comparison system, comprehensive distributor network, and quality assurance services help you find the best gadget deals in Sri Lanka." 
                />
                <meta 
                  name="keywords" 
                  content="price comparison, gadget services, distributor network, quality assurance, delivery services, Sri Lanka electronics" 
                />
                <meta name="author" content="The Gadget Hub" />
                <meta property="og:title" content="Our Services - The Gadget Hub" />
                <meta 
                  property="og:description" 
                  content="Intelligent price comparison system and comprehensive business services for the best gadget shopping experience in Sri Lanka." 
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://thegadgethub.lk/services-page" />
              </Helmet>

              <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-16">
                  <HeroSection />
                  <ServiceFeatures />
                  <PriceComparisonDemo />
                  <TestimonialsSection />
                  <FAQSection />
                </main>

                <Footer />
              </div>
            </>
          );
        };

        export default ServicesPage;