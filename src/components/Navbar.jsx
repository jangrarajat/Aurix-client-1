import React, { useState } from 'react';
import ServicesMegaMenu from './navbarOptions/ServicesMegaMenu';
import WhoWeAreMegaMenu from './navbarOptions/WhoWeAreMegaMenu';
import CareersMegaMenu from './navbarOptions/CareersMegaMenu';

function Navbar() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  const navLinks = [
    { name: 'What we do', id: 'what' },
    { name: 'Who we are', id: 'who' },
    { name: 'Careers', id: 'careers' },
  ];

  return (
    <>
      {/* Navbar Main */}
      <nav className='w-full fixed top-0 left-0 bg-black p-4 px-10 text-gray-300 flex items-center justify-between z-50 border-b border-gray-900'>
        <div className='flex items-center gap-5'>
          <img
            src="https://res.cloudinary.com/djtvxmttf/image/upload/v1777626035/lojj_rz6wgh.png"
            alt="logo"
            className='h-20'
          />

          <div className='flex items-center gap-8'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => toggleTab(link.id)}
                className={`flex items-center gap-1 relative py-2 text-[15px] transition-colors duration-300 ${activeTab === link.id ? 'text-white' : 'hover:text-white'
                  }`}
              >
                {link.name}
                <svg
                  className={`transition-transform duration-700 ${activeTab === link.id ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                {/* Active Indicator Line */}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out ${activeTab === link.id ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
          </div>
        </div>

        <div className='cursor-pointer font-medium text-3xl hover:underline hover:text-white transition-colors'>
          Contact US
        </div>
      </nav>

      {/* --- Mega Dropdown Container --- */}
      <div
        className={`fixed top-[88px] left-0 w-full bg-[#0a0a0a] text-white z-40 
          grid transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${activeTab ? 'grid-rows-[1fr] opacity-100 border-b border-gray-800 shadow-2xl' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}
        `}
      >
        <div className="overflow-hidden">
          {activeTab === 'what' && <ServicesMegaMenu />}
          {activeTab === 'who' && <WhoWeAreMegaMenu />}
          {activeTab === 'careers' && <CareersMegaMenu />}
      
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-700 ${activeTab ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setActiveTab(null)}
      ></div>
    </>
  );
}

export default Navbar;