import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockPatient, mockTestProfiles } from "@/mockData";
import { TestProfileCard } from "@/components/shared/TestProfileCard";
import { useParams, Link } from "wouter";
import { ArrowLeft, Download, Share2 } from "lucide-react";
import { RiskBadge } from "@/components/shared/RiskBadge";

export default function ReportPage() {
  const { id } = useParams();

  // Color bar segmentation based on mock data
  // 1 High / 0 Medium / 1 Low / 21 Healthy
  // Total = 23 parameters assessed across the profiles
  
  return (
    <AppLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Dashboard
          </Link>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Health Report Analysis</h1>
              <p className="text-sm text-slate-500 mt-1">Medanta Cybercity • Tested on April 2, 2025</p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 border border-slate-200 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 rounded-xl transition-colors">
                <Download className="w-4 h-4" /> Original PDF
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center shrink-0">
              <div className="text-5xl font-extrabold text-slate-900">{mockPatient.healthScore}</div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">Health Score</div>
              <div className="mt-2"><RiskBadge status="Moderate Risk" /></div>
            </div>
            
            <div className="flex-1 w-full space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-slate-700">Parameter Overview (23 tested)</span>
              </div>
              <div className="h-4 w-full rounded-full overflow-hidden flex">
                <div className="bg-green-500 h-full" style={{ width: '91.3%' }} title="21 Healthy" />
                <div className="bg-amber-400 h-full" style={{ width: '4.3%' }} title="1 Low Risk" />
                <div className="bg-orange-500 h-full" style={{ width: '0%' }} title="0 Moderate Risk" />
                <div className="bg-red-500 h-full" style={{ width: '4.3%' }} title="1 High Risk" />
              </div>
              <div className="flex gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"/> 21 Healthy</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-amber-400"/> 1 Low Risk</span>
                <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-500"/> 1 High Risk</span>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-semibold text-slate-900 mb-4">Test Profiles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {mockTestProfiles.map(profile => (
            <TestProfileCard key={profile.id} profile={profile} />
          ))}
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-sm">
          <h3 className="font-semibold text-slate-900 mb-2">Standardisation Notice</h3>
          <p className="text-slate-600 mb-4">This report has been mapped from Medanta's proprietary format to standard LOINC codes for trend analysis.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="border-b border-slate-200 font-medium text-slate-900">
                <tr>
                  <th className="pb-2">Original Term</th>
                  <th className="pb-2">Mapped Standard</th>
                  <th className="pb-2">Code</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-2">Fasting Sugar</td>
                  <td className="py-2">Glucose [Mass/volume] in Blood --fasting</td>
                  <td className="py-2 font-mono">1558-6</td>
                </tr>
                <tr>
                  <td className="py-2">HbA1c</td>
                  <td className="py-2">Hemoglobin A1c/Hemoglobin.total in Blood</td>
                  <td className="py-2 font-mono">4548-4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
