import React, { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  isFlipped: boolean;
}

const FlipCard: React.FC<FlipCardProps> = ({
  frontContent,
  backContent,
  isFlipped,
}) => {
  return (
    <div className="flip-card-container w-full perspective-1000">
      <div
        className={`flip-card relative w-full transition-transform duration-700 transform-style-3d ${isFlipped ? "rotate-y-180" : ""}`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.7s",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="flip-card-front absolute w-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {frontContent}
        </div>
        <div
          className="flip-card-back absolute w-full backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
