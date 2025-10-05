import { cn } from '@/utils/cn'
import React, { FC } from 'react'
type QuestionCardProps = {
    className?: string
    text: string

}
const QuestionCard: FC<QuestionCardProps> = (props) => {
    const { className, text } = props
    return (
        <div className={cn('rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg  transition-all duration-500 hover:px-10', className)}>{text}</div>
    )
}

export default QuestionCard