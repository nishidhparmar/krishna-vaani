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
                    <WhiteGradientText className="md:text-2xl lg:text-4xl text-lg font-primary font-bold text-center guide-text leading-[60px]">
                        {t('guideSection.title')}
                    </WhiteGradientText>
                    <div className="guide-btn z-50">
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
