import React from "react";
import sofi from "@/assets/images/logo-cloud-sofi.svg";
import glean from "@/assets/images/logo-cloud-glean.svg";
import asu from "@/assets/images/logo-cloud-asu.svg";

const logos = [sofi, glean, asu];

export default function LogoCloud() {
    return (
        <div className="h-[30vh] sm:h-[25vh]   flex max-w-screen-xl mx-auto  items-center justify-center overflow-hidden xl:pb-5 ">
            <div className="w-full">
                <h2 className="font-roobert font-light tracking-wide text-lg mb-5 text-center">Used by Agents from</h2>
                <div className="relative w-full  py-2">
                    <div className=" bg-gradient-to-l from-light to-transparent z-10 absolute right-0 top-0 bottom-0 w-40"></div>
                    <div className=" bg-gradient-to-r from-light to-transparent z-10 absolute left-0 top-0 bottom-0 w-40"></div>
                    <div className="animate-slide flex items-center  w-max px-4 divide-x">
                        {[...Array(10)]
                            .flatMap(() => logos)
                            .map((logo, index) => (
                                <div key={index} className="relative border-y border-black/10 px-16 py-4.5">
                                    <img src={logo} alt="logo" className="h-5 w-auto" />
                                    <span className="absolute -top-[8px] -right-[5px] font-tinos leading-none ">+</span>
                                    <span className="absolute -bottom-[8px] -right-[5px] font-tinos leading-none ">+</span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
