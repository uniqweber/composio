import {pricingData} from "@/constants/pricing";
import CompareHead from "./CompareHead";
import CompareForEnterprises from "./CompareForEnterprises";
import CompareCard from "./CompareCard";

export default function Prices() {
    return (
        <div className="padding-x pb-4 xl:pb-5">
            <CompareHead />
            <div className="max-w-6xl mx-auto px-0 lg:px-4 xl:px-0 space-y-4 xl:space-y-5 ">
                <div className=" grid lg:grid-cols-3 gap-4 xl:gap-5">
                    {pricingData.map((item) => (
                        <CompareCard key={item.title} item={item} />
                    ))}
                </div>
                <CompareForEnterprises />
            </div>
        </div>
    );
}
