import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', path: '/about' },
      { label: 'Our Services', path: '/services' },
      { label: 'Careers', path: '/careers' },
      { label: 'Press & Media', path: '/press' },
      { label: 'Investor Relations', path: '/investors' }
    ],
    support: [
      { label: 'Help Center', path: '/help' },
      { label: 'Contact Us', path: '/contact' },
      { label: 'Shipping Info', path: '/shipping' },
      { label: 'Returns & Refunds', path: '/returns' },
      { label: 'Warranty Claims', path: '/warranty' }
    ],
    legal: [
      { label: 'Terms & Conditions', path: '/terms' },
      { label: 'Privacy Policy', path: '/privacy' },
      { label: 'Cookie Policy', path: '/cookies' },
      { label: 'Disclaimer', path: '/disclaimer' },
      { label: 'Compliance', path: '/compliance' }
    ],
    categories: [
      { label: 'Smartphones', path: '/shop-page?category=smartphones' },
      { label: 'Laptops', path: '/shop-page?category=laptops' },
      { label: 'Tablets', path: '/shop-page?category=tablets' },
      { label: 'Accessories', path: '/shop-page?category=accessories' },
      { label: 'Smart Watches', path: '/shop-page?category=smartwatches' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', url: 'https://facebook.com/thegadgethub', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: 'Instagram', url: 'https://instagram.com/thegadgethub', color: 'hover:text-pink-600' },
    { name: 'Twitter', icon: 'Twitter', url: 'https://twitter.com/thegadgethub', color: 'hover:text-blue-400' },
    { name: 'YouTube', icon: 'Youtube', url: 'https://youtube.com/thegadgethub', color: 'hover:text-red-600' },
    { name: 'LinkedIn', icon: 'Linkedin', url: 'https://linkedin.com/company/thegadgethub', color: 'hover:text-blue-700' }
  ];

  const contactInfo = [
    { icon: 'Phone', label: '+94 11 234 5678', type: 'tel' },
    { icon: 'Mail', label: 'hello@thegadgethub.lk', type: 'email' },
    { icon: 'MapPin', label: '123 Galle Road, Colombo 03, Sri Lanka', type: 'address' },
    { icon: 'Clock', label: 'Mon-Sat: 9AM-8PM, Sun: 10AM-6PM', type: 'hours' }
  ];

  const paymentMethods = [
    { name: 'Visa', icon: 'CreditCard' },
    { name: 'Mastercard', icon: 'CreditCard' },
    { name: 'American Express', icon: 'CreditCard' },
    { name: 'PayPal', icon: 'Wallet' },
    { name: 'Bank Transfer', icon: 'Building2' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Best Deals</h3>
              <p className="text-gray-300 text-lg">
                Get exclusive offers, price alerts, and early access to new gadgets delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white placeholder-gray-400"
                />
              </div>
              <button className="px-6 py-3 bg-primary hover:bg-primary/90 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <Icon name="Mail" size={16} />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/home-page" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Zap" size={24} color="white" />
              </div>
              <span className="text-2xl font-bold">The Gadget Hub</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Sri Lanka's most trusted gadget marketplace, offering intelligent price comparison 
              across 100+ distributors to guarantee you the best deals on authentic electronics.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center space-x-3 text-sm text-gray-300">
                  <Icon name={contact.icon} size={16} className="text-primary flex-shrink-0" />
                  <span>{contact.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {footerLinks.categories.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges & Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div>
              <h5 className="font-semibold mb-4">We Accept</h5>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg"
                  >
                    <Icon name={method.icon} size={16} className="text-gray-300" />
                    <span className="text-xs text-gray-300">{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Certifications</h5>
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-800 px-3 py-2 rounded-lg">
                  <span className="text-xs text-gray-300">SSL Secured</span>
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded-lg">
                  <span className="text-xs text-gray-300">ISO 27001</span>
                </div>
                <div className="bg-gray-800 px-3 py-2 rounded-lg">
                  <span className="text-xs text-gray-300">PCI DSS</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-semibold mb-4">Download Our App</h5>
              <div className="flex flex-col space-y-2">
                <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                  <Icon name="Smartphone" size={16} />
                  <span className="text-sm">Download for iOS</span>
                </button>
                <button className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors">
                  <Icon name="Smartphone" size={16} />
                  <span className="text-sm">Download for Android</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} The Gadget Hub. All rights reserved. | Registered in Sri Lanka
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-400 mr-2">Follow us:</span>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <Icon name={social.icon} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;