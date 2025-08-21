import "./assets/css/index.css";

import {createRoot} from "react-dom/client";
import {router} from "./routes";
import {RouterProvider} from "react-router";

createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider router={router} />
    </>
);
