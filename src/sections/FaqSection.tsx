'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import BigPankhVector from '@/assets/vector/BigPankhVector'
import Accordion from '@/components/Accordion'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'

gsap.registerPlugin(ScrollTrigger)

const FaqSection = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        const t1 = gsap.timeline()

        // Initial opacity
        t1.set('.faq-main', { opacity: 0 })

        // Left wing animation
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
            // Right wing animation (mirrored)
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

            // Fade in main content
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

            // Animate FAQ items (staggered)
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
        {
            question: 'Does it answer "like Krishna would" literally?',
            answer: 'Krishna Vaani offers Krishna-inspired counsel grounded in the Bhagavad-Gita—no new revelation.',
        },
        {
            question: 'Is this a replacement for the deity or my guru?',
            answer: 'No. It supports devotion and learning. Your deity, guru, and community remain central.',
        },
        {
            question: 'Will there be hardware?',
            answer: 'Later, invite-only. Today, enjoy a beautiful mobile and voice experience.',
        },
        {
            question: 'Privacy and family safety?',
            answer: 'Family Mode is on by default. There are no ads. You control what is saved.',
        },
    ]

    return (
        <div ref={containerRef}>
            <Container>
                <div className='w-full gap-8 min-h-screen relative overflow-hidden flex flex-col justify-center items-center'>
                    <BigPankhVector height={700} className='absolute faq-p1 -left-[30%] pointer-events-none z-0' />
                    <BigPankhVector height={700} className='absolute faq-p2 -right-[30%] pointer-events-none z-0' style={{ transform: 'scaleX(-1)' }} />

                    <div className='flex flex-col justify-center items-center gap-8 faq-main'>
                        <GYGradientText variant='title'>
                            Frequently Asked Questions
                        </GYGradientText>
                        <div className='w-[600px] h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]' ></div>

                        <div className='flex flex-col gap-4 w-full max-w-2xl'>
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
