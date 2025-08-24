import React from "react";
import textBg from "@/assets/images/built-for-agent-bg.png";

export default function BuiltHead() {
    return (
        <div className="max-w-3xl 2xl:max-w-4xl mx-auto">
            <div className="relative ">
                <img
                    src={textBg}
                    alt=""
                    className="h-32 md:h-40 top-0 -left-2/7 lg:-left-32 xl:-left-2/7  2xl:h-48  absolute"
                />
                <div className="text-4xl md:text-6xl 2xl:text-7xl  font-tinos pt-8 relative">
                    <div className="flex items-center gap-5 md:gap-8">
                        <h2>Built</h2>
                        <div className="border scale-75 md:scale-100 origin-left w-max text-xs rounded-full py-2.5 leading-none text-black/50 pl-1 pr-3 font-roobert border-black/20 ">
                            <span className="py-1 border rounded-full px-2 mr-2 text-black  font-bold">25K +</span>
                            stars on github
                        </div>
                    </div>
                    <h2 className=" relative ">
                        for <span className="italic">Agents</span> <span className="absolute top-1 text-4xl">*</span>{" "}
                    </h2>
                </div>
            </div>
            <div className=" relative">
                <p className=" mt-10 2xl:text-xl font-roobert font-light text-black/50">
                    Our easy-to-use APIs make it effortless to ship agents. <br className="hidden sm:block" />
                    <span className="italic">*Developers welcome</span>
                </p>
                <div className="h-30 md:flex items-center hover:bg-[#2F2F2F] transition-all duration-500 justify-center hidden  border md:w-72 w-full absolute bottom-0 right-0 group">
                    <div className="w-max font-roobert-mono tracking-wide">
                        <h2 className="flex items-center gap-3 group-hover:text-white text-black/90 transition-all duration-500">
                            <span className="font-tinos text-2xl">&#8594;</span>
                            <span className="uppercase">Explore Docs</span>
                        </h2>
                        <div className="border-2 mt-2 border-lime-500 w-full text-black/60 text-xs text-center py-1 group-hover:bg-lime-500 transition-all duration-500">
                            <span className="text-black/90 font-roobert font-semibold">2 min</span> setup
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
