import React, { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Mail, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SignupFormProps {
  onSignup?: (name: string, email: string, password: string) => void;
  onBackToLogin?: () => void;
}

const SignupForm = ({
  onSignup = () => { },
  onBackToLogin = () => { },
}: SignupFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!name) newErrors.name = "Tên không được để trống";
    if (!email) newErrors.email = "Email không được để trống";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email không hợp lệ";

    if (!password) newErrors.password = "Mật khẩu không được để trống";
    else if (password.length < 8)
      newErrors.password = "Mật khẩu phải có ít nhất 8 ký tự";

    if (password !== confirmPassword)
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp";

    if (!acceptTerms)
      newErrors.acceptTerms = "Vui lòng đồng ý với điều khoản sử dụng";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      onSignup(name, email, password);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-md p-6 sm:p-8 bg-white rounded-2xl shadow-2xl border border-gray-100 backdrop-blur-sm bg-opacity-95 h-full overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="text-center"
      >
        <h2 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Đăng Ký
        </h2>
        <p className="mt-4 text-base text-gray-600 font-medium">
          Tạo tài khoản để trải nghiệm P&T Store
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="mt-4 space-y-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Tên đầy đủ
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={cn(
                "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200",
                errors.name && "border-red-500"
              )}
              placeholder="Nhập tên đầy đủ"
            />
          </div>
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <Input
              id="signup-email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={cn(
                "w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200",
                errors.email && "border-red-500"
              )}
              placeholder="email@example.com"
            />
          </div>
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Mật khẩu
          </label>
          <div className="relative">
            <Input
              id="signup-password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={cn(
                "w-full pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200",
                errors.password && "border-red-500"
              )}
              placeholder="Tạo mật khẩu (ít nhất 8 ký tự)"
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
          {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Xác nhận mật khẩu
          </label>
          <div className="relative">
            <Input
              id="confirm-password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={cn(
                "w-full pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200",
                errors.confirmPassword && "border-red-500"
              )}
              placeholder="Xác nhận mật khẩu"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
        </div>

        <div className="flex items-center">
          <Checkbox
            id="accept-terms"
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(checked === true)}
            className={cn(
              "h-4 w-4 text-pink-600 focus:ring-pink-500 border-gray-300 rounded",
              errors.acceptTerms && "border-red-500"
            )}
          />
          <label
            htmlFor="accept-terms"
            className={cn(
              "ml-2 block text-xs text-gray-700 my-1",
              errors.acceptTerms && "text-red-500"
            )}
          >
            Tôi đồng ý với Điều khoản sử dụng và Chính sách bảo mật
          </label>
        </div>
        {errors.acceptTerms && (
          <p className="text-red-500 text-xs mt-1">{errors.acceptTerms}</p>
        )}

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
            {isLoading ? "Đang xử lý..." : "Đăng ký"}
          </Button>
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Đã có tài khoản?{" "}
          <button
            type="button"
            onClick={onBackToLogin}
            className="font-medium text-pink-600 hover:text-pink-500 focus:outline-none hover:underline transition duration-200"
          >
            Đăng nhập ngay
          </button>
        </p>
      </div>
    </motion.div>
  );
};

export default SignupForm;
