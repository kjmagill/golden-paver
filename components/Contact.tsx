
import React, { useState } from 'react';

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
    <section id="contact" className="py-20 bg-brand-oxford-blue text-brand-powder-blue">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-display text-white">Ready to Transform Your Space?</h2>
          <p className="text-lg text-brand-powder-blue mt-4 max-w-2xl mx-auto">
            Fill out the form below for a free, no-obligation estimate. One of our owners will call you back within 24 hours.
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white text-brand-oxford-blue p-8 rounded-lg shadow-2xl">
          {status === 'success' ? (
            <div className="text-center py-10">
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p>Your request has been submitted successfully. We will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold mb-2">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.name ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="address" className="block text-sm font-bold mb-2">Service Address</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.address ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required />
                {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold mb-2">Tell Us About Your Project</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 ${errors.message ? 'border-red-500 focus:ring-red-400' : 'border-gray-300 focus:ring-brand-powder-blue'}`} required></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>
              <div className="text-center">
                <button type="submit" disabled={status === 'submitting'} className="w-full bg-brand-gold hover:bg-brand-gold-light text-brand-oxford-blue font-bold py-3 px-8 rounded-lg shadow-xl transition-transform transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed">
                  {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;