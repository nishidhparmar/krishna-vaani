import { cn } from '@/utils/cn'
import React from 'react'

const GYGradientText = ({ children, className, variant }: { children: React.ReactNode, className?: string, variant?: 'title' }) => {
    return (
        <p className={cn("bg-gradient-to-r from-[#19FFFB] via-[#3DFF9B] to-[#FFCD4C] inline-block text-transparent bg-clip-text hover:from-[#FFCD4C] hover:to-[#19FFFB] transition duration-500",
            variant === 'title' && 'text-[56px] font-primary font-bold',
            className
        )}>
            {children}
        </p>
    )
}

export default GYGradientText