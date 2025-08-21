import Home from "@/pages/Home";
import Blogs from "@/pages/Blogs";
import Pricing from "@/pages/Pricing";
import NotFound from "@/pages/NotFound";
import BlogDetails from "@/pages/BlogDetails";
import Enterprises from "@/pages/Enterprises";
import Layout from "@/components/shared/Layout";
import ErrorBoundary from "@/components/shared/ErrorBoundary";

import {createBrowserRouter} from "react-router";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorBoundary />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "pricing",
                element: <Pricing />,
            },
            {
                path: "enterprises",
                element: <Enterprises />,
            },
            {
                path: "blogs",
                children: [
                    {
                        index: true,
                        element: <Blogs />,
                    },
                    {
                        path: ":id",
                        element: <BlogDetails />,
                    },
                ],
            },
        ],
    },

    {
        path: "*",
        element: <NotFound />,
    },
]);
