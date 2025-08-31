import React from 'react';
        import { motion } from 'framer-motion';
        import { Link } from 'react-router-dom';
        import Icon from '../../../components/AppIcon';
        import Button from '../../../components/ui/Button';

        const HeroSection = () => {
          return (
            <section className="relative py-16 lg:py-24 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-success/5" />
              <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform translate-x-32 -translate-y-32" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-success/10 rounded-full blur-3xl transform -translate-x-16 translate-y-16" />

              <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Column - Content */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left"
                  >
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                      <Icon name="Heart" size={16} className="mr-2 text-primary" />
                      <span className="text-sm font-medium text-primary">About The Gadget Hub</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                      Revolutionizing
                      <span className="block text-primary">Gadget Shopping</span>
                      <span className="block">in Sri Lanka</span>
                    </h1>

                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                      We're on a mission to make technology accessible and affordable for every 
                      Sri Lankan by connecting customers with the best deals from 100+ authorized 
                      distributors across the island.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                      <Link to="/shop-page">
                        <Button
                          variant="default"
                          size="lg"
                          iconName="ShoppingBag"
                          iconPosition="left"
                          className="w-full sm:w-auto"
                        >
                          Start Shopping
                        </Button>
                      </Link>
                      <Link to="/services-page">
                        <Button
                          variant="outline"
                          size="lg"
                          iconName="Info"
                          iconPosition="left"
                          className="w-full sm:w-auto"
                        >
                          Our Services
                        </Button>
                      </Link>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">
                      {[
                        { label: 'Happy Customers', value: '50K+' },
                        { label: 'Products Sold', value: '100K+' },
                        { label: 'Total Savings', value: 'Rs. 500M+' }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-2xl font-bold text-primary font-mono">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Column - Visual Elements */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Main Image Placeholder */}
                    <div className="relative bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 max-w-md mx-auto">
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                        {/* Sri Lanka Map Representation */}
                        <div className="w-full h-64 bg-white/20 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-br from-success/20 to-primary/20" />
                          <div className="relative z-10 text-center text-white">
                            <Icon name="MapPin" size={48} className="mx-auto mb-4" />
                            <div className="font-bold text-lg">Island-wide Coverage</div>
                            <div className="text-white/80">100+ Distributors Connected</div>
                          </div>
                          
                          {/* Floating Connection Points */}
                          {[...Array(6)].map((_, index) => (
                            <motion.div
                              key={index}
                              animate={{ 
                                scale: [1, 1.2, 1],
                                opacity: [0.6, 1, 0.6] 
                              }}
                              transition={{ 
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.3 
                              }}
                              className="absolute w-3 h-3 bg-success rounded-full"
                              style={{
                                top: `${20 + Math.random() * 60}%`,
                                left: `${20 + Math.random() * 60}%`
                              }}
                            />
                          ))}
                        </div>

                        {/* Bottom Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white/10 rounded-xl p-4 text-center text-white">
                            <Icon name="Users" size={24} className="mx-auto mb-2" />
                            <div className="font-bold">50,000+</div>
                            <div className="text-xs text-white/80">Customers</div>
                          </div>
                          <div className="bg-white/10 rounded-xl p-4 text-center text-white">
                            <Icon name="Store" size={24} className="mx-auto mb-2" />
                            <div className="font-bold">100+</div>
                            <div className="text-xs text-white/80">Distributors</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Achievement Badges */}
                    <motion.div
                      animate={{ y: [-10, 10, -10] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute -top-6 -right-6 bg-success text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft-lg"
                    >
                      #1 in Sri Lanka
                    </motion.div>

                    <motion.div
                      animate={{ y: [10, -10, 10] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute -bottom-6 -left-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-medium shadow-soft-lg"
                    >
                      Trusted by 50K+
                    </motion.div>

                    <motion.div
                      animate={{ x: [-5, 5, -5] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute top-1/2 -left-8 bg-primary text-white px-3 py-2 rounded-full text-sm font-medium shadow-soft-lg transform -rotate-12"
                    >
                      5 Years Strong
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        };

        export default HeroSection;