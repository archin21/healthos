import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Search, ShieldCheck, AlertTriangle, TrendingDown, AlertCircle } from "lucide-react";

const GENERICS = [
  { manufacturer: "Sun Pharma", price: 32, save: 83 },
  { manufacturer: "Cipla", price: 28, save: 85 },
  { manufacturer: "Dr. Reddy's", price: 35, save: 81 },
  { manufacturer: "Mankind Pharma", price: 22, save: 88 },
  { manufacturer: "Lupin", price: 30, save: 84 },
];

export default function MedicinesPage() {
  const [query, setQuery] = useState("Atorvastatin 10mg");
  const [med1, setMed1] = useState("Combiflam");
  const [med2, setMed2] = useState("Ibuprofen");

  return (
    <AppLayout>
      <div className="p-6 max-w-5xl mx-auto pb-24">
        <h1 className="text-2xl font-bold text-slate-900 mb-1">Generic Medicine Finder</h1>
        <p className="text-sm text-slate-500 mb-6">
          Find affordable alternatives with the same active ingredient. All medicines listed are approved by CDSCO (India).
        </p>

        {/* Search Bar */}
        <div className="relative mb-2">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
            placeholder="Enter a brand name or salt name (e.g. Crocin, Metformin, Atorvastatin 10mg)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            data-testid="input-medicine-search"
          />
        </div>
        <p className="text-xs text-slate-400 mb-8">
          We show only Indian-approved generics. Consult your doctor before switching medicines.
        </p>

        {/* Results */}
        <div className="space-y-8">
          {/* Result Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Search Result</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Searched term</div>
                <div className="font-semibold text-slate-900">Atorvastatin 10mg</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Active Salt</div>
                <div className="font-semibold text-slate-900">Atorvastatin Calcium 10mg</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Drug Class</div>
                <div className="font-medium text-slate-700">HMG-CoA Reductase Inhibitor (Statin)</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 mb-0.5">Used for</div>
                <div className="font-medium text-slate-700">High cholesterol, cardiovascular risk reduction</div>
              </div>
            </div>
          </div>

          {/* Branded Reference Table */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Branded Reference</h2>
            <div className="bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="border-b border-slate-200">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-slate-600">Brand</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-600">Manufacturer</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-600">Price (10 tabs)</th>
                    <th className="text-right py-3 px-4 font-semibold text-slate-600">MRP/tab</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Lipitor 10mg</td>
                    <td className="py-3 px-4 text-slate-600">Pfizer</td>
                    <td className="py-3 px-4 text-right font-bold text-slate-900">₹185</td>
                    <td className="py-3 px-4 text-right text-slate-500">₹18.50</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium text-slate-900">Atorva 10mg</td>
                    <td className="py-3 px-4 text-slate-600">Zydus</td>
                    <td className="py-3 px-4 text-right font-bold text-slate-900">₹95</td>
                    <td className="py-3 px-4 text-right text-slate-500">₹9.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Generic Alternatives */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Verified Generic Alternatives</h2>
              <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md flex items-center gap-1 border border-emerald-200">
                <TrendingDown className="w-3 h-3" /> Save up to 88% vs Lipitor
              </span>
            </div>

            <div className="space-y-3">
              {GENERICS.map((med, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl border border-slate-200 p-4 hover:border-sky-300 transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
                  data-testid={`card-generic-${i}`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">Atorvastatin 10mg</h3>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm text-slate-500">{med.manufacturer}</span>
                      <span className="text-xs text-slate-300">·</span>
                      <span className="text-xs text-slate-400">10 tabs</span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-200">
                        <ShieldCheck className="w-3 h-3" /> CDSCO Approved
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <div className="text-xl font-bold text-slate-900">₹{med.price}</div>
                      <div className="text-xs text-slate-400">per 10 tabs</div>
                    </div>
                    <div className="px-2.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-bold text-emerald-700">
                      Save {med.save}%
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Salt Overlap Checker */}
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Salt Overlap Checker</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <p className="text-sm text-slate-600 mb-4">
                Taking multiple medicines? Check if any share the same active ingredient — accidental double-dosing is more common than you think.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-4">
                <input
                  type="text"
                  value={med1}
                  onChange={(e) => setMed1(e.target.value)}
                  placeholder="Medicine 1"
                  className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  data-testid="input-medicine1"
                />
                <input
                  type="text"
                  value={med2}
                  onChange={(e) => setMed2(e.target.value)}
                  placeholder="Medicine 2"
                  className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm text-slate-900 focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  data-testid="input-medicine2"
                />
              </div>

              <button
                className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-xl transition-colors mb-5"
                data-testid="button-check-overlap"
              >
                Check Overlap
              </button>

              {/* Mock overlap result — pre-loaded */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 items-start">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-amber-600 font-semibold uppercase tracking-wide mb-1">Checking: Combiflam + Ibuprofen</div>
                  <h4 className="font-semibold text-amber-900 mb-1">Overlap Detected</h4>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Both medicines contain <strong>Ibuprofen 400mg</strong>. Taking them simultaneously could exceed the safe daily dose. Please consult your doctor before taking both.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Disclaimer */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-100 border-t border-slate-200 py-2.5 px-6 z-40 md:left-64">
        <div className="flex gap-2 items-center max-w-5xl mx-auto">
          <AlertCircle className="w-4 h-4 shrink-0 text-slate-500" />
          <p className="text-xs text-slate-500">
            HealthOS is not a licensed pharmacy. This tool is for informational purposes only. Never switch, stop, or start any medication without consulting a qualified doctor or pharmacist.
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
