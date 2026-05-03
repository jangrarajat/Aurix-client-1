import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { servicesData } from '../data/servicesData';

function ServicePage() {
  const { serviceId } = useParams();
  const service = servicesData[serviceId] || servicesData["web-development"];
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="relative bg-black min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <div className="sticky top-0 h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full z-0">
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          alt={service.title}
          className="h-full w-full object-cover grayscale opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-16 lg:p-20 pb-20 sm:pb-24 lg:pb-32">
          <div className="max-w-4xl space-y-2 sm:space-y-3 lg:space-y-4">
            <h4 className="text-blue-500 font-bold tracking-[0.2em] lg:tracking-[0.3em] uppercase text-xs sm:text-sm">
              Services / {service.title}
            </h4>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-light leading-tight animate-fadeInSlow">
              {service.heroText}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 bg-[#0a0a0a] min-h-screen border-t border-gray-900 shadow-[0_-50px_100px_rgba(0,0,0,0.8)]">

        {/* ── Section 1: Description + Key Offerings ── */}
        <div className="p-6 sm:p-10 md:p-16 lg:p-24 xl:p-32">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-medium tracking-tight">Expertise that transforms.</h2>
              <p className="text-gray-400 text-base sm:text-lg lg:text-xl leading-relaxed">
                {service.description}
              </p>
              <button className="bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all text-sm sm:text-base">
                Request this Service →
              </button>
            </div>
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
        </div>

        {/* ── Section 2: Stats ── */}
        {service.stats && (
          <div className="border-t border-gray-900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
              {service.stats.map((stat, i) => (
                <div key={i} className="text-center space-y-2">
                  <div className="text-4xl sm:text-5xl lg:text-6xl font-light text-white">{stat.value}</div>
                  <div className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Section 3: Our Process ── */}
        {service.process && (
          <div className="border-t border-gray-900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 sm:mb-16">
                <p className="text-blue-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">How We Work</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">Our proven process.</h2>
              </div>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <div key={i} className="group grid grid-cols-[auto_1fr] gap-6 sm:gap-10 border-b border-gray-900 py-8 sm:py-10 hover:border-blue-500/30 transition-colors">
                    <div className="text-5xl sm:text-6xl font-light text-gray-800 group-hover:text-blue-500/40 transition-colors leading-none pt-1">
                      {step.step}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl sm:text-2xl font-medium text-white group-hover:text-blue-400 transition-colors">{step.title}</h3>
                      <p className="text-gray-500 text-base sm:text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Section 4: Technologies ── */}
        {service.technologies && (
          <div className="border-t border-gray-900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20">
            <div className="max-w-6xl mx-auto">
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-8 sm:mb-10">Tech Stack & Tools</p>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {service.technologies.map((tech, i) => (
                  <span key={i} className="border border-gray-800 text-gray-300 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-sm sm:text-base hover:border-blue-500 hover:text-white transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Section 5: Why Choose Us ── */}
        {service.whyUs && (
          <div className="border-t border-gray-900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 sm:mb-16">
                <p className="text-blue-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">Our Advantage</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">Why businesses choose us.</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                {service.whyUs.map((point, i) => (
                  <div key={i} className="border border-gray-900 rounded-2xl p-6 sm:p-8 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center mb-4 group-hover:bg-blue-500/40 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-medium mb-2 text-white">{point.title}</h3>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{point.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Section 6: Case Study ── */}
        {service.caseStudy && (
          <div className="border-t border-gray-900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-24">
            <div className="max-w-6xl mx-auto">
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-12 sm:mb-16">Real Results</p>
              <div className="bg-[#111111] border border-gray-800 rounded-3xl p-8 sm:p-12 lg:p-16">
                <div className="inline-block border border-gray-700 rounded-full px-4 py-1.5 text-gray-400 text-xs sm:text-sm mb-8">
                  Case Study — {service.caseStudy.client}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
                  <div className="space-y-3">
                    <div className="text-gray-600 uppercase tracking-widest text-xs font-bold">The Challenge</div>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{service.caseStudy.challenge}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-gray-600 uppercase tracking-widest text-xs font-bold">Our Solution</div>
                    <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{service.caseStudy.solution}</p>
                  </div>
                  <div className="space-y-3">
                    <div className="text-blue-500 uppercase tracking-widest text-xs font-bold">The Result</div>
                    <p className="text-white text-base sm:text-lg leading-relaxed font-medium">{service.caseStudy.result}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── Section 7: FAQ ── */}
        {service.faqs && (
          <div className="border-t border-gray-900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12 sm:mb-16">
                <p className="text-blue-500 font-bold uppercase tracking-widest text-xs sm:text-sm mb-3">Got Questions?</p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">Frequently asked questions.</h2>
              </div>
              <div className="space-y-0">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-900">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full text-left py-6 sm:py-8 flex justify-between items-start gap-6 group"
                    >
                      <span className="text-base sm:text-lg lg:text-xl text-gray-200 group-hover:text-white transition-colors font-light">
                        {faq.q}
                      </span>
                      <span className={`text-blue-500 text-2xl flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-45' : ''}`}>
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <div className="pb-6 sm:pb-8">
                        <p className="text-gray-500 text-base sm:text-lg leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── Section 8: CTA ── */}
        <div className="border-t border-gray-900 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 py-20 sm:mt-8 lg:mt-12 text-center space-y-6 sm:space-y-8 lg:space-y-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tighter">
            Ready to start your project?
          </h2>
          <p className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto">
            Join the league of industry leaders who have scaled their businesses with our bespoke digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <button className="border border-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-white hover:text-black transition-all">
              Contact Us
            </button>
            <button className="bg-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-blue-700 transition-all">
              Free Consultation
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ServicePage;