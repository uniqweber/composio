import bg from "@/assets/images/pricing-cta-bg.png";

export default function CTA() {
    return (
        <div className="padding-x text-white mt-10 lg:mt-36">
            <div className="relative md:rounded-4xl h-96 md:h-67  overflow-hidden">
                <img src={bg} alt="" className="size-full object-cover" />

                <div className="absolute inset-0 p-6 md:p-12 flex flex-col justify-between">
                    <div>
                        <h6 className="text-white/40 font-roobert font-light text-lg tracking-wide">Composio Startup Program</h6>
                        <h2 className="text-5xl md:text-6xl font-ibm tracking-tighter mt-2 mb-5">
                            Get up to <span>$25K</span> of <span className="italic">free credits</span>
                        </h2>
                    </div>
                    <div className="flex flex-col md:flex-row items-end justify-between gap-2">
                        <p className="text-sm font-roobert font-light text-white/80 md:text-lg max-w-md">
                            Eligible startups can get up to $25K in free credits on  Composio.
                        </p>
                        <button className="w-full md:w-auto justify-center font-roobert-mono  uppercase flex items-center gap-3  text-black px-16 py-2 bg-white border ">
                            <span className="font-tinos">&#8594;</span>
                            <span>Apply Now</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
