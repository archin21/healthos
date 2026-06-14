import React from "react";
import { cn } from "@/lib/utils";

interface RiskBadgeProps {
  status: "Healthy" | "Low Risk" | "Moderate Risk" | "High Risk" | "Unable to Assess";
  className?: string;
}

export function RiskBadge({ status, className }: RiskBadgeProps) {
  const variants = {
    "Healthy": "bg-green-100 text-green-700 border-green-200",
    "Low Risk": "bg-amber-100 text-amber-700 border-amber-200",
    "Moderate Risk": "bg-orange-100 text-orange-700 border-orange-200",
    "High Risk": "bg-red-100 text-red-700 border-red-200",
    "Unable to Assess": "bg-slate-100 text-slate-600 border-slate-200"
  };

  return (
    <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full border", variants[status], className)}>
      {status}
    </span>
  );
}
