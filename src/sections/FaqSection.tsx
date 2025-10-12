'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

import BigPankhVector from '@/assets/vector/BigPankhVector'
import Accordion from '@/components/Accordion'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'

gsap.registerPlugin(ScrollTrigger)

const FaqSection = () => {
    const containerRef = useRef(null)
    const { t } = useTranslation()

    useGSAP(() => {
        const t1 = gsap.timeline()

        t1.set('.faq-main', { opacity: 0 })

        t1.from('.faq-p1', {
            opacity: 0,
            rotate: -90,
            scrollTrigger: {
                trigger: '.faq-p1',
                start: 'top center',
                end: '20% center',
                scrub: 1
            }
        })
            .from('.faq-p2', {
                opacity: 0,
                rotate: 270,
                scrollTrigger: {
                    trigger: '.faq-p2',
                    start: 'top center',
                    end: '20% center',
                    scrub: 1
                }
            }, '<')
            .fromTo('.faq-main',
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: '.faq-main',
                        start: 'top 80%',
                        end: 'bottom 60%',
                        scrub: 1
                    }
                }
            )
            .fromTo('.faq-item',
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: 0.3,
                    scrollTrigger: {
                        trigger: '.faq-item',
                        start: 'top 85%',
                        end: 'bottom 70%',
                        scrub: 1
                    }
                }
            )
    }, { scope: containerRef })

    const faqs = [
        t('faqSection.faqs.faq1', { returnObjects: true }) as { question: string; answer: string },
        t('faqSection.faqs.faq2', { returnObjects: true }) as { question: string; answer: string },
        t('faqSection.faqs.faq3', { returnObjects: true }) as { question: string; answer: string },
        t('faqSection.faqs.faq4', { returnObjects: true }) as { question: string; answer: string },
    ]


    return (
        <div ref={containerRef}>
            <Container>
                <div className='w-full gap-8 min-h-screen relative overflow-hidden flex flex-col justify-center items-center px-4 sm:px-6 md:px-8'>
                    <BigPankhVector height={"100%"} className='md:h-[60%] xl:h-[100%] hidden lg:flex absolute p1 -left-[30%] pointer-events-none z-0' />
                    <BigPankhVector height={"100%"} className='md:h-[60%] xl:h-[100%] hidden lg:flex absolute p2 -right-[30%] pointer-events-none z-0' style={{ transform: 'scaleX(-1)' }} />
                    <div className='flex flex-col justify-center items-center gap-8 faq-main z-10'>
                        <GYGradientText variant='title'>
                            {t('faqSection.title')}
                        </GYGradientText>

                        <div className='w-full max-w-md sm:max-w-lg md:max-w-2xl h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]' ></div>

                        <div className='flex flex-col gap-4 w-full max-w-md sm:max-w-lg md:max-w-2xl'>
                            {faqs.map((faq, index) => (
                                <div key={index} className='faq-item'>
                                    <Accordion title={faq.question}>
                                        {faq.answer}
                                    </Accordion>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FaqSection
