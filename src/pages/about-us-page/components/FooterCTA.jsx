import React from 'react';
        import { motion } from 'framer-motion';
        import { Link } from 'react-router-dom';
        import Icon from '../../../components/AppIcon';
        import Button from '../../../components/ui/Button';

        const FooterCTA = () => {
          return (
            <section className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary via-primary to-primary/90 rounded-3xl p-8 lg:p-16 text-white text-center relative overflow-hidden"
                >
                  {/* Background Elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full transform translate-x-32 -translate-y-32" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full transform -translate-x-24 translate-y-24" />

                  <div className="relative z-10">
                    <Icon name="Rocket" size={64} className="mx-auto mb-8 text-white/90" />
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      Ready to Experience the
                      <span className="block">Future of Gadget Shopping?</span>
                    </h2>
                    
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
                      Join 50,000+ satisfied customers who have discovered the smarter way to shop for gadgets. 
                      Get the best prices, guaranteed authenticity, and exceptional service.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                      <Link to="/shop-page">
                        <Button
                          variant="secondary"
                          size="lg"
                          iconName="ShoppingBag"
                          iconPosition="left"
                          className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 font-semibold px-8"
                        >
                          Start Shopping Now
                        </Button>
                      </Link>
                      <Link to="/services-page">
                        <Button
                          variant="outline"
                          size="lg"
                          iconName="Info"
                          iconPosition="left"
                          className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary"
                        >
                          Learn About Our Services
                        </Button>
                      </Link>
                    </div>

                    {/* Key Benefits */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                      {[
                        {
                          icon: 'Shield',
                          title: '100% Authentic',
                          description: 'Guaranteed genuine products with full warranty'
                        },
                        {
                          icon: 'TrendingDown',
                          title: 'Best Prices',
                          description: 'AI-powered comparison across 100+ distributors'
                        },
                        {
                          icon: 'Truck',
                          title: 'Fast Delivery',
                          description: 'Island-wide delivery with real-time tracking'
                        }
                      ].map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-center"
                        >
                          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Icon name={benefit.icon} size={24} className="text-white" />
                          </div>
                          <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                          <p className="text-blue-100 text-sm">{benefit.description}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12"
                >
                  {/* Contact Details */}
                  <div className="bg-card border border-border rounded-3xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Icon name="MessageCircle" size={32} className="text-primary" />
                      <h3 className="text-2xl font-bold text-foreground">Get in Touch</h3>
                    </div>

                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" size={16} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground mb-1">Head Office</div>
                          <p className="text-muted-foreground">
                            123 Galle Road, Colombo 03<br />
                            Sri Lanka
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Phone" size={16} className="text-success" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground mb-1">Customer Support</div>
                          <p className="text-muted-foreground">
                            +94 11 234 5678<br />
                            Available 24/7
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Icon name="Mail" size={16} className="text-accent" />
                        </div>
                        <div>
                          <div className="font-semibold text-foreground mb-1">Email Us</div>
                          <p className="text-muted-foreground">
                            hello@thegadgethub.lk<br />
                            support@thegadgethub.lk
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">Follow Us</span>
                        <div className="flex space-x-3">
                          {[
                            { icon: 'Facebook', color: 'text-blue-600' },
                            { icon: 'Twitter', color: 'text-blue-400' },
                            { icon: 'Instagram', color: 'text-pink-600' },
                            { icon: 'Linkedin', color: 'text-blue-700' }
                          ].map((social, index) => (
                            <a
                              key={index}
                              href="#"
                              className={`w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300 ${social.color}`}
                            >
                              <Icon name={social.icon} size={16} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-card border border-border rounded-3xl p-8">
                    <div className="flex items-center space-x-3 mb-6">
                      <Icon name="TrendingUp" size={32} className="text-success" />
                      <h3 className="text-2xl font-bold text-foreground">Why Choose Us?</h3>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          metric: '50,000+',
                          label: 'Happy Customers',
                          description: 'Trusted by families and businesses across Sri Lanka',
                          icon: 'Users',
                          color: 'primary'
                        },
                        {
                          metric: 'Rs. 500M+',
                          label: 'Customer Savings',
                          description: 'Total amount saved through our price comparison',
                          icon: 'TrendingDown',
                          color: 'success'
                        },
                        {
                          metric: '4.9/5',
                          label: 'Customer Rating',
                          description: 'Based on thousands of verified reviews',
                          icon: 'Star',
                          color: 'warning'
                        },
                        {
                          metric: '24/7',
                          label: 'Support Available',
                          description: 'Round-the-clock customer service and assistance',
                          icon: 'Clock',
                          color: 'accent'
                        }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-4"
                        >
                          <div className={`w-10 h-10 bg-${stat.color}/10 rounded-full flex items-center justify-center flex-shrink-0`}>
                            <Icon name={stat.icon} size={16} className={`text-${stat.color}`} />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2 mb-1">
                              <span className="text-2xl font-bold text-foreground font-mono">
                                {stat.metric}
                              </span>
                              <span className="font-semibold text-foreground">
                                {stat.label}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {stat.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };

        export default FooterCTA;