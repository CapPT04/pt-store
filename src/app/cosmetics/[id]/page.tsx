"use client";
import React, { useState, useEffect, useRef } from "react";
import ProductImage from "@/components/cosmetics/ProductImage";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import {
  Star,
  ShoppingBag,
  Heart,
  Share2,
  ChevronDown,
  Check,
  Plus,
  Minus,
  ArrowRight,
  Sparkles,
  Droplet,
  Shield,
  Leaf,
  Filter,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CosmeticDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const productRef = useRef<HTMLDivElement>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("50ml");
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [selectedSkinType, setSelectedSkinType] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showIngredients, setShowIngredients] = useState(false);

  // Parallax effect for background elements
  const yBg1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yBg2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Product data (in a real app, this would come from an API)
  const product = {
    id: params.id,
    name: "Serum Dưỡng Ẩm Chuyên Sâu Hoa Hồng",
    brand: "P&T Cosmetics",
    price: "890.000₫",
    originalPrice: "1.190.000₫",
    discount: "-25%",
    rating: 4.8,
    reviews: 124,
    description:
      "Serum dưỡng ẩm chuyên sâu với chiết xuất hoa hồng hữu cơ, cung cấp độ ẩm tức thì và kéo dài, giúp làn da mềm mại, căng mọng và rạng rỡ. Công thức không chứa paraben, phù hợp với mọi loại da, đặc biệt là da khô và da nhạy cảm.",
    benefits: [
      "Cung cấp độ ẩm sâu và kéo dài đến 72 giờ",
      "Làm dịu và giảm kích ứng cho da nhạy cảm",
      "Cải thiện kết cấu da, giúp da mềm mịn và đàn hồi",
      "Tăng cường hàng rào bảo vệ tự nhiên của da",
      "Chống oxy hóa, bảo vệ da khỏi tác hại của môi trường",
    ],
    ingredients: [
      "Nước cất tinh khiết",
      "Chiết xuất hoa hồng hữu cơ (Rosa Damascena)",
      "Glycerin thực vật",
      "Sodium Hyaluronate (Hyaluronic Acid)",
      "Panthenol (Pro-Vitamin B5)",
      "Niacinamide (Vitamin B3)",
      "Adenosine",
      "Ceramide NP",
      "Allantoin",
      "Tocopherol (Vitamin E)",
      "Chiết xuất Aloe Vera",
      "Chiết xuất Chamomile",
      "Chiết xuất Licorice",
      "Butylene Glycol",
      "Carbomer",
      "Disodium EDTA",
      "Hương liệu tự nhiên",
    ],
    howToUse: [
      "Làm sạch da mặt với sữa rửa mặt",
      "Thoa toner để cân bằng độ pH",
      "Lấy 2-3 giọt serum và vỗ nhẹ lên da",
      "Massage nhẹ nhàng theo chuyển động tròn",
      "Sử dụng sáng và tối để có kết quả tốt nhất",
    ],
    sizes: [
      { size: "30ml", price: "590.000₫" },
      { size: "50ml", price: "890.000₫" },
      { size: "100ml", price: "1.590.000₫" },
    ],
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&q=80",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?w=800&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&q=80",
    ],
    features: [
      {
        icon: <Droplet className="h-5 w-5" />,
        title: "Dưỡng Ẩm Sâu",
        description: "Cung cấp độ ẩm liên tục đến 72 giờ",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Bảo Vệ Da",
        description: "Tăng cường hàng rào bảo vệ tự nhiên",
      },
      {
        icon: <Sparkles className="h-5 w-5" />,
        title: "Làm Sáng Da",
        description: "Cải thiện tông màu da đều và rạng rỡ",
      },
      {
        icon: <Leaf className="h-5 w-5" />,
        title: "Thành Phần Tự Nhiên",
        description: "95% thành phần có nguồn gốc tự nhiên",
      },
    ],
    relatedProducts: [
      {
        id: 1,
        name: "Kem Dưỡng Ẩm Ban Đêm",
        price: "750.000₫",
        image:
          "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
      },
      {
        id: 2,
        name: "Sữa Rửa Mặt Tạo Bọt",
        price: "450.000₫",
        image:
          "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
      },
      {
        id: 3,
        name: "Mặt Nạ Dưỡng Ẩm",
        price: "290.000₫",
        image:
          "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800&q=80",
      },
      {
        id: 4,
        name: "Toner Cân Bằng",
        price: "520.000₫",
        image:
          "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800&q=80",
      },
      {
        id: 5,
        name: "Kem Chống Nắng SPF50",
        price: "650.000₫",
        image:
          "https://images.unsplash.com/photo-1594125311687-3b1b3eafa9f4?w=800&q=80",
      },
    ],
    customerReviews: [
      {
        id: 1,
        name: "Nguyễn Thị Minh",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mia",
        rating: 5,
        date: "15/04/2024",
        skinType: "Da khô",
        title: "Sản phẩm tuyệt vời cho da khô",
        comment:
          "Tôi đã dùng serum này được 2 tháng và thấy da mình cải thiện rõ rệt. Da không còn khô và bong tróc như trước, thay vào đó là cảm giác mềm mại và căng mọng. Sẽ tiếp tục mua lại!",
        beforeImage:
          "https://images.unsplash.com/photo-1595163153965-4d1cad2ffe6b?w=400&q=80",
        afterImage:
          "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?w=400&q=80",
        likes: 24,
      },
      {
        id: 2,
        name: "Trần Văn Hùng",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
        rating: 4,
        date: "02/04/2024",
        skinType: "Da hỗn hợp",
        title: "Hiệu quả tốt nhưng hơi đắt",
        comment:
          "Serum thấm nhanh và không gây nhờn rít. Da tôi cảm thấy được cấp ẩm tốt và ít bị đổ dầu hơn. Chỉ tiếc là giá hơi cao so với túi tiền sinh viên.",
        likes: 15,
      },
      {
        id: 3,
        name: "Lê Thị Hương",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
        rating: 5,
        date: "28/03/2024",
        skinType: "Da nhạy cảm",
        title: "Cuối cùng cũng tìm được sản phẩm phù hợp",
        comment:
          "Da tôi rất nhạy cảm và dễ kích ứng với hầu hết các sản phẩm trên thị trường. Serum này là một trong số ít sản phẩm không gây kích ứng cho tôi. Hương thơm nhẹ nhàng và cảm giác dưỡng ẩm rất tốt.",
        beforeImage:
          "https://images.unsplash.com/photo-1588387883829-7a8b5f0c7ba5?w=400&q=80",
        afterImage:
          "https://images.unsplash.com/photo-1588387883829-7a8b5f0c7ba5?w=400&q=80",
        likes: 32,
      },
      {
        id: 4,
        name: "Phạm Thanh Hà",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
        rating: 5,
        date: "15/03/2024",
        skinType: "Da dầu",
        title: "Không ngờ phù hợp với da dầu",
        comment:
          "Ban đầu tôi lo lắng serum dưỡng ẩm sẽ làm da tôi càng dầu hơn, nhưng sản phẩm này thực sự cân bằng độ ẩm rất tốt. Da tôi không còn bị đổ dầu nhiều như trước và lỗ chân lông cũng nhỏ lại.",
        likes: 18,
      },
    ],
  };

  // Handle quantity changes
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  // Handle add to cart
  const addToCart = () => {
    // In a real app, this would add the product to the cart
    console.log(
      `Added ${quantity} of ${product.name} (${selectedSize}) to cart`,
    );
    setShowCartNotification(true);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowCartNotification(false);
    }, 3000);
  };

  // Filter reviews by skin type
  const filteredReviews = selectedSkinType
    ? product.customerReviews.filter(
        (review) => review.skinType === selectedSkinType,
      )
    : product.customerReviews;

  return (
    <MainLayout>
      {/* Floating background elements */}
      <motion.div
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden"
        style={{ opacity }}
      >
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 rounded-full bg-pink-200/20 blur-3xl"
          style={{ y: yBg1 }}
        />
        <motion.div
          className="absolute top-40 right-20 w-80 h-80 rounded-full bg-purple-200/20 blur-3xl"
          style={{ y: yBg2 }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-72 h-72 rounded-full bg-rose-200/20 blur-3xl"
          style={{ y: yBg1 }}
        />
      </motion.div>

      <div className="relative z-10 pt-8 pb-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 mb-6">
          <div className="flex items-center text-sm text-gray-500">
            <button
              onClick={() => router.push("/")}
              className="hover:text-primary transition-colors"
            >
              Trang chủ
            </button>
            <span className="mx-2">/</span>
            <button
              onClick={() => router.push("/cosmetics")}
              className="hover:text-primary transition-colors"
            >
              Mỹ phẩm
            </button>
            <span className="mx-2">/</span>
            <button
              onClick={() => router.push("/cosmetics/skincare")}
              className="hover:text-primary transition-colors"
            >
              Chăm sóc da
            </button>
            <span className="mx-2">/</span>
            <span className="text-primary font-medium">Serum</span>
          </div>
        </div>

        {/* Product section */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Product images */}
            <div className="relative">
              <div ref={productRef}>
                <ProductImage images={product.images} />
              </div>
            </div>

            {/* Product info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white/40 backdrop-blur-md rounded-3xl p-8 border border-white/50 shadow-lg relative overflow-hidden"
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-white/20 pointer-events-none" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-200/30 rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Brand */}
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                    {product.brand}
                  </div>

                  {/* Product name */}
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h1>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-primary fill-primary" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} đánh giá)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          {product.originalPrice}
                        </span>
                      )}
                      {product.discount && (
                        <span className="px-2 py-1 bg-rose-500 text-white text-sm font-bold rounded-md">
                          {product.discount}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Giá đã bao gồm VAT
                    </p>
                  </div>

                  {/* Short description */}
                  <p className="text-gray-600 mb-6">{product.description}</p>

                  {/* Size selection */}
                  <div className="mb-6">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Dung tích
                    </h3>
                    <div className="flex gap-3">
                      {product.sizes.map((sizeOption) => (
                        <motion.button
                          key={sizeOption.size}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedSize(sizeOption.size)}
                          className={cn(
                            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            selectedSize === sizeOption.size
                              ? "bg-primary text-white shadow-md"
                              : "bg-white/80 border border-gray-200 text-gray-700 hover:border-primary/50",
                          )}
                        >
                          {sizeOption.size}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="mb-8">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">
                      Số lượng
                    </h3>
                    <div className="flex items-center">
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={decreaseQuantity}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </motion.button>
                      <span className="w-12 text-center font-medium">
                        {quantity}
                      </span>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={increaseQuantity}
                        className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={addToCart}
                      className="flex-1 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-medium py-3 px-6 rounded-full flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all duration-300"
                    >
                      <ShoppingBag className="h-5 w-5" />
                      Thêm vào giỏ hàng
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300",
                        isFavorite
                          ? "bg-rose-500 text-white"
                          : "bg-white/80 border border-gray-200 text-gray-600 hover:text-rose-500",
                      )}
                    >
                      <Heart
                        className={cn("h-5 w-5", isFavorite && "fill-white")}
                      />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-full bg-white/80 border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary transition-all duration-300"
                    >
                      <Share2 className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Product features */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/50 shadow-sm flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Product details tabs */}
          <div className="mt-16">
            <Tabs
              defaultValue="description"
              className="w-full"
              onValueChange={setActiveTab}
            >
              <TabsList className="grid w-full grid-cols-4 bg-white/40 backdrop-blur-sm rounded-xl p-1 mb-8">
                <TabsTrigger value="description" className="rounded-lg">
                  Mô tả
                </TabsTrigger>
                <TabsTrigger value="ingredients" className="rounded-lg">
                  Thành phần
                </TabsTrigger>
                <TabsTrigger value="how-to-use" className="rounded-lg">
                  Hướng dẫn sử dụng
                </TabsTrigger>
                <TabsTrigger value="reviews" className="rounded-lg">
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
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <div className="mt-8 bg-gradient-to-r from-violet-50 to-pink-50 rounded-xl p-6 border border-violet-100/50">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Kết quả được chứng minh lâm sàng
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-primary mb-1">
                            94%
                          </p>
                          <p className="text-sm text-gray-600">
                            Người dùng cảm thấy da được cấp ẩm tức thì
                          </p>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-primary mb-1">
                            87%
                          </p>
                          <p className="text-sm text-gray-600">
                            Người dùng thấy da mềm mại hơn sau 1 tuần
                          </p>
                        </div>
                        <div className="bg-white/70 backdrop-blur-sm rounded-lg p-4 text-center">
                          <p className="text-3xl font-bold text-primary mb-1">
                            92%
                          </p>
                          <p className="text-sm text-gray-600">
                            Người dùng sẽ giới thiệu sản phẩm cho bạn bè
                          </p>
                        </div>
                      </div>
                    </div>
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
                      <div className="flex flex-wrap gap-2 mb-4">
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                          95% Tự nhiên
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                          Không Paraben
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                          Không Sulfate
                        </span>
                        <span className="px-3 py-1 bg-purple-100 text-primary text-xs font-medium rounded-full">
                          Không thử nghiệm trên động vật
                        </span>
                        <span className="px-3 py-1 bg-rose-100 text-rose-700 text-xs font-medium rounded-full">
                          Không hương liệu nhân tạo
                        </span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="font-medium text-gray-800 mb-2">
                            Thành phần nổi bật
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-lg p-4">
                              <h4 className="font-medium text-primary mb-1">
                                Chiết xuất hoa hồng hữu cơ
                              </h4>
                              <p className="text-sm text-gray-600">
                                Dưỡng ẩm sâu và làm dịu da kích ứng
                              </p>
                            </div>
                            <div className="bg-gradient-to-br from-violet-50 to-violet-100/50 rounded-lg p-4">
                              <h4 className="font-medium text-primary mb-1">
                                Hyaluronic Acid
                              </h4>
                              <p className="text-sm text-gray-600">
                                Giữ nước và tăng cường độ ẩm cho da
                              </p>
                            </div>
                            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-lg p-4">
                              <h4 className="font-medium text-primary mb-1">
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
                      <div className="flex items-center gap-2">
                        <Leaf className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium text-green-700">
                          Thành phần có nguồn gốc bền vững
                        </span>
                      </div>
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
                          <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 mt-2">{step}</p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-pink-50 to-purple-100/50 rounded-xl p-6 border border-purple-100/50 mb-6">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-foreground mb-3">
                        <Sparkles className="h-5 w-5" />
                        Mẹo sử dụng tốt nhất
                      </h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            Sử dụng serum trên da sạch và còn ẩm để tăng khả
                            năng hấp thụ
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            Kết hợp với kem dưỡng ẩm để khóa độ ẩm và dưỡng chất
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            Sử dụng đều đặn sáng và tối để có kết quả tốt nhất
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>
                            Bảo quản ở nơi khô ráo, tránh ánh nắng trực tiếp
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="Hướng dẫn sử dụng sản phẩm"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-xl"
                      ></iframe>
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

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          onClick={() => setSelectedSkinType(null)}
                          className={cn(
                            "text-sm",
                            !selectedSkinType &&
                              "bg-primary text-white hover:bg-primary/90 hover:text-white",
                          )}
                        >
                          Tất cả
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedSkinType("Da khô")}
                          className={cn(
                            "text-sm",
                            selectedSkinType === "Da khô" &&
                              "bg-primary text-white hover:bg-primary/90 hover:text-white",
                          )}
                        >
                          Da khô
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedSkinType("Da dầu")}
                          className={cn(
                            "text-sm",
                            selectedSkinType === "Da dầu" &&
                              "bg-primary text-white hover:bg-primary/90 hover:text-white",
                          )}
                        >
                          Da dầu
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedSkinType("Da hỗn hợp")}
                          className={cn(
                            "text-sm",
                            selectedSkinType === "Da hỗn hợp" &&
                              "bg-primary text-white hover:bg-primary/90 hover:text-white",
                          )}
                        >
                          Da hỗn hợp
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => setSelectedSkinType("Da nhạy cảm")}
                          className={cn(
                            "text-sm",
                            selectedSkinType === "Da nhạy cảm" &&
                              "bg-primary text-white hover:bg-primary/90 hover:text-white",
                          )}
                        >
                          Da nhạy cảm
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
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
                                      className={`h-4 w-4 ${i < review.rating ? "text-primary fill-primary" : "text-gray-300"}`}
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
                                        <div className="absolute top-2 left-2 px-2 py-1 bg-primary/70 text-white text-xs rounded">
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
                                  <button className="flex items-center gap-1 text-gray-500 hover:text-primary text-sm">
                                    <Heart className="h-4 w-4" />
                                    <span>Hữu ích ({review.likes})</span>
                                  </button>
                                  <button className="text-gray-500 hover:text-primary text-sm">
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

                    <div className="mt-8 text-center">
                      <Button className="bg-white hover:bg-gray-50 text-primary border border-gray-200 shadow-sm">
                        Xem thêm đánh giá
                      </Button>
                    </div>
                  </motion.div>
                </TabsContent>
              </div>
            </Tabs>
          </div>

          {/* Related products */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Sản phẩm liên quan
            </h2>

            <div className="relative overflow-hidden">
              <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
                {product.relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="min-w-[250px] max-w-[250px] snap-start"
                  >
                    <div className="bg-white/40 backdrop-blur-sm rounded-xl overflow-hidden border border-white/50 shadow-lg group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="250px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                          <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30 rounded-full py-1.5 px-4 text-sm transition-all duration-300 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            Xem chi tiết
                          </Button>
                        </div>
                      </div>
                      <div className="p-4 flex-1 flex flex-col">
                        <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors duration-300">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-primary font-bold mt-auto pt-2">
                          {relatedProduct.price}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart notification */}
      <AnimatePresence>
        {showCartNotification && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed bottom-6 right-6 bg-white/90 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100 z-50 max-w-sm flex items-start gap-4"
          >
            <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="64px"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-gray-800">{product.name}</h4>
                  <p className="text-sm text-gray-500">
                    {selectedSize} • {quantity} sản phẩm
                  </p>
                </div>
                <button
                  onClick={() => setShowCartNotification(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-2 flex justify-between items-center">
                <p className="text-sm font-medium text-green-600">
                  Đã thêm vào giỏ hàng
                </p>
                <Button
                  size="sm"
                  className="text-xs h-8 rounded-full bg-primary hover:bg-primary/90 text-white px-3"
                  onClick={() => router.push("/cart")}
                >
                  Xem giỏ hàng
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default CosmeticDetail;
