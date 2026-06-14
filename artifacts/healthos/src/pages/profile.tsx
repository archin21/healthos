import React from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { mockPatient, mockReports } from "@/mockData";
import { User, Calendar, Edit2, FileText, Download, ShieldCheck } from "lucide-react";
import { Link } from "wouter";

export default function ProfilePage() {
  return (
    <AppLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Profile & Settings</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <button className="text-slate-400 hover:text-sky-600 transition-colors">
                  <Edit2 className="w-4 h-4" />
                </button>
              </div>
              
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 mb-4 border-2 border-white shadow-sm">
                <User className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">{mockPatient.name}</h2>
              <div className="text-sm text-slate-500 mb-6">UID: HOS-284910</div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <div className="text-sm">
                    <span className="text-slate-500">DOB:</span> <span className="font-medium text-slate-900">29 Nov 1972 ({mockPatient.age} yrs)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-slate-400" />
                  <div className="text-sm">
                    <span className="text-slate-500">Gender:</span> <span className="font-medium text-slate-900">{mockPatient.gender}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-md text-white border border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3 className="font-semibold">Free Plan</h3>
              </div>
              <p className="text-sm text-slate-300 mb-6">You are currently on the free tier. Upgrade for unlimited report parsing.</p>
              <button className="w-full py-2.5 bg-white text-slate-900 text-sm font-bold rounded-xl hover:bg-slate-50 transition-colors">
                Upgrade to Pro — ₹299/mo
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Report History</h3>
              
              <div className="border border-slate-100 rounded-xl overflow-hidden">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50 text-slate-600 font-medium border-b border-slate-100">
                    <tr>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Laboratory</th>
                      <th className="px-4 py-3">Score</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {mockReports.map((report) => (
                      <tr key={report.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="px-4 py-4 text-slate-900 font-medium">
                          {new Date(report.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                        </td>
                        <td className="px-4 py-4 text-slate-600">{report.lab}</td>
                        <td className="px-4 py-4">
                          <span className="inline-flex items-center justify-center px-2 py-1 rounded bg-slate-100 text-slate-700 font-semibold text-xs">
                            {report.healthScore}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-right">
                          <div className="flex justify-end gap-2">
                            <button className="p-1.5 text-slate-400 hover:text-slate-600 bg-white border border-slate-200 rounded-lg shadow-sm" title="Download Original PDF">
                              <Download className="w-4 h-4" />
                            </button>
                            <Link href={`/report/${report.id}`} className="px-3 py-1.5 text-sky-600 text-xs font-medium border border-sky-200 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors">
                              View Analysis
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Health Context</h3>
              <p className="text-sm text-slate-600 mb-4">
                Adding your family history and lifestyle context helps HealthOS provide more accurate interpretations of your reports.
              </p>
              
              <div className="space-y-4">
                <div className="border border-slate-200 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-slate-900">Family Medical History</h4>
                    <p className="text-xs text-slate-500">Not provided</p>
                  </div>
                  <button className="text-sm font-medium text-sky-600">Add</button>
                </div>
                <div className="border border-slate-200 rounded-xl p-4 flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-slate-900">Lifestyle & Habits</h4>
                    <p className="text-xs text-slate-500">Not provided</p>
                  </div>
                  <button className="text-sm font-medium text-sky-600">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
