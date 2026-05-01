import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const contactCards = [
    {
        title: "Request for Services",
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
            </svg>
        ),
        link: '/requestService'
    },
    {
        title: "Linkedin",
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"></path>
            </svg>
        ),
        link: '/'
    },
    {
        title: "Media contacts",
        icon: (
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 18h.01" /><path d="M7 21h10" /><path d="M8 21v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4" /><path d="M10 5c0-1.1.9-2 2-2s2 .9 2 2a5 5 0 0 1 5 5v3.1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10a5 5 0 0 1 5-5z" />
            </svg>
        ),
        link: '/'
    },
    
];

const footerLinks = [
    "Analyst relations",
    "CSR",
    "Partnerships",
    "Website feedback"
];

function Contact() {
    return (
        <div className="bg-black min-h-screen text-white pt-20 sm:pt-24 md:pt-28 lg:pt-32 px-4 sm:px-6 md:px-12 lg:px-20">
            <Navbar />

            <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 lg:space-y-20">

                {/* Header Section - Responsive */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-light tracking-tight">
                        What's on your mind?
                    </h1>
                    <div className="max-w-md pt-2 md:pt-4">
                        <p className="text-gray-400 text-lg sm:text-xl md:text-2xl leading-relaxed">
                            We're here to help! Tell us what you're looking for and we'll get you connected to the right people.
                        </p>
                    </div>
                </div>

                {/* Action Cards - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    {contactCards.map((card, idx) => (
                        <Link key={idx} to={card.link}>
                            <div
                                className="border border-gray-800 p-6 sm:p-8 lg:p-12 flex flex-col items-center rounded-lg justify-center gap-4 sm:gap-6 hover:bg-gray-300/10 hover:border-gray-600 transition-all cursor-pointer group h-[120px] sm:h-[140px] lg:h-[150px]"
                            >
                                <div className="group-hover:scale-110 transition-transform duration-300">
                                    {card.icon}
                                </div>
                                <h3 className="text-base sm:text-lg lg:text-xl font-medium text-center">{card.title}</h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Footer Links Section - Responsive */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
                    <h4 className="text-gray-500 text-lg sm:text-xl font-medium">Looking for something else?</h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                        {footerLinks.map((link, idx) => (
                            <button
                                key={idx}
                                className="flex items-center justify-between group border-b border-transparent hover:border-gray-700 pb-2 transition-all"
                            >
                                <span className="text-xl sm:text-2xl font-light group-hover:text-blue-400 transition-colors">{link}</span>
                                <div className="bg-white rounded-full p-1.5 sm:p-2 group-hover:bg-blue-500 transition-colors">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 5 7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;