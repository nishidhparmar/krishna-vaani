"use client"
import StepCard from '@/components/cards/StepCard'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import React from 'react'
import { useTranslation } from 'react-i18next'

const StepByStepSection = () => {
    const { t } = useTranslation();

    const steps = [
        { title: t("stepByStepSection.steps.step1.title"), description: t("stepByStepSection.steps.step1.description") },
        { title: t("stepByStepSection.steps.step2.title"), description: t("stepByStepSection.steps.step2.description") },
        { title: t("stepByStepSection.steps.step3.title"), description: t("stepByStepSection.steps.step3.description") },
        { title: t("stepByStepSection.steps.step4.title"), description: t("stepByStepSection.steps.step4.description") },
    ];
    return (
        <Container className='bg-[url(/images/mandala.svg)] bg-top bg-no-repeat bg-cover '>
            <div className='flex flex-col justify-center items-center gap-20 min-h-screen'>
                <div className='space-y-10'>
                    <GYGradientText variant='title' className='text-center'>
                        {t("stepByStepSection.title")}
                    </GYGradientText>
                    <div className='w-full h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]'></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 w-full">
                    {steps.map((step, idx) => (
                        <StepCard
                            index={idx}
                            key={idx}
                            title={step.title}
                            description={step.description}
                            className={`lg:col-start-${idx * 2 + 1}`} // stagger layout
                        />
                    ))}
                </div>
                <WhiteGradientText className='italic font-primary tracking-wide font-bold text-center lg:text-left'>
                    {t("stepByStepSection.advisory")}
                </WhiteGradientText>
            </div>
        </Container>
    )
}

export default StepByStepSection

//    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-[80px] w-full">
//                 <div className="h-[70px] bg-red-50 col-span-1 sm:col-span-2 lg:col-span-6 lg:col-start-1">-</div>
//                 <div className="h-[70px] bg-red-50 col-span-1 sm:col-span-2 lg:col-span-6 lg:col-start-3">-</div>
//                 <div className="h-[70px] bg-red-50 col-span-1 sm:col-span-2 lg:col-span-6 lg:col-start-5">-</div>
//                 <div className="h-[70px] bg-red-50 col-span-1 sm:col-span-2 lg:col-span-6 lg:col-start-7">-</div>
//             </div>