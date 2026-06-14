import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockTrendData } from "@/mockData";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from "recharts";

export default function TrendsPage() {
  const [selectedParam, setSelectedParam] = useState("Fasting Blood Sugar");
  
  const data = mockTrendData[selectedParam as keyof typeof mockTrendData] || [];
  
  // Calculate stats
  const values = data.map(d => d.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const current = values[values.length - 1];
  const previous = values[values.length - 2];
  const trend = current - previous;

  return (
    <AppLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Health Trends</h1>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {Object.keys(mockTrendData).map(param => (
            <button
              key={param}
              onClick={() => setSelectedParam(param)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                selectedParam === param 
                  ? "bg-sky-500 text-white border-sky-500 shadow-sm" 
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
              }`}
            >
              {param}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h2 className="text-xl font-bold text-slate-900">{selectedParam} Trend</h2>
              <p className="text-sm text-slate-500">Based on reports from Medanta</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900">
                {current} <span className="text-sm font-normal text-slate-500">mg/dL</span>
              </div>
              <div className={`text-sm font-medium ${trend > 0 && selectedParam.includes('Sugar') ? 'text-amber-600' : 'text-green-600'}`}>
                {trend > 0 ? '+' : ''}{trend} since last test
              </div>
            </div>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="date" axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748B', fontSize: 12}} domain={['dataMin - 10', 'dataMax + 10']} />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: '1px solid #E2E8F0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#0F172A', fontWeight: 600 }}
                />
                {selectedParam === "Fasting Blood Sugar" && (
                  <ReferenceArea y1={70} y2={100} fill="#22C55E" fillOpacity={0.1} />
                )}
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#0EA5E9" 
                  strokeWidth={3}
                  activeDot={{ r: 8, fill: "#0EA5E9", stroke: "#fff", strokeWidth: 2 }}
                  dot={{ r: 4, fill: "#0EA5E9" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="text-sm text-slate-500 mb-1">Lowest Recorded</div>
            <div className="text-xl font-bold text-slate-900">{min}</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="text-sm text-slate-500 mb-1">Highest Recorded</div>
            <div className="text-xl font-bold text-slate-900">{max}</div>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 p-4">
            <div className="text-sm text-slate-500 mb-1">Historical Average</div>
            <div className="text-xl font-bold text-slate-900">{(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1)}</div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
