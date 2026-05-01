import React, { useState } from 'react';
import ServicesMegaMenu from './ServicesMegaMenu';

function Navbar() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  const navLinks = [
    { name: 'What we do', id: 'what' },
    { name: 'Who we are', id: 'who' },
    { name: 'Insights', id: 'insights' },
    { name: 'Careers', id: 'careers' },
  ];

  return (
    <>
      <nav className='w-full fixed top-0 left-0 bg-black p-4 text-gray-300 flex items-center justify-around z-50 border-b border-gray-900'>
        <div>
          <img 
            src="https://res.cloudinary.com/djtvxmttf/image/upload/v1777626035/lojj_rz6wgh.png" 
            alt="logo"
            className='h-20'
          />
        </div>

        <div className='flex items-center gap-8'>
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => toggleTab(link.id)}
              className={`flex items-center gap-1 hover:text-white transition-all duration-500 relative py-2 ${
                activeTab === link.id ? 'text-white' : ''
              }`}
            >
              {link.name}
              <svg 
                className={`transition-transform duration-700 ${activeTab === link.id ? 'rotate-180' : ''}`}
                xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
              <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-500 ${activeTab === link.id ? 'w-full' : 'w-0'}`}></span>
            </button>
          ))}
        </div>

        <div className='cursor-pointer font-medium hover:text-white transition-colors'>
          Contact US
        </div>
      </nav>

      {/* --- FIXED: Ultra Smooth Dropdown Logic --- */}
      <div 
        className={`fixed top-[30px]  left-0 w-full bg-[#0a0a0a] text-white z-40 
          grid transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${activeTab ? 'grid-rows-[1fr] opacity-100 border-b border-gray-800 shadow-2xl' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}
        `}
      >
        {/* Is wrapper div ka hona zaroori hai animation ke liye */}
        <div className="overflow-hidden">
          <div className="py-10">
            {activeTab === 'what' && <ServicesMegaMenu />}
            
            {activeTab === 'who' && (
              <div className="p-20 text-center">
                <h2 className="text-4xl font-bold">Who We Are Content</h2>
                <p className="text-gray-500 mt-4">Details about the company mission and vision.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-500 ${
          activeTab ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setActiveTab(null)}
      ></div>
    </>
  );
}

export default Navbar;