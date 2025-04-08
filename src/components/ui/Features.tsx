'use client';
import React from "react";
import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck, Gift } from "lucide-react";

interface Feature {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface FeaturesProps {
    features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
    return (
        <section className="py-12 bg-gradient-to-b from-white to-violet-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature) => (
                        <motion.div
                            key={feature.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl bg-gradient-to-br from-white to-violet-50 border border-violet-100/50 shadow-sm hover:shadow-xl transition-all duration-300 group backdrop-blur-sm"
                        >
                            <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-slate-600 text-sm">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features; 