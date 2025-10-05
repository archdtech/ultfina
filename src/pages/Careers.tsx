import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Heart, Coffee, MapPin, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import InteractiveBackground from '../components/InteractiveBackground';
import { parallaxScroll } from '../utils/animations';

const Careers = () => {
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
            src="/images/Careers.png"
            alt="Careers background"
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
            Shape the Future<br />
            of Nordic Tech
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join Ultiro and work where innovation meets fika breaks. We're building the next generation of Nordic tech success stories.
          </motion.p>
        </div>
      </motion.section>

      {/* Open Positions */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Open Positions
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "CEO & Co-founder",
                location: "Stockholm",
                type: "Full-time",
                company: "Paytack",
                description: "Lead Paytack's expansion in Sweden as a visionary co-founder.",
                link: "/careers/ceo-cofounder"
              },
              {
                title: "COO & Co-founder",
                location: "Nordic & Baltic Region",
                type: "Full-time",
                company: "B2AND",
                description: "Co-Architect the Advocacy Revolution across the Nordic and Baltic markets.",
                link: "/careers/coo-cofounder"
              },
              {
                title: "Venture Builder",
                location: "Stockholm",
                type: "Full-time",
                company: "Ultiro",
                description: "Help ambitious tech companies establish and thrive in the Nordic region.",
                link: "/careers/venture-builder"
              },
              {
                title: "Senior Consultant",
                location: "Stockholm",
                type: "Full-time",
                company: "Ultiro",
                description: "Design or Innovation Management role for experienced professionals to lead transformative change.",
                link: "/careers/senior-consultant"
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="mr-4">{job.location}</span>
                  <Briefcase className="w-4 h-4 mr-1" />
                  <span className="mr-4">{job.type}</span>
                  {job.company && (
                    <>
                      <Building className="w-4 h-4 mr-1" />
                      <span>{job.company}</span>
                    </>
                  )}
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <Link to={job.link} className="inline-flex items-center text-[#FF3D22] hover:text-[#ff5c45] transition-colors">
                  View Position <ArrowRight className="ml-1" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Ultiro */}
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
            <h2 className="text-4xl font-bold mb-4">Why Ultiro?</h2>
            <p className="text-xl text-gray-400">More than just another workplace</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <GraduationCap className="w-8 h-8 text-[#E63946]" />,
                title: "Impact with Autonomy",
                description: "Lead projects, not paperwork. Direct influence on company trajectory."
              },
              {
                icon: <Coffee className="w-8 h-8 text-[#E63946]" />,
                title: "Nordic Work-Life Balance",
                description: "Flexible hours, remote work options, and generous vacation policy."
              },
              {
                icon: <Heart className="w-8 h-8 text-[#E63946]" />,
                title: "Equity Opportunities",
                description: "Own a piece of what you build through our equity program."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white/5 rounded-lg backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits */}
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
              <h2 className="text-4xl font-bold mb-6">Perks & Benefits</h2>
              <p className="text-xl text-gray-600 mb-8">
                We're building ventures and the people who build them. Our perks are designed to empower entrepreneurial thinkers, makers, and doers.
              </p>
              <div className="space-y-6">
                {[
                  "Opportunity to co-create and lead new ventures",
                  "Access to a shared founder equity pool",
                  "Innovation budget for prototyping and testing ideas",
                  "Mentorship from experienced founders, investors, and domain experts",
                  "Curated ecosystem of operators, builders, and creatives",
                  "Bi-annual venture building sprints & retreats",
                  "Flexible work environment",
                  "Parental leave that supports founders and families"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-[#E63946]" />
                    <p className="text-gray-600">{benefit}</p>
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Application Process */}
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
            <h2 className="text-4xl font-bold mb-4">Our Application Process</h2>
            <p className="text-xl text-gray-400">Simple, transparent, and human-centered</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Application Review",
                description: "We review your application within 48 hours"
              },
              {
                number: "02",
                title: "Initial Chat",
                description: "Quick video call to get to know each other"
              },
              {
                number: "03",
                title: "Team Interview",
                description: "Deep dive with potential teammates"
              },
              {
                number: "04",
                title: "Final Discussion",
                description: "Align on expectations and next steps"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-[#E63946] text-4xl font-bold mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Join Us?
          </motion.h2>
          <motion.div
            className="space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="mailto:Careers@ultiro.com" className="inline-flex items-center px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-full">
              Contact our Recruiters
              <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Careers;