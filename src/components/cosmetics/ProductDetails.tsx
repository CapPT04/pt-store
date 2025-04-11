"use client";
import React, { useState, useEffect } from "react";
import {
    motion,
    AnimatePresence
} from "framer-motion";
import {
    Check,
    ChevronDown,
    Sparkles,
    Heart,
    Star,
    Leaf
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";

export type ProductDetailsProps = {
    product: {
        description: string;
        benefits: string[];
        ingredients: string[];
        howToUse: string[];
        customerReviews: Array<{
            id: number;
            name: string;
            avatar: string;
            rating: number;
            date: string;
            skinType: string;
            title?: string;
            comment: string;
            beforeImage?: string;
            afterImage?: string;
            likes: number;
        }>;
    };
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
    const [activeTab, setActiveTab] = useState("description");
    const [showIngredients, setShowIngredients] = useState(false);
    const [selectedSkinType, setSelectedSkinType] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [showReviewForm, setShowReviewForm] = useState(false);
    const reviewsPerPage = 3;

    // New review state
    const [newReview, setNewReview] = useState({
        rating: 5,
        title: "",
        comment: "",
        skinType: "Thường",
        name: "",
        email: ""
    });

    // Filter reviews by skin type
    const filteredReviews = selectedSkinType
        ? product.customerReviews.filter(
            (review) => review.skinType === selectedSkinType,
        )
        : product.customerReviews;

    // Calculate pagination
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = filteredReviews.slice(indexOfFirstReview, indexOfLastReview);
    const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

    // Reset to first page when filter changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedSkinType]);

    // Page navigation functions
    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
    };

    const goToPrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    // Handle review submission
    const handleReviewSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the review to your backend
        // For now, we'll just close the form and show a success message
        setShowReviewForm(false);
        // Reset form
        setNewReview({
            rating: 5,
            title: "",
            comment: "",
            skinType: "Thường",
            name: "",
            email: ""
        });
        // You could add some kind of notification here
    };

    return (
        <div className="mt-8">
            <Tabs
                defaultValue="description"
                className="w-full"
                onValueChange={setActiveTab}
            >
                <TabsList className="grid w-full grid-cols-4 bg-violet-50/60 backdrop-blur-sm rounded-xl p-1 mb-8 border border-violet-100/80">
                    <TabsTrigger
                        value="description"
                        className="rounded-lg data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-200/50"
                    >
                        Mô tả
                    </TabsTrigger>
                    <TabsTrigger
                        value="ingredients"
                        className="rounded-lg data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-200/50"
                    >
                        Thành phần
                    </TabsTrigger>
                    <TabsTrigger
                        value="how-to-use"
                        className="rounded-lg data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-200/50"
                    >
                        Hướng dẫn sử dụng
                    </TabsTrigger>
                    <TabsTrigger
                        value="reviews"
                        className="rounded-lg data-[state=active]:bg-violet-600 data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-violet-200/50"
                    >
                        Đánh giá ({product.customerReviews.length})
                    </TabsTrigger>
                </TabsList>

                <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
                    <TabsContent value="description">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Giới thiệu sản phẩm
                            </h2>
                            <p className="text-gray-600 mb-6">{product.description}</p>

                            <h3 className="text-xl font-semibold text-gray-800 mb-3">
                                Lợi ích chính
                            </h3>
                            <ul className="space-y-2 mb-6">
                                {product.benefits.map((benefit, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        className="flex items-start gap-2 text-gray-600"
                                    >
                                        <Check className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </motion.li>
                                ))}
                            </ul>

                        </motion.div>
                    </TabsContent>

                    <TabsContent value="ingredients">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Thành phần
                                </h2>
                                <Button
                                    variant="outline"
                                    onClick={() => setShowIngredients(!showIngredients)}
                                    className="flex items-center gap-1 text-sm"
                                >
                                    {showIngredients ? "Thu gọn" : "Xem đầy đủ"}
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform ${showIngredients ? "rotate-180" : ""}`}
                                    />
                                </Button>
                            </div>

                            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 mb-6">


                                <div className="space-y-4">
                                    <div>
                                        <h3 className="font-medium text-gray-800 mb-2">
                                            Thành phần nổi bật
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-lg p-4">
                                                <h4 className="font-medium text-violet-600 mb-1">
                                                    Chiết xuất hoa hồng hữu cơ
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Dưỡng ẩm sâu và làm dịu da kích ứng
                                                </p>
                                            </div>
                                            <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-lg p-4">
                                                <h4 className="font-medium text-violet-600 mb-1">
                                                    Hyaluronic Acid
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Giữ nước và tăng cường độ ẩm cho da
                                                </p>
                                            </div>
                                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-lg p-4">
                                                <h4 className="font-medium text-violet-600 mb-1">
                                                    Ceramide NP
                                                </h4>
                                                <p className="text-sm text-gray-600">
                                                    Tăng cường hàng rào bảo vệ da
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {showIngredients && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <h3 className="font-medium text-gray-800 mb-2 mt-4">
                                                    Danh sách đầy đủ
                                                </h3>
                                                <div className="bg-white/80 rounded-lg p-4 border border-gray-100">
                                                    <ul className="columns-1 md:columns-2 lg:columns-3 gap-6 text-sm text-gray-600">
                                                        {product.ingredients.map(
                                                            (ingredient, index) => (
                                                                <li
                                                                    key={index}
                                                                    className="mb-2 break-inside-avoid"
                                                                >
                                                                    {ingredient}
                                                                </li>
                                                            ),
                                                        )}
                                                    </ul>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                    Cam kết của chúng tôi
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    Tại P&T Cosmetics, chúng tôi cam kết sử dụng các thành
                                    phần an toàn, có nguồn gốc tự nhiên và thân thiện với
                                    môi trường. Sản phẩm của chúng tôi không chứa các chất
                                    độc hại và không thử nghiệm trên động vật.
                                </p>

                            </div>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="how-to-use">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                Hướng dẫn sử dụng
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                                {product.howToUse.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 relative"
                                    >
                                        <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-violet-600 text-white flex items-center justify-center font-bold shadow-md">
                                            {index + 1}
                                        </div>
                                        <p className="text-gray-700 mt-2">{step}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="bg-gradient-to-r from-pink-50 to-purple-100/50 rounded-xl p-6 border border-purple-100/50 mb-6">
                                <h3 className="flex items-center gap-2 text-lg font-semibold text-violet-600 mb-3">
                                    <Sparkles className="h-5 w-5" />
                                    Mẹo sử dụng tốt nhất
                                </h3>
                                <ul className="space-y-3 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Sử dụng serum trên da sạch và còn ẩm để tăng khả
                                            năng hấp thụ
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Kết hợp với kem dưỡng ẩm để khóa độ ẩm và dưỡng chất
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Sử dụng đều đặn sáng và tối để có kết quả tốt nhất
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Check className="h-5 w-5 text-violet-600 mt-0.5 flex-shrink-0" />
                                        <span>
                                            Bảo quản ở nơi khô ráo, tránh ánh nắng trực tiếp
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </TabsContent>

                    <TabsContent value="reviews">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
                                <h2 className="text-2xl font-bold text-gray-800">
                                    Đánh giá từ khách hàng
                                </h2>

                            </div>

                            <div className="space-y-6">
                                {currentReviews.length > 0 ? (
                                    currentReviews.map((review) => (
                                        <motion.div
                                            key={review.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-gray-100 shadow-sm"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
                                                    <Image
                                                        src={review.avatar}
                                                        alt={review.name}
                                                        width={48}
                                                        height={48}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>

                                                <div className="flex-1">
                                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                                        <h3 className="font-medium text-gray-800">
                                                            {review.name}
                                                        </h3>
                                                        <span className="text-xs text-gray-500">
                                                            •
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            {review.date}
                                                        </span>
                                                        <span className="text-xs text-gray-500">
                                                            •
                                                        </span>
                                                        <span className="px-2 py-0.5 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">
                                                            {review.skinType}
                                                        </span>
                                                    </div>

                                                    <div className="flex mb-2">
                                                        {[...Array(5)].map((_, i) => (
                                                            <Star
                                                                key={i}
                                                                className={`h-4 w-4 ${i < review.rating ? "text-violet-600 fill-violet-600" : "text-gray-300"}`}
                                                            />
                                                        ))}
                                                    </div>

                                                    {review.title && (
                                                        <h4 className="font-medium text-gray-800 mb-2">
                                                            {review.title}
                                                        </h4>
                                                    )}

                                                    <p className="text-gray-600 mb-4">
                                                        {review.comment}
                                                    </p>

                                                    {review.beforeImage && review.afterImage && (
                                                        <div className="mb-4">
                                                            <p className="text-sm font-medium text-gray-700 mb-2">
                                                                Hình ảnh trước và sau khi sử dụng:
                                                            </p>
                                                            <div className="grid grid-cols-2 gap-4">
                                                                <div className="relative">
                                                                    <div className="absolute top-2 left-2 px-2 py-1 bg-gray-800/70 text-white text-xs rounded">
                                                                        Trước
                                                                    </div>
                                                                    <Image
                                                                        src={review.beforeImage}
                                                                        alt="Trước khi sử dụng"
                                                                        width={200}
                                                                        height={200}
                                                                        className="w-full h-40 object-cover rounded-lg"
                                                                    />
                                                                </div>
                                                                <div className="relative">
                                                                    <div className="absolute top-2 left-2 px-2 py-1 bg-violet-600/70 text-white text-xs rounded">
                                                                        Sau
                                                                    </div>
                                                                    <Image
                                                                        src={review.afterImage}
                                                                        alt="Sau khi sử dụng"
                                                                        width={200}
                                                                        height={200}
                                                                        className="w-full h-40 object-cover rounded-lg"
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    <div className="flex items-center gap-4">
                                                        <button className="flex items-center gap-1 text-gray-500 hover:text-violet-600 text-sm">
                                                            <Heart className="h-4 w-4" />
                                                            <span>Hữu ích ({review.likes})</span>
                                                        </button>
                                                        <button className="text-gray-500 hover:text-violet-600 text-sm">
                                                            Báo cáo
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))
                                ) : (
                                    <div className="text-center py-10">
                                        <p className="text-gray-500">
                                            Không có đánh giá nào cho loại da đã chọn
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Pagination Controls */}
                            {filteredReviews.length > reviewsPerPage && (
                                <div className="mt-8 flex justify-center items-center space-x-2">
                                    <Button
                                        variant="outline"
                                        onClick={goToPrevPage}
                                        disabled={currentPage === 1}
                                        className="px-3 h-9 rounded-lg border border-gray-200"
                                    >
                                        <ChevronDown className="h-4 w-4 rotate-90" />
                                    </Button>

                                    <div className="flex space-x-1">
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                                            (page) => (
                                                <Button
                                                    key={page}
                                                    variant={page === currentPage ? "default" : "outline"}
                                                    onClick={() => goToPage(page)}
                                                    className={cn(
                                                        "w-9 h-9 rounded-lg",
                                                        page === currentPage
                                                            ? "bg-violet-600 text-white"
                                                            : "border border-gray-200 text-gray-600 hover:bg-violet-50"
                                                    )}
                                                >
                                                    {page}
                                                </Button>
                                            )
                                        )}
                                    </div>

                                    <Button
                                        variant="outline"
                                        onClick={goToNextPage}
                                        disabled={currentPage === totalPages}
                                        className="px-3 h-9 rounded-lg border border-gray-200"
                                    >
                                        <ChevronDown className="h-4 w-4 -rotate-90" />
                                    </Button>
                                </div>
                            )}

                            {/* Review Form */}
                            <AnimatePresence>
                                {showReviewForm && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-violet-100 shadow-lg"
                                    >
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-xl font-bold text-gray-800">Viết đánh giá của bạn</h3>
                                            <Button
                                                variant="outline"
                                                onClick={() => setShowReviewForm(false)}
                                                className="h-8 w-8 p-0 rounded-full"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
                                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                                </svg>
                                            </Button>
                                        </div>

                                        <form onSubmit={handleReviewSubmit} className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1">Đánh giá sao</label>
                                                <div className="flex space-x-1">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <button
                                                            key={star}
                                                            type="button"
                                                            onClick={() => setNewReview({ ...newReview, rating: star })}
                                                            className="focus:outline-none"
                                                        >
                                                            <Star
                                                                className={`h-6 w-6 ${star <= newReview.rating ? "text-violet-600 fill-violet-600" : "text-gray-300"}`}
                                                            />
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="review-name" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Tên của bạn
                                                    </label>
                                                    <input
                                                        id="review-name"
                                                        type="text"
                                                        value={newReview.name}
                                                        onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                                                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700 focus:border-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-40"
                                                        required
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="review-email" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Email
                                                    </label>
                                                    <input
                                                        id="review-email"
                                                        type="email"
                                                        value={newReview.email}
                                                        onChange={(e) => setNewReview({ ...newReview, email: e.target.value })}
                                                        className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700 focus:border-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-40"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="review-title" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Tiêu đề đánh giá
                                                </label>
                                                <input
                                                    id="review-title"
                                                    type="text"
                                                    value={newReview.title}
                                                    onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700 focus:border-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-40"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="review-type" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Loại da của bạn
                                                </label>
                                                <select
                                                    id="review-type"
                                                    value={newReview.skinType}
                                                    onChange={(e) => setNewReview({ ...newReview, skinType: e.target.value })}
                                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700 focus:border-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-40"
                                                >
                                                    <option value="Thường">Da thường</option>
                                                    <option value="Khô">Da khô</option>
                                                    <option value="Dầu">Da dầu</option>
                                                    <option value="Hỗn hợp">Da hỗn hợp</option>
                                                    <option value="Nhạy cảm">Da nhạy cảm</option>
                                                </select>
                                            </div>

                                            <div>
                                                <label htmlFor="review-content" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Nội dung đánh giá
                                                </label>
                                                <textarea
                                                    id="review-content"
                                                    rows={4}
                                                    value={newReview.comment}
                                                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                                                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-gray-700 focus:border-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-opacity-40"
                                                    required
                                                ></textarea>
                                            </div>

                                            <div className="flex justify-end space-x-2">
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    onClick={() => setShowReviewForm(false)}
                                                    className="px-4 border border-gray-200"
                                                >
                                                    Hủy
                                                </Button>
                                                <Button
                                                    type="submit"
                                                    className="px-4 bg-violet-600 text-white hover:bg-violet-700"
                                                >
                                                    Gửi đánh giá
                                                </Button>
                                            </div>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="mt-8 text-center">
                                <Button
                                    onClick={() => setShowReviewForm(true)}
                                    className="bg-violet-600 hover:bg-violet-700 text-white border-0 shadow-md shadow-violet-200/50 px-6 py-2 h-auto"
                                >
                                    Viết đánh giá
                                </Button>
                            </div>
                        </motion.div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    );
};

export default ProductDetails; 