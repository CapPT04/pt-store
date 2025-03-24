import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
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

const HomePage = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    // In a real app, you would clear auth tokens/state here
    navigate("/");
  };

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
      position: "left",
    },
    {
      id: 2,
      title: "Giảm Giá Lớn",
      subtitle: "Lên đến 50%",
      description: "Ưu đãi đặc biệt cho các sản phẩm mỹ phẩm cao cấp",
      buttonText: "Xem Ngay",
      imageUrl:
        "https://images.unsplash.com/photo-1522335579687-9f5f8a9206b8?w=1200&q=80",
      position: "right",
    },
    {
      id: 3,
      title: "Phong Cách Riêng",
      subtitle: "Bộ Sưu Tập Giới Hạn",
      description: "Tỏa sáng với những thiết kế độc đáo, số lượng có hạn",
      buttonText: "Khám Phá",
      imageUrl:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=80",
      position: "left",
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

  const filteredProducts =
    activeCategory === "all"
      ? featuredProducts
      : featuredProducts.filter((product) =>
          product.category.toLowerCase().includes(activeCategory.toLowerCase()),
        );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-100 via-teal-50 to-indigo-100">
      {/* Header */}
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
                        {[
                          "Trang Chủ",
                          "Thời Trang Nữ",
                          "Thời Trang Nam",
                          "Mỹ Phẩm",
                          "Phụ Kiện",
                          "Khuyến Mãi",
                        ].map((item, index) => (
                          <a
                            key={index}
                            href="#"
                            className={`block py-2 px-4 rounded-lg ${index === 0 ? "bg-violet-50 text-violet-600" : "text-slate-700 hover:bg-violet-50/30"} transition-colors`}
                          >
                            {item}
                          </a>
                        ))}
                      </nav>
                      <div className="mt-8 pt-6 border-t border-slate-100">
                        <Button
                          onClick={handleLogout}
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-lg py-3 transition-all duration-300"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>Đăng xuất</span>
                        </Button>
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
            <nav className="hidden lg:flex space-x-1">
              {[
                "Trang Chủ",
                "Thời Trang Nữ",
                "Thời Trang Nam",
                "Mỹ Phẩm",
                "Phụ Kiện",
                "Khuyến Mãi",
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className={`px-4 py-2 rounded-full text-sm font-medium ${index === 0 ? "bg-violet-50 text-violet-600" : "text-slate-700 hover:bg-violet-50/30"} transition-all duration-200`}
                >
                  {item}
                </a>
              ))}
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
              <Button
                onClick={handleLogout}
                className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                <LogOut className="h-4 w-4" />
                <span>Đăng xuất</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden py-8 bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-100 to-rose-100">
        <div className="container mx-auto px-4">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/30">
            {banners.map((banner, index) => (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: currentSlide === index ? 1 : 0,
                  scale: currentSlide === index ? 1 : 1.05,
                }}
                transition={{ duration: 0.8 }}
                className={`absolute inset-0 w-full h-full ${currentSlide === index ? "z-10" : "z-0"}`}
              >
                <img
                  src={banner.imageUrl}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16 ${banner.position === "right" ? "items-end text-right" : "items-start text-left"}`}
                >
                  <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-600/90 to-fuchsia-500/90 text-white text-sm font-medium mb-4 backdrop-blur-sm shadow-lg"
                  >
                    {banner.subtitle}
                  </motion.span>
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                  >
                    {banner.title}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-gray-200 mb-6 max-w-md text-lg"
                  >
                    {banner.description}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentSlide === index ? 1 : 0,
                      y: currentSlide === index ? 0 : 20,
                    }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20">
                      {banner.buttonText}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Indicators */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
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

      {/* Categories */}
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

      {/* Featured Products */}
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
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md" : "bg-white/80 text-slate-700 hover:bg-violet-100/50 border border-violet-100/50"}`}
              >
                {category === "all" ? "Tất Cả" : category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
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

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-white/20">
              Xem Tất Cả Sản Phẩm
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100 via-violet-50 to-sky-100">
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
                          className={`h-4 w-4 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-slate-300"}`}
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

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?w=1200&q=80')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-4"
            >
              Đăng Ký Nhận Thông Tin
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-white/80 mb-8"
            >
              Đăng ký để nhận thông tin về sản phẩm mới, khuyến mãi đặc biệt và
              các sự kiện độc quyền
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-grow px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-slate-800 shadow-lg backdrop-blur-sm bg-white/90 border border-white/30"
              />
              <Button className="bg-white text-violet-600 hover:bg-violet-50 font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-white/30">
                Đăng Ký
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default HomePage;
