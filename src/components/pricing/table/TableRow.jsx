import React from "react";
import { FaCheck } from "react-icons/fa6";

export default function TableRow({section}) {
    const renderValue = (value) => {
        if (typeof value === "boolean") {
            return value ? (
                <div className="size-6 rounded-full bg-blue-600/15 text-blue-400 flex items-center justify-center text-xs">
                    <FaCheck />
                </div>
            ) : (
                <span className="text-gray-400">-</span>
            );
        }
        return <span className="text-black/70 font-roobert font-light ">{value}</span>;
    };
    return (
        <>
            {section.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="border-t border-black/20 hover:bg-gray-50/50">
                    <td className="p-3 w-64">
                        <div>
                            <div className="text-black/70 font-roobert font-light ">{row.feature}</div>
                            {row.subtext && <div className="text-sm text-black/40 font-roobert font-light ">{row.subtext}</div>}
                        </div>
                    </td>
                    {row.values.map((value, valueIndex) => (
                        <td key={valueIndex} className={`p-3 text-center border-l border-black/20 ${valueIndex === 1 ? "bg-white" : ""}`}>
                            <div className="flex flex-col items-center">
                                {renderValue(value, valueIndex)}
                                {row.subtexts[valueIndex] && (
                                    <div className="text-xs text-black/40 font-roobert font-light ">{row.subtexts[valueIndex]}</div>
                                )}
                            </div>
                        </td>
                    ))}
                </tr>
            ))}
        </>
    );
}
