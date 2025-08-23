import React from "react";

export default function BenefitCard({title, subtitle, children}) {
    return (
        <div className="w-full py-4 pointer-events-none lg:pointer-events-auto relative md:h-60 flex md:flex-col items-center group md:justify-center lg:hover:bg-white duration-500 font-roobert md:text-center flex-row">
            <div className="">{children}</div>
            <div>
                <h2 className="text-xl leading-none mb-1.5">{title}</h2>
                <p className="font-light text-lg text-black/60 leading-6.5 ">{subtitle}</p>
            </div>
        </div>
    );
}
