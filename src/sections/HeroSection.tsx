'use client'
import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Button from '@/components/Button'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import WhiteGradientText from '@/components/texts/WhiteGradientText'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import Dialog from '@/components/Dialog'

gsap.registerPlugin(ScrollTrigger)

const HeroSection = () => {
    const containerRef = useRef(null)
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false)

    useGSAP(() => {
        // Match animations by screen size
        ScrollTrigger.matchMedia({

            // Desktop animations (≥ 1024px)
            '(min-width: 1024px)': () => {
                const tl = gsap.timeline({
                    defaults: { duration: 1, ease: 'power3.out' }
                })

                tl.from('.hero-line', {
                    opacity: 0,
                    y: 60,
                    stagger: 0.25,
                })
                    .from('.hero-divider', {
                        scaleX: 0,
                        opacity: 0,
                        transformOrigin: 'left',
                    }, '-=0.4')
                    .from('.hero-desc', {
                        opacity: 0,
                        y: 30,
                    }, '-=0.3')
                    .from('.hero-btn', {
                        opacity: 0,
                        y: 25,
                        scale: 0.95,
                    }, '-=0.2')

                gsap.to('.hero-btn', {
                    boxShadow: '0 0 20px rgba(255,255,255,0.4)',
                    repeat: -1,
                    yoyo: true,
                    duration: 2,
                    ease: 'power1.inOut'
                })

                gsap.to('.hero-bg', {
                    backgroundPositionY: '40%',
                    scrollTrigger: {
                        trigger: '.hero-bg',
                        start: 'top top',
                        end: 'bottom top',
                        scrub: true,
                    }
                })
            },

            // Mobile & tablet (< 1024px)
            '(max-width: 1023px)': () => {
                const tl = gsap.timeline({
                    defaults: { duration: 0.8, ease: 'power2.out' }
                })

                tl.from('.hero-line', {
                    opacity: 0,
                    y: 30,
                    stagger: 0.2,
                })
                    .from('.hero-divider', {
                        scaleX: 0,
                        opacity: 0,
                        transformOrigin: 'center',
                    }, '-=0.3')
                    .from('.hero-desc', {
                        opacity: 0,
                        y: 20,
                    }, '-=0.2')
                    .from('.hero-btn', {
                        opacity: 0,
                        y: 15,
                        scale: 0.98,
                    }, '-=0.2')

                // Gentle button pulse (less intense on mobile)
                gsap.to('.hero-btn', {
                    boxShadow: '0 0 12px rgba(255,255,255,0.3)',
                    repeat: -1,
                    yoyo: true,
                    duration: 2.2,
                    ease: 'power1.inOut'
                })
            },
        })
    }, { scope: containerRef })

    return (
        <div
            ref={containerRef}
            className='hero-bg relative bg-right bg-[url(/images/hero-blank.png)] lg:bg-[url(/images/hero.jpg)] bg-fixed w-full h-full bg-no-repeat bg-cover'
        >
            {/* Mobile-only background elements */}
            <Image
                alt='mandala'
                src={'/images/circular-mandala.svg'}
                width={1000}
                height={1000}
                className='w-auto h-full lg:hidden absolute top-0 translate-y-[-10%] left-[50%] translate-x-[-50%] mandala scale-[1.2] origin-center'
            />
            <Image
                alt='krishna'
                src={'/images/krishna.png'}
                width={1000}
                height={1000}
                className='w-auto h-[60vh] lg:hidden absolute top-0 translate-y-[10%] left-[45%] translate-x-[-50%] mandala'
            />

            <Container>
                <div className='h-screen flex items-end lg:items-center justify-between'>
                    <div className='lg:w-1/2 w-full flex flex-col gap-4 lg:items-start items-center translate-y-[-10vh]'>
                        <div className='hero-line flex items-center lg:justify-start justify-center'>
                            <WhiteGradientText className='text-[16px] xl:text-[24px] font-semibold font-primary'>
                                {t('heroSection.askWithFaith')}
                            </WhiteGradientText>
                        </div>

                        <div className='hero-line'>
                            <GYGradientText className='text-[32px] xl:text-[56px] font-semibold font-primary lg:text-left text-center'>
                                {t('heroSection.title')}
                            </GYGradientText>
                        </div>

                        <div className='hero-divider w-full h-[1px] bg-gradient-to-r from-[#FFFFFF] to-[#99999900]' />

                        <div className='hero-desc flex items-center lg:justify-start justify-center'>
                            <WhiteGradientText className='text-[12px] xl:text-[18px] lg:max-w-[500px] lg:text-left text-center'>
                                {t('heroSection.description')}
                            </WhiteGradientText>
                        </div>

                        <div className='hero-btn mt-4 w-fit flex lg:flex-row flex-col items-center gap-4 lg:gap-2'>
                            <Link href={'/#que'}>
                                <Button>{t('heroSection.button')}</Button>
                            </Link>
                            <Button className='hover:from-transparent bg-gradient-to-l from-transparent border-[#19FFFB]/50 border-2 to-transparent' onClick={() => {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({ event: 'early_access_click' });

                                setIsOpen(true)
                            }}>
                                {t('whatYouGetSection.button')}
                            </Button>
                        </div>
                    </div>
                </div>
                <Dialog
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </Container>
        </div>
    )
}

export default HeroSection
