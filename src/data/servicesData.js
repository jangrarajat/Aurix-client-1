export const servicesData = {
  "web-development": {
    title: "Web Development",
    slug: 'web-development',
    heroText: "Scalable Digital Solutions for the Modern Web.",
    description: "We specialize in building high-performance, secure, and SEO-friendly websites. From corporate sites to complex web applications, our MERN stack expertise ensures your business stays ahead in the digital race.",
    details: ["Custom React & Next.js Apps", "E-commerce Platforms", "CMS Development", "PWA Solutions"],
    icon: 'https://contentsnare.com/wp-content/uploads/2021/12/Looking-to-create-a-website-1.jpg',
    stats: [
      { value: "200+", label: "Websites Delivered" },
      { value: "99.9%", label: "Uptime Guaranteed" },
      { value: "3x", label: "Faster Load Times" },
      { value: "150+", label: "Happy Clients" },
    ],
    process: [
      { step: "01", title: "Discovery & Planning", desc: "We analyze your business goals, target audience, and competitors to craft a precise roadmap for your web project." },
      { step: "02", title: "UI/UX Design", desc: "Our designers create wireframes and high-fidelity mockups that balance aesthetics with conversion-focused design principles." },
      { step: "03", title: "Development", desc: "Using React, Next.js, and Node.js, we build pixel-perfect, blazing-fast web applications with clean, scalable code." },
      { step: "04", title: "Testing & QA", desc: "Rigorous cross-browser testing, performance audits, and security checks before every deployment." },
      { step: "05", title: "Launch & Support", desc: "Smooth deployment with CI/CD pipelines, followed by ongoing maintenance, monitoring, and feature updates." },
    ],
    technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS", "Docker", "GraphQL", "Tailwind CSS", "TypeScript"],
    whyUs: [
      { title: "SEO-First Development", desc: "Every line of code is written with search engines in mind — semantic HTML, fast load speeds, and structured data." },
      { title: "Mobile-First Approach", desc: "We design for mobile screens first, then scale up — ensuring flawless experiences on every device." },
      { title: "Security by Default", desc: "SSL, OWASP compliance, input sanitization, and regular security audits are standard in every project." },
      { title: "Performance Obsessed", desc: "We target Core Web Vitals scores in the green — your website will load fast, rank higher, and convert better." },
    ],
    faqs: [
      { q: "How long does it take to build a website?", a: "A basic website takes 2–4 weeks. Complex web applications with custom features typically take 6–16 weeks depending on scope." },
      { q: "Do you provide website maintenance after launch?", a: "Yes, we offer monthly maintenance packages that include updates, security patches, backups, and performance monitoring." },
      { q: "Can you redesign my existing website?", a: "Absolutely. We audit your current site, retain SEO equity, and rebuild it with modern technology and improved UX." },
      { q: "Will my website be optimized for Google?", a: "Yes. Technical SEO is built into our development process — including meta tags, schema markup, sitemap, and page speed optimization." },
    ],
    caseStudy: {
      client: "RetailMax India",
      challenge: "An outdated e-commerce site with 8-second load times and poor mobile experience was losing 60% of visitors.",
      solution: "We rebuilt the platform on Next.js with server-side rendering, image optimization, and a headless CMS.",
      result: "Load time reduced to 1.2 seconds. Mobile conversions increased by 240%. Organic traffic grew 3x in 6 months."
    }
  },

  "mobile-app-development": {
    title: "Mobile App Development",
    slug: 'mobile-app-development',
    heroText: "Bringing Innovation to Every Screen.",
    description: "Creating seamless mobile experiences for iOS and Android. We focus on intuitive UI/UX and robust backend architecture to ensure your app is both beautiful and functional.",
    details: ["Native iOS & Android", "React Native & Flutter", "App UI/UX Design", "Mobile Backend API"],
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSGQvmFkFtRED8C4TnBH22SGo0t6GZ9JTcKzoAy7w4DJZCsbbm8nhOVmo&s",
    stats: [
      { value: "120+", label: "Apps Launched" },
      { value: "4.8★", label: "Avg Store Rating" },
      { value: "5M+", label: "End Users Served" },
      { value: "98%", label: "Crash-Free Sessions" },
    ],
    process: [
      { step: "01", title: "Concept & Strategy", desc: "We define your app's core value proposition, target users, monetization model, and feature roadmap." },
      { step: "02", title: "Prototyping", desc: "Interactive prototypes are built and tested with real users before a single line of production code is written." },
      { step: "03", title: "Agile Development", desc: "Biweekly sprints with demo sessions ensure you see progress and can provide feedback throughout development." },
      { step: "04", title: "App Store Optimization", desc: "We optimize your app listing with keywords, screenshots, and descriptions to maximize downloads from day one." },
      { step: "05", title: "Post-Launch Growth", desc: "Push notification strategies, analytics integration, and A/B testing to continuously improve retention." },
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Node.js", "AWS Amplify", "Redux", "Expo", "App Store Connect"],
    whyUs: [
      { title: "One Codebase, Two Platforms", desc: "With React Native and Flutter, we build once and deploy to both iOS and Android — reducing cost without sacrificing quality." },
      { title: "Offline-First Design", desc: "Our apps work seamlessly even without internet — critical for users in areas with spotty connectivity." },
      { title: "App Store Expertise", desc: "We handle the entire submission process for both Google Play and Apple App Store, avoiding common rejection pitfalls." },
      { title: "Analytics & Insights", desc: "Deep integration with Firebase, Mixpanel, and custom dashboards to track user behavior and drive growth." },
    ],
    faqs: [
      { q: "How much does it cost to build a mobile app?", a: "Costs range from ₹3–5 Lakhs for a simple MVP to ₹20+ Lakhs for feature-rich applications. We provide detailed quotes after discovery." },
      { q: "Do you build apps for both iOS and Android?", a: "Yes. We specialize in cross-platform development (React Native/Flutter) and native development for both platforms." },
      { q: "How do you handle app updates after launch?", a: "We provide retainer-based maintenance plans that cover bug fixes, OS compatibility updates, and new feature additions." },
      { q: "Can you integrate third-party services like payment gateways?", a: "Absolutely — Razorpay, Stripe, PayPal, UPI, and any custom payment or logistics API can be integrated." },
    ],
    caseStudy: {
      client: "FoodieExpress",
      challenge: "A food delivery startup needed a scalable app that could handle 10,000+ concurrent orders during peak hours.",
      solution: "We built a React Native app with real-time order tracking, dynamic pricing, and a microservices backend on AWS.",
      result: "App launched with 50,000 downloads in Month 1. Peak order capacity handled flawlessly. Rated 4.9★ on both stores."
    }
  },

  "software-development": {
    title: "Software Development",
    slug: 'software-development',
    heroText: "Custom Software Tailored to Your Vision.",
    description: "Enterprise-grade software solutions designed to solve complex business challenges. We build reliable, scalable, and maintainable software architectures.",
    details: ["SaaS Product Development", "Desktop Applications", "Legacy System Migration", "Custom CRM/ERP"],
    icon: "https://img.freepik.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg",
    stats: [
      { value: "80+", label: "Enterprise Projects" },
      { value: "12+", label: "Years of Experience" },
      { value: "99%", label: "On-Time Delivery" },
      { value: "60%", label: "Avg Cost Saved vs Hiring" },
    ],
    process: [
      { step: "01", title: "Requirements Engineering", desc: "Detailed functional and non-functional requirements gathering through stakeholder interviews and workshops." },
      { step: "02", title: "Architecture Design", desc: "We design scalable system architectures — microservices, monolith, or hybrid — based on your long-term roadmap." },
      { step: "03", title: "Iterative Development", desc: "Agile sprints with continuous integration ensure working software is delivered and reviewed regularly." },
      { step: "04", title: "Quality Assurance", desc: "Unit tests, integration tests, load tests, and UAT ensure every release is production-ready." },
      { step: "05", title: "Deployment & DevOps", desc: "Automated CI/CD pipelines, container orchestration, and infrastructure-as-code for reliable deployments." },
    ],
    technologies: ["Python", "Java", "Node.js", ".NET", "React", "PostgreSQL", "Redis", "Kubernetes", "Docker", "AWS / Azure / GCP"],
    whyUs: [
      { title: "Domain Expertise", desc: "We've built software for fintech, healthcare, logistics, retail, and education — bringing domain knowledge to every project." },
      { title: "IP Ownership", desc: "You own 100% of the source code. No vendor lock-in, ever." },
      { title: "Dedicated Teams", desc: "A dedicated project manager, lead developer, QA engineer, and designer assigned to your project from day one." },
      { title: "Long-term Partnership", desc: "We aim to be your technology partner for years, not just a one-off vendor — with SLAs and roadmap planning." },
    ],
    faqs: [
      { q: "Can you take over an existing software project?", a: "Yes. We do thorough code audits, understand the existing architecture, and take ownership seamlessly." },
      { q: "Do you sign NDAs?", a: "Absolutely. We sign NDAs before any discussion of your project details, protecting your intellectual property." },
      { q: "What methodologies do you follow?", a: "We primarily use Agile/Scrum with biweekly sprints. For larger enterprises, we can adapt to SAFe or custom hybrid models." },
      { q: "How do you handle data security in enterprise software?", a: "Role-based access control, end-to-end encryption, VAPT testing, and compliance with GDPR/ISO standards." },
    ],
    caseStudy: {
      client: "LogiTrack Enterprises",
      challenge: "A logistics company relied on 15-year-old desktop software that couldn't scale and required expensive maintenance.",
      solution: "We migrated the legacy system to a cloud-native SaaS platform with real-time tracking, automated billing, and analytics.",
      result: "Operations cost reduced by 40%. System downtime eliminated. 300+ fleet managers onboarded in first quarter."
    }
  },

  "whatsapp-business-api": {
    title: "WhatsApp Business API",
    slug: 'whatsapp-business-api',
    heroText: "Engage Customers Where They Are.",
    description: "Automate your customer communication with official WhatsApp API integration. Send notifications, provide support, and drive sales through the world's most popular messaging app.",
    details: ["Automated Chatbots", "Bulk Messaging API", "Customer Support Tools", "CRM Integration"],
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbkW3dWbq-TcVbch9ES8ktgU1aY5q8GpJzCQ&s',
    stats: [
      { value: "98%", label: "Message Open Rate" },
      { value: "3x", label: "Higher Engagement vs Email" },
      { value: "500M+", label: "Messages Sent Monthly" },
      { value: "60%", label: "Support Cost Reduction" },
    ],
    process: [
      { step: "01", title: "API Account Setup", desc: "We handle the official Meta Business verification and WhatsApp Business API account setup on your behalf." },
      { step: "02", title: "Template Approval", desc: "We craft and submit message templates optimized for quick Meta approval across all categories." },
      { step: "03", title: "Chatbot Design", desc: "Conversational flows are mapped and built to handle FAQs, lead capture, order updates, and escalations." },
      { step: "04", title: "CRM Integration", desc: "We connect WhatsApp API with your CRM — Salesforce, HubSpot, Zoho, or custom systems." },
      { step: "05", title: "Analytics Dashboard", desc: "Real-time delivery, read, and response rate dashboards to measure the ROI of every campaign." },
    ],
    technologies: ["Meta Cloud API", "Twilio", "360dialog", "Node.js", "Webhooks", "Salesforce", "HubSpot", "Zoho CRM", "Redis", "AWS SQS"],
    whyUs: [
      { title: "Official API Partner", desc: "We work exclusively with official Meta-approved API providers — no grey-market tools that risk your account." },
      { title: "Intelligent Chatbots", desc: "Our bots use NLP to understand intent, handle complex queries, and route to human agents when needed." },
      { title: "Broadcast Campaigns", desc: "Segment your audience and send personalized promotional messages to thousands of contacts at once." },
      { title: "24/7 Automated Support", desc: "Let your WhatsApp bot handle customer queries round the clock, reducing support tickets by up to 60%." },
    ],
    faqs: [
      { q: "Is the WhatsApp Business API different from the regular app?", a: "Yes. The API is for businesses needing scale — it supports automation, bulk messaging, and system integrations that the app cannot." },
      { q: "Can I send promotional messages via WhatsApp API?", a: "Yes, with pre-approved message templates. Promotional messaging is allowed within Meta's marketing message guidelines." },
      { q: "How long does API approval take?", a: "Typically 3–7 business days once all business documents are submitted. We manage the entire process for you." },
      { q: "Can the chatbot hand off to a live agent?", a: "Absolutely. We build hybrid flows where the bot handles routine queries and escalates complex cases to human agents." },
    ],
    caseStudy: {
      client: "MediCare Clinics",
      challenge: "A chain of 25 clinics was managing appointment bookings manually via phone — causing delays and staff overload.",
      solution: "We built a WhatsApp chatbot for appointment booking, reminders, prescription delivery, and FAQs.",
      result: "80% of appointments now booked via WhatsApp. Staff phone calls reduced by 70%. Patient satisfaction score up 45%."
    }
  },

  "graphic-design": {
    title: "Graphic Design",
    heroText: "Visual Storytelling That Captivates.",
    slug: 'graphic-design',
    description: "Transform your brand identity with stunning visuals. Our design team creates impactful graphics that communicate your brand's value and leave a lasting impression.",
    details: ["Brand Identity & Logo", "Marketing Collaterals", "Social Media Graphics", "UI/UX Prototyping"],
    icon: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D',
    stats: [
      { value: "500+", label: "Brands Designed" },
      { value: "10K+", label: "Graphics Delivered" },
      { value: "48hr", label: "Avg Turnaround" },
      { value: "97%", label: "Client Approval Rate" },
    ],
    process: [
      { step: "01", title: "Brand Discovery", desc: "We study your industry, competitors, and target audience to define the visual DNA of your brand." },
      { step: "02", title: "Concept Development", desc: "Multiple design directions are explored. You choose the one that resonates most with your vision." },
      { step: "03", title: "Design Execution", desc: "Chosen concepts are refined into polished, print-ready and web-ready files." },
      { step: "04", title: "Feedback & Revisions", desc: "We offer unlimited revisions within the agreed scope until you're 100% satisfied." },
      { step: "05", title: "Final Delivery", desc: "You receive organized files in all required formats — AI, EPS, PNG, PDF, SVG — with a brand usage guide." },
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign", "After Effects", "Canva Pro", "Procreate", "Sketch"],
    whyUs: [
      { title: "Strategy-Driven Design", desc: "Our designs aren't just beautiful — they are built on brand strategy, psychology of colors, and market positioning." },
      { title: "Versatile Team", desc: "From logo design to 3D product mockups, motion graphics to packaging — we do it all under one roof." },
      { title: "Fast Turnaround", desc: "Most designs are delivered within 48–72 hours without compromising quality." },
      { title: "Unlimited Revisions", desc: "We iterate until you're fully satisfied. Your happiness is our only definition of done." },
    ],
    faqs: [
      { q: "What file formats will I receive?", a: "All final files are delivered in vector formats (AI, EPS, SVG) and raster formats (PNG, JPG, PDF) optimized for print and digital use." },
      { q: "Do you create brand guidelines?", a: "Yes. Every brand identity project includes a comprehensive brand style guide covering colors, typography, logo usage, and do's and don'ts." },
      { q: "Can you redesign my existing logo?", a: "Absolutely. We modernize logos while retaining brand equity and recognition built over the years." },
      { q: "Do you handle social media creatives on a monthly basis?", a: "Yes, we offer monthly social media design packages with consistent branding across all platforms." },
    ],
    caseStudy: {
      client: "BrewCraft Coffee",
      challenge: "A premium coffee brand had inconsistent visuals across packaging, social media, and outlets — hurting brand recognition.",
      solution: "We created a complete brand identity system — logo, color palette, typography, packaging design, and social media templates.",
      result: "Brand recognition improved significantly. Social media engagement doubled. Product launched in 50+ retail stores with premium shelf presence."
    }
  },

  "video-editing": {
    title: "Video Editing",
    slug: 'video-editing',
    heroText: "High-Impact Video Production.",
    description: "Professional video editing for corporate ads, social media, and YouTube. We turn raw footage into cinematic stories that engage and convert viewers.",
    details: ["Corporate Ad Films", "Social Media Reels", "Motion Graphics", "Color Grading & Sound"],
    icon: 'https://sb-wp-assets.storyblocks.com/resources/wp-content/uploads/2024/05/27103627/videoeditorskills_thumbnail-1536x864.jpg',
    stats: [
      { value: "1000+", label: "Videos Produced" },
      { value: "50M+", label: "Total Views Generated" },
      { value: "4K", label: "Ultra HD Output" },
      { value: "24hr", label: "Rush Delivery Available" },
    ],
    process: [
      { step: "01", title: "Brief & Scripting", desc: "We understand your message, audience, and platform — then script a compelling narrative arc." },
      { step: "02", title: "Raw Footage Review", desc: "All raw footage is reviewed, logged, and the best takes are selected for the edit." },
      { step: "03", title: "Rough Cut", desc: "A first assembly cut is shared for structure approval before any color or sound work begins." },
      { step: "04", title: "Post Production", desc: "Color grading, sound design, music licensing, motion graphics, and subtitles are added." },
      { step: "05", title: "Final Delivery", desc: "Videos are exported in multiple formats optimized for YouTube, Instagram, LinkedIn, TV, and print." },
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "Final Cut Pro", "Cinema 4D", "Audition", "Frame.io", "Runway ML"],
    whyUs: [
      { title: "Cinematic Quality", desc: "Professional color grading and sound design give every video a high-budget, cinematic feel — regardless of your budget." },
      { title: "Platform-Optimized", desc: "We edit different cuts for Instagram Reels, YouTube, LinkedIn, and TV — each perfectly formatted and timed." },
      { title: "Motion Graphics Expertise", desc: "Custom animations, lower thirds, and kinetic typography that elevate your brand's visual language." },
      { title: "Licensed Music", desc: "Access to a library of 500,000+ royalty-free tracks — no copyright strikes, ever." },
    ],
    faqs: [
      { q: "What format should I send raw footage in?", a: "We accept any format — MP4, MOV, RAW, ProRes, R3D. If in doubt, just send what you have and we'll handle the rest." },
      { q: "How many revisions are included?", a: "Standard projects include 3 rounds of revisions. Additional rounds are available at a nominal cost." },
      { q: "Can you add subtitles in multiple languages?", a: "Yes. We provide subtitling and translation services in 20+ languages with accurate timing and styling." },
      { q: "Do you shoot video as well or only edit?", a: "We primarily focus on post-production editing, but we can connect you with our trusted cinematography partners for shoots." },
    ],
    caseStudy: {
      client: "GrowthAcademy EdTech",
      challenge: "Raw lecture recordings were boring and seeing low completion rates on their online courses.",
      solution: "We transformed the raw lectures into engaging videos with motion graphics, animated examples, and chapter markers.",
      result: "Course completion rate improved from 34% to 78%. Student satisfaction ratings jumped to 4.7★. New course launches sold out within days."
    }
  },

  "salesforce-solutions": {
    title: "Salesforce Solutions",
    slug: 'salesforce-solutions',
    heroText: "Master Your Customer Relationships.",
    description: "Optimize your sales and marketing workflows with Salesforce. We provide implementation, customization, and consulting to maximize your CRM investment.",
    details: ["Salesforce Implementation", "Custom Apex/Visualforce", "AppExchange Apps", "Lightning Migration"],
    icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjTEkcoz6Xgzvvp5-SNuwe_40zk6ppcrprow&s',
    stats: [
      { value: "50+", label: "Salesforce Projects" },
      { value: "5", label: "Certified Salesforce Experts" },
      { value: "35%", label: "Avg Sales Increase Post-CRM" },
      { value: "Platinum", label: "Consulting Partner Level" },
    ],
    process: [
      { step: "01", title: "CRM Audit", desc: "We assess your current sales processes, data quality, and existing CRM setup to identify gaps and opportunities." },
      { step: "02", title: "Solution Blueprint", desc: "A detailed Salesforce architecture is designed — covering objects, flows, integrations, and user roles." },
      { step: "03", title: "Implementation", desc: "Declarative configuration first (flows, validation rules, reports), then Apex/LWC for complex requirements." },
      { step: "04", title: "Data Migration", desc: "Clean, de-duplicated data migration from legacy systems using ETL tools with full audit trails." },
      { step: "05", title: "Training & Go-Live", desc: "Hands-on training for your sales and admin teams, followed by hypercare support post-launch." },
    ],
    technologies: ["Salesforce Sales Cloud", "Service Cloud", "Marketing Cloud", "Apex", "LWC", "Visualforce", "SOQL", "MuleSoft", "Tableau CRM", "CPQ"],
    whyUs: [
      { title: "Certified Specialists", desc: "Our team holds 15+ active Salesforce certifications across Admin, Developer, Consultant, and Architect tracks." },
      { title: "Process-First Approach", desc: "We redesign your sales processes before touching Salesforce — ensuring the CRM works for your team, not against it." },
      { title: "Custom Development", desc: "Complex business logic that clicks can't handle? Our Apex and LWC developers build exactly what you need." },
      { title: "Ongoing Optimization", desc: "Monthly Salesforce health checks, release management, and continuous improvement retainers available." },
    ],
    faqs: [
      { q: "We already have Salesforce but aren't using it well. Can you help?", a: "Yes — this is our most common engagement. We audit, clean up, and optimize existing orgs for maximum adoption and ROI." },
      { q: "Can you migrate our data from another CRM?", a: "We migrate from HubSpot, Zoho, Pipedrive, Microsoft Dynamics, spreadsheets, and any other source." },
      { q: "What Salesforce clouds do you specialize in?", a: "Sales Cloud, Service Cloud, Marketing Cloud, Experience Cloud, and Salesforce CPQ are our primary areas of expertise." },
      { q: "Do you provide Salesforce training for our team?", a: "Yes. We create custom training materials and run live training sessions tailored to each role in your organization." },
    ],
    caseStudy: {
      client: "NovaTech B2B Solutions",
      challenge: "Sales team of 80 reps were using spreadsheets to track deals — resulting in lost leads, missed follow-ups, and zero pipeline visibility.",
      solution: "We implemented Salesforce Sales Cloud with custom lead scoring, automated workflows, and an executive dashboard.",
      result: "Sales cycle reduced by 28%. Pipeline visibility enabled leadership to forecast revenue with 92% accuracy. Rep productivity up 40%."
    }
  },

  "ai-automation": {
    title: "AI Automation",
    slug: 'ai-automation',
    heroText: "The Future of Work is Intelligent.",
    description: "Harness the power of AI to automate repetitive tasks. We build smart systems that reduce manual effort and increase operational efficiency.",
    details: ["LLM Integration", "Automated Workflows", "AI Strategy Consulting", "Custom AI Models"],
    icon: 'https://etedge-insights.com/wp-content/uploads/2025/10/AI-Automation.png',
    stats: [
      { value: "70%", label: "Average Task Reduction" },
      { value: "10x", label: "Process Speed Improvement" },
      { value: "₹0", label: "Human Error Cost" },
      { value: "ROI in", label: "90 Days Typical" },
    ],
    process: [
      { step: "01", title: "Process Mapping", desc: "We document every manual process, identify high-volume repetitive tasks, and quantify the cost of human effort." },
      { step: "02", title: "Automation Design", desc: "We select the right AI tools and architecture — LLMs, RPA, rule engines, or custom models — for each process." },
      { step: "03", title: "Pilot Deployment", desc: "A controlled pilot run on one process validates accuracy and ROI before company-wide rollout." },
      { step: "04", title: "Integration", desc: "Automation is connected to your existing tools — ERP, CRM, email, databases — via APIs and webhooks." },
      { step: "05", title: "Monitoring & Tuning", desc: "Automated systems are continuously monitored with dashboards, and models are retrained as data evolves." },
    ],
    technologies: ["OpenAI GPT-4", "Claude API", "LangChain", "n8n", "Zapier", "Python", "RPA (UiPath)", "Hugging Face", "AWS Lambda", "Apache Airflow"],
    whyUs: [
      { title: "No-Code to Full-Code", desc: "We choose the right automation level — from no-code tools like n8n to fully custom Python automation pipelines." },
      { title: "LLM Integration Experts", desc: "We integrate GPT-4, Claude, Gemini, and open-source models into your workflows with prompt engineering expertise." },
      { title: "Rapid ROI", desc: "Our automation projects typically deliver measurable ROI within 30–90 days of deployment." },
      { title: "Human-in-the-Loop", desc: "We design automation with exception handling — humans are notified for edge cases, maintaining accuracy." },
    ],
    faqs: [
      { q: "Which processes are best suited for AI automation?", a: "Data entry, document processing, email triage, report generation, customer support, invoice matching, and inventory management are top candidates." },
      { q: "Do we need to change our existing tools?", a: "No. We integrate automation into your existing tools — there's no need to replace your ERP, CRM, or email system." },
      { q: "Is AI automation safe for sensitive business data?", a: "Yes. We implement data masking, on-premise deployment options, and strict access controls to protect sensitive information." },
      { q: "What if the AI makes a mistake?", a: "We build confidence thresholds and human-review checkpoints for low-confidence outputs, ensuring accuracy is always maintained." },
    ],
    caseStudy: {
      client: "FinServe Capital",
      challenge: "A financial services firm spent 400+ man-hours per month manually processing loan applications from PDFs and emails.",
      solution: "We built an AI pipeline that extracts data from documents, validates against rules, and populates the loan management system automatically.",
      result: "Processing time reduced from 4 hours to 8 minutes per application. Error rate dropped to near zero. Team redeployed to high-value advisory work."
    }
  },

  "ai-agents": {
    title: "AI Agents",
    slug: 'ai-agents',
    heroText: "Your 24/7 Digital Workforce.",
    description: "Deploy autonomous AI agents that can handle tasks, answer queries, and manage workflows independently. Our agents learn and adapt to your business needs.",
    details: ["Customer Support Agents", "Task Automation Bots", "Multi-Agent Systems", "Voice AI Agents"],
    icon: 'https://bernardmarr.com/wp-content/uploads/2025/05/How-AI-Agents-Will-Revolutionize-Your-Day-To-Day-Life.jpg',
    stats: [
      { value: "24/7", label: "Always-On Operations" },
      { value: "85%", label: "Query Resolution Rate" },
      { value: "5 sec", label: "Average Response Time" },
      { value: "∞", label: "Simultaneous Conversations" },
    ],
    process: [
      { step: "01", title: "Agent Design", desc: "We define the agent's persona, knowledge base, tools, and decision-making boundaries before building." },
      { step: "02", title: "Knowledge Base Setup", desc: "Your product docs, FAQs, policies, and data are ingested into a vector database for accurate retrieval." },
      { step: "03", title: "Tool Integration", desc: "Agents are equipped with tools — search, databases, APIs, calendars — to take real actions, not just answer questions." },
      { step: "04", title: "Testing & Red-Teaming", desc: "We test agents against thousands of edge cases, adversarial inputs, and ambiguous queries to ensure reliability." },
      { step: "05", title: "Deployment & Monitoring", desc: "Agents are deployed on your preferred channels with live dashboards to monitor performance and flagged conversations." },
    ],
    technologies: ["OpenAI Assistants API", "LangGraph", "CrewAI", "AutoGen", "Claude API", "Pinecone", "Weaviate", "Twilio Voice", "WebSockets", "Python"],
    whyUs: [
      { title: "Goal-Oriented Agents", desc: "Our agents don't just answer — they plan, use tools, and complete multi-step tasks autonomously." },
      { title: "Multi-Agent Orchestration", desc: "We build networks of specialized agents that collaborate — researcher, writer, analyst, executor — to tackle complex workflows." },
      { title: "Voice AI Capable", desc: "Deploy conversational voice agents for phone support, IVR replacement, and voice-first interfaces." },
      { title: "Guardrails & Safety", desc: "Every agent is deployed with strict output filters, topic boundaries, and escalation protocols to prevent hallucinations." },
    ],
    faqs: [
      { q: "How is an AI agent different from a chatbot?", a: "Chatbots follow fixed scripts. AI agents reason, plan, use multiple tools, and can complete complex multi-step tasks autonomously." },
      { q: "Can AI agents integrate with our internal systems?", a: "Yes. Agents can be given access to your CRM, databases, calendars, ticketing systems, and any API-accessible tool." },
      { q: "What happens when the agent doesn't know the answer?", a: "Agents are designed to gracefully escalate to a human agent or acknowledge uncertainty — never hallucinate a confident wrong answer." },
      { q: "Can agents be trained on our company's specific knowledge?", a: "Absolutely. We build custom RAG (Retrieval-Augmented Generation) systems that ground agent responses in your exact documentation." },
    ],
    caseStudy: {
      client: "EduSphere Learning Platform",
      challenge: "Student support team was overwhelmed with 2,000+ daily queries about course content, enrollment, and technical issues.",
      solution: "We deployed a multi-agent system — a front-line support agent, a course recommendation agent, and a technical troubleshooting agent.",
      result: "85% of queries resolved without human intervention. Response time dropped from 4 hours to under 30 seconds. Student NPS improved by 22 points."
    }
  },

  "ai-tools": {
    title: "AI Tools",
    slug: 'ai-tools',
    heroText: "Bespoke AI Applications.",
    description: "Custom-built AI tools for content generation, data analysis, and decision making. We provide the tools you need to stay competitive in an AI-first world.",
    details: ["Image Generation Tools", "Text Analysis Platforms", "Custom GPT Solutions", "AI Search Engines"],
    icon: 'https://hmexachglgvzhygvsfet.supabase.co/storage/v1/object/public/blog-images/Top_10_AI_Tools_for_Business_in_2026-1769019564237.webp',
    stats: [
      { value: "40+", label: "Custom AI Tools Built" },
      { value: "10x", label: "Content Velocity Increase" },
      { value: "90%", label: "Cost Savings vs Manual" },
      { value: "GPT-4o", label: "Latest Models Integrated" },
    ],
    process: [
      { step: "01", title: "Use Case Definition", desc: "We identify the highest-impact AI use cases in your workflow and prioritize based on ROI and feasibility." },
      { step: "02", title: "Model Selection", desc: "GPT-4o, Claude, Gemini, DALL·E, Stable Diffusion — we select the right model for each specific task." },
      { step: "03", title: "Prompt Engineering", desc: "Extensive prompt design and optimization to maximize output quality, consistency, and reliability." },
      { step: "04", title: "Tool Development", desc: "Custom UI, APIs, and backend logic are built around the AI model to create a seamless user experience." },
      { step: "05", title: "Iteration & Improvement", desc: "We analyze tool usage patterns and continuously improve prompts and models based on real-world feedback." },
    ],
    technologies: ["OpenAI API", "Claude API", "Gemini API", "DALL·E 3", "Stable Diffusion", "Midjourney API", "LangChain", "FastAPI", "React", "Supabase"],
    whyUs: [
      { title: "End-to-End AI Development", desc: "From model selection and prompt engineering to full-stack tool development — we handle every layer." },
      { title: "Private & Secure", desc: "Your data stays private. We deploy tools with enterprise security, no model training on your data." },
      { title: "Multi-Modal Capabilities", desc: "Text, image, audio, and video — our AI tools can process and generate across all content modalities." },
      { title: "White-Label Ready", desc: "We build tools that can be white-labeled and sold as your own product or embedded in your platform." },
    ],
    faqs: [
      { q: "Can you build a tool similar to ChatGPT but trained on our data?", a: "Yes. We build custom RAG-powered chat interfaces that answer questions exclusively from your knowledge base." },
      { q: "Can AI tools generate images and videos for our marketing team?", a: "Absolutely. We build internal image and video generation tools using DALL·E, Stable Diffusion, and Runway ML." },
      { q: "How do you ensure the AI doesn't produce wrong or harmful content?", a: "We implement content filters, output validation layers, and human-review workflows for sensitive use cases." },
      { q: "Can the tool be integrated into our existing platform or website?", a: "Yes. All tools are built as embeddable widgets or API endpoints that integrate into any existing system." },
    ],
    caseStudy: {
      client: "PropVista Real Estate",
      challenge: "Marketing team spent 3+ hours writing each property listing description and social media post.",
      solution: "We built a custom AI content tool that generates listing descriptions, ad copy, and social posts from just a property data form.",
      result: "Content creation time reduced from 3 hours to 4 minutes. Team now publishes 5x more listings per week. Engagement on AI-generated posts up 35%."
    }
  },

  "bulk-sms-system": {
    title: "Bulk SMS System",
    slug: 'bulk-sms-system',
    heroText: "Instant Reach, Guaranteed Delivery.",
    description: "Power your marketing with high-throughput SMS systems. Reach thousands of customers instantly with transactional and promotional messaging solutions.",
    details: ["Transactional SMS API", "Marketing Campaigns", "OTP Services", "Real-time Tracking"],
    icon: 'https://getitsms.com/wp-content/uploads/2021/12/need-of-bulk-sms-for-business-growth.webp',
    stats: [
      { value: "98%", label: "Delivery Rate" },
      { value: "7 sec", label: "Average Delivery Time" },
      { value: "500K+", label: "SMS Sent Daily" },
      { value: "160+", label: "Countries Supported" },
    ],
    process: [
      { step: "01", title: "Account Setup", desc: "We set up your sender ID registration, DLT compliance (India), and telecom operator onboarding." },
      { step: "02", title: "Template Approval", desc: "All message templates are submitted and approved through TRAI/DLT portals for compliant delivery." },
      { step: "03", title: "API Integration", desc: "SMS API is integrated into your website, app, or backend system with full documentation and SDKs." },
      { step: "04", title: "Campaign Setup", desc: "Audience segmentation, scheduling, personalization tags, and A/B testing are configured for each campaign." },
      { step: "05", title: "Analytics & Reporting", desc: "Real-time delivery reports, click tracking, and opt-out management dashboards are provided." },
    ],
    technologies: ["Twilio", "MSG91", "Exotel", "SMPP Protocol", "REST APIs", "DLT Portal", "Node.js", "Redis", "PostgreSQL", "Webhooks"],
    whyUs: [
      { title: "DLT Compliant", desc: "We handle all TRAI DLT registration, header setup, and template approval for fully compliant SMS delivery in India." },
      { title: "High Throughput", desc: "Our infrastructure supports sending 100,000+ messages per minute with guaranteed delivery rates above 98%." },
      { title: "Smart Personalization", desc: "Dynamic variables in messages — name, order ID, amount — make every SMS feel personal at scale." },
      { title: "Two-Way SMS", desc: "Receive customer replies and trigger automated workflows based on incoming SMS responses." },
    ],
    faqs: [
      { q: "What is DLT registration and do I need it?", a: "DLT (Distributed Ledger Technology) registration is mandatory for all businesses sending commercial SMS in India. We handle the entire process for you." },
      { q: "Can I send SMS internationally?", a: "Yes. We support SMS delivery to 160+ countries through our international carrier network with competitive per-message pricing." },
      { q: "How do I import my contact list?", a: "Upload via CSV, Excel, or sync directly from your CRM. Contacts can be segmented into multiple groups for targeted campaigns." },
      { q: "What's the difference between transactional and promotional SMS?", a: "Transactional SMS (OTPs, alerts) are delivered 24/7. Promotional SMS (marketing) can only be sent between 9 AM – 9 PM per TRAI rules." },
    ],
    caseStudy: {
      client: "QuickMart E-Commerce",
      challenge: "Order confirmation and delivery update emails were being ignored — customers kept calling support for order status.",
      solution: "We implemented a transactional SMS system with real-time order status updates, delivery alerts, and OTP authentication.",
      result: "Support call volume reduced by 55%. Order-related queries dropped significantly. Customer satisfaction with delivery communication rated 4.8/5."
    }
  },

  "business-automation": {
    title: "Business Automation",
    slug: 'business-automation',
    heroText: "Streamline Your Operations.",
    description: "End-to-end automation of your business processes. We integrate your tools and data to create a synchronized, self-operating business environment.",
    details: ["ERP/CRM Automation", "Inventory Management", "Workflow Orchestration", "Data Sync Solutions"],
    icon: 'https://cloudaccessglobal.uk/wp-content/uploads/2022/09/bpa.jpg',
    stats: [
      { value: "65%", label: "Operational Cost Saved" },
      { value: "0", label: "Manual Data Entry Required" },
      { value: "Real-time", label: "Data Across All Systems" },
      { value: "3 weeks", label: "Average Implementation" },
    ],
    process: [
      { step: "01", title: "Operations Audit", desc: "We map every workflow, identify manual steps, and calculate the cost of inefficiency in time and money." },
      { step: "02", title: "Automation Roadmap", desc: "Processes are prioritized by ROI potential and automated in phases to minimize disruption." },
      { step: "03", title: "Tool Integration", desc: "We connect your ERP, CRM, accounting software, and communication tools via APIs and automation platforms." },
      { step: "04", title: "Workflow Automation", desc: "Triggers, conditions, and actions are configured to create self-running workflows across all connected tools." },
      { step: "05", title: "Dashboard & Alerts", desc: "Live operations dashboards and anomaly alerts ensure you always have visibility and control." },
    ],
    technologies: ["Zapier", "Make (Integromat)", "n8n", "Power Automate", "Node.js", "REST APIs", "SAP", "Tally API", "Zoho", "Slack"],
    whyUs: [
      { title: "System-Agnostic", desc: "We automate across any combination of tools — Tally, SAP, Zoho, HubSpot, Shopify, QuickBooks, and 1000+ more." },
      { title: "No Data Silos", desc: "Every tool in your business talks to every other — eliminating duplicate data entry and inconsistencies." },
      { title: "Scalable Infrastructure", desc: "Automation built to handle 10x your current volume without rework as your business grows." },
      { title: "Visible ROI", desc: "We measure time saved, errors eliminated, and cost reduction — and report it to you monthly." },
    ],
    faqs: [
      { q: "Can you automate processes that use legacy software?", a: "Yes. We use a combination of RPA (Robotic Process Automation) and APIs to automate even legacy systems without built-in integrations." },
      { q: "What happens when an automated workflow fails?", a: "All workflows have error handling, retry logic, and alerting built in. You're notified instantly if any step fails." },
      { q: "Is business automation only for large companies?", a: "Not at all. Even small businesses with 10 employees can benefit enormously from automating repetitive tasks." },
      { q: "How long does it take to automate our operations?", a: "Simple workflows can be automated in days. Complex multi-system orchestration typically takes 2–6 weeks." },
    ],
    caseStudy: {
      client: "Horizon Imports & Exports",
      challenge: "Staff were manually copying order data between their website, Tally, WhatsApp, and shipping software — taking 6 hours daily.",
      solution: "We built a central automation hub that syncs orders from the website to Tally, triggers WhatsApp notifications, and books shipments automatically.",
      result: "6 hours of daily manual work eliminated. Errors in data entry reduced to zero. Order processing speed increased by 8x."
    }
  },

  "api-integration": {
    title: "API Integration",
    slug: 'api-integration',
    heroText: "Connecting Your Digital Ecosystem.",
    description: "Bridge the gap between different software platforms. We build secure and reliable API integrations that allow your systems to talk to each other seamlessly.",
    details: ["Third-party API Setup", "Custom API Development", "Payment Gateway Sync", "Cloud Integrations"],
    icon: 'https://lh6.googleusercontent.com/44MNd0eGfLmfnPxcv5qtzXJNoBSRezsIdVQ17IN24Q4znBUEnmalbyyBeTYqajls6PFp-z5_Aq8BATLDVDs-u1MLmP-i4hAoh5YBHqcAxU9dBuOmK_IY7vXTZetS9KP6779Erciwu_9ZqNKg7EJSLOUs2sCxbsoUJAD5-CQOmbpxxU7WH3GGyefaLQ',
    stats: [
      { value: "300+", label: "APIs Integrated" },
      { value: "99.95%", label: "Uptime SLA" },
      { value: "50ms", label: "Avg API Response Time" },
      { value: "0", label: "Data Loss Incidents" },
    ],
    process: [
      { step: "01", title: "Integration Discovery", desc: "We map all systems, understand data flows, and document the exact integration requirements." },
      { step: "02", title: "API Design", desc: "For custom APIs, we design RESTful or GraphQL schemas with security and scalability built in from the start." },
      { step: "03", title: "Development & Testing", desc: "Integration code is developed with full test coverage — unit, integration, and end-to-end testing." },
      { step: "04", title: "Security Hardening", desc: "OAuth 2.0, API key management, rate limiting, and payload validation ensure all integrations are secure." },
      { step: "05", title: "Monitoring & Maintenance", desc: "API health dashboards, automated alerts, and version management keep integrations running reliably." },
    ],
    technologies: ["REST", "GraphQL", "gRPC", "OAuth 2.0", "Webhooks", "Node.js", "Python", "Postman", "AWS API Gateway", "Kong API Gateway"],
    whyUs: [
      { title: "Any-to-Any Integration", desc: "Whatever systems you use, we find a way to connect them — custom adapters, middleware, or native integrations." },
      { title: "Production-Grade Security", desc: "Every API integration is built with enterprise security — no hardcoded credentials, proper token management, and encryption." },
      { title: "Documentation Included", desc: "Every custom API comes with comprehensive Swagger/OpenAPI documentation for your development team." },
      { title: "Versioning & Backward Compatibility", desc: "We design APIs to be future-proof with versioning strategies that protect existing consumers during updates." },
    ],
    faqs: [
      { q: "We want to connect our ERP to our e-commerce store. Is that possible?", a: "Yes. This is one of our most common integrations — syncing inventory, orders, and customer data between ERP and e-commerce platforms." },
      { q: "Can you integrate payment gateways like Razorpay or Stripe?", a: "Absolutely. We integrate Razorpay, Stripe, PayPal, Cashfree, PayU, and any other payment gateway into web or mobile applications." },
      { q: "How do you handle API rate limits?", a: "We implement intelligent queuing, caching, and retry logic to work within rate limits without data loss or delays." },
      { q: "What if the third-party API we need to integrate doesn't have documentation?", a: "We reverse-engineer undocumented APIs through network analysis and create our own integration adapters." },
    ],
    caseStudy: {
      client: "PharmaPlus Distribution",
      challenge: "Orders placed on their website weren't reflecting in their ERP, causing inventory mismatches and delayed dispatches.",
      solution: "We built a bidirectional integration between WooCommerce and their SAP ERP with real-time inventory sync and automated order processing.",
      result: "Inventory accuracy improved to 99.8%. Order dispatch time cut from 24 hours to 2 hours. Zero overselling incidents since go-live."
    }
  },

  "wordpress-development": {
    title: "WordPress Development",
    slug: 'wordpress-development',
    heroText: "Flexible and Powerful Web Presence.",
    description: "Custom WordPress solutions ranging from simple blogs to complex e-commerce stores. We build themes and plugins that are fast, secure, and easy to manage.",
    details: ["Custom Theme Design", "Plugin Development", "WooCommerce Experts", "Speed Optimization"],
    icon: 'https://tiimg.tistatic.com/fp/1/004/925/wordpress--development-services-199.jpg',
    stats: [
      { value: "150+", label: "WordPress Sites Built" },
      { value: "<1s", label: "Target Load Time" },
      { value: "100", label: "Google PageSpeed Score" },
      { value: "0", label: "Plugin Conflicts Tolerated" },
    ],
    process: [
      { step: "01", title: "Scope & Planning", desc: "We understand your content strategy, e-commerce needs, and growth plans to architect the right WordPress setup." },
      { step: "02", title: "Custom Theme Development", desc: "Pixel-perfect, responsive WordPress themes built from scratch — no bloated page builders." },
      { step: "03", title: "Plugin Development", desc: "Custom plugins for unique functionality that off-the-shelf solutions can't provide." },
      { step: "04", title: "Speed & SEO Optimization", desc: "Caching, CDN setup, image optimization, lazy loading, and Yoast/RankMath configuration for top performance." },
      { step: "05", title: "Training & Handover", desc: "We train your team to manage content, update plugins, and use the CMS with confidence." },
    ],
    technologies: ["WordPress", "WooCommerce", "Advanced Custom Fields", "Elementor", "WPGraphQL", "PHP", "MySQL", "Cloudflare", "WP Rocket", "WPML"],
    whyUs: [
      { title: "No-Template Approach", desc: "Every site we build is coded from scratch — not assembled from pre-made templates — for maximum performance and uniqueness." },
      { title: "WooCommerce Specialists", desc: "From simple product stores to complex multi-vendor marketplaces, our WooCommerce expertise is unmatched." },
      { title: "Security Hardened", desc: "Two-factor authentication, file permission hardening, WAF setup, and malware scanning are standard on every project." },
      { title: "Easy to Manage", desc: "We build custom admin interfaces that make managing your content effortless — no developer needed for day-to-day updates." },
    ],
    faqs: [
      { q: "Can I update my website content myself after it's built?", a: "Absolutely. WordPress is built for self-management. We train you and create a custom admin experience that makes updates intuitive." },
      { q: "Do you migrate existing WordPress sites?", a: "Yes. We migrate sites from any host, update PHP/WordPress versions, and re-optimize for speed after migration." },
      { q: "How do you handle WordPress security?", a: "We implement security headers, disable XML-RPC, use strong authentication, set up WAF rules, and scan for vulnerabilities monthly." },
      { q: "Can you build a multisite network for our regional websites?", a: "Yes. WordPress Multisite allows managing multiple regional or brand websites from a single installation — we specialize in this." },
    ],
    caseStudy: {
      client: "JewelHouse Exports",
      challenge: "A jewelry exporter's WordPress site scored 28 on Google PageSpeed, causing high bounce rates and poor Google rankings.",
      solution: "We rebuilt the site with a custom theme, optimized image formats (WebP), implemented caching, CDN, and deferred non-critical scripts.",
      result: "PageSpeed score improved from 28 to 97. Organic traffic grew 180% in 4 months. Bounce rate reduced from 78% to 41%."
    }
  },

  "digital-marketing": {
    title: "Digital Marketing",
    slug: 'digital-marketing',
    heroText: "Data-Driven Growth Strategies.",
    description: "Scale your business with integrated digital marketing. We combine SEO, PPC, and social media to drive traffic, leads, and measurable ROI.",
    details: ["Social Media Marketing", "Google Ads (PPC)", "Content Strategy", "Email Marketing"],
    icon: 'https://img.freepik.com/free-vector/digital-marketing-concept-with-online-advertising-media-symbols-flat_1284-31958.jpg?semt=ais_hybrid&w=740&q=80',
    stats: [
      { value: "4.5x", label: "Average ROAS Achieved" },
      { value: "300%", label: "Avg Organic Traffic Growth" },
      { value: "₹50Cr+", label: "Ad Spend Managed" },
      { value: "1000+", label: "Campaigns Launched" },
    ],
    process: [
      { step: "01", title: "Market Research", desc: "Deep competitive analysis, audience profiling, and channel assessment to build a data-driven marketing strategy." },
      { step: "02", title: "Campaign Setup", desc: "Ad accounts, tracking pixels, UTM parameters, and conversion goals are configured for full-funnel attribution." },
      { step: "03", title: "Content Creation", desc: "Platform-optimized content — ads, posts, videos, email — crafted to resonate with your target audience." },
      { step: "04", title: "Launch & Optimize", desc: "Campaigns launch with continuous A/B testing of creatives, audiences, bidding strategies, and landing pages." },
      { step: "05", title: "Reporting & Strategy", desc: "Weekly performance reports with insights, and monthly strategy reviews to scale what's working." },
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Google Analytics 4", "SEMrush", "Mailchimp", "HubSpot", "Hotjar", "Canva", "Hootsuite"],
    whyUs: [
      { title: "Full-Funnel Thinking", desc: "We don't just drive traffic — we optimize every stage from awareness to conversion to retention." },
      { title: "Transparent Reporting", desc: "Custom dashboards show exactly where every rupee is spent and what return it generates — no hidden metrics." },
      { title: "Creative + Data", desc: "Our team combines creative content strategy with data science — ensuring campaigns are both compelling and effective." },
      { title: "Platform Agnostic", desc: "Google, Meta, LinkedIn, YouTube, Pinterest — we run campaigns on the platforms where your audience actually lives." },
    ],
    faqs: [
      { q: "What's the minimum budget needed for digital marketing?", a: "We recommend a minimum monthly budget of ₹30,000 for ad spend, plus our management fee. Higher budgets unlock more aggressive growth." },
      { q: "How long before we see results?", a: "Paid campaigns show results in 2–4 weeks. SEO typically requires 3–6 months to show significant organic traffic growth." },
      { q: "Do you create the ad content and creatives too?", a: "Yes. Our in-house design and copywriting team creates all ad creatives, videos, landing pages, and email content." },
      { q: "How do you track ROI from digital marketing?", a: "We set up end-to-end conversion tracking — from ad click to purchase — using GA4, pixel tracking, and CRM integrations." },
    ],
    caseStudy: {
      client: "SkinGlow Beauty Brand",
      challenge: "A D2C beauty brand was spending ₹2 Lakhs/month on Meta ads with a ROAS of just 1.2x — barely breaking even.",
      solution: "We restructured the campaign architecture, refreshed creatives with UGC-style videos, and built a retargeting funnel with personalized offers.",
      result: "ROAS improved from 1.2x to 5.8x within 3 months. Monthly revenue from paid channels grew 4x. Cost per acquisition reduced by 62%."
    }
  },

  "seo-services": {
    title: "SEO Services",
    slug: 'seo-services',
    heroText: "Rank Higher, Grow Faster.",
    description: "Dominate search engine results with our advanced SEO strategies. We focus on technical SEO, content optimization, and high-quality link building.",
    details: ["Technical SEO Audit", "On-Page Optimization", "Backlink Strategy", "Local SEO & Maps"],
    icon: 'https://trizoneindia.com/wp-content/uploads/2024/12/Trizone-title-head-Blog_33.webp',
    stats: [
      { value: "Top 3", label: "Avg Ranking Achieved" },
      { value: "280%", label: "Avg Organic Traffic Growth" },
      { value: "6 Months", label: "to First Page Results" },
      { value: "0", label: "Black-Hat Tactics Used" },
    ],
    process: [
      { step: "01", title: "SEO Audit", desc: "Comprehensive audit of 200+ ranking factors — technical health, on-page signals, backlink profile, and competitor gaps." },
      { step: "02", title: "Keyword Strategy", desc: "Data-driven keyword research targeting commercial intent terms with achievable competition levels for maximum ROI." },
      { step: "03", title: "Technical Fixes", desc: "Core Web Vitals, site architecture, crawlability, schema markup, and indexing issues are resolved first." },
      { step: "04", title: "Content Optimization", desc: "Existing pages are optimized for target keywords. New content is planned to capture additional search demand." },
      { step: "05", title: "Link Building", desc: "White-hat link acquisition through guest posts, digital PR, resource link building, and competitor backlink replication." },
    ],
    technologies: ["Google Search Console", "SEMrush", "Ahrefs", "Screaming Frog", "Google Analytics 4", "Surfer SEO", "Schema.org", "Yoast", "Moz", "Cloudflare"],
    whyUs: [
      { title: "White-Hat Only", desc: "We use only Google-approved techniques. No PBNs, no link farms, no shortcuts that risk penalties." },
      { title: "Content-Led Strategy", desc: "We build topical authority through strategic content clusters — making your site the go-to resource in your niche." },
      { title: "Technical Excellence", desc: "Our SEO engineers fix the deep technical issues most agencies ignore — log file analysis, JavaScript rendering, and crawl budget." },
      { title: "Local SEO Specialists", desc: "Dominate Google Maps and local pack results with optimized Google Business Profile, citations, and review strategy." },
    ],
    faqs: [
      { q: "How long does SEO take to show results?", a: "Expect initial improvements in 2–3 months, meaningful traffic growth in 4–6 months, and strong ROI within 6–12 months." },
      { q: "Can you guarantee Page 1 rankings?", a: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is complex. We do guarantee measurable traffic growth and improved visibility." },
      { q: "Do you work with e-commerce websites?", a: "Yes. E-commerce SEO is a specialty — we optimize category pages, product pages, faceted navigation, and handle duplicate content issues." },
      { q: "What's included in your monthly SEO reports?", a: "Keyword ranking changes, organic traffic trends, new backlinks acquired, technical issues fixed, and next-month action plan." },
    ],
    caseStudy: {
      client: "LegalEase Consultants",
      challenge: "A legal consultancy had virtually no online presence — their website received fewer than 200 organic visitors per month.",
      solution: "We fixed 47 technical SEO issues, published 24 targeted blog posts, and built 180+ high-authority backlinks over 8 months.",
      result: "Organic traffic grew from 200 to 11,400 visits/month. 38 keywords ranking on Page 1. Inbound lead volume increased 12x."
    }
  }
};