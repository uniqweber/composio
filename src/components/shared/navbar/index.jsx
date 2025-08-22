import {useState} from "react";
import {Link} from "react-router";
import {FiMenu, FiX} from "react-icons/fi";
import {pageNavigation} from "@/constants/navigation";

import MobileMenu from "./MobileMenu";
import logo from "@/assets/images/logo.svg";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className="bg-light fixed top-0 left-0 right-0 z-50 font-roobert-mono font-light">
            <div className="h-17.5 flex items-center justify-between gap-10 padding-x">
                <img src={logo} alt="Logo" className="h-7" />

                <nav className="hidden md:flex items-center gap-10 uppercase text-sm tracking-wider text-black/80">
                    {pageNavigation.map((page) => (
                        <Link key={page.label} to={page.path} className="hover:underline">
                            {page.label}
                        </Link>
                    ))}
                </nav>

                <button className="hidden md:block bg-black text-white uppercase text-sm px-2.5 py-1">Sign In</button>

                <button className="md:hidden text-2xl text-black" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                    {isMobileMenuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            <MobileMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        </header>
    );
}
