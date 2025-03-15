"use client";

import { useEffect, useState, useCallback, JSX } from "react";
import { Award, Users, Zap, Shield, Bell } from "lucide-react";

import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

interface Feature {
  icon: JSX.Element;
  text: string;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const features: Feature[] = [
  { icon: <Award className="w-4 h-4" />, text: "96% uptime" },
  { icon: <Users className="w-4 h-4" />, text: "role features" },
  { icon: <Zap className="w-4 h-4" />, text: "quick actions" },
  { icon: <Shield className="w-4 h-4" />, text: "server security" },
  { icon: <Bell className="w-4 h-4" />, text: "simple warning system" },
];

export function FloatingFeatures() {
  const [visibleFeatures, setVisibleFeatures] = useState(features.slice(0, 3));
  const [transitioning, setTransitioning] = useState(false);

  const rotateFeatures = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setVisibleFeatures((current) => {
        const newFeatures = [...current];
        newFeatures.push(
          features[(features.indexOf(newFeatures[2]) + 1) % features.length]
        );
        return newFeatures.slice(1);
      });
      setTransitioning(false);
    }, 600);
  }, []);

  useEffect(() => {
    const interval = setInterval(rotateFeatures, 4000);
    return () => clearInterval(interval);
  }, [rotateFeatures]);

  return (
    <div className="relative h-[240px] w-full max-w-[260px]">
      {visibleFeatures.map((feature, index) => (
        <div
          key={`${feature.text}-${index}`}
          className={cn(
            "absolute left-0 w-full transition-all duration-1000 ease-in-out",
            "bg-gray-800/40 backdrop-blur-sm rounded-lg px-3 py-2.5",
            "border border-gray-700/50 shadow-lg",
            "flex items-center gap-2 text-gray-200",
            "backdrop-filter backdrop-blur-sm",
            {
              "opacity-0": transitioning && index === 0,
              "opacity-100": !transitioning || index !== 0,
            }
          )}
          style={{
            top: `${index * 75}px`,
            transform: `
              translateY(${transitioning ? -75 : 0}px)
              translateX(${index === 1 ? 8 : 0}px)
              scale(${index === 1 ? 1.03 : 1})
            `,
            zIndex: 3 - index,
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div className="text-gray-400">
            <span className="w-5 h-5 inline-block">{feature.icon}</span>
          </div>
          <span className="font-mono text-sm whitespace-pre-wrap leading-tight">
            {feature.text.split(" ").join("\n")}
          </span>
        </div>
      ))}
    </div>
  );
}
