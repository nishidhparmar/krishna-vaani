import PankhVector from "@/assets/vector/PankhVector";
import Header from "@/components/Header";
import { LenisWrapper } from "@/providers/LenisWrapper";
import BuildingInPublicSection from "@/sections/BuildingInPublicSection";
import FaqSection from "@/sections/FaqSection";
import GreetingSection from "@/sections/GreetingSection";
import GuideSection from "@/sections/GuideSection";
import HeroSection from "@/sections/HeroSection";
import QuestionSection from "@/sections/QuestionSection";
import StepByStepSection from "@/sections/StepByStepSection";
import WhatYouGetSection from "@/sections/WhatYouGetSection";
import AnimatedCursor from "react-animated-cursor";

export default function Home() {
  return (
    <LenisWrapper>
      <AnimatedCursor
        outerSize={0}

      >
        <PankhVector className="hidden lg:flex" />
      </AnimatedCursor>
      <div className="w-full overflow-x-hidden bg-primary">
        <Header />
        <HeroSection />
        <QuestionSection />
        {/* <BuildingInPublicSection /> */}
        <WhatYouGetSection />
        <StepByStepSection />
        <GuideSection />
        <FaqSection />
        <GreetingSection />


      </div >
    </LenisWrapper>
  );
}

