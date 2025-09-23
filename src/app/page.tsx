import Button from "@/components/Button";
import Header from "@/components/Header";
import HorizontalBar from "@/components/HorizontalBar";
import WhiteGradientText from "@/components/texts/WhiteGradientText";
import HeroSection from "@/sections/HeroSection";
import QuestionSection from "@/sections/QuestionSection";
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
    </div>
  );
}

