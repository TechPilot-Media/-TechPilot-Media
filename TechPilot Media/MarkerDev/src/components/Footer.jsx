import React, { useEffect, useState } from "react";

export default function IdeaDeservesBetter() {
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });

  const handleCopyEmail = () => {
    const email = "techpilotmedia@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => alert("Email copied to clipboard!"))
      .catch((err) => console.error("Failed to copy email: ", err));
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const offsetX = (e.clientX - centerX) / 40;
      const offsetY = (e.clientY - centerY) / 40;
      setPupilPos({ x: offsetX, y: offsetY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#240CF3] text-white font-sans overflow-hidden p-6 flex flex-col justify-between">
      <div className="absolute top-[65vh] left-400 transform -translate-x-1/2 gap-8 hidden lg:flex">

  <div className="w-[240px] h-[200px] border-[14px] border-black rounded-[60px] bg-transparent flex items-center justify-center">
    <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center">
      <div
        className="w-[60px] h-[60px] bg-black rounded-full transition-all duration-75"
        style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
      />
    </div>
  </div>


  <div className="w-[20px] h-[50px] bg-black" />


  <div className="w-[240px] h-[200px] border-[14px] border-black rounded-[60px] bg-transparent flex items-center justify-center">
    <div className="w-[140px] h-[140px] bg-white rounded-full flex items-center justify-center">
      <div
        className="w-[60px] h-[60px] bg-black rounded-full transition-all duration-75"
        style={{ transform: `translate(${pupilPos.x}px, ${pupilPos.y}px)` }}
      />
    </div>
  </div>
</div>


 
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            25% { transform: translateY(-10px) translateX(5px); }
            50% { transform: translateY(5px) translateX(-5px); }
            75% { transform: translateY(-5px) translateX(3px); }
          }
          .float { animation: float 6s ease-in-out infinite; }
          .float-slow { animation: float 8s ease-in-out infinite; }
          .float-fast { animation: float 4s ease-in-out infinite; }
        `}
      </style>


      <div className="hidden lg:block">
        <div className="absolute top-40 left-8 rotate-[-10deg] bg-white text-black px-8 py-7 text-3xl rounded-full shadow-lg font-semibold float">
          Brand Identity
        </div>
        <div className="absolute top-32 left-[340px] rotate-[8deg] bg-yellow-400 text-black px-8 py-7 text-4xl rounded-full shadow-lg font-semibold float-slow">
          Strategic Advertising Campaigns
        </div>
        <div className="absolute top-[22rem] left-[210px] rotate-[15deg] bg-indigo-300 text-black px-8 py-7 text-5xl rounded-full shadow-lg font-semibold float-fast">
          Virtual & Motion Design
        </div>
        <div className="absolute top-[28rem] left-20 rotate-[-8deg] bg-gray-700 text-white px-8 py-7 text-3xl rounded-full shadow-lg font-semibold float">
          Content Strategy
        </div>
      </div>

      <div className="absolute top-6 right-4 text-sm text-white hidden lg:block">
        Sorry! For that much <br /> Color Btw
      </div>

      
      <div className="mt-40 md:ml-35 text-left max-w-6xl mx-auto px-4">
        <h1
          className="text-[3rem] md:text-[6rem] lg:text-[10rem] leading-tight"
          style={{ fontFamily: "Impact, sans-serif" }}
        >
          YOUR IDEA <br /> DESERVE BETTER.
        </h1>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-40">
          <h2
            className="text-[2.5rem] md:text-[5rem] lg:text-[8rem] text-[#C6F906] underline whitespace-nowrap"
            style={{ fontFamily: "Impact, sans-serif" }}
          >
            TALK TO US!
          </h2>
          <button
            onClick={handleCopyEmail}
            className="text-lg md:text-2xl bg-[#C6F906] text-black font-bold px-8 md:px-12 py-4 md:py-6 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:bg-yellow-400 whitespace-nowrap"
          >
            Click here to <br className="hidden md:block" /> copy email
          </button>
        </div>
        <p className="mt-6 text-white text-xl md:text-3xl">
          For Project , as a partner or as a talent
        </p>
      </div>

      <footer className="w-full bg-[#240CF3] text-white  mt-50 ">
  <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
            <img src="/images/logolight.png" alt="Techt Logo" className="h-50 " />

              
           
            </div>

            <div>
              <h5 className="text-3xl font-semibold mb-4 text-[#C6F906]">Other Pages</h5>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline text-2xl">Homepage</a></li>
                <li><a href="/aboutus" className="hover:underline text-2xl">About Us</a></li>
                <li><a href="/services" className="hover:underline text-2xl">Services</a></li>
                <li><a href="/contact" className="hover:underline text-2xl">Contact</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-4xl font-semibold mb-4 text-[#C6F906]">Contact Info</h5>
              <p>Noida, sector 64 , Uttar Pradesh</p>
              <p>techpilotmedia@gmail.com</p>
              <p>9953553842</p>
            </div>
          </div>

          <p className="text-center text-sm mt-12">
            © 2022 Copyright. All rights reserved by{" "}
            <span className="bg-lime-400 text-black px-2">TechPilot Media</span>.
          </p>
        </div>
      </footer>
    </div>
  );
}
