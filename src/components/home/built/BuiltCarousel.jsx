import React, {useState} from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

const FeatureCarousel = () => {
    const slides = [
        {
            id: 1,
            title: "Tool Calling",
            subtitle: "Track and visualize",
            description: "In real-time, see the dashboard update with all the tool calls",
        },
        {
            id: 2,
            title: "Quick to Start —",
            subtitle: "Effortless to Scale",
            description: "We can help you scale to billions of tool calls effortlessly",
        },
        {
            id: 3,
            title: "Analytics",
            subtitle: "Deep Insights",
            description: "Get comprehensive analytics on your tool usage and performance",
        },
        {
            id: 4,
            title: "Security",
            subtitle: "Enterprise Grade",
            description: "Built with security and compliance at the forefront",
        },
        {
            id: 5,
            title: "Integration",
            subtitle: "Seamless Setup",
            description: "Integrate with your existing tools and workflows easily",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(2);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="w-full h-[544px]">
            <div className="relative h-full flex items-center justify-center">
                {slides.map((slide, index) => {
                    let transform = "";
                    let zIndex = 1;

                    const position = index - currentSlide;

                    if (position === 0) {
                        // Center active card
                        transform = "translateX(0px) scale(1)";
                        zIndex = 50;
                    } else if (position === -1 || position === slides.length - 1) {
                        // Left card - 20% outside from center
                        transform = "translateX(-64px) scale(0.9)";
                        zIndex = 40;
                    } else if (position === 1 || position === -(slides.length - 1)) {
                        // Right card - 20% outside from center
                        transform = "translateX(64px) scale(0.9)";
                        zIndex = 40;
                    } else if (position === -2 || position === slides.length - 2) {
                        // Far left card - 20% more outside from previous card
                        transform = "translateX(-122px) scale(0.8)";
                        zIndex = 30;
                    } else if (position === 2 || position === -(slides.length - 2)) {
                        // Far right card - 20% more outside from previous card
                        transform = "translateX(122px) scale(0.8)";
                        zIndex = 30;
                    } else {
                        // Hidden cards
                        transform = "translateX(180px) scale(0.7)";
                        zIndex = 10;
                    }

                    return (
                        <div
                            key={slide.id}
                            className="absolute w-80 h-full  transition-all duration-500 ease-in-out cursor-pointer"
                            style={{
                                transform,
                                zIndex,
                            }}
                            onClick={() => setCurrentSlide(index)}
                        >
                            <div className="bg-white rounded-xl shadow-xl border h-full p-6 hover:shadow-2xl transition-shadow">
                                <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                                    <span className="text-white text-2xl font-bold opacity-80">
                                        {slide.title.split(" ")[0]}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{slide.title}</h3>
                                <h4 className="text-lg text-gray-700 mb-3">{slide.subtitle}</h4>
                                <p className="text-gray-600 text-sm leading-relaxed">{slide.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="flex items-center mt-32 justify-center gap-5">
                {/* Navigation buttons */}
                <button onClick={prevSlide}>
                    <FaAngleLeft />
                </button>

                {/* Dots indicator */}
                <div className="flex justify-center space-x-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-colors ${
                                index === currentSlide ? "bg-blue-600" : "bg-gray-300 hover:bg-gray-400"
                            }`}
                        />
                    ))}
                </div>
                <button onClick={nextSlide}>
                    <FaAngleRight />
                </button>
            </div>
        </div>
    );
};

export default FeatureCarousel;
