import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Eye, EyeOff, Facebook, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoginFormProps {
  onLogin?: (email: string, password: string, remember: boolean) => void;
  onForgotPassword?: () => void;
  onSocialLogin?: (provider: "google" | "facebook") => void;
  onSignupClick?: () => void;
}

const LoginForm = ({
  onLogin = () => {},
  onForgotPassword = () => {},
  onSocialLogin = () => {},
  onSignupClick = () => {},
}: LoginFormProps) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@ptstore.com");
  const [password, setPassword] = useState("password123");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simple validation for demo purposes
    if (email === "user@ptstore.com" && password === "password123") {
      // Simulate API call
      setTimeout(() => {
        onLogin(email, password, remember);
        setIsLoading(false);
        navigate("/dashboard");
      }, 1000);
    } else {
      setTimeout(() => {
        setError("Email hoặc mật khẩu không đúng");
        setIsLoading(false);
      }, 1000);
    }
  };

  const handleGoogleLogin = () => {
    setIsLoading(true);
    onSocialLogin("google");
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  const handleFacebookLogin = () => {
    setIsLoading(true);
    onSocialLogin("facebook");
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full items-center max-w-md p-6 sm:p-8  bg-white rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm bg-opacity-95 h-[525px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Đăng Nhập
        </h2>
        <p className="mt-2 text-base text-gray-600 font-medium">
          Thời trang & Mỹ phẩm cao cấp dành cho bạn
        </p>
      </motion.div>

      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md border border-red-100">
          {error}
        </div>
      )}

      <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
        <div className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email hoặc tên đăng nhập
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <Input
                id="email"
                name="email"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="Nhập email hoặc tên đăng nhập"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Mật khẩu
            </label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                placeholder="Nhập mật khẩu"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              id="remember-me"
              checked={remember}
              onCheckedChange={(checked) => setRemember(checked === true)}
              className="h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-700"
            >
              Nhớ mật khẩu
            </label>
          </div>

          <div className="text-sm">
            <button
              type="button"
              onClick={onForgotPassword}
              className="font-medium text-pink-600 hover:text-pink-500 focus:outline-none hover:underline transition duration-200"
            >
              Quên mật khẩu?
            </button>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            disabled={isLoading}
            className={cn(
              "w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white",
              "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500",
              "transition-all duration-300 transform hover:translate-y-[-1px] hover:shadow-lg",
            )}
          >
            {isLoading ? "Đang xử lý..." : "Đăng nhập"}
          </Button>
        </div>
      </form>

      <div className="mt-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Hoặc đăng nhập với
            </span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <Button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:shadow transition-all duration-200"
            variant="outline"
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
            </svg>
            <span className="ml-2">Google</span>
          </Button>

          <Button
            type="button"
            onClick={handleFacebookLogin}
            className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 hover:shadow transition-all duration-200"
            variant="outline"
          >
            <Facebook className="w-5 h-5 text-blue-600" />
            <span className="ml-2">Facebook</span>
          </Button>
        </div>
      </div>

      <div className="text-center mt-4 text-sm text-gray-600">
        Chưa có tài khoản?{" "}
        <button
          type="button"
          onClick={onSignupClick}
          className="font-medium text-pink-600 hover:text-pink-500 hover:underline transition-colors duration-200"
        >
          Đăng ký ngay
        </button>
      </div>
    </motion.div>
  );
};

export default LoginForm;
