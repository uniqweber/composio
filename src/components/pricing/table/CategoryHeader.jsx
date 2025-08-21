import React from "react";

export default function CategoryHeader({category}) {
    return (
        <tr>
            <td colSpan={5} className={category ? "px-4  pb-4 pt-8 border-t border-black/50" : "border-t border-gray-500"}>
                <div className="font-semibold text-black font-roobert">{category}</div>
            </td>
        </tr>
    );
}
