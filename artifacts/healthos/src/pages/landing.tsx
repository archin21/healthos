import React from "react";
import { Link } from "wouter";
import { ArrowRight, Layers, FileX, IndianRupee, Activity, Shield, Brain, Pill } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="px-6 py-4 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="flex items-center gap-2 font-bold text-xl text-slate-900">
          <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center text-white">H</div>
          HealthOS
        </div>
        <div className="flex gap-4">
          <Link href="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 flex items-center" data-testid="link-sign-in">
            Sign In
          </Link>
          <Link href="/dashboard" className="px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors" data-testid="link-get-started">
            Get Started
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 px-6 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            Now available in India
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Your health reports, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
              finally decoded.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            HealthOS standardises lab reports from any Indian diagnostic lab, tracks your health over time, and tells you what actually matters — in plain English.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              data-testid="button-upload-report"
            >
              Upload Your Report <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-700 font-medium rounded-xl transition-all flex items-center justify-center"
              data-testid="button-see-demo"
            >
              See a Demo
            </Link>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-6 bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">The Problem With Health Reports Today</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-sky-200 transition-colors">
                <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 mb-4 border border-sky-100">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">Same test, different numbers</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  SRL calls it 'Hb'. Thyrocare calls it 'Hemoglobin (HB)'. Medanta calls it 'HAEMOGLOBIN'. You can't compare them. We can.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-sky-200 transition-colors">
                <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 mb-4 border border-sky-100">
                  <FileX className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">Reports that nobody reads</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A 12-page lab PDF with no context. HealthOS converts it into a 60-second health briefing with plain-English explanations.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-sky-200 transition-colors">
                <div className="w-11 h-11 bg-sky-50 rounded-xl flex items-center justify-center text-sky-500 mb-4 border border-sky-100">
                  <IndianRupee className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">Generic drugs you never knew about</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  That branded medicine costs ₹800. The generic with the same active ingredient costs ₹45. We find it for you.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Stats Strip */}
        <section className="py-14 px-6 bg-sky-500">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-3xl font-extrabold mb-1">260+</div>
                <div className="text-sm font-medium text-sky-100">standardised parameters</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold mb-1">6</div>
                <div className="text-sm font-medium text-sky-100">major Indian lab chains supported</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold mb-1">4</div>
                <div className="text-sm font-medium text-sky-100">validated mental health tools</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold mb-1">88%</div>
                <div className="text-sm font-medium text-sky-100">savings on medicines</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="py-16 px-6 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-sky-500 mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Track Trends Over Years</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Connect historical reports from Medanta, Lal PathLabs, or Apollo to see how your health is trending over time.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-violet-500 mb-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Mental Health Screening</h3>
                <p className="text-slate-600 text-sm leading-relaxed">PHQ-9, GAD-7, PSS, and DASS-21 — clinically validated tools, private and confidential.</p>
              </div>
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-500 mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Your Data, Your Privacy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Client-side processing where possible. Your health data is never sold to insurers or third parties.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-3">Start for free. No credit card required.</h2>
              <p className="text-slate-400 mb-8 max-w-xl mx-auto">Join Indian professionals taking control of their health data with HealthOS.</p>
              <Link
                href="/dashboard"
                className="inline-flex px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl transition-colors shadow-sm"
                data-testid="button-sign-up"
              >
                Sign Up Free
              </Link>
            </div>
            <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-sky-500 rounded-full blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-20"></div>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-200 bg-white">
        © 2025 HealthOS Intelligence Platform. For demonstration purposes only.
      </footer>
    </div>
  );
}
