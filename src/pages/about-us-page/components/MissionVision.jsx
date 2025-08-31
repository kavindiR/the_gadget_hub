import React from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';

        const MissionVision = () => {
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
                    Our Mission &
                    <span className="block text-primary">Vision</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Guided by our core beliefs and commitment to making technology accessible 
                    for every Sri Lankan family and business.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Mission */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-success/5 rounded-full transform -translate-x-12 translate-y-12" />

                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                          <Icon name="Target" size={32} className="text-primary" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Our Mission</h3>
                          <p className="text-muted-foreground">What drives us every day</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          To democratize access to technology in Sri Lanka by creating a transparent, 
                          intelligent marketplace that connects consumers with the best deals from 
                          authorized distributors.
                        </p>

                        <div className="space-y-4">
                          {[
                            'Ensure fair and transparent pricing for all consumers',
                            'Guarantee authentic products with full warranty coverage',
                            'Provide exceptional customer service and support',
                            'Support local businesses and distributors',
                            'Make technology accessible to every Sri Lankan'
                          ].map((point, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon name="Check" size={14} className="text-primary" />
                              </div>
                              <span className="text-muted-foreground">{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Vision */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden"
                  >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-success/5 rounded-full transform translate-x-16 -translate-y-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full transform -translate-x-12 translate-y-12" />

                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-8">
                        <div className="w-16 h-16 bg-success/10 rounded-2xl flex items-center justify-center">
                          <Icon name="Eye" size={32} className="text-success" />
                        </div>
                        <div>
                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Our Vision</h3>
                          <p className="text-muted-foreground">Where we're heading</p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          To become South Asia's leading intelligent marketplace for technology products, 
                          setting the standard for transparency, authenticity, and customer satisfaction 
                          in the digital commerce space.
                        </p>

                        <div className="space-y-4">
                          {[
                            'Be the #1 trusted gadget marketplace in South Asia',
                            'Pioneer AI-driven price intelligence in the region',
                            'Empower 1 million+ customers with smart shopping',
                            'Create jobs and opportunities across Sri Lanka',
                            'Lead the digital transformation of retail'
                          ].map((point, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start space-x-3"
                            >
                              <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon name="ArrowRight" size={14} className="text-success" />
                              </div>
                              <span className="text-muted-foreground">{point}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Core Principles */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-white"
                >
                  <div className="text-center mb-12">
                    <Icon name="Compass" size={48} className="mx-auto mb-6 text-white/90" />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">Our Core Principles</h3>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                      The fundamental beliefs that guide every decision we make and every service we provide.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        icon: 'Shield',
                        title: 'Trust & Transparency',
                        description: 'Complete honesty in pricing, sourcing, and business practices'
                      },
                      {
                        icon: 'Users',
                        title: 'Customer First',
                        description: 'Every decision is made with our customers\' best interests in mind'
                      },
                      {
                        icon: 'Zap',
                        title: 'Innovation',
                        description: 'Constantly improving through technology and creative solutions'
                      },
                      {
                        icon: 'Heart',
                        title: 'Community Impact',
                        description: 'Contributing positively to Sri Lankan society and economy'
                      }
                    ].map((principle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon name={principle.icon} size={24} className="text-white" />
                        </div>
                        <h4 className="text-lg font-bold mb-3">{principle.title}</h4>
                        <p className="text-blue-100 text-sm leading-relaxed">
                          {principle.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };

        export default MissionVision;