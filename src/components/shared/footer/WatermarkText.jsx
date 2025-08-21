import React from "react";

export function MobileWatermarkText() {
    return (
        <div className="absolute top-0 bottom-0 -right-6 h-full w-[30vw] flex items-center md:hidden">
            <div
                style={{
                    WebkitTextStroke: "2px #2B2B2A",
                    writingMode: "vertical-lr",
                    transform: "rotate(-180deg)",
                }}
                className="text-center text-[30vw]  leading-none text-transparent font-sans pointer-events-none select-none"
            >
                <span className="pb-36">Composio</span>
            </div>
            <div className="absolute top-0 bottom-0 right-0 h-full w-[10vw] bg-gradient-to-l from-black to-transparent"></div>
        </div>
    );
}

export function DesktopWatermarkText() {
    return (
        <div className="hidden md:block relative  h-[16vw]">
            <div
                style={{WebkitTextStroke: "5px #2B2B2A"}}
                className="text-center  text-[21vw] leading-none absolute left-0 right-0   text-transparent font-sans font-bold pointer-events-none select-none -bottom-[4vw] "
            >
                Composio
            </div>

            <div className="absolute left-0 right-0 bottom-0 h-[15vw] bg-gradient-to-b from-transparent to-black "></div>
        </div>
    );
}
