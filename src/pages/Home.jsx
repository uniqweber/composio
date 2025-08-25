import AgentsLogoCloud from "@/components/home/agents";
import Benefits from "@/components/home/benefits";
import BuiltForAgents from "@/components/home/built";
import CaseStudies from "@/components/home/cases";
import PriceCompare from "@/components/home/compare";
import Hero from "@/components/home/hero";
import Intelligence from "@/components/home/intelligence";
import MuscleMemory from "@/components/home/memory";
import ScrollableArea from "@/components/home/scrollable";
import Tweets from "@/components/home/tweets";

export default function Home() {
    return (
        <>
            <Hero />
            <AgentsLogoCloud />
            <MuscleMemory />
            <ScrollableArea />
            <CaseStudies />
            <BuiltForAgents />
            <Tweets />
            <Benefits />
            <PriceCompare />
            <Intelligence />
        </>
    );
}
