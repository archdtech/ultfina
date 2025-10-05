import { motion } from 'framer-motion';
import { ArrowRight, Rocket, Users, Target, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const NordicScaleProgram = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-5xl font-bold mb-6">
                <span className="text-[#FF3D22]">Nordic Scale Program</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Accelerating Tech Growth in the Nordic Region
              </p>
              <p className="text-gray-400 mb-8">
                The Nordic Scale Program is designed to help international tech companies expand and scale successfully within the Nordic region—one of the world's most innovative and digitally advanced markets. By leveraging the region's thriving tech ecosystems, vibrant startup culture, and strong government support, the program offers tailored strategies for companies looking to enter or grow in this dynamic market.
              </p>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Nordic markets"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Program Objectives */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Program Objectives</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach is designed to help you achieve tangible results in the Nordic market.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="w-12 h-12 text-[#FF3D22]" />,
                title: "Enable Rapid Market Penetration",
                description: "Help tech companies quickly establish a presence in the Nordic region through tailored entry strategies."
              },
              {
                icon: <Users className="w-12 h-12 text-[#FF3D22]" />,
                title: "Foster Innovation & Collaboration",
                description: "Leverage the Nordic innovation hubs to promote strategic partnerships, co-development opportunities, and ecosystem integration."
              },
              {
                icon: <Rocket className="w-12 h-12 text-[#FF3D22]" />,
                title: "Create Scalable Growth Opportunities",
                description: "Develop a roadmap for sustainable growth by aligning with Nordic market demands, consumer behaviors, and regulatory standards."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white border-2 border-[#FF3D22] rounded-lg hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Components */}
      <motion.section 
        id="components"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Key Program Components</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive approach to help you succeed in the Nordic market
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                number: "01",
                title: "Market Entry & Expansion Strategy",
                description: "Build a comprehensive market entry strategy tailored to the Nordic region, focusing on product-market fit and scaling within the local ecosystem.",
                areas: [
                  "Market Research: Deep dive into consumer trends, competitor landscape, and potential demand.",
                  "Customer Segmentation: Identify target industries and segments that align with your product or service offering.",
                  "Market Adaptation: Customize your product or service for Nordic consumer behaviors and regional preferences."
                ],
                outcome: "A well-defined plan to accelerate market entry and growth in the Nordic region, supported by localized insights."
              },
              {
                number: "02",
                title: "Nordic Business Networking & Partnership Building",
                description: "Foster valuable relationships with Nordic businesses, investors, and key stakeholders through curated networking events and business matchmaking.",
                areas: [
                  "Investor Relations: Meet potential investors and funding bodies interested in scaling international tech businesses.",
                  "Corporate Partnerships: Build strategic alliances with Nordic companies that can help with co-development, distribution, or local market entry.",
                  "Government & Industry Bodies: Engage with Nordic government initiatives and innovation hubs that support international businesses."
                ],
                outcome: "Establish a network of valuable business contacts, partnerships, and investment opportunities in the Nordic market."
              },
              {
                number: "03",
                title: "Exploring Nordic Innovation Hubs & Collaborative Opportunities",
                description: "Immerse your company in the Nordic innovation ecosystem by connecting with leading tech hubs, innovation centers, and top industry players.",
                areas: [
                  "Leading Tech Hubs: Engage with vibrant tech ecosystems in key cities like Stockholm, Helsinki, Oslo, and Copenhagen.",
                  "Innovation Centers: Explore world-class R&D labs, incubators, and accelerators where groundbreaking technologies are developed.",
                  "Corporate Collaboration: Meet with industry leaders, large corporates, and local innovators to discover opportunities for joint ventures.",
                  "Regional Events: Participate in startup conferences, pitch events, and hackathons that promote cross-industry collaboration."
                ],
                outcome: "Gain invaluable insights into the Nordic tech landscape, form strategic partnerships, and co-develop solutions with local innovators."
              },
              {
                number: "04",
                title: "Expert-Led Masterclasses & Regulatory Guidance",
                description: "Equip your team with the knowledge to navigate the regulatory and operational landscape of the Nordic region.",
                areas: [
                  "Regulatory Compliance: Understand how to comply with GDPR, local data privacy laws, and sustainability regulations.",
                  "Sustainability Best Practices: Learn about the Nordic emphasis on sustainability and how to integrate sustainable practices into your tech business.",
                  "Cultural & Market Norms: Gain insights into Nordic business etiquette, communication styles, and customer expectations."
                ],
                outcome: "A comprehensive understanding of the legal and operational aspects of doing business in the Nordic region, ensuring smooth market entry and long-term compliance."
              },
              {
                number: "05",
                title: "Talent Acquisition & Local Hiring Support",
                description: "Help scaleups attract and retain top Nordic talent to support their business expansion.",
                areas: [
                  "Talent Pool: Identify key cities with a high concentration of tech talent, such as Stockholm, Helsinki, and Copenhagen.",
                  "Hiring Support: Navigate local labor laws, recruitment strategies, and talent retention practices.",
                  "Cultural Fit: Ensure new hires align with your company's values and culture while adapting to the Nordic work environment."
                ],
                outcome: "Access to a diverse and skilled talent pool that can drive your business growth in the region."
              },
              {
                number: "06",
                title: "Access to Funding & Grants",
                description: "Help tech companies secure funding and grants from Nordic government programs, private investors, and venture capital firms.",
                areas: [
                  "Government Grants: Leverage Nordic government programs that offer financial incentives and grants to support international companies.",
                  "Private Investment: Connect with Nordic VCs and angel investors who focus on high-growth tech startups.",
                  "Pitching Support: Receive guidance on how to effectively pitch to investors and secure the funding you need to scale."
                ],
                outcome: "Increased access to financial resources that can accelerate your business growth in the Nordic market."
              }
            ].map((component, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div>
                  <div className="text-5xl font-bold text-[#FF3D22]">{component.number}</div>
                  <h3 className="text-2xl font-bold mt-4">{component.title}</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-lg text-gray-700 mb-6">{component.description}</p>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold mb-4 text-[#FF3D22]">Focus Areas:</h4>
                    <ul className="space-y-3 mb-6">
                      {component.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-[#FF3D22] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{area}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-200 pt-4">
                      <h4 className="font-bold mb-2 text-[#FF3D22]">Outcome:</h4>
                      <p className="text-gray-700">{component.outcome}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Program Timeline */}
      <motion.section 
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Program Timeline and Phases</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A structured 12-week journey to Nordic market success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Discovery & Strategic Planning",
                timeline: "Weeks 1-4",
                activities: [
                  "Conduct in-depth market research and analysis",
                  "Develop a tailored market entry strategy",
                  "Start building initial business networks and partnerships"
                ]
              },
              {
                phase: "Phase 2",
                title: "Market Immersion & Networking",
                timeline: "Weeks 5-8",
                activities: [
                  "Attend Nordic Immersion Tours and meet key industry stakeholders",
                  "Participate in local events and conferences",
                  "Refine strategy based on insights gained during immersion"
                ]
              },
              {
                phase: "Phase 3",
                title: "Masterclasses & Legal Guidance",
                timeline: "Weeks 9-12",
                activities: [
                  "Attend expert-led workshops on regulatory compliance, data privacy, and sustainability",
                  "Establish talent acquisition plans and recruitment strategies",
                  "Finalize business partnerships and secure funding sources"
                ]
              },
              {
                phase: "Phase 4",
                title: "Scaling & Growth",
                timeline: "Ongoing after Week 12",
                activities: [
                  "Begin market operations and expand team",
                  "Continue developing strategic partnerships and seeking growth funding",
                  "Track performance and optimize strategies for long-term sustainability"
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#FF3D22] rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#FF3D22] font-bold mb-2">{phase.phase}</div>
                <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                <div className="text-sm text-gray-400 mb-4">{phase.timeline}</div>
                <ul className="space-y-3">
                  {phase.activities.map((activity, actIndex) => (
                    <li key={actIndex} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-[#FF3D22] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{activity}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Choose */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose the Nordic Scale Program?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Innovation Hub Access",
                    description: "The Nordic region is known for its strong focus on technology, innovation, and sustainability, making it an ideal place to grow and scale."
                  },
                  {
                    title: "Government & Industry Support",
                    description: "The program provides direct access to government-backed initiatives and industry bodies designed to help international businesses succeed."
                  },
                  {
                    title: "Tailored Growth Strategy",
                    description: "The program offers a comprehensive and tailored approach to market entry, ensuring that your business can scale effectively and sustainably within the Nordic region."
                  }
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#FF3D22] mt-2.5" />
                    <div>
                      <h3 className="font-bold mb-1">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Nordic innovation"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Program Benefits */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Program Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tangible outcomes that drive your business forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Access to Nordic Ecosystems",
                description: "Connect with key players in one of the most digitally advanced regions in the world."
              },
              {
                title: "Accelerated Market Entry",
                description: "Shorten the time to establish a successful presence in the Nordic market through targeted strategy, networking, and support."
              },
              {
                title: "Sustainable Growth",
                description: "Gain a deep understanding of Nordic regulatory frameworks, talent acquisition, and funding opportunities, ensuring long-term success."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4 text-[#FF3D22]">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        id="apply"
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="https://ultiro.se/apply-partner" className="bg-[#FF3D22] text-white py-3 px-8 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </a>
            <Link to="/programs" className="border border-white text-white py-3 px-8 rounded-full inline-flex items-center hover:bg-white/10 transition-colors">
              Back to Programs
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default NordicScaleProgram;
