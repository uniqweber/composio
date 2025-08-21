import {Suspense} from "react";
import Loader from "./Loader";
import {Outlet} from "react-router";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout() {
    return (
        <>
            <header>
                <Navbar />
            </header>

            <main className="min-h-screen pt-17.5">
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
