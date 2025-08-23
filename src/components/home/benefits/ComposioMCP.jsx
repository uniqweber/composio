import React from "react";
import BenefitCard from "./BenefitCard";

export default function ComposioMCP() {
    return (
        <BenefitCard
            title="Composio MCP"
            subtitle={
                <>
                    Access fully-managed MCP servers <br /> from a single dashboard
                </>
            }
        >
            <div className="relative size-20 p-4 flex items-center justify-center">
                <div className="size-8 border rounded-full border-black/70"></div>
                <div className="size-4 border transition-all duration-500 rounded-xs border-black/30 absolute group-hover:left-0 left-4.5"></div>
                <div className="h-4 w-6 border rounded-xs border-black/30 absolute group-hover:bottom-2 bottom-5 group-hover:right-1 transition-all duration-500 right-4"></div>

                {/* Triangle */}
                <div className="absolute group-hover:top-1 group-hover:right-1 transition-all duration-500 top-5 right-5 h-4.5 w-4.5">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon points="50,0 0,100 100,100" fill="none" strokeWidth="3" className="stroke-black/70" />
                    </svg>
                </div>
            </div>
        </BenefitCard>
    );
}
