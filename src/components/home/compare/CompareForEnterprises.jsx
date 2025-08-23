import React from "react";

const ctaInfo = ["Custom user accounts", "Dedicated SLA & SOC-2", "Custom API volume", "VPC/on-prem option"];

export default function CompareForEnterprises() {
    return (
        <div className="bg-[#212121] group duration-500  lg:hover:bg-black p-4 lg:p-6 grid lg:grid-cols-2 text-white/70">
            <div>
                <div className="flex lg:flex-col items-start justify-between">
                    <h4 className="font-tinos w-full tracking-wide text-2xl lg:text-4xl font-light">
                        For <br className="lg:hidden" /> Enterprise
                    </h4>
                    <p className="text-xs lg:text-base text-right lg:text-left text-white/40 font-light tracking-wide">
                        Secure, reliable and accurate LLM Integrations at scale.
                    </p>
                </div>
                <div className="lg:grid hidden grid-cols-2 gap-2 font-roobert font-light text-xl mt-10  ">
                    {ctaInfo.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                            <div className="size-1.5 bg-white"></div>
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-right">
                <h2 className="font-roobert font-light text-4xl mt-5 lg:mt-0">
                    Contact for <br /> custom quote
                </h2>
                <button className="hidden font-roobert-mono  uppercase lg:flex items-center gap-3  text-black px-16 py-2 ml-auto mt-10 bg-gradient-to-b from-white to-white lg:group-hover:from-indigo-300 lg:group-hover:to-orange-300 transition-colors duration-500">
                    <span className="font-tinos">&#8594;</span>
                    <span>book a call</span>
                </button>
            </div>
        </div>
    );
}
