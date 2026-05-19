import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function RequestService() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    organization: '',
    region: '',
    industry: '',
    message: '',
    consentData: false,
    consentMarketing: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const validateForm = () => {
    const required = ['firstName', 'lastName', 'email', 'organization', 'region', 'industry', 'message'];
    for (let field of required) {
      if (!formData[field] || formData[field].trim() === '') {
        setSubmitStatus({ type: 'error', message: `Please fill in ${field} (required).` });
        return false;
      }
    }
    if (!formData.consentData) {
      setSubmitStatus({ type: 'error', message: 'You must consent to data processing.' });
      return false;
    }
    if (!formData.email.includes('@')) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    const templateParams = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      organization: formData.organization,
      region: formData.region,
      industry: formData.industry,
      message: formData.message,
      consent_data: formData.consentData ? 'Yes' : 'No',
      consent_marketing: formData.consentMarketing ? 'Yes' : 'No',
    };

    try {
      // TERE DI HUYE VALUES - YAHAN LAGAI HAIN
      const serviceId = 'service_f2n83he';
      const templateId = 'template_7iold2b';
      const publicKey = 'xFQ6wv-e43cIUKd_D';

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log('Email sent:', response);
      setSubmitStatus({ type: 'success', message: 'Your request has been sent successfully! We will contact you soon.' });
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        organization: '',
        region: '',
        industry: '',
        message: '',
        consentData: false,
        consentMarketing: false,
      });
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send. Please try again later or contact us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#050a10] mt-12 sm:mt-14 md:mt-16 text-white flex flex-col md:flex-row relative">
        <Link to='/'>
          <button className="fixed top-20 sm:top-24 md:top-28 lg:top-32 left-3 sm:left-4 md:left-6 lg:left-8 flex items-center gap-1 sm:gap-2 bg-gray-500/20 p-2 sm:p-2.5 md:p-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors z-20">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
            Back
          </button>
        </Link>

        <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center space-y-8 sm:space-y-10 lg:space-y-12 z-10">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="text-blue-500 w-5 h-5 sm:w-6 sm:h-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" /></svg>
              </div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">Request for Services</h3>
            </div>
            <p className="text-gray-300 text-xl sm:text-2xl font-light leading-relaxed max-w-lg">
              Tell us a bit more about yourself, so we can get the ball rolling.
            </p>
          </div>

          {submitStatus.message && (
            <div className={`p-3 rounded-md ${submitStatus.type === 'success' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'} text-sm`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 lg:gap-y-10">
            <div className="border-b border-gray-700 py-2">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" disabled={isSubmitting} />
            </div>
            <div className="border-b border-gray-700 py-2">
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" disabled={isSubmitting} />
            </div>
            <div className="border-b border-gray-700 py-2">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" disabled={isSubmitting} />
            </div>
            <div className="border-b border-gray-700 py-2">
              <input type="text" name="organization" value={formData.organization} onChange={handleChange} placeholder="Organization*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" disabled={isSubmitting} />
            </div>
            <div className="border-b border-gray-700 py-2 flex items-center justify-between">
              <select name="region" value={formData.region} onChange={handleChange} className="bg-transparent w-full outline-none text-base sm:text-lg text-gray-500 appearance-none cursor-pointer" disabled={isSubmitting}>
                <option value="">Region*</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </div>
            <div className="border-b border-gray-700 py-2 flex items-center justify-between">
              <select name="industry" value={formData.industry} onChange={handleChange} className="bg-transparent w-full outline-none text-base sm:text-lg text-gray-500 appearance-none cursor-pointer" disabled={isSubmitting}>
                <option value="">Industry*</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Finance">Finance</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Retail">Retail</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Education">Education</option>
                <option value="Other">Other</option>
              </select>
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
            </div>
            <div className="sm:col-span-2 border-b border-gray-700 py-2">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can we help you?*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500 h-20 sm:h-24 resize-none" maxLength={1500} disabled={isSubmitting} />
              <div className="text-right text-xs text-gray-500">({formData.message.length}/1500)</div>
            </div>
            <div className="sm:col-span-2 space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group">
                <input type="checkbox" name="consentData" checked={formData.consentData} onChange={handleChange} className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-blue-500" disabled={isSubmitting} />
                <span className="text-gray-400 text-xs sm:text-sm leading-snug group-hover:text-gray-300">I consent to processing of my personal data entered above for Webraahi to contact me. *</span>
              </label>
              <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group">
                <input type="checkbox" name="consentMarketing" checked={formData.consentMarketing} onChange={handleChange} className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-blue-500" disabled={isSubmitting} />
                <span className="text-gray-400 text-xs sm:text-sm leading-snug group-hover:text-gray-300">I would like to receive details about products, services and events from Webraahi.</span>
              </label>
            </div>
            <div className="sm:col-span-2 text-gray-500 text-xs space-y-2 sm:space-y-4">
              <p>For further details on how your personal data will be processed and how your consent can be managed, refer to the <span className="text-white underline cursor-pointer">Privacy Notice</span> and <span className="text-white underline cursor-pointer">California Notice at Collection</span>.</p>
              <p>*Mandatory fields</p>
            </div>
            <div className="sm:col-span-2 pt-4 sm:pt-6">
              <button type="submit" disabled={isSubmitting} className={`bg-[#666] hover:bg-white hover:text-black text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-full font-medium transition-all text-base sm:text-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </div>
          </form>
        </div>

        <div className="hidden md:block w-1/2 relative">
          <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/c-testimonial-hero-v-AVS?fit=constrain,1&wid=799&hei=730" alt="hero" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050a10] via-transparent to-transparent"></div>
        </div>
      </div>
    </>
  );
}

export default RequestService;