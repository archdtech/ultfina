
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Rocket, Users, BookOpen, Code, ChevronRight, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const TradePromotionProgram = () => {
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
                <span className="text-[#FF3D22]">Trade Promotion Program</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Unlocking Global Expansion Opportunities for Tech Companies
              </p>
              <p className="text-gray-400 mb-8">
                The Trade Promotion Program is designed to facilitate global partnerships and accelerate market expansion for IT services and tech scaleups. By collaborating with governments, embassies, and trade promotion agencies, we create targeted programs that unlock new opportunities for businesses to scale and innovate across international markets.
              </p>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Global trade collaboration"
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
              Our trade promotion initiatives are designed to create tangible business outcomes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-12 h-12 text-[#FF3D22]" />,
                title: "Facilitate Global Partnerships",
                description: "Build strong, long-term relationships with international business partners and government entities to support market growth."
              },
              {
                icon: <Target className="w-12 h-12 text-[#FF3D22]" />,
                title: "Drive Market Access",
                description: "Develop customized market entry strategies that enable tech companies to successfully expand into new, high-growth regions."
              },
              {
                icon: <Users className="w-12 h-12 text-[#FF3D22]" />,
                title: "Harness Local Expertise",
                description: "Leverage the unique strengths of local markets to speed up adoption and foster innovation."
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
            <h2 className="text-4xl font-bold mb-4">Core Components of the Trade Promotion Program</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of services to accelerate your global expansion
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                icon: <Rocket className="w-16 h-16 text-[#FF3D22]" />,
                title: "Market Entry Bootcamps",
                objective: "Validate your product-market fit in new global markets by tackling region-specific challenges and seizing local growth opportunities.",
                areas: [
                  "Conduct in-depth market research, localize your product offering, develop customer acquisition strategies, and align with regional cultures.",
                  "Engaging workshops, interactive sessions with experts, and networking opportunities to connect with local industry leaders.",
                  "Develop a clear and actionable roadmap to successfully enter and scale in international markets."
                ]
              },
              {
                icon: <Globe className="w-16 h-16 text-[#FF3D22]" />,
                title: "Nordic Immersion Tours",
                objective: "Experience leading innovation hubs and tech ecosystems in the Nordic region to foster collaboration and knowledge exchange.",
                areas: [
                  "Curated visits to leading tech centers in Sweden, Denmark, Finland, and Norway, featuring high-level interactions with investors, entrepreneurs, and industry pioneers.",
                  "Networking with successful startups, exploring groundbreaking R&D initiatives, and learning from top-tier business leaders.",
                  "Gain valuable insights, build strategic relationships, and identify potential business partners for growth."
                ]
              },
              {
                icon: <BookOpen className="w-16 h-16 text-[#FF3D22]" />,
                title: "Expert-Led Masterclasses",
                objective: "Equip scaleups with the knowledge to navigate complex regulations and ensure compliance with standards like GDPR, sustainability, and other legal frameworks.",
                areas: [
                  "Understanding data protection laws (GDPR), implementing sustainable technology solutions, and mastering regulatory compliance across various international markets.",
                  "In-depth sessions with seasoned experts, real-world case studies, and practical advice tailored to the unique challenges of international business.",
                  "Build a solid understanding of legal frameworks, enabling smooth market entry while ensuring compliance with local regulations."
                ]
              },
              {
                icon: <Code className="w-16 h-16 text-[#FF3D22]" />,
                title: "Collaborative Hackathons",
                objective: "Solve real-world industry challenges by collaborating with local talent to co-create innovative solutions that can scale globally.",
                areas: [
                  "Address tech challenges ranging from AI to sustainability, leveraging local expertise to create solutions that resonate globally.",
                  "Teams composed of both local and international participants, working together to develop prototypes and innovative tech solutions.",
                  "Prototype development, insights into potential product-market fit, and the formation of new strategic partnerships."
                ]
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
                <div className="flex flex-col items-center lg:items-start">
                  <div className="mb-4">{component.icon}</div>
                  <h3 className="text-2xl font-bold">{component.title}</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-lg text-gray-700 mb-6 font-semibold">{component.objective}</p>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold mb-4 text-[#FF3D22]">What to Expect:</h4>
                    <ul className="space-y-4">
                      {component.areas.map((area, areaIndex) => (
                        <li key={areaIndex} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-[#FF3D22] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why This Program */}
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
            <h2 className="text-4xl font-bold mb-4">Why This Program Stands Out</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A unique approach to international market expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tailored for Tech Scaleups",
                description: "This program offers a structured approach to help businesses rapidly expand into new markets while minimizing risks."
              },
              {
                title: "Strategic Government & Industry Collaborations",
                description: "By engaging with local trade bodies, government agencies, and innovation hubs, we unlock new growth avenues."
              },
              {
                title: "Hands-On Approach",
                description: "Gain practical, real-time exposure to industry challenges, global best practices, and cutting-edge innovation, ensuring immediate impact and value."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#FF3D22] rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Success Stories */}
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
            <h2 className="text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from our Trade Promotion Program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                company: "East African Fintech Consortium",
                result: "15 East African fintechs secured partnerships with Nordic banks and investors through our program.",
                quote: "Ultiro's program opened doors we didn't even know existed in the Nordic region. The connections we made have been transformative for our business.",
                person: "CEO, Leading Kenyan Fintech",
                image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              },
              {
                company: "Nordic SaaS Expansion",
                result: "A Swedish SaaS company successfully entered three Southeast Asian markets in just 6 months.",
                quote: "The market insights and local partnerships we gained through the Trade Promotion Program accelerated our expansion by at least a year.",
                person: "COO, Swedish Enterprise Software Company",
                image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-[#FF3D22] rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={story.image}
                    alt={story.company}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{story.company}</h3>
                  <p className="text-gray-700 mb-4">{story.result}</p>
                  <blockquote className="italic text-gray-600 border-l-4 border-[#FF3D22] pl-4 mb-4">
                    "{story.quote}"
                  </blockquote>
                  <p className="text-[#FF3D22] font-semibold">— {story.person}</p>
                </div>
              </motion.div>
            ))}
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
              Tangible outcomes that drive your global expansion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Global Network Expansion",
                description: "Establish a robust network of international partners, investors, and influencers."
              },
              {
                title: "Faster Product-Market Validation",
                description: "Accelerate the process of validating your product in diverse markets by working closely with local experts and gaining direct feedback."
              },
              {
                title: "Informed Market Expansion",
                description: "Confidently enter new regions with a comprehensive understanding of market dynamics, compliance, and growth strategies."
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

export default TradePromotionProgram;
