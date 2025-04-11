"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Star,
    ShoppingBag,
    Heart,
    Share2,
    Plus,
    Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ProductInfoProps = {
    product: {
        id: string | string[];
        name: string;
        brand: string;
        price: string;
        originalPrice?: string;
        discount?: string;
        rating: number;
        reviews: number;
        description: string;
        sizes: Array<{ size: string; price: string }>;
        features: Array<{
            icon: React.ReactNode;
            title: string;
            description: string;
        }>;
    };
    onAddToCart: (quantity: number, size: string) => void;
};

const ProductInfo: React.FC<ProductInfoProps> = ({ product, onAddToCart }) => {
    const router = useRouter();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("50ml");
    const [isFavorite, setIsFavorite] = useState(false);

    // Handle quantity changes
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    // Handle add to cart
    const handleAddToCart = () => {
        onAddToCart(quantity, selectedSize);
    };

    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-lg relative overflow-hidden"
            >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl" />

                <div className="relative z-10">
                    {/* Brand */}
                    <div className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-sm font-medium rounded-full mb-3">
                        {product.brand}
                    </div>

                    {/* Product name */}
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                        {product.name}
                    </h1>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-violet-600 fill-violet-600" : "text-gray-300"}`}
                                />
                            ))}
                        </div>
                        <span className="text-sm text-gray-600">
                            {product.rating} ({product.reviews} đánh giá)
                        </span>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                        <div className="flex items-center gap-3">
                            <span className="text-3xl font-bold text-violet-600">
                                {product.price}
                            </span>
                            {product.originalPrice && (
                                <span className="text-lg text-gray-500 line-through">
                                    {product.originalPrice}
                                </span>
                            )}
                            {product.discount && (
                                <span className="px-2 py-1 bg-rose-500 text-white text-sm font-bold rounded-md">
                                    {product.discount}
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">
                            Giá đã bao gồm VAT
                        </p>
                    </div>

                    {/* Short description */}
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    {/* Size selection */}
                    <div className="mb-6">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">
                            Dung tích
                        </h3>
                        <div className="flex gap-3">
                            {product.sizes.map((sizeOption) => (
                                <motion.button
                                    key={sizeOption.size}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedSize(sizeOption.size)}
                                    className={cn(
                                        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                        selectedSize === sizeOption.size
                                            ? "bg-violet-600 text-white shadow-md"
                                            : "bg-white/80 border border-gray-200 text-gray-700 hover:border-violet-500",
                                    )}
                                >
                                    {sizeOption.size}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mb-8">
                        <h3 className="text-sm font-medium text-gray-700 mb-2">
                            Số lượng
                        </h3>
                        <div className="flex items-center">
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={decreaseQuantity}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                <Minus className="h-4 w-4" />
                            </motion.button>
                            <span className="w-12 text-center font-medium">
                                {quantity}
                            </span>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={increaseQuantity}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                <Plus className="h-4 w-4" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleAddToCart}
                            className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-violet-200/20 transition-all duration-300"
                        >
                            <ShoppingBag className="h-5 w-5" />
                            Thêm vào giỏ hàng
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsFavorite(!isFavorite)}
                            className={cn(
                                "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                                isFavorite
                                    ? "bg-rose-500 text-white"
                                    : "bg-white/80 border border-gray-200 text-gray-600 hover:text-rose-500",
                            )}
                        >
                            <Heart
                                className={cn("h-5 w-5", isFavorite && "fill-white")}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-full bg-white/80 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-violet-600 transition-all duration-300"
                        >
                            <Share2 className="h-5 w-5" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProductInfo; 