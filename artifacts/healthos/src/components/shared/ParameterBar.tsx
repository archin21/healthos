import React from "react";

interface ParameterBarProps {
  value: number;
  min: number;
  max: number;
  unit: string;
}

export function ParameterBar({ value, min, max, unit }: ParameterBarProps) {
  // Simple visualization: scale from min * 0.8 to max * 1.2
  const lowerBound = min * 0.8;
  const upperBound = max * 1.2;
  const range = upperBound - lowerBound;
  
  let percentage = ((value - lowerBound) / range) * 100;
  percentage = Math.max(0, Math.min(100, percentage));
  
  const isOutOfRange = value < min || value > max;
  
  const minPercent = ((min - lowerBound) / range) * 100;
  const maxPercent = ((max - lowerBound) / range) * 100;

  return (
    <div className="w-full mt-4">
      <div className="relative h-4 bg-slate-100 rounded-full overflow-hidden">
        {/* Safe zone */}
        <div 
          className="absolute h-full bg-green-100 border-x border-green-200"
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />
        
        {/* Value marker */}
        <div 
          className={`absolute h-full w-2 -ml-1 rounded-full ${isOutOfRange ? "bg-amber-500" : "bg-green-500"}`}
          style={{ left: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-slate-500 mt-2">
        <span>{lowerBound.toFixed(1)}</span>
        <span className="flex gap-4">
          <span>Min: {min}</span>
          <span>Max: {max}</span>
        </span>
        <span>{upperBound.toFixed(1)} {unit}</span>
      </div>
    </div>
  );
}
