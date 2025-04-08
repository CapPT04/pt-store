'use client';
import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-900 to-violet-950 text-white pt-16 pb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=1200&q=80')] opacity-5 mix-blend-overlay"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <h3
                            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-6 font-['Pacifico',_cursive] drop-shadow-[0_2px_2px_rgba(139,92,246,0.3)]"
                            style={{
                                textShadow:
                                    "0 0 5px rgba(139,92,246,0.3), 0 0 10px rgba(236,72,153,0.2)",
                                WebkitTextStroke: "0.5px rgba(255,255,255,0.2)",
                            }}
                        >
                            P&T Store
                        </h3>
                        <p className="text-slate-400 mb-6">
                            Tỏa sáng với phong cách riêng cùng P&T Store - Nơi mang đến
                            những sản phẩm thời trang và mỹ phẩm chất lượng cao.
                        </p>
                        <div className="flex space-x-4">
                            {["facebook", "twitter", "instagram", "youtube"].map(
                                (social) => (
                                    <a
                                        key={social}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-400 hover:bg-gradient-to-r hover:from-violet-600 hover:to-fuchsia-500 hover:text-white transition-all duration-300 border border-slate-700"
                                    >
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                        </svg>
                                    </a>
                                ),
                            )}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">
                            Thông Tin
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Về Chúng Tôi",
                                "Chính Sách Bảo Mật",
                                "Điều Khoản Dịch Vụ",
                                "Chính Sách Vận Chuyển",
                                "Chính Sách Đổi Trả",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-slate-400 hover:text-violet-400 transition-colors flex items-center"
                                    >
                                        <ChevronDown className="h-3 w-3 mr-2 rotate-[-90deg]" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">
                            Tài Khoản
                        </h4>
                        <ul className="space-y-4">
                            {[
                                "Tài Khoản Của Tôi",
                                "Lịch Sử Đơn Hàng",
                                "Danh Sách Yêu Thích",
                                "Thông Báo",
                                "Trung Tâm Trợ Giúp",
                            ].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-slate-400 hover:text-violet-400 transition-colors flex items-center"
                                    >
                                        <ChevronDown className="h-3 w-3 mr-2 rotate-[-90deg]" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Liên Hệ</h4>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex items-start">
                                <svg
                                    className="h-6 w-6 mr-3 text-violet-400 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-6 w-6 mr-3 text-violet-400 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span>0123 456 789</span>
                            </li>
                            <li className="flex items-start">
                                <svg
                                    className="h-6 w-6 mr-3 text-violet-400 flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>info@ptstore.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800/50 text-center text-slate-500 text-sm">
                    <p>© 2024 P&T Store. Tất cả các quyền được bảo lưu.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 