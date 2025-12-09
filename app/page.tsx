"use client"

import { ScreenCapture } from "@/components/ui/screen-capture"
import { SnapCatLogo } from "@/components/ui/snapcat-logo"

export default function Home() {
  const colors = {
    textMain: "#ffffff",
    textSecondary: "#94a3b8",
    baseBg: "#09090b",
  }

  return (
    <div className="w-full min-h-screen bg-black flex items-center justify-center">
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 60s linear infinite;
        }
        @keyframes bounce-in {
          0% { transform: scale(0.8); opacity: 0; }
          50% { transform: scale(1.05); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
      `}</style>

      {/* Main Container */}
      <div
        className="relative w-full h-screen overflow-hidden shadow-2xl"
        style={{
          backgroundColor: colors.baseBg,
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        }}
      >
        {/* Background Decorative Layer */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            perspective: "1200px",
            transform: "perspective(1200px) rotateX(15deg)",
            transformOrigin: "center bottom",
            opacity: 1,
          }}
        >
          {/* Image 3 (Back) - spins clockwise */}
          <div className="absolute inset-0 animate-spin-slow">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "2000px",
                height: "2000px",
                transform: "translate(-50%, -50%) rotate(279.05deg)",
                zIndex: 0,
              }}
            >
              <img
                src="https://framerusercontent.com/images/oqZEqzDEgSLygmUDuZAYNh2XQ9U.png?scale-down-to=2048"
                alt=""
                className="w-full h-full object-cover opacity-50"
              />
            </div>
          </div>

          {/* Image 2 (Middle) - spins counter-clockwise */}
          <div className="absolute inset-0 animate-spin-slow-reverse">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "1000px",
                height: "1000px",
                transform: "translate(-50%, -50%) rotate(304.42deg)",
                zIndex: 1,
              }}
            >
              <img
                src="https://framerusercontent.com/images/UbucGYsHDAUHfaGZNjwyCzViw8.png?scale-down-to=1024"
                alt=""
                className="w-full h-full object-cover opacity-60"
              />
            </div>
          </div>

          {/* Image 1 (Front) - spins clockwise */}
          <div className="absolute inset-0 animate-spin-slow">
            <div
              className="absolute top-1/2 left-1/2"
              style={{
                width: "800px",
                height: "800px",
                transform: "translate(-50%, -50%) rotate(48.33deg)",
                zIndex: 2,
              }}
            >
              <img
                src="https://framerusercontent.com/images/Ans5PAxtJfg3CwxlrPMSshx2Pqc.png"
                alt="App Icon"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: `linear-gradient(to top, ${colors.baseBg} 10%, rgba(9, 9, 11, 0.8) 40%, transparent 100%)`,
          }}
        />

        {/* Logo in top left */}
        <div className="absolute top-8 left-8 z-30">
          <SnapCatLogo size="md" />
        </div>

        {/* Content Container */}
        <div className="relative z-20 w-full h-full flex flex-col items-center justify-end pb-24 gap-6 px-4">
          <div className="mb-2">
            <SnapCatLogo size="lg" />
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight px-4" style={{ color: colors.textMain }}>
            Snap it. Save it. Purrfect it.
          </h1>

          <p className="text-base sm:text-lg font-medium text-center px-4" style={{ color: colors.textSecondary }}>
            Screenshot with purrfection—no claws attached.
          </p>

          {/* Screen Capture Component */}
          <div className="w-full max-w-2xl mt-4">
            {/* Mobile Detection Message */}
            <div className="md:hidden mb-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
              <p className="text-yellow-200 text-sm text-center">
                📱 Screen capture works best on desktop. Please visit on a computer for full functionality.
              </p>
            </div>
            <ScreenCapture />
          </div>
        </div>
      </div>
    </div>
  )
}
