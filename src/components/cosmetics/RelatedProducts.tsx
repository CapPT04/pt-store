import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface RelatedProduct {
    id: number;
    name: string;
    price: string;
    image: string;
}

interface RelatedProductsProps {
    products: RelatedProduct[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Clone products to create infinite scroll effect
    const clonedProducts = [...products, ...products, ...products];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % products.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
    };

    useEffect(() => {
        if (isHovered) return;

        const interval = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered, products.length]);

    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Sản phẩm liên quan
            </h2>

            <div
                className="relative overflow-hidden group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Carousel Container */}
                <div
                    ref={containerRef}
                    className="flex gap-6 justify-around  transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * (250 + 24)}px)`,
                    }}
                >
                    {clonedProducts.map((product, index) => (
                        <motion.div
                            key={`${product.id}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="min-w-[250px] max-w-[250px] flex-shrink-0"
                        >
                            <div className="bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/50 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="250px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                        <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full py-1.5 px-4 text-sm transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                            Xem chi tiết
                                        </Button>
                                    </div>
                                </div>
                                <div className="p-4 flex-1 flex flex-col">
                                    <h3 className="font-medium text-gray-800 group-hover:text-violet-600 transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="text-violet-600 font-bold mt-auto pt-2">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center gap-2 mt-6">
                    {products.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                ? "bg-violet-600 w-4"
                                : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts; 