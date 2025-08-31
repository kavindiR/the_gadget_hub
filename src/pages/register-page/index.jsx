import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import RegisterForm from './components/RegisterForm';
import PromotionalSidebar from './components/PromotionalSidebar';
import Icon from '../../components/AppIcon';
import { useAuth } from '../../context/AuthContext';

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());
  const { register } = useAuth();

  useEffect(() => {
    document.title = 'Register - The Gadget Hub';
  }, []);

  const handleRegister = async (userData) => {
    setIsLoading(true);
    
    try {
      const result = await register(userData);
      return result;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        <div className="min-h-[calc(100vh-4rem)] flex">
          {/* Register Form Section */}
          <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="w-full max-w-md">
              {/* Mobile Header */}
              <div className="lg:hidden text-center mb-8">
                <Link to="/home-page" className="inline-flex items-center space-x-2 mb-6">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Icon name="Zap" size={24} color="white" />
                  </div>
                  <span className="text-xl font-bold text-foreground">The Gadget Hub</span>
                </Link>
              </div>

              <RegisterForm onRegister={handleRegister} isLoading={isLoading} />
            </div>
          </div>

          {/* Promotional Sidebar - Desktop Only */}
          <PromotionalSidebar />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link to="/home-page" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} color="white" />
                </div>
                <span className="text-lg font-bold text-card-foreground">The Gadget Hub</span>
              </Link>
              <p className="text-muted-foreground text-sm mb-4 max-w-md">
                Sri Lanka's premier gadget destination with intelligent price comparison 
                and guaranteed best deals from multiple distributors.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                  <Icon name="Youtube" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/home-page" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/shop-page" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/help" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    Shipping Info
                  </Link>
                </li>
                <li>
                  <Link to="/returns" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link to="/warranty" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} The Gadget Hub. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;