import React from 'react';

import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Vedio from "../components/Vedio";
import HorizontalScrollSection from "../components/HorizontalScrollSection";
import AboutPage from "../components/About";
import Team from "../components/Team";
import TestimonialsSection from "../components/TestimonialsSection";
import Nav from "../components/Nav";

const AppLayout = () => {
  return (
 
        
<>
<Nav />
<Hero />
<Service />
<Vedio />
<HorizontalScrollSection />
<AboutPage />
<Team />
<TestimonialsSection />
<Footer />
</>
    
  );
};

export default AppLayout;


