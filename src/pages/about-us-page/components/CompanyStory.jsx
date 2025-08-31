import React from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';

        const CompanyStory = () => {
          const milestones = [
            {
              year: '2019',
              title: 'The Beginning',
              description: 'Founded with a simple vision: make gadget shopping fair and transparent for Sri Lankan consumers.',
              icon: 'Rocket',
              color: 'primary'
            },
            {
              year: '2020',
              title: 'First 1000 Customers',
              description: 'Reached our first milestone during the pandemic, helping people find the best tech deals online.',
              icon: 'Users',
              color: 'success'
            },
            {
              year: '2021',
              title: 'AI-Powered Comparison',
              description: 'Launched our intelligent price comparison system, revolutionizing how Sri Lankans shop for gadgets.',
              icon: 'Brain',
              color: 'accent'
            },
            {
              year: '2022',
              title: '100+ Distributors',
              description: 'Expanded our network to include over 100 authorized distributors across Sri Lanka.',
              icon: 'Network',
              color: 'secondary'
            },
            {
              year: '2023',
              title: 'Island-wide Delivery',
              description: 'Launched comprehensive delivery service covering every district in Sri Lanka.',
              icon: 'Truck',
              color: 'primary'
            },
            {
              year: '2024',
              title: '50,000+ Happy Customers',
              description: 'Celebrating our community of satisfied customers who have saved millions through our platform.',
              icon: 'Trophy',
              color: 'accent'
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
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <Icon name="BookOpen" size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Our Story</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    From Startup to
                    <span className="block text-primary">Sri Lanka's #1 Gadget Hub</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    What started as a simple idea to help Sri Lankan consumers find fair prices 
                    has grown into the island's most trusted technology marketplace.
                  </p>
                </motion.div>

                {/* Story Introduction */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-3xl p-8 lg:p-12 mb-16"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                        Why We Started The Gadget Hub
                      </h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          In 2019, our founders experienced the frustration that many Sri Lankans face when 
                          shopping for gadgets - spending hours visiting multiple stores, comparing prices, 
                          and still worrying about authenticity and fair pricing.
                        </p>
                        <p>
                          We realized that technology should make shopping easier, not harder. That's when 
                          we decided to create a platform that would connect customers directly with authorized 
                          distributors, ensuring the best prices and genuine products.
                        </p>
                        <p>
                          Today, we're proud to have saved our customers over Rs. 500 million while helping 
                          them make informed purchasing decisions with complete confidence.
                        </p>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="bg-gradient-to-br from-primary/10 to-success/10 rounded-2xl p-8">
                        <div className="text-center">
                          <Icon name="Target" size={64} className="text-primary mx-auto mb-6" />
                          <h4 className="text-xl font-bold text-foreground mb-4">Our Core Mission</h4>
                          <p className="text-muted-foreground">
                            To democratize access to technology by ensuring every Sri Lankan gets 
                            the best possible price on authentic gadgets.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Timeline */}
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden lg:block" />

                  <div className="space-y-12 lg:space-y-24">
                    {milestones.map((milestone, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`flex flex-col lg:flex-row items-center ${
                          index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        }`}
                      >
                        {/* Content Card */}
                        <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300">
                            <div className="flex items-center space-x-4 mb-4">
                              <div className={`w-12 h-12 bg-${milestone.color}/10 rounded-2xl flex items-center justify-center`}>
                                <Icon name={milestone.icon} size={24} className={`text-${milestone.color}`} />
                              </div>
                              <div>
                                <div className={`text-2xl font-bold text-${milestone.color} font-mono`}>
                                  {milestone.year}
                                </div>
                                <h3 className="text-xl font-bold text-foreground">
                                  {milestone.title}
                                </h3>
                              </div>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>

                        {/* Timeline Dot */}
                        <div className="hidden lg:block w-2/12 flex justify-center my-8 lg:my-0">
                          <div className={`w-6 h-6 bg-${milestone.color} rounded-full border-4 border-background shadow-soft`} />
                        </div>

                        {/* Spacer */}
                        <div className="w-full lg:w-5/12" />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-16 text-center"
                >
                  <div className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-white">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      The Journey Continues
                    </h3>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                      We're just getting started. Our goal is to make Sri Lanka the most tech-savvy 
                      nation in South Asia by making technology accessible to everyone.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                      {[
                        { icon: 'Target', label: 'Next Goal', value: '100K Customers' },
                        { icon: 'Globe', label: 'Expansion', value: 'South Asia' },
                        { icon: 'Zap', label: 'Innovation', value: 'AI-Powered' }
                      ].map((goal, index) => (
                        <div key={index} className="text-center">
                          <Icon name={goal.icon} size={32} className="mx-auto mb-3 text-white/90" />
                          <div className="font-bold text-lg">{goal.value}</div>
                          <div className="text-blue-100 text-sm">{goal.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };

        export default CompanyStory;