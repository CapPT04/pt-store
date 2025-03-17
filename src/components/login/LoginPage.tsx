import React from "react";
import AuthCard from "./AuthCard";
import ProductShowcase from "./ProductShowcase";
import "./auth-card.css";

const LoginPage = () => {
  const handleLogin = (email: string, password: string, remember: boolean) => {
    console.log("Login:", { email, password, remember });
    // Implement actual login logic here
  };

  const handleSignUp = (
    name: string,
    email: string,
    password: string,
    agreeTerms: boolean,
  ) => {
    console.log("Sign up:", { name, email, password, agreeTerms });
    // Implement actual sign up logic here
  };

  const handleForgotPassword = () => {
    console.log("Forgot password");
    // Implement forgot password logic here
  };

  const handleSocialLogin = (provider: "google" | "facebook") => {
    console.log(`Social login with ${provider}`);
    // Implement social login logic here
  };

  return (
    <div className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <AuthCard
            onLogin={handleLogin}
            onSignUp={handleSignUp}
            onForgotPassword={handleForgotPassword}
            onSocialLogin={handleSocialLogin}
          />
        </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <ProductShowcase />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
