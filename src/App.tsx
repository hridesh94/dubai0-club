import Navigation from "@/components/ui/navigation";
import Hero from "@/components/ui/hero";
import Intro from "@/components/ui/intro";
import About from "@/components/ui/about";
import WhatWeDo from "@/components/ui/what-we-do";
import Membership from "@/components/ui/membership";
import FeaturedMembers from "@/components/ui/featured-members";
import Events from "@/components/ui/events";
import RecurringActivities from "@/components/ui/recurring-activities";
import HowItWorks from "@/components/ui/how-it-works";
import CTA from "@/components/ui/cta";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";
import WhatsAppFloat from "@/components/ui/whatsapp-float";

function App() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[#eef8f8] text-[#205b86]">
      <Navigation />
      <Hero />
      <Intro />
      <About />
      <WhatWeDo />
      <Membership />
      <FeaturedMembers />
      <Events />
      <RecurringActivities />
      <HowItWorks />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

export default App;
