import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, MapPin, Building, Clock, User, Mail, Phone, FileText, TrendingUp, Users, Shield, Lightbulb, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

const SeniorConsultant = () => {
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
    formType: 'Senior Consultant Application',
    emailConfigType: 'careers',
    sourcePage: 'Senior-Consultant Page',
    position: 'Senior Consultant (Design or Innovation Management)'
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

    // Create FormData for file upload
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('linkedin', formData.linkedin);
    formDataToSend.append('coverLetter', formData.coverLetter);
    formDataToSend.append('formType', formData.formType);
    formDataToSend.append('position', 'Senior Consultant (Design or Innovation Management)');
    formDataToSend.append('sourcePage', 'Senior-Consultant Page');
    
    if (formData.resume) {
      formDataToSend.append('resume', formData.resume);
    }

    console.log('Submitting Senior Consultant application with file upload');

    try {
      const response = await fetch('/api/send-career-email', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Senior Consultant application submitted successfully:', result);
        setFormData(initialFormData);
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We will be in touch soon.' });
      } else {
        const errorResult = await response.json();
        throw new Error(errorResult.message || errorResult.error || 'Failed to submit application');
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
  Senior Consultant (Design or Innovation Management)
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
  Are you a seasoned leader and strategic thinker with 10+ years of experience in design or innovation management, ready to drive systemic transformation within the high-growth sectors of Fintech and ClimateTech?
</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Senior consultant team" 
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* About the Role */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">ABOUT THE ROLE</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
  Based in Sweden, a globally recognized hub for innovation and digital leadership, Ultiro acts as a venture partner to ambitious tech scaleups. We go beyond traditional consultancy, offering deep, industry-specific expertise and hands-on operational support to accelerate their success. We're seeking a highly experienced Senior Consultant to provide strategic leadership and drive complex design and innovation initiatives for our clients, shaping the future of these critical industries.
</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-3xl font-bold mb-6">Senior Consultant</h3>
              <h4 className="text-xl font-semibold mb-6">Design or Innovation Management</h4>

              <p className="mb-6">
                Are you a seasoned leader and strategic thinker with 10+ years of experience in design or innovation management, ready to drive systemic transformation within the high-growth sectors of Fintech and ClimateTech?
              </p>

              <p className="mb-6">
                Based in Sweden, a globally recognized hub for innovation and digital leadership, Ultiro acts as a venture partner to ambitious tech scaleups. We go beyond traditional consultancy, offering deep, industry-specific expertise and hands-on operational support to accelerate their success. We're seeking a highly experienced Senior Consultant to provide strategic leadership and drive complex design and innovation initiatives for our clients, shaping the future of these critical industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Responsibilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">WHAT YOU'LL DO</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
  As a Senior Consultant, you will be a driving force in leading complex design and innovation assignments, providing strategic direction and expert guidance to our clients. Your responsibilities will include:
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
                <h3 className="text-2xl font-bold mb-4">Senior Consultant</h3>
                <p className="text-gray-600 mb-6">
                  Design or Innovation Management
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
                      <p className="text-gray-600">Ultiro</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-[#FF3D22] mt-1 mr-4" size={20} />
                    <div>
                      <h4 className="font-medium">Experience</h4>
                      <p className="text-gray-600">10+ years</p>
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
                <p className="mb-6">As a Senior Consultant, you will be a driving force in leading complex design and innovation assignments, providing strategic direction and expert guidance to our clients. Your responsibilities will include:</p>

                <div className="mb-8 space-y-4">
  <div className="flex">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Providing proven leadership in complex design or innovation projects, guiding teams and ensuring impactful outcomes.</p>
  </div>
  <div className="flex">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Developing overarching strategies, managing organizational change processes, and supporting systemic transformation within client organizations.</p>
  </div>
  <div className="flex">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Engaging effectively with a diverse range of stakeholders across public, private, and civil sectors to build consensus and drive initiatives forward.</p>
  </div>
  <div className="flex">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Leveraging extensive experience in project management to oversee complex projects and potentially contribute to the development of innovative methodologies.</p>
  </div>
  <div className="flex">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Exhibiting excellent facilitation, negotiation, and communication abilities to effectively lead discussions, resolve conflicts, and present strategic recommendations.</p>
  </div>
  <div className="flex">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Contributing to policy-level discussions or supporting public sector transformation initiatives related to design and innovation within Fintech and ClimateTech.</p>
  </div>
  <div className="flex">
    <span className="text-[#FF3D22] font-bold mr-2">—</span>
    <p>Applying a strategic mindset with a strong understanding of sustainable development principles and the dynamics of innovation ecosystems.</p>
  </div>
</div>

{/* Who You Are Section */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4">Who You Are</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        You are a recognized leader in the field of design or innovation management, possessing 10+ years of significant experience or equivalent deep expertise. You demonstrate:
      </p>
    </motion.div>
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none mb-8 space-y-4">
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Proven leadership capabilities in managing and successfully delivering complex design or innovation assignments.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>A strong track record of developing impactful strategies, managing organizational change, and supporting systemic transformation.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Extensive experience in engaging and building relationships with stakeholders across various sectors (public, private, civil).</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Deep expertise in project management, with the ability to oversee complex initiatives and potentially contribute to methodology development.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Exceptional facilitation, negotiation, and communication skills, enabling you to lead high-level discussions and influence key stakeholders.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>The capacity to contribute to policy-level discussions and a strong understanding of the public sector landscape related to innovation.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>A strategic mindset with a clear understanding of sustainable development principles and the intricacies of innovation ecosystems.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>A passion for driving positive change within the Fintech and ClimateTech sectors.</p></div>
      </div>
    </div>
  </div>
</section>

{/* Why Join Ultiro Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-4">WHY JOIN ULTIRO?</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        This is a unique opportunity to:
      </p>
    </motion.div>
    <div className="max-w-4xl mx-auto">
      <div className="prose prose-lg max-w-none mb-8 space-y-4">
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Lead impactful transformation: Drive significant change and shape the future of ambitious Fintech and ClimateTech scaleups.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Operate at a strategic level: Develop and implement high-level strategies with significant organizational impact.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Engage with key stakeholders: Collaborate with leaders across public, private, and civil sectors.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Shape our methodologies: Contribute your extensive experience to refine and develop innovative approaches to client engagements.</p></div>
        <div className="flex"><span className="text-[#FF3D22] font-bold mr-2">—</span><p>Thrive in a dynamic and innovative environment: Be part of a forward-thinking company based in Sweden's vibrant tech scene.</p></div>
      </div>
      <div className="text-center mt-8">
        <p className="text-lg font-semibold text-gray-800">
          Ready to bring your leadership and strategic expertise to the forefront of Fintech and ClimateTech innovation? Apply now to join the Ultiro team in Sweden!
        </p>
      </div>
    </div>
  </div>
</section>
              </motion.div>
            </div>
          </div>
        </div>
      </section>







      {/* Application Form */}
      <motion.section 
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        id="apply"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">APPLY NOW</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take the first step towards becoming Ultiro's Senior Consultant
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
                    placeholder="Tell us about your experience and why you're interested in this position"
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
            <Link to="/careers/venture-builder" className="group">
              <div className="bg-gray-50 rounded-lg p-6 transition-all duration-300 group-hover:shadow-lg">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#FF3D22]">Venture Builder</h3>
                <p className="text-gray-600 mb-4">Help ambitious tech companies establish and thrive in the Nordic region</p>
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

export default SeniorConsultant;
