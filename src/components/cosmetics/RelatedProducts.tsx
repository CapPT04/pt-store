import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                Sản phẩm liên quan
            </h2>

            <div className="relative overflow-hidden">
                <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="min-w-[250px] max-w-[250px] snap-start"
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
            </div>
        </div>
    );
};

export default RelatedProducts; 