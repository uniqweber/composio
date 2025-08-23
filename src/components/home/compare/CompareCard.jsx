import React from "react";
import cardBg from "@/assets/images/pricing-card-bg.png";
import {FiUser, FiActivity} from "react-icons/fi";

export default function CompareCard({item}) {
    return (
        <div className="border overflow-hidden p-4 lg:p-6 border-black/40 bg-light group relative ">
            <img src={cardBg} alt="card bg" className="absolute scale-110 inset-0 duration-500 opacity-0 lg:group-hover:opacity-100" />
            <div className="relative">
                <div className="flex lg:flex-col items-center lg:items-start lg:justify-start justify-between">
                    <h4 className="font-tinos tracking-wide text-xl lg:text-4xl text-black/80 ">{item.title}</h4>
                    <p className="text-xs text-right lg:text-left lg:text-lg text-black/50 font-roobert font-light">{item.subtitle}</p>
                </div>
                <div className="mt-10 lg:mt-0 flex lg:flex-col lg:items-start items-end lg:justify-start justify-between">
                    <div className="text-xs lg:text-lg">
                        <div className="mt-5 font-roobert flex items-center gap-2">
                            <FiActivity /> {item.totalCalls}
                        </div>
                        <div className="font-roobert truncate flex items-center gap-2">
                            <FiUser /> {item.support}
                        </div>
                    </div>
                    <div className="bg-white/30 hidden lg:block font-roobert-mono tracking-wider border border-black/10 text-sm uppercase w-max px-5 py-2 rounded-md mt-3">
                        {item.additionalCalls}
                    </div>

                    <div className="flex items-end lg:w-full font-roobert lg:justify-between  lg:mt-48 text-black/80 lg:group-hover:text-white transition-all duration-500">
                        <span className="text-4xl md:text-5xl lg:text-7xl">{item.price}</span>
                        <span className="hidden lg:block">{item.period}</span>
                        <span className="text-black/50 text-lg lg:hidden">/m</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
