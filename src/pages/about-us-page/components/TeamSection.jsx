import React, { useState } from 'react';
        import { motion } from 'framer-motion';
        import Icon from '../../../components/AppIcon';

        const TeamSection = () => {
          const [selectedMember, setSelectedMember] = useState(null);

          const teamMembers = [
            {
              id: 1,
              name: 'Ashen Karunaratne',
              role: 'Founder & CEO',
              department: 'Leadership',
              bio: 'Ashen founded The Gadget Hub with a vision to revolutionize gadget shopping in Sri Lanka. With over 10 years of experience in technology and e-commerce, he leads our strategic vision and growth initiatives.',
              expertise: ['Strategic Planning', 'E-commerce', 'Technology Innovation', 'Team Leadership'],
              education: 'MBA, University of Colombo',
              image: '/api/placeholder/150/150',
              social: {
                linkedin: '#',
                twitter: '#'
              },
              quote: 'Technology should empower everyone, not just the privileged few.'
            },
            {
              id: 2,
              name: 'Sanduni Perera',
              role: 'Chief Technology Officer',
              department: 'Technology',
              bio: 'Sanduni leads our technical innovation, overseeing the development of our AI-powered price comparison system and ensuring our platform delivers the best user experience.',
              expertise: ['AI/ML Development', 'System Architecture', 'Data Analytics', 'Product Development'],
              education: 'MSc Computer Science, University of Moratuwa',
              image: '/api/placeholder/150/150',
              social: {
                linkedin: '#',
                github: '#'
              },
              quote: 'Innovation happens when technology meets genuine human needs.'
            },
            {
              id: 3,
              name: 'Rajith Fernando',
              role: 'Head of Operations',
              department: 'Operations',
              bio: 'Rajith manages our distributor network and ensures seamless operations across our platform. His expertise in supply chain management keeps our prices competitive and deliveries fast.',
              expertise: ['Supply Chain Management', 'Distributor Relations', 'Logistics', 'Process Optimization'],
              education: 'BSc Business Management, University of Sri Jayewardenepura',
              image: '/api/placeholder/150/150',
              social: {
                linkedin: '#'
              },
              quote: 'Excellence in operations creates exceptional customer experiences.'
            },
            {
              id: 4,
              name: 'Malika Wijesinghe',
              role: 'Customer Experience Manager',
              department: 'Customer Success',
              bio: 'Malika ensures every customer interaction exceeds expectations. She leads our customer support team and continuously improves our service quality based on customer feedback.',
              expertise: ['Customer Service', 'Team Management', 'Process Improvement', 'Quality Assurance'],
              education: 'BA Psychology, University of Kelaniya',
              image: '/api/placeholder/150/150',
              social: {
                linkedin: '#'
              },
              quote: 'Every customer deserves to feel valued and heard.'
            },
            {
              id: 5,
              name: 'Nuwan Jayakody',
              role: 'Marketing Director',
              department: 'Marketing',
              bio: 'Nuwan drives our brand presence and customer acquisition strategies. His creative campaigns and data-driven approach have helped us become a household name in Sri Lankan tech.',
              expertise: ['Digital Marketing', 'Brand Strategy', 'Content Creation', 'Analytics'],
              education: 'MBA Marketing, University of Colombo',
              image: '/api/placeholder/150/150',
              social: {
                linkedin: '#',
                twitter: '#'
              },
              quote: 'Great marketing tells authentic stories that resonate with people.'
            },
            {
              id: 6,
              name: 'Chamari Silva',
              role: 'Quality Assurance Lead',
              department: 'Quality',
              bio: 'Chamari ensures every product on our platform meets the highest quality standards. Her rigorous testing processes guarantee customer satisfaction and product authenticity.',
              expertise: ['Quality Control', 'Product Testing', 'Vendor Management', 'Compliance'],
              education: 'BSc Engineering, University of Peradeniya',
              image: '/api/placeholder/150/150',
              social: {
                linkedin: '#'
              },
              quote: 'Quality is not negotiable - it\'s the foundation of trust.'
            }
          ];

          const departments = [...new Set(teamMembers.map(member => member.department))];

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
                  <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <Icon name="Users" size={16} className="mr-2 text-primary" />
                    <span className="text-sm font-medium text-primary">Our Team</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                    Meet the People Behind
                    <span className="block text-primary">The Gadget Hub</span>
                  </h2>
                  
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Our diverse team of passionate professionals is dedicated to making your 
                    gadget shopping experience exceptional.
                  </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-card border border-border rounded-3xl p-6 hover:shadow-soft-lg transition-all duration-300 cursor-pointer group"
                      onClick={() => setSelectedMember(member)}
                    >
                      {/* Profile Image */}
                      <div className="relative mb-6">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center overflow-hidden">
                          <span className="text-white text-2xl font-bold">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center border-4 border-background">
                          <Icon name="Check" size={12} color="white" />
                        </div>
                      </div>

                      {/* Member Info */}
                      <div className="text-center mb-4">
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {member.role}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-muted rounded-full">
                          <span className="text-sm text-muted-foreground">{member.department}</span>
                        </div>
                      </div>

                      {/* Bio Preview */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {member.bio.substring(0, 120)}...
                      </p>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {member.expertise.slice(0, 2).map((skill, skillIndex) => (
                          <div
                            key={skillIndex}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {skill}
                          </div>
                        ))}
                        {member.expertise.length > 2 && (
                          <div className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                            +{member.expertise.length - 2} more
                          </div>
                        )}
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center space-x-3">
                        {Object.entries(member.social).map(([platform, url]) => (
                          <a
                            key={platform}
                            href={url}
                            className="w-8 h-8 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Icon 
                              name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : 'Github'} 
                              size={14} 
                            />
                          </a>
                        ))}
                      </div>

                      {/* Hover Indicator */}
                      <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="inline-flex items-center text-primary text-sm font-medium">
                          <span>Learn More</span>
                          <Icon name="ArrowRight" size={14} className="ml-2" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Team Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-primary to-primary/90 rounded-3xl p-8 lg:p-12 text-white text-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold mb-8">Our Team by Numbers</h3>
                  
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                      { icon: 'Users', label: 'Team Members', value: '50+' },
                      { icon: 'Award', label: 'Years Combined Experience', value: '200+' },
                      { icon: 'Globe', label: 'Languages Spoken', value: '6' },
                      { icon: 'Clock', label: 'Average Response Time', value: '< 1hr' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="text-center"
                      >
                        <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                          <Icon name={stat.icon} size={24} className="text-white" />
                        </div>
                        <div className="text-3xl font-bold mb-2 font-mono">{stat.value}</div>
                        <div className="text-blue-100 text-sm">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Member Detail Modal */}
                {selectedMember && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full max-w-2xl bg-card rounded-3xl shadow-soft-lg overflow-hidden"
                    >
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <h3 className="text-2xl font-bold text-foreground">Team Member</h3>
                          <button
                            onClick={() => setSelectedMember(null)}
                            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icon name="X" size={20} />
                          </button>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                          {/* Profile */}
                          <div className="text-center">
                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4">
                              <span className="text-white text-3xl font-bold">
                                {selectedMember.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-foreground mb-2">
                              {selectedMember.name}
                            </h4>
                            <p className="text-primary font-medium mb-2">
                              {selectedMember.role}
                            </p>
                            <div className="inline-flex items-center px-3 py-1 bg-muted rounded-full mb-4">
                              <span className="text-sm text-muted-foreground">{selectedMember.department}</span>
                            </div>
                            
                            {/* Social Links */}
                            <div className="flex justify-center space-x-3">
                              {Object.entries(selectedMember.social).map(([platform, url]) => (
                                <a
                                  key={platform}
                                  href={url}
                                  className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                                >
                                  <Icon 
                                    name={platform === 'linkedin' ? 'Linkedin' : platform === 'twitter' ? 'Twitter' : 'Github'} 
                                    size={16} 
                                  />
                                </a>
                              ))}
                            </div>
                          </div>

                          {/* Details */}
                          <div className="lg:col-span-2 space-y-6">
                            {/* Bio */}
                            <div>
                              <h5 className="font-semibold text-foreground mb-3">About</h5>
                              <p className="text-muted-foreground leading-relaxed">
                                {selectedMember.bio}
                              </p>
                            </div>

                            {/* Quote */}
                            <div className="bg-muted/50 rounded-xl p-4">
                              <Icon name="Quote" size={20} className="text-primary mb-2" />
                              <p className="text-foreground font-medium italic">
                                "{selectedMember.quote}"
                              </p>
                            </div>

                            {/* Education */}
                            <div>
                              <h5 className="font-semibold text-foreground mb-3">Education</h5>
                              <p className="text-muted-foreground">{selectedMember.education}</p>
                            </div>

                            {/* Expertise */}
                            <div>
                              <h5 className="font-semibold text-foreground mb-3">Expertise</h5>
                              <div className="flex flex-wrap gap-2">
                                {selectedMember.expertise.map((skill, index) => (
                                  <div
                                    key={index}
                                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                                  >
                                    {skill}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                )}
              </div>
            </section>
          );
        };

        export default TeamSection;