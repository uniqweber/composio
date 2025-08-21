import {pricingPlans} from "@/constants/pricingDataTable";
import React from "react";

export default function TableHeader() {
    return (
        <thead>
            <tr>
                <th className="text-left p-3 w-64 border-b border-black/50">
                    <div className="font-semibold text-black font-roobert">Features</div>
                </th>
                {pricingPlans.map((plan, index) => (
                    <th key={index} className={`text-center p-3 border-l  border-black/20 min-w-48 ${index === 1 ? "bg-white" : ""}`}>
                        <div>
                            <div className=" text-black/70 font-roobert ">{plan.name}</div>
                            <div className="text-sm text-black/40 font-roobert font-light">
                                <span className="">{plan.price}</span>
                                {plan.period && <span className="ml-1">{plan.period}</span>}
                            </div>
                        </div>
                    </th>
                ))}
            </tr>
        </thead>
    );
}
