import bg from "@/assets/images/enterprises-automate-bg.png";

export default function Automate() {
    return (
        <div className=" relative  overflow-hidden">
            <div className="h-[60vh] lg:h-[80vh] relative overflow-hidden">
                <img src={bg} alt="" className="absolute bottom-0 scale-105   h-full w-full    object-cover " />
            </div>

            <div className="absolute inset-0 flex flex-col md:items-center justify-center md:text-center px-6 max-w-xl mx-auto">
                <h2 className="font-tinos text-4xl md:text-6xl text-gray-800">Automate at scale</h2>
                <p className="font-roobert tracking-wide font-light lg:text-lg mt-2 lg:mt-4 max-w-sm">
                    Automate lead sourcing, enrichment, and outreach with ready-to-use sales workflows.
                </p>
                <button className="px-24 font-roobert-mono w-full font-light uppercase mt-6 lg:mt-8  py-2 bg-black text-white text-sm">
                    Book a call
                </button>
            </div>
        </div>
    );
}
