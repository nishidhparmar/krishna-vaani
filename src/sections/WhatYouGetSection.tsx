"use client"
import BigPankhVector from '@/assets/vector/BigPankhVector'
import Button from '@/components/Button'
import VerticalCard from '@/components/cards/VerticalCard'
import Container from '@/components/Container'
import Dialog from '@/components/Dialog'
import GYGradientText from '@/components/texts/GYGradientText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import React, { useRef, useState } from 'react'

const WhatYouGetSection = () => {
    const [isOpen, setIsOpen] = useState(false)

    const containerRef = useRef(null)

    useGSAP(() => {
        const t1 = gsap.timeline()

        t1.set('.main', {
            opacity: 0
        })
            .from('.p1', {
                opacity: 0,
                rotate: -90,
                scrollTrigger: {
                    trigger: '.p1',
                    start: 'top center',
                    end: '20% center',
                    scrub: 1
                }
            }).from('.p2', {
                opacity: 0,
                rotate: 270,
                scrollTrigger: {
                    trigger: '.p2',
                    start: 'top center',
                    end: '20% center',
                    scrub: 1
                }
            }, '<')
            .fromTo('.main', {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 1,
                scrollTrigger: {
                    trigger: '.p2',
                    start: 'top 200',
                    end: '20% 300',
                    scrub: 1
                }
            })
            .fromTo('.card', {
                opacity: 0,
                y: 50
            }, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 1,
                scrollTrigger: {
                    trigger: '.card',
                    start: 'top 80%',
                    end: '20% 50%',
                    scrub: 1
                }
            })


    }, {
        scope: containerRef
    })

    const cardsData = [
        {
            img: "/images/vertical cards/Card1.svg",
            imgHover: "/images/vertical cards/Card1H.svg",
            title: "Gita-Guided answers on any Question",
            subtitle: "Clarity to act with dharma today.",
        },
        {
            img: "/images/vertical cards/Card2.svg",
            imgHover: "/images/vertical cards/Card2H.svg",
            title: "One-tap aarti, one shloka, one reflection",
            subtitle: "A routine your kids enjoy.",
        },
        {
            img: "/images/vertical cards/Card3.svg",
            imgHover: "/images/vertical cards/Card3H.svg",
            title: "Stories kids love",
            subtitle: "Values they remember and repeat.",
        },
        {
            img: "/images/vertical cards/Card4.svg",
            imgHover: "/images/vertical cards/Card4H.svg",
            title: "Multilingual (English, Hindi, Gujarati)",
            subtitle: "Grandparents and children feel at home together.",
        },
    ]
    return (
        <div ref={containerRef}>
            <Container>
                <div className='w-full gap-8 min-h-screen relative overflow-hidden flex flex-col justify-center items-center'>
                    <BigPankhVector height={700} className='absolute p1 -left-[30%] pointer-events-none z-0' />
                    <BigPankhVector height={700} className='absolute p2 -right-[30%] pointer-events-none z-0' style={{ transform: 'scaleX(-1)' }} />
                    <div className='flex flex-col justify-center items-center gap-8 main'>
                        <GYGradientText variant='title'>
                            What you get
                        </GYGradientText>
                        <div className='w-[600px] h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]' ></div>

                        <div className="flex flex-wrap justify-center items-center gap-6">
                            {cardsData.map((card, index) => (
                                <VerticalCard
                                    className='card'
                                    key={index}
                                    img={card.img}
                                    imgHover={card.imgHover}
                                    title={card.title}
                                    subtitle={card.subtitle}
                                />
                            ))}
                        </div>
                        <Button className="mt-6" onClick={() => {
                            setIsOpen(true)
                        }}>
                            Get Early Invite
                        </Button>
                    </div>

                    <Dialog
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
            </Container>
        </div>

    )
}

export default WhatYouGetSection