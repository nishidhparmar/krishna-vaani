import { cn } from '@/utils/cn'
import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('md:container md:mx-auto w-full', className)}>{children}</div>
    )
}

export default Container