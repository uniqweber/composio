import {motion} from "motion/react";

export default function Loader() {
    return (
        <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.5}}
        >
            <motion.div
                className="h-5 w-5 border-b-2 border-blue-500 rounded-full"
                animate={{rotate: 360}}
                transition={{duration: 1, repeat: Infinity, ease: "linear"}}
            />
        </motion.div>
    );
}
