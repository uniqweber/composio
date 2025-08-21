import React from "react";
import bg from "@/assets/images/pricing-hero-bg.png";

import {pricingData} from "@/constants/pricing";
import UsageBasedPricing from "./UsageBasedPricing";
import PriceCard from "./PriceCard";

export default function Prices() {
    return (
        <div className="padding-x pb-26">
            <div className="relative pt-4">
                <img src={bg} alt="" className="min-h-[400px] object-cover lg:object-center -mt-10 lg:mt-0" />
            </div>
            <div className="-mt-[300px] sm:-mt-[25vh] lg:-mt-[40vh] xl:-mt-[30vh] 2xl:-mt-[40vh] relative">
                <UsageBasedPricing />
                <div className="max-w-screen-lg mx-auto px-0 lg:px-4 xl:px-0 grid lg:grid-cols-3 gap-4 xl:gap-5 ">
                    {pricingData.map((item) => (
                        <PriceCard key={item.title} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
}
