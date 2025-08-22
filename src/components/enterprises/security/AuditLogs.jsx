import React from "react";
import SecurityCard from "./SecurityCard";
import {GoServer} from "react-icons/go";

export default function AuditLogs() {
    return (
        <SecurityCard title="Audit Logs" subtitle="Monitor and track all system activities.">
            <div className="size-20 flex items-center justify-center relative ">
                <div className="grid grid-cols-2 gap-1 group-hover:gap-5 duration-300">
                    <div className="size-3.5 border group-hover:border-black/20 duration-300 border-black/50 rounded"></div>
                    <div className="size-3.5 border group-hover:border-black/20 duration-300 border-black/50 rounded"></div>
                    <div className="size-3.5 border group-hover:border-black/20 duration-300 border-black/50 rounded"></div>
                    <div className="size-3.5 border group-hover:border-black/20 duration-300 border-black/50 rounded"></div>
                </div>
                <GoServer className="absolute text-lg top-1/2 left-1/2 text-black/80 -translate-1/2 -translate-y-1/2 scale-0 group-hover:scale-100 duration-300"/>
            </div>
        </SecurityCard>
    );
}
