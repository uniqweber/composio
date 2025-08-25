import waterMark from "@/assets/images/case-studies-card-watermark.png";
import bg from "@/assets/images/case-studies-card-bg.png";

export function TestimonialCard({caseStudy}) {
    return (
        <div className=" max-w-xl xl:max-w-3xl  p-6 md:px-20 md:pt-20 md:pb-28 mx-auto relative group">
            <img
                src={bg}
                alt=""
                className=" lg:group-hover:opacity-100 opacity-20 size-full object-cover xl:size-auto xl:-top-10 xl:-left-10  absolute inset-0 duration-500"
            />
            <img
                src={waterMark}
                alt=""
                className="scale-72 xl:scale-80 top-1/2 left-1/2 -translate-1/2 xl:-ml-17 xl:mt-5  lg:group-hover:opacity-0 duration-500 opacity-15 absolute inset-0 "
            />
            <div className="relative  z-10 max-w-lg  xl:max-w-[519px] w-full ">
                <h3 className="text-black/40 font-roobert font-light mb-5">{caseStudy.name}</h3>

                <div className="mb-10">
                    <p className="text-2xl md:text-3xl xl:text-4xl font-ibm font-light text-black/60 md:leading-11 xl:leading-12">{caseStudy.title}</p>
                </div>

                <div className="flex items-center font-roobert gap-4 mb-10">
                    <img src={caseStudy.logo} alt="user" className="size-6 " />
                    <div>
                        <h4 className="text-black/60 ">{caseStudy.user}</h4>
                        <p className="text-xs text-black/40 font-light">{caseStudy.role}</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 font-roobert">
                    {caseStudy.highlights.map((highlight) => (
                        <div className="text-center md:text-left">
                            <div className="text-2xl xl:text-4xl font-bold text-black mb-2">
                                {highlight.infoTitle}{" "}
                                {highlight.unit && (
                                    <span className="text-xl xl:text-2xl font-normal text-black/40">{highlight.unit}</span>
                                )}
                            </div>
                            <p className="text-black/40 mx-auto  font-roobert-mono xl:text-xl ">{highlight.infoContent}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
