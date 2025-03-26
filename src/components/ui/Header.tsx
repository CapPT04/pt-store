import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
}

const Header = ({
  title = "Thời Trang Nữ",
  subtitle = "Khám phá bộ sưu tập thời trang nữ cao cấp với thiết kế độc đáo, chất liệu sang trọng và phong cách hiện đại.",
  description = "Khám phá bộ sưu tập mùa hè mới nhất với những thiết kế độc quyền, mang đến vẻ đẹp tinh tế và sang trọng cho phái đẹp.",
  primaryButtonText = "Mua Sắm Ngay",
  secondaryButtonText = "Bộ Sưu Tập",
  backgroundImage = "https://images.unsplash.com/photo-1469504512102-900f29606341?w=1200&q=80",
  onPrimaryButtonClick,
  onSecondaryButtonClick,
}: HeaderProps) => {
  const featuredProduct = {
    title: "Bộ Sưu Tập Mùa Hè 2024",
    subtitle: "Phong Cách Mới, Diện Mạo Mới",
    description,
    image: backgroundImage,
    buttonText: "Khám Phá Ngay",
  };

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-900/20 to-fuchsia-900/20 mix-blend-multiply z-10"></div>
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-fuchsia-600">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              {subtitle}
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                onClick={onPrimaryButtonClick}
                className="bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:from-violet-700 hover:to-fuchsia-600 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {primaryButtonText}
              </Button>
              <Button
                onClick={onSecondaryButtonClick}
                className="bg-white/80 backdrop-blur-sm text-violet-700 border border-violet-200 hover:bg-violet-50 font-medium py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md"
              >
                {secondaryButtonText}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src={featuredProduct.image}
                alt="Fashion Collection"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent rounded-2xl flex flex-col justify-end p-8">
                <span className="text-pink-300 font-medium mb-2">
                  {featuredProduct.subtitle}
                </span>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {featuredProduct.title}
                </h2>
                <p className="text-gray-200 mb-4 max-w-md">
                  {featuredProduct.description}
                </p>
                <Button className="bg-white/20 backdrop-blur-sm text-white border border-white/40 hover:bg-white/30 w-fit rounded-full py-2 px-6 transition-all duration-300">
                  {featuredProduct.buttonText}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Header;
