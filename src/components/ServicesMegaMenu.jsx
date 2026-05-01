import React from 'react';

const servicesData = [
  { name: 'Web Development', icon: '🌐' },
  { name: 'Mobile App Development', icon: '📱' },
  { name: 'Software Development', icon: '💻' },
  { name: 'WhatsApp Business API', icon: '💬' },
  { name: 'Graphic Design', icon: '🎨' },
  { name: 'Video Editing', icon: '🎬' },
  { name: 'Salesforce Solutions', icon: '☁️' },
  { name: 'AI Automation', icon: '🤖' },
  { name: 'AI Agents', icon: '🧠' },
  { name: 'AI Tools', icon: '⚙️' },
  { name: 'Bulk SMS System', icon: '📩' },
  { name: 'Business Automation', icon: '⚡' },
  { name: 'API Integration', icon: '🔗' },
  { name: 'WordPress Development', icon: '📝' },
  { name: 'Digital Marketing', icon: '📈' },
  { name: 'SEO Services', icon: '🔍' },
];

function ServicesMegaMenu() {
  return (
    <div className="container mx-auto py-12 px-10 animate-fadeIn">
      
      
      {/* 4 columns mein clean layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-6">
        {servicesData.map((service, index) => (
          <div 
            key={index} 
            className="group flex items-center gap-3 cursor-pointer border-b hover:bg-gray-500/15 p-2  border-gray-400 hover:border-gray-700 pb-2 transition-all duration-300"
          >
         
            <span className="hover:text-white text-lg font-light transition-colors  duration-300">
              {service.name}
            </span>
            <span className="ml-auto  text-white  ">
              →
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesMegaMenu;