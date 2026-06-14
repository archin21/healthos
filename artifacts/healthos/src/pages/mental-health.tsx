import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AlertCircle, Brain, Clock, ChevronRight } from "lucide-react";
import { RiskBadge } from "@/components/shared/RiskBadge";

const assessments = [
  { id: "phq9", name: "PHQ-9", desc: "Depression Screening", qCount: 9, time: "2 min", status: "Not Started" },
  { id: "gad7", name: "GAD-7", desc: "Anxiety Screening", qCount: 7, time: "2 min", status: "Completed 6mo ago" },
  { id: "pss", name: "PSS", desc: "Perceived Stress Scale", qCount: 10, time: "3 min", status: "Not Started" },
  { id: "dass21", name: "DASS-21", desc: "Depression, Anxiety, Stress", qCount: 21, time: "5 min", status: "Not Started" },
];

export default function MentalHealthPage() {
  const [showModal, setShowModal] = useState(false);
  const [showResults, setShowResults] = useState(false);

  return (
    <AppLayout>
      <div className="p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Mental Wellbeing</h1>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-8 flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <div className="text-sm text-amber-800 leading-relaxed">
            <strong>Medical Disclaimer:</strong> These self-assessments are standardized screening tools, not diagnostic instruments. They cannot replace a clinical diagnosis by a qualified mental health professional. If you are in crisis, please call the Kiran Helpline at 1800-599-0019 immediately.
          </div>
        </div>

        {showResults ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm mb-8 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-6">
              <Brain className="w-10 h-10 text-amber-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">PHQ-9 Assessment Complete</h2>
            <div className="text-5xl font-extrabold text-slate-900 my-4">12<span className="text-2xl text-slate-400">/27</span></div>
            <RiskBadge status="Moderate Risk" className="text-sm px-3 py-1 mb-6 inline-block" />
            
            <p className="text-slate-600 mb-8 leading-relaxed">
              Your score indicates <strong>Moderate Depression</strong> symptoms. It is common for professionals in high-stress roles to experience these symptoms. We strongly recommend speaking with a mental health professional to discuss these results.
            </p>

            <div className="text-left bg-slate-50 p-6 rounded-xl border border-slate-100 mb-6">
              <h3 className="font-semibold text-slate-900 mb-4">Recommended Next Steps</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs shrink-0">1</div>
                  Book a consultation with a clinical psychologist via Practo or Amaha.
                </li>
                <li className="flex gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs shrink-0">2</div>
                  Consider prioritizing sleep hygiene, aiming for 7-8 hours consistently.
                </li>
                <li className="flex gap-3 text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs shrink-0">3</div>
                  If you feel overwhelmed, Indian national helpline Vandrevala Foundation operates 24/7 at +91-9999-666-555.
                </li>
              </ul>
            </div>
            
            <button onClick={() => setShowResults(false)} className="text-sky-600 font-medium hover:text-sky-700 text-sm">
              Back to Assessments
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {assessments.map((a) => (
              <div key={a.id} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-sky-300 transition-colors group cursor-pointer" onClick={() => a.id === "phq9" && setShowModal(true)}>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-900">{a.name}</h3>
                  <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">{a.status}</span>
                </div>
                <p className="text-sm text-slate-600 mb-4">{a.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1"><Brain className="w-3.5 h-3.5" /> {a.qCount} questions</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {a.time}</span>
                  </div>
                  <div className="text-sky-600 group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Simple Modal overlay mockup */}
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl w-full max-w-lg overflow-hidden shadow-xl">
              <div className="p-4 border-b border-slate-100 flex justify-between items-center">
                <span className="font-medium text-slate-900">PHQ-9 Assessment</span>
                <span className="text-xs text-slate-500">Question 1 of 9</span>
              </div>
              <div className="h-1 bg-slate-100 w-full">
                <div className="h-full bg-sky-500 w-[11%]"></div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium text-slate-900 mb-6 leading-relaxed">
                  Over the last 2 weeks, how often have you been bothered by: <br/>
                  <span className="font-bold">Little interest or pleasure in doing things?</span>
                </h3>
                
                <div className="space-y-3">
                  {['Not at all', 'Several days', 'More than half the days', 'Nearly every day'].map((opt, i) => (
                    <button 
                      key={i} 
                      className="w-full text-left p-4 rounded-xl border border-slate-200 hover:border-sky-500 hover:bg-sky-50 transition-colors font-medium text-slate-700"
                      onClick={() => {
                        setShowModal(false);
                        setShowResults(true);
                      }}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
