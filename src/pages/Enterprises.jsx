import Automate from "@/components/enterprises/Automate";
import Features from "@/components/enterprises/features";
import LogoCloud from "@/components/enterprises/LogoCloud";
import Scalable from "@/components/enterprises/Scalable";
import Security from "@/components/enterprises/security";
import React from "react";

export default function Enterprises() {
    return (
        <>
            <Scalable />
            <LogoCloud />
            <Security />
            <Features />
            <Automate />
        </>
    );
}
