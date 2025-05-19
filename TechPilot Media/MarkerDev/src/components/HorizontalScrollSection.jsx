import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HorizontalScrollFramer = () => {
  const scrollRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-67%"]);

  return (
    <section className="h-[300vh] relative hidden lg:block" ref={scrollRef}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex h-full w-[300vw] snap-x snap-mandatory"
        >
          <div className="w-screen h-full flex items-center justify-center bg-white snap-start relative overflow-hidden">
            <motion.img
              src="/images/call.png"
              alt="Mic"
              className="absolute w-[300px] left-0 scale-[2] right-[-1px] z-10"
              animate={{ rotate: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <h1
              className="absolute text-[21vw] text-[#858585] leading-none text-center select-none"
              style={{ fontFamily: "Impact, sans-serif" }}
            >
              HERE<br />WE ARE
            </h1>

            <motion.img
              src="/images/devio.png"
              alt="Development"
              className="absolute left-90 top-1/5 w-[550px] z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.img
              src="/images/markio.png"
              alt="Marketing"
              className="absolute right-95 top-1/4 w-[570px] z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/9 translate-y-[30px] w-[58%]"
              animate={{ rotate: [-14, -20, -14] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/images/handio.png" alt="Hands" className="w-full" />
            </motion.div>
          </div>

          <div className="w-screen h-full relative bg-white text-black flex items-center justify-between snap-start">
            <motion.img
              src="/images/phone.png"
              alt="Phone"
              className="w-[1500px] absolute left-[-550px] z-10"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute left-1/4 top-10 transform -translate-x-1/2 text-center">
              <h2 className="text-9xl font-black text-blue-700 leading-none">
                TAKE IT<br />ALL
              </h2>
            </div>

            <div className="absolute right-79 top-[7%]">
              <div className="flex w-[700px] h-[800px] gap-3">
                <div className="flex flex-col gap-3 w-full h-full">
                  <div className="bg-[#C6F906] h-[68%] w-full relative overflow-hidden">
                    <video
                      src="/images/gg.mp4"
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>

                  <div className="bg-gray-200 h-[30%] w-full flex items-center justify-center perspective-[1200px] overflow-hidden">
                    <motion.img
                      src="/images/mail.png"
                      alt="3D Image"
                      className="w-[300px] h-auto drop-shadow-2xl"
                      animate={{
                        rotateX: [0, 25, 0, -25, 0],
                        rotateY: [0, -25, 0, 25, 0],
                        scale: [1, 1.15, 1, 1.15, 1],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 w-full h-full">
                  <div className="bg-gray-200 h-[30%] w-full flex items-center justify-center perspective-[1200px] overflow-hidden">
                    <motion.img
                      src="/images/rock.png"
                      alt="Fancy 3D Image"
                      className="w-[270px] h-auto"
                      animate={{
                        rotateX: [0, 25, 0, -25, 0],
                        rotateY: [0, -25, 0, 25, 0],
                        scale: [1, 1.15, 1, 1.15, 1],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    />
                  </div>

                  <div className="bg-gray-600 h-[68%] w-full relative overflow-visible">
                    <img
                      src="/images/micimg.png"
                      alt="Mic"
                      className="absolute w-[999px] scale-[2] right-[-1px] bottom-[-px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-screen h-full relative flex items-center justify-center bg-white snap-start overflow-hidden">
            <h1
              className="absolute text-[19vw] right-[28%] text-[#323232] leading-none text-center select-none z-0"
              style={{ fontFamily: 'Impact, Charcoal, sans-serif' }}
            >
              HERE<br />TO EXIST
            </h1>

            <motion.img
              src="/images/cam.png"
              alt="Camera Hand"
              className="absolute scale-[1.4] right-[1%] bottom-[19%] z-10"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScrollFramer;
