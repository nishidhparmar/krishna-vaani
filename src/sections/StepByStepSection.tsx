import CircularDesignVector from '@/assets/vector/CircularDesignVector'
import StepCard from '@/components/cards/StepCard'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import React from 'react'

const StepByStepSection = () => {
    const steps = [
        { title: "Understand", description: "Understand your question in plain language." },
        { title: "Research", description: "Explore scripture and scholarly insights." },
        { title: "Reflect", description: "Interpret with care and wisdom." },
        { title: "Guide", description: "Offer respectful, step-by-step guidance." },
    ];
    return (
        <Container className='bg-[url(/images/mandala.svg)] bg-top bg-no-repeat bg-cover'>
            <div className='flex flex-col justify-center items-center gap-20'>
                <div className='space-y-10'>
                    <GYGradientText variant='title' className='text-center'>
                        Respectful, scripture-aligned guidance - step by step
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
                <WhiteGradientText className='italic font-primary tracking-wide font-bold'>
                    Advisory note : Advisory only, not a substitute for your deity, guru, or spiritual authority
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