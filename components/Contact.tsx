import React, { useState } from 'react';
import FadeIn from './FadeIn';

// Defines the possible states of a form submission process.
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
  'Deep Cleaning',
  'Polymeric Sanding',
  'Paver Sealing',
  'Other / Not Sure'
];

/**
 * The Contact component provides a form for users to request a free estimate.
 * It includes real-time, client-side validation, handles form submission to a serverless backend
 * (Google Apps Script), and displays status messages (loading, success, error) to the user.
 * A honeypot field is included for basic spam prevention.
 */
const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', address: '', phone: '', service: '', message: '', hp: '' });
  // `status` tracks the current state of the form, used to show different UI elements (form, loading, success/error message).
  const [status, setStatus] = useState<FormStatus>('idle');
  // `errors` holds validation error messages for each field.
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  // `touched` tracks which fields the user has interacted with.
  const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

  /**
   * Performs validation on the entire form data object.
   * @param {FormData} data - The form data to validate.
   * @returns {Partial<Record<keyof FormData, string>>} - An object containing any validation errors.
   */
  const validateForm = (data: FormData): Partial<Record<keyof FormData, string>> => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!data.name.trim()) {
        newErrors.name = 'Name is required';
    } else if (data.name.trim().length > 50) {
        newErrors.name = 'Name must be 50 characters or less.';
    }

    if (!data.address.trim()) newErrors.address = 'Address is required';
    
    const phoneRegex = /^(\+?1\s*[-\/\.]?)?(\(?\d{3}\)?)[-\s\/\.]?(\d{3})[-\s\/\.]?(\d{4})\s?((?:#|x\.?|ext\.?|extension)\s*\d+)?$/;
    if (!data.phone.trim()) {
        newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(data.phone)) {
        newErrors.phone = 'Please enter a valid US phone number (e.g., 123-456-7890 x123)';
    }

    if (!data.service) {
        newErrors.service = 'Please select a service';
    } else if (!serviceOptions.includes(data.service)) {
        newErrors.service = 'Please select a valid service';
    }

    if (!data.message.trim()) {
        newErrors.message = 'Message is required';
    } else if (data.message.trim().length > 1000) {
        newErrors.message = 'Message must be 1000 characters or less.';
    }
    
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    // Real-time validation: update errors as user types
    setErrors(validateForm(updatedFormData));
  };
  
  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof FormData; value: string };
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    // Validate when a radio option is selected
    setErrors(validateForm(updatedFormData));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target as { name: keyof FormData };
    // Mark field as touched to control when error messages are displayed
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    
    // Mark all fields as touched to display errors for any untouched fields on submit attempt
    setTouched({ name: true, address: true, phone: true, service: true, message: true });

    if (Object.keys(validationErrors).length > 0) {
        return; // Stop submission if there are errors
    }

    // Honeypot check: If this field has a value, it's likely a bot.
    if (formData.hp) {
      console.log('Honeypot triggered. Submission blocked.');
      setStatus('success'); // Pretend it worked to not alert the bot.
      return;
    }

    setStatus('submitting');

    const spreadsheetEndpoint = 'https://script.google.com/macros/s/AKfycbzm5mq7fzV63JkxbTrSfBIIQSJUUH6dRijRIy0F2pMmR-oC4YNrZl7bA-HWEG94L_9c/exec';

    const { hp, ...payload } = formData;
    
    // Use URLSearchParams to send data as 'application/x-www-form-urlencoded'.
    // This is a standard way to post form data and is easily parsed by Google Apps Script.
    const formBody = new URLSearchParams(payload as Record<string, string>);

    try {
      // We still use 'no-cors' mode. This is a "fire and forget" method.
      // We can't confirm success from the server, but this is a common pattern for
      // Google Apps Script endpoints to avoid CORS issues. We will assume success
      // if the network request itself doesn't fail.
      await fetch(spreadsheetEndpoint, {
        method: 'POST',
        mode: 'no-cors',
        body: formBody,
        // No 'Content-Type' header is needed; the browser sets it for URLSearchParams.
      });

      setStatus('success');
      setFormData({ name: '', address: '', phone: '', service: '', message: '', hp: '' });
      setTouched({});

    } catch (error) {
      console.error('Submission failed due to a network error:', error);
      setStatus('error');
    }
  };
  
  const resetForm = () => {
    setStatus('idle');
  }

  const renderStatusMessage = () => {
    if (status === 'success') {
      return (
        <div className="text-center py-10 flex flex-col items-center" role="alert" aria-live="polite">
          <div className="mb-4">
            <svg className="w-16 h-16 text-brand-gold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
              <circle 
                className="animate-scale-in opacity-0 scale-50 origin-center" 
                cx="26" cy="26" r="25" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
              />
              <path 
                className="animate-draw-check" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="M14 27l5 5 15-15" 
              />
            </svg>
          </div>
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
          <p className="mb-6">We're sorry, but something went wrong. This can sometimes be caused by pop-up or ad blockers. Please try disabling them, refresh the page, and submit the form again. If the issue persists, please try again later or give us a call.</p>
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
                <a href="tel:609-408-5000" className="font-bold text-white hover:text-brand-gold-light transition-colors whitespace-nowrap"> 609-408-5000</a>
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
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} maxLength={50} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
                    {touched.name && errors.name && <p id="name-error" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} />
                    {touched.phone && errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="address" className="block text-sm font-bold mb-2">Service Address</label>
                  <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} onBlur={handleBlur} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.address ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.address} aria-describedby={errors.address ? "address-error" : undefined} />
                  {touched.address && errors.address && <p id="address-error" className="text-red-500 text-xs mt-1">{errors.address}</p>}
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
                              onChange={handleRadioChange}
                              onBlur={handleBlur}
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
                  {touched.service && errors.service && <p id="service-error" className="text-red-500 text-xs mt-2">{errors.service}</p>}
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Tell Us About Your Project</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} rows={5} maxLength={1000} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}></textarea>
                  {touched.message && errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
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
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
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