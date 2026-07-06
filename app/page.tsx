import Features from "@/components/landing/Features";
import Footer from "@/components/landing/Footer";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import SchedulePickup from "@/components/landing/SchedulePickup";
import Stats from "@/components/landing/Stats";
import SubscriptionPlans from "@/components/landing/SubscriptionPlans";
import Testimonials from "@/components/landing/Testimonials";
import VisionMission from "@/components/landing/VisionMission";

export default function Home() {
  return (
    <div className="space-y-20">
      <div className="mt-10">
        <Hero />
      </div>
      <Stats />
      <HowItWorks />
      <VisionMission />
      <SubscriptionPlans />
      <SchedulePickup />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
