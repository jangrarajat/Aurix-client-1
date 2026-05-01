import React from 'react';

const links = [
  "Our Aspiration",
  "Our Mission",
  "Our Team",
  "Testimonials",
  "Sustainability",
  "Inclusion",
  "Values"
];

function WhoWeAreMegaMenu() {
  return (
    <div className="container mx-auto py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12 animate-fadeInSlow">
      <div className="grid grid-cols-1 md:grid-cols-[350px_280px] lg:grid-cols-[400px_300px] gap-8 md:gap-12 lg:gap-20 justify-start">
        
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white">About Us</h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            We deliver excellence and create value for customers and communities – everyday. 
            With the best talent and the latest technology we help customers turn complexity 
            into opportunities and create meaningful change.
          </p>
          <button className="group flex items-center gap-2 text-white text-base sm:text-lg font-medium border-b border-transparent hover:border-white transition-all pb-1">
            Discover the difference 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>

        <div className="flex flex-col">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
              className="py-2.5 sm:py-3 text-gray-400 hover:text-white pl-2 sm:pl-3 hover:bg-gray-400/15 text-base sm:text-lg border-b border-gray-800 transition-colors duration-300 first:pt-0"
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