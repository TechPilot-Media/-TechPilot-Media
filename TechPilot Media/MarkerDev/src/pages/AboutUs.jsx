import React, { useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const teamMembers = [
  {
    name: "DHRUV SHARMA",
    role: "Founder ",
    image: "/images/d2.png", 
    bgColor: "bg-blue-900",
    description: "Works as a developer, marketing, and sales.",
    achievements: [
      "Drive business expansion through strong client relationships.",
      "Deliver outstanding value with customized solutions.",
      "Leverage data-driven decision-making for revenue growth.",
      "Ensure sustainable partnerships and long-term success."
    ]
  },
  {
    name: "PARTHA GHOSH",
    role: "FOUNDER ",
    image: "/images/p2.png",
    bgColor: "bg-blue-900",
    description: "Partha is a technology enthusiast leading innovation in web and software development.",
    achievements: [
      "Revolutionize digital marketing with AI-driven insights.",
      "Bridge the gap between technology and human connection.",
      "Help brands engage effectively with their audience.",
      "Maximize market potential through innovative strategies."
    ]
  },
  {
    name: "GAUTAM BASTIA",
    role: "FOUNDER",
    image: "/images/g2.png",
    bgColor: "bg-blue-900",
    description: "Gautam specializes in tech and business growth strategies.",
    achievements: [
      "Build scalable and cutting-edge technology solutions.",
      "Enhance user experience with intuitive digital products.",
      "Solve real-world problems through innovative web technologies.",
      "Ensure high security and performance standards."
    ]
  }
];

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState(teamMembers[0]);

  return (
    <>
    <Nav />
    <div className="max-w-screen-xl mx-auto  space-y-20">
      {/* Title */}
      <h1
        className="text-[9rem] tracking-tight text-[#240CF3]"
        style={{ fontFamily: '"Impact", sans-serif' }}
      >
        ABOUT US.
      </h1>

      
      <div className="md:flex md:space-x-16 space-y-10 md:space-y-0">
        <div className="flex flex-col md:w-1/4 space-y-3 text-gray-600 font-medium text-sm">
          <span className="hover:underline cursor-pointer">About us.</span>
          <span className="hover:underline cursor-pointer">Our team.</span>
          <span className="hover:underline cursor-pointer">Press.</span>
        </div>

        <div className="md:w-3/4 space-y-5 text-gray-700 text-lg leading-relaxed">
        <p>
            Studio Marani, communication agency based in Milan, has been created in 2011 from Maurizio Marani after
            a long time experience with the ultrafamous McCann Erickson. Many of their clients, like l’Espresso Group
            and Radio DeeJay, will follow him in this new adventure and make others such as Radio Capital.
          </p>
          <p>
            After a fortunate encounter with the copywriter and content manager Anna Scadadelski, Studio Marani gains
            another fundamental member of its creative team. At that time, she was already collaborating with big
            international brands like Barilla, Volkswagen, Campari, Vodafone, Philips, Xella, Banca San Paolo and Fila,
            as a TV / ADV / theatre author and founder of the firm “SpotMilano” in 2000. Valentina De Franco,
            Project Manager, completes Studio Marani creativity team.
          </p>
        </div>
      </div>

  
      <div className="w-full overflow-hidden rounded-lg shadow-lg">
        <video
          src="/images/aboutvid.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-auto object-cover"
        />
      </div>

     
      <div className="grid md:grid-cols-2 items-center gap-10">
        <div className="text-2xl italic text-gray-800 leading-relaxed">
          <p className="mb-4">
            <span className="text-4xl text-black">“</span>
            Our work does make sense only if it is a faithful witness of his time.
            <span className="text-4xl text-black">”</span>
          </p>
          <p className="text-sm not-italic font-medium mt-2 text-gray-600">TechPilot Media</p>
        </div>

        <div className="w-full rounded-lg overflow-hidden shadow-md">
          <video
            src="/images/aboutvid2.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

     
      <section className="text-center">
        <h2 className="text-7xl font-extrabold text-[#333333]">
          Meet Our <span className="text-[#240CF3] font-black">TEAM</span>
        </h2>
        <p className="mt-4 text-gray-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </section>

     
      <section className="mt-10 bg-[#D9D9D9] p-10 rounded-xl shadow-lg flex flex-col md:flex-row items-center md:items-start">
        <div className="relative bg-[#1a2b448b] p-8 rounded-xl">
          <img
            src={selectedMember.image}
            alt={selectedMember.name}
            className="w-50 h-65 object-cover rounded-lg"
          />
          <span className="absolute top-3 left-3 bg-white px-4 py-1 text-sm font-semibold rounded-md shadow-md">
            {selectedMember.role}
          </span>
        </div>

        <div className="md:ml-16 mt-8 md:mt-0 text-center md:text-left">
          <h3 className="text-3xl font-bold text-gray-900">{selectedMember.name}</h3>
          <p className="mt-4 text-gray-600">{selectedMember.description}</p>
          <div className="flex justify-center md:justify-start space-x-5 mt-5 text-gray-500">
            <FaFacebookF className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
            <FaTwitter className="w-6 h-6 hover:text-blue-400 cursor-pointer" />
          </div>
          <div className="mt-10">
            <h4 className="text-xl font-semibold">{selectedMember.name}'s Experience</h4>
            <ul className="mt-5 space-y-3 text-gray-700">
              {selectedMember.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center">✅ {achievement}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

     
      <section className="mt-12 text-center py-10">
        <h2 className="text-7xl font-extrabold text-[#333333]">
          Board of <span className="text-[#240CF3] font-black">FOUNDERS</span>
        </h2>
        <p className="mt-3 text-gray-800 max-w-2xl mx-auto">
          Click on a director to view their details.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`p-0 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer ${member.bgColor}`}
              onClick={() => setSelectedMember(member)}
            >
 <div className="w-full h-95 overflow-hidden rounded-t-lg bg-gray-200">
  <img
    src={member.image}
    alt={member.name}
    className="w-full h-full object-cover align-top"
  
  />
</div>


              <div className="p-6">
                <span className="inline-block bg-white text-gray-700 px-4 py-1 text-sm font-semibold rounded-lg shadow-md">
                  {member.role}
                </span>
                <h4 className="mt-4 text-xl font-semibold text-[#C6F906]">{member.name}</h4>
                <p className="mt-3 text-white text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    
    </div>

    <Footer />
      </>
  );
};

export default AboutUs;
