import PankhVector from '@/assets/vector/PankhVector'
import QuestionCard from '@/components/cards/QuestionCard'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import { cn } from '@/utils/cn'
import React from 'react'

const QuestionSection = () => {
    return (
        <div className='bg-[url(/images/hero.jpg)] bg-fixed  w-full h-full bg-no-repeat bg-cover'>
            <Container>
                <div className={cn(`h-screen  bg-cover bg-center`)}>
                    <div className='w-1/2 flex items-start justify-center h-full flex-col gap-4'>
                        <WhiteGradientText className='text-[24px] font-semibold font-primary'>
                            (Ask with faith)
                        </WhiteGradientText>
                        <GYGradientText className='text-[56px] font-semibold font-primary'>
                            Ask from the heart. Receive counsel rooted in the Gita.
                        </GYGradientText>
                        <div className='w-full h-[1px] bg-gradient-to-r from-[#FFFFFF] to-[#99999900]' ></div>
                        <div className='flex items-center justify-center gap-3'>
                            <PankhVector />
                            <QuestionCard text='Krishna, how can I find true happiness?' />
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <PankhVector />
                            <QuestionCard text='Krishna, how should I deal with expectations from my work?' />
                        </div>
                        <div className='flex items-center justify-center gap-3'>
                            <PankhVector />
                            <QuestionCard text='Krishna, why do I feel hurt when others don’t respect me?' />
                        </div>
                    </div>
                    <div className='w-1/2'>

                    </div>
                </div>
            </Container>
        </div>
    )
}

export default QuestionSection