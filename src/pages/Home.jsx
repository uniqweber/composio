import Benefits from "@/components/home/benefits";
import BuiltForAgents from "@/components/home/built";
import PriceCompare from "@/components/home/compare";
import Intelligence from "@/components/home/intelligence";
import Tweets from "@/components/home/tweets";

export default function Home() {
    return (
        <>
            <BuiltForAgents />
            <Tweets />
            <Benefits />
            <PriceCompare />
            <Intelligence />
        </>
    );
}
