import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CarouselNavigation({currentSlide, setCurrentSlide, nextSlide, prevSlide, slides}) {
    return (
        <div className="lg:flex items-center hidden text-black/50 mt-12 xl:mt-20 justify-center gap-5">
            <button onClick={prevSlide}>
                <FaAngleLeft />
            </button>

            <div className="flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentSlide ? "bg-black/50" : "border border-black/20"
                        }`}
                    />
                ))}
            </div>
            <button onClick={nextSlide}>
                <FaAngleRight />
            </button>
        </div>
    );
}
