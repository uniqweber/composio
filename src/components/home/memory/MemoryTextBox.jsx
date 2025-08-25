import React from "react";

export default function MemoryTextBox() {
    return (
        <div className="space-y-8 z-10 p-6 lg:p-0">
            <h1 className="text-4xl xl:text-6xl  font-tinos text-gray-900">
                Muscle Memory
                <br />
                for <em className="italic">Intelligence</em>
            </h1>

            <div className="space-y-6 xl:text-lg text-gray-700 max-w-sm xl:max-w-sm font-roobert font-light">
                <p>
                    In a world with <strong>countries of geniuses in datacenters, </strong> we believe the most
                    important thing is for them to be able to take complex actions and learn from them in realtime — to
                    build intuitions, to build skills, they can plug & play to create real economic value.
                </p>

                <p>
                    We are creating that layer that lets <strong>intelligence build intuition</strong>.
                </p>
            </div>
        </div>
    );
}
