// import React from "react";

// export default function HeroBg() {
//     return (
//         <div className="absolute inset-0 overflow-hidden">
//             <div className="absolute inset-0 bg-white"></div>
//             <div className="relative  size-full ">
//                 {[...Array(30)].map((_, index) => (
//                     <div
//                         key={index}
//                         className="absolute h-full w-20 bg-gradient-to-b from-indigo-700  "
//                         style={{
//                             left: "50%",
//                             bottom: "50%",
//                             transformOrigin: "0 10%",
//                             transform: `rotate(${(index * 4)}deg)`,
//                         }}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// }

import React from "react";

export default function HeroBg() {
    const segments = 40;
    const angleStep = 100 / segments;

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-white"></div>
            <div className="relative  size-full scale-200 top-70">
                {[...Array(segments)].map((_, index) => (
                    <div
                        key={index}
                        className="absolute h-full bg-gradient-to-b  via-indigo-700 "
                        style={{
                            width: `${(360 / segments) * 4}%`,
                            left: "50%",
                            bottom: "50%",
                            transformOrigin: "0 10%",
                            transform: `rotate(${index * angleStep}deg)`,
                        }}
                    />
                ))}
            </div>
        </div>
    );
}
