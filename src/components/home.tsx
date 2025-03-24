import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "./login/LoginForm";
import SignupForm from "./login/SignupForm";
import ProductShowcase from "./login/ProductShowcase";
import ForgotPasswordModal from "./login/ForgotPasswordModal";
import FlipCard from "./login/FlipCard";

const Home = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleLogin = (email: string, password: string, remember: boolean) => {
    console.log("Login attempt:", { email, password, remember });
    // Implement actual login logic here
  };

  const handleSignup = (name: string, email: string, password: string) => {
    console.log("Signup attempt:", { name, email, password });
    // Implement actual signup logic here
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleForgotPasswordClose = () => {
    setShowForgotPassword(false);
  };

  const handleForgotPasswordSubmit = (email: string) => {
    console.log("Password reset requested for:", email);
    // Implement actual password reset logic here
  };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    console.log(`Social login with ${provider}`);
    // Implement actual social login logic here
  };

  const handleFlipToSignup = () => {
    setIsFlipped(true);
  };

  const handleFlipToLogin = () => {
    setIsFlipped(false);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80"
          alt="Elegant fashion background"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-rose-800/50 backdrop-blur-sm mix-blend-overlay"></div>
      </div>
      <div
        className="container mx-auto px-6 py-6 flex-grow flex flex-col items-center relative z-10"
        style={{ maxWidth: "1280px" }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&family=Montserrat:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <header className="mb-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-500 to-rose-600 font-['Pacifico',_cursive] tracking-wide pt-2 drop-shadow-[0_8px_8px_rgba(157,23,77,0.4)] transform hover:scale-105 transition-transform duration-300 relative "
            style={{
              textShadow:
                "0 0 5px rgba(157,23,77,0.3), 0 0 10px rgba(157,23,77,0.2), 0 0 15px rgba(157,23,77,0.1)",
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
            }}
          >
            P&T Store
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-300 to-purple-400 mt-2 text-2xl font-medium tracking-wide font-['Pacifico',_cursive] drop-shadow-md"
            style={{
              textShadow: "0 2px 4px rgba(157,23,77,0.3)",
              WebkitTextStroke: "0.5px rgba(255,255,255,0.4)",
            }}
          >
            Tỏa sáng với phong cách riêng
          </motion.p>
        </header>

        <div className="flex-grow flex flex-col lg:flex-row items-stretch justify-center gap-4 mx-auto w-full max-w-7xl h-[525px]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-3/5 h-[525px] rounded-2xl overflow-hidden shadow-xl hidden lg:block"
          >
            <ProductShowcase />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex justify-center items-start"
          >
            <div className="w-full max-w-md">
              <FlipCard
                isFlipped={isFlipped}
                frontContent={
                  <LoginForm
                    onLogin={handleLogin}
                    onForgotPassword={handleForgotPassword}
                    onSocialLogin={handleSocialLogin}
                    onSignupClick={handleFlipToSignup}
                  />
                }
                backContent={
                  <SignupForm
                    onSignup={handleSignup}
                    onBackToLogin={handleFlipToLogin}
                  />
                }
              />
            </div>
          </motion.div>
        </div>
      </div>

      <ForgotPasswordModal
        isOpen={showForgotPassword}
        onClose={handleForgotPasswordClose}
        onSubmit={handleForgotPasswordSubmit}
      />
    </div>
  );
};

export default Home;
