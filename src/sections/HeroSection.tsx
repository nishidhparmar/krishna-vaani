import Button from '@/components/Button'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import { cn } from '@/utils/cn'
import React from 'react'

const HeroSection = () => {
    return (
        <Container>
            <div className={cn(`h-screen bg-[url(/images/hero.jpg)] bg-cover bg-center`)}>
                <div className='w-1/2 flex items-start justify-center h-full flex-col gap-4'>
                    <WhiteGradientText className='text-[24px] font-semibold font-primary'>
                        (Ask with faith)
                    </WhiteGradientText>
                    <GYGradientText className='text-[56px] font-semibold font-primary'>
                        Hear Gita guided answers like Krishna would counsel.
                    </GYGradientText>
                    <div className='w-full h-[1px] bg-gradient-to-r from-[#FFFFFF] to-[#99999900]' ></div>
                    <WhiteGradientText>
                        Krishna Vaani is your gentle daily companion for your family’s questions scripture aligned, child friendly, and multilingual.
                    </WhiteGradientText>
                    <Button>Experience Krishna</Button>

                </div>
                <div className='w-1/2'>

                </div>
            </div>
        </Container>
    )
}

export default HeroSection