
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, LineChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  const handleBioClick = (member: any) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };
  return (
    <div className="pt-16">
      {/* Bio Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="bg-black border-2 border-[#FF3D22] rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedMember.name}</h3>
                  <p className="text-[#FF3D22] font-medium">{selectedMember.role}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/3">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-auto object-cover rounded-lg"
                  />

                  <div className="mt-4">
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 text-sm text-white bg-[#FF3D22] hover:bg-[#FF8A66] transition-colors duration-300 rounded-lg"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="text-gray-300 whitespace-pre-line">
                    {selectedMember.fullBio}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-6">
                    {selectedMember.tags.map((tag: string, i: number) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <motion.section
        className="min-h-[70vh] flex items-center bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We create impactful ventures<br />
            and drive innovation forward.
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Born from a passion for developing impactful tech products, Ultiro has evolved into a global catalyst for vertical innovation where ideas become transformative solutions. Rooted in the Nordic tech ecosystem, we combine strategic vision with hands-on execution to help founders and organizations accelerate innovation.
          </motion.p>
        </div>
      </motion.section>

      {/* Journey Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey: From Builders to Innovation Architects</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-[#FF3D22]" />,
                title: "The Origin",
                description: "Our story began in the realm of software development — designing, coding, and launching software systems. This hands-on experience gave us an unmatched understanding of what it takes to turn ideas into successful products and ventures."
              },
              {
                icon: <Rocket className="w-8 h-8 text-[#FF3D22]" />,
                title: "The Evolution",
                description: "What began as a passion for developing software products evolved into a deeper responsibility. With each venture we supported, we grew into a studio shaped by deep ownership, hands-on experience, and real startup momentum."
              },
              {
                icon: <LineChart className="w-8 h-8 text-[#FF3D22]" />,
                title: "Today",
                description: "We bridge Nordic ingenuity with global markets, empowering ventures in FinTech, ClimateTech, and FrontierTech to scale sustainably. Whether de-risking market entry or optimizing operations, we blend strategic insight with executional grit."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border-2 border-[#FF3D22] rounded-lg hover:shadow-[0_0_15px_rgba(255,61,34,0.3)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Tech Advantage Section */}
      <motion.section
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Tech Advantage: Built to Scale</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.p
              className="text-xl text-gray-400 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our deep roots in software development provide a critical edge. We combine strategic innovation with hands-on technical expertise, understanding product architecture, infrastructure, and scaling intimately. With leading CTOs and product experts on our team, we not only envision but also actively build and guide ventures.
            </motion.p>
            <motion.p
              className="text-xl text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              This ensures our strategies are both visionary and executable, leveraging our inherent ability to develop full-stack products and accelerate frontier technologies. We speak both innovation and code, grounded in real-world building experience.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Capabilities Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Capabilities in Our DNA</h2>
            <p className="text-xl text-gray-600">While our focus is strategic innovation, our foundational strengths enable us to:</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Build Full-Stack Products",
                description: "If the challenge demands it."
              },
              {
                title: "Accelerate Frontier Tech",
                description: "AI, blockchain, infra through partnerships."
              },
              {
                title: "De-risk Scaling",
                description: "With compliance, talent, and operational excellence."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border-2 border-[#FF3D22] rounded-lg hover:shadow-[0_0_15px_rgba(255,61,34,0.3)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Ultiro Section */}
      <motion.section
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Why Ultiro?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Technical Fluency Meets Strategic Innovation",
                description: "We speak code and strategy fluently. Our team's deep expertise in product architecture and scaling ensures solutions are both visionary and executable."
              },
              {
                title: "Nordic Launchpad, Global Reach",
                description: "From Sweden to East Africa, we leverage hyper-localized market insights and an international network to accelerate growth."
              },
              {
                title: "Co-Ownership Mindset",
                description: "We invest alongside founders — aligning incentives for long-term success."
              },
              {
                title: "Vertical Innovation Focus",
                description: "We prioritize creating the new (not just scaling the existing)."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border-2 border-[#FF3D22] rounded-lg hover:shadow-[0_0_15px_rgba(255,61,34,0.3)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Core Values Section */}
      <motion.section
        className="py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-black">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">The principles that guide our approach to innovation and growth</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Innovate First, Build Right",
                description: "Technology is a means, not the end."
              },
              {
                title: "Think Big, Start Lean",
                description: "Rapid iteration, scalable foundations."
              },
              {
                title: "Small Steps, Big Leaps",
                description: "Consistent progress leads to major breakthroughs."
              },
              {
                title: "Unfair Advantages",
                description: "Leverage our network, tech stack, and Nordic edge."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white border-2 border-[#FF3D22] rounded-lg p-8 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-2xl font-bold mb-4 text-black">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="py-20 relative overflow-hidden bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF3D22]/20 to-transparent" />
          <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-white/5" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold mb-4 text-gradient">Meet Our Team</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">Our diverse team of industry leaders, tech innovators, and strategic thinkers builds the future of technology in the Nordic region and beyond.</p>
          </motion.div>



          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Micheal Akampa",
                role: "Co-founder & CEO",
                bio: "15+ years in African and global financial markets. Co-founded Sweden-based investment firms focusing on innovative financial solutions.",
                fullBio: "Micheal Akampa is the Co-founder and Chief Executive Officer of Ultiro, a Swedish IT company and venture builder specializing in FinTech, InsurTech, and ClimateTech. With over 15 years of experience in African and global financial markets, he is deeply committed to mobilizing investments that bridge the substantial Sustainable Development Goals (SDG) funding gap in developing economies.\nThroughout his career, Micheal has played a pivotal role in investment management and financial services. He co-founded and led two Sweden-based investment firms, RE Equity Partners and Traction Capital, focusing on innovative financial solutions and impact-driven investments. His expertise extends across banking and financial institutions, where he has held key positions in Treasury and Investment departments of local, regional, and international banks.\nLeveraging his extensive knowledge of capital markets, strategic financial planning, and technology-driven investment solutions, Micheal has been instrumental in developing scalable business models that drive financial inclusion, sustainable growth, and digital transformation. Under his leadership, Ultiro serves as a key enabler for scaleups, providing essential market entry strategies for businesses expanding into Sweden and the broader Nordic region.\nHis work spans multiple sectors, including financial technology, sustainable finance, and digital innovation, positioning him as a leading figure in bridging capital flows between developed and emerging markets.",
                image: "/images/team/Micheal.jpg",
                linkedin: "https://linkedin.com/in/michealakampa",
                tags: ["Finance", "Investment", "FinTech"]
              },
              {
                name: "Nicklas Mellqvist",
                role: "Co-Founder & CTO",
                bio: "Technology executive with extensive experience in software development, IT management, and international business expansion.",
                fullBio: "Nicklas Mellqvist is a technology executive, consultant, and lecturer with extensive experience in software development, IT management, and international business expansion. As Co-Founder & CTO of Ultiro, he helps Swedish companies develop software products and establish global market presence. He has led cross-functional and distributed development teams, managed IT projects, and provided cybersecurity and compliance insights.\nIn addition to his industry expertise, Nicklas is a University Lecturer at Mid Sweden University, where he teaches informatics and system development and collaborates with major IT firms on research projects. He has also delivered IT lectures and workshops internationally at top institutions such as Shanghai University and Chulalongkorn University.\nHis core strengths include IT strategy, project delivery, cybersecurity, and international business development, making him a trusted leader in Swedish and global IT ecosystems.",
                image: "/images/team/Nicklas.png",
                linkedin: "https://linkedin.com/in/nicklasmellqvist",
                tags: ["IT Strategy", "Cybersecurity", "Software"]
              },
              {
                name: "Mikael Wällstedt",
                role: "Chief Growth Officer",
                bio: "Seasoned business development, sales, and marketing executive with extensive experience in IT, software, and telecom industries.",
                fullBio: "Mikael Wällstedt is a seasoned business development, sales, and marketing executive with extensive experience in IT, software, and telecom industries. As Chief Growth Officer at Ultiro, he leads growth initiatives and export readiness programs, supporting Swedish and international IT companies in expanding their market presence.\nHe is also the Founder of Inonom, where he coaches tech companies on international expansion, sales strategies, and go-to-market execution. Previously, Mikael held leadership roles such as Director of Business Development & Marketing at Trimble, Sales Director at Nominum and Tellabs, and Head of Sales & Marketing at Seanet, driving revenue growth and market expansion across Europe, the Nordics, and global markets.\nWith a proven track record in enterprise sales, SaaS, IT security, and telecom solutions, Mikael is a key figure in helping businesses scale, enter new markets, and optimize their sales and marketing strategies.",
                image: "/images/team/Mikael.jpeg",
                linkedin: "https://linkedin.com/in/mikaelwallstedt",
                tags: ["Business Development", "Sales", "Marketing"]
              },
              {
                name: "Neil Lightfoot",
                role: "Senior Advisor",
                bio: "Strategy advisor and management consultant with a strong track record in driving commercial value through consumer behavior influence.",
                fullBio: "Neil Lightfoot is a seasoned strategy advisor and management consultant with a strong track record in driving commercial value through consumer behavior influence and change. As Senior Advisor at Ultiro, he contributes to strategic growth initiatives, and as Customer Strategy Director at Fourteenx, he provides expert advisory services to leading financial institutions, including Standard Bank, Old Mutual, and TymeBank.\nPreviously, Neil spent over a decade at Genesis Analytics, where he led banking strategy and applied behavioral economics consulting, helping build Africa's largest niche bank strategy practice. His expertise spans customer experience, behavioral targeting, and strategic partnerships, making him a sought-after advisor in the financial services and technology sectors.\nNeil's expertise spans strategic advisory, financial services innovation, consumer behavior analysis, and business model optimization, making him a key asset in helping organizations navigate complex markets and achieve sustainable growth.",
                image: "/images/team/Neil.png",
                linkedin: "https://linkedin.com/in/neillightfoot",
                tags: ["Strategy", "Financial Services", "Consulting"]
              },
              {
                name: "Patrick Boström",
                role: "Chief Marketing Officer",
                bio: "Experienced entrepreneur with a background in 7+ startups, driving growth and innovation across various industries.",
                fullBio: "As an experienced entrepreneur with a background in 7+ startups, Patrick Boström has consistently driven growth and innovation across various industries. His expertise in marketing, scaling businesses, and digital transformation has made him a key figure in the startup ecosystem.\nCurrently serving as the Chief Marketing Officer and Entrepreneur in Residence at Ultiro, Patrick leads strategic marketing initiatives and drives growth across the company's ventures. His entrepreneurial journey began in Hong Kong in 2008, where he founded two companies and a student organization, immersing himself in the dynamic startup ecosystem. Upon returning to Sweden in 2012, he continued to make a significant impact in digital growth, marketing, and innovation.\nPatrick has held leadership roles in multiple ventures, demonstrating his ability to lead and scale technology-driven businesses. His experience working across various roles in startups has equipped him with a deep understanding of the challenges and opportunities within high-growth companies.\nNotable achievements include leading a 400% brand exposure increase among youth at Nordnet Bank and reducing product time-to-market by 120% at Throw Software. Patrick excels in building high-performing teams, fostering a culture of innovation and collaboration, and adapting strategies for changing market conditions.\nAt Ultiro, Patrick's extensive leadership experience, innovative mindset, and hands-on execution are instrumental in driving the company's marketing success and shaping its long-term vision.",
                image: "/images/team/Patrick.jpg",
                linkedin: "https://linkedin.com/in/patrickbostrom",
                tags: ["Marketing", "Startups", "Innovation"]
              },
              {
                name: "Kim Sandström",
                role: "Senior Advisor",
                bio: "Operations and strategy executive specializing in international growth through data-driven business development.",
                fullBio: "Kim Sandström is an experienced operations and strategy executive specializing in international growth through data-driven business development. With two decades of experience in strategy and business operations, he has been instrumental in driving transformation and scaling businesses across various industries.\nCurrently serving as a Senior Advisor at Ultiro, Kim provides strategic guidance and insights to support the company's growth and innovation. In October 2024, he presented a comprehensive report on Sweden's IT sector during a webinar hosted by the National Board of Trade Sweden, with Ultiro as an implementing partner. His deep understanding of the IT landscape and his expertise in market insights, business strategy, and digital transformation make him a valuable asset in shaping Ultiro's long-term vision.\nThroughout his career, Kim has demonstrated a strong track record in driving commercial success. Beyond his role at Ultiro, Kim is deeply passionate about AI and its impact on business strategy. He continuously engages in training, courses, and learning in AI leadership and related areas to stay ahead of industry trends. His expertise in building high-performing teams, fostering innovation, and executing data-driven strategies positions him as a key figure in the modern business landscape.\nAt Ultiro, Kim's extensive leadership experience and deep strategic acumen are instrumental in guiding the company's vision and fostering its growth in the Nordic and international IT markets.",
                image: "/images/team/Kim.png",
                linkedin: "https://linkedin.com/in/kimsandstrom",
                tags: ["Strategy", "Operations", "AI"]
              },
              {
                name: "Jakob Person",
                role: "Service Design",
                bio: "Expert in service design methodologies and user experience optimization.",
                fullBio: "",
                image: "/images/team/Jacob.png",
                linkedin: "https://www.linkedin.com/in/jakobpersson/",
                tags: ["Service Design", "UX", "Innovation"]
              },
              {
                name: "Jerzy Drojecki",
                role: "Project Delivery",
                bio: "Experienced project manager specializing in complex IT implementations and delivery excellence.",
                fullBio: "",
                image: "/images/team/Jerzy.png",
                linkedin: "https://www.linkedin.com/in/jerzydrojecki/",
                tags: ["Project Management", "IT Delivery", "Implementation"]
              },
              {
                name: "Join Our Team",
                role: "Become Part of Ultiro",
                bio: "We're always looking for talented individuals to join our growing team of innovators and problem-solvers.",
                fullBio: "",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
                linkedin: "/careers",
                tags: ["Careers", "Opportunities", "Growth"]
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-black border-2 border-[#FF3D22] rounded-lg overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 h-7">{member.name}</h3>
                    <p className="text-[#FF3D22] font-medium mb-4 h-6">{member.role}</p>
                    <p className="text-gray-400 mb-4 text-sm min-h-[60px]">{member.bio}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 min-h-[28px]">
                    {member.tags.map((tag, i) => (
                      <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">{tag}</span>
                    ))}
                  </div>

                  {member.fullBio && (
                    <button
                      onClick={() => handleBioClick(member)}
                      className="mt-2 text-sm text-[#FF3D22] hover:text-[#FF8A66] transition-colors duration-300"
                    >
                      View Full Bio
                    </button>
                  )}
                </div>

                <div className="mt-auto border-t border-gray-800">
                  {member.name === "Join Our Team" ? (
                    <Link
                      to={member.linkedin}
                      className="flex items-center justify-center p-4 text-sm text-white bg-gray-800/50 hover:bg-[#FF3D22] transition-colors duration-300"
                    >
                      <ArrowRight className="h-4 w-4 mr-2" />
                      View Opportunities
                    </Link>
                  ) : (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-4 text-sm text-white bg-gray-800/50 hover:bg-[#FF3D22] transition-colors duration-300"
                    >
                      <svg className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      Connect on LinkedIn
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join the Team CTA */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block p-0.5 rounded-full bg-gradient-to-r from-[#FF3D22] to-[#FF8A66]">
              <Link
                to="/careers"
                className="inline-flex items-center px-8 py-4 rounded-full bg-black text-white hover:bg-transparent transition-colors duration-300"
              >
                Join Our Team
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to scale your impact?
          </motion.h2>
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="/apply-founder" className="btn-primary inline-flex items-center px-8 py-3 rounded-full bg-[#FF3D22] text-white hover:bg-black hover:text-white border-2 border-[#FF3D22] hover:border-black transition-all duration-300">
              Join Our Team
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a href="/apply-partner" className="inline-flex items-center px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 rounded-full">
              Apply as Partner
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
