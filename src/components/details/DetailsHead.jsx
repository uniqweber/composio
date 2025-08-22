import previewImg from "@/assets/images/blog-details-01.png";

export default function DetailsHead() {
    return (
        <section className="max-w-screen-2xl mx-auto padding-x pt-10 font-roobert tracking-wide">
            <div className="mb-8">
                <h1 className="text-4xl md:text-6xl font-tinos  mb-5">
                    We raised $29M to build skills that evolve with your agents
                </h1>
                <div className="flex items-center gap-3 text-sm ">
                    <span className=" italic text-lg text-black/80 tracking-wide">Sohail Goenka</span>
                    <span>•</span>
                    <span className=" font-light tracking-wide text-black/80 text-lg italic">Jul 22, 2025</span>
                    <span>•</span>
                    <span className=" font-light tracking-wide text-black/50 text-lg">1 m 14 s</span>
                </div>
                <div className="text-xs h-7 flex w-max mt-5 items-center justify-center border border-dashed border-black/30 px-4 text-black/50 leading-none">
                    Composio
                </div>
            </div>

            <div className="mb-8">
                <img
                    src={previewImg}
                    alt="Composio Series A $29 Million funding announcement"
                    className=" h-60 md:h-96 mx-auto"
                />
            </div>

            <div className="my-8">
                <p className="text-2xl text-black/90">
                    Support us on{" "}
                    <a href="#" className="text-blue-600 hover:underline">
                        Twitter
                    </a>
                </p>
            </div>
        </section>
    );
}
