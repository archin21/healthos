import React from "react";
import { cn } from "@/lib/utils";

type RiskLevel =
  | "Healthy" | "Low Risk" | "Moderate Risk" | "High Risk" | "Unable to Assess"
  | "healthy" | "low_risk" | "moderate_risk" | "high_risk" | "unable_to_assess"
  | "normal";

interface RiskBadgeProps {
  status: RiskLevel;
  className?: string;
}

function normalise(status: RiskLevel): "Healthy" | "Low Risk" | "Moderate Risk" | "High Risk" | "Unable to Assess" {
  switch (status) {
    case "healthy":
    case "normal":       return "Healthy";
    case "low_risk":     return "Low Risk";
    case "moderate_risk":return "Moderate Risk";
    case "high_risk":    return "High Risk";
    case "unable_to_assess": return "Unable to Assess";
    default:             return status as any;
  }
}

export function RiskBadge({ status, className }: RiskBadgeProps) {
  const label = normalise(status);

  const variants: Record<string, string> = {
    "Healthy":          "bg-green-100 text-green-700 border-green-200",
    "Low Risk":         "bg-amber-100 text-amber-700 border-amber-200",
    "Moderate Risk":    "bg-orange-100 text-orange-700 border-orange-200",
    "High Risk":        "bg-red-100 text-red-700 border-red-200",
    "Unable to Assess": "bg-slate-100 text-slate-600 border-slate-200",
  };

  return (
    <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full border whitespace-nowrap", variants[label], className)}>
      {label}
    </span>
  );
}
