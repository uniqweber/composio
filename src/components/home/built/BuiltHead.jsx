import React from "react";
import textBg from "@/assets/images/built-for-agent-bg.png";

export default function BuiltHead() {
    return (
        <div className="relative">
            <div className="relative max-w-5xl mx-auto">
                <img src={textBg} alt="" className="h-40  absolute" />
                <h2 className="text-4xl md:text-6xl  max-w-3xl mx-auto font-tinos  pt-8 relative">
                    Built <br /> for{" "}
                    <span className="italic inline-block relative ">
                        Agents<span className="absolute top-1 text-4xl">*</span>{" "}
                    </span>
                    <div className="border w-max text-xs rounded-full py-2.5 leading-none pl-1 pr-3 font-roobert border-black/20 absolute top-13 left-42">
                        <span className="py-1 border rounded-full px-2 mr-2  font-bold">25K +</span>
                        stars on github
                    </div>
                </h2>
            </div>
            <div className="max-w-3xl 2xl:max-w-4xl mx-auto relative">
                <p className=" mt-10 text-xl font-roobert font-light text-black/50">
                    Our easy-to-use APIs make it effortless to ship agents. <br />
                    <span className="italic">*Developers welcome</span>
                </p>
                <div className="h-30 hidden md:block border w-60 absolute bottom-0 right-0"></div>
            </div>
        </div>
    );
}
