import React from 'react';

const links = [
  "Our Aspiration",
  "Our Mission",
  "Our Team",
  "Testonomials",
  "Sustainability",
  "Inclusion",
  "Values"
];

function WhoWeAreMegaMenu() {
  return (
    <div className="container mx-auto py-10 px-6 md:px-12 animate-fadeInSlow">
      {/* max-w-5xl aur justify-start se content left side me pas-pas rahega */}
      <div className="grid grid-cols-1 md:grid-cols-[400px_300px] gap-10 md:gap-20 justify-start">
        
        {/* Left Section: About Us Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">About Us</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            We deliver excellence and create value for customers and communities – everyday. 
            With the best talent and the latest technology we help customers turn complexity 
            into opportunities and create meaningful change.
          </p>
          <button className="group flex items-center gap-2 text-white text-lg font-medium border-b border-transparent hover:border-white transition-all pb-1">
            Discover the difference 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        {/* Right Section: Links (Ab ye Left wale text ke kaafi pas rahega) */}
        <div className="flex flex-col">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="py-3 text-gray-400 hover:text-white pl-3 hover:bg-gray-400/15 text-lg border-b border-gray-800 transition-colors duration-300 first:pt-0"
            >
              {link}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default WhoWeAreMegaMenu;