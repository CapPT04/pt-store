"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import {
  Search,
  Filter,
  ChevronDown,
  Star,
  Heart,
  ShoppingBag,
  Sparkles,
  Droplet,
  Leaf,
  Shield,
  X,
  Check,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CosmeticsPage = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedSkinTypes, setSelectedSkinTypes] = useState<string[]>([]);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("popular");

  // Categories
  const categories = [
    { id: "all", name: "Tất Cả" },
    { id: "skincare", name: "Chăm Sóc Da" },
    { id: "makeup", name: "Trang Điểm" },
    { id: "cleansers", name: "Làm Sạch" },
    { id: "masks", name: "Mặt Nạ" },
    { id: "suncare", name: "Chống Nắng" },
  ];

  // Filter options
  const brands = [
    "P&T Cosmetics",
    "Innisfree",
    "The Ordinary",
    "La Roche-Posay",
    "Laneige",
    "Sulwhasoo",
  ];

  const skinTypes = [
    "Da khô",
    "Da dầu",
    "Da hỗn hợp",
    "Da nhạy cảm",
    "Mọi loại da",
  ];

  const features = [
    "Organic",
    "Không cồn",
    "Không paraben",
    "Thuần chay",
    "Không hương liệu",
  ];

  // Products data
  const products = [
    {
      id: 1,
      name: "Serum Dưỡng Ẩm Chuyên Sâu Hoa Hồng",
      brand: "P&T Cosmetics",
      price: 890000,
      formattedPrice: "890.000₫",
      originalPrice: "1.190.000₫",
      discount: "-25%",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
      rating: 4.8,
      reviews: 124,
      category: "skincare",
      skinTypes: ["Da khô", "Da nhạy cảm", "Mọi loại da"],
      features: ["Organic", "Không paraben"],
      isNew: true,
      isBestseller: true,
    },
    {
      id: 2,
      name: "Kem Dưỡng Ẩm Ban Đêm",
      brand: "Laneige",
      price: 750000,
      formattedPrice: "750.000₫",
      originalPrice: "950.000₫",
      discount: "-21%",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      rating: 4.7,
      reviews: 98,
      category: "skincare",
      skinTypes: ["Da khô", "Da hỗn hợp"],
      features: ["Không cồn", "Không paraben"],
      isNew: false,
      isBestseller: true,
    },
    {
      id: 3,
      name: "Sữa Rửa Mặt Tạo Bọt",
      brand: "Innisfree",
      price: 450000,
      formattedPrice: "450.000₫",
      originalPrice: "550.000₫",
      discount: "-18%",
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80",
      rating: 4.5,
      reviews: 76,
      category: "cleansers",
      skinTypes: ["Da dầu", "Da hỗn hợp", "Mọi loại da"],
      features: ["Không paraben", "Không hương liệu"],
      isNew: false,
      isBestseller: false,
    },
    {
      id: 4,
      name: "Mặt Nạ Dưỡng Ẩm Ngủ Qua Đêm",
      brand: "Laneige",
      price: 290000,
      formattedPrice: "290.000₫",
      originalPrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
      rating: 4.9,
      reviews: 152,
      category: "masks",
      skinTypes: ["Da khô", "Da nhạy cảm"],
      features: ["Không cồn", "Không paraben"],
      isNew: true,
      isBestseller: false,
    },
    {
      id: 5,
      name: "Toner Cân Bằng",
      brand: "The Ordinary",
      price: 520000,
      formattedPrice: "520.000₫",
      originalPrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
      rating: 4.6,
      reviews: 89,
      category: "skincare",
      skinTypes: ["Da dầu", "Da hỗn hợp"],
      features: ["Không cồn", "Không hương liệu"],
      isNew: false,
      isBestseller: false,
    },
    {
      id: 6,
      name: "Kem Chống Nắng SPF50",
      brand: "La Roche-Posay",
      price: 650000,
      formattedPrice: "650.000₫",
      originalPrice: "790.000₫",
      discount: "-18%",
      image:
        "https://images.unsplash.com/photo-1594125311687-3b1b3eafa9f4?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1594125311687-3b1b3eafa9f4?w=800&q=80",
      rating: 4.8,
      reviews: 134,
      category: "suncare",
      skinTypes: ["Da nhạy cảm", "Mọi loại da"],
      features: ["Không cồn", "Không paraben"],
      isNew: false,
      isBestseller: true,
    },
    {
      id: 7,
      name: "Phấn Nước Cushion",
      brand: "Sulwhasoo",
      price: 1250000,
      formattedPrice: "1.250.000₫",
      originalPrice: "1.450.000₫",
      discount: "-14%",
      image:
        "https://images.unsplash.com/photo-1631214524020-3c2d9a27fe64?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1631214524020-3c2d9a27fe64?w=800&q=80",
      rating: 4.9,
      reviews: 112,
      category: "makeup",
      skinTypes: ["Da khô", "Da hỗn hợp", "Mọi loại da"],
      features: ["Không paraben"],
      isNew: true,
      isBestseller: true,
    },
    {
      id: 8,
      name: "Son Môi Dưỡng Ẩm",
      brand: "P&T Cosmetics",
      price: 320000,
      formattedPrice: "320.000₫",
      originalPrice: "420.000₫",
      discount: "-24%",
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
      rating: 4.7,
      reviews: 86,
      category: "makeup",
      skinTypes: ["Da khô", "Mọi loại da"],
      features: ["Organic", "Thuần chay"],
      isNew: false,
      isBestseller: false,
    },
    {
      id: 9,
      name: "Tinh Chất Dưỡng Trắng",
      brand: "The Ordinary",
      price: 580000,
      formattedPrice: "580.000₫",
      originalPrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
      rating: 4.6,
      reviews: 74,
      category: "skincare",
      skinTypes: ["Da dầu", "Da hỗn hợp"],
      features: ["Không cồn", "Không paraben"],
      isNew: true,
      isBestseller: false,
    },
    {
      id: 10,
      name: "Dầu Tẩy Trang",
      brand: "Innisfree",
      price: 380000,
      formattedPrice: "380.000₫",
      originalPrice: "480.000₫",
      discount: "-21%",
      image:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=800&q=80",
      rating: 4.5,
      reviews: 68,
      category: "cleansers",
      skinTypes: ["Da khô", "Da nhạy cảm", "Mọi loại da"],
      features: ["Organic", "Không hương liệu"],
      isNew: false,
      isBestseller: false,
    },
    {
      id: 11,
      name: "Kem Nền Matte",
      brand: "P&T Cosmetics",
      price: 690000,
      formattedPrice: "690.000₫",
      originalPrice: "850.000₫",
      discount: "-19%",
      image:
        "https://images.unsplash.com/photo-1614159102354-a6c31e2e9b7a?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1614159102354-a6c31e2e9b7a?w=800&q=80",
      rating: 4.7,
      reviews: 92,
      category: "makeup",
      skinTypes: ["Da dầu", "Da hỗn hợp"],
      features: ["Không paraben", "Không hương liệu"],
      isNew: false,
      isBestseller: true,
    },
    {
      id: 12,
      name: "Mặt Nạ Đất Sét",
      brand: "Innisfree",
      price: 250000,
      formattedPrice: "250.000₫",
      originalPrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1567721913486-6585f069b332?w=800&q=80",
      rating: 4.4,
      reviews: 56,
      category: "masks",
      skinTypes: ["Da dầu", "Da hỗn hợp"],
      features: ["Organic", "Không paraben"],
      isNew: false,
      isBestseller: false,
    },
  ];

  // Filter products based on selected filters
  const filteredProducts = products
    .filter((product) => {
      // Filter by category
      if (activeCategory !== "all" && product.category !== activeCategory) {
        return false;
      }

      // Filter by price range
      if (product.price < priceRange[0] || product.price > priceRange[1]) {
        return false;
      }

      // Filter by brand
      if (
        selectedBrands.length > 0 &&
        !selectedBrands.includes(product.brand)
      ) {
        return false;
      }

      // Filter by skin type
      if (
        selectedSkinTypes.length > 0 &&
        !product.skinTypes.some((type) => selectedSkinTypes.includes(type))
      ) {
        return false;
      }

      // Filter by features
      if (
        selectedFeatures.length > 0 &&
        !product.features.some((feature) => selectedFeatures.includes(feature))
      ) {
        return false;
      }

      // Filter by search query
      if (
        searchQuery &&
        !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sort products
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
          return a.isNew ? -1 : 1;
        default: // popular
          return b.reviews - a.reviews;
      }
    });

  // Toggle brand selection
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  // Toggle skin type selection
  const toggleSkinType = (skinType: string) => {
    setSelectedSkinTypes((prev) =>
      prev.includes(skinType)
        ? prev.filter((t) => t !== skinType)
        : [...prev, skinType],
    );
  };

  // Toggle feature selection
  const toggleFeature = (feature: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature],
    );
  };

  // Reset all filters
  const resetFilters = () => {
    setPriceRange([0, 2000000]);
    setSelectedBrands([]);
    setSelectedSkinTypes([]);
    setSelectedFeatures([]);
    setSearchQuery("");
    setSortBy("popular");
  };

  // Format price to VND
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN").format(price) + "₫";
  };

  // Hero section data
  const heroData = {
    title: "Mỹ Phẩm Cao Cấp",
    subtitle: "Chăm sóc làn da của bạn với những sản phẩm tốt nhất",
    description:
      "Khám phá bộ sưu tập mỹ phẩm cao cấp với thành phần tự nhiên, an toàn cho mọi loại da. Từ chăm sóc da đến trang điểm, chúng tôi có tất cả những gì bạn cần.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1200&q=80",
    features: [
      {
        icon: <Leaf className="h-5 w-5" />,
        title: "Thành Phần Tự Nhiên",
        description: "95% thành phần có nguồn gốc tự nhiên",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "An Toàn Cho Da",
        description: "Đã qua kiểm nghiệm da liễu",
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Hiệu Quả Cao",
        description: "Kết quả rõ rệt sau 2 tuần sử dụng",
      },
      {
        icon: <Droplet className="h-5 w-5" />,
        title: "Không Thử Nghiệm Trên Động Vật",
        description: "Cam kết bảo vệ môi trường",
      },
    ],
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="h-[500px] relative">
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply z-10"></div>
          <Image
            src={heroData.image}
            alt="Cosmetics collection"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 max-w-3xl"
            >
              <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white text-sm font-medium mb-4 backdrop-blur-sm shadow-lg">
                P&T Cosmetics
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-md">
                {heroData.title}
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
                {heroData.description}
              </p>
              <Button
                onClick={() => {
                  const productsSection =
                    document.getElementById("products-section");
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/30 rounded-full py-3 px-8 text-lg font-medium transition-all duration-300 shadow-lg"
              >
                Khám Phá Ngay
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {heroData.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        id="products-section"
        className="py-16 bg-gradient-to-br from-rose-50 via-slate-50 to-violet-50"
      >
        <div className="container mx-auto px-4">
          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Sản Phẩm Mỹ Phẩm
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <div className="relative flex-grow max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm sản phẩm..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border-gray-200 rounded-full focus:ring-primary focus:border-primary w-full"
                />
              </div>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-white border border-gray-200 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent w-full"
                >
                  <option value="popular">Phổ biến nhất</option>
                  <option value="price-asc">Giá: Thấp đến cao</option>
                  <option value="price-desc">Giá: Cao đến thấp</option>
                  <option value="rating">Đánh giá cao nhất</option>
                  <option value="newest">Mới nhất</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="w-full lg:w-1/4">
              <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-slate-100 shadow-sm sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold text-gray-800">Bộ lọc</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={resetFilters}
                    className="text-sm text-gray-500 hover:text-primary"
                  >
                    Đặt lại
                  </Button>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Danh mục
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={cn(
                          "px-3 py-1 rounded-full text-sm transition-all duration-300",
                          activeCategory === category.id
                            ? "bg-primary text-white shadow-sm"
                            : "bg-white/80 border border-gray-200 text-gray-700 hover:border-primary/50",
                        )}
                      >
                        {category.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Khoảng giá
                  </h4>
                  <Slider
                    defaultValue={[0, 2000000]}
                    max={2000000}
                    step={50000}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{formatPrice(priceRange[0])}</span>
                    <span>{formatPrice(priceRange[1])}</span>
                  </div>
                </div>

                {/* Brands */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Thương hiệu
                  </h4>
                  <div className="space-y-2">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center">
                        <button
                          onClick={() => toggleBrand(brand)}
                          className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center mr-2 focus:outline-none"
                        >
                          {selectedBrands.includes(brand) && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </button>
                        <span className="text-sm text-gray-700">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skin Types */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Loại da
                  </h4>
                  <div className="space-y-2">
                    {skinTypes.map((type) => (
                      <div key={type} className="flex items-center">
                        <button
                          onClick={() => toggleSkinType(type)}
                          className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center mr-2 focus:outline-none"
                        >
                          {selectedSkinTypes.includes(type) && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </button>
                        <span className="text-sm text-gray-700">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">
                    Đặc tính
                  </h4>
                  <div className="space-y-2">
                    {features.map((feature) => (
                      <div key={feature} className="flex items-center">
                        <button
                          onClick={() => toggleFeature(feature)}
                          className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center mr-2 focus:outline-none"
                        >
                          {selectedFeatures.includes(feature) && (
                            <Check className="h-4 w-4 text-primary" />
                          )}
                        </button>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="w-full lg:w-3/4">
              {filteredProducts.length === 0 ? (
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 border border-slate-100 shadow-sm text-center">
                  <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                      <Search className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-medium text-gray-800">
                      Không tìm thấy sản phẩm
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      Không có sản phẩm nào phù hợp với bộ lọc của bạn. Vui lòng
                      thử lại với các tiêu chí khác.
                    </p>
                    <Button
                      variant="outline"
                      onClick={resetFilters}
                      className="mt-2"
                    >
                      Xóa bộ lọc
                    </Button>
                  </div>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product) => (
                    <motion.div
                      key={product.id}
                      variants={itemVariants}
                      className="bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 relative"
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      {/* Product badges */}
                      <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                        {product.isNew && (
                          <span className="px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full shadow-sm">
                            Mới
                          </span>
                        )}
                        {product.isBestseller && (
                          <span className="px-2 py-1 bg-pink-500 text-white text-xs font-medium rounded-full shadow-sm">
                            Bán chạy
                          </span>
                        )}
                        {product.discount && (
                          <span className="px-2 py-1 bg-rose-500 text-white text-xs font-medium rounded-full shadow-sm">
                            {product.discount}
                          </span>
                        )}
                      </div>

                      {/* Quick actions */}
                      <div className="absolute top-3 right-3 z-10 flex flex-col gap-2">
                        <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-gray-700 hover:text-rose-500 transition-colors duration-300">
                          <Heart className="h-4 w-4" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm shadow-sm flex items-center justify-center text-gray-700 hover:text-primary transition-colors duration-300">
                          <ShoppingBag className="h-4 w-4" />
                        </button>
                      </div>

                      {/* Product image */}
                      <div
                        className="relative h-64 overflow-hidden bg-slate-50"
                        onClick={() => router.push(`/cosmetics/${product.id}`)}
                      >
                        <Image
                          src={
                            hoveredProduct === product.id && product.hoverImage
                              ? product.hoverImage
                              : product.image
                          }
                          alt={product.name}
                          fill
                          className="object-cover transition-all duration-500 hover:scale-105 cursor-pointer"
                        />
                      </div>

                      {/* Product info */}
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                          <h3
                            className="text-gray-800 font-medium line-clamp-2 hover:text-primary transition-colors cursor-pointer"
                            onClick={() =>
                              router.push(`/cosmetics/${product.id}`)
                            }
                          >
                            {product.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">
                          {product.brand}
                        </p>
                        <div className="flex items-center gap-1 mb-3">
                          <Star className="h-4 w-4 fill-pink-400 text-pink-400" />
                          <span className="text-sm font-medium text-gray-700">
                            {product.rating}
                          </span>
                          <span className="text-xs text-gray-500">
                            ({product.reviews})
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-end gap-1">
                            <span className="text-lg font-bold text-gray-900">
                              {product.formattedPrice}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                {product.originalPrice}
                              </span>
                            )}
                          </div>
                          <Button
                            size="sm"
                            className="rounded-full"
                            onClick={() =>
                              router.push(`/cosmetics/${product.id}`)
                            }
                          >
                            Chi tiết
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CosmeticsPage;
