import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function ContactPage() {
  return (
    <>
    <Nav />
    <div className="text-black font-sans">
    
      <section className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source src="/images/contvid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 h-full w-full flex items-center justify-between px-10 bg-black/40">
          <h1 className="text-white text-6xl md:text-6xl font-bold">Contacts</h1>
          
        </div>
      </section>

  
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-20 py-16">
      
        <div>
          <p className="text-sm mb-2 text-gray-500">/ get in touch /</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We are always ready to help you and answer your questions
          </h2>
          <p className="text-gray-600 mb-8">
            Pacific hake false trevally queen parrotfish black prickleback
            mooshad wanoonet sweeper! Greenling sleeper.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-gray-700">
            <div>
              <h4 className="font-semibold mb-1">Call Center</h4>
              
              <p> 9953553842</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Our Location</h4>
              <p>India , Noida Sector 64</p>
              <p>Dhruv Sharma</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p>techpilotmedia@gmail</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Social Network</h4>
              <div className="flex gap-3 mt-1">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-linkedin-in" /></a>
                <a href="#"><i className="fab fa-instagram" /></a>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-gray-100 p-6 md:p-10 rounded-xl">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="text-sm text-gray-600 mb-6">
            Define your goals and identify areas where AI can add value to your business.
          </p>
         

          <form 
  action="https://usebasin.com/f/831f24d68b02" 
  method="POST" 
  className="space-y-4"
>
  <input 
    type="text" 
    name="name" 
    placeholder="Full name" 
    className="w-full p-3 border border-gray-300 rounded" 
    required 
  />
  <input 
    type="email" 
    name="email" 
    placeholder="Email" 
    className="w-full p-3 border border-gray-300 rounded" 
    required 
  />
  <input 
    type="text" 
    name="subject" 
    placeholder="Subject" 
    className="w-full p-3 border border-gray-300 rounded" 
    required 
  />
  <textarea 
    name="message" 
    placeholder="Message" 
    className="w-full p-3 border border-gray-300 rounded h-32" 
    required 
  />
  
  <button
    type="submit"
    className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
  >
    Send a message
  </button>
</form>



        </div>
      </section>

    
      <section className="w-full py-20">
      <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14019.649247098592!2d77.3260048!3d28.5355161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56274d78fbf%3A0xf5c90432d5c1e732!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1589898989333!5m2!1sen!2sin"
  className="w-full h-[400px] grayscale"
  allowFullScreen=""
  loading="lazy"
/>

      </section>

      <Footer />
    </div>
    </>
  );
}
