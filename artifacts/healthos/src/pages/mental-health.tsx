import React, { useState } from "react";
import { AppLayout } from "@/components/layout/AppLayout";
import { AlertCircle, Brain, Clock, X, ChevronLeft, ChevronRight, Info } from "lucide-react";

const PHQ9_QUESTIONS = [
  "Little interest or pleasure in doing things?",
  "Feeling down, depressed, or hopeless?",
  "Trouble falling or staying asleep, or sleeping too much?",
  "Feeling tired or having little energy?",
  "Poor appetite or overeating?",
  "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
  "Trouble concentrating on things, such as reading the newspaper or watching television?",
  "Moving or speaking so slowly that other people could have noticed? Or the opposite — being so fidgety or restless that you have been moving around a lot more than usual?",
  "Thoughts that you would be better off dead, or of hurting yourself in some way?",
];

const RESPONSE_OPTIONS = [
  { label: "Not at all", score: 0 },
  { label: "Several days", score: 1 },
  { label: "More than half the days", score: 2 },
  { label: "Nearly every day", score: 3 },
];

type ModalType = "phq9" | "coming-soon" | null;

export default function MentalHealthPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(9).fill(null));
  const [showResults, setShowResults] = useState(false);

  const totalScore = answers.reduce((sum, a) => sum + (a ?? 0), 0);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = score;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < PHQ9_QUESTIONS.length - 1) {
      setCurrentQuestion(q => q + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) setCurrentQuestion(q => q - 1);
  };

  const openPHQ9 = () => {
    setCurrentQuestion(0);
    setAnswers(Array(9).fill(null));
    setShowResults(false);
    setActiveModal("phq9");
  };

  const closeModal = () => {
    setActiveModal(null);
    setShowResults(false);
  };

  const progress = ((currentQuestion + 1) / PHQ9_QUESTIONS.length) * 100;

  return (
    <AppLayout>
      <div className="p-6 max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">Mental Health Assessments</h1>

        {/* Disclaimer Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex gap-3 items-start">
          <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Important:</strong> These are screening tools, not diagnostic instruments. Please consult a mental health professional for diagnosis and treatment. If you are in crisis, call the Kiran Helpline at <strong>1800-599-0019</strong> (free, 24x7).
          </p>
        </div>

        {/* Mental Wellness Score Panel */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold text-slate-900">Your Mental Wellness Score</h2>
            <div className="relative group">
              <Info className="w-4 h-4 text-slate-400 cursor-help" />
              <div className="absolute right-0 top-6 w-72 bg-slate-900 text-white text-xs rounded-xl p-3 hidden group-hover:block z-10 shadow-lg">
                This score reflects your self-reported mental wellness across 4 validated screening tools. It is not a clinical diagnosis.
              </div>
            </div>
          </div>
          <div className="flex items-end gap-3 mb-2">
            <div className="text-5xl font-extrabold text-slate-900">64</div>
            <div className="text-2xl text-slate-300 mb-1">/100</div>
            <span className="mb-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold border border-amber-200">Moderate</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed max-w-xl">
            Kept separate from your physical health score — combined scores can obscure important signals in either dimension.
          </p>
        </div>

        {/* Assessment Cards 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* PHQ-9 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-sky-300 transition-colors" data-testid="card-phq9">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">PHQ-9</h3>
                <p className="text-xs text-slate-500">Patient Health Questionnaire</p>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Not yet taken</span>
            </div>
            <p className="text-sm text-slate-600 mb-1"><span className="font-medium">Screens for:</span> Depression severity</p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1"><Brain className="w-3.5 h-3.5" /> 9 questions</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~3 minutes</span>
            </div>
            <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 mb-4 space-y-0.5">
              <div className="font-medium text-slate-600 mb-1">Scoring bands</div>
              <div className="flex justify-between"><span>None</span><span className="text-slate-400">0–4</span></div>
              <div className="flex justify-between"><span>Mild</span><span className="text-slate-400">5–9</span></div>
              <div className="flex justify-between"><span>Moderate</span><span className="text-slate-400">10–14</span></div>
              <div className="flex justify-between"><span>Moderately Severe</span><span className="text-slate-400">15–19</span></div>
              <div className="flex justify-between"><span>Severe</span><span className="text-slate-400">20–27</span></div>
            </div>
            <button
              onClick={openPHQ9}
              className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors"
              data-testid="button-start-phq9"
            >
              Start Assessment
            </button>
          </div>

          {/* GAD-7 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-sky-300 transition-colors" data-testid="card-gad7">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">GAD-7</h3>
                <p className="text-xs text-slate-500">Generalised Anxiety Disorder Scale</p>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Not yet taken</span>
            </div>
            <p className="text-sm text-slate-600 mb-1"><span className="font-medium">Screens for:</span> Anxiety severity</p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1"><Brain className="w-3.5 h-3.5" /> 7 questions</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~2 minutes</span>
            </div>
            <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 mb-4 space-y-0.5">
              <div className="font-medium text-slate-600 mb-1">Scoring bands</div>
              <div className="flex justify-between"><span>Minimal</span><span className="text-slate-400">0–4</span></div>
              <div className="flex justify-between"><span>Mild</span><span className="text-slate-400">5–9</span></div>
              <div className="flex justify-between"><span>Moderate</span><span className="text-slate-400">10–14</span></div>
              <div className="flex justify-between"><span>Severe</span><span className="text-slate-400">15–21</span></div>
            </div>
            <button
              onClick={() => setActiveModal("coming-soon")}
              className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors"
              data-testid="button-start-gad7"
            >
              Start Assessment
            </button>
          </div>

          {/* PSS */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-sky-300 transition-colors" data-testid="card-pss">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">PSS</h3>
                <p className="text-xs text-slate-500">Perceived Stress Scale</p>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Not yet taken</span>
            </div>
            <p className="text-sm text-slate-600 mb-1"><span className="font-medium">Screens for:</span> Perceived stress levels</p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1"><Brain className="w-3.5 h-3.5" /> 10 questions</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~3 minutes</span>
            </div>
            <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 mb-4 space-y-0.5">
              <div className="font-medium text-slate-600 mb-1">Scoring bands</div>
              <div className="flex justify-between"><span>Low stress</span><span className="text-slate-400">0–13</span></div>
              <div className="flex justify-between"><span>Moderate stress</span><span className="text-slate-400">14–26</span></div>
              <div className="flex justify-between"><span>High stress</span><span className="text-slate-400">27–40</span></div>
            </div>
            <button
              onClick={() => setActiveModal("coming-soon")}
              className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors"
              data-testid="button-start-pss"
            >
              Start Assessment
            </button>
          </div>

          {/* DASS-21 */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 hover:border-sky-300 transition-colors" data-testid="card-dass21">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-slate-900 text-base">DASS-21</h3>
                <p className="text-xs text-slate-500">Depression Anxiety Stress Scale</p>
              </div>
              <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2 py-1 rounded-md">Not yet taken</span>
            </div>
            <p className="text-sm text-slate-600 mb-1"><span className="font-medium">Screens for:</span> Depression, anxiety and stress simultaneously</p>
            <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
              <span className="flex items-center gap-1"><Brain className="w-3.5 h-3.5" /> 21 questions</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> ~5 minutes</span>
            </div>
            <div className="text-xs text-slate-500 bg-slate-50 rounded-lg p-3 mb-4">
              <div className="font-medium text-slate-600 mb-1">Scoring bands</div>
              <p className="text-slate-500">Produces three separate subscale scores for depression, anxiety, and stress — giving a multi-dimensional picture of wellbeing.</p>
            </div>
            <button
              onClick={() => setActiveModal("coming-soon")}
              className="w-full py-2.5 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors"
              data-testid="button-start-dass21"
            >
              Start Assessment
            </button>
          </div>
        </div>

        {/* PHQ-9 Assessment Modal */}
        {activeModal === "phq9" && (
          <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden">
              {!showResults ? (
                <>
                  {/* Modal Header */}
                  <div className="p-5 border-b border-slate-100 flex justify-between items-center">
                    <div>
                      <span className="font-semibold text-slate-900">PHQ-9 Assessment</span>
                      <span className="text-xs text-slate-500 ml-3">Question {currentQuestion + 1} of {PHQ9_QUESTIONS.length}</span>
                    </div>
                    <button onClick={closeModal} className="p-1.5 rounded-lg hover:bg-slate-100 transition-colors" data-testid="button-close-modal">
                      <X className="w-4 h-4 text-slate-500" />
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="h-1.5 bg-slate-100 w-full">
                    <div className="h-full bg-sky-500 transition-all duration-300 rounded-full" style={{ width: `${progress}%` }} />
                  </div>

                  <div className="p-7">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Over the last 2 weeks, how often have you been bothered by:
                    </p>
                    <h3 className="text-lg font-semibold text-slate-900 mb-7 leading-relaxed">
                      {PHQ9_QUESTIONS[currentQuestion]}
                    </h3>

                    <div className="space-y-3 mb-8">
                      {RESPONSE_OPTIONS.map((opt) => (
                        <button
                          key={opt.score}
                          onClick={() => handleAnswer(opt.score)}
                          className={`w-full text-left px-4 py-3.5 rounded-xl border-2 font-medium text-sm transition-all ${
                            answers[currentQuestion] === opt.score
                              ? "border-sky-500 bg-sky-50 text-sky-700"
                              : "border-slate-200 text-slate-700 hover:border-sky-300 hover:bg-slate-50"
                          }`}
                          data-testid={`button-answer-${opt.score}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={handlePrev}
                        disabled={currentQuestion === 0}
                        className="flex items-center gap-2 px-4 py-2 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        data-testid="button-prev"
                      >
                        <ChevronLeft className="w-4 h-4" /> Previous
                      </button>
                      <button
                        onClick={handleNext}
                        disabled={answers[currentQuestion] === null}
                        className="flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                        data-testid="button-next"
                      >
                        {currentQuestion === PHQ9_QUESTIONS.length - 1 ? "See Results" : "Next"} <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                /* Results Screen */
                <div className="p-7">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
                      <Brain className="w-8 h-8 text-amber-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-1">PHQ-9 Complete</h2>
                    <div className="text-4xl font-extrabold text-slate-900 my-3">
                      12<span className="text-xl text-slate-400">/27</span>
                    </div>
                    <span className="inline-block px-3 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full border border-amber-200">
                      Moderate Depression
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-5 leading-relaxed text-center">
                    Your responses suggest you may be experiencing moderate depressive symptoms. This doesn't mean you have depression — but it is worth paying attention to and discussing with a professional.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-4 mb-5">
                    <h3 className="font-semibold text-slate-900 text-sm mb-3">Resources (India)</h3>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex justify-between">
                        <span className="font-medium">iCall (free)</span>
                        <span className="text-slate-500">9152987821</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Vandrevala Foundation (24x7)</span>
                        <span className="text-slate-500">1860-2662-345</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Nimhans Connect</span>
                        <span className="text-sky-600">nimhansconnect.in</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 text-center mb-5">
                    We recommend retaking this assessment every 4 weeks to track changes over time.
                  </p>

                  <button
                    onClick={closeModal}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-xl transition-colors"
                    data-testid="button-back-dashboard"
                  >
                    Back to Dashboard
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Coming Soon Modal */}
        {activeModal === "coming-soon" && (
          <div className="fixed inset-0 bg-slate-900/60 flex items-center justify-center z-50 p-4 backdrop-blur-sm">
            <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-sky-100 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-7 h-7 text-sky-500" />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">Assessment Coming Soon</h2>
              <p className="text-sm text-slate-600 mb-6">PHQ-9 is available now. This assessment will be live shortly.</p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={openPHQ9}
                  className="w-full py-3 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium rounded-xl transition-colors"
                  data-testid="button-take-phq9"
                >
                  Take PHQ-9 Instead
                </button>
                <button
                  onClick={closeModal}
                  className="w-full py-3 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl hover:bg-slate-50 transition-colors"
                  data-testid="button-close-coming-soon"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
