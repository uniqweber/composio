import {FaXTwitter} from "react-icons/fa6";

export function TweetCard({name, avatar, content}) {
    return (
        <div className="bg-light/40  p-3  h-72  font-roobert-mono relative">
            <div className="font-tinos absolute -top-[8px] -left-[4px] leading-none">
                +
            </div>
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <img src={avatar} alt={`${name} avatar`} className="size-8 rounded-full" />
                    <div className="text-gray-900 text-sm">{name}</div>
                </div>
                <div className="flex items-center gap-2">
                    <FaXTwitter />
                    <span className="font-ibm">&#8599;</span>
                </div>
            </div>

            <div className="text-sm text-gray-700  ">{content}</div>
        </div>
    );
}
