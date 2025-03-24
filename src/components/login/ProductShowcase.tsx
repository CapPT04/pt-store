import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
}

interface ProductShowcaseProps {
  products?: Product[];
  autoplaySpeed?: number;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products = [
    {
      id: 1,
      name: "Phấn Nước Cushion Cao Cấp",
      category: "Mỹ phẩm",
      imageUrl:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    },
    {
      id: 2,
      name: "Váy Đầm Dạ Hội",
      category: "Thời trang",
      imageUrl:
        "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80",
    },
    {
      id: 3,
      name: "Bộ Chăm Sóc Da Organic",
      category: "Mỹ phẩm",
      imageUrl:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=800&q=80",
    },
    {
      id: 4,
      name: "Túi Xách Thời Trang",
      category: "Phụ kiện",
      imageUrl:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    },
    {
      id: 5,
      name: "Son Môi Dưỡng Ẩm",
      category: "Mỹ phẩm",
      imageUrl:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&q=80",
    },
  ],
  autoplaySpeed = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, autoplaySpeed);

    return () => clearInterval(interval);
  }, [products.length, autoplaySpeed]);

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 to-purple-600 shadow-2xl"
    >
      {/* Main carousel */}
      <div className="relative w-full h-full">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentIndex ? 1 : 0,
              scale: index === currentIndex ? 1 : 1.1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <div className="relative w-full h-full">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={
                      index === currentIndex
                        ? { y: 0, opacity: 1 }
                        : { y: 30, opacity: 0 }
                    }
                    transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                  >
                    <span className="inline-block px-2 py-1 mb-2 text-sm font-medium text-pink-300 bg-pink-900/30 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="mt-1 text-3xl font-bold text-white drop-shadow-md">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-lg text-gray-200">
                      Khám phá ngay tại P&T Store
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4 h-[525px]">
        <button
          onClick={handlePrevious}
          className="p-3 text-white bg-black/40 rounded-full backdrop-blur-sm hover:bg-black/60 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="Previous product"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={handleNext}
          className="p-3 text-white bg-black/40 rounded-full backdrop-blur-sm hover:bg-black/60 transition-all duration-300 transform hover:scale-110 shadow-lg"
          aria-label="Next product"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-8" : "bg-white/50 w-2 hover:bg-white/70"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-pink-500/20 to-purple-600/20 mix-blend-overlay" />
    </motion.div>
  );
};

export default ProductShowcase;
