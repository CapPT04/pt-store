import React, { useState, useEffect, useCallback } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./auth-card.css";

interface AuthCardProps {
  onLogin?: (email: string, password: string, remember: boolean) => void;
  onSignUp?: (
    name: string,
    email: string,
    password: string,
    agreeTerms: boolean,
  ) => void;
  onForgotPassword?: () => void;
  onSocialLogin?: (provider: "google" | "facebook") => void;
}

const AuthCard = ({
  onLogin = () => {},
  onSignUp = () => {},
  onForgotPassword = () => {},
  onSocialLogin = () => {},
}: AuthCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Add event listener for debugging
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "f") {
        console.log("Manual flip triggered");
        setIsFlipped((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Use useCallback to ensure the function reference remains stable
  const flipToSignUp = useCallback(() => {
    console.log("Flipping to sign up form");
    setIsFlipped(true);
  }, []);

  const flipToLogin = useCallback(() => {
    console.log("Flipping to login form");
    setIsFlipped(false);
  }, []);

  // Debug current state
  useEffect(() => {
    console.log(
      "Current flip state:",
      isFlipped ? "showing signup" : "showing login",
    );
  }, [isFlipped]);

  if (!mounted) return null;

  return (
    <div className="auth-card-container">
      <div className="auth-card-inner">
        <div
          className={`auth-card-flipper ${isFlipped ? "flipped" : ""}`}
          data-testid="auth-card-flipper"
        >
          <div className="auth-card-front">
            <LoginForm
              onLogin={onLogin}
              onForgotPassword={onForgotPassword}
              onSocialLogin={onSocialLogin}
              onSignUpClick={flipToSignUp}
            />
          </div>
          <div className="auth-card-back">
            <SignUpForm
              onSignUp={onSignUp}
              onSocialSignUp={onSocialLogin}
              onBackToLogin={flipToLogin}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
