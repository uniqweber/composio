import Article from "@/components/details/Article";
import DetailsHead from "@/components/details/DetailsHead";
import Recommended from "@/components/details/Recommended";
import TryCTA from "@/components/details/TryCTA";
import React from "react";

export default function BlogDetails() {
    return (
        <>
            <DetailsHead />
            <Article />
            <TryCTA />
            <Recommended />
        </>
    );
}
