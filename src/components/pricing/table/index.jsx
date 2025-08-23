import TableRow from "./TableRow";
import TableHeader from "./TableHeader";
import CategoryHeader from "./CategoryHeader";

import {Fragment} from "react";
import {featuresData} from "@/constants/pricingDataTable";

export default function PricingTable() {
    return (
        <div className="max-w-screen-2xl hidden lg:block w-full mx-auto padding-x bg-light mt-24">
            <div className="overflow-x-auto">
                <table className="w-full ">
                    <TableHeader />

                    <tbody>
                        {featuresData.map((section, sectionIndex) => (
                            <Fragment key={sectionIndex}>
                                <CategoryHeader category={section.category} />
                                <TableRow section={section} />
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
