import {useEffect, useRef, useState} from "react";
import {TweetCard} from "./TweetCard";

export function TweetMarquee({testimonials}) {
    const marqueeRef = useRef();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        const marquee = marqueeRef.current;
        if (!marquee) return;

        let animationId;
        let translateValue = 0;
        const speed = 0.5;

        const animate = () => {
            if (isMobile) {
                translateValue -= speed;
                const cardWidth = 300;
                const totalWidth = testimonials.length * cardWidth;

                if (Math.abs(translateValue) >= totalWidth) {
                    translateValue = 0;
                }

                marquee.style.transform = `translateX(${translateValue}px)`;
            } else {
                translateValue -= speed;
                const cardHeight = 200;
                const rowsPerSet = Math.ceil(testimonials.length / 2);
                const totalHeight = rowsPerSet * cardHeight;

                if (Math.abs(translateValue) >= totalHeight) {
                    translateValue = 0;
                }

                marquee.style.transform = `translateY(${translateValue}px)`;
            }

            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [testimonials, isMobile]);

    return (
        <div className={`${isMobile ? "h-64" : "h-[calc(100vh-70px)]"} overflow-hidden relative`}>
            <div
                ref={marqueeRef}
                className={`${isMobile ? "flex  " : "grid gap-[1px] grid-cols-2"}`}
                style={{willChange: "transform"}}
            >
                {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                    <div key={`${testimonial.id}-${index}`} className={isMobile ? "flex-shrink-0 w-72" : "w-full"}>
                        <TweetCard name={testimonial.name} avatar={testimonial.avatar} content={testimonial.content} />
                    </div>
                ))}
            </div>
        </div>
    );
}
