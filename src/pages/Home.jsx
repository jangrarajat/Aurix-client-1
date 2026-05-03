import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { servicesData } from '../data/servicesData';

function Home() {
  const [serviceLenth, setServiceLenth] = useState(8)
  return (
    <div className="relative bg-black min-h-screen text-white font-sans">
      <Navbar />

      {/* --- 1. HERO SECTION (Responsive) --- */}
      <section className="sticky top-0 h-screen w-full z-0 overflow-hidden">
        <img
          src="https://s7ap1.scene7.com/is/image/TCSCOMprod/c-testimonial-hero-v-AVS?fit=constrain,1&wid=799&hei=730"
          alt="IT Excellence"
          className='h-full w-full object-cover opacity-60'
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-24">
          <div className="max-w-4xl space-y-4 sm:space-y-6 animate-fadeInSlow">
            <div className="border-l-4 border-blue-500 pl-4 sm:pl-6">
              <h4 className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm font-bold text-blue-400">
                Innovating the Future
              </h4>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-tight">
              Empowering Businesses with <span className="font-bold text-white">Next-Gen IT.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl font-light">
              From AI-driven automation to world-class web experiences, we deliver excellence
              that helps you scale and lead with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* --- 2. ABOUT/MISSION SECTION (Responsive) --- */}
      <section className="relative z-10 bg-white text-black py-16 sm:py-20 lg:py-24 px-5 sm:px-10 md:px-16 lg:px-24 shadow-[0_-50px_100px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              We help you turn complexity into <span className="font-bold">opportunity.</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              At Webraahi, we don't just build software; we build the future of your enterprise.
              Our holistic approach combines industry expertise with cutting-edge technology
              to create meaningful change for your customers.
            </p>
            <button className="bg-black text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg hover:bg-blue-600 transition-all duration-300">
              Our Story →
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="bg-gray-100 p-6 sm:p-8 lg:p-10 rounded-2xl text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">50+</h3>
              <p className="text-gray-500 text-sm sm:text-base">Projects Delivered</p>
            </div>
            <div className="bg-gray-100 p-6 sm:p-8 lg:p-10 rounded-2xl text-center mt-4 sm:mt-6 lg:mt-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">100%</h3>
              <p className="text-gray-500 text-sm sm:text-base">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. SERVICES HIGHLIGHT (Responsive) --- */}
      <section className="relative z-10  py-16 sm:py-20 lg:py-24 border-t border-gray-900 h-fit w-full duration-500 bg-white dark:bg-black bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:90px_90px]">
        <div className="container mx-auto px-5 sm:px-8 lg:px-10" >



          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {Object.keys(servicesData).slice(0, serviceLenth).map((key) => (
              <div
                key={key}
                className="group bg-[#0f0f0f] border border-gray-800 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:-translate-y-3 flex flex-col h-full"
              >
                {/* Product Image Section */}
                <div className="relative h-52 sm:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${servicesData[key].icon || ''})` }}
                  />
                  {/* Dark Overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60" />


                </div>

                {/* Content Section (Product Details) */}
                <div className="p-6 flex flex-col flex-grow border-t border-gray-800/50">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {servicesData[key].title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {servicesData[key].description}
                  </p>

                  {/* Action Button: Product-like CTA */}
                  <div className="mt-auto">
                    <button className="w-full py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-500 hover:text-white transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2">
                      View Details
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='w-full h-10 my-10  flex items-center justify-center'>
            <button onClick={() => serviceLenth === 8 ? setServiceLenth(servicesData.lenth) : setServiceLenth(8)}>

              {serviceLenth === 8 ? (<><div className=' flex items-center gap-3'>View more <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg></div></>) :
               (<><div className=' flex items-center gap-3'>View less <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg></div></>)}
            </button>
          </div>

        </div>
      </section >

      {/* --- 4. CALL TO ACTION (Responsive) --- */}
      < section className="relative z-10 bg-blue-600 py-16 sm:py-20 text-center px-4" >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 lg:mb-8">
          Ready to Digitally Transform?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
          Let's discuss how our AI and Full-Stack solutions can take your business to the next level.
        </p>
        <button className="bg-white text-blue-600 px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:shadow-2xl transition-all">
          Contact Us Now
        </button>
      </section >

      {/* --- 5. PREMIUM FOOTER (Responsive) --- */}
      < footer className="relative z-10 bg-black pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 border-t border-gray-900" >
        <div className="container mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
            <div className="col-span-1 space-y-4 sm:space-y-6">
              <img src="https://res.cloudinary.com/djtvxmttf/image/upload/v1777626035/lojj_rz6wgh.png" className="h-12 sm:h-14 lg:h-16" alt="Logo" />
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                Empowering the digital landscape through innovation and precision.
                Webraahi is your partner in future-ready IT.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 sm:mb-6">Quick Links</h4>
              <ul className="text-gray-500 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li className="hover:text-blue-500 cursor-pointer transition-colors">What we do</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Who we are</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-blue-500 cursor-pointer transition-colors">Insights</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 sm:mb-6">Contact</h4>
              <ul className="text-gray-500 space-y-3 sm:space-y-4 text-sm sm:text-base">
                <li>Gordhanpura, Choki, Kotputli</li>
                <li>aurixaisoftware@gmail.com</li>
                <li>+91 7023009861</li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 sm:mb-6">Stay Updated</h4>
              <div className="flex border-b border-gray-700 py-2">
                <input type="email" placeholder="Email Address" className="bg-transparent outline-none flex-1 text-gray-400 text-sm sm:text-base" />
                <button className="text-blue-500 text-sm sm:text-base">Subscribe</button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 sm:pt-10 flex flex-col md:flex-row justify-between items-center text-gray-600 text-xs sm:text-sm gap-4 md:gap-0">
            <p>© 2026 Aurix AI. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6 lg:gap-8 flex-wrap justify-center">
              <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
              <span className="hover:text-white cursor-pointer transition-colors">Cookie Policy</span>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}

export default Home;