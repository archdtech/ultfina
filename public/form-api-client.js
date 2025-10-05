/**
 * Ultiro Form API Client
 * Automatically connects forms to the Ultiro backend API system
 * Version 1.0.0
 */

(function() {
  // Store the FormAPI in the global scope
  window.FormAPI = {
    submit: submitForm,
    validateForm: validateForm,
    getFormData: getFormData
  };

  // Initialize when DOM is fully loaded
  document.addEventListener('DOMContentLoaded', initForms);

  /**
   * Initialize all forms with the data-api-form attribute
   */
  function initForms() {
    const forms = document.querySelectorAll('form[data-api-form]');

    forms.forEach(form => {
      // Prevent default form submission
      form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = getFormData(form);

        // Validate form data
        const validationResult = validateForm(formData);

        if (validationResult.valid) {
          // Show loading state
          setFormLoadingState(form, true);

          // Submit form data
          submitForm(formData)
            .then(result => {
              if (result.success) {
                showSuccessMessage(form, result);
              } else {
                showErrorMessage(form, result.error || 'An error occurred during submission.');
              }
            })
            .catch(error => {
              showErrorMessage(form, 'Network error. Please try again.');
              console.error('Form submission error:', error);
            })
            .finally(() => {
              setFormLoadingState(form, false);
            });
        } else {
          showErrorMessage(form, validationResult.error);
        }
      });
    });
  }

  /**
   * Get form data from a form element
   * @param {HTMLFormElement} form - The form element
   * @returns {Object} - Form data as an object
   */
  function getFormData(form) {
    const formData = new FormData(form);
    const data = {};

    // Convert FormData to a plain object
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }

    return data;
  }

  /**
   * Validate form data
   * @param {Object} data - Form data to validate
   * @returns {Object} - Validation result {valid: boolean, error: string}
   */
  function validateForm(data) {
    // Check required fields based on request type
    const requestType = data.requestType || 'general';

    // Email is the only universally required field
    if (!data.email) {
      return {
        valid: false,
        error: 'Please provide an email address.'
      };
    }

    // Check for name in various formats
    const hasName = data.name || data.fullName || (data.firstName && data.lastName);
    if (!hasName) {
      return {
        valid: false,
        error: 'Please provide your name.'
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return {
        valid: false,
        error: 'Please enter a valid email address.'
      };
    }

    // Validate URL fields if present
    if (data.website && !isValidUrl(data.website)) {
      return {
        valid: false,
        error: 'Please enter a valid website URL.'
      };
    }

    if (data.linkedinProfile && !isValidUrl(data.linkedinProfile)) {
      return {
        valid: false,
        error: 'Please enter a valid LinkedIn profile URL.'
      };
    }

    // Validate specific fields based on request type
    switch (requestType) {
      case 'career':
        if (!data.position) {
          return {
            valid: false,
            error: 'Please select a position.'
          };
        }
        break;

      case 'founder':
        // More flexible validation for founder forms
        // Only validate fields if they exist in the form
        if (data.companyGoals !== undefined && data.companyGoals.length < 10) {
          return {
            valid: false,
            error: 'Please provide more detailed company goals.'
          };
        }

        if (data.description !== undefined && data.description.length < 10) {
          return {
            valid: false,
            error: 'Please provide more detailed information.'
          };
        }
        break;

      case 'partner':
        // More flexible validation for partner forms
        if (!data.organizationName) {
          return {
            valid: false,
            error: 'Please provide organization name.'
          };
        }

        // Only validate fields if they exist in the form
        if (data.partnershipGoals !== undefined && data.partnershipGoals.length < 10) {
          return {
            valid: false,
            error: 'Please provide more detailed partnership goals.'
          };
        }

        if (data.description !== undefined && data.description.length < 10) {
          return {
            valid: false,
            error: 'Please provide more detailed information.'
          };
        }
        break;

      default: // general contact
        // For general contact forms, be more flexible with field names
        const hasSubject = data.subject || data.topic || data.title;
        if (!hasSubject) {
          return {
            valid: false,
            error: 'Please provide a subject.'
          };
        }

        // Check for message in various field names
        const hasMessage = data.description || data.message || data.content || data.details;
        if (!hasMessage) {
          return {
            valid: false,
            error: 'Please provide a message.'
          };
        }
    }

    return { valid: true };
  }

  /**
   * Submit form data to the API
   * @param {Object} data - Form data to submit
   * @returns {Promise<Object>} - API response
   */
  async function submitForm(data) {
    try {
      console.log('Submitting form data to /api/send-email:', data);
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', [...response.headers.entries()]);

      // Check if response is ok (status in the range 200-299)
      if (response.ok) {
        try {
          const result = await response.json();
          console.log('Form submission successful:', result);
          return { success: true, message: result.message || 'Form submitted successfully!' };
        } catch (jsonError) {
          console.warn('Could not parse JSON response despite OK status:', jsonError);
          // Try to get text response
          try {
            const textResponse = await response.text();
            console.log('Text response:', textResponse);
          } catch (e) {
            console.error('Could not get text response:', e);
          }
          // Still consider it a success if the status was OK
          return { success: true, message: 'Form submitted successfully!' };
        }
      } else {
        // Handle error response
        try {
          const errorData = await response.json();
          console.error('Form submission error:', response.status, errorData);
          return { 
            success: false, 
            error: errorData.message || 'Form submission failed.', 
            details: errorData 
          };
        } catch (jsonError) {
          // If response is not JSON, try to get text
          try {
            const errorText = await response.text();
            console.error('Form submission error (text):', response.status, errorText);
            return { success: false, error: errorText || 'Form submission failed.' };
          } catch (textError) {
            console.error('Could not parse error response', textError);
            return { success: false, error: `Server error (${response.status})` };
          }
        }
      }
    } catch (error) {
      console.error('Network error during form submission:', error);
      return { success: false, error: 'Network error. Please try again.', details: error.toString() };
    }
  }

  /**
   * Show a success message after form submission
   * @param {HTMLFormElement} form - The form element
   * @param {Object} result - API response
   */
  function showSuccessMessage(form, result) {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'form-api-success';
    successMessage.innerHTML = `
      <h3>Thank You!</h3>
      <p>Your submission has been received.</p>
      <p>Reference ID: ${result.referenceId}</p>
    `;

    // Replace form with success message
    form.innerHTML = '';
    form.appendChild(successMessage);
    form.classList.add('form-submitted');
  }

  /**
   * Show an error message for form validation or submission errors
   * @param {HTMLFormElement} form - The form element
   * @param {string} message - Error message
   */
  function showErrorMessage(form, message) {
    // Remove any existing error messages
    const existingError = form.querySelector('.form-api-error');
    if (existingError) {
      existingError.remove();
    }

    // Create error message element
    const errorMessage = document.createElement('div');
    errorMessage.className = 'form-api-error';
    errorMessage.innerHTML = `<p>${message}</p>`;

    // Insert error message before the submit button
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.parentNode.insertBefore(errorMessage, submitButton);
    } else {
      form.appendChild(errorMessage);
    }
  }

  /**
   * Set the loading state of the form
   * @param {HTMLFormElement} form - The form element
   * @param {boolean} isLoading - Whether the form is loading
   */
  function setFormLoadingState(form, isLoading) {
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      if (isLoading) {
        submitButton.disabled = true;
        submitButton.dataset.originalText = submitButton.innerHTML;
        submitButton.innerHTML = 'Submitting...';
      } else {
        submitButton.disabled = false;
        if (submitButton.dataset.originalText) {
          submitButton.innerHTML = submitButton.dataset.originalText;
        }
      }
    }

    // Disable all form inputs during loading
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
      input.disabled = isLoading;
    });
  }

  /**
   * Validate a URL
   * @param {string} url - URL to validate
   * @returns {boolean} - Whether the URL is valid
   */
  function isValidUrl(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }
})();
