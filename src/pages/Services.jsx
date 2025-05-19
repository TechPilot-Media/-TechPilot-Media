import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const services = [
  {
    title: "Cyber Security",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: "🛡️",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "IT Management",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: "💻",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "IT Consultancy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: "💡",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "Cloud Computing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: "☁️",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "Software Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: "🖥️",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    title: "Marketing Strategy",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    icon: "📈",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
];

export default function ServicesPage() {
  return (
    <>
    <Nav />
    <div className="bg-white font-sans text-gray-900">
    
      <section className="relative text-center py-24 rounded-b-2xl mb-16 overflow-hidden">
       
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/images/servideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

      
        <div className="absolute inset-0 bg-opacity-80"></div>

        
        <div className="relative z-10">
          <h2 className="text-8xl font-extrabold text-white uppercase tracking-tight mb-6">
            Services
          </h2>
          <p className="text-xl text-white mt-2">Home &gt; Services</p>
        </div>
      </section>

      
      <div className="text-center max-w-4xl mx-auto px-6">
        <p className="text-lime-500 font-semibold text-lg mb-2">Our Services</p>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-16">
          Our Mission Is To Make Your{" "}
          <span className="bg-lime-400 px-2 rounded text-black">Business</span>{" "}
          Better Through Technology
        </h2>
      </div>

   
      <div className="grid mt-10 px-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
  {services.map((service, index) => (
    <div
      key={index}
      className={`${service.bgColor} ${service.textColor} p-12 rounded-2xl shadow-2xl text-center w-full min-h-[400px] flex flex-col justify-center transform transition-transform duration-300 hover:bg-[#240CF3] hover:text-white hover:-rotate-1 hover:scale-105`}
    >
      <div className="text-7xl mb-8">{service.icon}</div>
      <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
      <p className="text-lg opacity-90 leading-relaxed">{service.description}</p>
    </div>
  ))}
</div>


     
      <div className="mt-24 px-7 text-center">
        <h3 className="text-8xl font-extrabold text-[#3F3E3E] uppercase tracking-tight">
          Pricing Plan
        </h3>
        <p className="text-lg text-[#3F3E3E] max-w-2xl mx-auto mb-12">
          We Make IT Simple, Faster, And Less Expensive. Donec venenatis nunc
          nec dui faucibus tempus. Fusce sed interdum dolor, non ultricies elit.
        </p>
   

  <div className="grid grid-cols-1 mb-20 md:grid-cols-3 gap-8">
  
    <div className="bg-gray-100 text-black p-8 rounded-xl shadow-xl transform transition-transform duration-300 hover:bg-[#240CF3] hover:text-white hover:-rotate-1 hover:scale-105">
      <h4 className="text-2xl font-bold mb-4">SEO</h4>
      <p className="text-3xl font-bold text-lime-400 mb-2">
        Rs10,000<span className="text-base font-medium">/Project</span>
      </p>
      <p className="mb-6">Good For Personal Portfolio</p>
      <ul className="space-y-2 mb-6">
        <li>✔ Target keywords</li>
        <li>✔ Keyword Research</li>
        <li>✔ On-Page SEO optimization</li>
        <li>✔ Basic Technical SEO audit </li>
        <li>✔ Local SEO Setup  </li>
      </ul>
     
    </div>

    
    <div className="bg-gray-100 text-black p-8 rounded-xl shadow-xl transform transition-transform duration-300 hover:bg-[#240CF3] hover:text-white hover:-rotate-1 hover:scale-105">
      <h4 className="text-2xl font-bold mb-4">Social Media Growth Package</h4>
      <p className="text-3xl font-bold text-lime-600 mb-2">
        Rs 20,000<span className="text-base font-medium">/Project</span>
      </p>
      <p className="mb-6">Good For Small Company</p>
      <ul className="space-y-2 mb-6">
        <li>✔ Daily Posts</li>
        <li>✔ Reels/Shorts Managements</li>
        <li>✔ Social media engagement</li>
        <li>✔ Hashtag & Trend Research</li>
        <li>✔ Profile Optimization</li>

      </ul>
     
    </div>

    
    <div className="bg-gray-100 text-black p-8 rounded-xl shadow-xl transform transition-transform duration-300 hover:bg-[#240CF3] hover:text-white hover:-rotate-1 hover:scale-105">
      <h4 className="text-2xl font-bold mb-4">E-commerce Management Package</h4>
      <p className="text-3xl font-bold text-lime-600 mb-2">
        RS 30000<span className="text-base font-medium">/Project</span>
      </p>
      <p className="mb-6">Good For Big Company</p>
      <ul className="space-y-2 mb-6">
        <li>✔ Order Management & Tracking </li>
        <li>✔ Website Fixes & Maintenance </li>
        <li>✔ Add & Setup 10 Products/Month</li>
        <li>✔ Promotional Banner Updates (2/month)</li>
        <li>✔ Customer Support Setup</li>
        <li>✔ Monthly Site Health Report </li>
      </ul>

    </div>
  </div>


      </div>

    
      <Footer />
    </div>
    </>
  );
}
