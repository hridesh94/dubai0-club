import Navigation from "@/components/ui/navigation";
import Hero from "@/components/ui/hero";
import Intro from "@/components/ui/intro";
import About from "@/components/ui/about";
import WhatWeDo from "@/components/ui/what-we-do";
import Membership from "@/components/ui/membership";
import FeaturedMembers from "@/components/ui/featured-members";
import Events from "@/components/ui/events";
import RecurringActivities from "@/components/ui/recurring-activities";
import Community from "@/components/ui/community";
import HowItWorks from "@/components/ui/how-it-works";
import CTA from "@/components/ui/cta";
import FAQ from "@/components/ui/faq";
import Contact from "@/components/ui/contact";
import Footer from "@/components/ui/footer";

function App() {
  return (
    <main className="relative min-h-screen flex flex-col bg-white text-neutral-900">
      <Navigation />
      <Hero />
      <Intro />
      <About />
      <WhatWeDo />
      <Membership />
      <FeaturedMembers />
      <Events />
      <RecurringActivities />
      <Community />
      <HowItWorks />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;