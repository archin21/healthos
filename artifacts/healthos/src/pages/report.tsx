import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockTestProfiles } from "@/mockData";
import { TestProfileCard } from "@/components/shared/TestProfileCard";
import { useParams, Link } from "wouter";
import { ArrowLeft, Download, Share2, Info } from "lucide-react";
import { RiskBadge } from "@/components/shared/RiskBadge";

export default function ReportPage() {
  const { id } = useParams();

  return (
    <AppLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>

        {/* Header Section */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-1">Smart Report — Medanta, 2 Apr 2025</h1>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-slate-500 mt-2">
                <span><span className="font-medium text-slate-700">Patient:</span> Ranjeet Oak</span>
                <span><span className="font-medium text-slate-700">Gender:</span> Male, 52yr</span>
                <span><span className="font-medium text-slate-700">Booking ID:</span> 660451</span>
                <span><span className="font-medium text-slate-700">Lab:</span> Medanta, Cybercity</span>
                <span><span className="font-medium text-slate-700">Date:</span> 2 Apr 2025</span>
              </div>
            </div>
            <div className="flex gap-2 shrink-0">
              <button className="p-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors" data-testid="button-share">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 rounded-xl transition-colors" data-testid="button-download">
                <Download className="w-4 h-4" /> Original PDF
              </button>
            </div>
          </div>

          {/* Health Score + Risk Badge */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-5xl font-extrabold text-slate-900">73</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Health Score</div>
              </div>
              <div className="text-3xl text-slate-200 font-light">/</div>
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-400">100</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">Maximum</div>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-100 text-amber-800 font-semibold text-lg border border-amber-200">
                73 / 100 — Moderate Risk
              </span>
            </div>
          </div>

          {/* Horizontal Risk Bar */}
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-medium text-slate-500 mb-1">
              <span>High Risk</span>
              <span>Medium Risk</span>
              <span>Low Risk</span>
              <span>Healthy</span>
            </div>
            <div className="h-3 w-full rounded-full overflow-hidden flex gap-0.5">
              <div className="bg-red-500 h-full rounded-l-full" style={{ width: '0%' }} title="0 High Risk" />
              <div className="bg-orange-400 h-full" style={{ width: '0%' }} title="0 Medium Risk" />
              <div className="bg-amber-400 h-full" style={{ width: '4.5%' }} title="1 Low Risk" />
              <div className="bg-green-500 h-full rounded-r-full flex-1" title="21 Healthy" />
            </div>
            <div className="flex gap-5 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500" /> 0 High Risk</span>
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-orange-400" /> 0 Medium Risk</span>
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-amber-400" /> 1 Low Risk</span>
              <span className="flex items-center gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-green-500" /> 21 Healthy</span>
            </div>
            <p className="text-sm text-slate-500">21 of 22 parameters within healthy range</p>
          </div>
        </div>

        {/* Test Profiles */}
        <h2 className="text-lg font-semibold text-slate-900 mb-4">Test Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {mockTestProfiles.map(profile => (
            <TestProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        {/* Standardisation Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
            <div>
              <h3 className="font-semibold text-blue-900 text-base mb-1">How HealthOS Standardised Your Report</h3>
              <p className="text-sm text-blue-700 leading-relaxed">
                HealthOS mapped 22 parameters from Medanta's format to our universal standard, making your results comparable across any Indian lab.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-blue-200">
                  <th className="pb-2 font-semibold text-blue-800">As printed on your report</th>
                  <th className="pb-2 font-semibold text-blue-800">HealthOS Standard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-100">
                <tr>
                  <td className="py-2 text-blue-700">Haemoglobin (HB)</td>
                  <td className="py-2 font-mono font-medium text-blue-900">HEMOGLOBIN</td>
                </tr>
                <tr>
                  <td className="py-2 text-blue-700">SGPT (ALT)</td>
                  <td className="py-2 font-mono font-medium text-blue-900">ALANINE TRANSAMINASE</td>
                </tr>
                <tr>
                  <td className="py-2 text-blue-700">Glucose (Fasting)</td>
                  <td className="py-2 font-mono font-medium text-blue-900">FASTING BLOOD GLUCOSE</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
