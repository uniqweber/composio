import React from "react";
import Prices from "@/components/pricing/prices";
import PricingTable from "@/components/pricing/table";
import CTA from "@/components/pricing/CTA";
import PremiumTools from "@/components/pricing/premium";
import Rewards from "@/components/pricing/rewards";


export default function Pricing() {
    return (
        <>
            <Prices />
            <PricingTable />
            <CTA/>
            <PremiumTools/>
            <Rewards/>
        </>
    );
}
