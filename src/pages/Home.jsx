import Benefits from "@/components/home/benefits";
import PriceCompare from "@/components/home/compare";
import Intelligence from "@/components/home/intelligence";
import Tweets from "@/components/home/tweets";

export default function Home() {
    return (
        <>
            <Tweets />
            <Benefits />
            <PriceCompare />
            <Intelligence />
        </>
    );
}
