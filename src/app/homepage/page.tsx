'use client';
import React, { useState } from "react";
import { motion } from "framer-motion";
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
  Gift,
  Truck,
  Clock,
  ShieldCheck,
  Star,
  Sparkles,
  Zap,
  Percent,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Banner from "@/components/ui/Banner";
import Features from "@/components/ui/Features";
import Categories from "@/components/ui/Categories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import Testimonials from "@/components/ui/Testimonials";
import Footer from "@/components/ui/Footer";
import MainLayout from "@/components/layout/MainLayout";

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const router = useRouter();

  const featuredProducts = [
    {
      id: 1,
      name: "Váy Đầm Dạ Hội Cao Cấp",
      price: "1.290.000₫",
      originalPrice: "1.890.000₫",
      discount: "-32%",
      imageUrl:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
      category: "Thời trang",
      rating: 4.8,
      reviews: 124,
      isNew: true,
    },
    {
      id: 2,
      name: "Phấn Nước Cushion Cao Cấp",
      price: "450.000₫",
      originalPrice: "650.000₫",
      discount: "-30%",
      imageUrl:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      category: "Mỹ phẩm",
      rating: 4.9,
      reviews: 89,
      isNew: true,
    },
    {
      id: 3,
      name: "Bộ Chăm Sóc Da Organic",
      price: "890.000₫",
      originalPrice: "1.190.000₫",
      discount: "-25%",
      imageUrl:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      category: "Mỹ phẩm",
      rating: 4.7,
      reviews: 56,
      isNew: false,
    },
    {
      id: 4,
      name: "Túi Xách Thời Trang",
      price: "790.000₫",
      originalPrice: "990.000₫",
      discount: "-20%",
      imageUrl:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
      category: "Phụ kiện",
      rating: 4.6,
      reviews: 42,
      isNew: false,
    },
    {
      id: 5,
      name: "Áo Sơ Mi Lụa Cao Cấp",
      price: "850.000₫",
      originalPrice: "1.050.000₫",
      discount: "-19%",
      imageUrl:
        "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80",
      category: "Thời trang",
      rating: 4.8,
      reviews: 37,
      isNew: true,
    },
    {
      id: 6,
      name: "Son Môi Dưỡng Ẩm",
      price: "320.000₫",
      originalPrice: "420.000₫",
      discount: "-24%",
      imageUrl:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
      category: "Mỹ phẩm",
      rating: 4.9,
      reviews: 112,
      isNew: false,
    },
    {
      id: 7,
      name: "Đồng Hồ Thời Trang Nữ",
      price: "1.590.000₫",
      originalPrice: "1.990.000₫",
      discount: "-20%",
      imageUrl:
        "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347?w=800&q=80",
      category: "Phụ kiện",
      rating: 4.7,
      reviews: 64,
      isNew: true,
    },
    {
      id: 8,
      name: "Quần Jeans Cao Cấp",
      price: "950.000₫",
      originalPrice: "1.250.000₫",
      discount: "-24%",
      imageUrl:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      category: "Thời trang",
      rating: 4.6,
      reviews: 48,
      isNew: false,
    }, {
      id: 9,
      name: "Quần Jeans Cao Cấp",
      price: "950.000₫",
      originalPrice: "1.250.000₫",
      discount: "-24%",
      imageUrl:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      category: "Thời trang",
      rating: 4.6,
      reviews: 48,
      isNew: false,
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Thời Trang Nữ",
      imageUrl:
        "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&q=80",
      count: "250+ sản phẩm",
      icon: <Sparkles className="h-5 w-5" />,
    },
    {
      id: 2,
      name: "Mỹ Phẩm",
      imageUrl:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
      count: "180+ sản phẩm",
      icon: <Star className="h-5 w-5" />,
    },
    {
      id: 3,
      name: "Phụ Kiện",
      imageUrl:
        "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80",
      count: "120+ sản phẩm",
      icon: <Zap className="h-5 w-5" />,
    },
    {
      id: 4,
      name: "Thời Trang Nam",
      imageUrl:
        "https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=800&q=80",
      count: "150+ sản phẩm",
      icon: <Percent className="h-5 w-5" />,
    },
  ];

  const banners = [
    {
      id: 1,
      title: "Bộ Sưu Tập Mới",
      subtitle: "Xuân - Hè 2024",
      description:
        "Khám phá những thiết kế mới nhất với phong cách trẻ trung và hiện đại",
      buttonText: "Mua Ngay",
      imageUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=80",
      position: "left" as const,
    },
    {
      id: 2,
      title: "Giảm Giá Lớn",
      subtitle: "Lên đến 50%",
      description: "Ưu đãi đặc biệt cho các sản phẩm mỹ phẩm cao cấp",
      buttonText: "Xem Ngay",
      imageUrl:
        "https://images.unsplash.com/photo-1522335579687-9f5f8a9206b8?w=1200&q=80",
      position: "right" as const,
    },
    {
      id: 3,
      title: "Phong Cách Riêng",
      subtitle: "Bộ Sưu Tập Giới Hạn",
      description: "Tỏa sáng với những thiết kế độc đáo, số lượng có hạn",
      buttonText: "Khám Phá",
      imageUrl:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
      position: "left" as const,
    },
  ];

  const features = [
    {
      id: 1,
      title: "Miễn Phí Vận Chuyển",
      description: "Cho đơn hàng từ 500.000₫",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      id: 2,
      title: "Đổi Trả 30 Ngày",
      description: "Dễ dàng và nhanh chóng",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      id: 3,
      title: "Thanh Toán An Toàn",
      description: "Nhiều phương thức thanh toán",
      icon: <ShieldCheck className="h-6 w-6" />,
    },
    {
      id: 4,
      title: "Quà Tặng Hấp Dẫn",
      description: "Cho thành viên VIP",
      icon: <Gift className="h-6 w-6" />,
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Thị Minh",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
      text: "Tôi rất hài lòng với chất lượng sản phẩm và dịch vụ tại P&T Store. Đặc biệt là bộ sưu tập mới rất phù hợp với phong cách của tôi.",
      rating: 5,
    },
    {
      id: 2,
      name: "Trần Văn Hùng",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      text: "Giao hàng nhanh, đóng gói cẩn thận. Sản phẩm đúng như mô tả và chất lượng vượt mong đợi. Chắc chắn sẽ quay lại mua hàng.",
      rating: 5,
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      text: "Mỹ phẩm organic tại đây thực sự làm thay đổi làn da của tôi. Nhân viên tư vấn rất nhiệt tình và chuyên nghiệp.",
      rating: 4,
    },
  ];

  return (
    <MainLayout>
      {/* Hero Banner */}
      <Banner banners={banners} />

      {/* Features */}
      <Features features={features} />

      {/* Categories */}
      <Categories categories={categories} />

      {/* Featured Products */}
      <FeaturedProducts
        products={featuredProducts}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Testimonials */}
      <Testimonials testimonials={testimonials} />
    </MainLayout>
  );
};

export default HomePage;
