import {footerNavigation} from "@/constants/navigation";
import React from "react";
import {Link, useLocation} from "react-router";

export default function PageLinks() {
    const location = useLocation();
    return (
        <nav className="grid gap-20  md:gap-0 md:grid-cols-3 md:col-span-3 relative">
            {footerNavigation.map((section) => (
                <div key={section.title} className="">
                    <h3 className="mb-5 text-xs font-roobert-mono text-white/50 tracking-wider font-light">
                        {section.title}
                    </h3>
                    <ul className="space-y-2 t font-roobert-mono font-light">
                        {section.links.map((link) => (
                            <li key={link.label}>
                                <Link
                                    to={link.path}
                                    className={`text-white ${location.pathname === link.path ? "underline" : ""}`}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </nav>
    );
}
