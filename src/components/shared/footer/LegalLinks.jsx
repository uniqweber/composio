import {legalLinks} from "@/constants/navigation";
import React from "react";
import {Link} from "react-router";

export default function LegalLinks() {
    return (
        <div className="flex items-center gap-4 text-xs font-roobert font-light flex-wrap justify-center md:justify-end tracking-wide">
            {legalLinks.map((item) => (
                <Link key={item.label} to={item.path} className="nth-[2]:underline nth-[3]:underline">
                    {item.label}
                </Link>
            ))}
        </div>
    );
}
