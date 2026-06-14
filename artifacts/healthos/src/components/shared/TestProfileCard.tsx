import React, { useState } from "react";
import { ChevronDown, ChevronUp, AlertCircle, Info, Activity } from "lucide-react";
import { RiskBadge } from "./RiskBadge";
import { ParameterBar } from "./ParameterBar";
import { motion, AnimatePresence } from "framer-motion";

interface TestProfileCardProps {
  profile: any;
}

export function TestProfileCard({ profile }: TestProfileCardProps) {
  const [expanded, setExpanded] = useState(profile.expanded || false);

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        data-testid={`card-profile-${profile.id}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{profile.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-slate-500">{profile.totalParams} parameters</span>
              {profile.outOfRange > 0 && (
                <>
                  <span className="text-xs text-slate-300">•</span>
                  <span className="text-xs font-medium text-amber-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {profile.outOfRange} out of range
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          {profile.score !== null && (
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-slate-900">{profile.score}/100</div>
            </div>
          )}
          <RiskBadge status={profile.status as any} />
          <button className="p-1 rounded-md hover:bg-slate-100 text-slate-400">
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && profile.details && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-100 bg-slate-50 p-4"
          >
            {profile.details.map((detail: any, idx: number) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-medium text-slate-900">{detail.param}</h4>
                    <div className="text-2xl font-bold text-amber-600 mt-1">
                      {detail.value} <span className="text-sm font-normal text-slate-500">{detail.unit}</span>
                    </div>
                  </div>
                  <RiskBadge status="Low Risk" />
                </div>
                
                <ParameterBar value={detail.value} min={70} max={100} unit={detail.unit} />
                
                <div className="mt-6 space-y-4">
                  <div className="bg-sky-50 rounded-lg p-3 text-sm text-sky-900 flex gap-2">
                    <Info className="w-5 h-5 shrink-0 text-sky-600" />
                    <p>{detail.explanation}</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Common Symptoms</h5>
                      <div className="flex flex-wrap gap-2">
                        {detail.symptoms.map((s: string) => (
                          <span key={s} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Lifestyle Tips</h5>
                      <ul className="space-y-1">
                        {detail.lifestyleTips.map((tip: string, i: number) => (
                          <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
