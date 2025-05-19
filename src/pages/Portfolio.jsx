import { ArrowUpRight } from 'lucide-react';
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const services = [
  { title: 'Brand Building & Strategy.', bgColor: 'bg-gray-800', video: '/images/aboutvid.mp4' },
  { title: 'Creative Digital Solution.', bgColor: 'bg-blue-600', video: '/images/contvid.mp4' },
  { title: 'Marketing & Campaign.', bgColor: 'bg-gray-800', video: '/images/marketv.mp4' }
];

export default function CreativeAgency() {
  return (
    <>
      <Nav />
      <div className="font-sans">
        <section className="relative min-h-screen bg-blue-800 text-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <img
              src="/images/rocket.png"
              alt="rocket"
              className="w-[90%] max-w-[400px] md:max-w-[900px] opacity-90 mix-blend-normal"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            />
          </div>

          <style>{`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-70px); }
              100% { transform: translateY(0); }
            }
          `}</style>

          <h1 className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-[16vw] font-black text-[#C6F906] leading-none z-20">
            CREATIVE
          </h1>
          <h1
            className="absolute top-[47%] left-1/2 transform -translate-x-1/2 text-[16vw] font-black text-transparent leading-none z-20"
            style={{ WebkitTextStroke: '2px #ccff00' }}
          >
            AGENCY
          </h1>

          <div className="relative z-30 flex flex-col md:flex-row items-center justify-between px-6 py-10 gap-8">
            <div className="text-left space-y-4 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <img src="/images/p2.png" alt="avatar1" className="w-9 h-9 rounded-full" />
                <img src="/images/g2.png" alt="avatar2" className="w-9 h-9 rounded-full" />
                <img src="/images/d2.png" alt="avatar3" className="w-9 h-9 rounded-full" />
                <p className="text-lg font-bold uppercase ml-2">
                  The expert team brings creativity to every project.
                </p>
              </div>
            </div>

  <div className="hidden md:block w-full md:max-w-xs text-center md:text-right">
  <p className="text-lg mb-4">
    This is our official website. Contact us today to place your order or inquire about our products and services.
  </p>
  <a
    href="/contact"
    className="inline-block border px-4 py-2 rounded-md text-lg font-semibold hover:bg-yellow-300 hover:text-black transition"
  >
    Get Started ↗
  </a>
</div>

          </div>

          <div className="absolute -bottom-6 -left-10 w-[120%] h-[15vh] bg-[#C6F906] text-black py-6 font-extrabold text-lg transform rotate-2 shadow-lg z-40 whitespace-nowrap overflow-hidden">
            <div
              className="inline-block animate-marquee px-6 text-7xl text-[#3F3E3E] font-impact"
              style={{ animation: 'marquee 35s linear infinite', whiteSpace: 'nowrap' }}
            >
              ✦ BRANDING ✦ GRAPHIC DESIGN ✦ WEB DESIGN ✦ DIGITAL PRODUCTS ✦ BRANDING ✦ GRAPHIC DESIGN ✦ WEB DESIGN ✦ DIGITAL PRODUCTS ✦
            </div>
            <style>{`
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </section>

        <div className="bg-gray-900 text-white p-12">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-6">
            <div className="flex items-center space-x-4">
              <span className="text-yellow-400 text-2xl">✦</span>
              <h3 className="text-yellow-400 text-2xl font-semibold">WHAT WE DO</h3>
            </div>
            <h2 className="text-6xl md:text-8xl font-bold font-impact text-center md:text-left">DESIGNING FOR ENJOYABLE INTERACTIONS.</h2>
            <a href="/services" className="border-2 border-yellow-400 text-yellow-400 px-4 py-2 font-semibold hover:bg-yellow-400 hover:text-black">
              ALL SERVICES
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded-xl ${service.bgColor} text-white relative`}>
                <h3 className="text-6xl font-impact font-bold mb-2">{service.title}</h3>
                <a href="#" className="absolute top-4 right-4 bg-yellow-400 p-4 rounded-full hover:animate-spin transform hover:rotate-180 transition duration-300">
                  <ArrowUpRight className="text-black text-8xl" />
                </a>
                <hr className="border-t-2 border-white mb-3 mt-10" />
                <p className="text-gray-300 mb-4 mt-5">Lorem ipsum do adipiscing elit Ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.</p>
                <video src={service.video} autoPlay loop muted className="rounded-xl mt-4 w-full"></video>
              </div>
            ))}
          </div>
        </div>

        <section className="bg-gray-50 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div>
                <h3 className="text-yellow-400 uppercase text-2xl font-semibold mb-2">Our Work</h3>
                <h2 className="text-7xl max-w-xl uppercase font-impact">
                  Transforming ideas into memorable brand experiences.
                </h2>
              </div>
              <div className="mt-6 md:mt-0">
                <p className="text-sm max-w-sm mb-2 text-gray-600">
                  Lorem ipsum dolor amet, consectetur adipiscing elit. Quisque placerat malesuada sem nec ornare.
                </p>
                <a
                  href="/contact"
                  className="inline-block border px-4 py-2 rounded-md text-sm font-semibold hover:bg-yellow-300 hover:text-black transition"
                >
                  Contact Us ↗
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-xl">Promotional Wears - Your Trusted eCommerce Store</h4>
                  <div className="overflow-hidden">
                    <iframe
                      src="https://promotionalwears.com/customized-gifts/gift-sets"
                      className="w-full h-[500px]"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl">UPI - Motion Graphics & Video (Figma Embed)</h4>
                  <div className="overflow-hidden">
                    <iframe
                      className="w-full h-[500px]"
                      src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/9qWl5ZhnvJjqSTbj2bVPwv/Untitled?node-id=0%3A1"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="bg-black text-white p-4 rounded-md">
                  <h3 className="text-6xl mb-2 font-impact">
                    Our Work Speaks For Itself
                  </h3>
                  <p className="text-m">From startups to global brands, we create impactful designs that tell stories.</p>
                  <div className="flex justify-between mt-4 items-center">
                    <span>📞 9953553842</span>
                    <a href="/portfolio" className="bg-yellow-300 px-4 py-1 text-black text-lg font-bold">
                      View All Portfolio ↗
                    </a>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-2xl">E-Commerce - Live Website Preview</h4>
                  <div className="overflow-hidden">
                    <iframe
                      src="https://uniformtailor.in/"
                      className="w-full h-[600px]"
                      title="Promotional Wears Website"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl">Portfolio - Motion Graphics (Figma Embed)</h4>
                  <div className="overflow-hidden">
                    <iframe
                      className="w-full h-[500px]"
                      src="https://parthaghosh0077.github.io/My-website/"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xl">E-Learning - Motion Graphics (Figma Embed)</h4>
                  <div className="overflow-hidden">
                    <iframe
                      className="w-full h-[500px]"
                      src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/hsCJ7qi1Xy0C2EVsakpimK/Elearning-Landing-Page?node-id=2-16&t=n0oEzK17J1fXkoVx-1"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}