import Hero from "@/components/home/Hero";
import ServiceBoxes from "@/components/home/ServiceBoxes";
import PreLogosBanner from "@/components/home/PreLogosBanner";
import PartnerLogos from "@/components/home/PartnerLogos";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import FinalCta from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceBoxes />
      <PreLogosBanner />
      <PartnerLogos />
      <SolutionsGrid />
      <FinalCta />
    </>
  );
}
