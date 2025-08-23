import {tweets} from "@/constants/tweets";
import {TweetMarquee} from "./TweetMarquee";

import bg from "@/assets/images/tweets-bg.png";
import {FaQuoteLeft} from "react-icons/fa6";

export default function Tweets() {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute pt-60 inset-0">
                <img src={bg} alt="" className=" object-cover " />
            </div>

            <div className="absolute lg:hidden top-0 left-0 bottom-0 w-10 bg-gradient-to-r from-light to-transparent z-10 pointer-events-none" />
            <div className="absolute lg:hidden top-0 right-0 bottom-0 w-10 bg-gradient-to-l from-light to-transparent z-10 pointer-events-none" />
            <div className="absolute hidden lg:block top-0 left-0 right-0 h-32 bg-gradient-to-b from-light via-light/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute hidden lg:block bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light via-light/80 to-transparent z-10 pointer-events-none" />

            <div className=" lg:padding-x max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-20">
                <div className="px-6 lg:col-span-3   relative mt-40 flex flex-col lg:flex-row ">
                    <FaQuoteLeft className="text-4xl lg:text-6xl  text-black/20" />
                    <h1 className="text-4xl  lg:text-6xl font-tinos text-gray-700 font-light mt-3 lg:mt-16 ">
                        Built a workflow that <br /> used to take 3 services <br /> and 2 meetings.
                    </h1>
                </div>

                <div className="lg:col-span-2  backdrop-blur-sm ">
                    <TweetMarquee testimonials={tweets} />
                </div>
            </div>
        </div>
    );
}
