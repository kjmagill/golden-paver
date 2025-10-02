import React, { useState } from 'react';
import FadeIn from './FadeIn';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
    name: string;
    address: string;
    phone: string;
    message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', address: '', phone: '', message: '' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', address: '', phone: '', message: '' });
    }, 1500);
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
            {status === 'success' ? (
              <div className="text-center py-10" role="alert" aria-live="assertive">
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p>Your request has been submitted successfully. We will be in touch within 24 hours.</p>
              </div>
            ) : (
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
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-bold mb-2">Tell Us About Your Project</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-error" : undefined}></textarea>
                  {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div className="text-center">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'} 
                    className="w-full group inline-flex items-center justify-center gap-3 bg-brand-gold text-brand-oxford-blue font-bold py-3 px-8 rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:bg-brand-gold-light hover:shadow-2xl hover:-translate-y-1 active:scale-95 active:translate-y-0 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-gold disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-brand-oxford-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" role="status" aria-label="Loading">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Sending...</span>
                      </>
                    ) : (
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