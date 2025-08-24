import {getCarouselStyle, slides} from "@/constants/builtCarousel";
import React, {useState} from "react";
import MobileBuiltCarousel from "./MobileBuiltCarousel";
import CarouselNavigation from "./CarouselNavigation";
import CarouselCard from "./CarouselCard";

const FeatureCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(2);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="w-full  lg:h-[376px] xl:h-[460px] 2xl:h-[544px]">
            <div className="relative hidden h-full lg:flex items-center justify-center">
                {slides.map((slide, index) => {
                    const {transform, zIndex, border, grayscale} = getCarouselStyle(index, currentSlide, slides.length);
                    return (
                        <CarouselCard
                            key={index}
                            transform={transform}
                            zIndex={zIndex}
                            border={border}
                            grayscale={grayscale}
                            slide={slide}
                            index={index}
                            setCurrentSlide={setCurrentSlide}
                        />
                    );
                })}
            </div>
            <MobileBuiltCarousel />
            <CarouselNavigation
                currentSlide={currentSlide}
                setCurrentSlide={setCurrentSlide}
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                slides={slides}
            />
        </div>
    );
};

export default FeatureCarousel;
