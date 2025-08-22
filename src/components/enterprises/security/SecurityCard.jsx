import React from "react";

export default function SecurityCard({title, subtitle, children}) {
    return (
        <div className="w-full py-4 md:h-60 flex md:flex-col items-center group md:justify-center lg:hover:bg-white duration-500 font-roobert md:text-center flex-row">
            <div>{children}</div>
            <div>
                <h2 className="text-xl leading-none mb-2">{title}</h2>
                <p className="font-light text-black/40 tracking-wide">{subtitle}</p>
            </div>
        </div>
    );
}
