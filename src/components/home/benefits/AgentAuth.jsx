import React from "react";
import {IoIosFingerPrint} from "react-icons/io";
import BenefitCard from "./BenefitCard";

export default function AgentAuth() {
    return (
        <BenefitCard
            title="Agent Auth"
            subtitle={<>We handle the fun stuff like auth <br /> so you can make agents faster.</>}
        >
            <div className="size-20 flex items-center justify-center relative">
                <div className="absolute h-9  w-5 rounded-full border border-black/60 top-2 group-hover:top-0 duration-300">
                    <div className="absolute size-4 bg-white top-3.5 -left-2"></div>
                </div>
                <div className="size-10 text-black/30  transition-all bg-light flex items-center justify-center  border-black/50  border rounded-full duration-300 origin-center absolute top-1/2 left-1/2 -translate-1/2 text-3xl">
                    <IoIosFingerPrint className="group-hover:animate-spin" />
                </div>
            </div>
        </BenefitCard>
    );
}
