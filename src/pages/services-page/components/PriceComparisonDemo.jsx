import React, { useState, useEffect } from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';
        import Button from '../../../components/ui/Button';

        const PriceComparisonDemo = () => {
          const [currentStep, setCurrentStep] = useState(0);
          const [searchQuery, setSearchQuery] = useState('');
          const [isSearching, setIsSearching] = useState(false);
          const [showResults, setShowResults] = useState(false);

          const demoProducts = [
            'iPhone 15 Pro Max',
            'Samsung Galaxy S24 Ultra',
            'MacBook Pro M3',
            'iPad Air 5th Gen'
          ];

          const demoResults = [
            {
              distributor: 'TechMart LK',
              price: 485000,
              originalPrice: 520000,
              discount: 6.7,
              rating: 4.8,
              delivery: 'Next Day',
              warranty: '1 Year International',
              badge: 'Best Price',
              badgeColor: 'success'
            },
            {
              distributor: 'Gadgets.lk',
              price: 492000,
              originalPrice: 515000,
              discount: 4.5,
              rating: 4.6,
              delivery: '2-3 Days',
              warranty: '1 Year Local',
              badge: '2nd Best',
              badgeColor: 'accent'
            },
            {
              distributor: 'iStore Ceylon',
              price: 498000,
              originalPrice: 525000,
              discount: 5.1,
              rating: 4.9,
              delivery: 'Same Day',
              warranty: '1 Year International',
              badge: '3rd Best',
              badgeColor: 'secondary'
            }
          ];

          const steps = [
            { title: 'Enter Product', description: 'Type or search for any product' },
            { title: 'AI Search', description: 'Our system scans 100+ distributors' },
            { title: 'Best Prices', description: 'Get sorted results with best deals' },
            { title: 'Easy Purchase', description: 'Buy directly from verified sellers' }
          ];

          useEffect(() => {
            const interval = setInterval(() => {
              if (currentStep < steps.length - 1) {
                setCurrentStep(prev => prev + 1);
              } else {
                setCurrentStep(0);
              }
            }, 3000);

            return () => clearInterval(interval);
          }, [currentStep]);

          const handleSearch = () => {
            if (!searchQuery) {
              const randomProduct = demoProducts[Math.floor(Math.random() * demoProducts.length)];
              setSearchQuery(randomProduct);
            }
            
            setIsSearching(true);
            setShowResults(false);
            
            setTimeout(() => {
              setIsSearching(false);
              setShowResults(true);
            }, 2000);
          };

          const formatPrice = (price) => {
            return new Intl.NumberFormat('en-LK', {
              style: 'currency',
              currency: 'LKR',
              minimumFractionDigits: 0
            }).format(price).replace('LKR', 'Rs.');
          };

          return (
            <section className="py-16 lg:py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    See Our Price Comparison
                    <span className="block text-primary">System in Action</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Experience how our intelligent system finds the best prices across 100+ distributors 
                    in seconds. Try it yourself with any product.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  {/* Left Side - Process Steps */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-2xl font-bold text-foreground mb-8">How It Works</h3>
                    
                    <div className="space-y-6">
                      {steps.map((step, index) => (
                        <motion.div
                          key={index}
                          className={`flex items-start space-x-4 p-4 rounded-2xl transition-all duration-500 ${
                            currentStep === index ? 'bg-primary/10 border-2 border-primary/20' : 'bg-muted/30'
                          }`}
                        >
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                            currentStep === index ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                          }`}>
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <div className={`font-semibold mb-1 ${
                              currentStep === index ? 'text-primary' : 'text-foreground'
                            }`}>
                              {step.title}
                            </div>
                            <div className="text-muted-foreground text-sm">
                              {step.description}
                            </div>
                          </div>
                          {currentStep === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-6 h-6 bg-primary rounded-full flex items-center justify-center"
                            >
                              <Icon name="Check" size={14} color="white" />
                            </motion.div>
                          )}
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl border border-success/20">
                      <div className="flex items-center space-x-3 mb-4">
                        <Icon name="TrendingDown" size={24} className="text-success" />
                        <div>
                          <div className="font-bold text-foreground">Average Savings</div>
                          <div className="text-success text-2xl font-bold font-mono">Rs. 8,500</div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Our customers save an average of Rs. 8,500 per purchase by using our price comparison system.
                      </p>
                    </div>
                  </motion.div>

                  {/* Right Side - Interactive Demo */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-3xl shadow-soft-lg p-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-foreground">Live Price Comparison</h3>
                      <div className="flex items-center space-x-2 text-sm text-success">
                        <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
                        <span>Live</span>
                      </div>
                    </div>

                    {/* Search Bar */}
                    <div className="relative mb-6">
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Try: iPhone 15 Pro Max, MacBook Pro, Samsung Galaxy..."
                        className="w-full px-4 py-4 pr-12 bg-muted border border-border rounded-xl text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                      <button
                        onClick={handleSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <Icon name="Search" size={16} />
                      </button>
                    </div>

                    {/* Quick Search Suggestions */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {demoProducts.map((product, index) => (
                        <button
                          key={index}
                          onClick={() => setSearchQuery(product)}
                          className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-white transition-colors"
                        >
                          {product}
                        </button>
                      ))}
                    </div>

                    {/* Loading State */}
                    {isSearching && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                      >
                        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4" />
                        <p className="text-muted-foreground">Scanning 100+ distributors...</p>
                      </motion.div>
                    )}

                    {/* Results */}
                    {showResults && !isSearching && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-muted-foreground">Found {demoResults.length} results</span>
                          <span className="text-success font-medium">Save up to Rs. 13,000</span>
                        </div>

                        {demoResults.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-border rounded-xl p-4 hover:shadow-soft transition-all duration-300"
                          >
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                  <Icon name="Store" size={16} className="text-primary" />
                                </div>
                                <div>
                                  <div className="font-medium text-foreground">{result.distributor}</div>
                                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                                    <Icon name="Star" size={12} className="text-warning fill-current" />
                                    <span>{result.rating}</span>
                                  </div>
                                </div>
                              </div>
                              <div className={`px-2 py-1 bg-${result.badgeColor}/10 text-${result.badgeColor} text-xs font-medium rounded-full`}>
                                {result.badge}
                              </div>
                            </div>

                            <div className="flex items-center justify-between">
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="text-2xl font-bold text-foreground font-mono">
                                    {formatPrice(result.price)}
                                  </span>
                                  <span className="text-sm text-muted-foreground line-through">
                                    {formatPrice(result.originalPrice)}
                                  </span>
                                </div>
                                <div className="text-sm text-success">
                                  Save {formatPrice(result.originalPrice - result.price)} ({result.discount}% off)
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                Buy Now
                              </Button>
                            </div>
                          </motion.div>
                        ))}

                        <div className="text-center pt-4">
                          <Button variant="default" fullWidth>
                            View All Results & Buy
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {/* Default State */}
                    {!isSearching && !showResults && (
                      <div className="text-center py-12">
                        <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Enter a product name to see live price comparison
                        </p>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </section>
          );
        };

        export default PriceComparisonDemo;