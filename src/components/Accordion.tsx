'use client'
import { cn } from '@/utils/cn'
import React, { FC, useState, useRef, useEffect } from 'react'

type AccordionProps = {
    className?: string
    title?: string
    children?: React.ReactNode
}

const Accordion: FC<AccordionProps> = ({ className, title, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)
    const [maxHeight, setMaxHeight] = useState('0px')

    useEffect(() => {
        if (contentRef.current) {
            setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
        }
    }, [isOpen])

    return (
        <div className='w-full'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'relative rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] w-full px-4 sm:px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-sm sm:text-lg cursor-pointer transition-all duration-500 backdrop-blur-lg',
                    className
                )}
            >
                {title}
                <span
                    className={cn(
                        'absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-white font-bold text-xl transition-transform duration-200',
                        isOpen ? 'rotate-45' : 'rotate-0'
                    )}
                >
                    +
                </span>
            </div>

            <div
                ref={contentRef}
                style={{ maxHeight }}
                className='overflow-hidden transition-all duration-500 mt-2 w-full px-4 sm:px-6 text-white text-sm sm:text-base'
            >
                {children}
            </div>
        </div>
    )
}

export default Accordion
