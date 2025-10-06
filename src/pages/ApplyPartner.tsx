import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ApplyPartner = () => {
  const initialFormData = {
    organizationName: '',
    website: '',
    organizationType: 'Venture Capital',
    focusArea: 'Fintech',
    partnershipGoals: '',
    name: '',
    jobTitle: '',
    email: '',
    formType: 'Partner Application',
    emailConfigType: 'founder_group', // Use the same config as founder application
    sourcePage: 'Apply-Partner Page'
  };

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | ''; message: string }>({ type: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission started');
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Make sure all required fields are filled
    if (!formData.name || !formData.email || !formData.organizationName || !formData.partnershipGoals) {
      console.log('Validation failed:', { 
        name: formData.name, 
        email: formData.email, 
        organizationName: formData.organizationName, 
        partnershipGoals: formData.partnershipGoals 
      });
      setSubmitStatus({ 
        type: 'error', 
        message: 'Please fill in all required fields: Name, Email, Organization Name, and Partnership Goals.' 
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Create FormData for Web3Forms submission
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', 'ffe2efec-35be-401c-bf12-6aa56b81ba46');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', `Partner Application: ${formData.organizationName}`);
      formDataToSend.append('message', `
Organization Name: ${formData.organizationName}
Website: ${formData.website || 'Not provided'}
Organization Type: ${formData.organizationType}
Focus Area: ${formData.focusArea}
Job Title: ${formData.jobTitle || 'Not provided'}

Partnership Goals:
${formData.partnershipGoals}
      `.trim());
      formDataToSend.append('from_name', 'Ultiro Partnerships');
      formDataToSend.append('reply_to', formData.email);

      console.log('Submitting partner application via Web3Forms');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Partner application submitted successfully:', result);
        setFormData({...initialFormData});
        setSubmitStatus({ type: 'success', message: 'Application submitted successfully! We will be in touch soon.' });
      } else {
        const errorResult = await response.json();
        throw new Error(errorResult.message || 'Failed to submit application');
      }
    } catch (error: any) {
      console.error('Exception during form submission:', error);
      setSubmitStatus({ type: 'error', message: error.message || 'An unexpected error occurred.' });
    } finally {
      console.log('Form submission completed');
      setIsSubmitting(false);
    }
  };
  return (
    <div className="pt-16">
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
            Partner With Us to<br />
            Drive Innovation
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Join our network of venture builders, investors, and innovation partners to create lasting impact in the Nordic ecosystem and beyond.
          </motion.p>
        </div>
      </motion.section>

      {/* Application Form */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-white p-8 border border-gray-200 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Partner Application</h2>
            {submitStatus.type === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                <h3 className="text-xl font-medium text-green-800 mb-2">Application Submitted!</h3>
                <p className="text-green-700 mb-4">{submitStatus.message}</p>
                <button 
                  onClick={() => setSubmitStatus({ type: '', message: '' })}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                  placeholder="Your organization name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                  placeholder="https://"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Type
                </label>
                <select 
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                >
                  <option value="Venture Capital">Venture Capital</option>
                  <option value="Corporate Innovation">Corporate Innovation</option>
                  <option value="Government Agency">Government Agency</option>
                  <option value="Trade Organization">Trade Organization</option>
                  <option value="Innovation Hub">Innovation Hub</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Primary Focus Area
                </label>
                <select 
                  name="focusArea"
                  value={formData.focusArea}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                >
                  <option value="Fintech">Fintech</option>
                  <option value="ClimateTech">ClimateTech</option>
                  <option value="AI & ML">AI & ML</option>
                  <option value="Enterprise Software">Enterprise Software</option>
                  <option value="Multiple Sectors">Multiple Sectors</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How would you like to partner with us?
                </label>
                <textarea
                  name="partnershipGoals"
                  value={formData.partnershipGoals}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946] h-32"
                  placeholder="Tell us about your goals and how you'd like to collaborate..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                  placeholder="Your role in the organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E63946]"
                  placeholder="your@email.com"
                  required
                />
              </div>

              {submitStatus.type === 'error' && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-md mb-4">
                  <p className="text-red-700">{submitStatus.message}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center px-8 py-3 ${isSubmitting ? 'bg-gray-400' : 'bg-[#E63946] hover:bg-red-700'} text-white transition-colors rounded-full`}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                {!isSubmitting && <ArrowRight className="ml-2" size={20} />}
              </button>
            </form>
            )}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default ApplyPartner;
