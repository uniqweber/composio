export const pricingPlans = [
    {
        name: "Totally Free",
        price: "$0",
        period: "/ month",
    },
    {
        name: "Ridiculously Cheap",
        price: "$29",
        period: "/ month",
    },
    {
        name: "Serious Business",
        price: "$229",
        period: "/ month",
    },
    {
        name: "Enterprise",
        price: "Contact us",
        period: "",
    },
];

export const featuresData = [
    {
        category: "",
        rows: [
            {
                feature: "Tool Calls (including Triggers)",
                subtext: "Usage Based",
                values: ["20K", "200K", "2M", "Flexible"],
                subtexts: ["", "+ $0.299 / 1K calls", "+ $0.249 / 1K calls", ""],
            },
            {
                feature: "Premium Tool Calls †",
                subtext: "Usage Based",
                values: ["1K", "5K", "50K", "Flexible"],
                subtexts: ["-", "3x (+$0.897 / 1K)", "3x (+$0.747 / 1K)", ""],
            },
            {
                feature: "Connected Accounts",
                subtext: "Usage Based",
                values: ["1K", "30K", "100K", "Flexible"],
                subtexts: ["-", "+ $2 / 1K accounts", "+$1 / 1K accounts", ""],
            },
            {
                feature: "Projects",
                subtext: "",
                values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Team Members",
                subtext: "",
                values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Log Retention",
                subtext: "",
                values: ["14 days", "30 days", "90 days", "Flexible"],
                subtexts: ["", "", "", ""],
            },
        ],
    },
    {
        category: "Features",
        rows: [
            {
                feature: "Bring Your Own Credentials",
                subtext: "",
                values: [true, true, true, true],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Custom Tool Builder",
                subtext: "",
                values: ["3 apps", "Unlimited", "Unlimited", "Unlimited"],
                subtexts: ["", "", "", ""],
            },
        ],
    },
    {
        category: "Support",
        rows: [
            {
                feature: "Community Support",
                subtext: "",
                values: [true, true, true, true],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Email Support",
                subtext: "",
                values: [false, true, true, true],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Slack Support",
                subtext: "",
                values: [false, false, "on 5K+ spend", true],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Dedicated Support",
                subtext: "",
                values: [false, false, false, true],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Custom SLA",
                subtext: "",
                values: [false, false, false, true],
                subtexts: ["", "", "", ""],
            },
        ],
    },
    {
        category: "Security & Administration",
        rows: [
            {
                feature: "RBAC & Team Management",
                subtext: "",
                values: [false, false, true, true],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "Audit Logs",
                subtext: "",
                values: [false, false, true, true],
                subtexts: ["", "", "", ""],
            },
            {
                feature: "SOC II Compliance",
                subtext: "",
                values: [true, true, true, true],
                subtexts: ["", "", "", ""],
            },
        ],
    },
];
