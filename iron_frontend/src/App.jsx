
import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import DeliveryOfferBanner from "./components/DeliveryOfferBanner";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import SpecialtySection from "./components/SpecialtySection";
import B2BServiceSection from "./components/B2BServiceSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import FollowUsSection from "./components/FollowUsSection";
import Footer from "./components/Footer";
import OfferBanner from "./components/OfferBanner";
import FloatingContactIcons from "./components/FloatingContactIcons";

function App() {
  return (
    <>
      <OfferBanner />
      <Navbar />
      <HeroSection />
      <DeliveryOfferBanner />
      <AboutSection />
      <ServicesSection />
      <SpecialtySection />
      <B2BServiceSection />
      <WhyChooseUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <ContactSection />
      <FollowUsSection />
      <Footer />


      <FloatingContactIcons />
    </>
  );
}

export default App;
