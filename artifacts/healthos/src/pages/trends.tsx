import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockTrendData, trendReferenceRanges } from "@/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
} from "recharts";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

const PARAM_CHIPS = [
  "Fasting Blood Sugar",
  "Hemoglobin",
  "Total Cholesterol",
  "LDL Cholesterol",
  "Vitamin D",
  "TSH",
  "Uric Acid",
];

const CustomDot = (props: any) => {
  const { cx, cy, payload, selectedParam } = props;
  const ref = trendReferenceRanges[selectedParam];
  const isAbove = ref && payload.value > ref.high;
  if (isAbove) {
    return (
      <g>
        <circle cx={cx} cy={cy} r={7} fill="#EAB308" stroke="#fff" strokeWidth={2} />
        <text x={cx} y={cy - 14} textAnchor="middle" fill="#92400E" fontSize={11} fontWeight="600">
          ↑ Above range
        </text>
      </g>
    );
  }
  return <circle cx={cx} cy={cy} r={5} fill="#0EA5E9" stroke="#fff" strokeWidth={2} />;
};

const CustomXAxisTick = (props: any) => {
  const { x, y, payload } = props;
  const entry = (mockTrendData as any)[props.selectedParam]?.find((d: any) => d.date === payload.value);
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={14} textAnchor="middle" fill="#64748B" fontSize={12}>
        {payload.value}
      </text>
      {entry && (
        <text x={0} y={0} dy={28} textAnchor="middle" fill="#94A3B8" fontSize={10}>
          {entry.lab}
        </text>
      )}
    </g>
  );
};

export default function TrendsPage() {
  const [selectedParam, setSelectedParam] = useState("Fasting Blood Sugar");

  const data = mockTrendData[selectedParam] || [];
  const ref = trendReferenceRanges[selectedParam];
  const values = data.map((d) => d.value);
  const minVal = Math.min(...values);
  const maxVal = Math.max(...values);
  const minEntry = data.find((d) => d.value === minVal);
  const maxEntry = data.find((d) => d.value === maxVal);
  const current = values[values.length - 1];
  const previous = values[values.length - 2];
  const trendDiff = previous !== undefined ? current - previous : 0;
  const isAboveRange = ref && current > ref.high;
  const isBelowRange = ref && current < ref.low;

  const unit = ref?.unit ?? "mg/dL";

  const yMin = ref ? Math.min(ref.low * 0.85, minVal * 0.9) : minVal * 0.9;
  const yMax = ref ? Math.max(ref.high * 1.15, maxVal * 1.1) : maxVal * 1.1;

  return (
    <AppLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Health Trends</h1>
        <p className="text-sm text-slate-500 mb-6">Track how your parameters change across reports and labs</p>

        {/* Chart Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
          <div className="mb-6 flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-slate-900">{selectedParam}</h2>
              <p className="text-sm text-slate-500">All values standardised to {unit} regardless of original lab format</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900">
                {current} <span className="text-sm font-normal text-slate-500">{unit}</span>
              </div>
              {previous !== undefined && (
                <div className={`text-sm font-medium flex items-center justify-end gap-1 ${trendDiff > 0 && isAboveRange ? "text-amber-600" : trendDiff > 0 ? "text-slate-500" : "text-green-600"}`}>
                  {trendDiff > 0 ? <TrendingUp className="w-3.5 h-3.5" /> : trendDiff < 0 ? <TrendingDown className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                  {trendDiff > 0 ? "+" : ""}{trendDiff.toFixed(1)} since last test
                </div>
              )}
            </div>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 30, right: 80, left: 0, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis
                  dataKey="date"
                  axisLine={false}
                  tickLine={false}
                  tick={<CustomXAxisTick selectedParam={selectedParam} />}
                  height={50}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#64748B", fontSize: 12 }}
                  domain={[Math.floor(yMin), Math.ceil(yMax)]}
                />
                <Tooltip
                  contentStyle={{ borderRadius: "12px", border: "1px solid #E2E8F0", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)" }}
                  formatter={(value: any) => [`${value} ${unit}`, selectedParam]}
                  labelFormatter={(label) => {
                    const entry = data.find((d) => d.date === label);
                    return entry ? `${label} • ${entry.lab}` : label;
                  }}
                />
                {ref && (
                  <ReferenceArea
                    y1={ref.low}
                    y2={ref.high}
                    fill="#22C55E"
                    fillOpacity={0.12}
                    label={{ value: "Normal Range", position: "insideRight", fill: "#16A34A", fontSize: 11, fontWeight: 600, dx: 8 }}
                  />
                )}
                {ref && <ReferenceLine y={ref.high} stroke="#22C55E" strokeDasharray="4 4" strokeWidth={1} />}
                {ref && ref.low > 0 && <ReferenceLine y={ref.low} stroke="#22C55E" strokeDasharray="4 4" strokeWidth={1} />}
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0EA5E9"
                  strokeWidth={2.5}
                  dot={<CustomDot selectedParam={selectedParam} />}
                  activeDot={{ r: 8, fill: "#0EA5E9", stroke: "#fff", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Lowest Recorded</div>
            <div className="text-2xl font-bold text-slate-900">{minVal} <span className="text-sm font-normal text-slate-400">{unit}</span></div>
            {minEntry && <div className="text-xs text-slate-500 mt-0.5">{minEntry.date}</div>}
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Highest Recorded</div>
            <div className="text-2xl font-bold text-slate-900">{maxVal} <span className="text-sm font-normal text-slate-400">{unit}</span></div>
            {maxEntry && <div className="text-xs text-slate-500 mt-0.5">{maxEntry.date}</div>}
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Trend</div>
            {data.length > 1 ? (
              <div className={`text-base font-bold flex items-center gap-2 ${trendDiff > 0 && isAboveRange ? "text-amber-600" : trendDiff > 0 ? "text-slate-700" : "text-green-600"}`}>
                {trendDiff > 0 ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                {trendDiff > 0 ? "Rising" : "Declining"}
                {isAboveRange && <span className="text-amber-600 font-medium text-sm"> — monitor closely</span>}
              </div>
            ) : (
              <div className="text-base font-bold text-slate-400 flex items-center gap-2"><Minus className="w-4 h-4" /> Single data point</div>
            )}
          </div>
        </div>

        {/* Parameter Quick-Select Chips */}
        <div>
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Other Parameters</div>
          <div className="flex flex-wrap gap-2">
            {PARAM_CHIPS.map((param) => (
              <button
                key={param}
                onClick={() => setSelectedParam(param)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                  selectedParam === param
                    ? "bg-sky-500 text-white border-sky-500 shadow-sm"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
                data-testid={`chip-param-${param.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {param}
              </button>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
