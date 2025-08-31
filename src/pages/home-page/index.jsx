import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroBanner from './components/HeroBanner';
import IntroSection from './components/IntroSection';
import ServicesOverview from './components/ServicesOverview';
import FeaturedProducts from './components/FeaturedProducts';
import Footer from './components/Footer';

const HomePage = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>The Gadget Hub - Best Gadget Prices in Sri Lanka | Smart Price Comparison</title>
        <meta 
          name="description" 
          content="Find the best gadget prices in Sri Lanka with intelligent price comparison across 100+ distributors. Shop smartphones, laptops, and accessories with guaranteed authenticity and lowest prices." 
        />
        <meta 
          name="keywords" 
          content="gadgets Sri Lanka, smartphone prices, laptop deals, electronics shopping, price comparison, authentic gadgets, best deals" 
        />
        <meta name="author" content="The Gadget Hub" />
        <meta property="og:title" content="The Gadget Hub - Best Gadget Prices in Sri Lanka" />
        <meta 
          property="og:description" 
          content="Sri Lanka's most trusted gadget marketplace with intelligent price comparison and guaranteed authenticity." 
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thegadgethub.lk" />
        <link rel="canonical" href="https://thegadgethub.lk" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-16">
          {/* Hero Banner Section */}
          <HeroBanner />

          {/* Introduction Section */}
          <IntroSection />

          {/* Services Overview Section */}
          <ServicesOverview />

          {/* Featured Products Section */}
          <FeaturedProducts />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default HomePage;