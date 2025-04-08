'use client';
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles, Star, Zap, Percent } from "lucide-react";

interface Category {
    id: number;
    name: string;
    imageUrl: string;
    count: string;
    icon: React.ReactNode;
}

interface CategoriesProps {
    categories: Category[];
}

const Categories = ({ categories }: CategoriesProps) => {
    return (
        <section className="py-16 bg-[linear-gradient(to_right,_#f0f9ff,_#f8fafc,_#fdf2f8)]">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-3 shadow-sm"
                    >
                        Danh Mục Sản Phẩm
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-800 mb-4"
                    >
                        Khám Phá Bộ Sưu Tập Đa Dạng
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-6 shadow-sm"
                    ></motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-slate-600 max-w-2xl mx-auto"
                    >
                        Khám phá các danh mục sản phẩm đa dạng của chúng tôi, từ thời
                        trang đến mỹ phẩm và phụ kiện
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50"
                        >
                            <div className="aspect-w-1 aspect-h-1 w-full">
                                <img
                                    src={category.imageUrl}
                                    alt={category.name}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-indigo-800/50 to-transparent flex flex-col justify-end p-6">
                                <div className="flex items-center mb-2">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-violet-600/90 to-fuchsia-500/90 backdrop-blur-sm flex items-center justify-center text-white mr-3 shadow-lg">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-white">
                                        {category.name}
                                    </h3>
                                </div>
                                <p className="text-violet-200 text-sm mb-4">
                                    {category.count}
                                </p>
                                <Button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 rounded-full py-2 px-5 text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                                    Khám Phá Ngay
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories; 