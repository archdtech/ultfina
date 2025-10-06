import { motion } from 'framer-motion';
import { ArrowRight, Building2, Users, ChevronRight, LineChart, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalCompetenceProgram = () => {
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
                <span className="text-[#FF3D22]">Global Competence Program</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Establishing High-Impact Global Capability Centers (GCCs)
              </p>
              <p className="text-gray-400 mb-8">
                Our program is designed to help international tech companies build Global Capability Centers that not only reduce operational costs but accelerate business transformation. By aligning with long-term organizational goals and leveraging global talent, technology, and innovation, your GCC can become a driving force for competitive advantage.
              </p>

            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Global team collaboration"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Strategic Objective */}
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
            <h2 className="text-4xl font-bold mb-4">Strategic Objective: From Cost Centers to Strategic Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto italic">
              "Strategy without tactics is the slowest route to victory. Tactics without strategy is the noise before defeat." — Sun Tzu
            </p>
          </motion.div>

          <div className="mb-12">
            <p className="text-lg text-gray-700 mb-6">
              In today's competitive landscape, establishing a Global Capability Center (GCC) goes far beyond mere cost savings. The true potential lies in leveraging the GCC as a strategic asset—a center for innovation, market intelligence, and global scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <LineChart className="w-12 h-12 text-[#FF3D22]" />,
                title: "Create Strategic Value",
                description: "Position the GCC as a key enabler of strategic goals, driving innovation, market expansion, and efficiency at the global level."
              },
              {
                icon: <Users className="w-12 h-12 text-[#FF3D22]" />,
                title: "Foster Global Talent Networks",
                description: "Build a robust talent pipeline across diverse regions, leveraging local strengths to fuel product innovation and technology advancement."
              },
              {
                icon: <Building2 className="w-12 h-12 text-[#FF3D22]" />,
                title: "Maximize ROI",
                description: "Move beyond cost reduction to focus on long-term value creation, from increased operational efficiency to new revenue streams and market insights."
              },
              {
                icon: <Code className="w-12 h-12 text-[#FF3D22]" />,
                title: "Enable Digital Transformation",
                description: "Equip the GCC to not only support core functions but also drive digital transformation through advanced technologies like AI, data analytics, and automation."
              }
            ].map((objective, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white border-2 border-[#FF3D22] rounded-lg hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-6">{objective.icon}</div>
                <h3 className="text-xl font-bold mb-4">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Phased Approach */}
      <motion.section 
        id="approach"
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
            <h2 className="text-4xl font-bold mb-4">Phased Approach to GCC Establishment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured methodology to build a successful Global Capability Center
            </p>
          </motion.div>

          <div className="space-y-16">
            {[
              {
                phase: "Phase 1",
                title: "Strategic Vision & Planning",
                quote: "In preparing for battle, I have always found that plans are useless, but planning is indispensable. — Dwight D. Eisenhower",
                elements: [
                  "Define Strategic Intent: Is your GCC a center of innovation, operational scale, or digital transformation?",
                  "Secure Executive Sponsorship: CXO buy-in for 3–5 years is critical for sustained value realization.",
                  "Evaluate Delivery Models: Captive vs. BOT vs. partner-led—based on IP control, speed, and capital outlay.",
                  "Align with Future-State Architecture: Consider your global operating model and how the GCC integrates."
                ]
              },
              {
                phase: "Phase 2",
                title: "Legal & Regulatory Foundation",
                quote: "The best way to predict the future is to create it. — Abraham Lincoln",
                elements: [
                  "Entity & Structure Setup: Choose the legal framework optimizing for ROI and regulatory compliance.",
                  "Compliance Strategy: Build around Ministry of Corporate Affairs (or regional equivalent), IP, and labor laws.",
                  "Cost Awareness: Account for legal fees, ongoing audits, and non-compliance penalties in TCO."
                ]
              },
              {
                phase: "Phase 3",
                title: "Location Strategy",
                quote: "Location is not just geography—it's a multiplier for innovation, talent, and brand equity.",
                elements: [
                  "City Selection Criteria: Talent maturity and retention rates, proximity to universities and startup ecosystems, political stability.",
                  "Facility Planning: Start lean with scalable options like co-working or managed offices.",
                  "Partner with local institutions to build early visibility."
                ]
              },
              {
                phase: "Phase 4",
                title: "Talent Acquisition & Culture Building",
                quote: "The strength of the team is each individual member. The strength of each member is the team. — Phil Jackson",
                elements: [
                  "Strategic Recruitment: Target leadership-first hiring; blend senior local talent with global alignment.",
                  "Retention Strategy: Move beyond salaries—offer purpose, learning, and internal mobility.",
                  "Cost-Value Thinking: Weigh upfront hiring and training costs against long-term productivity and innovation output."
                ]
              },
              {
                phase: "Phase 5",
                title: "Infrastructure & Technology Enablement",
                quote: "The only way to do great work is to love what you do. — Steve Jobs",
                elements: [
                  "IT & Cybersecurity Backbone: Cloud-native, scalable, compliant with data protection norms (e.g., GDPR, India's DPDP Act).",
                  "Connectivity: High-speed, resilient communication infrastructure for seamless collaboration with HQ.",
                  "Use the GCC as a Digital Twin of the parent organization, not a siloed back office."
                ]
              },
              {
                phase: "Phase 6",
                title: "Innovation Engine & Strategic Edge",
                quote: "Innovation distinguishes between a leader and a follower. — Steve Jobs",
                elements: [
                  "R&D and Product Labs: Embed experimentation, prototyping, and design thinking from day one.",
                  "AI & Data Analytics: Leverage local data talent to create predictive, intelligent, and scalable insights.",
                  "Avoid Lip Service: Innovation should be goal-oriented, measurable, and cross-functional—not a side project."
                ]
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div>
                  <div className="text-[#FF3D22] font-bold">{phase.phase}</div>
                  <h3 className="text-2xl font-bold mt-2">{phase.title}</h3>
                </div>
                <div className="lg:col-span-3">
                  <p className="text-gray-700 italic mb-6">{phase.quote}</p>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul className="space-y-3">
                      {phase.elements.map((element, elemIndex) => (
                        <li key={elemIndex} className="flex items-start">
                          <ChevronRight className="w-5 h-5 text-[#FF3D22] mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{element}</span>
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

      {/* Regional Advantages */}
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
            <h2 className="text-4xl font-bold mb-4">Regional Advantages</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strategic locations for your Global Capability Center
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                region: "South Asia",
                examples: "India, Bangladesh, Sri Lanka",
                advantages: [
                  "World's largest tech and AI-ready talent pool",
                  "Top-5 global startup ecosystem",
                  "Strong government and NASSCOM support for GCCs"
                ],
                flag: "🇮🇳"
              },
              {
                region: "Eastern Europe",
                examples: "Poland, Romania, Ukraine",
                advantages: [
                  "Highly educated, multilingual tech workforce",
                  "EU regulatory alignment and nearshore access to Western Europe",
                  "Strong engineering and development culture"
                ],
                flag: "🇪🇺"
              },
              {
                region: "East Africa",
                examples: "Kenya, Rwanda",
                advantages: [
                  "Growing tech talent ecosystem",
                  "English-speaking population and strong entrepreneurial culture",
                  "Emerging innovation hubs with government support"
                ],
                flag: "🌍"
              }
            ].map((region, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-[#FF3D22] rounded-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-5xl mb-4">{region.flag}</div>
                <h3 className="text-2xl font-bold mb-2">{region.region}</h3>
                <p className="text-gray-400 mb-4">e.g., {region.examples}</p>
                <ul className="space-y-3">
                  {region.advantages.map((advantage, advIndex) => (
                    <li key={advIndex} className="flex items-start">
                      <ChevronRight className="w-5 h-5 text-[#FF3D22] mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Now */}
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
              <h2 className="text-4xl font-bold mb-6">Why Now?</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Tech talent shortages in mature markets",
                    description: "As demand for specialized tech skills continues to outpace supply in established markets, GCCs provide access to untapped talent pools globally."
                  },
                  {
                    title: "Geopolitical diversification imperative",
                    description: "Companies are increasingly seeking to distribute their operations across multiple regions to mitigate geopolitical risks and ensure business continuity."
                  },
                  {
                    title: "Hybrid work and global integration are new norms",
                    description: "The widespread adoption of remote work has normalized distributed teams, making it easier than ever to establish and manage global operations."
                  },
                  {
                    title: "Unprecedented government support",
                    description: "Many governments are offering attractive incentives, tax benefits, and infrastructure support to attract foreign GCC investments."
                  }
                ].map((reason, index) => (
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
                      <h3 className="font-bold mb-1">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
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
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Global business"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ROI + TCO Mindset */}
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
            <h2 className="text-4xl font-bold mb-4">ROI + TCO Mindset</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Balancing return on investment with total cost of ownership
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
              <thead className="bg-[#FF3D22] text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Element</th>
                  <th className="py-4 px-6 text-left">ROI Opportunity</th>
                  <th className="py-4 px-6 text-left">TCO Consideration</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    element: "Legal Setup",
                    roi: "Tax efficiency, IP control",
                    tco: "Compliance costs, legal advisory"
                  },
                  {
                    element: "Talent Acquisition",
                    roi: "Innovation capacity, global delivery",
                    tco: "Recruitment, retention, training"
                  },
                  {
                    element: "Tech Infrastructure",
                    roi: "Global collaboration, cybersecurity",
                    tco: "Cloud, licensing, maintenance"
                  },
                  {
                    element: "R&D and Innovation",
                    roi: "Product speed, competitive edge",
                    tco: "Experimentation cost vs. market impact"
                  }
                ].map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                    <td className="py-4 px-6 border-b border-gray-200 font-semibold">{row.element}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{row.roi}</td>
                    <td className="py-4 px-6 border-b border-gray-200">{row.tco}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.section>

      {/* Program Outcomes */}
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
            <h2 className="text-4xl font-bold mb-4">Program Outcomes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tangible results from our Global Competence Program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <Building2 className="w-12 h-12 text-[#FF3D22]" />,
                title: "A fully operational GCC with clear strategic alignment",
                description: "Launch a Global Capability Center that is fully integrated with your organization's strategic objectives and operational requirements."
              },
              {
                icon: <Users className="w-12 h-12 text-[#FF3D22]" />,
                title: "Access to world-class talent",
                description: "Build a team of skilled professionals tailored to your functional needs, with the expertise to drive innovation and operational excellence."
              },
              {
                icon: <LineChart className="w-12 h-12 text-[#FF3D22]" />,
                title: "Reduced operational costs and improved global delivery",
                description: "Achieve significant cost savings while enhancing the quality and efficiency of your global service delivery capabilities."
              },
              {
                icon: <Code className="w-12 h-12 text-[#FF3D22]" />,
                title: "Embedded innovation with measurable business impact",
                description: "Create a culture of innovation within your GCC that delivers tangible business results and contributes to your competitive advantage."
              }
            ].map((outcome, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6 p-6 bg-white border-2 border-[#FF3D22] rounded-lg hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">{outcome.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{outcome.title}</h3>
                  <p className="text-gray-600">{outcome.description}</p>
                </div>
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

export default GlobalCompetenceProgram;
