'use client';
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    avatar: string;
    text: string;
    rating: number;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
    return (
        <section className="py-16 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-pink-100 via-violet-50 to-sky-100">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-3 shadow-sm"
                    >
                        Đánh Giá Từ Khách Hàng
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-slate-800 mb-4"
                    >
                        Khách Hàng Nói Gì Về Chúng Tôi
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-6 shadow-sm"
                    ></motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-violet-100/30"
                        >
                            <div className="flex items-center mb-4">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4 border-2 border-violet-100 shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-800">
                                        {testimonial.name}
                                    </h4>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < testimonial.rating
                                                    ? "text-pink-400 fill-pink-400"
                                                    : "text-slate-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-600 italic">"{testimonial.text}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials; 