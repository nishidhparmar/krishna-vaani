
"use client"
import PankhVector from '@/assets/vector/PankhVector'
import QuestionCard from '@/components/cards/QuestionCard'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import { cn } from '@/utils/cn'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import ReactPlayer from 'react-player'

import React, { useRef, useState } from 'react'

const QuestionSection = () => {

    const containerRef = useRef(null)
    const [isPlay, setIsPlay] = useState(false)
    useGSAP(() => {
        const t1 = gsap.timeline()
        t1.
            fromTo('.mandala', {
                opacity: 0,
                scale: 0

            }, {
                scale: 1,
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: '.mandala',
                    start: 'top 60%',
                    end: '+=0',
                    scrub: 2,
                    once: true
                }

            }).
            to('.mandala', {
                rotate: 360,
                repeat: -1,
                duration: 120,
                transformOrigin: 'center'

            }).
            fromTo('.text', {
                xPercent: -20,
                opacity: 0,

            }, {
                xPercent: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.text',
                    start: 'top 90%',
                    end: '+=100',
                    scrub: 2
                }

            }).fromTo('.que', {
                xPercent: -20,
                opacity: 0,
                duration: 1,

            }, {
                xPercent: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: '.que',
                    start: 'top 90%',
                    end: 'center 60%',
                    scrub: 2
                }

            })

    }, { scope: containerRef })
    return (
        <div ref={containerRef} className='overflow-hidden bg-[url(/images/hero-blank.png)] bg-fixed  w-full h-full bg-no-repeat bg-cover relative'>
            <Image alt='mandala' src={'/images/circular-mandala.svg'} width={1000} height={1000} className='w-full h-full absolute top-0 translate-x-[25%] mandala' />
            <ReactPlayer playing={isPlay} onEnded={() => {
                setIsPlay(false)
            }} src='/v1.webm' width={'100%'} height={'100%'} className='w-full h-full absolute translate-x-[22%] bottom-0 translate-y-[10%]' />
            <Container>
                <div className={cn(`h-screen  bg-cover bg-center`)}>
                    <div className='w-1/2 flex items-start justify-center h-full flex-col gap-4'>
                        <WhiteGradientText className='text-[24px] font-semibold font-primary'>
                            (Ask with faith)
                        </WhiteGradientText>
                        <div className='text'>
                            <GYGradientText className='text-[56px] font-semibold font-primary '>
                                Ask from the heart. Receive counsel rooted in the Gita.
                            </GYGradientText>
                        </div>

                        <div className='w-full h-[1px] bg-gradient-to-r from-[#FFFFFF] to-[#99999900]' ></div>
                        <div
                            onClick={() => {
                                setIsPlay(true)
                            }}
                            className='flex items-center justify-center gap-3 que -translate-x-[100]'>
                            <PankhVector />
                            <QuestionCard text='Krishna, how can I find true happiness?' />
                        </div>
                        <div className='flex items-center justify-center gap-3 que'>
                            <PankhVector />
                            <QuestionCard text='Krishna, how should I deal with expectations from my work?' />
                        </div>
                        <div className='flex items-center justify-center gap-3 que'>
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