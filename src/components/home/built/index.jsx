import React from "react";
import BuiltHead from "./BuiltHead";
import FeatureCarousel from "./BuiltCarousel";
import CodeBlock from "./CodeBlock";

export default function BuiltForAgents() {
    return (
        <div className="padding-x max-w-screen-2xl mx-auto mb-40">
            <BuiltHead />
            <div className="grid lg:grid-cols-2 items-center gap-10 xl:gap-20 mt-32">
                <FeatureCarousel />
                <CodeBlock/>
            </div>
        </div>
    );
}
