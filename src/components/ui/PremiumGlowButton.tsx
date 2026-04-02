"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PremiumGlowButtonProps {
  children: ReactNode;
  glowColor?: string;
  outerGlowColor?: string;
  innerColor?: string;
  textColor?: string;
  spinSpeed?: number;
  borderWidth?: number;
  paddingX?: number;
  paddingY?: number;
  fontSize?: number;
  showOuterGlow?: boolean;
  glowBlur?: number;
  glowOffsetY?: number;
  className?: string;
  onClick?: () => void;
}

export function PremiumGlowButton({
  children,
  glowColor = "rgba(255, 255, 255, 0.5)",
  outerGlowColor = "rgba(255, 255, 255, 0.07)",
  innerColor = "#0a0a0a",
  textColor = "#FFFFFF",
  spinSpeed = 4,
  borderWidth = 1,
  paddingX = 36,
  paddingY = 18,
  fontSize = 16,
  showOuterGlow = true,
  glowBlur = 30,
  glowOffsetY = 10,
  className,
  onClick,
}: PremiumGlowButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      className={cn("relative cursor-pointer", className)}
      style={{
        padding: borderWidth,
        borderRadius: 999,
        overflow: "hidden",
        boxShadow: showOuterGlow
          ? `0px ${glowOffsetY}px ${glowBlur}px 0px ${outerGlowColor}`
          : "none",
        background: "transparent",
        border: "none",
        display: "inline-flex",
      }}
    >
      {/* Spinning conic gradient — creates the animated border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: spinSpeed,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: "-200%",
          background: `conic-gradient(from 0deg, transparent 0%, ${glowColor} 15%, transparent 40%, transparent 100%)`,
          zIndex: 0,
        }}
      />

      {/* Inner button face */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          backgroundColor: innerColor,
          borderRadius: 999,
          padding: `${paddingY}px ${paddingX}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: textColor,
            whiteSpace: "nowrap",
            fontFamily: "Inter, system-ui, sans-serif",
            fontSize: `${fontSize}px`,
            fontWeight: 500,
            letterSpacing: "0.02em",
            position: "relative",
            zIndex: 2,
          }}
        >
          {children}
        </span>
      </div>
    </motion.button>
  );
}
