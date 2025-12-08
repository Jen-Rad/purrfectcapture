"use client"

import Image from "next/image"

export const SnapCatLogo = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = {
    sm: { container: "h-8", text: "text-lg", icon: "w-8 h-8" },
    md: { container: "h-12", text: "text-2xl", icon: "w-12 h-12" },
    lg: { container: "h-16", text: "text-3xl", icon: "w-16 h-16" },
  }

  const s = sizes[size]

  return (
    <div className={`flex items-center gap-3 ${s.container}`}>
      {/* Cat Image Icon */}
      <div className={`relative ${s.icon} rounded-full overflow-hidden ring-2 ring-pink-500/50 shadow-lg bg-pink-400`}>
        <img
          src="/cat-excited.jpg"
          alt="SnapCat Logo"
          className="w-full h-full object-cover"
        />
        {/* Camera Flash Overlay */}
        <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg ring-1 ring-white/50" />
      </div>

      {/* Logo Text */}
      <div className="flex flex-col leading-none">
        <span className={`font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ${s.text}`}>
          SnapCat
        </span>
        <span className="text-[10px] text-zinc-400 font-medium tracking-wide">
          PURRFECT CAPTURES
        </span>
      </div>
    </div>
  )
}
