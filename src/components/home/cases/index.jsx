import React, {useRef, useEffect, useState} from "react";
import {TestimonialCard} from "./CaseSliders";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import {caseStudies} from "@/constants/cases";

export default function CaseStudies() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className="relative max-w-screen-2xl mx-auto padding-x my-30 lg:my-60">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                }}
                onSwiper={setSwiperInstance}
                className="testimonial-swiper"
            >
                {caseStudies.map((caseStudy) => (
                    <SwiperSlide key={caseStudy.id}>
                        <TestimonialCard caseStudy={caseStudy} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="mt-12">
                <div className="flex items-center gap-5 justify-center max-w-32 mx-auto text-black/50 ">
                    <button ref={prevRef}>
                        <FaAngleLeft />
                    </button>
                    <div className="custom-pagination flex justify-center gap-2"></div>
                    <button ref={nextRef}>
                        <FaAngleRight />
                    </button>
                </div>

                <button className="md:max-w-xs bg-black py-2 px-3 w-full group mx-auto text-white flex items-center gap-3 justify-center mt-10 font-roobert-mono font-light uppercase">
                    <span className="font-tinos leading-none text-xl">&#8594;</span>
                    <span className="group-hover:underline">Case Studies</span>
                </button>
            </div>
        </div>
    );
}
