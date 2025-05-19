import React from "react";

const MarketingBanner = () => {
  return (
    <div className="text-white px-4 py-8 relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-[79%] bg-[#240CF3] z-0" />

 
      <div className="absolute rotate-[-30deg] top-20 left-10 sm:left-20 z-10 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-yellow-400 w-12 h-12 sm:w-16 sm:h-16"
        >
          <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
        </svg>
      </div>


      <div className="absolute top-[15rem] left-6 sm:left-20 text-sm sm:text-xl lg:text-2xl w-[90%] sm:w-2/5 text-white z-10">
        Specializes in performance marketing, offering services like SEO, PPC, and
        social media marketing tailored for startups aiming for rapid growth
      </div>

   
      <div className="text-right z-10 relative mt-[1rem] sm:mt-[3rem]">
        <h1 className="text-[2.5rem] sm:text-6xl lg:text-8xl xl:text-9xl mr-2 sm:mr-4 uppercase leading-tight font-[impact]">
          DESCOVER THE <br />
          POWER OF NEW <br />
          <span className="text-[#C6F906]">MARKETING</span> <br />
          AND <span className="text-[#C6F906]">SERVICES</span>
        </h1>
      </div>

      
      <div className="relative z-20 rounded-[2rem] sm:rounded-[3rem] overflow-hidden w-full max-w-7xl mx-auto mt-4 sm:mt-5 shadow-6xl">
        <video
          src="/images/goku.mp4"
          loop
          autoPlay
          muted
          className="object-cover w-full h-[300px] sm:h-[500px] lg:h-[580px] rounded-[2rem] sm:rounded-[4rem]"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-28 sm:h-36 bg-[#C6F906] overflow-hidden z-0">
        <div className="marketing-marquee whitespace-nowrap flex items-center h-full">
          <h2 className="text-[#3F3E3E] text-4xl sm:text-6xl lg:text-8xl font-extrabold mt-4 sm:mt-7 px-4">
            SEO • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH • SEO • PPC • SMM • GROWTH •
          </h2>
        </div>
      </div>

      <style jsx>{`
        .marketing-marquee {
          display: inline-block;
          animation: marketingMarquee 50s linear infinite;
        }

        @keyframes marketingMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .font-\[impact\] {
          font-family: Impact, Charcoal, sans-serif;
        }
      `}</style>
    </div>
  );
};

export default MarketingBanner;
