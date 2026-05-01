import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';

function RequestService() {
    const [message, setMessage] = useState('');

    return (
        <>
          <Navbar/>
            <div className="min-h-screen bg-[#050a10] mt-12 sm:mt-14 md:mt-16 text-white flex flex-col md:flex-row relative">
                {/* Back Button - Responsive positioning */}
                <Link to='/contact'>
                    <button className="fixed top-20 sm:top-24 md:top-28 lg:top-32 left-3 sm:left-4 md:left-6 lg:left-8 flex items-center gap-1 sm:gap-2 bg-gray-500/20 p-2 sm:p-2.5 md:p-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-widest hover:text-blue-400 transition-colors z-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        Back
                    </button>
                </Link>

                {/* Left Content: Form Section - Responsive padding */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-16 lg:p-24 flex flex-col justify-center space-y-8 sm:space-y-10 lg:space-y-12 z-10">

                    {/* Header Section */}
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

                    {/* Form Grid - Responsive */}
                    <form className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 lg:gap-x-12 gap-y-6 sm:gap-y-8 lg:gap-y-10">
                        <div className="border-b border-gray-700 py-2">
                            <input type="text" placeholder="First name*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" />
                        </div>
                        <div className="border-b border-gray-700 py-2">
                            <input type="text" placeholder="Last name*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" />
                        </div>
                        <div className="border-b border-gray-700 py-2">
                            <input type="email" placeholder="Email*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" />
                        </div>
                        <div className="border-b border-gray-700 py-2">
                            <input type="text" placeholder="Organization*" className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500" />
                        </div>
                        <div className="border-b border-gray-700 py-2 flex items-center justify-between">
                            <select className="bg-transparent w-full outline-none text-base sm:text-lg text-gray-500 appearance-none cursor-pointer">
                                <option value="">Region*</option>
                                <option value="india">India</option>
                                <option value="usa">USA</option>
                            </select>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                        </div>
                        <div className="border-b border-gray-700 py-2 flex items-center justify-between">
                            <select className="bg-transparent w-full outline-none text-base sm:text-lg text-gray-500 appearance-none cursor-pointer">
                                <option value="">Industry*</option>
                                <option value="it">Information Technology</option>
                                <option value="finance">Finance</option>
                            </select>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                        </div>
                        <div className="sm:col-span-2 border-b border-gray-700 py-2">
                            <textarea
                                placeholder="How can we help you?*"
                                className="bg-transparent w-full outline-none text-base sm:text-lg placeholder:text-gray-500 h-20 sm:h-24 resize-none"
                                maxLength={1500}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <div className="text-right text-xs text-gray-500">({message.length}/1500)</div>
                        </div>
                        <div className="sm:col-span-2 space-y-3 sm:space-y-4 pt-2 sm:pt-4">
                            <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group">
                                <input type="checkbox" className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-blue-500" />
                                <span className="text-gray-400 text-xs sm:text-sm leading-snug group-hover:text-gray-300">
                                    I consent to processing of my personal data entered above for Webraahi to contact me. *
                                </span>
                            </label>
                            <label className="flex items-start gap-2 sm:gap-3 cursor-pointer group">
                                <input type="checkbox" className="mt-1 w-3.5 h-3.5 sm:w-4 sm:h-4 accent-blue-500" />
                                <span className="text-gray-400 text-xs sm:text-sm leading-snug group-hover:text-gray-300">
                                    I would like to receive details about products, services and events from Webraahi.
                                </span>
                            </label>
                        </div>
                        <div className="sm:col-span-2 text-gray-500 text-xs space-y-2 sm:space-y-4">
                            <p>
                                For further details on how your personal data will be processed and how your consent can be managed, refer to the <span className="text-white underline cursor-pointer">Privacy Notice</span> and <span className="text-white underline cursor-pointer">California Notice at Collection</span>.
                            </p>
                            <p>*Mandatory fields</p>
                        </div>
                        <div className="sm:col-span-2 pt-4 sm:pt-6">
                            <button className="bg-[#666] hover:bg-white hover:text-black text-white px-8 sm:px-10 lg:px-12 py-2.5 sm:py-3 rounded-full font-medium transition-all text-base sm:text-lg">
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right Content: Image - Hidden on mobile */}
                <div className="hidden md:block w-1/2 relative">
                    <img src="https://s7ap1.scene7.com/is/image/TCSCOMprod/c-testimonial-hero-v-AVS?fit=constrain,1&wid=799&hei=730" alt="hero" className="h-full w-full object-cover opacity-50" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050a10] via-transparent to-transparent"></div>
                </div>
            </div>
        </>
    );
}

export default RequestService;