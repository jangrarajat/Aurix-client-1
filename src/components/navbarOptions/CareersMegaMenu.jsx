import React, { useState } from 'react';

const careerData = {
  INTERNSHIP: ["Web Development", "MERN Stack", "App Development", "UI/UX Design", "Digital Marketing","AI"],
  CLASSES: ["Web Developementt", "App  Development", "Ai Automation , Ai Tool, Ai Agents", "Tailwind CSS", "Salesforce","Python Development","Data Analysis"],
  PROJECTS: ["E-commerce Platform", "School Management", "Transport System (TMS)", "AI Chatbot", "Portfolio Sites"]
};

function CareersMegaMenu() {
  // Default pehla item select rahega
  const [selectedCategory, setSelectedCategory] = useState("INTERNSHIP");

  return (
    <div className="container mx-auto py-12 px-6 md:px-12 animate-fadeInSlow">
      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-12 md:gap-20">
        
        {/* Left Side: Intro & Category List */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
              Want to be a global change-maker? Join our team.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              At Webraahi, we believe exceptional work begins with hiring, 
              celebrating and nurturing the best people — from all walks of life.
            </p>
            <button className="flex items-center gap-2 text-white text-lg font-medium border-b border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-all">
              Join us <span>→</span>
            </button>
          </div>

          {/* Category Selector List */}
          <div className="flex flex-col border-t border-gray-800">
            {Object.keys(careerData).map((cat) => (
              <button
                key={cat}
                onMouseEnter={() => setSelectedCategory(cat)} // Hover par change hoga
                onClick={() => setSelectedCategory(cat)}      // Click par bhi change hoga
                className={`flex items-center justify-between py-5 text-lg font-medium transition-all border-b border-gray-800 ${
                  selectedCategory === cat ? 'text-white bg-gray-900/50 px-4' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {cat}
                <span className={selectedCategory === cat ? 'translate-x-0' : '-translate-x-2 opacity-0'}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right Side: Details / Options based on selection */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 pt-10 md:pt-24 h-fit">
          {careerData[selectedCategory].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-gray-400 hover:text-white text-xl transition-colors duration-300 py-2 border-b border-transparent hover:border-gray-800"
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CareersMegaMenu;