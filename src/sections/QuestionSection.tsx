
"use client"
import PankhVector from '@/assets/vector/PankhVector'
import QuestionCard from '@/components/cards/QuestionCard'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import { cn } from '@/utils/cn'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

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
        ScrollTrigger.matchMedia({

            // Desktop (≥1024px)
            "(min-width: 1024px)": () => {
                const t1 = gsap.timeline()
                t1
                    .fromTo('.mandala', {
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
                    })
                    .to('.mandala', {
                        rotate: 360,
                        repeat: -1,
                        duration: 120,
                        transformOrigin: 'center'
                    })
                    .fromTo('.text', {
                        xPercent: -20,
                        opacity: 0
                    }, {
                        xPercent: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: '.text',
                            start: 'top 90%',
                            end: '+=100',
                            scrub: 2
                        }
                    })
                    .fromTo('.que', {
                        xPercent: -20,
                        opacity: 0,
                    }, {
                        xPercent: 0,
                        opacity: 1,
                        stagger: 0.4,
                        scrollTrigger: {
                            trigger: '.que',
                            start: 'top 90%',
                            end: 'center 60%',
                            scrub: 2
                        }
                    })
            },

            // Mobile & Tablet (<1024px)
            "(max-width: 1023px)": () => {
                const t1 = gsap.timeline()
                t1
                    .fromTo('.mandala', {
                        opacity: 0,
                        scale: 0.7
                    }, {
                        scale: 1,
                        opacity: 1,
                        duration: 1.2,
                        scrollTrigger: {
                            trigger: '.mandala',
                            start: 'top 80%',
                            end: '+=100',
                            scrub: 1.5,
                            once: true
                        }
                    })
                    .to('.mandala', {
                        rotate: 360,
                        repeat: -1,
                        duration: 180,
                        transformOrigin: 'center'
                    })
                    .fromTo('.text', {
                        yPercent: 20,
                        opacity: 0
                    }, {
                        yPercent: 0,
                        opacity: 1,
                        scrollTrigger: {
                            trigger: '.text',
                            start: 'top 90%',
                            end: '+=80',
                            scrub: 1.5
                        }
                    })
                    .fromTo('.que', {
                        yPercent: 20,
                        opacity: 0
                    }, {
                        yPercent: 0,
                        opacity: 1,
                        stagger: 0.3,
                        scrollTrigger: {
                            trigger: '.text',
                            start: 'top 70%',
                            end: 'center 70%',
                            scrub: 1.5
                        }
                    })
            }
        })
    }, { scope: containerRef })

    return (
        <div id='que' ref={containerRef} className='overflow-hidden bg-[url(/images/hero-blank.png)] bg-fixed lg:bg-left bg-right  w-full h-full bg-no-repeat bg-cover relative'>
            <Image alt='mandala' src={'/images/circular-mandala.svg'} width={1000} height={1000} className='w-full h-full absolute top-0 lg:translate-x-[25%] lg:left-0 left-[50%] lg:translate-y-0 translate-y-[-20%] translate-x-[-50%] mandala' />
            {!isHin &&
                videos.map((i, index) =>
                    <ReactPlayer key={index} playing={isPlay && (activeVideo === index)} onEnded={() => {
                        setIsPlay(false)
                    }} src={i.en} width={'100%'} height={'100%'} className={cn('w-full h-full absolute lg:translate-x-[22%] top-[-20%] lg:top-0 lg:bottom-0 lg:translate-y-[10%]',
                        activeVideo === index ? 'opacity-100' : 'opacity-0'
                    )} />
                )
            }
            {isHin &&
                videos.map((i, index) =>
                    <ReactPlayer key={index} playing={isPlay && (activeVideo === index)} onEnded={() => {
                        setIsPlay(false)
                    }} src={i.hi} width={'100%'} height={'100%'} className={cn('w-full h-full absolute lg:translate-x-[22%] top-[-20%] lg:top-0 lg:bottom-0 lg:translate-y-[10%]',
                        activeVideo === index ? 'opacity-100' : 'opacity-0'
                    )} />
                )
            }

            <Container className='relative'>
                <div className={cn(`h-screen  bg-cover bg-center`)}>
                    <div className='w-full lg:w-1/2 flex items-center lg:items-start lg:justify-center justify-end h-full flex-col gap-4'>
                        <WhiteGradientText className='text-[16px] lg:text-[24px] font-semibold font-primary w-full lg:text-left text-center'>
                            {t('queSection.askWithFaith')}
                        </WhiteGradientText>
                        <div className='text'>
                            <GYGradientText className='text-[32px] lg:text-[56px] font-semibold font-primary text-center lg:text-left'>
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
                            <PankhVector className='hidden lg:block' />
                            <QuestionCard text={t('queSection.questions.q1')} />
                        </div>
                        <div
                            onClick={() => {
                                setIsPlay(true)
                                setActiveVideo(1)
                            }}
                            className='flex items-center justify-center gap-3 que'>
                            <PankhVector className='hidden lg:block' />
                            <QuestionCard text={t('queSection.questions.q2')} />
                        </div>
                        <div
                            onClick={() => {
                                setIsPlay(true)
                                setActiveVideo(2)
                            }}
                            className='flex items-center justify-center gap-3 que'>
                            <PankhVector className='hidden lg:block' />
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