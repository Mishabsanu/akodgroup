import HeroSection from "@/sections/heroSection";
import AboutSection from "@/sections/aboutSection";
import ChildCompaniesSection from "@/sections/childCompaniesSection";
import ActivitiesSection from "@/sections/activitiesSection";
import TestimonialsSection from "@/sections/testimonialsSection";
import BrandStorySection from "@/sections/BrandStorySection";



export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ChildCompaniesSection />
      <ActivitiesSection />
      <TestimonialsSection />
      <BrandStorySection />
    </main>
  );
}
