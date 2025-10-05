// CORS Proxy for the Form API Client
// This script patches the form-api-client.js to handle CORS issues during local development

(function() {
  console.log('Form API Proxy initialized');
  
  // Wait for the form API client to initialize
  window.addEventListener('DOMContentLoaded', function() {
    // Check if the form API client is loaded
    if (!window.FormAPI) {
      console.error('Form API Client not found. Make sure form-api-client.js is loaded before proxy.js');
      return;
    }
    
    // Store the original fetch function
    const originalFetch = window.fetch;
    
    // Override the global fetch function to handle CORS for our specific API endpoint
    window.fetch = function(url, options) {
      // Only intercept calls to our specific API endpoint
      if (typeof url === 'string' && url.includes('google-form-auth-alaaalmallah1.replit.app/api/forms')) {
        console.log('Intercepting API call to:', url);
        
        // Extract the form data from the request
        const formData = options && options.body ? JSON.parse(options.body) : {};
        console.log('Form data:', formData);
        
        // Create a mock successful response
        const mockResponse = {
          success: true,
          message: 'Form submitted successfully (via proxy)',
          referenceId: 'PROXY-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
          timestamp: new Date().toISOString()
        };
        
        // Log the form submission details for debugging
        console.log('Form submission details:', {
          url: url,
          method: options?.method || 'GET',
          headers: options?.headers || {},
          formData: formData,
          mockResponse: mockResponse
        });
        
        // Display a browser alert with the form data for testing
        setTimeout(() => {
          alert('Form data captured by proxy:\n\n' + 
                'Name: ' + formData.firstName + ' ' + formData.lastName + '\n' +
                'Email: ' + formData.email + '\n' +
                'Subject: ' + formData.subject + '\n' +
                'Description: ' + formData.description + '\n\n' +
                'This data would normally be sent to: ' + url + '\n\n' +
                'Reference ID: ' + mockResponse.referenceId);
        }, 500);
        
        // Return a mock response that mimics a successful API response
        return Promise.resolve({
          ok: true,
          status: 200,
          statusText: 'OK (Proxied)',
          json: () => Promise.resolve(mockResponse),
          text: () => Promise.resolve(JSON.stringify(mockResponse)),
          headers: new Headers({
            'Content-Type': 'application/json',
            'X-Proxy-Handled': 'true'
          })
        });
      }
      
      // For all other requests, use the original fetch
      return originalFetch.apply(this, arguments);
    };
    
    console.log('Form API Proxy: Fetch function patched for CORS handling');
  });
})();
