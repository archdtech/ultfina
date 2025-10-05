import { motion } from 'framer-motion';
import { ArrowRight, Users, Handshake, TrendingUp, Target, BarChart3, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const CoOwnershipSuccess = () => {
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
                Why Co-Ownership Models Drive Long-Term Success
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Discover how aligned incentives and shared vision create sustainable growth and resilient ventures.
              </p>
              <div className="flex items-center text-gray-400">
                <span>June 15, 2025</span>
                <span className="mx-3">•</span>
                <span>7 min read</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Business partners shaking hands"
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
              Understanding the transformative power of shared ownership in modern business
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600">
                In the rapidly evolving business landscape, traditional ownership models are being challenged by more collaborative approaches. Co-ownership—where founders, employees, partners, and investors share meaningful equity stakes—is emerging as a powerful driver of sustainable success.
              </p>
              <p>
                This article explores why co-ownership models consistently outperform conventional structures in creating long-term value, fostering innovation, and building resilient organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Alignment of Interests */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Alignment of Interests</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How shared ownership creates powerful incentives for long-term value creation
            </p>
          </motion.div>

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
                    <Handshake className="w-6 h-6" />
                  </div>
                  <h2 className="text-3xl font-bold">Alignment of Interests</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  When everyone has skin in the game, decisions naturally align with long-term value creation.
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
                <h4 className="font-bold">Beyond Principal-Agent Problems</h4>
                <p>
                  Traditional corporate structures often suffer from the principal-agent problem—where managers (agents) may act in their own short-term interests rather than those of the owners (principals). Co-ownership fundamentally reshapes this dynamic by making key stakeholders both principals and agents simultaneously.
                </p>

                <h4 className="font-bold mt-8">Long-Term Decision Making</h4>
                <p>
                  Research consistently shows that companies with significant employee and partner ownership make decisions with longer time horizons. When quarterly results aren't the primary driver of compensation, teams can focus on sustainable growth strategies that may take years to fully materialize.
                </p>

                <h4 className="font-bold mt-8">Reduced Conflicts of Interest</h4>
                <p>
                  Co-ownership models naturally minimize many common business conflicts. When suppliers, distributors, or strategic partners hold equity stakes, negotiations shift from zero-sum games to collaborative value creation, reducing friction and transaction costs.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    The most successful co-ownership models don't just distribute equity—they create governance structures that give stakeholders meaningful voices in strategic decisions, reinforcing the alignment between ownership and influence.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Enhanced Talent Attraction and Retention */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Talent Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How co-ownership creates powerful advantages in the competitive talent marketplace
            </p>
          </motion.div>

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
                  <h2 className="text-3xl font-bold">Talent Advantage</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Co-ownership creates powerful advantages in the increasingly competitive talent marketplace.
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
                <h4 className="font-bold">Attracting Top Talent</h4>
                <p>
                  The most innovative and entrepreneurial professionals increasingly seek equity participation rather than just salary. Co-ownership models enable companies to attract talent that might otherwise start their own ventures or join early-stage startups, bringing entrepreneurial energy into established organizations.
                </p>

                <h4 className="font-bold mt-8">Reducing Turnover</h4>
                <p>
                  Employee-owners stay with companies 2-3 times longer than their non-owner peers, according to multiple studies. This retention advantage is particularly pronounced for high-performers who have the most options in the job market but also the most to gain from long-term equity appreciation.
                </p>

                <h4 className="font-bold mt-8">Creating Talent Flywheels</h4>
                <p>
                  Successful co-ownership creates virtuous cycles of talent attraction. When early team members achieve significant financial outcomes through equity, they become powerful ambassadors who attract the next generation of talent through authentic testimonials about the company's ownership culture.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    The most effective co-ownership programs combine meaningful equity stakes with transparent communication about company performance and value drivers. When team members understand how their work directly impacts equity value, motivation and performance dramatically increase.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Accelerated Growth and Innovation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Growth & Innovation</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How co-ownership structures create environments where innovation thrives and growth accelerates
            </p>
          </motion.div>

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
                  <h2 className="text-3xl font-bold">Growth & Innovation</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Co-ownership structures create environments where innovation thrives and growth accelerates.
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
                <h4 className="font-bold">Distributed Innovation</h4>
                <p>
                  Co-owned companies benefit from innovation that emerges throughout the organization rather than just from designated R&D teams. When everyone has an owner's mindset, they naturally identify opportunities for improvement and growth that might be missed in traditional structures.
                </p>

                <h4 className="font-bold mt-8">Faster Market Adaptation</h4>
                <p>
                  Companies with broad-based ownership consistently demonstrate greater agility in responding to market changes. With more stakeholders incentivized to identify threats and opportunities, these organizations typically detect and respond to shifts earlier than their competitors.
                </p>

                <h4 className="font-bold mt-8">Resource Efficiency</h4>
                <p>
                  Co-owned companies typically achieve more with less. Studies show they maintain leaner operations while achieving higher productivity, as team members naturally eliminate waste and optimize processes when they directly benefit from the resulting value creation.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h5 className="text-blue-800 font-bold mb-2">Key Insight</h5>
                  <p className="text-blue-800 mb-0">
                    The innovation advantage of co-ownership is most pronounced when combined with high transparency and decentralized decision-making. When team members understand the business context and have authority to act, their ownership mindset translates directly into value-creating initiatives.
                  </p>
                </div>
              </motion.div>
            </div>
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
                <h2 className="text-3xl font-bold">Ready to Explore Co-Ownership?</h2>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                Ultiro's venture studio model is built on co-ownership principles. We partner with visionary founders and organizations to build and scale ventures where incentives are aligned for long-term success.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/apply-founder" className="bg-[#FF3D22] text-white py-3 px-6 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
                  Apply as Founder
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
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoOwnershipSuccess;
