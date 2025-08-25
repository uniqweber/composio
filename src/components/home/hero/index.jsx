import {useRef} from "react";
import {motion, useMotionTemplate, useScroll, useTransform} from "framer-motion";
import textBg from "@/assets/images/enterprises-hero-text-bg.svg";
import heroBg from "@/assets/images/hero-video.mp4";

export default function Hero() {
    const textRef = useRef(null);
    const {scrollY} = useScroll();

    const bgOpacity = useTransform(scrollY, [0, 300], [0, 1]);
    const bgGradient = useMotionTemplate`linear-gradient(to top, rgba(247,244,240,${bgOpacity}) 0%, rgba(247,244,240,${bgOpacity}) 100%)`;

    return (
        <div className="relative h-[calc(100vh-70px)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-20 w-full bg-gradient-to-b from-light "></div>
            <motion.div
                className="absolute inset-0 mt-0.5  w-full h-full z-10"
                style={{
                    background: bgGradient,
                }}
            />

            <video
                src={heroBg}
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover pointer-events-none"
            ></video>

            {/* Text + Buttons */}
            <div className="absolute inset-0 padding-x flex items-center md:justify-center z-20">
                <div className="w-full md:w-auto pb-20 " ref={textRef}>
                    <div className="relative md:px-8 overflow-hidden">
                        <motion.h2
                            initial={{y: 40, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.3, duration: 0.8, ease: "easeOut"}}
                            className="text-4xl lg:pt-2 md:text-6xl 2xl:text-7xl font-tinos text-black/70"
                        >
                            Skills that <span className="font-medium text-black/90 italic">envelope</span> for
                        </motion.h2>
                        <img src={textBg} alt="" className="absolute inset-0" />
                    </div>

                    <div className="md:px-8 flex flex-col lg:flex-row md:items-start mt-2 gap-10 overflow-hidden">
                        <motion.h2
                            initial={{y: 40, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.5, duration: 0.8, ease: "easeOut"}}
                            className="text-4xl md:text-6xl 2xl:text-7xl font-tinos text-black/90 shrink-0"
                        >
                            your <span className="font-medium">Agents</span>
                        </motion.h2>
                        <motion.p
                            initial={{y: 40, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.7, duration: 0.8, ease: "easeOut"}}
                            className="font-roobert tracking-wide font-light text-xl 2xl:text-2xl w-full md:pt-6"
                        >
                            More than just integrations, <span className="font-bold">10,000+ tools </span> that
                            <br className="hidden md:block" />
                            can adapt — turning automation into intuition.
                        </motion.p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10 md:px-8 mt-10 md:mt-16"
                        initial={{y: 40, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{delay: 0.9, duration: 0.8, ease: "easeOut"}}
                    >
                        <button className="uppercase font-roobert-mono font-light h-11 w-full lg:w-auto text-center justify-center  lg:px-20 bg-black text-white hover:underline">
                            Get started for free
                        </button>
                        <button className="uppercase font-roobert-mono font-light h-11 w-full lg:w-auto text-center  justify-center lg:px-20 bg-white border text-black group flex items-center gap-3">
                            <span className="text-lg font-tinos">&#8594;</span>
                            <span className="group-hover:underline">Explore docs</span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
