import Benefits from "@/components/home/benefits";
import BuiltForAgents from "@/components/home/built";
import CaseStudies from "@/components/home/cases";
import PriceCompare from "@/components/home/compare";
import Intelligence from "@/components/home/intelligence";
import Tweets from "@/components/home/tweets";

export default function Home() {
    return (
        <>
            <CaseStudies />
            <BuiltForAgents />
            <Tweets />
            <Benefits />
            <PriceCompare />
            <Intelligence />
        </>
    );
}
