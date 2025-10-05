"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "./Container";
import KrishnaLogoVector from "@/assets/vector/KrishnaLogoVector";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(headerRef.current, {
            backdropFilter: "blur(20px)",
            scrollTrigger: {
                trigger: headerRef.current,
                start: 'start start',
                end: '+=300',
                scrub: 1
            }
        })

    }, { scope: headerRef });

    return (
        <div ref={headerRef} className="fixed top-0 left-0 w-full z-50">
            <Container>
                <div className="w-full h-[65px] my-4 flex items-center justify-between font-primary font-bold text-[24px] text-white">
                    <div className="flex items-center justify-center gap-3">
                        <KrishnaLogoVector className="shrink-0" />
                        Krishna Vaani
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header;
