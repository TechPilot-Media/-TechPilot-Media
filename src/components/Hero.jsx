import React from "react";
import { motion } from "framer-motion";


const SparkIconOne = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#FFD700"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13 2L3 14H12L11 22L21 10H13L13 2Z" />
  </svg>
);


const SparkIconTwo = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="#FF6347"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 2L16 12H22L17 16L19 22L12 18L5 22L7 16L2 12H8L12 2Z" />
  </svg>
);

const Hero = () => {
  return (
    <section className="relative w-full  overflow-hidden">

      
      <div className="relative w-full">
        <div className="w-full bg-[#240CF3] flex flex-col pt-20 pb-32">
          
          <div className="flex justify-center">
            <h1
              className="text-white  text-[80px] sm:text-[120px] md:text-[200px] lg:text-[250px] xl:text-[300px] leading-none text-center"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              DEVELOP <br /> GROWTH
            </h1>
          </div>

          
          <div className="flex justify-start px-6 sm:px-10 mt-4 sm:mt-0">
            <p className="text-white max-w-sm sm:max-w-md text-xs sm:text-sm">
              Known for intent-based strategies that deliver real results. improveFX is a top-rated agency, affordable services, startups.
            </p>
          </div>
        </div>

    
        <motion.img
          src="/images/heroimg.png"
          alt="Phone"
          className="absolute top-[60%] sm:top-[65%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] md:w-[800px] lg:w-[1100px] xl:w-[1300px] z-30"
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        
        <div className="bg-white h-[200px] sm:h-[300px] md:h-[400px] w-full"></div>
      </div>

      
      <div className="absolute top-[55%] sm:top-[60%] -rotate-4 w-full overflow-hidden z-10">
        <div className="bg-[#C6F906] py-4 sm:py-8 relative w-full h-[80px] sm:h-[120px] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(6).fill(
              <>
                <span className="text-[#3F3E3E] text-4xl sm:text-6xl md:text-7xl font-extrabold mx-6 sm:mx-12">BRANDING</span>
                <span className="text-[#3F3E3E] text-4xl sm:text-6xl md:text-7xl font-extrabold mx-6 sm:mx-12">SEO</span>
                <span className="text-[#3F3E3E] text-4xl sm:text-6xl md:text-7xl font-extrabold mx-6 sm:mx-12">ADVERTISING</span>
              </>
            )}
          </div>
        </div>
      </div>

     
      <div className="absolute top-[55%] sm:top-[60%] rotate-6 w-full overflow-hidden z-50">
        <div className="bg-[#C6F906] py-4 sm:py-8 relative w-full h-[80px] sm:h-[120px] overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {Array(6).fill(
              <>
                <span className="text-[#3F3E3E] text-4xl sm:text-6xl md:text-7xl font-extrabold mx-6 sm:mx-12">BRANDING</span>
                <span className="text-[#3F3E3E] text-4xl sm:text-6xl md:text-7xl font-extrabold mx-6 sm:mx-12">SEO</span>
                <span className="text-[#3F3E3E] text-4xl sm:text-6xl md:text-7xl font-extrabold mx-6 sm:mx-12">ADVERTISING</span>
              </>
            )}
          </div>
        </div>
      </div>

      
      <motion.div
        className="absolute rotate-[-40deg] top-[15%] sm:top-[20%] left-[20%] sm:left-[30%] z-40"
        animate={{ y: ["2%", "-20%", "0%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <SparkIconOne className="w-20 h-40 sm:w-40 sm:h-80" />
      </motion.div>

      <motion.div
        className="absolute rotate-[20deg] top-[25%] sm:top-[35%] left-[60%] sm:left-[75%] z-40"
        animate={{ y: ["0%", "-30%", "0%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      >
        <SparkIconOne className="w-24 h-48 sm:w-46 sm:h-90" />
      </motion.div>

    </section>
  );
};

export default Hero;
