import { cn } from '@/utils/cn'
import React, { FC } from 'react'
import Container from './Container'
import CircularDesignVector from '@/assets/vector/CircularDesignVector'
type HorizontalBarProps = {
    className?: string
    children: React.ReactNode

}
const HorizontalBar: FC<HorizontalBarProps> = (props) => {
    const { className, children } = props
    return (
        <Container>
            <div className='rounded-lg my-20 bg-gradient-to-r from-[#19FFFB] via-[#3DFF9B] to-[#FFCD4C] py-[1px]'>
                <div className='bg-primary px-[1px] rounded-lg'>
                    <div className={cn('bg-gradient-to-r rounded-lg from-[#00a15626] to-[#c6ab2632]  text-white font-medium text-lg  py-10 px-20 relative overflow-hidden', className)}>
                        <CircularDesignVector className='absolute -right-[50%] -translate-x-[35%] -translate-y-[25%] opacity-50 pointer-events-none' />
                        <div className=' '>
                            {children}
                        </div>
                    </div>
                </div>

            </div>

        </Container>

    )
}

export default HorizontalBar