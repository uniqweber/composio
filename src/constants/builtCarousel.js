import img_01 from "@/assets/images/home-funnel-filled.webp";
import img_02 from "@/assets/images/home-circle-filled.webp";
import img_03 from "@/assets/images/home-code-filled.webp";
import img_04 from "@/assets/images/home-gravity-filled.webp";
import img_05 from "@/assets/images/home-stack-filled.webp";

export const slides = [
    {
        id: 2,
        title: "Tool Observability",
        subtitle: "Track every tool execution and trigger event in real-time from a single, unified dashboard.",
        img: img_04,
    },
    {
        id: 3,
        title: "Plug and Play",
        subtitle: "You can us with any language, any llm and all the frameworks you love (or hate)",
        img: img_05,
    },

    {
        id: 4,
        title: "Quick to Start — Effortless to Scale",
        subtitle: "We can help you scale to billions of tool calls effortlessly",
        img: img_01,
    },
    {
        id: 5,
        title: "Agent First Documentation  ",
        subtitle: "Our docs and examples are agent first should be easy enough for humans",
        img: img_03,
    },
    {
        id: 1,
        title: "Agent Auth",
        subtitle: "Let us manage all the headaches of auth for your tools",
        img: img_02,
    },
];

export const getCarouselStyle = (index, currentSlide, totalSlides) => {
    let transform = "";
    let zIndex = 1;
    let border = "";
    let grayscale = "";

    const position = index - currentSlide;

    if (position === 0) {
        transform = "translateX(0px) scale(1)";
        zIndex = 5;
        border = "#7C7A78";
        grayscale = "grayscale(0%)";
    } else if (position === -1 || position === totalSlides - 1) {
        transform = "translateX(-64px) scale(0.9)";
        zIndex = 4;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else if (position === 1 || position === -(totalSlides - 1)) {
        transform = "translateX(64px) scale(0.9)";
        zIndex = 4;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else if (position === -2 || position === totalSlides - 2) {
        transform = "translateX(-122px) scale(0.8)";
        zIndex = 3;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else if (position === 2 || position === -(totalSlides - 2)) {
        transform = "translateX(122px) scale(0.8)";
        zIndex = 3;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    } else {
        transform = "translateX(180px) scale(0.7)";
        zIndex = 2;
        border = "#C6C3C0";
        grayscale = "grayscale(100%)";
    }

    return {transform, zIndex, border, grayscale};
};
