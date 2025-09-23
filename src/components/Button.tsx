import KrishnaLogoVector from '@/assets/vector/KrishnaLogoVector'
import { cn } from '@/utils/cn'
import React from 'react'

const Button = ({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className={cn('font-medium text-base text-white flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-[#00A157] to-[#C6AA26] hover:from-[#C6AA26] hover:to-[#00A157] cursor-pointer transition duration-500', className)} {...props}>
            <KrishnaLogoVector width={25} height={30} />
            {children}
        </button>
    )
}

export default Button
