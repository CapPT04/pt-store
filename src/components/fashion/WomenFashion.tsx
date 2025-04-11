import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/Header";
import {
  ShoppingBag,
  Heart,
  Search,
  Filter,
  ChevronDown,
  Star,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const WomenFashion = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filters = [
    { id: "all", name: "Tất Cả" },
    { id: "new", name: "Mới Nhất" },
    { id: "trending", name: "Xu Hướng" },
    { id: "sale", name: "Giảm Giá" },
    { id: "premium", name: "Cao Cấp" },
  ];

  const categories = [
    {
      id: 1,
      name: "Đầm & Váy",
      count: 120,
      image:
        "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80",
    },
    {
      id: 2,
      name: "Áo Sơ Mi & Blouse",
      count: 85,
      image:
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80",
    },
    {
      id: 3,
      name: "Quần & Jeans",
      count: 74,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
    },
    {
      id: 4,
      name: "Áo Khoác & Blazer",
      count: 62,
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Đầm Dạ Hội Lụa Cao Cấp",
      price: "1.890.000₫",
      salePrice: "1.290.000₫",
      discount: "-32%",
      image:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1572251328450-38d5a77442f3?w=800&q=80",
      isNew: true,
      rating: 4.8,
      reviews: 124,
      tags: ["new", "premium", "sale"],
    },
    {
      id: 2,
      name: "Áo Sơ Mi Lụa Tay Bồng",
      price: "850.000₫",
      salePrice: "680.000₫",
      discount: "-20%",
      image:
        "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1589810635657-232948472d98?w=800&q=80",
      isNew: true,
      rating: 4.7,
      reviews: 86,
      tags: ["new", "trending", "sale"],
    },
    {
      id: 3,
      name: "Quần Jeans Ống Rộng",
      price: "950.000₫",
      salePrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=800&q=80",
      isNew: false,
      rating: 4.9,
      reviews: 152,
      tags: ["trending", "premium"],
    },
    {
      id: 4,
      name: "Áo Khoác Blazer Dáng Dài",
      price: "1.650.000₫",
      salePrice: "1.320.000₫",
      discount: "-20%",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1591047139756-edb8a0f82e5d?w=800&q=80",
      isNew: false,
      rating: 4.6,
      reviews: 78,
      tags: ["sale", "premium"],
    },
    {
      id: 5,
      name: "Váy Midi Xếp Ly",
      price: "790.000₫",
      salePrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1583496661206-5c7ede71f90d?w=800&q=80",
      isNew: true,
      rating: 4.8,
      reviews: 94,
      tags: ["new", "trending"],
    },
    {
      id: 6,
      name: "Áo Len Cashmere Cao Cấp",
      price: "1.290.000₫",
      salePrice: null,
      discount: null,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1608234807905-4466023792f5?w=800&q=80",
      isNew: false,
      rating: 4.9,
      reviews: 112,
      tags: ["premium"],
    },
    {
      id: 7,
      name: "Áo Sơ Mi Linen Oversize",
      price: "750.000₫",
      salePrice: "600.000₫",
      discount: "-20%",
      image:
        "https://images.unsplash.com/photo-1604575396859-5f7caa8c9f08?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1603251578711-3290ca1a0187?w=800&q=80",
      isNew: false,
      rating: 4.7,
      reviews: 68,
      tags: ["sale", "trending"],
    },
    {
      id: 8,
      name: "Quần Culottes Linen",
      price: "690.000₫",
      salePrice: "550.000₫",
      discount: "-20%",
      image:
        "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&q=80",
      hoverImage:
        "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?w=800&q=80",
      isNew: true,
      rating: 4.5,
      reviews: 56,
      tags: ["new", "sale"],
    },
  ];

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((product) => product.tags.includes(activeFilter));

  const featuredProduct = {
    title: "Bộ Sưu Tập Mùa Hè 2024",
    subtitle: "Phong Cách Mới, Diện Mạo Mới",
    description:
      "Khám phá bộ sưu tập mùa hè mới nhất với những thiết kế độc quyền, mang đến vẻ đẹp tinh tế và sang trọng cho phái đẹp.",
    image:
      "https://images.unsplash.com/photo-1469504512102-900f29606341?w=1200&q=80",
    buttonText: "Khám Phá Ngay",
  };

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
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-50 via-rose-50 to-teal-50">
      {/* Hero Section */}
      <Header
        backgroundImage={featuredProduct.image}
        description={featuredProduct.description}
      />

      {/* Categories */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Danh Mục Sản Phẩm
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-6"
            ></motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {categories.map((category) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-w-1 aspect-h-1 w-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/80 via-violet-800/50 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {category.name}
                  </h3>
                  <p className="text-violet-200 text-sm mb-4">
                    {category.count}+ sản phẩm
                  </p>
                  <Button className="bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 rounded-full py-2 px-5 text-sm transition-all duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                    Xem Ngay
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gradient-to-b from-violet-50/50 to-white/80">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-800 mb-2"
              >
                Sản Phẩm Nổi Bật
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80px" }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-violet-500 to-fuchsia-500 mb-4"
              ></motion.div>
            </div>

            <div className="flex items-center mt-4 md:mt-0">
              <Button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 bg-white border border-violet-200 text-violet-700 rounded-full py-2 px-4 shadow-sm"
              >
                <Filter className="h-4 w-4" />
                <span>Lọc</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`}
                />
              </Button>

              <div
                className={`${showFilters ? "flex" : "hidden"} md:flex flex-wrap gap-2 mt-4 md:mt-0`}
              >
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeFilter === filter.id ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-md" : "bg-white/80 text-gray-700 hover:bg-violet-100/50 border border-violet-100/50"}`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-violet-100/30 overflow-hidden group hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={
                      hoveredProduct === product.id && product.hoverImage
                        ? product.hoverImage
                        : product.image
                    }
                    alt={product.name}
                    className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-105"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
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
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-pink-400 fill-pink-400" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-xs text-gray-600 ml-1">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-800 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center">
                    {product.salePrice ? (
                      <>
                        <span className="text-lg font-bold text-violet-600">
                          {product.salePrice}
                        </span>
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {product.price}
                        </span>
                      </>
                    ) : (
                      <span className="text-lg font-bold text-violet-600">
                        {product.price}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center gap-2">
              <Button className="bg-white border border-violet-200 text-violet-700 rounded-full p-2 hover:bg-violet-50 transition-colors">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`${currentPage === page ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white" : "bg-white text-gray-700 hover:bg-violet-50"} w-10 h-10 rounded-full transition-all duration-300`}
                >
                  {page}
                </Button>
              ))}
              <Button className="bg-white border border-violet-200 text-violet-700 rounded-full p-2 hover:bg-violet-50 transition-colors">
                <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
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
              Đăng ký để nhận thông tin về bộ sưu tập mới, khuyến mãi đặc biệt
              và các sự kiện độc quyền
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
                className="flex-grow px-5 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50 text-gray-800 shadow-lg backdrop-blur-sm bg-white/90 border border-white/30"
              />
              <Button className="bg-white text-violet-600 hover:bg-violet-50 font-medium py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm border border-white/30">
                Đăng Ký
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WomenFashion;
