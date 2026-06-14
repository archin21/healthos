import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface HealthScoreGaugeProps {
  score: number;
  riskLevel: "healthy" | "low_risk" | "moderate" | "high_risk";
}

export function HealthScoreGauge({ score, riskLevel }: HealthScoreGaugeProps) {
  const data = [
    { name: "Score", value: score },
    { name: "Remaining", value: 100 - score },
  ];

  let color = "hsl(var(--primary))";
  let label = "Unknown";
  if (riskLevel === "healthy") {
    color = "#22C55E";
    label = "Healthy";
  } else if (riskLevel === "low_risk") {
    color = "#EAB308";
    label = "Low Risk";
  } else if (riskLevel === "moderate") {
    color = "#F59E0B"; // darker amber
    label = "Moderate Risk";
  } else if (riskLevel === "high_risk") {
    color = "#EF4444";
    label = "High Risk";
  }

  return (
    <div className="relative w-48 h-48 mx-auto flex flex-col items-center justify-center">
      <div className="absolute inset-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              startAngle={180}
              endAngle={0}
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              cornerRadius={4}
            >
              <Cell fill={color} />
              <Cell fill="#E2E8F0" />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8">
        <span className="text-4xl font-bold text-slate-900">{score}</span>
        <span className="text-xs font-medium text-slate-500 mt-1 uppercase tracking-wider">{label}</span>
      </div>
    </div>
  );
}
