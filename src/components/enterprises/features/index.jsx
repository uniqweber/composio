import textBg from "@/assets/images/enterprises-info-text-bg.png";
import clockFill from "@/assets/images/clock-bg-fill.png";
import clockLine from "@/assets/images/clock-bg-outline.png";
import messageLine from "@/assets/images/message-bg-outline.png";
import messageFill from "@/assets/images/message-bg-fill.png";
import stackLine from "@/assets/images/stack-bg-outline.png";
import stackFill from "@/assets/images/stack-bg-fill.png";
import blobFill from "@/assets/images/blob-bg-fill.png";
import blobLine from "@/assets/images/blob-bg-outline.png";

import FeatureCard from "./FeatureCard";

export default function Features() {
    return (
        <div className="padding-x max-w-screen-xl mx-auto mt-10 md:mt-52 md:mb-32">
            <div className="relative pt-20 mt-10 md:mt-0 md:pt-0 md:h-60 md:w-max mx-auto flex items-end md:pl-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-tinos text-black/80">
                        <span className="italic">Enterprise-exclusive</span> features
                    </h2>
                    <p className="font-roobert max-w-md text-black/40 tracking-wide font-light lg:text-xl mt-2 lg:mt-4 md:pr-5">
                        From enrichment to engagement, let your agents handle prospecting, outreach, follow-ups, and
                        pipeline updates.
                    </p>
                </div>
                <img src={textBg} alt="" className="h-full object-cover opacity-20 absolute inset-0" />
            </div>

            <div className="mt-16 md:grid-cols-2 grid max-w-2xl mx-auto gap-6">
                <FeatureCard defaultImg={messageLine} changedImg={messageFill} title="Sales Engagement" />
                <FeatureCard defaultImg={stackLine} changedImg={stackFill} title="Dedicated Support" />
                <FeatureCard defaultImg={blobLine} changedImg={blobFill} title="Self-Hosting" />
                <FeatureCard defaultImg={clockLine} changedImg={clockFill} title="Tool Requests Prioritized" />
            </div>
        </div>
    );
}
