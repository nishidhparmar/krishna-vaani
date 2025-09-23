"use client"
import React, { FC, Fragment } from 'react'
import GYGradientText from './texts/GYGradientText'
import Button from './Button'

type DialogProps = {
    isOpen: boolean
    setIsOpen: (val: boolean) => void
}

const Dialog: FC<DialogProps> = (props) => {
    const { isOpen, setIsOpen } = props
    return (
        <Fragment>
            {
                isOpen && <div className='fixed top-0 left-0 overflow-auto w-full h-screen z-50 backdrop-blur-xl
        flex items-center justify-center'>
                    <div className='flex items-center justify-center gap-10 flex-col relative'>
                        <div onClick={() => {
                            setIsOpen(false)
                        }} className='rounded-full w-[30px] h-[30px] absolute -top-2 -right-10 cursor-pointer bg-gradient-to-b from-[#00a1564d] to-[#c6ab264d] flex items-center justify-center font-semibold text-base'>
                            <p className='text-white/70'>x</p>
                        </div>
                        <GYGradientText variant='title'>
                            Get Divine Access
                        </GYGradientText>
                        <div className='w-[600px] h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]' ></div>
                        <div className='w-[600px] rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg cursor-pointer '>
                            <input type="text" placeholder='Name' className='w-full h-full focus:outline-none' />
                        </div>
                        <div className='w-[600px] rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg cursor-pointer '>
                            <input type="email" placeholder='Email' className='w-full h-full focus:outline-none' />
                        </div>
                        <div className='w-[600px] rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg cursor-pointer '>
                            <input type="number" placeholder='Phone No.' className='w-full h-full focus:outline-none' />
                        </div>
                        <Button>Claim Access</Button>
                    </div>
                </div >
            }


        </Fragment>

    )
}

export default Dialog