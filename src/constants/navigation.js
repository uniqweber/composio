import {FaDiscord, FaGithub, FaLinkedin, FaXTwitter, FaYoutube} from "react-icons/fa6";

export const pageNavigation = [
    {label: "Home", path: "/"},
    {label: "Pricing", path: "/pricing"},
    {label: "Blogs", path: "/blogs"},
    {label: "Enterprises", path: "/enterprises"},
];

export const footerNavigation = [
    {
        title: "PRODUCT",
        links: [
            {label: "MCP", path: ""},
            {label: "PRICING", path: "/pricing"},
            {label: "STARTUPS", path: "#"},
            {label: "ENTERPRISE", path: "/enterprises"},
            {label: "AGENT AUTH", path: "#"},
        ],
    },
    {
        title: "RESOURCES",
        links: [
            {label: "DOCS", path: "#"},
            {label: "BLOG", path: "/blogs"},
            {label: "COOKBOOKS", path: "#"},
        ],
    },
    {
        title: "COMPANY",
        links: [
            {label: "CAREERS", path: "#"},
            {label: "TRUST", path: "#"},
            {label: "CONTACT", path: "#"},
        ],
    },
];

export const socialLinks = [
    {href: "#", icon: FaXTwitter, label: "X"},
    {href: "#", icon: FaLinkedin, label: "LinkedIn"},
    {href: "#", icon: FaGithub, label: "GitHub"},
    {href: "#", icon: FaDiscord, label: "Discord"},
    {href: "#", icon: FaYoutube, label: "YouTube"},
];

export const legalLinks = [
    {label: "© Composio 2025", path: "#"},
    {label: "Terms", path: "#"},
    {label: "Privacy Policy", path: "#"},
];
