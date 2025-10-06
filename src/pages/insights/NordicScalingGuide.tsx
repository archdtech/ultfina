import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Users, Building, Globe, Shield, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const NordicScalingGuide = () => {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                5 Steps to Scale Successfully in the Nordics
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                A comprehensive guide to scaling in the Nordic business landscape.
              </p>
              <div className="flex items-center text-gray-400">
                <span>May 1, 2025</span>
                <span className="mx-3">•</span>
                <span>10 min read</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Nordic business landscape"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Introduction</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the unique opportunities and challenges of the Nordic business landscape
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-center">
              <div className="prose prose-lg max-w-none">
                <p className="lead text-xl text-gray-600">
                  The Nordic region—comprising Sweden, Denmark, Norway, Finland, and Iceland—represents one of the world's most innovative, digitally advanced, and sustainable business environments. Yet, many international companies struggle to gain traction in these markets due to cultural misunderstandings, regulatory complexities, and unique business practices.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Nordic countries map"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            <div className="prose prose-lg max-w-none">
              <p>
                This guide outlines five essential steps for successfully scaling your business in the Nordic region, based on our experience helping companies navigate these distinctive markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step 1 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3D22] text-white mr-4">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Step 1</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Understand the Market Dynamics</h3>
                <p className="text-gray-600 mb-6">
                  The Nordic markets may be small individually, but they offer significant opportunities when approached correctly.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h4 className="font-bold">Market Size and Potential</h4>
                <p>
                  With a combined population of approximately 27 million people, the Nordic region represents a modest market by global standards. However, these countries consistently rank among the world's wealthiest, with high disposable incomes and strong purchasing power. The region's GDP per capita averages over $55,000, significantly higher than the EU average.
                </p>

                <h4 className="font-bold mt-8">Digital Maturity</h4>
                <p>
                  The Nordics boast some of the highest digital adoption rates globally. Over 95% of the population uses the internet regularly, and mobile penetration exceeds 100%. E-commerce, digital banking, and contactless payments are the norm rather than the exception. This creates a fertile testing ground for digital products and services.
                </p>

                <h4 className="font-bold mt-8">Innovation Ecosystems</h4>
                <p>
                  Stockholm, Copenhagen, Helsinki, and Oslo have developed vibrant startup ecosystems that have produced global successes like Spotify, Klarna, Supercell, and Kahoot. These cities offer access to venture capital, accelerators, and a deep talent pool of experienced tech professionals.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    Don't treat the Nordics as a single market. While there are similarities, each country has distinct regulatory environments, consumer preferences, and business cultures. A phased entry strategy, starting with one country (often Sweden or Denmark) before expanding to others, typically yields better results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 2 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3D22] text-white mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Step 2</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Navigate the Cultural Landscape</h3>
                <p className="text-gray-600 mb-6">
                  Nordic business culture emphasizes trust, transparency, and egalitarianism—understanding these values is crucial for success.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h4 className="font-bold">Flat Hierarchies</h4>
                <p>
                  Nordic companies typically operate with flatter organizational structures than those found in many other regions. Executives are often accessible, and employees at all levels are encouraged to contribute ideas and feedback. This cultural trait extends to business relationships, where partners expect to be treated as equals regardless of company size.
                </p>

                <h4 className="font-bold mt-8">Consensus-Driven Decision Making</h4>
                <p>
                  The concept of "Janteloven" (the Law of Jante) emphasizes collective achievement over individual success. In business, this translates to consensus-building and collaborative decision-making processes. While this can extend timelines, decisions once made tend to have strong organizational buy-in.
                </p>

                <h4 className="font-bold mt-8">Work-Life Balance</h4>
                <p>
                  Nordic countries consistently rank among the world's best for work-life balance. Business hours typically run from 8:00-16:00, and after-hours emails or weekend work are generally frowned upon. During summer months (particularly July), many businesses operate with reduced staff as employees take extended vacations.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    High-pressure sales tactics and overpromising rarely work in Nordic business environments. Instead, focus on building trust through transparency, delivering on commitments, and demonstrating genuine interest in long-term partnerships rather than quick wins.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 3 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3D22] text-white mr-4">
                    <Building className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Step 3</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Establish the Right Business Structure</h3>
                <p className="text-gray-600 mb-6">
                  Choosing the appropriate legal entity and operational model is critical for long-term success in the Nordics.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h4 className="font-bold">Entity Options</h4>
                <p>
                  The most common business structures for international companies entering Nordic markets include:
                </p>
                <ul>
                  <li><strong>Subsidiary (Aktiebolag/AS/Oy):</strong> A separate legal entity providing limited liability protection but requiring more administrative overhead.</li>
                  <li><strong>Branch Office:</strong> An extension of the parent company that may be simpler to establish but offers less separation from the parent.</li>
                  <li><strong>Representative Office:</strong> Suitable for market research and business development activities but cannot engage in commercial transactions.</li>
                </ul>

                <h4 className="font-bold mt-8">Talent Acquisition</h4>
                <p>
                  Nordic labor markets are characterized by high employment rates and strong competition for skilled workers. While salaries are high, employers must also factor in substantial social contributions and benefits. Many companies find success by:
                </p>
                <ul>
                  <li>Partnering with local universities and technical schools</li>
                  <li>Leveraging the region's appeal to attract international talent</li>
                  <li>Working with specialized recruiters who understand the local market</li>
                </ul>

                <h4 className="font-bold mt-8">Office Space Considerations</h4>
                <p>
                  While traditional office leases remain common, many international companies entering Nordic markets opt for flexible workspace solutions or co-working environments. These options reduce upfront commitments while providing networking opportunities with other businesses.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    Consider a "hybrid" entry strategy that combines local partnerships with your own presence. Working with established distributors, resellers, or service providers can accelerate market entry while you build your direct operations.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 4 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3D22] text-white mr-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Step 4</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Adapt to Regulatory Requirements</h3>
                <p className="text-gray-600 mb-6">
                  Nordic countries combine EU regulations with additional local requirements, particularly around data privacy and sustainability.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h4 className="font-bold">Data Protection</h4>
                <p>
                  Nordic countries enforce GDPR rigorously, often with additional local requirements. Data protection authorities in these countries are well-funded and proactive in their enforcement. Companies should:
                </p>
                <ul>
                  <li>Implement comprehensive data mapping and protection measures</li>
                  <li>Consider local data storage for sensitive information</li>
                  <li>Maintain clear documentation of compliance efforts</li>
                </ul>

                <h4 className="font-bold mt-8">Environmental Standards</h4>
                <p>
                  Sustainability is deeply embedded in Nordic business culture and regulatory frameworks. Companies face both formal requirements and market expectations regarding:
                </p>
                <ul>
                  <li>Carbon footprint reduction and reporting</li>
                  <li>Circular economy principles in product design</li>
                  <li>Supply chain sustainability verification</li>
                </ul>

                <h4 className="font-bold mt-8">Labor Regulations</h4>
                <p>
                  Nordic labor markets combine flexibility with strong worker protections. Key considerations include:
                </p>
                <ul>
                  <li>Collective bargaining agreements that may apply even to non-union employees</li>
                  <li>Extensive parental leave provisions (up to 480 days in Sweden)</li>
                  <li>Employee participation requirements for certain company decisions</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    Invest in local legal expertise early. While Nordic regulatory environments are transparent and predictable, they contain nuances that international companies often miss. Working with experienced local advisors can prevent costly compliance issues later.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Step 5 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-24"
              >
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3D22] text-white mr-4">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Step 5</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Leverage the Nordic Advantage</h3>
                <p className="text-gray-600 mb-6">
                  Beyond market opportunity, the Nordics can serve as a strategic platform for broader business transformation.
                </p>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h4 className="font-bold">Innovation Testbed</h4>
                <p>
                  Nordic consumers are early adopters of new technologies and services. This makes the region an excellent testing ground for innovations before global rollout. Companies can:
                </p>
                <ul>
                  <li>Run controlled pilots with digitally sophisticated users</li>
                  <li>Gather high-quality feedback for product refinement</li>
                  <li>Build case studies from a market respected for innovation</li>
                </ul>

                <h4 className="font-bold mt-8">Sustainability Leadership</h4>
                <p>
                  Nordic countries lead global sustainability efforts, making them ideal partners for companies looking to enhance their environmental credentials. Opportunities include:
                </p>
                <ul>
                  <li>Participation in green technology clusters and innovation programs</li>
                  <li>Access to sustainability-focused investment capital</li>
                  <li>Partnerships with pioneering companies in circular economy models</li>
                </ul>

                <h4 className="font-bold mt-8">Gateway to Adjacent Markets</h4>
                <p>
                  A successful Nordic presence can facilitate expansion to:
                </p>
                <ul>
                  <li>The broader European market</li>
                  <li>The Baltic states (Estonia, Latvia, Lithuania)</li>
                  <li>Arctic region opportunities</li>
                </ul>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    Success in the Nordics often requires adapting your business model, not just your marketing. Companies that view Nordic expansion as an opportunity to evolve their overall approach—embracing digital transformation, sustainability, and collaborative innovation—typically achieve the best long-term results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Conclusion</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key takeaways for successful expansion in the Nordic region
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <p>
                The Nordic region offers tremendous opportunities for companies prepared to invest in understanding its unique business landscape. While market entry requires careful planning and adaptation, the potential rewards extend beyond revenue growth to include innovation acceleration, sustainability advancement, and organizational transformation.
              </p>
              <p>
                By following these five steps—understanding market dynamics, navigating cultural nuances, establishing appropriate business structures, adapting to regulatory requirements, and leveraging the Nordic advantage—international companies can build sustainable success in one of the world's most advanced and prosperous regions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FF3D22] text-white mr-4">
                  <Lightbulb className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold">Ready to Scale in the Nordics?</h2>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                Ultiro's Nordic Scale Program provides comprehensive support for international companies entering and expanding in Nordic markets. Our team of local experts, extensive partner network, and proven methodology can accelerate your success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/programs/nordic-scale-program" className="bg-[#FF3D22] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
                  Explore Our Program
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1560179304-6fc1d8749b23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Nordic business meeting"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default NordicScalingGuide;
