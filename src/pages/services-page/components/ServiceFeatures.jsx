import React, { useState } from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';
        import Button from '../../../components/ui/Button';

        const ServiceFeatures = () => {
          const [activeTab, setActiveTab] = useState(0);

          const services = [
            {
              id: 'price-comparison',
              title: 'Intelligent Price Comparison',
              description: 'Our AI-powered system scans 100+ distributors in real-time to find the absolute best prices for every product.',
              icon: 'BarChart3',
              color: 'primary',
              features: [
                'Real-time price monitoring across 100+ distributors',
                'AI-powered price prediction and trend analysis',
                'Instant notifications when prices drop',
                'Historical price tracking and analytics',
                'Price match guarantee on all products'
              ],
              stats: [
                { label: 'Average Savings', value: 'Rs. 8,500', icon: 'TrendingDown' },
                { label: 'Distributors Connected', value: '100+', icon: 'Network' },
                { label: 'Price Updates/Day', value: '50,000+', icon: 'RefreshCw' }
              ]
            },
            {
              id: 'quality-assurance',
              title: 'Quality Assurance & Authenticity',
              description: 'Every product comes with authenticity verification and full warranty coverage from authorized distributors.',
              icon: 'Shield',
              color: 'success',
              features: [
                'Authorized distributor verification system',
                'Product authenticity guarantee',
                'Full manufacturer warranty coverage',
                'Quality inspection before dispatch',
                'Return/exchange protection policy'
              ],
              stats: [
                { label: 'Authenticity Rate', value: '100%', icon: 'CheckCircle' },
                { label: 'Warranty Coverage', value: 'Full', icon: 'Shield' },
                { label: 'Return Rate', value: '<0.5%', icon: 'RotateCcw' }
              ]
            },
            {
              id: 'delivery-logistics',
              title: 'Smart Delivery & Logistics',
              description: 'Island-wide delivery network with real-time tracking, insurance coverage, and multiple delivery options.',
              icon: 'Truck',
              color: 'accent',
              features: [
                'Island-wide delivery coverage',
                'Real-time order tracking system',
                'Insurance coverage on all shipments',
                'Express delivery options available',
                'Contactless delivery and pickup points'
              ],
              stats: [
                { label: 'Delivery Coverage', value: '100%', icon: 'MapPin' },
                { label: 'Average Delivery', value: '2-3 Days', icon: 'Clock' },
                { label: 'Delivery Success', value: '99.8%', icon: 'CheckCircle' }
              ]
            }
          ];

          return (
            <section className="py-16 lg:py-24 bg-muted/20">
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
                    Comprehensive Services for
                    <span className="block text-primary">Every Shopping Need</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    From intelligent price comparison to quality assurance and seamless delivery, 
                    we've got every aspect of your gadget shopping covered.
                  </p>
                </motion.div>

                {/* Service Tabs */}
                <div className="mb-12">
                  <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
                    {services.map((service, index) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveTab(index)}
                        className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                          activeTab === index
                            ? 'bg-primary text-white shadow-soft'
                            : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        <Icon name={service.icon} size={18} />
                        <span className="whitespace-nowrap">{service.title}</span>
                      </button>
                    ))}
                  </div>

                  {/* Active Service Content */}
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-border rounded-3xl p-8 lg:p-12"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center space-x-3 mb-6">
                          <div className={`w-12 h-12 bg-${services[activeTab].color}/10 rounded-2xl flex items-center justify-center`}>
                            <Icon name={services[activeTab].icon} size={24} className={`text-${services[activeTab].color}`} />
                          </div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                            {services[activeTab].title}
                          </h3>
                        </div>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                          {services[activeTab].description}
                        </p>

                        <div className="space-y-4 mb-8">
                          {services[activeTab].features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon name="Check" size={14} className="text-success" />
                              </div>
                              <span className="text-muted-foreground leading-relaxed">{feature}</span>
                            </motion.div>
                          ))}
                        </div>

                        <Button
                          variant="default"
                          iconName="ArrowRight"
                          iconPosition="right"
                          className="px-8"
                        >
                          Learn More
                        </Button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-1 gap-6">
                        {services[activeTab].stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-muted/50 border border-border rounded-2xl p-6 text-center hover:shadow-soft transition-all duration-300"
                          >
                            <div className={`w-16 h-16 bg-${services[activeTab].color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                              <Icon name={stat.icon} size={28} className={`text-${services[activeTab].color}`} />
                            </div>
                            <div className="text-3xl font-bold text-foreground mb-2 font-mono">
                              {stat.value}
                            </div>
                            <div className="text-muted-foreground font-medium">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        };

        export default ServiceFeatures;