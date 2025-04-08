'use client';
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Banner {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
    imageUrl: string;
    position: "left" | "right";
}

interface BannerProps {
    banners: Banner[];
}

const Banner = ({ banners }: BannerProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [banners.length]);

    return (
        <section className="relative overflow-hidden py-8 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-100 to-rose-100">
            <div className="container mx-auto px-4">
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/30">
                    {banners.map((banner, index) => (
                        <motion.div
                            key={banner.id}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: currentSlide === index ? 1 : 0,
                                scale: currentSlide === index ? 1 : 1.05,
                            }}
                            transition={{ duration: 0.8 }}
                            className={`absolute inset-0 w-full h-full ${currentSlide === index ? "z-10" : "z-0"}`}
                        >
                            <img
                                src={banner.imageUrl}
                                alt={banner.title}
                                className="w-full h-full object-cover"
                            />
                            <div
                                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16 ${banner.position === "right" ? "items-end text-right" : "items-start text-left"}`}
                            >
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: currentSlide === index ? 1 : 0,
                                        y: currentSlide === index ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-600/90 to-fuchsia-500/90 text-white text-sm font-medium mb-4 backdrop-blur-sm shadow-lg"
                                >
                                    {banner.subtitle}
                                </motion.span>
                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: currentSlide === index ? 1 : 0,
                                        y: currentSlide === index ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                                >
                                    {banner.title}
                                </motion.h2>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: currentSlide === index ? 1 : 0,
                                        y: currentSlide === index ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-gray-200 mb-6 max-w-md text-lg"
                                >
                                    {banner.description}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: currentSlide === index ? 1 : 0,
                                        y: currentSlide === index ? 0 : 20,
                                    }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                >
                                    <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20">
                                        {banner.buttonText}
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}

                    {/* Indicators */}
                    <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
                        {banners.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"}`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner; 