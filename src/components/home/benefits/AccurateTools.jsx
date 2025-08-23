import React from "react";
import BenefitCard from "./BenefitCard";

export default function AccurateTools() {
    return (
        <BenefitCard
            title="Accurate Tool Calls"
            subtitle={
                <>
                    With tool calls that just work, <br /> your agents perform 30% better.
                </>
            }
        >
            <div className="relative size-20 p-4">
                <div className="size-12 border-l font-ibm flex items-end leading-none text-2xl  border-b border-black/30  ">
                    <span className="ml-0.5 mb-0.5  scale-110 group-hover:scale-175 origin-bottom-left duration-300">&#8599;</span>
                </div>
            </div>
        </BenefitCard>
    );
}
