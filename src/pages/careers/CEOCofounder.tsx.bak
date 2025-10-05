import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Building, Clock, User, Mail, Phone, FileText, TrendingUp, Users, Shield, Lightbulb, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const CEOCofounder = () => {
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
    formType: 'CEO Co-founder Application',
    emailConfigType: 'careers',
    sourcePage: 'CEO-Cofounder Page'
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

    if (!formData.name || !formData.email || !formData.resume) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields: Name, Email, and upload a Resume.' });
      setIsSubmitting(false);
      return;
    }

    // Prepare data for submission, including file data
    const { resume, ...textData } = formData;
    const submissionData = {
      ...textData,
      resumeName: resume ? resume.name : 'Not provided',
      position: 'CEO Co-founder',
      sourcePage: 'CEO-Cofounder Page',
      // formType and emailConfigType are already in textData from initialFormData
    };

    console.log('Submitting CEO Co-founder application:', submissionData);

    try {
      const response = await fetch('/api/send-email-resend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus({ type: 'success', message: result.message || 'Application submitted successfully!' });
        setFormData(initialFormData); // Reset form to initial state
        // Clear the file input visually (if possible, depends on browser and input setup)
        const fileInput = document.getElementById('resume') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        const errorResult = await response.json();
        setSubmitStatus({ type: 'error', message: errorResult.message || 'There was an error submitting your application.' });
      }
    } catch (error: any) {
      console.error('Error submitting application:', error);
      setSubmitStatus({ type: 'error', message: error.message || 'An unexpected error occurred.' });
    } finally {
      setIsSubmitting(false);
    }
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
                CEO & Co-founder
              </h1>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <MapPin className="text-[#FF3D22] w-4 h-4 mr-1" />
                  <span className="text-sm">Stockholm, Sweden</span>
                </div>
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <Building className="text-[#FF3D22] w-4 h-4 mr-1" />
                  <span className="text-sm">Paytack</span>
                </div>
                <div className="flex items-center bg-gray-800 px-3 py-1 rounded-full">
                  <Clock className="text-[#FF3D22] w-4 h-4 mr-1" />
                  <span className="text-sm">Full-time</span>
                </div>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                Lead Paytack's expansion in Sweden as a visionary co-founder
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl overflow-hidden hidden lg:block"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="CEO & Co-founder" 
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
            <h2 className="text-4xl font-bold mb-4">THE OPPORTUNITY</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a successful fintech startup at a pivotal moment of expansion
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="lead text-xl text-gray-600 mb-6">
                Paytack is a rapidly growing fintech company that provides innovative payment solutions for small and medium-sized businesses. After successful launches in several European markets, we are now expanding to Sweden and need a visionary leader to spearhead this effort.
              </p>
              <p className="mb-6">
                This is a unique opportunity to join a successful fintech startup at a pivotal moment and drive its growth in a new market. As the CEO & Co-founder for Sweden, you will have the autonomy to build and lead the local team while being supported by the broader Paytack organization.
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
            <h2 className="text-4xl font-bold mb-4">THE ROLE</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lead Paytack's expansion in Sweden as a visionary co-founder
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
                <h3 className="text-3xl font-bold mb-6">CEO & Co-Founder</h3>
                <p className="text-gray-600 mb-6">
                  Lead Paytack's expansion in Sweden as a visionary co-founder with equity and autonomy to build a successful business.
                </p>
                <div className="space-y-4 mt-8">
                  <div className="flex items-start">
                    <MapPin className="text-[#FF3D22] mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">Stockholm, Sweden</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Building className="text-[#FF3D22] mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-medium">Company</h4>
                      <p className="text-gray-600">Paytack</p>
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
                <h3 className="text-3xl font-bold mb-6">Key Responsibilities</h3>
                <div className="space-y-2 mb-8">
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Develop and execute the market entry strategy for Sweden</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Build and lead a high-performing local team</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Establish partnerships with key stakeholders in the Swedish market</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Drive customer acquisition and revenue growth</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Adapt the product to meet local market needs and regulatory requirements</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Represent Paytack in the Swedish business community and media</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Collaborate with the global leadership team to align on strategy and share learnings</p>
  </div>
</div>

                <h3 className="text-3xl font-bold mb-6">Requirements</h3>
                <div className="space-y-2 mb-8">
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Proven experience in leadership roles, preferably in fintech, payments, or related industries</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Strong understanding of the Swedish market and business landscape</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Track record of successfully building and scaling businesses</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Excellent networking and relationship-building skills</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Strategic thinking and execution capabilities</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Entrepreneurial mindset with a bias toward action</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Fluency in Swedish and English</p>
  </div>
  <div className="flex items-start">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Bachelor's degree in business, finance, or a related field; MBA is a plus</p>
  </div>
</div>

                <h3 className="text-3xl font-bold mb-6">What We Offer</h3>
                <div className="mb-8 space-y-4">
                  <div className="flex">
                    <span className="text-[#FF3D22] font-bold mr-2">—</span>
                    <p>Equity stake in a high-growth fintech company</p>
                  </div>
                  <div className="flex">
                    <span className="text-[#FF3D22] font-bold mr-2">—</span>
                    <p>Competitive compensation package</p>
                  </div>
                  <div className="flex">
                    <span className="text-[#FF3D22] font-bold mr-2">—</span>
                    <p>Autonomy to build and lead the Swedish operation</p>
                  </div>
                  <div className="flex">
                    <span className="text-[#FF3D22] font-bold mr-2">—</span>
                    <p>Support from an experienced global team</p>
                  </div>
                  <div className="flex">
                    <span className="text-[#FF3D22] font-bold mr-2">—</span>
                    <p>Opportunity to make a significant impact in the Swedish fintech landscape</p>
                  </div>
                  <div className="flex">
                    <span className="text-[#FF3D22] font-bold mr-2">—</span>
                    <p>Resources to build and scale a successful business</p>
                  </div>
                </div>
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
            <h2 className="text-4xl font-bold mb-4" id="apply">APPLY NOW</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards becoming Paytack's CEO & Co-founder in Sweden
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <motion.div 
              className="bg-white p-8 border border-gray-200 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
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
                  Resume/CV *
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
                  placeholder="Why are you the ideal Co-founder & CEO to lead Paytack's Swedish expansion?"
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
  <Link to="/careers/venture-builder" className="group">
    <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg">
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3D22]">Venture Builder</h3>
      <p className="text-gray-600 mb-4">Join Sweden's Leading Venture Partner for Fintech, ClimateTech and FrontierTech Scaleups</p>
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

export default CEOCofounder;
