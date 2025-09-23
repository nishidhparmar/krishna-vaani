import BigPankhVector from '@/assets/vector/BigPankhVector'
import Accordion from '@/components/Accordion'
import Container from '@/components/Container'
import GYGradientText from '@/components/texts/GYGradientText'
import React from 'react'

const FaqSection = () => {
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
    ];
    return (
        <Container>
            <div className='w-full gap-8 min-h-screen relative overflow-hidden flex flex-col justify-center items-center'>
                <BigPankhVector height={700} className='absolute -left-[30%] pointer-events-none z-0' />
                <BigPankhVector height={700} className='absolute -right-[30%] pointer-events-none z-0' style={{ transform: 'scaleX(-1)' }} />
                <GYGradientText variant='title'>
                    Frequently Asked Questions
                </GYGradientText>
                <div className='w-[600px] h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]' ></div>
                {faqs.map((faq, index) => (
                    <Accordion key={index} title={faq.question}>
                        {faq.answer}
                    </Accordion>
                ))}

            </div>

        </Container>
    )
}

export default FaqSection