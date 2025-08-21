import React from "react";

const rateLimitsData = [
    {
        category: "Tool Calls",
        tiers: {
            Free: "1000 / hour",
            Paid: "100,000 / hour",
            Enterprise: "Custom",
        },
    },
    {
        category: "Premium Tool Calls",
        tiers: {
            Free: "100 / hour",
            Paid: "10,000 / hour",
            Enterprise: "Custom",
        },
    },
];

export default function RateLimits() {
    const tiers = ["Free", "Paid", "Enterprise"];

    return (
        <div className="border border-black/20  space-y-4">
            <h3 className="font-roobert text-lg pt-4 px-6 text-gray-900">Rate Limits by Spending Tiers</h3>

            <div className="  rounded-lg overflow-hidden">
                {/* Header Grid */}
                <div className="grid grid-cols-3 lg:grid-cols-4 border-b border-black/50">
                    <div className="p-6 hidden  lg:block font-medium text-gray-900 border-r border-black/20">Rate Limits</div>
                    {tiers.map((tier) => (
                        <div key={tier} className="p-6 text-center font-medium text-gray-900 border-black/20 border-r last:border-r-0">
                            {tier}
                        </div>
                    ))}
                </div>

                {rateLimitsData.map((item) => (
                    <div key={item.category} className={`grid font-roobert font-light grid-cols-3 lg:grid-cols-4 border-b border-black/50 last:border-b-0`}>
                        <div className="p-6 hidden  lg:block text-gray-900 border-r border-black/20">{item.category}</div>
                        {tiers.map((tier) => (
                            <div key={tier} className="p-6 text-center text-gray-700 border-r border-black/20 last:border-r-0">
                                {item.tiers[tier]}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
