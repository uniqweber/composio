import bgOutline from "@/assets/images/muscle-circle-outline.png";
import bgFilled from "@/assets/images/muscle-bg-filled.webp";
import bgMobile from "@/assets/images/muscle-memory-mobile-bg.webp";

import {useEffect, useRef, useState} from "react";
import Badge from "./MemoryBadge";
import MemoryTextBox from "./MemoryTextBox";
import {badges} from "@/constants/muscleMemory";

export default function MuscleMemory() {
    const [inView, setInView] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const sectionMiddle = rect.top + rect.height / 2;
                const screenMiddle = window.innerHeight / 2;

                setInView(sectionMiddle < screenMiddle);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <div ref={sectionRef} className="max-w-screen-xl mx-auto my-40 xl:my-60 padding-x relative">
            <img
                src={inView ? bgFilled : bgOutline}
                className={`w-full h-auto object-cover transition-all duration-500 ease-in-out hidden lg:block ${
                    inView ? "pixel-fade -ml-10 scale-110" : ""
                }`}
            />
            <img src={bgMobile} alt="" className="h-[900px] md:object-cover scale-105 w-full  lg:hidden" />
            <div className="grid lg:grid-cols-2 xl:gap-12 items-center  padding-x absolute inset-0">
                <MemoryTextBox />

                <div className=" font-roobert pb-10 px-6 lg:pb-0   flex flex-col lg:items-center justify-center gap-5 lg:gap-10 ">
                    {badges.map((badge, index) => (
                        <Badge
                            key={badge.title}
                            title={badge.title}
                            count={badge.count}
                            className={badge.className}
                            highlightColor={badge.color}
                            index={index}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
