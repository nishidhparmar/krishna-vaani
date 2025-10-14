'use client'
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslation } from 'react-i18next'

import Button from '@/components/Button'
import HorizontalBar from '@/components/HorizontalBar'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import Dialog from '@/components/Dialog'

gsap.registerPlugin(ScrollTrigger)

const GuideSection = () => {
    const containerRef = useRef(null)
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    useGSAP(() => {
        ScrollTrigger.matchMedia({

            // Desktop (≥1024px)
            "(min-width: 1024px)": () => {
                gsap.fromTo('.text',
                    {
                        opacity: 0,
                        y: 40, // slightly larger motion on desktop
                    },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.4,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.text',
                            start: 'top 85%',
                            end: '+=200',
                            scrub: 1,
                        }
                    }
                )

                gsap.fromTo('.btn',
                    {
                        y: 100,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: '.btn',
                            start: 'top 80%',
                            end: '+=100',
                            scrub: 1,
                        }
                    }
                )
            },

            // Mobile & Tablet (<1024px)
            "(max-width: 1023px)": () => {
                gsap.fromTo('.text',
                    {
                        opacity: 0,
                        y: 20, // smaller motion for mobile
                    },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.25,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '.text',
                            start: 'top 90%',
                            end: '+=100',
                            scrub: 1,
                        }
                    }
                )

                gsap.fromTo('.btn',
                    {
                        y: 60,
                        opacity: 0,
                    },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: '.btn',
                            start: 'top 90%',
                            end: '+=80',
                            scrub: 1,
                        }
                    }
                )
            }
        })
    }, { scope: containerRef })
    return (
        <div ref={containerRef}>
            <HorizontalBar>
                <div className="flex flex-col gap-2 items-center">
                    <WhiteGradientText className="md:text-2xl lg:text-4xl text-lg font-primary font-bold text-center text lg:leading-[60px]">
                        {t('guideSection.title')}
                    </WhiteGradientText>
                    <div className="btn z-50">
                        <Button onClick={() => [
                            setIsOpen(true)
                        ]} className="mt-6">
                            {t('guideSection.button')}
                        </Button>
                    </div>
                </div>
            </HorizontalBar>
            <Dialog
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    )
}

export default GuideSection
