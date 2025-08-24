import {useState, useEffect, useRef} from "react";
import {useInView, motion} from "framer-motion";
import SyntaxHighlighter from "react-syntax-highlighter";
import {atomOneLight} from "react-syntax-highlighter/dist/esm/styles/hljs";
import {codeLines} from "@/constants/apiCodes";

export default function CodeBlock() {
    const [visibleCode, setVisibleCode] = useState([]);
    const ref = useRef(null);
    const hasAnimated = useRef(false);
    const isInView = useInView(ref, {once: true, amount: 0.3});

    useEffect(() => {
        if (isInView && !hasAnimated.current) {
            hasAnimated.current = true;
            let i = 0;
            const animate = () => {
                if (i < codeLines.length) {
                    setVisibleCode((prev) => [...prev, codeLines[i]]);
                    i++;
                    setTimeout(animate, 120);
                }
            };
            animate();
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            initial={{opacity: 0}}
            animate={{opacity: visibleCode.length > 0 ? 1 : 0}}
            transition={{duration: 0.5, ease: "easeOut"}}
            className="overflow-hidden text-xs xl:text-sm 2xl:text-base hidden md:block border border-black/20"
        >
            <SyntaxHighlighter
                language="javascript"
                style={atomOneLight}
                showLineNumbers
                customStyle={{background: "transparent", padding: "1.25rem", whiteSpace: "pre-wrap"}}
                lineNumberStyle={{color: "gray", opacity: 0.6}}
            >
                {visibleCode.join("\n").replace(/\n$/, "")}
            </SyntaxHighlighter>
        </motion.div>
    );
}
