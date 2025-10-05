'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Button from '@/components/Button'
import HorizontalBar from '@/components/HorizontalBar'
import WhiteGradientText from '@/components/texts/WhiteGradientText'

gsap.registerPlugin(ScrollTrigger)

const GuideSection = () => {
    const containerRef = useRef(null)

    useGSAP(() => {
        // Animate text lines
        gsap.fromTo('.guide-text',
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: '.guide-text',
                    start: 'top 80%',
                    end: '+=200',
                    scrub: 1,
                }
            }
        )

        // Animate button
        gsap.fromTo('.guide-btn',
            { y: 100 },
            {
                y: 0,
                scrollTrigger: {
                    trigger: '.guide-btn',
                    start: 'top 80%',
                    end: '+=100',
                    scrub: 1,
                }
            }
        )
    }, { scope: containerRef })

    return (
        <div ref={containerRef}>
            <HorizontalBar>
                <div className="flex flex-col gap-2 items-center">
                    <WhiteGradientText className="text-4xl font-primary font-bold text-center guide-text">
                        Let Krishna’s counsel guide your day - one loving answer at a time.
                    </WhiteGradientText>

                    <div className="guide-btn z-50">
                        <Button className="mt-6">
                            Get Early Invite
                        </Button>
                    </div>
                </div>
            </HorizontalBar>
        </div>
    )
}

export default GuideSection
