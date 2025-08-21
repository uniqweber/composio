import React from "react";

export default function ToolCalls() {
    return (
        <div className="border border-black/20 p-6">
            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-80 flex-shrink-0">
                    <h3 className="font-roobert text-lg text-gray-900"> † Premium Tool Calls</h3>
                </div>
                <div className="flex-1 font-roobert font-light">
                    <p className="text-sm text-gray-600 mb-1 ">Premium Tool Calls include:</p>
                    <ul className="text-sm text-gray-600 space-y-1 mb-4">
                        <li>- Search APIs (Google, Bing, Perplexity, etc.)</li>
                        <li>- Code execution environments (e2b)</li>
                        <li>- Web scraping & data extraction (Firecrawl)</li>
                        <li>- AI/ML model inference</li>
                        <li>- Document processing & OCR</li>
                        <li>- Advanced data transformations</li>
                        <li>- Compute-intensive operations</li>
                    </ul>
                    <button className="text-sm text-gray-500 underline hover:text-gray-700">Click to see full list of premium tools</button>
                </div>
            </div>
        </div>
    );
}
