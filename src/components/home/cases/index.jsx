import React, {useRef} from "react";
import {TestimonialCard} from "./CaseSliders";
import bruca from "@/assets/images/case-studies-bruca.png";
import nithik from "@/assets/images/case-studies-gorilla.png";
import jerome from "@/assets/images/case-studies-jerome.png";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

const caseStudies = [
    {
        id: 1,
        name: "Assista AI",
        title: (
            <>
                We couldn't be more happier when we found Composio. It{" "}
                <span className="font-medium text-black italic">reduced our go-to-market time</span> by over six months
            </>
        ),
        logo: bruca,
        user: "Burca Paul",
        role: "Founder, Assista AI",
        highlights: [
            {infoTitle: "~$20k", infoContent: "saved in costs", unit: "/m"},
            {infoTitle: "~230+", infoContent: "saved in dev", unit: "hrs"},
        ],
    },
    {
        id: 2,
        name: "Gorilla",
        title: (
            <>
                Composio's tools were straightforward to integrate from a developer's perspective, enabling the team to
                quickly <span className="font-medium text-black italic">incorporate agentic offerings</span>
            </>
        ),
        logo: nithik,
        user: "Nithik Yekollu",
        role: "AgentArena, UC Berkeley",
        highlights: [
            {infoTitle: "80", infoContent: "increase in calling", unit: "%"},
            {infoTitle: "100+", infoContent: "saved in dev", unit: "hrs"},
        ],
    },
    {
        id: 3,
        name: "Fabrile",
        title: (
            <>
                With hands-on help from their founder, we integrated Gmail and Google Drive in{" "}
                <span className="font-medium text-black italic">just 30 minutes</span>
            </>
        ),
        logo: jerome,
        user: "Jerome",
        role: "Co-founder, Ingram Technologies",
        highlights: [
            {infoTitle: "~$45k", infoContent: "saved in costs", unit: ""},
            {infoTitle: "< 30", infoContent: "integration time", unit: "mins"},
        ],
    },
];

export default function CaseStudies() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative max-w-screen-2xl   mx-auto padding-x  my-30 lg:my-60">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                loop
                speed={1000}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                pagination={{
                    clickable: true,
                    el: ".custom-pagination",
                    bulletClass: "custom-bullet",
                    bulletActiveClass: "custom-bullet-active",
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                className="testimonial-swiper  "
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
                <button className=" md:max-w-xs bg-black py-2 px-3 w-full group mx-auto text-white flex items-center gap-3 justify-center mt-10 font-roobert-mono font-light uppercase">
                    <span className="font-tinos leading-none text-xl">&#8594;</span>
                    <span className="group-hover:underline">Case Studies</span>
                </button>
            </div>
        </div>
    );
}
