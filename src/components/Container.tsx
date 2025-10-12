import { cn } from '@/utils/cn'
import React from 'react'

const Container = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('max-w-[2000px] px-4 md:px-10 mx-auto w-full', className)}>{children}</div>
    )
}

export default Container