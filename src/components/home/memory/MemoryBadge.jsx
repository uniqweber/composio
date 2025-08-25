import {motion} from "motion/react";

export default function Badge({title, count, className, inView, highlightColor, index}) {
    const staggerDelay = index * 0.15;
    return (
        <div className={`bg-light w-max rounded-full pl-4 pr-1 py-1 border border-black/20 ${className}`}>
            <span className=" ">{title}</span>
            <span
                className={`ml-2  font-semibold text-black border border-black h-7 text-sm px-4 inline-flex items-center justify-center rounded-full`}
                style={{background: inView ? highlightColor : "transparent", transition: "all 0.5s ease-in-out"}}
            >
                {!inView && <span>{count}</span>}
                {inView && (
                    <motion.span
                        initial={{y: 10, opacity: 0}}
                        animate={inView ? {y: 0, opacity: 1} : {}}
                        transition={{duration: 0.4, delay: staggerDelay}}
                    >
                        {count}
                    </motion.span>
                )}
            </span>
        </div>
    );
}
