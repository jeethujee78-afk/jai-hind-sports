/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

interface LogoProps {
  className?: string;
  iconSize?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  textColor?: string;
}

/**
 * Redesigned minimal, modern, luxury-grade JAI HIND SPORTS logo mark.
 * Symbolizes Energy, Speed, and Tricolour Pride through three aerodynamic chevron ribbons 
 * sweeping forward/upward, representing peak performance and modern trust.
 * 
 * - No clipart, no cricket silhouettes, no complicated graphics.
 * - Perfectly scalable and readable down to 16x16px.
 */
export function LogoIcon({ className = "", iconSize = "md" }: LogoProps) {
  // Map size keys to dimensions
  const sizeMap = {
    xs: 16,
    sm: 24,
    md: 32,
    lg: 48,
    xl: 64,
  };
  const size = typeof iconSize === "number" ? iconSize : sizeMap[iconSize] || 32;

  return (
    <svg
      className={`inline-block transition-transform duration-500 ease-out ${className}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Deep, metallic linear gradients for luxury aesthetics */}
        <linearGradient id="saffronGradient" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#E65100" />
        </linearGradient>
        <linearGradient id="whiteGradient" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#B0BEC5" />
        </linearGradient>
        <linearGradient id="greenGradient" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#138808" />
          <stop offset="100%" stopColor="#0B5205" />
        </linearGradient>
        {/* Radial backing glow for premium depth */}
        <radialGradient id="softSaffronGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF9933" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Decorative dynamic ambient glow */}
      <circle cx="60" cy="60" r="50" fill="url(#softSaffronGlow)" />

      {/* THREE INTERSECTING GEOMETRIC VELOCITY CHEVRONS */}
      {/* 1. Saffron Chevron (Top: Energy & Passion) */}
      <path
        d="M20 32 L44 20 L84 60 L60 72 Z"
        fill="url(#saffronGradient)"
        className="transition-all duration-500 hover:opacity-100"
      />

      {/* 2. Platinum White Chevron (Center: Unity & Trust) */}
      <path
        d="M36 48 L60 36 L100 76 L76 88 Z"
        fill="url(#whiteGradient)"
        opacity="0.95"
      />

      {/* 3. Emerald Green Chevron (Bottom: Performance & Stamina) */}
      <path
        d="M52 64 L76 52 L116 92 L92 104 Z"
        fill="url(#greenGradient)"
      />
    </svg>
  );
}

/**
 * Horizontal Full Brand Logo & Wordmark combination.
 * Perfect for Navbar, top headers, invoices, etc.
 */
export function LogoFull({ className = "", iconSize = "md", textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      <div className="relative flex items-center justify-center p-2 rounded-xl bg-white/5 border border-white/10 shadow-inner hover:border-brand-saffron/30 transition-all duration-300">
        <LogoIcon iconSize={iconSize} className="hover:scale-110 hover:rotate-3" />
      </div>
      <div className="flex flex-col">
        {/* "JAI HIND" wordmark: Bold tracking, luxury sans layout */}
        <span className={`text-base md:text-lg font-black tracking-[0.15em] ${textColor} uppercase font-sans leading-none`}>
          JAI HIND
        </span>
        {/* "SPORTS" subtitle: Elegant micro mono tracking */}
        <span className="text-[9px] font-mono tracking-[0.45em] text-gray-400 uppercase leading-none mt-1.5 transition-colors duration-300 hover:text-brand-saffron">
          SPORTS
        </span>
      </div>
    </div>
  );
}

/**
 * Centered Vertical Stack Logo & Wordmark.
 * Used on shopping bags, t-shirts, packaging boxes, and letterheads.
 */
export function LogoVertical({ className = "", iconSize = "lg", textColor = "text-white" }: LogoProps) {
  return (
    <div className={`flex flex-col items-center text-center gap-4 ${className}`}>
      <div className="relative flex items-center justify-center p-4 rounded-2xl bg-white/5 border border-white/10 shadow-lg">
        <LogoIcon iconSize={iconSize} className="hover:scale-105 transition-transform" />
      </div>
      <div className="flex flex-col items-center">
        <span className={`text-lg md:text-xl font-black tracking-[0.2em] ${textColor} uppercase font-sans leading-none`}>
          JAI HIND
        </span>
        <div className="flex items-center justify-center gap-1.5 mt-2">
          <div className="w-1.5 h-[1.5px] bg-[#FF9933]" />
          <span className="text-[10px] font-mono tracking-[0.5em] text-gray-400 uppercase leading-none pl-[0.5em]">
            SPORTS
          </span>
          <div className="w-1.5 h-[1.5px] bg-[#138808]" />
        </div>
      </div>
    </div>
  );
}
