import React from "react";
import BenefitCard from "./BenefitCard";
import {MdOutlineHexagon} from "react-icons/md";
import {motion} from "framer-motion";
import {orbs} from "@/constants/hexagonDots";

export default function EvolvingSkill() {
    return (
        <BenefitCard
            title="Evolving Skills"
            subtitle={
                <>
                    Our skills improve over time as <br /> more agents use them.
                </>
            }
        >
            <div className="size-20 flex items-center justify-center"></div>
            <motion.div
                whileHover="hover"
                className="absolute inset-0 flex items-center md:justify-center md:pb-20"
                initial="initial"
            >
                <motion.div className="relative size-20 flex items-end pb-4 justify-center">
                    <div className="size-13 flex items-center justify-center relative">
                        <motion.div
                            variants={{
                                initial: {rotate: 0, scale: 1},
                                hover: {
                                    rotate: 360,
                                    scale: 1.1,
                                    transition: {
                                        duration: 2,
                                        ease: "easeInOut",
                                        rotate: {duration: 2, ease: "linear"},
                                    },
                                },
                            }}
                        >
                            <MdOutlineHexagon className="text-3xl text-black/80" />
                        </motion.div>

                        <motion.div
                            className="absolute inset-0 border border-black/10 rounded-full"
                            variants={{
                                initial: {scale: 0.8, opacity: 0},
                                hover: {
                                    scale: [0.8, 1.4, 0.8],
                                    opacity: [0, 0.3, 0],
                                    transition: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    },
                                },
                            }}
                        />

                        {orbs.map((orb) => (
                            <motion.div
                                key={orb.id}
                                className={`absolute size-2.5 rounded-full border border-black/70 ${orb.className}`}
                                variants={{
                                    initial: {
                                        scale: 0.8,
                                        opacity: orb.opacity,
                                        boxShadow: "0 0 0 rgba(0,0,0,0)",
                                    },
                                    hover: {
                                        ...orb.hover,
                                        opacity: Math.min(orb.opacity + 0.4, 1),
                                        boxShadow: "0 0 8px rgba(0,0,0,0.3)",
                                        transition: {
                                            type: "spring",
                                            stiffness: 300,
                                            damping: 20,
                                            delay: orb.delay,
                                        },
                                    },
                                }}
                                style={{opacity: orb.opacity}}
                            />
                        ))}

                        {orbs.map((orb, index) => (
                            <motion.div
                                key={`line-${orb.id}`}
                                className="absolute w-px bg-gradient-to-b from-black/20 to-transparent origin-center"
                                style={{
                                    height: "20px",
                                    left: "50%",
                                    top: "50%",
                                    transform: `rotate(${index * 60}deg)`,
                                }}
                                variants={{
                                    initial: {
                                        scale: 0,
                                        opacity: 0,
                                    },
                                    hover: {
                                        scale: 1,
                                        opacity: 0.3,
                                        transition: {
                                            delay: orb.delay + 0.1,
                                            duration: 0.3,
                                        },
                                    },
                                }}
                            />
                        ))}

                        {[...Array(3)].map((_, i) => (
                            <motion.div
                                key={`particle-${i}`}
                                className="absolute size-1 rounded-full bg-black/20"
                                style={{
                                    left: `${20 + i * 15}%`,
                                    top: `${30 + i * 20}%`,
                                }}
                                variants={{
                                    initial: {
                                        y: 0,
                                        opacity: 0,
                                        scale: 0.5,
                                    },
                                    hover: {
                                        y: [-5, -15, -5],
                                        opacity: [0, 0.6, 0],
                                        scale: [0.5, 1, 0.5],
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: i * 0.2,
                                            ease: "easeInOut",
                                        },
                                    },
                                }}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </BenefitCard>
    );
}
