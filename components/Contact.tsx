import React, { useState } from 'react';
import FadeIn from './FadeIn';

// Defines the possible states of the form submission process.
type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
    name: string;
    address: string;
    phone: string;
    service: string;
    message: string;
    hp: string; // Honeypot field for spam prevention
}

const serviceOptions = [
  'Cleaning & Sealing',
  'Polymeric Sanding',
  'Repair & Restoration',
  'Other / Not Sure'
];

/**
 * The Contact component provides a form for users to request a free estimate.
 * It includes client-side validation, handles form submission to a serverless backend
 * (Google Apps Script), and displays status messages (loading, success, error) to the user.
 * A honeypot field is included for basic spam prevention.
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', address: '', phone: '', service: '', message: '', hp: '' });
  // `status` tracks the current state of the form, used to show different UI elements (form, loading, success/error message).
  const [status, setStatus] = useState<FormStatus>('idle');
  // `errors` holds validation error messages for each field.
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Performs client-side validation on the form data.
   * @returns {boolean} - True if the form is valid, false otherwise.
   */
  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    // The form is valid if the errors object has no keys.
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setStatus('submitting');
    setErrors({});

    // IMPORTANT: Replace this with your actual Google Apps Script Web App URL.
    // See the README.md for instructions on how to set this up.
    const spreadsheetEndpoint = 'https://script.google.com/macros/s/AKfycbwc9FkU34nK0HT0LHEKUO9qnYtzzxzSz72E1fKWk5i2xGjUxEK26560pH_ugT2iZgAy/exec';

    // The data payload for the spreadsheet. We'll send the form data directly.
    const payload = formData;

    try {
      // This fetch request sends the data to a Google Apps Script endpoint.
      // The script is configured to accept JSON, add it to a Google Sheet,
      // and handle CORS to return a proper success/error response.
      const response = await fetch(spreadsheetEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      const result = await response.json();

      if (result.status !== 'success') {
        // If the script returns an error status, we'll handle it.
        throw new Error(result.message || 'An error occurred on the server.');
      }

      console.log('Form Submitted to Spreadsheet:', payload);
      setStatus('success');
      // Reset the form fields after successful submission.
      setFormData({ name: '', address: '', phone: '', service: '', message: '', hp: '' });

    } catch (error) {
      console.error('Submission failed:', error);
      setStatus('error');
    }
  };
  
  const resetForm = () => {
    setStatus('idle');
  }

  const renderStatusMessage = () => {
    if (status === 'success') {
      return (
        <div className="text-center py-10" role="alert" aria-live="polite">
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="mb-6">Your request has been submitted successfully. We will be in touch within 24 hours.</p>
          <button onClick={resetForm} className="bg-brand-gold text-brand-oxford-blue font-bold py-2 px-6 rounded-lg shadow-md hover:bg-brand-gold-light transition-colors">
            Send Another Message
          </button>
        </div>
      );
    }
    if (status === 'error') {
       return (
        <div className="text-center py-10" role="alert" aria-live="assertive">
          <h3 className="text-2xl font-bold mb-2 text-red-600">Submission Failed</h3>
          <p className="mb-6">We're sorry, but something went wrong. Please try again later or give us a call.</p>
           <button onClick={resetForm} className="bg-brand-gold text-brand-oxford-blue font-bold py-2 px-6 rounded-lg shadow-md hover:bg-brand-gold-light transition-colors">
            Try Again
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-brand-oxford-blue text-brand-powder-blue">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">Ready to Transform Your Space?</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-brand-powder-blue mt-4">
                Fill out the form below for a free, no-obligation estimate. One of our owners will get back to you within 24 hours.
              </p>
              <p className="text-lg text-brand-powder-blue mt-2">
                Prefer to talk? Call us for an even faster response: 
                <a href="tel:609-849-8869" className="font-bold text-white hover:text-brand-gold-light transition-colors whitespace-nowrap"> 609-849-8869</a>
              </p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={150}>
          <div className="max-w-2xl mx-auto bg-white text-brand-oxford-blue p-6 sm:p-8 rounded-lg shadow-2xl">
            {status === 'success' || status === 'error' ? renderStatusMessage() : (
              // The form itself.
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold mb-2">Full Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                    {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-bold mb-2">Service Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.address ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.address} aria-describedby={errors.address ? "address-error" : undefined} />
                  {errors.address && <p id="address-error" className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                {/* Service Type Selection */}
                <div className="mb-6">
                   <fieldset aria-describedby={errors.service ? "service-error" : undefined}>
                    <legend className="block text-sm font-bold mb-2">Service of Interest</legend>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                      {serviceOptions.map((option) => {
                        const optionId = option.replace(/[\s/&]+/g, '-').toLowerCase();
                        return (
                          <div key={option} className="flex items-center">
                            <input
                              type="radio"
                              id={optionId}
                              name="service"
                              value={option}
                              checked={formData.service === option}
                              onChange={handleChange}
                              className="h-4 w-4 text-brand-gold focus:ring-brand-powder-blue border-gray-300"
                            />
                            <label htmlFor={optionId} className="ml-3 block text-sm text-gray-800">
                              {option}
                            </label>
                          </div>
                        );
                      })}
                    </div>
                  </fieldset>
                  {errors.service && <p id="service-error" className="text-red-500 text-xs mt-2">{errors.service}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Tell Us About Your Project</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}></textarea>
                  {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Honeypot Field for Spam Protection */}
                <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
                    <input type="text" name="hp" value={formData.hp} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>

                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'} 
                    className="w-full group inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-oxford-blue font-bold py-3 px-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:bg-brand-gold-light hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-lg active:bg-brand-gold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-gold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {status === 'submitting' ? (
                      // Loading state UI.
                      <>
                        <svg className="animate-spin h-5 w-5 text-brand-oxford-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="status" aria-label="Loading">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
                      // Default button UI.
                      <>
                        <span>Submit Request</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
