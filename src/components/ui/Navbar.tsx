'use client';
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    ShoppingBag,
    Heart,
    Search,
    Menu,
    User,
    ShoppingCart,
    LogOut,
    X,
    ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavbarProps {
    hideLoginButton?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ hideLoginButton = false }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLogout = () => {
        // In a real app, you would clear auth tokens/state here
        router.push("/");
    };

    // Function to check if a link is active
    const isActive = (path: string) => {
        if (path === "/" && pathname === "/") return true;
        if (path !== "/" && pathname.startsWith(path)) return true;
        return false;
    };

    // Function to get the appropriate class for a navigation link
    const getNavLinkClass = (path: string) => {
        const baseClass = "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200";
        return isActive(path)
            ? `${baseClass} bg-violet-50 text-violet-600`
            : `${baseClass} text-slate-700 hover:bg-violet-50/30`;
    };

    // Function to get the appropriate class for a mobile navigation link
    const getMobileNavLinkClass = (path: string) => {
        const baseClass = "block py-2 px-4 rounded-lg transition-colors";
        return isActive(path)
            ? `${baseClass} bg-violet-50 text-violet-600`
            : `${baseClass} text-slate-700 hover:bg-violet-50/30`;
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "py-2 bg-white/90 shadow-lg" : "py-4 bg-white/70"} backdrop-blur-md border-b border-white/20`}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <button
                            className="mr-4 lg:hidden text-slate-700 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Menu className="h-6 w-6" />
                        </button>
                        <Link href="/">
                            <h1
                                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-500 to-amber-500 font-['Pacifico',_cursive] tracking-wide drop-shadow-[0_2px_2px_rgba(139,92,246,0.3)] transform hover:scale-105 transition-transform duration-300"
                                style={{
                                    textShadow:
                                        "0 0 5px rgba(139,92,246,0.3), 0 0 10px rgba(236,72,153,0.2)",
                                    WebkitTextStroke: "0.5px rgba(255,255,255,0.3)",
                                }}
                            >
                                P&T Store
                            </h1>
                        </Link>
                    </div>

                    {/* Mobile Menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                className="fixed inset-0 z-50 bg-white w-80 h-full shadow-2xl lg:hidden"
                            >
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-4 border-b">
                                        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-amber-500">
                                            Menu
                                        </h2>
                                        <button
                                            onClick={() => setIsMenuOpen(false)}
                                            className="p-2 text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-4">
                                        <nav className="space-y-4">
                                            <Link
                                                href="/"
                                                className={getMobileNavLinkClass("/")}
                                            >
                                                Trang Chủ
                                            </Link>
                                            <Link
                                                href="/women-fashion"
                                                className={getMobileNavLinkClass("/women-fashion")}
                                            >
                                                Thời Trang Nữ
                                            </Link>
                                            <Link
                                                href="/pages/MenFashionPage"
                                                className={getMobileNavLinkClass("/pages/MenFashionPage")}
                                            >
                                                Thời Trang Nam
                                            </Link>
                                            <Link
                                                href="/pages/CosmeticsPage"
                                                className={getMobileNavLinkClass("/pages/CosmeticsPage")}
                                            >
                                                Mỹ Phẩm
                                            </Link>
                                            <Link
                                                href="/pages/AccessoriesPage"
                                                className={getMobileNavLinkClass("/pages/AccessoriesPage")}
                                            >
                                                Phụ Kiện
                                            </Link>
                                            <Link
                                                href="/pages/PromotionsPage"
                                                className={getMobileNavLinkClass("/pages/PromotionsPage")}
                                            >
                                                Khuyến Mãi
                                            </Link>
                                        </nav>
                                        <div className="mt-8 pt-6 border-t border-slate-100">
                                            {!hideLoginButton ? (
                                                <Link
                                                    href="/login"
                                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-lg py-3 transition-all duration-300"
                                                >
                                                    <User className="h-4 w-4" />
                                                    <span>Đăng Nhập</span>
                                                </Link>
                                            ) : (
                                                <Button
                                                    onClick={handleLogout}
                                                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-lg py-3 transition-all duration-300"
                                                >
                                                    <LogOut className="h-4 w-4" />
                                                    <span>Đăng xuất</span>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Overlay for mobile menu */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        )}
                    </AnimatePresence>

                    {/* Navigation - Desktop */}
                    <nav className="hidden lg:flex">
                        <Link
                            href="/"
                            className={getNavLinkClass("/")}
                        >
                            Trang Chủ
                        </Link>
                        <Link
                            href="/women-fashion"
                            className={getNavLinkClass("/women-fashion")}
                        >
                            Thời Trang Nữ
                        </Link>
                        <Link
                            href="/pages/MenFashionPage"
                            className={getNavLinkClass("/pages/MenFashionPage")}
                        >
                            Thời Trang Nam
                        </Link>
                        <Link
                            href="/pages/CosmeticsPage"
                            className={getNavLinkClass("/pages/CosmeticsPage")}
                        >
                            Mỹ Phẩm
                        </Link>
                        <Link
                            href="/pages/AccessoriesPage"
                            className={getNavLinkClass("/pages/AccessoriesPage")}
                        >
                            Phụ Kiện
                        </Link>
                        <Link
                            href="/pages/PromotionsPage"
                            className={getNavLinkClass("/pages/PromotionsPage")}
                        >
                            Khuyến Mãi
                        </Link>
                    </nav>

                    {/* Right Actions */}
                    <div className="flex items-center space-x-3">
                        <div className="relative hidden md:block">
                            <input
                                type="text"
                                placeholder="Tìm kiếm sản phẩm..."
                                className="w-64 pl-3 pr-10 py-2 border border-violet-200 rounded-full focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-200 bg-white/70 backdrop-blur-sm"
                            />
                            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-violet-500 transition-colors">
                                <Search className="h-5 w-5" />
                            </button>
                        </div>
                        <button className="p-2 text-slate-700 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all duration-200">
                            <User className="h-5 w-5" />
                        </button>
                        <button className="p-2 text-slate-700 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all duration-200">
                            <Heart className="h-5 w-5" />
                        </button>
                        <button className="relative p-2 text-slate-700 hover:text-violet-600 hover:bg-violet-50 rounded-full transition-all duration-200">
                            <ShoppingCart className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center shadow-md">
                                3
                            </span>
                        </button>
                        {!hideLoginButton ? (
                            <Link
                                href="/login"
                                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <User className="h-4 w-4" />
                                <span>Đăng Nhập</span>
                            </Link>
                        ) : (
                            <Button
                                onClick={handleLogout}
                                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 shadow-md"
                            >
                                <LogOut className="h-4 w-4" />
                                <span>Đăng xuất</span>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar; 