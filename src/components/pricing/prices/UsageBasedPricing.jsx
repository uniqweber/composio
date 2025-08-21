import React from "react";

export default function UsageBasedPricing() {
    return (
        <div className=" flex flex-col lg:flex-row lg:items-end pb-16  justify-center px-6 gap-6  lg:gap-32 ">
            <h1 className="text-4xl lg:text-[54px] leading-none text-black/80">
                <span className="font-ibm italic  ">Usage based </span> <br />
                <span className="font-tinos">Pricing</span>
            </h1>
            <p className="font-roobert font-light lg:text-lg lg:max-w-sm lg:pr-10 text-black/70">
                Composio is built to help you scale. From the birth of your first agent to your IPO, we're there to grow with you.
            </p>
        </div>
    );
}
