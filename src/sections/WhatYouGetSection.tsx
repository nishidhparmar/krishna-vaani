"use client"
import BigPankhVector from '@/assets/vector/BigPankhVector'
import Button from '@/components/Button'
import VerticalCard from '@/components/cards/VerticalCard'
import Container from '@/components/Container'
import Dialog from '@/components/Dialog'
import GYGradientText from '@/components/texts/GYGradientText'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Pagination } from 'swiper/modules';
const WhatYouGetSection = () => {
    const [isOpen, setIsOpen] = useState(false)

    const { t } = useTranslation()

    const containerRef = useRef(null)

    useGSAP(() => {
        ScrollTrigger.matchMedia({

            // 🖥️ Desktop only
            "(min-width: 1024px)": () => {
                const t1 = gsap.timeline();

                t1.set('.main', { opacity: 0 })
                    .from('.p1', {
                        opacity: 0,
                        rotate: -90,
                        scrollTrigger: {
                            trigger: '.p1',
                            start: 'top 80%',
                            end: '20% center',
                            scrub: 1,
                        },
                    })
                    .from('.p2', {
                        opacity: 0,
                        rotate: 270,
                        scrollTrigger: {
                            trigger: '.p2',
                            start: 'top 80%',
                            end: '20% center',
                            scrub: 1,
                        },
                    }, '<')
                    .fromTo('.main',
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 1,
                            scrollTrigger: {
                                trigger: '.p2',
                                start: 'top 80%',
                                end: '20% 60%',

                                scrub: 1,
                            },
                        }
                    )
                    .fromTo('.card',
                        { opacity: 0, y: 50 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 1,
                            stagger: 1,
                            scrollTrigger: {
                                trigger: '.p2',
                                start: 'top 60%',
                                end: '20% 40%',
                                scrub: 1,
                            },
                        }
                    );
            },

            // 📱 Mobile — disable animations
            "(max-width: 1023px)": () => {
                // Just reset elements instantly (no animation)
                gsap.set(['.p1', '.p2', '.main', '.card'], { opacity: 1, y: 0, rotate: 0 });
            },
        });
    }, { scope: containerRef });


    const cardsData = [
        {
            img: "/images/vertical cards/Card1.svg",
            imgHover: "/images/vertical cards/Card1H.svg",
            title: t("whatYouGetSection.cards.card1.title"),
            subtitle: t("whatYouGetSection.cards.card1.subtitle"),
        },
        {
            img: "/images/vertical cards/Card2.svg",
            imgHover: "/images/vertical cards/Card2H.svg",
            title: t("whatYouGetSection.cards.card2.title"),
            subtitle: t("whatYouGetSection.cards.card2.subtitle"),
        },
        {
            img: "/images/vertical cards/Card3.svg",
            imgHover: "/images/vertical cards/Card3H.svg",
            title: t("whatYouGetSection.cards.card3.title"),
            subtitle: t("whatYouGetSection.cards.card3.subtitle"),
        },
        {
            img: "/images/vertical cards/Card4.svg",
            imgHover: "/images/vertical cards/Card4H.svg",
            title: t("whatYouGetSection.cards.card4.title"),
            subtitle: t("whatYouGetSection.cards.card4.subtitle"),
        },
    ];

    return (
        <div ref={containerRef}>
            {/* <Swiper className="mySwiper" pagination={true} modules={[Pagination]} >
                {cardsData.map((card, index) => (
                    <SwiperSlide key={index} className='px-10' >
                        <VerticalCard
                            className='card'
                            key={index}
                            img={card.img}
                            imgHover={card.imgHover}
                            title={card.title}
                            subtitle={card.subtitle}
                        /></SwiperSlide>

                ))}
            </Swiper> */}
            <Container>
                <div className='w-full gap-8 min-h-screen relative overflow-hidden flex flex-col justify-center items-center'>
                    <BigPankhVector height={"100%"} className='md:h-[60%] xl:h-[100%] hidden lg:flex absolute p1 -left-[30%] pointer-events-none z-0' />
                    <BigPankhVector height={"100%"} className='md:h-[60%] xl:h-[100%] hidden lg:flex absolute p2 -right-[30%] pointer-events-none z-0' style={{ transform: 'scaleX(-1)' }} />
                    <div className='flex flex-col justify-center items-center gap-8 main'>
                        <GYGradientText variant='title'>
                            {t('whatYouGetSection.title')}
                        </GYGradientText>
                        <div className='w-[600px] h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]' ></div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-center justify-center w-full">
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
                            {t('whatYouGetSection.button')}
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