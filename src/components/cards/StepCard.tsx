import React from 'react'
import WhiteGradientText from '../texts/WhiteGradientText'
import GYGradientText from '../texts/GYGradientText'
import BigPankhVector from '@/assets/vector/BigPankhVector'

type StepCardProps = {
    title: string
    description: string
    className?: string
    index: number
}

const StepCard: React.FC<StepCardProps> = ({ title, description, className, index }) => {
    return (

        <div className={` group relative h-[70px] gap-4 col-span-1 sm:col-span-2 lg:col-span-6 ${className || "lg:col-start-1"}`}>
            {
                index !== 3 &&
                <div className='w-[33%] opacity-0 lg:opacity-100 rounded-bl-lg border-2 border-dashed border-t-transparent border-r-transparent h-[70px] border-[#3DFF9B] absolute -bottom-[60px]'>
                    <div className='w-[10px] h-[10px] bg-[#FFCD4C] rounded-full -right-1 absolute -bottom-[5px]'>
                    </div>
                </div>
            }

            <div className='flex items-center gap-2'>
                <GYGradientText variant='title' className='text-2xl'>
                    {index + 1}
                </GYGradientText>
                <div className='bg-gradient-to-r w-full from-[#19FFFB] via-[#3DFF9B] to-[#FFCD4C] rounded-lg px-[2] h-full'>
                    <div className="bg-primary rounded-lg h-full w-full group-hover:shadow-[6px_8px_12.6px_0px_#73F18533_inset,_-5px_-10px_12.6px_0px_#73F18533_inset] flex flex-col items-center justify-center p-4 group relative overflow-hidden gap-2 transition-all duration-300">
                        <BigPankhVector className='absolute -right-10 bottom-0 rotate-180' width={100} height={100} />

                        <div className='flex items-center gap-4 justify-start lg:justify-center w-full'>
                            <WhiteGradientText className='font-primary font-bold text-lg'>
                                {title}
                            </WhiteGradientText>
                            <div className='bg-gradient-to-b from-[#19FFFB] via-[#3DFF9B] to-[#FFCD4C] w-[2px] h-full'><p className='opacity-0'>1</p></div>
                            <WhiteGradientText className='opacity-70 text-sm'>
                                {description}
                            </WhiteGradientText>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default StepCard
