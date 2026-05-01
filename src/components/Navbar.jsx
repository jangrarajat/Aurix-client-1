import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesMegaMenu from './navbarOptions/ServicesMegaMenu';
import WhoWeAreMegaMenu from './navbarOptions/WhoWeAreMegaMenu';
import CareersMegaMenu from './navbarOptions/CareersMegaMenu';

function Navbar() {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (tabId) => {
    setActiveTab(activeTab === tabId ? null : tabId);
  };

  const closeMenu = () => {
    setActiveTab(null);
  };

  const navLinks = [
    { name: 'What we do', id: 'what' },
    { name: 'Who we are', id: 'who' },
    { name: 'Careers', id: 'careers' },
  ];

  return (
    <>
      {/* Navbar Main - Responsive padding and layout */}
      <nav className='w-full fixed top-0 left-0 bg-black p-3 sm:p-4 px-4 sm:px-6 lg:px-10 text-gray-300 flex items-center justify-between z-50 border-b border-gray-900'>
        <div className='flex items-center gap-2 sm:gap-5'>
          <Link to='/' onClick={closeMenu}>
            <img
              src="https://res.cloudinary.com/djtvxmttf/image/upload/v1777626035/lojj_rz6wgh.png"
              alt="logo"
              className='h-12 sm:h-16 lg:h-20'
            />
          </Link>

          {/* Nav Links - Hide on mobile, show on md+ */}
          <div className='hidden md:flex items-center gap-4 lg:gap-8'>
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => toggleTab(link.id)}
                className={`flex items-center gap-1 relative py-2 text-[13px] lg:text-[15px] transition-colors duration-300 ${
                  activeTab === link.id ? 'text-white' : 'hover:text-white'
                }`}
              >
                {link.name}
                <svg
                  className={`transition-transform duration-700 ${activeTab === link.id ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
                <span className={`absolute bottom-0 left-0 h-[2px] bg-blue-500 transition-all duration-500 ease-in-out ${activeTab === link.id ? 'w-full' : 'w-0'}`}></span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button - Visible only on mobile */}
        <button 
          onClick={() => toggleTab('mobile')} 
          className="md:hidden text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Contact Button - Hide on mobile */}
        <Link to='/contact' onClick={closeMenu} className="hidden md:block">
          <div className='cursor-pointer font-medium text-xl lg:text-3xl hover:underline hover:text-white transition-colors'>
            Contact US
          </div>
        </Link>
      </nav>

      {/* Mobile Menu Dropdown */}
      {activeTab === 'mobile' && (
        <div className="fixed top-[60px] left-0 w-full bg-[#0a0a0a] text-white z-40 border-b border-gray-800 shadow-2xl md:hidden">
          <div className="flex flex-col p-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  toggleTab(link.id);
                  setActiveTab(link.id);
                }}
                className="text-left py-3 text-lg border-b border-gray-800 hover:text-white"
              >
                {link.name}
              </button>
            ))}
            <Link to='/contact' onClick={closeMenu} className="py-3 text-lg text-blue-400 font-medium">
              Contact US
            </Link>
          </div>
        </div>
      )}

      {/* Mega Dropdown Container - Responsive positioning */}
      <div
        className={`fixed top-[60px] sm:top-[68px] lg:top-[88px] left-0 w-full bg-[#0a0a0a] text-white z-40 
          grid transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)]
          ${activeTab && activeTab !== 'mobile' ? 'grid-rows-[1fr] opacity-100 border-b border-gray-800 shadow-2xl' : 'grid-rows-[0fr] opacity-0 pointer-events-none'}
        `}
        onClick={closeMenu} 
      >
        <div className="overflow-hidden">
          {activeTab === 'what' && <ServicesMegaMenu />}
          {activeTab === 'who' && <WhoWeAreMegaMenu />}
          {activeTab === 'careers' && <CareersMegaMenu />}
        </div>
      </div>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-30 transition-opacity duration-700 ${
          activeTab ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>
    </>
  );
}

export default Navbar;