import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { servicesData } from '../data/servicesData';

function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId] || servicesData["web-development"];

  return (
    <div className="relative bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section - Responsive */}
      <div className="sticky top-0 h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full z-0">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" 
          alt={service.title}
          className="h-full w-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-16 lg:p-20 pb-20 sm:pb-24 lg:pb-32">
          <div className="max-w-4xl space-y-2 sm:space-y-3 lg:space-y-4">
            <h4 className="text-blue-500 font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase text-xs sm:text-sm">Services / {service.title}</h4>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light leading-tight animate-fadeInSlow">
              {service.heroText}
            </h1>
          </div>
        </div>
      </div>

      {/* Content Section - Responsive */}
      <div className="relative z-10 bg-[#0a0a0a] min-h-screen p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32 border-t border-gray-900 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
          
          {/* Left Side */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Expertise that transforms.</h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
              {service.description}
            </p>
            <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base">
              Request this Service →
            </button>
          </div>

          {/* Right Side */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-gray-500 font-bold uppercase tracking-widest text-xs sm:text-sm">Key Offerings</h3>
            <div className="space-y-3 sm:space-y-4">
              {service.details.map((item, index) => (
                <div key={index} className="group border-b border-gray-800 pb-3 sm:pb-4 flex justify-between items-center cursor-default hover:border-blue-500 transition-colors">
                  <span className="text-lg sm:text-xl lg:text-2xl font-light text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Content - Responsive */}
        <div className="mt-20 sm:mt-28 lg:mt-40 text-center space-y-6 sm:space-y-8 lg:space-y-10 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tighter">Ready to start your project?</h2>
            <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
                Join the league of industry leaders who have scaled their businesses with our bespoke digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <button className="border border-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-white hover:text-black transition-all">Contact Us</button>
                <button className="bg-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-blue-700 transition-all">Free Consultation</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;