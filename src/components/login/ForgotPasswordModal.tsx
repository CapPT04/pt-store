import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface ForgotPasswordModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  onSubmit?: (email: string) => void;
}

const ForgotPasswordModal = ({
  isOpen = true,
  onClose = () => { },
  onSubmit = () => { },
}: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      onSubmit(email);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center text-purple-800">
              {isSuccess ? "Yêu cầu đã được gửi" : "Quên mật khẩu"}
            </DialogTitle>
            <DialogDescription className="text-center text-gray-600">
              {isSuccess
                ? "Chúng tôi đã gửi email hướng dẫn khôi phục mật khẩu. Vui lòng kiểm tra hộp thư của bạn."
                : "Nhập địa chỉ email của bạn và chúng tôi sẽ gửi cho bạn liên kết để đặt lại mật khẩu."}
            </DialogDescription>
          </DialogHeader>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@ptstore.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="border-pink-200 focus-visible:ring-purple-400"
                />
              </div>
              <DialogFooter className="mt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Đang xử lý..." : "Gửi yêu cầu"}
                </Button>
              </DialogFooter>
            </form>
          ) : (
            <DialogFooter className="mt-4">
              <Button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2 px-4 rounded-md transition-all duration-300 transform hover:scale-[1.02]"
              >
                Quay lại đăng nhập
              </Button>
            </DialogFooter>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default ForgotPasswordModal;
