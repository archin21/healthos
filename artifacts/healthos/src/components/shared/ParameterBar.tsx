import React from "react";

interface ParameterBarProps {
  value: number;
  normalLow: number;
  normalHigh: number;
  unit: string;
}

export function ParameterBar({ value, normalLow, normalHigh, unit }: ParameterBarProps) {
  const rangeSize = normalHigh - normalLow;
  const lowerBound = normalLow > 0 ? normalLow * 0.7 : 0;
  const upperBound = normalHigh * 1.2 + rangeSize * 0.05;
  const totalRange = upperBound - lowerBound;

  const clamp = (v: number) => Math.max(0, Math.min(100, v));

  const valuePercent = clamp(((value - lowerBound) / totalRange) * 100);
  const greenStart = clamp(((normalLow - lowerBound) / totalRange) * 100);
  const greenWidth = clamp(((normalHigh - normalLow) / totalRange) * 100);
  const amberWidth = clamp(((normalHigh * 1.2 - normalHigh) / totalRange) * 100);

  const isLow = value < normalLow;
  const isHigh = value > normalHigh;
  const isVeryHigh = value > normalHigh * 1.2;

  const markerColor = isVeryHigh ? "bg-red-500" : isHigh ? "bg-amber-500" : isLow ? "bg-amber-500" : "bg-green-500";

  return (
    <div className="w-full mt-3">
      <div className="relative h-3.5 bg-slate-100 rounded-full overflow-hidden">
        <div
          className="absolute h-full bg-green-200"
          style={{ left: `${greenStart}%`, width: `${greenWidth}%` }}
        />
        <div
          className="absolute h-full bg-amber-100"
          style={{ left: `${greenStart + greenWidth}%`, width: `${amberWidth}%` }}
        />
        <div
          className={`absolute h-full w-2 -translate-x-1/2 rounded-full shadow ${markerColor}`}
          style={{ left: `${valuePercent}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-400 mt-1.5">
        <span>Min: <span className="font-medium text-slate-600">{normalLow}</span></span>
        <span className={`font-semibold ${isLow || isHigh ? "text-amber-600" : "text-green-600"}`}>
          {value} {unit}
        </span>
        <span>Max: <span className="font-medium text-slate-600">{normalHigh}</span></span>
      </div>
    </div>
  );
}
