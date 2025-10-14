"use client";

import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "./Container";
import KrishnaLogoVector from "@/assets/vector/KrishnaLogoVector";
import Switch from "./Switch";
import { useTranslation } from "react-i18next";
import GYGradientText from "./texts/GYGradientText";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const { i18n } = useTranslation();
    const [isHin, setIsHin] = useState(false);

    useEffect(() => {
        setIsHin(i18n.language === "hi");
    }, [i18n.language]);

    // useGSAP(() => {
    //     gsap.to(headerRef.current, {
    //         backdropFilter: "blur(20px)",
    //         scrollTrigger: {
    //             trigger: headerRef.current,
    //             start: 'start start',
    //             end: '+=300',
    //             scrub: 1
    //         }
    //     })
    // }, { scope: headerRef });

    return (
        <div ref={headerRef} className="absolute backdrop-blur-sm top-0 w-full z-50">
            <Container className="py-0">
                <div className="w-full h-[65px] my-4 flex items-center justify-between font-primary font-bold text-[24px] text-white">
                    <div className="flex items-center justify-center gap-3">
                        <KrishnaLogoVector className="shrink-0" />
                        Krishna Vaani
                    </div>
                    <div className="space-x-4 flex items-center">
                        <GYGradientText className="text-[14px] lg:text-[20px]">Eng</GYGradientText>
                        <Switch
                            enabled={isHin}
                            setEnabled={(val) => {
                                setIsHin(val);
                                i18n.changeLanguage(val ? "hi" : "en");
                            }}
                        />
                        <GYGradientText className="text-[14px] lg:text-[20px]">Hin</GYGradientText>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
