import React, { useState } from "react";
import { ChevronDown, ChevronUp, AlertCircle, Info, Activity } from "lucide-react";
import { RiskBadge } from "./RiskBadge";
import { ParameterBar } from "./ParameterBar";
import { motion, AnimatePresence } from "framer-motion";
import { paramDescriptions } from "@/mockData";

interface Parameter {
  name: string;
  originalName?: string;
  value: number;
  unit: string;
  normalLow: number;
  normalHigh: number;
  risk: string;
  priority?: string;
  description?: string;
  symptoms?: string[];
  measures?: string[];
}

interface TestProfile {
  id: string;
  name: string;
  profileScore: number | null;
  riskLevel: string;
  paramCount: number;
  outOfRange: number;
  thresholdNote?: string;
  parameters?: Parameter[];
}

interface TestProfileCardProps {
  profile: TestProfile;
}

export function TestProfileCard({ profile }: TestProfileCardProps) {
  const [expanded, setExpanded] = useState(profile.riskLevel === "low_risk" || profile.riskLevel === "moderate_risk");

  const hasParams = profile.parameters && profile.parameters.length > 0;

  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all hover:shadow-md">
      <div
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={() => setExpanded(!expanded)}
        data-testid={`card-profile-${profile.id}`}
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-sky-600 shrink-0">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">{profile.name}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-xs text-slate-500">{profile.paramCount} parameter{profile.paramCount !== 1 ? "s" : ""}</span>
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
        <div className="flex items-center gap-3">
          {profile.profileScore !== null && profile.profileScore !== undefined && (
            <div className="text-right hidden sm:block">
              <div className="text-sm font-semibold text-slate-900">{profile.profileScore}/100</div>
            </div>
          )}
          <RiskBadge status={profile.riskLevel as any} />
          <button className="p-1 rounded-md hover:bg-slate-100 text-slate-400 shrink-0">
            {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && hasParams && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="border-t border-slate-100 bg-slate-50"
          >
            <div className="p-4 space-y-3">
              {profile.thresholdNote && (
                <div className="bg-slate-100 rounded-lg px-3 py-2 text-xs text-slate-600 flex gap-2 items-start">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                  {profile.thresholdNote}
                </div>
              )}

              {profile.parameters!.map((param, idx) => {
                const isOut = param.value < param.normalLow || param.value > param.normalHigh;

                const fallback = paramDescriptions[param.name];
                const explanation = param.description ?? fallback?.explanation;
                const symptoms: string[] = param.symptoms ?? (
                  param.value > param.normalHigh
                    ? (fallback?.symptoms_high ?? [])
                    : (fallback?.symptoms_low ?? [])
                );
                const measures: string[] = param.measures ?? (
                  param.value > param.normalHigh
                    ? (fallback?.measures_high ?? [])
                    : (fallback?.measures_low ?? [])
                );

                return (
                  <div key={idx} className={`bg-white p-4 rounded-xl border ${isOut ? "border-amber-200" : "border-slate-200"}`}>
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <h4 className="font-semibold text-slate-900 text-sm">{param.name}</h4>
                        {param.originalName && param.originalName !== param.name && (
                          <p className="text-xs text-slate-400 mt-0.5">As printed: {param.originalName}</p>
                        )}
                      </div>
                      <RiskBadge status={param.risk as any} />
                    </div>

                    <div className={`text-2xl font-bold mt-1 ${isOut ? "text-amber-600" : "text-slate-900"}`}>
                      {param.value}
                      <span className="text-sm font-normal text-slate-500 ml-1">{param.unit}</span>
                    </div>

                    <ParameterBar
                      value={param.value}
                      normalLow={param.normalLow}
                      normalHigh={param.normalHigh}
                      unit={param.unit}
                    />

                    {explanation && (
                      <div className="mt-4 bg-sky-50 rounded-lg p-3 text-sm text-sky-900 flex gap-2">
                        <Info className="w-4 h-4 shrink-0 text-sky-500 mt-0.5" />
                        <p>{explanation}</p>
                      </div>
                    )}

                    {(symptoms.length > 0 || measures.length > 0) && (
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {symptoms.length > 0 && (
                          <div>
                            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                              Possible Symptoms
                            </h5>
                            <div className="flex flex-wrap gap-1.5">
                              {symptoms.map((s) => (
                                <span key={s} className="px-2 py-1 bg-amber-50 text-amber-800 border border-amber-100 text-xs rounded-md">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {measures.length > 0 && (
                          <div>
                            <h5 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                              Lifestyle Tips
                            </h5>
                            <ul className="space-y-1.5">
                              {measures.map((tip, i) => (
                                <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
