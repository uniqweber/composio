import React from "react";
import {socialLinks} from "@/constants/navigation";

export default function SocialLinks() {
    return (
        <div className="flex items-center gap-4 text-xl text-white/30">
            {socialLinks.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                    aria-label={item.label}
                >
                    {<item.icon />}
                </a>
            ))}
        </div>
    );
}
