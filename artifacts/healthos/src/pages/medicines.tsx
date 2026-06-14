import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { Search, ShieldCheck, AlertTriangle, TrendingDown, AlertCircle } from "lucide-react";

export default function MedicinesPage() {
  const [query, setQuery] = useState("Atorvastatin");

  return (
    <AppLayout>
      <div className="p-6 max-w-6xl mx-auto pb-32">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Medicine Finder</h1>
        <p className="text-sm text-slate-500 mb-6">Find verified generic alternatives and check salt interactions.</p>

        <div className="relative mb-8">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-11 pr-4 py-4 bg-white border border-slate-200 rounded-xl text-slate-900 font-medium focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
            placeholder="Search by brand name or composition..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* Results */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Reference Brand</h2>
            <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 flex justify-between items-center">
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Lipitor 10mg</h3>
                <p className="text-sm text-slate-500">Atorvastatin • Pfizer</p>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-slate-900">₹185</div>
                <div className="text-xs text-slate-500">per 10 tablets</div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Verified Generic Alternatives</h2>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                <TrendingDown className="w-3 h-3" /> Save up to 88%
              </span>
            </div>
            
            <div className="space-y-3">
              {[
                { name: "Mankind Atorvastatin", maker: "Mankind Pharma", price: 22, save: 88 },
                { name: "Atorva 10", maker: "Zydus Cadila", price: 28, save: 84 },
                { name: "Lupin Atorvastatin", maker: "Lupin", price: 30, save: 83 },
                { name: "Sun Pharma Ator", maker: "Sun Pharma", price: 32, save: 82 },
                { name: "Dr. Reddy's Ator", maker: "Dr. Reddy's", price: 35, save: 81 },
              ].map((med, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 p-4 flex justify-between items-center hover:border-sky-300 transition-colors">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-slate-900">{med.name}</h3>
                      <ShieldCheck className="w-4 h-4 text-emerald-500" title="CDSCO Verified" />
                    </div>
                    <p className="text-sm text-slate-500">{med.maker}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-slate-900">₹{med.price}</div>
                    <div className="text-xs font-medium text-emerald-600">{med.save}% cheaper</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">Interaction Checker</h2>
            <div className="bg-white rounded-xl border border-slate-200 p-4">
              <p className="text-sm text-slate-600 mb-4">Add your other medicines to check for adverse salt interactions.</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg flex items-center gap-2 border border-slate-200">
                  Combiflam <button className="text-slate-400 hover:text-slate-600">×</button>
                </div>
                <div className="px-3 py-1.5 bg-slate-100 text-slate-700 text-sm font-medium rounded-lg flex items-center gap-2 border border-slate-200">
                  Ibuprofen 400 <button className="text-slate-400 hover:text-slate-600">×</button>
                </div>
                <button className="px-3 py-1.5 text-sky-600 text-sm font-medium border border-dashed border-sky-300 rounded-lg hover:bg-sky-50">
                  + Add Medicine
                </button>
              </div>

              <div className="bg-red-50 border border-red-100 rounded-lg p-3 flex gap-3">
                <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-red-800 text-sm">Major Interaction Found</h4>
                  <p className="text-sm text-red-700 mt-1">Combiflam already contains Ibuprofen. Taking additional Ibuprofen will exceed the safe daily dosage limit and may cause severe gastrointestinal bleeding.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 md:bottom-auto md:top-0 right-0 p-4 w-full md:w-auto z-40">
        <div className="bg-slate-800 text-white text-xs p-3 rounded-lg shadow-lg flex gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
          <p>Always consult your physician before changing prescribed brands. Pricing shown is indicative.</p>
        </div>
      </div>
    </AppLayout>
  );
}
