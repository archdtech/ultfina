/**
 * Web3Forms Integration
 * Handles form submissions with file upload support
 * No backend required - direct API integration
 */

export interface Web3FormData {
  access_key: string;
  subject: string;
  from_name: string;
  from_email: string;
  message: string;
  phone?: string;
  position?: string;
  company?: string;
  [key: string]: string | number | boolean | undefined;
}

export interface Web3FormResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export class Web3FormsService {
  private static readonly ACCESS_KEY = 'ffe2efec-35be-401c-bf12-6aa56b81ba46';
  private static readonly API_URL = 'https://api.web3forms.com/submit';

  /**
   * Submit form with optional file attachment
   */
  static async submitForm(
    formData: Web3FormData,
    file?: File
  ): Promise<Web3FormResponse> {
    try {
      const formPayload = new FormData();
      
      // Add form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          formPayload.append(key, String(value));
        }
      });

      // Add file if provided
      if (file) {
        // Validate file size (10MB limit for free tier)
        if (file.size > 10 * 1024 * 1024) {
          throw new Error('File size must be less than 10MB');
        }

        // Validate file type
        const allowedTypes = [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'text/plain',
          'image/jpeg',
          'image/png'
        ];

        if (!allowedTypes.includes(file.type)) {
          throw new Error(
            'Invalid file type. Allowed types: PDF, DOC, DOCX, TXT, JPG, PNG'
          );
        }

        formPayload.append('attachment', file);
      }

      // Add spam protection
      formPayload.append('botcheck', '');

      const response = await fetch(this.API_URL, {
        method: 'POST',
        body: formPayload,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to submit form');
      }

      return {
        success: true,
        message: result.message || 'Form submitted successfully',
        data: result.data
      };

    } catch (error) {
      console.error('Web3Forms submission error:', error);
      
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit form'
      };
    }
  }

  /**
   * Submit contact form
   */
  static async submitContactForm(
    name: string,
    email: string,
    message: string,
    phone?: string,
    company?: string
  ): Promise<Web3FormResponse> {
    return this.submitForm({
      access_key: this.ACCESS_KEY,
      subject: `New Contact Form Submission from ${name}`,
      from_name: name,
      from_email: email,
      message,
      phone,
      company
    });
  }

  /**
   * Submit job application with resume
   */
  static async submitJobApplication(
    name: string,
    email: string,
    position: string,
    message: string,
    resume?: File
  ): Promise<Web3FormResponse> {
    return this.submitForm({
      access_key: this.ACCESS_KEY,
      subject: `Job Application: ${position} - ${name}`,
      from_name: name,
      from_email: email,
      position,
      message,
      resume: resume?.name || 'No resume attached'
    }, resume);
  }

  /**
   * Submit partnership application
   */
  static async submitPartnershipForm(
    name: string,
    email: string,
    company: string,
    message: string,
    phone?: string
  ): Promise<Web3FormResponse> {
    return this.submitForm({
      access_key: this.ACCESS_KEY,
      subject: `Partnership Application from ${company}`,
      from_name: name,
      from_email: email,
      company,
      message,
      phone
    });
  }
}