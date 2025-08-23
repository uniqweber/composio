import {FaCheck, FaRegCopy} from "react-icons/fa6";
import {motion, AnimatePresence} from "motion/react";

export default function BashCode({handleCopy, copied}) {
    return (
        <div
            onClick={handleCopy}
            className="bg-white hidden sm:block hover:bg-black hover:text-white duration-500 border hover:border-black py-2 2xl:py-3 text-lg 2xl:text-xl w-max px-8 mt-10 font-roobert-mono relative cursor-pointer"
        >
            <div className="flex items-center gap-3">
                <span>curl -fsSL https://composio.dev/install | bash</span>
                <FaRegCopy />
            </div>

            <AnimatePresence mode="wait">
                {copied && (
                    <motion.div className="text-white bg-black absolute inset-0 flex items-center justify-center">
                        <motion.span
                            key="copied"
                            initial={{x: -100, opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            exit={{x: -100, opacity: 0}}
                            transition={{duration: 0.5}}
                            className="flex items-center gap-3"
                        >
                            Copied to clipboard <FaCheck />
                        </motion.span>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
