"use client";

import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ClientLayout } from "@/components/client-layout";
import { type Language, languages } from "@/lib/lang";

export default function WheelPage() {
  const params = useParams();
  const lang = params.lang as Language;
  const dict = languages[lang];

  const [isSpinning, setIsSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const [spinHistory, setSpinHistory] = useState<string[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const spinWheel = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setResult(null);

    // Generate random rotation between 720 and 4320 degrees (2-12 full rotations)
    const spinDegrees = Math.random() * 3600 + 720;
    const newRotation = rotation + spinDegrees;
    setRotation(newRotation);

    // Create a ticking sound effect during spin (visual feedback)
    let tickCount = 0;
    const maxTicks = 30; // 3 seconds at 100ms intervals

    intervalRef.current = setInterval(() => {
      tickCount++;
      if (tickCount >= maxTicks) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }

        // Determine result based on final angle
        // Since the wheel rotates, we need to calculate where the pointer is pointing
        // Pointer is at 12 o'clock (top), and we check the color at that position
        const finalAngle = newRotation % 360;

        // The pointer is at the top (12 o'clock position)
        // We need to determine which segment the pointer is pointing to
        // After rotation, the angle at the pointer position is:
        // pointerAngle = (360 - finalAngle) % 360
        // Because the wheel rotates clockwise, the pointer position changes counter-clockwise
        const pointerAngle = (360 - finalAngle) % 360;

        // YES segment: 0-180 degrees (green)
        // NO segment: 180-360 degrees (red)
        const isYes = pointerAngle >= 0 && pointerAngle < 180;
        const newResult = isYes ? "YES" : "NO";

        setResult(newResult);
        setSpinHistory((prev) => [newResult, ...prev.slice(0, 4)]); // Keep last 5 results
        setIsSpinning(false);
      }
    }, 100);
  }, [isSpinning, rotation]);

  // Keyboard support
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault();
        spinWheel();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [spinWheel]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <ClientLayout>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-purple-400 via-blue-500 to-indigo-600 dark:from-purple-900 dark:via-blue-900 dark:to-indigo-900 font-sans transition-colors duration-500">
        <main className="flex flex-col items-center gap-3 sm:gap-6 px-3 sm:px-6 md:gap-8 md:p-8 w-full max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4 tracking-tight animate-pulse drop-shadow-lg">
              {dict.wheel.title}
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-sm sm:max-w-md mx-auto drop-shadow">
              {dict.wheel.subtitle}
            </p>
          </div>

          {/* Wheel Container */}
          <div className="relative flex justify-center">
            {/* Wheel Pointer */}
            <div className="absolute -top-1 sm:-top-2 left-1/2 transform -translate-x-1/2 z-10">
              <div className="w-0 h-0 border-l-[12px]   sm:border-l-[20px] sm:border-r-[20px] border-b-[18px]  sm:border-b-[30px] border-l-transparent border-r-transparent border-b-yellow-400 drop-shadow-lg animate-bounce"></div>
            </div>

            {/* Wheel Button */}
            <button
              type="button"
              onClick={spinWheel}
              disabled={isSpinning}
              className={`relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 sm:border-6 md:border-8 border-white shadow-2xl overflow-hidden transition-all duration-300 select-none focus:outline-none focus:ring-4 focus:ring-yellow-400/50 ${
                isSpinning ? "animate-spin" : "hover:scale-105 active:scale-95"
              }`}
              style={{
                background: `conic-gradient(from 0deg, #22c55e 0deg 180deg, #ef4444 180deg 360deg)`,
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning ? "none" : "transform 3s ease-out",
                touchAction: "manipulation", // 防止双击缩放
              }}
              aria-label="旋转转盘"
            >
              {/* YES Section */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold select-none pointer-events-none transform rotate-0 drop-shadow-lg">
                  YES
                </div>
              </div>

              {/* NO Section */}
              <div className="absolute inset-0 flex items-center justify-center transform rotate-180">
                <div className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold select-none pointer-events-none drop-shadow-lg">
                  NO
                </div>
              </div>

              {/* Center Circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg border-2 sm:border-3 md:border-4 border-gray-200"></div>

              {/* Spinning Indicator */}
              {isSpinning && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-ping"></div>
                </div>
              )}
            </button>
          </div>

          {/* Spin Button */}
          <button
            type="button"
            onClick={spinWheel}
            disabled={isSpinning}
            className={`w-48 sm:w-56 md:w-60 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-semibold rounded-full shadow-lg transition-all duration-200 transform touch-manipulation select-none ${
              isSpinning
                ? "bg-gray-400 text-gray-600 cursor-not-allowed scale-95"
                : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 active:scale-95 hover:scale-105"
            }`}
          >
            {isSpinning ? dict.wheel.spinning : dict.wheel.spinButton}
          </button>

          {/* Result Display */}
          {result && (
            <div
              className={`text-center p-4 sm:p-6 rounded-xl shadow-lg backdrop-blur-sm border-2 animate-bounce mx-4 max-w-sm w-full ${
                result === "YES"
                  ? "bg-green-500/20 border-green-400 text-green-100"
                  : "bg-red-500/20 border-red-400 text-red-100"
              }`}
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                {dict.wheel.result}
              </h2>
              <div
                className={`text-4xl sm:text-5xl md:text-6xl font-black ${
                  result === "YES" ? "text-green-400" : "text-red-400"
                }`}
              >
                {result}
              </div>
              <p className="text-xs sm:text-sm mt-2 opacity-80">
                {dict.wheel.decisionMade}
              </p>
            </div>
          )}

          {/* Spin History */}
          {spinHistory.length > 0 && (
            <div className="text-center max-w-xs sm:max-w-md px-4">
              <h3 className="text-white font-semibold mb-2 text-sm sm:text-base drop-shadow">
                {dict.wheel.recentResults}
              </h3>
              <div className="flex gap-1 sm:gap-2 justify-center flex-wrap">
                {spinHistory.map((result, index) => (
                  <span
                    key={`spin-${Date.now()}-${index}`}
                    className={`px-2 py-1 sm:px-3 text-xs sm:text-sm font-bold ${
                      result === "YES"
                        ? "bg-green-500/30 text-green-300"
                        : "bg-red-500/30 text-red-300"
                    }`}
                  >
                    {result}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="text-center max-w-xs sm:max-w-md px-4">
            <p className="text-white/80 text-xs sm:text-sm drop-shadow">
              {dict.wheel.instructions}
            </p>
            <p className="text-white/70 text-xs mt-2">
              {dict.wheel.perfectFor}
            </p>
          </div>
        </main>
      </div>
    </ClientLayout>
  );
}
