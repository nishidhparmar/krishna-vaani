import { cn } from '@/utils/cn'
import React from 'react'

const WhiteGradientText = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <span className={cn("bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent",
            className
        )}>
            {children}
        </span>
    )
}

export default WhiteGradientText