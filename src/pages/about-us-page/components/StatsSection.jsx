import React, { useState, useEffect } from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';

        const StatsSection = () => {
          const [isVisible, setIsVisible] = useState(false);

          const stats = [
            {
              id: 1,
              icon: 'Users',
              title: 'Happy Customers',
              value: 50000,
              suffix: '+',
              description: 'Satisfied customers across Sri Lanka who trust us for their gadget needs',
              color: 'primary'
            },
            {
              id: 2,
              icon: 'Package',
              title: 'Products Delivered',
              value: 100000,
              suffix: '+',
              description: 'Authentic products delivered with full warranty and customer satisfaction',
              color: 'success'
            },
            {
              id: 3,
              icon: 'Store',
              title: 'Distributor Partners',
              value: 100,
              suffix: '+',
              description: 'Authorized distributors and retailers connected to our platform',
              color: 'accent'
            },
            {
              id: 4,
              icon: 'TrendingDown',
              title: 'Customer Savings',
              value: 500,
              suffix: 'M+',
              prefix: 'Rs. ',
              description: 'Total amount saved by customers through intelligent price comparison',
              color: 'secondary'
            },
            {
              id: 5,
              icon: 'MapPin',
              title: 'Cities Covered',
              value: 25,
              suffix: '',
              description: 'Major cities and towns across Sri Lanka with delivery coverage',
              color: 'primary'
            },
            {
              id: 6,
              icon: 'Star',
              title: 'Customer Rating',
              value: 4.9,
              suffix: '/5',
              description: 'Average customer satisfaction rating based on thousands of reviews',
              color: 'warning'
            },
            {
              id: 7,
              icon: 'Clock',
              title: 'Response Time',
              value: 15,
              suffix: ' min',
              description: 'Average customer support response time for all inquiries',
              color: 'success'
            },
            {
              id: 8,
              icon: 'Shield',
              title: 'Uptime',
              value: 99.9,
              suffix: '%',
              description: 'Platform reliability and availability for uninterrupted shopping experience',
              color: 'primary'
            }
          ];

          const CountUpAnimation = ({ value, duration = 2 }) => {
            const [currentValue, setCurrentValue] = useState(0);

            useEffect(() => {
              if (!isVisible) return;

              let startValue = 0;
              const increment = value / (duration * 60); // 60 FPS
              const timer = setInterval(() => {
                startValue += increment;
                if (startValue >= value) {
                  setCurrentValue(value);
                  clearInterval(timer);
                } else {
                  setCurrentValue(Math.floor(startValue));
                }
              }, 1000 / 60);

              return () => clearInterval(timer);
            }, [isVisible, value, duration]);

            return currentValue;
          };

          return (
            <section className="py-16 lg:py-24 bg-muted/20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => setIsVisible(true)}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <Icon name="BarChart3" size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Our Impact</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Numbers That Tell
                    <span className="block text-primary">Our Success Story</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    These statistics represent real impact - every number reflects our commitment 
                    to making technology accessible and affordable for Sri Lankan consumers.
                  </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card border border-border rounded-3xl p-6 text-center hover:shadow-soft-lg transition-all duration-300 group"
                    >
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-${stat.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon name={stat.icon} size={28} className={`text-${stat.color}`} />
                      </div>

                      {/* Value */}
                      <div className="mb-4">
                        <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground font-mono">
                          {stat.prefix}
                          <CountUpAnimation value={stat.value} />
                          {stat.suffix}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mt-2">
                          {stat.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {stat.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Achievement Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-white"
                >
                  <div className="text-center mb-12">
                    <Icon name="Trophy" size={48} className="mx-auto mb-6 text-white/90" />
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                      Key Achievements in 2024
                    </h3>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                      This year has been remarkable for growth, innovation, and customer satisfaction.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      {
                        quarter: 'Q1',
                        achievement: 'Reached 40K Customers',
                        detail: '300% growth from previous year',
                        icon: 'Users'
                      },
                      {
                        quarter: 'Q2',
                        achievement: 'AI System Launch',
                        detail: 'Advanced price comparison technology',
                        icon: 'Brain'
                      },
                      {
                        quarter: 'Q3',
                        achievement: 'Island-wide Coverage',
                        detail: 'Delivery to all 25 districts',
                        icon: 'MapPin'
                      },
                      {
                        quarter: 'Q4',
                        achievement: '50K Milestone',
                        detail: 'Customer satisfaction at 95%+',
                        icon: 'Award'
                      }
                    ].map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon name={achievement.icon} size={24} className="text-white" />
                        </div>
                        <div className="text-lg font-bold mb-2">{achievement.quarter}</div>
                        <div className="font-semibold mb-2">{achievement.achievement}</div>
                        <div className="text-blue-100 text-sm">{achievement.detail}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-12 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-6 py-3">
                      <Icon name="TrendingUp" size={20} className="text-white" />
                      <span className="font-medium">Growing at 25% month-over-month</span>
                    </div>
                  </div>
                </motion.div>

                {/* Recognition Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="mt-16 bg-card border border-border rounded-3xl p-8 lg:p-12"
                >
                  <div className="text-center mb-12">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      Industry Recognition
                    </h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Our commitment to excellence has been recognized by industry leaders and customers alike.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                      {
                        award: 'Best E-commerce Platform 2024',
                        organization: 'Sri Lanka Digital Awards',
                        description: 'Recognized for innovation in price comparison technology'
                      },
                      {
                        award: 'Customer Choice Award',
                        organization: 'LK Business Magazine',
                        description: 'Voted by 10,000+ customers for exceptional service'
                      },
                      {
                        award: 'Tech Innovation Excellence',
                        organization: 'Ceylon Chamber of Commerce',
                        description: 'For transforming the gadget shopping experience'
                      }
                    ].map((recognition, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center p-6 bg-muted/30 rounded-2xl"
                      >
                        <Icon name="Award" size={32} className="mx-auto mb-4 text-accent" />
                        <h4 className="font-bold text-foreground mb-2">{recognition.award}</h4>
                        <p className="text-primary font-medium mb-3">{recognition.organization}</p>
                        <p className="text-sm text-muted-foreground">{recognition.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };

        export default StatsSection;