import React, { useEffect } from 'react';
        import { Helmet } from 'react-helmet';
        import Header from '../../components/ui/Header';
        import HeroSection from './components/HeroSection';
        import CompanyStory from './components/CompanyStory';
        import MissionVision from './components/MissionVision';
        import TeamSection from './components/TeamSection';
        import ValuesSection from './components/ValuesSection';
        import StatsSection from './components/StatsSection';
        import FooterCTA from './components/FooterCTA';
        import Footer from '../home-page/components/Footer';

        const AboutUsPage = () => {
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

          return (
            <>
              <Helmet>
                <title>About Us - The Gadget Hub | Sri Lanka's Most Trusted Gadget Marketplace</title>
                <meta 
                  name="description" 
                  content="Learn about The Gadget Hub's mission to revolutionize gadget shopping in Sri Lanka through intelligent price comparison, authenticity guarantee, and exceptional customer service." 
                />
                <meta 
                  name="keywords" 
                  content="about The Gadget Hub, Sri Lanka gadgets, company story, mission vision, team, electronics marketplace" 
                />
                <meta name="author" content="The Gadget Hub" />
                <meta property="og:title" content="About Us - The Gadget Hub" />
                <meta 
                  property="og:description" 
                  content="Discover the story behind Sri Lanka's most trusted gadget marketplace and our commitment to providing the best shopping experience." 
                />
                <meta property="og:type" content="website" />
                <link rel="canonical" href="https://thegadgethub.lk/about-us-page" />
              </Helmet>

              <div className="min-h-screen bg-background">
                <Header />

                <main className="pt-16">
                  <HeroSection />
                  <CompanyStory />
                  <MissionVision />
                  <ValuesSection />
                  <TeamSection />
                  <StatsSection />
                  <FooterCTA />
                </main>

                <Footer />
              </div>
            </>
          );
        };

        export default AboutUsPage;