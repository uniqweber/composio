import {Suspense} from "react";
import Loader from "./Loader";
import {Outlet} from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
