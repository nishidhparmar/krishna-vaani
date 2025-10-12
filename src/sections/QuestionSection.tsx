
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

import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

const QuestionSection = () => {

    const containerRef = useRef(null)
    const [isPlay, setIsPlay] = useState(false)
    const [activeVideo, setActiveVideo] = useState(0)
    const { t, i18n } = useTranslation();
    const [isHin, setIsHin] = useState(false);

    useEffect(() => {
        setIsHin(i18n.language === "hi");
    }, [i18n.language]);

    const videos = [
        {
            en: '/videos/en/1 Happiness is a state (Output).webm',
            hi: '/videos/hi/Hindi 1 Happiness is a state (Output).webm'
        },
        {
            en: '/videos/en/2 You have the right (Output).webm',
            hi: '/videos/hi/Hindi 2 You have the right (Output).webm'
        },
        {
            en: '/videos/en/3 Those who don’t respect(Output).webm',
            hi: '/videos/hi/Hindi 3 Those who don’t respect (Output).webm'
        }
    ]

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
        <div id='que' ref={containerRef} className='overflow-hidden bg-[url(/images/hero-blank.png)] bg-fixed  w-full h-full bg-no-repeat bg-cover relative'>
            <Image alt='mandala' src={'/images/circular-mandala.svg'} width={1000} height={1000} className='w-full h-full absolute top-0 translate-x-[25%] mandala' />
            {!isHin &&
                videos.map((i, index) =>
                    <ReactPlayer key={index} playing={isPlay && (activeVideo === index)} onEnded={() => {
                        setIsPlay(false)
                    }} src={i.en} width={'100%'} height={'100%'} className={cn('w-full h-full absolute translate-x-[22%] bottom-0 translate-y-[10%]',
                        activeVideo === index ? 'opacity-100' : 'opacity-0'
                    )} />
                )
            }
            {isHin &&
                videos.map((i, index) =>
                    <ReactPlayer key={index} playing={isPlay && (activeVideo === index)} onEnded={() => {
                        setIsPlay(false)
                    }} src={i.hi} width={'100%'} height={'100%'} className={cn('w-full h-full absolute translate-x-[22%] bottom-0 translate-y-[10%]',
                        activeVideo === index ? 'opacity-100' : 'opacity-0'
                    )} />
                )
            }

            <Container>
                <div className={cn(`h-screen  bg-cover bg-center`)}>
                    <div className='w-1/2 flex items-start justify-center h-full flex-col gap-4'>
                        <WhiteGradientText className='text-[24px] font-semibold font-primary'>
                            {t('queSection.askWithFaith')}
                        </WhiteGradientText>
                        <div className='text'>
                            <GYGradientText className='text-[56px] font-semibold font-primary '>
                                {t('queSection.title')}
                            </GYGradientText>
                        </div>

                        <div className='w-full h-[1px] bg-gradient-to-r from-[#FFFFFF] to-[#99999900]' ></div>
                        <div
                            onClick={() => {
                                setIsPlay(true)
                                setActiveVideo(0)
                            }}
                            className='flex items-center justify-center gap-3 que -translate-x-[100]'>
                            <PankhVector />
                            <QuestionCard text={t('queSection.questions.q1')} />
                        </div>
                        <div
                            onClick={() => {
                                setIsPlay(true)
                                setActiveVideo(1)
                            }}
                            className='flex items-center justify-center gap-3 que'>
                            <PankhVector />
                            <QuestionCard text={t('queSection.questions.q2')} />
                        </div>
                        <div
                            onClick={() => {
                                setIsPlay(true)
                                setActiveVideo(2)
                            }}
                            className='flex items-center justify-center gap-3 que'>
                            <PankhVector />
                            <QuestionCard text={t('queSection.questions.q3')} />
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