import React from "react";

export default function CarouselCard({transform, zIndex, border, grayscale, slide, index, setCurrentSlide}) {
    return (
        <div
            className="absolute h-full border w-full md:w-[280px] xl:w-[307px] 2xl:w-[350px]  cursor-pointer"
            style={{
                transform,
                zIndex,
                borderColor: border,
                transition: "transform 0.5s ease, filter 0.5s ease, border-color 0.5s ease",
            }}
            onClick={() => setCurrentSlide(index)}
        >
            <div className="bg-light shadow-xl  h-full p-3 ">
                <img
                    style={{
                        filter: grayscale,
                    }}
                    src={slide.img}
                    className="h-52 xl:h-auto w-full object-cover"
                    alt=""
                />
                <h3 className=" mt-4 font-tinos text-xl xl:text-2xl 2xl:text-[28px] 2xl:leading-[36px]  w-2/3  text-black/70 mb-2">
                    {slide.title}
                </h3>
                <h4 className="text-sm xl:text-base 2xl:text-lg 2xl:leading-6 font-roobert font-light text-black/50">
                    {slide.subtitle}
                </h4>
            </div>
        </div>
    );
}
