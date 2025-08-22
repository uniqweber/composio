import React from "react";
import SecurityCard from "./SecurityCard";

export default function SOC() {
    return (
        <SecurityCard title="SOC Type II" subtitle="Enterprise-grade compliance and secure infrastructure">
            <div className="size-20 flex items-center justify-center relative">
                <div className="size-12 transition-all group-hover:scale-120 border-black/20  border rounded-full duration-300 origin-center absolute top-1/2 left-1/2 -translate-1/2"></div>
                <div className="size-10 transition-all   border border-black/50 rounded-full duration-300 origin-center absolute top-1/2 left-1/2 -translate-1/2"></div>
                <div className="size-8 transition-all  group-hover:scale-80 border-black/20 border rounded-full duration-300 origin-center absolute top-1/2 left-1/2 -translate-1/2"></div>
            </div>
        </SecurityCard>
    );
}
