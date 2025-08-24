import {slides} from "@/constants/builtCarousel";
import React from "react";

export default function MobileBuiltCarousel() {
    return (
        <div className="grid lg:hidden grid-cols-1 md:grid-cols-2 gap-4">
            {slides.map((slide, index) => (
                <div key={index} className=" h-full border-black/20 border w-full  cursor-pointer">
                    <div className="bg-light h-full p-3 ">
                        <img src={slide.img} className="h-60 w-full object-cover" alt="" />
                        <h3 className=" mt-4 font-tinos  text-xl text-black/70 mb-2">{slide.title}</h3>
                        <h4 className=" font-roobert font-light text-black/50">{slide.subtitle}</h4>
                    </div>
                </div>
            ))}
        </div>
    );
}
