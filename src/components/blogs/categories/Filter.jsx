import {filterTags} from "@/constants/blogs";
import React, {useState} from "react";

export default function Filter() {
    const [selected, setSelected] = useState("All");

    return (
        <div className="flex flex-wrap gap-2 md:gap-4 mt-16 mb-12">
            {filterTags.map((tag) => (
                <div
                    key={tag}
                    onClick={() => setSelected(tag)}
                    className={`cursor-pointer h-6 text-sm px-3 flex items-center justify-center font-light border 
                        ${
                            selected === tag
                                ? "bg-white border-black/30 text-black"
                                : "bg-[#f3efe7] border-black/30 text-black/60 border-dashed"
                        }`}
                >
                    {tag}
                </div>
            ))}
        </div>
    );
}
