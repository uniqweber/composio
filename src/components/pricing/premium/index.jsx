import React from "react";
import ToolCalls from "./ToolCalls";
import EnterprisePricing from "./EnterprisePricing";
import RateLimits from "./RateLimits";

export default function PremiumTools() {
    return (
        <div className="max-w-screen-xl mx-auto padding-x space-y-4 lg:mt-44 mt-16">
            <ToolCalls />
            <EnterprisePricing />
            <RateLimits />
        </div>
    );
}
