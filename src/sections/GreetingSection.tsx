"use client"
import { useTranslation } from 'react-i18next';
import WhiteGradientText from '@/components/texts/WhiteGradientText';
import KrishnaLogoVector from '@/assets/vector/KrishnaLogoVector';

const GreetingSection = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-gradient-to-r from-[#19FFFB] rounded-lg pt-[4px] via-[#3DFF9B] to-[#FFCD4C]">
            <div
                className="h-[200px] rounded-lg bg-primary w-full"
                style={{ boxShadow: "#19FFFB 0px 50px 60px -50px inset" }}
            >
                <WhiteGradientText className="flex items-center justify-center h-full gap-10 font-primary text-lg md:text-4xl font-bold">
                    <KrishnaLogoVector />
                    {t('greetingSection.jaiShreeKrishna')}
                    <KrishnaLogoVector />
                </WhiteGradientText>
            </div>
        </div>
    );
};

export default GreetingSection;
