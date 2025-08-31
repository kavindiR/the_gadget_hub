import React, { useState } from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';

        const TestimonialsSection = () => {
          const [currentTestimonial, setCurrentTestimonial] = useState(0);

          const testimonials = [
            {
              id: 1,
              name: 'Kasun Perera',
              role: 'Software Engineer',
              location: 'Colombo',
              image: '/api/placeholder/60/60',
              rating: 5,
              testimonial: 'I saved Rs. 15,000 on my MacBook Pro purchase! The price comparison was instant and the delivery was super fast. Highly recommend The Gadget Hub to anyone looking for genuine gadgets at the best prices.',
              product: 'MacBook Pro M3',
              savings: 15000,
              verified: true
            },
            {
              id: 2,
              name: 'Nimali Fernando',
              role: 'Marketing Manager',
              location: 'Kandy',
              image: '/api/placeholder/60/60',
              rating: 5,
              testimonial: 'The authenticity guarantee gave me complete peace of mind. I got my iPhone 15 with full warranty at the lowest price in the market. The customer service is exceptional too!',
              product: 'iPhone 15 Pro',
              savings: 12000,
              verified: true
            },
            {
              id: 3,
              name: 'Rohan Silva',
              role: 'Business Owner',
              location: 'Galle',
              image: '/api/placeholder/60/60',
              rating: 5,
              testimonial: 'As a business owner, I need reliable tech equipment. The Gadget Hub not only found me the best prices but also ensured quick delivery to Galle. Their service is unmatched!',
              product: 'Samsung Galaxy Tab S9',
              savings: 8500,
              verified: true
            },
            {
              id: 4,
              name: 'Priya Rajapaksa',
              role: 'University Student',
              location: 'Moratuwa',
              image: '/api/placeholder/60/60',
              rating: 5,
              testimonial: 'Being a student, budget is always tight. The Gadget Hub helped me find an amazing deal on a gaming laptop with student discounts. Saved me months of saving!',
              product: 'ASUS ROG Laptop',
              savings: 25000,
              verified: true
            }
          ];

          const nextTestimonial = () => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
          };

          const prevTestimonial = () => {
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    What Our Customers
                    <span className="block text-primary">Say About Us</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Join thousands of satisfied customers who have saved money and time 
                    using our intelligent price comparison system.
                  </p>
                </motion.div>

                {/* Testimonials Carousel */}
                <div className="relative max-w-4xl mx-auto">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-soft-lg"
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon name="Quote" size={24} className="text-primary" />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, index) => (
                        <Icon key={index} name="Star" size={20} className="text-warning fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl lg:text-2xl text-foreground text-center mb-8 leading-relaxed font-medium">
                      "{testimonials[currentTestimonial].testimonial}"
                    </blockquote>

                    {/* Customer Info */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-muted rounded-full overflow-hidden">
                          <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <span className="text-white text-xl font-bold">
                              {testimonials[currentTestimonial].name.charAt(0)}
                            </span>
                          </div>
                        </div>
                        <div className="text-center sm:text-left">
                          <div className="flex items-center space-x-2">
                            <h4 className="font-bold text-foreground">
                              {testimonials[currentTestimonial].name}
                            </h4>
                            {testimonials[currentTestimonial].verified && (
                              <div className="w-5 h-5 bg-success rounded-full flex items-center justify-center">
                                <Icon name="Check" size={12} color="white" />
                              </div>
                            )}
                          </div>
                          <p className="text-muted-foreground">
                            {testimonials[currentTestimonial].role}
                          </p>
                          <div className="flex items-center justify-center sm:justify-start space-x-1 text-sm text-muted-foreground">
                            <Icon name="MapPin" size={12} />
                            <span>{testimonials[currentTestimonial].location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Purchase Info */}
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                        <div className="px-4 py-2 bg-muted rounded-full">
                          <span className="text-sm font-medium text-muted-foreground">
                            Purchased: {testimonials[currentTestimonial].product}
                          </span>
                        </div>
                        <div className="px-4 py-2 bg-success/10 rounded-full">
                          <span className="text-sm font-bold text-success">
                            Saved Rs. {testimonials[currentTestimonial].savings.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={prevTestimonial}
                        className="w-12 h-12 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <Icon name="ChevronLeft" size={20} />
                      </button>

                      {/* Dots */}
                      <div className="flex space-x-2">
                        {testimonials.map((_, index) => (
                          <button
                            key={index}
                            onClick={() => setCurrentTestimonial(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                              index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>

                      <button
                        onClick={nextTestimonial}
                        className="w-12 h-12 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <Icon name="ChevronRight" size={20} />
                      </button>
                    </div>
                  </motion.div>
                </div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8"
                >
                  {[
                    { label: 'Happy Customers', value: '50,000+', icon: 'Users' },
                    { label: 'Total Savings', value: 'Rs. 500M+', icon: 'TrendingDown' },
                    { label: 'Products Sold', value: '100,000+', icon: 'Package' },
                    { label: 'Customer Rating', value: '4.9/5', icon: 'Star' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon name={stat.icon} size={24} className="text-primary" />
                      </div>
                      <div className="text-2xl sm:text-3xl font-bold text-foreground mb-2 font-mono">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground font-medium text-sm">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </section>
          );
        };

        export default TestimonialsSection;