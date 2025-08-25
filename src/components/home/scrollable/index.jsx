import {useEffect, useRef, useState} from "react";
import {motion} from "framer-motion";

const textSequences = [
    [{id: 2, text: "Discover new horizons", position: {x: "30%", y: "30%"}}],
    [{id: 4, text: "Innovation awaits", position: {x: "70%", y: "70%"}}],
    [{id: 7, text: "The story continues", position: {x: "75%", y: "35%"}}],
    [{id: 7, text: "The story continues", position: {x: "30%", y: "60%"}}],
];

export default function ScrollCinematicSection() {
    const sectionRef = useRef();
    const [scrollProgress, setScrollProgress] = useState(0);
    const [currentSequence, setCurrentSequence] = useState(0);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const sectionHeight = rect.height;
            const windowHeight = window.innerHeight;

            // Check if section is in view
            if (rect.top <= 0 && rect.bottom >= windowHeight) {
                setIsInView(true);

                const scrolled = Math.abs(rect.top);
                const maxScroll = sectionHeight - windowHeight;
                const rawProgress = Math.min(scrolled / maxScroll, 1);
                // Apply easing to make scroll feel slower and more deliberate
                const progress = Math.pow(rawProgress, 1.5); // Makes early scroll slower, later scroll faster
                setScrollProgress(progress);

                // Determine current text sequence based on progress
                const sequenceIndex = Math.floor(progress * textSequences.length);
                setCurrentSequence(Math.min(sequenceIndex, textSequences.length - 1));
            } else {
                setIsInView(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial call

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getBarHeight = () => {
        if (!isInView) return 0;

        if (scrollProgress <= 0.25) {
            return (scrollProgress / 0.25) * 100;
        }
        // Bars stay at 100px during middle phase
        else if (scrollProgress <= 0.75) {
            return 100;
        } else if (scrollProgress <= 0.9) {
            return 100;
        } else if (scrollProgress <= 0.95) {
            return 100;
        }
        // Bars shrink in last 5%
        else {
            return 100 - ((scrollProgress - 0.95) / 0.5) * 100;
        }
    };

    const getTextOpacity = (sequenceIndex) => {
        const sequenceProgress = scrollProgress * textSequences.length;
        const currentSequenceProgress = sequenceProgress - sequenceIndex;

        if (scrollProgress > 0.75) {
            return Math.max(0, 1 - (scrollProgress - 0.75) / 0.2);
        }

        if (currentSequenceProgress >= 0 && currentSequenceProgress <= 0.5) {
            return currentSequenceProgress / 0.5;
        }
        // Stay visible once appeared
        else if (currentSequenceProgress > 0.5) {
            return 1;
        }

        return 0;
    };

    const getTextScale = () => {
        if (scrollProgress > 0.75) {
            const zoomProgress = (scrollProgress - 0.75) / 0.2;
            return 1 + zoomProgress * 0.1;
        }
        return 1;
    };

    const getFinalScreenOpacity = () => {
        if (scrollProgress > 0.85) {
            return (scrollProgress - 0.85) / 0.15;
        }
        return 0;
    };

    const getFinalTextOpacity = () => {
        if (scrollProgress > 0.92) {
            return (scrollProgress - 0.92) / 0.08;
        }
        return 0;
    };

    const barHeight = getBarHeight();
    const textScale = getTextScale();
    const finalScreenOpacity = getFinalScreenOpacity();
    const finalTextOpacity = getFinalTextOpacity();

    return (
        <div ref={sectionRef} className="relative h-[600vh] font-roobert-mono bg-light">
            {/* Sticky container that stays in viewport */}
            <div className="sticky top-0 z-[50] h-screen w-full overflow-hidden">
                <motion.div
                    className="absolute top-0 left-0 w-full bg-black z-20"
                    animate={{height: `${barHeight}px`}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                />

                <motion.div
                    className="absolute bottom-0 left-0 w-full bg-black z-20"
                    animate={{height: `${barHeight}px`}}
                    transition={{duration: 0.3, ease: "easeOut"}}
                />

                {/* Content area */}
                <div className="relative h-full w-full ">
                    <motion.div
                        className="absolute inset-0"
                        animate={{scale: textScale}}
                        transition={{duration: 0.4, ease: "easeOut"}}
                    >
                        {/* Render all text sequences */}
                        {textSequences.map((sequence, sequenceIndex) => (
                            <div key={sequenceIndex} className="absolute inset-0">
                                <motion.h2
                                    initial={{opacity: 0}}
                                    animate={{
                                        opacity: getTextOpacity(sequenceIndex),
                                    }}
                                    transition={{duration: 0.6, ease: "easeOut"}}
                                    className="text-5xl absolute top-1/2 left-1/2  -translate-1/2 font-ibm font-light text-black/20"
                                >
                                    Building agents that take action <span className="italic text-black">is hard</span>
                                </motion.h2>
                                {sequence.map((textItem) => (
                                    <motion.div
                                        key={textItem.id}
                                        className="absolute transform -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            left: textItem.position.x,
                                            top: textItem.position.y,
                                        }}
                                        animate={{opacity: getTextOpacity(sequenceIndex)}}
                                        transition={{duration: 0.5, ease: "easeOut"}}
                                    >
                                        <motion.h2
                                            className="text-2xl text-black  font-bold text-center whitespace-nowrap"
                                            initial={{y: 20, opacity: 0}}
                                            animate={{
                                                y: getTextOpacity(sequenceIndex) > 0 ? 0 : 20,
                                                opacity: getTextOpacity(sequenceIndex),
                                            }}
                                            transition={{duration: 0.6, ease: "easeOut"}}
                                        >
                                            {textItem.text}
                                        </motion.h2>
                                    </motion.div>
                                ))}
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="absolute inset-0   bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center"
                        animate={{opacity: finalScreenOpacity}}
                        transition={{duration: 0.8, ease: "easeOut"}}
                    >
                        <motion.div
                            className="text-center"
                            animate={{opacity: finalTextOpacity}}
                            transition={{duration: 0.5, ease: "easeOut", delay: 0.2}}
                        >
                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
                                initial={{y: 30, opacity: 0}}
                                animate={{
                                    y: finalTextOpacity > 0 ? 0 : 30,
                                    opacity: finalTextOpacity,
                                }}
                                transition={{duration: 0.8, ease: "easeOut"}}
                            >
                                New Chapter
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-gray-300"
                                initial={{y: 20, opacity: 0}}
                                animate={{
                                    y: finalTextOpacity > 0 ? 0 : 20,
                                    opacity: finalTextOpacity,
                                }}
                                transition={{duration: 0.8, ease: "easeOut", delay: 0.1}}
                            >
                                The adventure begins here
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
