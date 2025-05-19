import React from 'react';
import { useNavigate } from 'react-router-dom';

const CustomVideoBox = () => {
  const navigate = useNavigate();

  const handleKnowMore = () => {
    navigate("/services");
  };

  return (
    <div className="relative -mt-29 z-10 flex flex-col items-center space-y-16 px-4 md:px-8">
      <div className="flex flex-col items-center space-y-12 text-center">
        <div className="flex flex-wrap justify-center items-center gap-6 text-[clamp(4rem,8vw,11rem)] font-extrabold leading-[1.1]">
          <span className="text-gray-700">CREATIVE</span>

          <div className="w-32 h-40 md:w-40 md:h-46">
            <svg width="142" height="168" viewBox="0 0 84 96" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="avatarMask">
                  <path d="
                    M 42 0
                    A 42 42 0 1 1 0 42
                    A 42 42 0 1 1 42 0
                    L 38 84
                    L 46 
                    Z
                  " />
                </clipPath>
              </defs>
              <foreignObject width="84" height="96" clipPath="url(#avatarMask)">
                <video
                  src="/images/servid2.mp4"
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              </foreignObject>
            </svg>
          </div>

          <span className="text-indigo-600">DIGITAL</span>
        </div>

        <h2 className="text-[clamp(2rem,6vw,5rem)] font-bold tracking-tight text-gray-600 uppercase -mt-6">
          Our Services
        </h2>
      </div>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-16 w-full max-w-7xl">
        {/* Our Story */}
        <div className="w-full lg:w-auto lg:-translate-x-30 lg:self-start text-left max-w-md top-6 space-y-4">

  <h3 className="text-[clamp(2.5rem,6vw,5rem)] font-bold text-gray-800">Our Story</h3>
  <p className="text-gray-600 text-[clamp(1.1rem,2vw,1.5rem)] leading-relaxed">
    We're a specialized agency helping businesses craft and maintain a powerful online presence.
    This type of agency offers a range of services.
  </p>
  <div className="flex justify-center lg:justify-start">
    <button className="mt-4 px-5 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-medium hover:bg-indigo-200 transition">
      →
    </button>
  </div>
</div>


        {/* Video Section */}
        <div className="relative lg:right-40 w-full lg:w-[840px] h-[300px] lg:h-[500px]">
          <svg viewBox="0 0 520 280" className="w-full h-full">
            <defs>
              <clipPath id="customShape" clipPathUnits="userSpaceOnUse">
                <path d="
                  M 0 30
                  Q 0 0 30 0
                  H 500
                  Q 520 0 520 20
                  V 200
                  H 300
                  V 280
                  H 30
                  V 110
                  H 0
                  Z
                " />
              </clipPath>
            </defs>

            <foreignObject width="100%" height="100%" clipPath="url(#customShape)">
              <video
                className="w-full h-full object-cover transform -translate-x-6"
                src="/images/servid2.mp4"
                autoPlay
                loop
                muted
              />
            </foreignObject>
          </svg>

          <div className="absolute bottom-0 right-0 m-4 lg:m-8">
            <button
              onClick={handleKnowMore}
              className="px-6 md:px-10 py-4 md:py-6 bg-indigo-600 text-white text-lg md:text-2xl font-bold rounded-full shadow-xl hover:bg-indigo-700 transition"
            >
              Know More ↗
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Image */}
      <img
        src="/images/click.png"
        alt="Side Graphic"
        className="absolute top-full mt-4 lg:top-100 right-4 w-64 md:w-[450px] h-auto object-contain"
      />
    </div>
  );
};

export default CustomVideoBox;
