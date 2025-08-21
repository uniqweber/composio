import {Link} from "react-router";
import {pageNavigation} from "@/constants/navigation";
import {motion, AnimatePresence} from "motion/react";
import {containerVariants, itemVariants, navTransition, navVariants} from "@/constants/mobileMenuAnimation";

export default function MobileMenu({isMobileMenuOpen, setIsMobileMenuOpen}) {
    return (
        <AnimatePresence initial={false}>
            {isMobileMenuOpen && (
                <motion.nav
                    key="mobile-nav"
                    variants={navVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={navTransition}
                    className="md:hidden overflow-hidden bg-light border-t border-black/10 uppercase text-sm tracking-wider text-black/80 shadow-md"
                >
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col pb-4 h-full justify-between"
                    >
                        <div>
                            {pageNavigation.map((page) => (
                                <motion.div key={page.label} variants={itemVariants}>
                                    <Link
                                        to={page.path}
                                        className="block border-b border-black/10 px-6 py-3"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {page.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div variants={itemVariants} className="px-6">
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="bg-black text-white uppercase text-sm px-3 py-2 w-full text-center rounded"
                            >
                                Sign In
                            </button>
                        </motion.div>
                    </motion.div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
