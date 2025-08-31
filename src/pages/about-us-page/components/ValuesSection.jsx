import React from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';

        const ValuesSection = () => {
          const values = [
            {
              id: 1,
              icon: 'Shield',
              title: 'Integrity & Trust',
              description: 'We build lasting relationships through honest communication, transparent pricing, and reliable service delivery.',
              color: 'primary',
              features: [
                'Transparent pricing with no hidden costs',
                'Honest product descriptions and specifications',
                'Reliable delivery and service promises',
                'Ethical business practices'
              ]
            },
            {
              id: 2,
              icon: 'Users',
              title: 'Customer Obsession',
              description: 'Every decision we make starts with the question: "How does this benefit our customers?"',
              color: 'success',
              features: [
                '24/7 customer support availability',
                'Personalized shopping recommendations',
                'Hassle-free returns and exchanges',
                'Continuous feedback integration'
              ]
            },
            {
              id: 3,
              icon: 'Zap',
              title: 'Innovation & Excellence',
              description: 'We constantly push boundaries to deliver cutting-edge solutions that exceed expectations.',
              color: 'accent',
              features: [
                'AI-powered price comparison technology',
                'Continuous platform improvements',
                'Industry-leading customer experience',
                'Data-driven decision making'
              ]
            },
            {
              id: 4,
              icon: 'Heart',
              title: 'Community & Impact',
              description: 'We are committed to making a positive impact on Sri Lankan society and the local technology ecosystem.',
              color: 'secondary',
              features: [
                'Supporting local distributors and businesses',
                'Creating employment opportunities',
                'Educational content and tech literacy',
                'Environmental responsibility initiatives'
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
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <Icon name="Star" size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Our Values</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Values That Drive
                    <span className="block text-primary">Everything We Do</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Our core values are not just words on a wall – they're the foundation of our culture 
                    and the driving force behind every interaction with our customers and partners.
                  </p>
                </motion.div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {values.map((value, index) => (
                    <motion.div
                      key={value.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card border border-border rounded-3xl p-8 hover:shadow-soft-lg transition-all duration-300 group"
                    >
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-6">
                        <div className={`w-16 h-16 bg-${value.color}/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon name={value.icon} size={28} className={`text-${value.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3">
                        {value.features.map((feature, featureIndex) => (
                          <motion.div
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-center space-x-3"
                          >
                            <div className={`w-5 h-5 bg-${value.color}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                              <Icon name="Check" size={12} className={`text-${value.color}`} />
                            </div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Culture Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-3xl p-8 lg:p-12"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div>
                      <div className="flex items-center space-x-3 mb-6">
                        <Icon name="Coffee" size={32} className="text-primary" />
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          Our Culture
                        </h3>
                      </div>
                      
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          At The Gadget Hub, we've built a culture that celebrates diversity, encourages 
                          innovation, and puts people first. Our team is our greatest asset, and we invest 
                          heavily in creating an environment where everyone can thrive.
                        </p>
                        <p>
                          We believe that happy employees create exceptional customer experiences. That's 
                          why we focus on work-life balance, continuous learning, and creating opportunities 
                          for personal and professional growth.
                        </p>
                      </div>

                      <div className="mt-8 grid grid-cols-2 gap-6">
                        {[
                          { icon: 'Users', label: 'Team Members', value: '50+' },
                          { icon: 'Award', label: 'Employee Satisfaction', value: '95%' },
                          { icon: 'BookOpen', label: 'Training Hours/Year', value: '100+' },
                          { icon: 'Coffee', label: 'Coffee Consumed', value: '∞' }
                        ].map((stat, index) => (
                          <div key={index} className="text-center">
                            <Icon name={stat.icon} size={24} className="mx-auto mb-2 text-primary" />
                            <div className="font-bold text-lg text-foreground font-mono">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Visual Element */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-primary/10 to-success/10 rounded-2xl p-8">
                        <div className="text-center mb-6">
                          <Icon name="Heart" size={48} className="mx-auto mb-4 text-primary" />
                          <h4 className="text-xl font-bold text-foreground mb-2">
                            Work With Purpose
                          </h4>
                          <p className="text-muted-foreground">
                            Every day, we work towards making technology more accessible 
                            and affordable for Sri Lankan families.
                          </p>
                        </div>

                        <div className="space-y-4">
                          {[
                            'Remote-first work culture',
                            'Flexible working hours',
                            'Professional development budget',
                            'Health and wellness programs',
                            'Regular team building activities'
                          ].map((benefit, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center">
                                <Icon name="Check" size={12} className="text-success" />
                              </div>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };

        export default ValuesSection;