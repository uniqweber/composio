import PowerTools from "./PowerTools";
import AgentAuth from "./AgentAuth";
import SOC2Type from "./SOC2Type";
import EvolvingSkill from "./EvolvingSkill";
import ComposioMCP from "./ComposioMCP";
import AccurateTools from "./AccurateTools";

export default function Benefits() {
    return (
        <div className="padding-x max-w-screen-2xl my-32 md:my-60 mx-auto ">
            <div className="mt-16 divide-y divide-black/20 relative">
                <div className="absolute hidden md:block top-1/2  -translate-y-1/2 left-1/3  font-tinos border-none leading-none z-10">
                    <span className="-ml-[5px]">+</span>
                </div>
                <div className="absolute hidden md:block top-1/2  -translate-y-1/2 right-1/3  font-tinos border-none leading-none z-10">
                    <span className="-mr-[4px]">+</span>
                </div>
                <div className="divide-y md:divide-y-0 md:divide-x grid md:grid-cols-3 divide-black/20">
                    <PowerTools />
                    <AgentAuth />
                    <EvolvingSkill />
                </div>
                <div className="divide-y md:divide-y-0 md:divide-x grid md:grid-cols-3 divide-black/20">
                    <ComposioMCP />
                    <AccurateTools />
                    <SOC2Type />
                </div>
            </div>
        </div>
    );
}
