import React from 'react';
import { Link } from 'react-router-dom';

const servicesData = [
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Mobile App Development', slug: 'mobile-app-development' },
  { name: 'Software Development', slug: 'software-development' },
  { name: 'WhatsApp Business API', slug: 'whatsapp-business-api' },
  { name: 'Graphic Design', slug: 'graphic-design' },
  { name: 'Video Editing', slug: 'video-editing' },
  { name: 'Salesforce Solutions', slug: 'salesforce-solutions' },
  { name: 'AI Automation', slug: 'ai-automation' },
  { name: 'AI Agents', slug: 'ai-agents' },
  { name: 'AI Tools', slug: 'ai-tools' },
  { name: 'Bulk SMS System', slug: 'bulk-sms-system' },
  { name: 'Business Automation', slug: 'business-automation' },
  { name: 'API Integration', slug: 'api-integration' },
  { name: 'WordPress Development', slug: 'wordpress-development' },
  { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'SEO Services', slug: 'seo-services' },
];

function ServicesMegaMenu() {
  return (
    <div className="container mx-auto py-8 sm:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-10 animate-fadeInSlow  ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-4 sm:gap-y-6 overflow-auto">
        {servicesData.map((service, index) => (
          <Link 
            key={index} 
            to={`/services/${service.slug}`}
            className="group flex items-center gap-2 sm:gap-3 cursor-pointer border-b border-gray-400 hover:bg-gray-500/15 p-2 pb-2 transition-all duration-300"
          >
            <span className="text-gray-300 group-hover:text-white text-base sm:text-lg font-light transition-colors">
              {service.name}
            </span>
            <span className="ml-auto text-white group-hover:translate-x-1 transition-transform text-sm sm:text-base">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ServicesMegaMenu;