import React from "react";
import { Link } from "wouter";
import { AppLayout } from "@/components/layout/AppLayout";
import { HealthScoreGauge } from "@/components/shared/HealthScoreGauge";
import { mockPatient, mockReports, mockAlerts } from "@/mockData";
import { Upload, Bell, ChevronRight, Activity, ArrowUpRight, Brain, FileText, Pill } from "lucide-react";
import { RiskBadge } from "@/components/shared/RiskBadge";

export default function DashboardPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <AppLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Good morning, {mockPatient.name.split(' ')[0]}</h1>
            <p className="text-sm text-slate-500">{currentDate}</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors shadow-sm" data-testid="button-upload">
            <Upload className="w-4 h-4" />
            Upload New Report
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Wider */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">Overall Health Score</h2>
              <div className="flex flex-col md:flex-row items-center justify-around gap-8">
                <HealthScoreGauge score={mockPatient.healthScore} riskLevel={mockPatient.riskLevel as any} />
                <div className="max-w-xs space-y-4">
                  <p className="text-slate-600 text-sm">
                    Your score has decreased slightly since your last test in 2023. Key contributors to your current score are slightly elevated fasting blood sugar and suboptimal vitamin D levels.
                  </p>
                  <Link href="/report/r1" className="inline-flex items-center gap-2 text-sky-600 text-sm font-medium hover:text-sky-700">
                    View latest report detail <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-slate-900">Recent Reports</h2>
                <Link href="/profile" className="text-sm text-sky-600 font-medium">View All</Link>
              </div>
              <div className="divide-y divide-slate-100">
                {mockReports.map((report) => (
                  <Link key={report.id} href={`/report/${report.id}`} className="flex items-center justify-between py-4 group hover:bg-slate-50 rounded-xl px-2 -mx-2 transition-colors cursor-pointer" data-testid={`link-report-${report.id}`}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{report.lab} — {report.location}</p>
                        <p className="text-xs text-slate-500">Tested on {new Date(report.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-sm font-medium text-slate-900">Score: {report.healthScore}</div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Narrower */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5 text-amber-500" />
                <h2 className="text-lg font-semibold text-slate-900">Quick Alerts</h2>
              </div>
              <div className="space-y-3">
                {mockAlerts.map((alert, i) => (
                  <div key={i} className="p-3 bg-amber-50 border border-amber-100 rounded-xl">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-sm font-medium text-slate-900">{alert.param}</span>
                      <RiskBadge status="Low Risk" />
                    </div>
                    <p className="text-sm font-bold text-amber-700">{alert.value} <span className="text-xs font-normal text-amber-600">{alert.unit}</span></p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 shadow-sm text-white relative overflow-hidden">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-sky-400" />
                  <h2 className="text-lg font-semibold">Mental Health</h2>
                </div>
                <p className="text-sm text-slate-300 mb-4 leading-relaxed">It's been 6 months since your last wellbeing check-in.</p>
                <Link href="/mental-health" className="inline-block w-full text-center px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors">
                  Take Assessment
                </Link>
              </div>
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-sky-500 rounded-full blur-3xl opacity-20"></div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Pill className="w-5 h-5 text-emerald-500" />
                <h2 className="text-lg font-semibold text-slate-900">Medicine Finder</h2>
              </div>
              <p className="text-sm text-slate-500 mb-4">Find cheaper generic alternatives for your prescriptions.</p>
              <Link href="/medicines">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search medicine (e.g. Atorvastatin)" 
                    className="w-full pl-3 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                    readOnly
                  />
                  <ChevronRight className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
