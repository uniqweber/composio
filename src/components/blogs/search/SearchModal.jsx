import {useEffect, useRef} from "react";
import {motion} from "framer-motion";
import {GoSearch} from "react-icons/go";
import SearchResult from "./SearchResult";

function slugify(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
}

export default function SearchModal({query, setQuery, results, setIsOpen}) {
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
                setQuery("");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = "auto";
        };
    }, [setIsOpen, setQuery]);

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="fixed inset-0 font-roobert font-light tracking-wide bg-black/80 z-50 p-6"
        >
            <motion.div
                ref={ref}
                initial={{scale: 0.95, opacity: 0}}
                animate={{scale: 1, opacity: 1}}
                transition={{type: "spring", stiffness: 260, damping: 20}}
                className="bg-white w-full mt-64 mx-auto max-w-2xl space-y-4 shadow-xl overflow-hidden"
            >
                <div className="relative">
                    <GoSearch className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400" />
                    <input
                        autoFocus
                        type="text"
                        placeholder="Search blogs..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-10 py-3 pr- border-b border-black/20 text-lg focus:outline-none"
                    />
                </div>

                {query.trim() !== "" && (
                    <ul className="max-h-64 overflow-y-auto space-y-2">
                        {results.length > 0 ? (
                            results.map((article, i) => (
                                <SearchResult
                                    key={i}
                                    title={article.title}
                                    slug={slugify(article.title)}
                                    onClick={() => {
                                        setIsOpen(false);
                                        setQuery("");
                                    }}
                                />
                            ))
                        ) : (
                            <p className="text-gray-400 text-center pb-4">No results found.</p>
                        )}
                    </ul>
                )}
            </motion.div>
        </motion.div>
    );
}
