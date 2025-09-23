import KrishnaLogoVector from "@/assets/vector/KrishnaLogoVector";
import Button from "@/components/Button";
import Header from "@/components/Header";
import HorizontalBar from "@/components/HorizontalBar";
import WhiteGradientText from "@/components/texts/WhiteGradientText";
import FaqSection from "@/sections/FaqSection";
import HeroSection from "@/sections/HeroSection";
import QuestionSection from "@/sections/QuestionSection";
import StepByStepSection from "@/sections/StepByStepSection";
import WhatYouGetSection from "@/sections/WhatYouGetSection";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-primary">
      <Header />
      <HeroSection />
      <QuestionSection />
      <HorizontalBar >
        <div className="flex flex-col gap-2 items-center">
          <WhiteGradientText className="text-4xl font-primary font-bold text-center">
            Building in public - watch this week’s demo clip and see what’s new.
          </WhiteGradientText>
          <WhiteGradientText className="text-xl">
            New families join every week.
          </WhiteGradientText>
          <Button className="mt-6">
            Get Early Invite
          </Button>
        </div>
      </HorizontalBar>
      <WhatYouGetSection />
      <StepByStepSection />
      <HorizontalBar >
        <div className="flex flex-col gap-2 items-center">
          <WhiteGradientText className="text-4xl font-primary font-bold text-center">
            Let Krishna’s counsel guide your day - one loving answer at a time.
          </WhiteGradientText>
          <Button className="mt-6">
            Get Early Invite
          </Button>
        </div>
      </HorizontalBar>
      <FaqSection />
      <div className="bg-gradient-to-r from-[#19FFFB] rounded-lg pt-[4px] via-[#3DFF9B] to-[#FFCD4C]">
        <div className="h-[200px] rounded-lg bg-primary w-full " style={{ boxShadow: "#19FFFB 0px 50px 60px -50px inset" }}>
          <WhiteGradientText className="flex items-center justify-center h-full gap-10 font-primary text-4xl font-bold">
            <KrishnaLogoVector />Jai Shree Krishna<KrishnaLogoVector />
          </WhiteGradientText>
        </div>
      </div>


    </div >
  );
}

