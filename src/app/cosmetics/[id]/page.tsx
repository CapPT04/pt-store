"use client";
import React, { useState, useRef } from "react";
import ProductImage from "@/components/cosmetics/ProductImage";
import ProductInfo from "@/components/cosmetics/ProductInfo";
import ProductDetails from "@/components/cosmetics/ProductDetails";
import RelatedProducts from "@/components/cosmetics/RelatedProducts";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CosmeticDetail = () => {
  const params = useParams();
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const productRef = useRef<HTMLDivElement>(null);
  const [showCartNotification, setShowCartNotification] = useState(false);
  const [selectedSize, setSelectedSize] = useState("50ml");
  const [quantity, setQuantity] = useState(1);

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
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&q=80",
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&q=80",

    ],
    features: [
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /></svg>,
        title: "Dưỡng Ẩm Sâu",
        description: "Cung cấp độ ẩm liên tục đến 72 giờ",
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18" /><path d="M4 14.06a6.9 6.9 0 0 0 1.25 3.94c1 1.6 2.38 3 4.12 4a8.99 8.99 0 0 0 9.91-1.13 9.27 9.27 0 0 0 3.22-7.75A9.07 9.07 0 0 0 20 8h0" /><path d="M4.73 19.26c-1.33-1.4-3.73-4.94-3.73-4.94" /><path d="M16.87 14.5c-.31.34-.68.65-1.08.92-1.22.82-2.76.82-3.98 0a5.5 5.5 0 0 1-1.08-.92c-.32-.34-.33-.7 0-1.03a2.75 2.75 0 0 1 .52-.52 3 3 0 0 1 5.12 0c.19.14.37.32.52.52.3.33.29.69 0 1.03Z" /></svg>,
        title: "Bảo Vệ Da",
        description: "Tăng cường hàng rào bảo vệ tự nhiên",
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z" /></svg>,
        title: "Làm Sáng Da",
        description: "Cải thiện tông màu da đều và rạng rỡ",
      },
      {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M5 20c.6-6.3 4.6-11 9-11s8.4 4.7 9 11" /><path d="M5 16.1c1-4.4 3.5-7.6 6.5-7.6s5.5 3.2 6.5 7.6" /><path d="M5 12.1c1.3-2.7 2.5-3.6 4-3.6 1.4 0 2.8.9 4 3.6" /><path d="M12 4c.7 1.8 2 3 4 3" /><path d="M12 4c-.7 1.8-2 3-4 3" /></svg>,
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

  // Handle add to cart
  const addToCart = (quantity: number, size: string) => {
    // In a real app, this would add the product to the cart
    console.log(
      `Added ${quantity} of ${product.name} (${size}) to cart`,
    );
    setShowCartNotification(true);
    setSelectedSize(size);
    setQuantity(quantity);

    // Hide notification after 3 seconds
    setTimeout(() => {
      setShowCartNotification(false);
    }, 3000);
  };

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
            <ProductInfo product={product} onAddToCart={addToCart} />
          </div>

          {/* Product details tabs */}
          <ProductDetails product={product} />

          {/* Related products */}
          <RelatedProducts products={product.relatedProducts} />
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
                <p className="text-sm font-medium text-violet-600">
                  Đã thêm vào giỏ hàng
                </p>
                <Button
                  variant="default"
                  className="text-xs h-8 rounded-full bg-violet-600 hover:bg-violet-600/90 text-white px-3"
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
