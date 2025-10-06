import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Building, Clock, User, Mail, Phone, FileText, TrendingUp, Users, Shield, Lightbulb, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const VentureBuilder = () => {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    resume: null as File | null,
    resumeFile: null as string | null,
    resumeFileName: null as string | null,
    resumeFileType: null as string | null,
    coverLetter: '',
    linkedin: '',
    formType: 'Venture Builder Application',
    emailConfigType: 'careers',
    sourcePage: 'Venture-Builder Page',
    position: 'Venture Builder'
  };
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      // Convert file to base64
      const reader = new FileReader();
      reader.onload = () => {
        setFormData(prev => ({
          ...prev,
          resume: file,
          resumeFile: reader.result as string,
          resumeFileName: file.name,
          resumeFileType: file.type
        }));
      };
      reader.readAsDataURL(file);
    } else {
      setFormData(prev => ({
        ...prev,
        resume: null,
        resumeFile: null,
        resumeFileName: null,
        resumeFileType: null
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    if (!formData.name || !formData.email) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields: Name and Email.' });
      setIsSubmitting(false);
      return;
    }

    // Create FormData for Web3Forms submission
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', 'ffe2efec-35be-401c-bf12-6aa56b81ba46');
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('linkedin', formData.linkedin);
    formDataToSend.append('coverLetter', formData.coverLetter);
    formDataToSend.append('subject', `Venture Builder Application: ${formData.name}`);
    formDataToSend.append('message', `
Position: Venture Builder
Company: Ultiro
Phone: ${formData.phone || 'Not provided'}
LinkedIn: ${formData.linkedin || 'Not provided'}

Cover Letter:
${formData.coverLetter || 'No cover letter provided.'}

${formData.resume ? 'Resume: Attached' : 'Resume: No resume uploaded'}
    `.trim());
    formDataToSend.append('from_name', 'Ultiro Careers');
    formDataToSend.append('reply_to', formData.email);
    
    // Add file if selected
    if (formData.resume) {
      formDataToSend.append('attachment', formData.resume);
    }

    console.log('Submitting Venture Builder application via Web3Forms');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Venture Builder application submitted successfully:', result);
        setFormData(initialFormData);
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We will be in touch soon.' });
      } else {
        const errorResult = await response.json();
        throw new Error(errorResult.message || 'Failed to submit application');
      }
    } catch (error: any) {
      console.error('Form submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error.message || 'An unexpected error occurred. Please try again.'
      });
    }
    setIsSubmitting(false);
  };

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
              <div className="flex items-center mb-6">
                <Briefcase className="text-[#FF3D22] mr-2" />
                <span className="text-gray-400">Job Opportunity</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Venture Builder
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <MapPin className="text-[#FF3D22] w-4 h-4 mr-1" />
                  <span className="text-sm">Stockholm, Sweden</span>
                </div>
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <Building className="text-[#FF3D22] w-4 h-4 mr-1" />
                  <span className="text-sm">Ultiro</span>
                </div>
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <Clock className="text-[#FF3D22] w-4 h-4 mr-1" />
                  <span className="text-sm">Full-time</span>
                </div>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                Join Sweden's Leading Venture Partner for Fintech, ClimateTech and FrontierTech Scaleups
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl overflow-hidden hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Venture Builder" 
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
            <h2 className="text-4xl font-bold mb-4 uppercase">The Opportunity</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Shape the future of innovation at Sweden's premier venture studio
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-6">
                Ultiro is seeking a dynamic Venture Builder to join our team in Stockholm. As a Venture Builder, you will play a pivotal role in identifying, developing, and scaling innovative business concepts in the fintech, climate tech, and frontier tech sectors.
              </p>
              <p className="mb-6">
                This is a unique opportunity to work with some of the most promising startups in the Nordic region, helping them navigate challenges, seize opportunities, and achieve sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 uppercase">The Role</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drive innovation and growth for cutting-edge startups
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
                  <h2 className="text-3xl font-bold">Position Details</h2>
                </div>
                <h3 className="text-2xl font-bold mb-4">Venture Builder</h3>
                <p className="text-gray-600 mb-6">
                  Full-time role working with innovative startups in Stockholm
                </p>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <span className="text-[#FF3D22] font-bold mr-2">—</span>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">Stockholm, Sweden</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="text-[#FF3D22] mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-medium">Company</h4>
                      <p className="text-gray-600">Ultiro</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-[#FF3D22] mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-medium">Application Deadline</h4>
                      <p className="text-gray-600">Open until filled</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <a href="#apply" className="block w-full bg-[#FF3D22] text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
                    Apply Now
                  </a>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="prose prose-lg max-w-none"
              >
                <h3 className="text-2xl font-bold mb-4">Key Responsibilities</h3>
                <ul className="mb-8">
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Identify and evaluate promising business opportunities in fintech, climate tech, and frontier tech</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Work closely with founders to develop and refine business models, go-to-market strategies, and product roadmaps</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Provide hands-on support to portfolio companies in areas such as business development, fundraising, and talent acquisition</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Build and maintain relationships with key stakeholders in the Nordic startup ecosystem</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Contribute to Ultiro's thought leadership initiatives through content creation and speaking engagements</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Mentor and coach early-stage founders to help them navigate challenges and accelerate growth</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">Requirements</h3>
                <ul className="mb-8">
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> 5+ years of experience in venture capital, startup operations, management consulting, or a related field</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Proven track record of driving growth and innovation in fast-paced environments</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Strong understanding of the fintech, climate tech, or frontier tech landscapes</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Excellent analytical, problem-solving, and communication skills</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Entrepreneurial mindset with a bias toward action</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Ability to work effectively with diverse stakeholders, from founders to investors</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Bachelor's degree in business, engineering, or a related field; MBA or advanced degree is a plus</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Fluency in English; knowledge of Swedish or other Nordic languages is an advantage</li>
                </ul>

                <h3 className="text-2xl font-bold mb-4">What We Offer</h3>
                <ul className="mb-8">
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Opportunity to work with cutting-edge startups and technologies</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Competitive compensation package with performance-based incentives</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Flexible work arrangements and a collaborative team environment</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Extensive network of industry contacts and resources</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Continuous learning and professional development opportunities</li>
                  <li><span className="text-[#FF3D22] font-bold mr-2">—</span> Chance to make a meaningful impact on the Nordic startup ecosystem</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
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
            <h2 className="text-4xl font-bold mb-4" id="apply">Apply Now</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards joining our team of venture builders
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {submitStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className={`p-4 mb-6 rounded-md text-sm text-center ${submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                >
                  {submitStatus.message}
                </motion.div>
              )}
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                    <User className="inline-block w-4 h-4 mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3D22]"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                    <Mail className="inline-block w-4 h-4 mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3D22]"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                    <Phone className="inline-block w-4 h-4 mr-2" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3D22]"
                    placeholder="+46 70 123 4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="resume">
                    <FileText className="inline-block w-4 h-4 mr-2" />
                    Resume/CV (Optional)
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3D22]"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="coverLetter">
                    <FileText className="inline-block w-4 h-4 mr-2" />
                    Cover Letter *
                  </label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3D22] h-32"
                    placeholder="Why are you interested in this position and how does your experience align with our requirements?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="linkedin">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3D22]"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-3 bg-[#FF3D22] text-white hover:bg-[#ff2a09] transition-colors rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <Send className="ml-2" size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500">
                  By submitting this application, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Related Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Other Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore more opportunities to join our team
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/careers/ceo-cofounder" className="group">
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3D22]">CEO & Co-founder</h3>
                <p className="text-gray-600 mb-4">Lead Paytack's expansion in Sweden as a visionary co-founder</p>
                <div className="flex items-center text-[#FF3D22]">
                  <span className="font-medium">View Position</span>
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                </div>
              </div>
            </Link>
            <Link to="/careers/coo-cofounder" className="group">
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3D22]">COO & Co-founder</h3>
                <p className="text-gray-600 mb-4">Lead B2AND's expansion in the Nordic & Baltic region as a visionary co-founder</p>
                <div className="flex items-center text-[#FF3D22]">
                  <span className="font-medium">View Position</span>
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                </div>
              </div>
            </Link>
            <Link to="/careers/senior-consultant" className="group">
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3D22]">Senior Consultant</h3>
                <p className="text-gray-600 mb-4">Design or Innovation Management role for experienced professionals with 5+ years experience</p>
                <div className="flex items-center text-[#FF3D22]">
                  <span className="font-medium">View Position</span>
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={16} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VentureBuilder;
