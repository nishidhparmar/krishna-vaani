"use client"
import React from "react"
import Image from "next/image"
import WhiteGradientText from "../texts/WhiteGradientText"
import { cn } from "@/utils/cn"

type VerticalCardProps = {
    img: string
    imgHover: string
    title: string
    subtitle: string,
    className?: string
}

const VerticalCard: React.FC<VerticalCardProps> = ({ img, imgHover, title, subtitle, className }) => {
    return (
        <div className={cn("w-[285px] h-[400px] bg-gradient-to-r from-[#19FFFB] via-[#3DFF9B] to-[#FFCD4C] rounded-lg py-[1] z-10", className)}>
            <div className="bg-primary rounded-lg h-full w-full shadow-[6px_8px_12.6px_0px_#73F18533_inset,_-5px_-10px_12.6px_0px_#73F18533_inset] flex flex-col items-center justify-center p-4 group relative overflow-hidden gap-2">
                {/* Fade container */}
                <div className="relative h-[250px] w-full flex items-center justify-center">
                    <Image
                        src={img}
                        alt="card"
                        width={240}
                        height={240}
                        className="absolute w-full h-auto opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                    />
                    <Image
                        src={imgHover}
                        alt="card hover"
                        width={240}
                        height={240}
                        className="absolute w-full h-auto opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                <WhiteGradientText className="text-center text-lg font-bold font-primary mt-2">
                    {title}
                </WhiteGradientText>
                <WhiteGradientText className="text-[10px]">
                    {subtitle}
                </WhiteGradientText>
            </div>
        </div>
    )
}

export default VerticalCard
