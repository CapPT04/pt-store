"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import Image from "next/image";

interface ProductImageProps {
  images: string[];
}

const ProductImage: React.FC<ProductImageProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isRotating, setIsRotating] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });

  // Spring animations for smoother movement
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  // Enhanced image effect with parallax and zoom
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    setMousePosition({ x, y });
    setMagnifierPosition({ x: e.clientX - left, y: e.clientY - top });

    // Update spring animations
    rotateY.set((x - 0.5) * 15); // -7.5 to 7.5 degrees
    rotateX.set((0.5 - y) * 15); // -7.5 to 7.5 degrees
    scale.set(isZoomed ? 1.08 : 1);
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
    setIsRotating(true);
    scale.set(1.08);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
    setIsRotating(false);
    setShowMagnifier(false);
    setMousePosition({ x: 0.5, y: 0.5 }); // Reset to center

    // Reset spring animations
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
  };

  const handleMagnifierToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMagnifier(!showMagnifier);
  };

  // Auto-rotate images with a pause between transitions
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isRotating) {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isRotating]);

  // Particle effect
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      opacity: number;
      speed: number;
    }>
  >([]);

  useEffect(() => {
    // Create initial particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.2,
    }));

    setParticles(newParticles);

    // Animate particles
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + Math.sin(particle.y / 20) * 0.5,
          // Reset particles that go off screen
          ...(particle.y < 0
            ? {
              y: 100,
              x: Math.random() * 100,
              size: Math.random() * 4 + 1,
              opacity: Math.random() * 0.5 + 0.1,
            }
            : {}),
        })),
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col md:flex-row gap-4">
      {/* Thumbnail images - moved to left side */}
      <div className="md:w-20 flex flex-row md:flex-col gap-2 justify-center md:justify-between md:h-[650px]">
        {images.map((image, index) => (
          <motion.button
            key={index}
            className={`relative w-14 h-14 md:w-16 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex ? "border-violet-600 ring-2 ring-violet-600/30 scale-105" : "border-gray-200"}`}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.1, borderColor: "rgba(124, 58, 237, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={image}
              alt={`Product view ${index + 1}`}
              fill
              className="object-cover"
              sizes="64px"
            />
            {index === currentImageIndex && (
              <motion.div
                className="absolute inset-0 bg-violet-600/10 backdrop-blur-[1px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Main product image container */}
      <div className="flex-1">
        <div
          ref={containerRef}
          className="relative bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-xl w-full h-[650px] group"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {/* Floating particles effect */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-white"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  opacity: particle.opacity,
                  filter: "blur(1px)",
                  background:
                    "linear-gradient(to right, rgba(255,255,255,0.8), rgba(219,39,119,0.3))",
                }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(219, 39, 119, 0)",
                    "0 0 2px rgba(219, 39, 119, 0.3)",
                    "0 0 0px rgba(219, 39, 119, 0)",
                  ],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Enhanced decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-10 left-10 w-40 h-40 rounded-full bg-pink-300/40 blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-purple-300/40 blur-3xl"
              animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/3 left-1/2 w-32 h-32 rounded-full bg-fuchsia-300/30 blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            <motion.div
              className="absolute bottom-1/3 left-1/4 w-36 h-36 rounded-full bg-violet-300/30 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 to-purple-200/20 backdrop-blur-[2px] opacity-0 transition-opacity duration-700 group-hover:opacity-50" />
          </div>

          {/* Product image with enhanced effect */}
          <div className="relative z-10 w-full h-full flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  scale: isZoomed ? 1.05 : 1,
                  x: isZoomed ? (mousePosition.x - 0.5) * 30 : 0,
                  y: isZoomed ? (mousePosition.y - 0.5) * 30 : 0,
                }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  opacity: { duration: 0.5 },
                  scale: {
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  },
                  x: {
                    duration: 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                  y: {
                    duration: 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  },
                }}
                style={{
                  rotateX,
                  rotateY,
                  scale,
                  perspective: 1000,
                  transformStyle: "preserve-3d",
                }}
                className="w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full transform-gpu">
                  <Image
                    src={images[currentImageIndex]}
                    alt="Product image"
                    fill
                    className="object-cover drop-shadow-2xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />

                  {/* Enhanced shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isZoomed ? 0.8 : 0,
                      left: isZoomed ? "100%" : "-100%",
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: isZoomed ? Infinity : 0,
                      repeatDelay: 2,
                    }}
                  />

                  {/* Second shine effect for more dynamic look */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-100/10 to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isZoomed ? 0.6 : 0,
                      right: isZoomed ? "100%" : "-100%",
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: isZoomed ? Infinity : 0,
                      repeatDelay: 2.5,
                      delay: 0.8,
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Image indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2 rounded-full transition-all ${index === currentImageIndex ? "w-8 bg-violet-600" : "w-2 bg-gray-300"}`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
