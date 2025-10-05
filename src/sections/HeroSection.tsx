'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Button from '@/components/Button'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import { cn } from '@/utils/cn'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        // Timeline for hero text
        const tl = gsap.timeline({
            defaults: { duration: 1, ease: 'power3.out' }
        })

        tl.from('.hero-line', {
            opacity: 0,
            y: 50,
            stagger: 0.3,
        })
            .from('.hero-divider', {
                scaleX: 0,
                opacity: 0,
                transformOrigin: 'left',
            }, '-=0.5')
            .from('.hero-desc', {
                opacity: 0,
                y: 30,
            }, '-=0.3')
            .from('.hero-btn', {
                opacity: 0,
                y: 20,
                scale: 0.95,
            }, '-=0.2')

        // Subtle glowing pulse for button (infinite)
        gsap.to('.hero-btn', {
            boxShadow: '0 0 20px rgba(255,255,255,0.4)',
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'power1.inOut'
        })

        // Background parallax effect
        gsap.to('.hero-bg', {
            backgroundPositionY: '40%',
            scrollTrigger: {
                trigger: '.hero-bg',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className='hero-bg bg-[url(/images/hero.jpg)] bg-fixed w-full h-full bg-no-repeat bg-cover'>
            <Container>
                <div className={cn('h-screen flex items-center justify-between')}>
                    {/* Left content */}
                    <div className='w-1/2 flex flex-col gap-4'>
                        <div className='hero-line'>
                            <WhiteGradientText className=' text-[24px] font-semibold font-primary'>
                                (Ask with faith)
                            </WhiteGradientText>
                        </div>

                        <div className='hero-line'>
                            <GYGradientText className=' text-[56px] font-semibold font-primary leading-tight'>
                                Hear Gita-guided answers like Krishna would counsel.
                            </GYGradientText>
                        </div>

                        <div className='hero-divider w-full h-[1px] bg-gradient-to-r from-[#FFFFFF] to-[#99999900]' />
                        <div className='hero-desc'>
                            <WhiteGradientText className=' text-[18px] leading-relaxed max-w-[500px]'>
                                Krishna Vaani is your gentle daily companion for your family’s questions —
                                scripture-aligned, child-friendly, and multilingual.
                            </WhiteGradientText>
                        </div>


                        <div className='hero-btn mt-4 w-fit'>
                            <Button >Experience Krishna</Button>
                        </div>
                    </div>

                    {/* Right side placeholder for future visual */}
                    <div className='w-1/2' />
                </div>
            </Container>
        </div>
    )
}

export default HeroSection
