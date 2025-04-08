'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, Search, Star, ShoppingCart } from "lucide-react";

interface Product {
    id: number;
    name: string;
    price: string;
    originalPrice: string;
    discount: string;
    imageUrl: string;
    category: string;
    rating: number;
    reviews: number;
    isNew: boolean;
}

interface FeaturedProductsProps {
    products: Product[];
    activeCategory: string;
    onCategoryChange: (category: string) => void;
}

const FeaturedProducts = ({ products, activeCategory, onCategoryChange }: FeaturedProductsProps) => {
    const [displayCount, setDisplayCount] = useState(4);
    const filteredProducts = activeCategory === "all"
        ? products
        : products.filter((product) =>
            product.category.toLowerCase().includes(activeCategory.toLowerCase()),
        );

    const displayedProducts = filteredProducts.slice(0, displayCount);
    const hasMoreProducts = filteredProducts.length > displayCount;

    return (
        <section className="py-16 bg-gradient-to-b from-violet-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-3 shadow-sm"
                    >
                        Sản Phẩm Nổi Bật
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-800 mb-4"
                    >
                        Sản Phẩm Bán Chạy
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-6 shadow-sm"
                    ></motion.div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {["all", "Thời trang", "Mỹ phẩm", "Phụ kiện"].map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md"
                                    : "bg-white/80 text-slate-700 hover:bg-violet-100/50 border border-violet-100/50"
                                }`}
                        >
                            {category === "all" ? "Tất Cả" : category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-violet-100/30 overflow-hidden group hover:shadow-xl transition-all duration-300"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between">
                                    {product.discount && (
                                        <div className="bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                            {product.discount}
                                        </div>
                                    )}
                                    {product.isNew && (
                                        <div className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md ml-auto">
                                            Mới
                                        </div>
                                    )}
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                                    <Button className="bg-white text-violet-600 rounded-full p-3 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-violet-50">
                                        <ShoppingBag className="h-5 w-5" />
                                    </Button>
                                    <Button className="bg-white text-violet-600 rounded-full p-3 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75 hover:bg-violet-50">
                                        <Heart className="h-5 w-5" />
                                    </Button>
                                    <Button className="bg-white text-violet-600 rounded-full p-3 shadow-lg transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 hover:bg-violet-50">
                                        <Search className="h-5 w-5" />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-violet-50 text-violet-600">
                                        {product.category}
                                    </span>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                                        <span className="text-xs text-slate-600 ml-1">
                                            {product.rating} ({product.reviews})
                                        </span>
                                    </div>
                                </div>
                                <h3 className="font-medium text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {product.name}
                                </h3>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-lg font-bold text-violet-600">
                                            {product.price}
                                        </span>
                                        {product.originalPrice && (
                                            <span className="ml-2 text-sm text-slate-500 line-through">
                                                {product.originalPrice}
                                            </span>
                                        )}
                                    </div>
                                    <Button className="bg-violet-100 hover:bg-violet-200 text-violet-600 rounded-full p-2 transition-colors duration-300">
                                        <ShoppingCart className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {hasMoreProducts && (
                    <div className="text-center mt-12">
                        <Button
                            onClick={() => setDisplayCount(prev => prev + 4)}
                            className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20"
                        >
                            Xem Thêm Sản Phẩm
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturedProducts; 