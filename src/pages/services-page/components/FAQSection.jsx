import React, { useState } from 'react';
        import { motion, AnimatePresence } from 'framer-motion';
        import Icon from '../../../components/AppIcon';
        import Button from '../../../components/ui/Button';

        const FAQSection = () => {
          const [openFAQ, setOpenFAQ] = useState(0);

          const faqs = [
            {
              id: 1,
              question: 'How does your price comparison system work?',
              answer: 'Our AI-powered system automatically scans 100+ authorized distributors in real-time to find the best prices for any product. We use advanced algorithms to compare prices, validate seller authenticity, and ensure you get genuine products at the lowest possible cost. The entire process takes just seconds and is completely automated.',
              category: 'Price Comparison'
            },
            {
              id: 2,
              question: 'Are all products guaranteed to be authentic?',
              answer: 'Yes, absolutely! We only work with authorized distributors and official retailers. Every product comes with full manufacturer warranty and authenticity guarantee. We have a strict vetting process for all our distributor partners to ensure 100% authentic products. If you receive any non-authentic product, we offer full refund and replacement.',
              category: 'Quality Assurance'
            },
            {
              id: 3,
              question: 'What if I find a lower price elsewhere after purchase?',
              answer: 'We offer a price match guarantee! If you find a lower price from an authorized seller within 24 hours of your purchase, we will refund the difference. Simply contact our customer service team with proof of the lower price, and we will process your refund immediately. This ensures you always get the best deal.',
              category: 'Price Guarantee'
            },
            {
              id: 4,
              question: 'How fast is the delivery and what areas do you cover?',
              answer: 'We provide island-wide delivery across Sri Lanka. Colombo and major cities receive next-day delivery, while other areas typically receive orders within 2-3 business days. All shipments include real-time tracking, insurance coverage, and contactless delivery options. Express same-day delivery is available in Colombo for urgent orders.',
              category: 'Delivery'
            },
            {
              id: 5,
              question: 'What payment methods do you accept?',
              answer: 'We accept all major payment methods including credit/debit cards (Visa, Mastercard), online banking, digital wallets (PayHere, Frimi), and cash on delivery. All online payments are secured with 256-bit SSL encryption. For high-value purchases, we also offer installment plans through our banking partners.',
              category: 'Payment'
            },
            {
              id: 6,
              question: 'Can I return or exchange products?',
              answer: 'Yes, we offer a 7-day return policy for unopened products in original packaging. Exchanges are available for 14 days for defective items. Simply contact our support team to initiate a return. We cover return shipping costs for defective products, and refunds are processed within 3-5 business days after we receive the returned item.',
              category: 'Returns'
            },
            {
              id: 7,
              question: 'Do you offer warranty support?',
              answer: 'All products come with full manufacturer warranty. We act as an authorized service center liaison and help facilitate warranty claims. Our support team assists with warranty registration, claim processing, and coordinating repairs or replacements. Extended warranty options are also available for most products at competitive rates.',
              category: 'Warranty'
            },
            {
              id: 8,
              question: 'How do you ensure the best prices?',
              answer: 'Our system continuously monitors prices from 100+ distributors 24/7. We have partnerships with authorized importers, official retailers, and certified resellers. Our AI algorithms factor in discounts, promotions, bulk pricing, and seasonal offers to find the absolute best deals. We update prices every few minutes to ensure accuracy.',
              category: 'Pricing'
            }
          ];

          const categories = [...new Set(faqs.map(faq => faq.category))];

          const toggleFAQ = (index) => {
            setOpenFAQ(openFAQ === index ? -1 : index);
          };

          return (
            <section className="py-16 lg:py-24">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <Icon name="HelpCircle" size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Frequently Asked Questions</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Got Questions?
                    <span className="block text-primary">We've Got Answers</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Find answers to the most common questions about our services, 
                    pricing, delivery, and policies.
                  </p>
                </motion.div>

                {/* FAQ Categories */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap justify-center gap-2 mb-12"
                >
                  {categories.map((category, index) => (
                    <div
                      key={index}
                      className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                    >
                      {category}
                    </div>
                  ))}
                </motion.div>

                {/* FAQ List */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {faqs.map((faq, index) => (
                    <div
                      key={faq.id}
                      className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors duration-300"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                              {faq.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {faq.question}
                          </h3>
                        </div>
                        <div className={`ml-4 transform transition-transform duration-300 ${
                          openFAQ === index ? 'rotate-180' : ''
                        }`}>
                          <Icon name="ChevronDown" size={20} className="text-muted-foreground" />
                        </div>
                      </button>

                      <AnimatePresence>
                        {openFAQ === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 border-t border-border">
                              <p className="text-muted-foreground leading-relaxed pt-4">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>

                {/* Contact CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-center text-white"
                >
                  <Icon name="MessageCircle" size={48} className="mx-auto mb-6 text-white/90" />
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                    Still Have Questions?
                  </h3>
                  
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                    Our customer support team is available 24/7 to help you with any questions 
                    or concerns about our services.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      variant="secondary"
                      size="lg"
                      iconName="MessageCircle"
                      iconPosition="left"
                      className="bg-white text-primary hover:bg-gray-100"
                    >
                      Live Chat Support
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      iconName="Mail"
                      iconPosition="left"
                      className="border-white text-white hover:bg-white hover:text-primary"
                    >
                      Email Us
                    </Button>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-100">
                    <div className="flex items-center space-x-2">
                      <Icon name="Clock" size={16} />
                      <span>24/7 Support</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Zap" size={16} />
                      <span>Instant Response</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon name="Users" size={16} />
                      <span>Expert Team</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>
          );
        };

        export default FAQSection;