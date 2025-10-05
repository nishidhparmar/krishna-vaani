import KrishnaLogoVector from "@/assets/vector/KrishnaLogoVector";
import PankhVector from "@/assets/vector/PankhVector";
import Button from "@/components/Button";
import Header from "@/components/Header";
import HorizontalBar from "@/components/HorizontalBar";
import WhiteGradientText from "@/components/texts/WhiteGradientText";
import { LenisWrapper } from "@/providers/LenisWrapper";
import BuildingInPublicSection from "@/sections/BuildingInPublicSection";
import FaqSection from "@/sections/FaqSection";
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
        <PankhVector />
      </AnimatedCursor>
      <div className="w-full overflow-x-hidden bg-primary">
        <Header />
        <HeroSection />
        <QuestionSection />
        <BuildingInPublicSection />
        <WhatYouGetSection />
        <StepByStepSection />
        <GuideSection />
        <FaqSection />
        <div className="bg-gradient-to-r from-[#19FFFB] rounded-lg pt-[4px] via-[#3DFF9B] to-[#FFCD4C]">
          <div className="h-[200px] rounded-lg bg-primary w-full " style={{ boxShadow: "#19FFFB 0px 50px 60px -50px inset" }}>
            <WhiteGradientText className="flex items-center justify-center h-full gap-10 font-primary text-4xl font-bold">
              <KrishnaLogoVector />Jai Shree Krishna<KrishnaLogoVector />
            </WhiteGradientText>
          </div>
        </div>


      </div >
    </LenisWrapper>
  );
}

