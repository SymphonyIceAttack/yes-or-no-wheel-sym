"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { type LanguageType, t } from "@/lib/translations";

interface DecisionWheelProps {
  language: LanguageType;
}

export function DecisionWheel({ language }: DecisionWheelProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);

    const answer: "yes" | "no" = Math.random() > 0.5 ? "yes" : "no";
    const baseRotation = answer === "yes" ? 90 : 270;
    const extraSpins = 5 + Math.floor(Math.random() * 3);
    const randomOffset = Math.random() * 40 - 20;
    const finalRotation =
      rotation + extraSpins * 360 + baseRotation + randomOffset;

    setRotation(finalRotation);

    setTimeout(() => {
      setIsSpinning(false);
    }, 3500);
  };

  return (
    <div className="flex flex-col items-center gap-8 mb-16">
      <div className="text-center mb-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-balance">
          {t("heroTitle", language)}
        </h1>
        <p className="text-xl text-white/90 text-pretty">
          {t("cantDecide", language)}
        </p>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Wheel container with pointer */}
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {/* Pointer at top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
            <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[28px] border-t-[#FDB813]" />
          </div>

          {/* Spinning wheel */}
          <div
            className="absolute inset-0 rounded-full transition-transform duration-[3500ms] ease-out"
            style={{
              transform: `rotate(${rotation}deg)`,
              transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              {/* NO side - Red */}
              <div className="absolute inset-0 bg-[#EF5350] w-1/2 rounded-l-full flex items-center justify-center">
                <span className="text-white text-6xl font-bold -ml-12">
                  {t("no", language)}
                </span>
              </div>
              {/* YES side - Green */}
              <div className="absolute inset-0 left-1/2 bg-[#66BB6A] w-1/2 rounded-r-full flex items-center justify-center">
                <span className="text-white text-6xl font-bold ml-12">
                  {t("yes", language)}
                </span>
              </div>
            </div>
          </div>

          {/* Center circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-white shadow-xl" />
          </div>
        </div>

        {/* Spin button */}
        <Button
          size="lg"
          onClick={spinWheel}
          disabled={isSpinning}
          className="px-12 py-7 text-xl font-bold bg-gradient-to-r from-[#FDB813] to-[#FF9800] hover:from-[#FDB813]/90 hover:to-[#FF9800]/90 text-white shadow-xl hover:shadow-2xl transition-all disabled:opacity-50 rounded-full"
        >
          <svg
            className="w-6 h-6 mr-2"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          {isSpinning ? t("spinning", language) : t("spinButton", language)}
        </Button>

        {/* Instructions */}
        <div className="text-center text-white/80 max-w-md space-y-1">
          <p className="text-sm text-pretty">{t("instruction1", language)}</p>
          <p className="text-sm text-pretty">{t("instruction2", language)}</p>
          <p className="text-sm text-pretty">{t("instruction3", language)}</p>
        </div>
      </div>
    </div>
  );
}
