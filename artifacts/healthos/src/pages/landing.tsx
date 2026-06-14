import React from "react";
import { Link } from "wouter";
import { ArrowRight, FileText, CheckCircle2, Shield, Activity, Lock } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">H</div>
          HealthOS
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center">
            Sign In
          </Link>
          <Link href="/dashboard" className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Now available in India
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Your health reports, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              finally decoded.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Stop googling medical terms. HealthOS turns complex lab reports into plain English explanations, actionable trends, and personalized health intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2">
              Upload Your Report <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-xl transition-all flex items-center justify-center">
              See a Demo
            </Link>
          </div>
        </section>

        <section className="py-16 px-6 bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-rose-500 mb-4">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Stop Guessing</h3>
                <p className="text-slate-600 text-sm leading-relaxed">No more staring at "Eosinophils 0.4" wondering if you're dying. We explain every parameter in simple, reassuring English.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-amber-500 mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Track Trends</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Connect your historical Medanta, Lal PathLabs, or Apollo reports to see how your health is trending over years.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Total Privacy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Your health data is yours. We use client-side processing where possible and never sell your information to insurers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to understand your health?</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join thousands of Indian professionals taking control of their medical data with HealthOS.</p>
              <Link href="/dashboard" className="inline-flex px-6 py-3 bg-white text-slate-900 font-medium rounded-xl hover:bg-slate-50 transition-colors">
                Start for Free
              </Link>
            </div>
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-sky-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-white">
        © 2025 HealthOS Intelligence Platform. For demonstration purposes.
      </footer>
    </div>
  );
}
