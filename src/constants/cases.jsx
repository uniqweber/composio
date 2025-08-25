import bruca from "@/assets/images/case-studies-bruca.png";
import nithik from "@/assets/images/case-studies-gorilla.png";
import jerome from "@/assets/images/case-studies-jerome.png";

export const caseStudies = [
    {
        id: 1,
        name: "Assista AI",
        title: (
            <>
                We couldn't be more happier when we found Composio. It{" "}
                <span className="font-medium text-black italic">reduced our go-to-market time</span> by over six months
            </>
        ),
        logo: bruca,
        user: "Burca Paul",
        role: "Founder, Assista AI",
        highlights: [
            {infoTitle: "~$20k", infoContent: "saved in costs", unit: "/m"},
            {infoTitle: "~230+", infoContent: "saved in dev", unit: "hrs"},
        ],
    },
    {
        id: 2,
        name: "Gorilla",
        title: (
            <>
                Composio's tools were straightforward to integrate from a developer's perspective, enabling the team to
                quickly <span className="font-medium text-black italic">incorporate agentic offerings</span>
            </>
        ),
        logo: nithik,
        user: "Nithik Yekollu",
        role: "AgentArena, UC Berkeley",
        highlights: [
            {infoTitle: "80", infoContent: "increase in calling", unit: "%"},
            {infoTitle: "100+", infoContent: "saved in dev", unit: "hrs"},
        ],
    },
    {
        id: 3,
        name: "Fabrile",
        title: (
            <>
                With hands-on help from their founder, we integrated Gmail and Google Drive in{" "}
                <span className="font-medium text-black italic">just 30 minutes</span>
            </>
        ),
        logo: jerome,
        user: "Jerome",
        role: "Co-founder, Ingram Technologies",
        highlights: [
            {infoTitle: "~$45k", infoContent: "saved in costs", unit: ""},
            {infoTitle: "< 30", infoContent: "integration time", unit: "mins"},
        ],
    },
];
