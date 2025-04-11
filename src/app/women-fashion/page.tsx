'use client';
import React, { useState, useEffect, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import {
    ShoppingBag,
    Heart,
    Search,
    Filter,
    ChevronDown,
    Star,
    ShoppingCart,
    ArrowRight,
    ArrowLeft,
    X,
    Plus,
    Sparkles,
} from "lucide-react";

const WomenFashionPage = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [activeFilter, setActiveFilter] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [currentCollection, setCurrentCollection] = useState(0);
    const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [showQuickView, setShowQuickView] = useState<number | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCollection((prev) =>
                prev === fashionCollections.length - 1 ? 0 : prev + 1,
            );
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const fashionCollections = [
        {
            id: 1,
            name: "Bộ Sưu Tập Xuân Hè",
            description: "Tỏa sáng với những thiết kế nhẹ nhàng, thanh lịch",
            imageUrl:
                "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1200&q=80",
            accent: "from-pink-400 to-rose-500",
        },
        {
            id: 2,
            name: "Dạ Hội Sang Trọng",
            description: "Đẳng cấp và quyến rũ với các thiết kế dạ hội cao cấp",
            imageUrl:
                "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&q=80",
            accent: "from-violet-500 to-fuchsia-500",
        },
        {
            id: 3,
            name: "Phong Cách Đường Phố",
            description: "Năng động, cá tính với các thiết kế street style",
            imageUrl:
                "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80",
            accent: "from-blue-400 to-emerald-400",
        },
    ];

    const categories = [
        { id: "all", name: "Tất Cả" },
        { id: "dresses", name: "Đầm" },
        { id: "tops", name: "Áo" },
        { id: "bottoms", name: "Quần" },
        { id: "outerwear", name: "Áo Khoác" },
        { id: "accessories", name: "Phụ Kiện" },
    ];

    const filters = [
        {
            id: "size",
            name: "Kích Thước",
            options: ["XS", "S", "M", "L", "XL"],
        },
        {
            id: "color",
            name: "Màu Sắc",
            options: ["Đen", "Trắng", "Đỏ", "Xanh", "Hồng"],
            colors: ["#000000", "#ffffff", "#e11d48", "#3b82f6", "#ec4899"],
        },
        {
            id: "price",
            name: "Giá",
            options: ["Dưới 500k", "500k - 1tr", "1tr - 2tr", "Trên 2tr"],
        },
    ];

    const products = [
        {
            id: 1,
            name: "Đầm Xòe Dự Tiệc",
            price: "1.290.000₫",
            originalPrice: "1.890.000₫",
            discount: "-32%",
            imageUrl:
                "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
            category: "dresses",
            rating: 4.8,
            reviews: 124,
            isNew: true,
            colors: ["#000000", "#e11d48", "#3b82f6"],
            sizes: ["S", "M", "L"],
            isFavorite: false,
        },
        {
            id: 2,
            name: "Áo Sơ Mi Lụa Cao Cấp",
            price: "850.000₫",
            originalPrice: "1.050.000₫",
            discount: "-19%",
            imageUrl:
                "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1589810635657-232948472d98?w=800&q=80",
            category: "tops",
            rating: 4.8,
            reviews: 37,
            isNew: true,
            colors: ["#ffffff", "#ec4899", "#3b82f6"],
            sizes: ["XS", "S", "M", "L"],
            isFavorite: true,
        },
        {
            id: 3,
            name: "Quần Jeans Cao Cấp",
            price: "950.000₫",
            originalPrice: "1.250.000₫",
            discount: "-24%",
            imageUrl:
                "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&q=80",
            category: "bottoms",
            rating: 4.6,
            reviews: 48,
            isNew: false,
            colors: ["#000000", "#3b82f6"],
            sizes: ["S", "M", "L", "XL"],
            isFavorite: false,
        },
        {
            id: 4,
            name: "Áo Khoác Denim Oversized",
            price: "1.190.000₫",
            originalPrice: "1.590.000₫",
            discount: "-25%",
            imageUrl:
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&q=80",
            category: "outerwear",
            rating: 4.9,
            reviews: 76,
            isNew: true,
            colors: ["#3b82f6", "#000000"],
            sizes: ["M", "L", "XL"],
            isFavorite: false,
        },
        {
            id: 5,
            name: "Túi Xách Mini Đeo Chéo",
            price: "790.000₫",
            originalPrice: "990.000₫",
            discount: "-20%",
            imageUrl:
                "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
            category: "accessories",
            rating: 4.7,
            reviews: 42,
            isNew: false,
            colors: ["#000000", "#ffffff", "#e11d48"],
            sizes: [],
            isFavorite: true,
        },
        {
            id: 6,
            name: "Đầm Maxi Hoa Nhí",
            price: "1.150.000₫",
            originalPrice: "1.450.000₫",
            discount: "-21%",
            imageUrl:
                "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1495385794356-15371f348c31?w=800&q=80",
            category: "dresses",
            rating: 4.8,
            reviews: 53,
            isNew: false,
            colors: ["#ec4899", "#3b82f6"],
            sizes: ["S", "M", "L"],
            isFavorite: false,
        },
        {
            id: 7,
            name: "Áo Thun Graphic",
            price: "450.000₫",
            originalPrice: "590.000₫",
            discount: "-24%",
            imageUrl:
                "https://images.unsplash.com/photo-1503342394128-c104d54dba01?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1554568218-0f1715e72254?w=800&q=80",
            category: "tops",
            rating: 4.5,
            reviews: 38,
            isNew: true,
            colors: ["#ffffff", "#000000", "#e11d48"],
            sizes: ["XS", "S", "M", "L", "XL"],
            isFavorite: false,
        },
        {
            id: 8,
            name: "Quần Culottes Linen",
            price: "750.000₫",
            originalPrice: "950.000₫",
            discount: "-21%",
            imageUrl:
                "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&q=80",
            hoverImageUrl:
                "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=800&q=80",
            category: "bottoms",
            rating: 4.7,
            reviews: 29,
            isNew: false,
            colors: ["#ffffff", "#000000"],
            sizes: ["S", "M", "L"],
            isFavorite: false,
        },
    ];

    const filteredProducts =
        activeCategory === "all"
            ? products
            : products.filter((product) => product.category === activeCategory);

    const toggleFavorite = (productId: number) => {
        // In a real app, this would update state or call an API
        console.log(`Toggle favorite for product ${productId}`);
    };

    const handleQuickView = (productId: number) => {
        setShowQuickView(productId === showQuickView ? null : productId);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-slate-50 to-violet-50">
            {/* Use the Navbar component instead of the inline header */}
            <Navbar />

            {/* Fashion Collections Slider */}
            <section className="relative overflow-hidden">
                <div className="h-[500px] relative overflow-hidden">
                    {fashionCollections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: currentCollection === index ? 1 : 0,
                                scale: currentCollection === index ? 1 : 1.1,
                            }}
                            transition={{ duration: 1 }}
                            className={`absolute inset-0 w-full h-full ${currentCollection === index ? "z-10" : "z-0"}`}
                        >
                            <div className="absolute inset-0 bg-black/30 mix-blend-multiply z-10"></div>
                            <motion.img
                                src={collection.imageUrl}
                                alt={collection.name}
                                className="w-full h-full object-cover"
                                initial={{ scale: 1.1 }}
                                animate={{
                                    scale: currentCollection === index ? 1.05 : 1.1,
                                }}
                                transition={{ duration: 6 }}
                            />
                            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{
                                        opacity: currentCollection === index ? 1 : 0,
                                        y: currentCollection === index ? 0 : 30,
                                    }}
                                    transition={{ duration: 0.8, delay: 0.2 }}
                                    className="space-y-6 max-w-3xl"
                                >
                                    <span
                                        className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${collection.accent} text-white text-sm font-medium mb-4 backdrop-blur-sm shadow-lg`}
                                    >
                                        Bộ Sưu Tập Mới
                                    </span>
                                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
                                        {collection.name}
                                    </h2>
                                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
                                        {collection.description}
                                    </p>
                                    <Button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-full py-3 px-8 text-lg font-medium transition-all duration-300 shadow-lg">
                                        Khám Phá Ngay
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Collection Indicators */}
                <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center gap-3">
                    {fashionCollections.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentCollection(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentCollection ? "bg-white w-10" : "bg-white/50 w-2 hover:bg-white/70"}`}
                            aria-label={`Go to collection ${index + 1}`}
                        />
                    ))}
                </div>
            </section>

            {/* Category and Filter Section */}
            <section className="py-8 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category.id ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md" : "bg-white/80 text-slate-700 hover:bg-violet-100/50 border border-violet-100/50"}`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() => setActiveFilter(!activeFilter)}
                            className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium bg-white border border-violet-100 text-slate-700 hover:bg-violet-50 transition-all duration-300"
                        >
                            <Filter className="h-4 w-4" />
                            Bộ Lọc
                            <ChevronDown
                                className={`h-4 w-4 transition-transform duration-300 ${activeFilter ? "rotate-180" : ""}`}
                            />
                        </button>
                    </div>

                    {/* Filter Panel */}
                    <AnimatePresence>
                        {activeFilter && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-6 pb-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {filters.map((filter) => (
                                        <div key={filter.id} className="space-y-3">
                                            <h3 className="font-medium text-slate-800">
                                                {filter.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {filter.id === "color"
                                                    ? filter.options.map((option, i) => (
                                                        <button
                                                            key={option}
                                                            onClick={() =>
                                                                setSelectedColor(
                                                                    selectedColor === option ? null : option,
                                                                )
                                                            }
                                                            className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${selectedColor === option ? "ring-2 ring-offset-2 ring-violet-500 scale-110" : "ring-0 scale-100"}`}
                                                            style={{ backgroundColor: filter.colors?.[i] }}
                                                            title={option}
                                                        />
                                                    ))
                                                    : filter.options.map((option) => (
                                                        <button
                                                            key={option}
                                                            onClick={() =>
                                                                filter.id === "size"
                                                                    ? setSelectedSize(
                                                                        selectedSize === option ? null : option,
                                                                    )
                                                                    : null
                                                            }
                                                            className={`px-3 py-1 rounded-md text-sm transition-all duration-200 ${filter.id === "size" && selectedSize === option ? "bg-violet-600 text-white" : "bg-white border border-slate-200 text-slate-700 hover:border-violet-300"}`}
                                                        >
                                                            {option}
                                                        </button>
                                                    ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex justify-end pt-4 pb-2">
                                    <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-full px-6 py-2 text-sm transition-all duration-300 shadow-md">
                                        Áp Dụng Bộ Lọc
                                    </Button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="mb-8 flex justify-between items-center">
                        <h2 className="text-2xl font-bold text-slate-800">
                            {activeCategory === "all"
                                ? "Tất Cả Sản Phẩm"
                                : categories.find((c) => c.id === activeCategory)?.name ||
                                "Sản Phẩm"}
                        </h2>
                        <div className="text-sm text-slate-500">
                            Hiển thị {filteredProducts.length} sản phẩm
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((product) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <div className="relative overflow-hidden aspect-[3/4]">
                                    <img
                                        src={
                                            hoveredProduct === product.id
                                                ? product.hoverImageUrl
                                                : product.imageUrl
                                        }
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105"
                                    />

                                    {/* Product badges */}
                                    <div className="absolute top-3 left-3 right-3 flex justify-between">
                                        <div className="flex gap-2">
                                            {product.discount && (
                                                <span className="bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                                                    {product.discount}
                                                </span>
                                            )}
                                            {product.isNew && (
                                                <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                                                    Mới
                                                </span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => toggleFavorite(product.id)}
                                            className={`p-1.5 rounded-full ${product.isFavorite ? "bg-rose-500 text-white" : "bg-white/80 text-slate-700 hover:text-rose-500"} backdrop-blur-sm shadow-md transition-all duration-300`}
                                        >
                                            <Heart
                                                className={`h-4 w-4 ${product.isFavorite ? "fill-white" : ""}`}
                                            />
                                        </button>
                                    </div>

                                    {/* Quick actions */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex justify-between items-center">
                                            <Button
                                                onClick={() => handleQuickView(product.id)}
                                                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full py-1.5 px-4 text-sm transition-all duration-300"
                                            >
                                                Xem Nhanh
                                            </Button>
                                            <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30 rounded-full p-2 transition-all duration-300">
                                                <ShoppingBag className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4">
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-violet-50 text-violet-600">
                                            {categories.find((c) => c.id === product.category)?.name}
                                        </span>
                                        <div className="flex items-center">
                                            <Star className="h-3 w-3 text-pink-400 fill-pink-400" />
                                            <span className="text-xs text-slate-600 ml-1">
                                                {product.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <h3 className="font-medium text-slate-800 mb-1 group-hover:text-violet-600 transition-colors duration-300">
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
                                    </div>

                                    {/* Available colors */}
                                    {product.colors && product.colors.length > 0 && (
                                        <div className="mt-3 flex items-center gap-1">
                                            {product.colors.map((color, i) => (
                                                <div
                                                    key={i}
                                                    className="w-4 h-4 rounded-full border border-slate-200"
                                                    style={{ backgroundColor: color }}
                                                />
                                            ))}
                                            {product.colors.length > 3 && (
                                                <div className="text-xs text-slate-500">
                                                    +{product.colors.length - 3}
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Available sizes */}
                                    {product.sizes && product.sizes.length > 0 && (
                                        <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                                            <span>Kích thước:</span>
                                            {product.sizes.map((size, i) => (
                                                <React.Fragment key={size}>
                                                    {i > 0 && (
                                                        <span className="mx-0.5">/</span>
                                                    )}
                                                    <span className="font-medium">
                                                        {size}
                                                    </span>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Quick View Modal */}
                                <AnimatePresence>
                                    {showQuickView === product.id && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
                                            onClick={() => setShowQuickView(null)}
                                        >
                                            <motion.div
                                                initial={{ scale: 0.9, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.9, opacity: 0 }}
                                                transition={{
                                                    type: "spring",
                                                    damping: 25,
                                                    stiffness: 300,
                                                }}
                                                className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <div className="relative">
                                                    <button
                                                        onClick={() => setShowQuickView(null)}
                                                        className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-slate-700 hover:text-rose-500 z-10 shadow-md"
                                                    >
                                                        <X className="h-5 w-5" />
                                                    </button>

                                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                                        <div className="aspect-square overflow-hidden relative">
                                                            <img
                                                                src={product.hoverImageUrl || product.imageUrl}
                                                                alt={product.name}
                                                                className="w-full h-full object-cover"
                                                            />
                                                            {product.discount && (
                                                                <span className="absolute top-4 left-4 bg-rose-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-md">
                                                                    {product.discount}
                                                                </span>
                                                            )}
                                                        </div>

                                                        <div className="p-6 flex flex-col">
                                                            <h2 className="text-2xl font-bold text-slate-800 mb-2">
                                                                {product.name}
                                                            </h2>
                                                            <div className="flex items-center gap-2 mb-4">
                                                                <div className="flex">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star
                                                                            key={i}
                                                                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-pink-400 fill-pink-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-600">
                                                                    ({product.reviews} đánh giá)
                                                                </span>
                                                            </div>

                                                            <div className="mb-6">
                                                                <span className="text-2xl font-bold text-violet-600 mr-3">
                                                                    {product.price}
                                                                </span>
                                                                {product.originalPrice && (
                                                                    <span className="text-lg text-slate-500 line-through">
                                                                        {product.originalPrice}
                                                                    </span>
                                                                )}
                                                            </div>

                                                            <div className="space-y-6 flex-grow">
                                                                <div>
                                                                    <h3 className="text-sm font-medium text-slate-700 mb-2">
                                                                        Màu Sắc
                                                                    </h3>
                                                                    <div className="flex gap-2">
                                                                        {product.colors?.map((color, i) => (
                                                                            <button
                                                                                key={i}
                                                                                className="w-8 h-8 rounded-full border-2 border-white shadow-md transition-all duration-200 hover:scale-110"
                                                                                style={{ backgroundColor: color }}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>

                                                                {product.sizes && product.sizes.length > 0 && (
                                                                    <div>
                                                                        <h3 className="text-sm font-medium text-slate-700 mb-2">
                                                                            Kích Thước
                                                                        </h3>
                                                                        <div className="flex gap-2">
                                                                            {product.sizes.map((size) => (
                                                                                <button
                                                                                    key={size}
                                                                                    className="w-10 h-10 rounded-md flex items-center justify-center text-sm border border-slate-200 hover:border-violet-500 transition-all duration-200"
                                                                                >
                                                                                    {size}
                                                                                </button>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                <div>
                                                                    <h3 className="text-sm font-medium text-slate-700 mb-2">
                                                                        Số Lượng
                                                                    </h3>
                                                                    <div className="flex items-center border border-slate-200 rounded-md w-32">
                                                                        <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-violet-600">
                                                                            -
                                                                        </button>
                                                                        <input
                                                                            type="number"
                                                                            min="1"
                                                                            value="1"
                                                                            className="w-12 h-10 text-center border-x border-slate-200 focus:outline-none"
                                                                        />
                                                                        <button className="w-10 h-10 flex items-center justify-center text-slate-500 hover:text-violet-600">
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>

                                                                <p className="text-sm text-slate-600">
                                                                    Sản phẩm thời trang cao cấp, thiết kế hiện đại
                                                                    và thanh lịch. Chất liệu vải cao cấp, thoáng
                                                                    mát và bền đẹp theo thời gian.
                                                                </p>
                                                            </div>

                                                            <div className="flex gap-4 mt-6">
                                                                <Button className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-full py-3 transition-all duration-300 shadow-md">
                                                                    Thêm Vào Giỏ
                                                                </Button>
                                                                <Button className="bg-white border border-violet-200 text-violet-600 hover:bg-violet-50 rounded-full p-3 transition-all duration-300">
                                                                    <Heart className="h-5 w-5" />
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="mt-12 text-center">
                        <Button className="bg-white border border-violet-200  hover:bg-violet-50 rounded-full py-3 px-8 transition-all duration-300 shadow-sm">
                            Xem Thêm Sản Phẩm
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WomenFashionPage;
