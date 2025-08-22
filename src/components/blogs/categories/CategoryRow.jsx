import React from "react";

export default function CategoryRow({article}) {
    return (
        <div className="grid grid-cols-12 hover:bg-white/50 cursor-pointer gap-4 px-2 py-5 items-center border-b border-black/30 last:border-b-0  transition-colors">
            <div className="col-span-2 text-sm font-light text-black/50">{article.author}</div>
            <div className="col-span-5 text-sm md:text-base">{article.title}</div>
            <div className="col-span-3">
                <div className="flex flex-wrap flex-row-reverse gap-2">
                    {article.tags.map((tag) => (
                        <div
                            key={tag}
                            className="text-[10px] shrink-0  md:text-xs h-5 flex items-center justify-center border border-dashed border-black/30 px-3 leading-none text-black/50"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="col-span-2 text-right text-sm text-black/50 font-light ">{article.date}</div>
        </div>
    );
}
