import "./assets/css/index.css";

import {createRoot} from "react-dom/client";
import {router} from "./routes";
import {RouterProvider} from "react-router";
import LenisWrapper from "./components/shared/lenisWrapper";

createRoot(document.getElementById("root")).render(
    <>
        <LenisWrapper>
            <RouterProvider router={router} />
        </LenisWrapper>
    </>
);
