import React from "react";
import SecurityCard from "./SecurityCard";

export default function IPAllowList() {
    return (
        <SecurityCard title="IP Allowlist" subtitle="Enhance network security with controlled access.">
            <div className="h-20 w-20 flex items-center justify-center relative ">
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-2 top-2 md:group-hover:left-5 md:left-3 md:group-hover:top-5 md:top-3 z-[4]"></div>
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-3 top-3 md:group-hover:left-4 md:left-0 md:group-hover:top-4 md:top-0 z-[3]"></div>
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-4 top-4 md:group-hover:left-3 md:-left-3 md:group-hover:top-3 md:-top-3 z-[2]"></div>
                <div className="size-7 duration-500 border border-black/20 rounded-md absolute left-5 top-5 md:group-hover:left-2 md:-left-6 md:group-hover:top-2 md:-top-6 z-[1] "></div>
                <div className="size-7 border border-black/50 rounded-md"></div>
            </div>
        </SecurityCard>
    );
}
