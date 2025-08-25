import {useEffect, useRef} from "react";
import Lenis from "lenis";

export default function LenisWrapper({children}) {
    const lenisRef = useRef();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        lenisRef.current = lenis;
        window.__lenis = lenis;

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        window.stopLenisScroll = () => {
            lenisRef.current?.stop();
        };
        window.startLenisScroll = () => {
            lenisRef.current?.start();
        };

        return () => {
            delete window.stopLenisScroll;
            delete window.startLenisScroll;
        };
    }, []);

    return <>{children}</>;
}
