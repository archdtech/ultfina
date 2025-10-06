import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, FileText, Video, TrendingUp } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InteractiveBackground from '../components/InteractiveBackground';
import { parallaxScroll } from '../utils/animations';

const Insights = () => {
  // Create ref for parallax effect
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  // Initialize parallax effect
  useEffect(() => {
    // Add a small delay to ensure DOM is fully rendered
    const initAnimations = setTimeout(() => {
      // Create a parallax effect for the background
      if (parallaxBgRef.current) {
        parallaxScroll(parallaxBgRef.current, -0.1);
      }
    }, 100);

    return () => clearTimeout(initAnimations);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section with Background Image */}
      <motion.section
        className="min-h-[80vh] flex items-center relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0" ref={parallaxBgRef}>
          <img
            src="/images/Insights.png"
            alt="Insights background"
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60">
            <InteractiveBackground />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Navigating the<br />
            Nordic Ecosystem
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Stay ahead with our curated knowledge hub of market insights, success stories, and expert perspectives.
          </motion.p>
        </div>
      </motion.section>

      {/* Featured Insights */}
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
            <h2 className="text-4xl font-bold mb-4">Featured Insights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In-depth analysis and strategic perspectives on the Nordic business landscape
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="/insights/nordic-scaling-guide" className="block">
              <motion.div
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Nordic market entry"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 p-8">
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-5 h-5 text-[#FF3D22] mr-2" />
                        <span className="text-white text-sm">5 min read</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF3D22] transition-colors">5 Steps to Scale Successfully in the Nordics</h3>
                      <p className="text-gray-300 mb-6">A comprehensive guide to scaling in the Nordic business landscape.</p>
                      <div className="inline-flex items-center text-white bg-[#FF3D22] hover:bg-[#ff5c45] rounded-full px-6 py-3 transition-colors">
                        Read article <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>

            <a href="/insights/co-ownership-success" className="block">
              <motion.div
                className="relative group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-96 rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Co-Ownership Models"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="absolute bottom-0 p-8">
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-5 h-5 text-[#FF3D22] mr-2" />
                        <span className="text-white text-sm">7 min read</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF3D22] transition-colors">Why Co-Ownership Models Drive Long-Term Success</h3>
                      <p className="text-gray-300 mb-6">Discover how aligned incentives and shared vision create sustainable growth.</p>
                      <div className="inline-flex items-center text-white bg-[#FF3D22] hover:bg-[#ff5c45] rounded-full px-6 py-3 transition-colors">
                        Read article <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </motion.section>



      {/* Webinars */}
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
            <h2 className="text-4xl font-bold mb-4">Expert Webinars</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Watch our collection of webinars featuring industry experts and market insights
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="https://www.youtube.com/watch?v=Xw2SRYyN2Tg"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video">
                  <img
                    src="https://i.ytimg.com/vi/Xw2SRYyN2Tg/maxresdefault.jpg"
                    alt="Insights into the Swedish IT-market"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#FF3D22] flex items-center justify-center">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF3D22] transition-colors">Insights into the Swedish IT-market</h3>
                  <p className="text-gray-600 mb-4">Explore the opportunities and challenges in Sweden's thriving IT sector with expert analysis and market trends.</p>
                  <div className="inline-flex items-center text-[#FF3D22] font-medium">
                    Watch webinar <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=bDSidbVnD70"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video">
                  <img
                    src="https://i.ytimg.com/vi/bDSidbVnD70/maxresdefault.jpg"
                    alt="Market Study – The Swedish Gaming Industry"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#FF3D22] flex items-center justify-center">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF3D22] transition-colors">Market Study – The Swedish Gaming Industry</h3>
                  <p className="text-gray-600 mb-4">Discover the latest developments and growth opportunities in Sweden's innovative gaming industry.</p>
                  <div className="inline-flex items-center text-[#FF3D22] font-medium">
                    Watch webinar <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </a>

            <a
              href="https://www.youtube.com/watch?v=yWfpCvXIJrk"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <motion.div
                className="bg-white shadow-lg rounded-lg overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="relative aspect-video">
                  <img
                    src="https://i.ytimg.com/vi/yWfpCvXIJrk/maxresdefault.jpg"
                    alt="A Hub for Fintech Innovation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-[#FF3D22] flex items-center justify-center">
                      <Video className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#FF3D22] transition-colors">A Hub for Fintech Innovation</h3>
                  <p className="text-gray-600 mb-4">Discover how Sweden has become a leading center for financial technology innovation and what opportunities this presents.</p>
                  <div className="inline-flex items-center text-[#FF3D22] font-medium">
                    Watch webinar <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            </a>
          </div>
        </div>
      </motion.section>

      {/* Swedish Market Studies */}
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
            <h2 className="text-4xl font-bold mb-4">Swedish Market Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive research and analysis of key Swedish industry sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                image: "/images/insights/betalkort-med-chip.jpg",
                title: "The Swedish Market for Financial Technology",
                description: "Comprehensive analysis of Sweden's fintech landscape, market trends, and growth opportunities.",
                url: "https://www.kommerskollegium.se/en/analyses-and-seminars/publications/market-studies/the-swedish-market-for-financial-technology/"
              },
              {
                image: "/images/insights/spelkontroller.jpg",
                title: "The Swedish Market for Gaming",
                description: "In-depth exploration of Sweden's gaming industry, key players, and future market projections.",
                url: "https://www.kommerskollegium.se/en/analyses-and-seminars/publications/market-studies/the-swedish-market-for-gaming/"
              },
              {
                image: "/images/insights/it-services-2-1.jpg",
                title: "The Swedish Market for IT Services",
                description: "Strategic overview of Sweden's IT services sector, digital transformation trends, and business opportunities.",
                url: "https://www.kommerskollegium.se/en/analyses-and-seminars/publications/market-studies/the-swedish-market-for-it-services/"
              },
              {
                image: "/images/insights/cybersec.jpg",
                title: "The Swedish Market for Cybersecurity",
                description: "Comprehensive research and analysis of Sweden's cybersecurity market, key trends, and business opportunities.",
                url: "https://www.kommerskollegium.se/en/analyses-and-seminars/publications/market-studies/the-swedish-market-for-cybersecurity/"
              }
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="group relative cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3D22] transition-colors">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="inline-flex items-center text-[#FF3D22] hover:text-[#ff5c45] rounded-full px-4 py-2 bg-gray-100 group-hover:bg-gray-200 transition-colors">
                    Read full report <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </motion.div>
              </a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-black text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Navigate the Nordic Market?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get in touch to discuss how we can help your business succeed in the Nordic region
          </motion.p>
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/apply-partner" className="bg-[#FF3D22] text-white py-3 px-8 rounded-full inline-flex items-center hover:bg-[#ff2a09] transition-colors">
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Insights;