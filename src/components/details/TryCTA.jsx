import ctaImg from "@/assets/images/blog-details-02.png";

export default function TryCTA() {
    return (
        <div className="my-20 padding-x">
            <div className="bg-black max-w-4xl mx-auto p-6 md:p-12 text-white relative overflow-hidden">
                <div className="relative z-10">
                    <h3 className="text-4xl font-tinos md:w-4/6 mb-8 ">
                        See how our mission drives MCP forward — learn what the protocol enables.
                    </h3>
                    <button className="bg-white text-black px-6 py-2 font-roobert-mono hover:bg-gray-100 transition-colors w-1/2 uppercase flex items-center justify-center gap-3 group">
                        <span className="font-tinos text-xl">&#8594;</span>{" "}
                        <span className="group-hover:underline">Try Now</span>
                    </button>
                </div>
                <div className="absolute right-4 top-4 ">
                    <img src={ctaImg} alt="" className="h-60" />
                </div>
            </div>
        </div>
    );
}
