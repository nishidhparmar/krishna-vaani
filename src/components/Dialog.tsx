"use client"
import React, { FC, Fragment, useRef, useState } from 'react'
import GYGradientText from './texts/GYGradientText'
import Button from './Button'
import WhiteGradientText from './texts/WhiteGradientText'

type DialogProps = {
    isOpen: boolean
    setIsOpen: (val: boolean) => void
}

const Dialog: FC<DialogProps> = ({ isOpen, setIsOpen }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [dob, setDob] = useState('')
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        const formData = new FormData(formRef.current);

        fetch("https://script.google.com/macros/s/AKfycbzqLzCUDtciqFISm8UeWg6wvvJ2hV7yKLI51dtGB75Waew1iFWQyuobFlfbG2F21UIF/exec", {
            method: 'POST',
            body: formData,
        })
            .then(res => res.json())
            .then(data => {
                alert(data.msg || 'Form submitted successfully!');
                // Clear fields
                setName('');
                setEmail('');
                setPhone('');
                setDob('');
                setIsOpen(false);
            })
            .catch(err => {
                alert('Something went wrong. Please try again.');
            });
    };

    return (
        <Fragment>
            {isOpen && (
                <div className='fixed top-0 left-0 overflow-auto w-full h-screen z-50 backdrop-blur-xl flex items-center justify-center'>
                    <div className='flex items-center justify-center gap-4 flex-col relative'>
                        {/* Close Button */}
                        <div
                            onClick={() => setIsOpen(false)}
                            className='rounded-full w-[30px] h-[30px] absolute -top-2 -right-10 cursor-pointer bg-gradient-to-b from-[#00a1564d] to-[#c6ab264d] flex items-center justify-center font-semibold text-base'
                        >
                            <p className='text-white/70'>x</p>
                        </div>

                        {/* Title */}
                        <GYGradientText variant='title'>Get Divine Access</GYGradientText>
                        <div className='w-[600px] h-[1px] bg-gradient-to-r from-[#99999900] via-[#FFFFFF] to-[#99999900]'></div>

                        {/* Form */}
                        <form className='flex flex-col gap-4 mt-4' ref={formRef} onSubmit={handleSubmit}>
                            {/* Name */}
                            <div className='flex flex-col gap-2'>
                                <WhiteGradientText>Name</WhiteGradientText>
                                <div className='w-[600px] rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg'>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder='Name'
                                        className='w-full h-full focus:outline-none bg-transparent'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div className='flex flex-col gap-2'>
                                <WhiteGradientText>Email</WhiteGradientText>
                                <div className='w-[600px] rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg'>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder='Email'
                                        className='w-full h-full focus:outline-none bg-transparent'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div className='flex flex-col gap-2'>
                                <WhiteGradientText>Phone No.</WhiteGradientText>
                                <div className='w-[600px] rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg'>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder='Phone No.'
                                        className='w-full h-full focus:outline-none bg-transparent'
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* DOB */}
                            <div className='flex flex-col gap-2'>
                                <WhiteGradientText>Date Of Birth</WhiteGradientText>
                                <div className='w-[600px] rounded-lg bg-gradient-to-r from-[#00a1564d] to-[#c6ab264d] border-x-[2px] px-6 py-3 border-l-[#19FFFB] border-r-[#FFCD4C] text-white font-medium text-lg'>
                                    <input
                                        type="text"
                                        name="dob"
                                        placeholder='DD/MM/YYYY'
                                        className='w-full h-full focus:outline-none bg-transparent'
                                        value={dob}
                                        onChange={(e) => setDob(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <Button type='submit' className='mt-6'>Claim Access</Button>
                        </form>
                    </div>
                </div>
            )}
        </Fragment>
    )
}

export default Dialog
