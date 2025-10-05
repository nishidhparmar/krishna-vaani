"use client"
import Button from '@/components/Button'
import HorizontalBar from '@/components/HorizontalBar'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
const BuildingInPublicSection = () => {
    const containerRef = useRef(null)
    useGSAP(() => {

        gsap.fromTo('.text',
            {
                opacity: 0,
                y: 20
            },
            {
                opacity: 1,
                y: 0,
                stagger: 0.4,
                scrollTrigger: {
                    trigger: '.text',
                    start: 'top 80%',
                    end: '+=200',
                    scrub: 1

                }
            }

        )
        gsap.fromTo('.btn',
            {
                y: 100
            },
            {
                y: 0,
                scrollTrigger: {
                    trigger: '.btn',
                    start: 'top 80%',
                    end: '+=100',
                    scrub: 1

                }
            }

        )

    }, { scope: containerRef })
    return (
        <div ref={containerRef}>
            <HorizontalBar>
                <div className="flex flex-col gap-2 items-center">
                    <WhiteGradientText className="text-4xl font-primary font-bold text-center text">
                        Building in public - watch this week’s demo clip and see what’s new.
                    </WhiteGradientText>
                    <WhiteGradientText className="text-xl text">
                        New families join every week.
                    </WhiteGradientText>
                    <div className='btn z-50'>
                        <Button className="mt-6 ">
                            Get Early Invite
                        </Button>
                    </div>
                </div>
            </HorizontalBar>
        </div>

    )
}

export default BuildingInPublicSection