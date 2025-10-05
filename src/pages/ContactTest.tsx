import React, { useState } from 'react';

const ContactTest: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    // Prevent default form behavior to let the form-api-client handle it
    e.preventDefault();
    
    // The form-api-client will handle the submission
    // We'll just update our UI state after a short delay
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us - Test Form</h1>
      
      {formSubmitted ? (
        <div className="bg-green-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-green-800">Thank you for your submission!</h2>
          <p className="text-green-700">We'll get back to you soon.</p>
          <p className="text-green-700 mt-2">For testing purposes, the proxy script will show an alert with the form data.</p>
          
          <button 
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setFormSubmitted(false)}
          >
            Send another message
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <form 
            data-api-form
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block mb-1">First Name *</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  className="w-full border p-2 rounded" 
                  required 
                />
              </div>
              
              <div>
                <label htmlFor="lastName" className="block mb-1">Last Name *</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  className="w-full border p-2 rounded" 
                  required 
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-1">Email *</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="w-full border p-2 rounded" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-1">Subject *</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                className="w-full border p-2 rounded" 
                required 
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block mb-1">Message *</label>
              <textarea 
                id="description" 
                name="description" 
                className="w-full border p-2 rounded h-32" 
                required 
                minLength={20}
              ></textarea>
              <p className="text-sm text-gray-500 mt-1">Minimum 20 characters</p>
            </div>
            
            <div>
              <label htmlFor="company" className="block mb-1">Company</label>
              <input 
                type="text" 
                id="company" 
                name="company" 
                className="w-full border p-2 rounded" 
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block mb-1">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full border p-2 rounded" 
              />
            </div>
            
            <input type="hidden" name="requestType" value="general" />
            
            <div>
              <button 
                type="submit" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactTest;
