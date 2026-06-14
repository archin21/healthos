export const mockPatient = { 
  name: "Ranjeet Oak", 
  age: 52, 
  gender: "Male", 
  dob: "1972-11-29", 
  healthScore: 73, 
  mentalWellnessScore: 64, 
  riskLevel: "moderate" 
};

export const mockReports = [
  { id: "r1", date: "2025-04-02", lab: "Medanta", location: "Cybercity", healthScore: 73 },
  { id: "r2", date: "2023-05-13", lab: "Medanta", location: "Cybercity", healthScore: 81 },
  { id: "r3", date: "2021-08-18", lab: "Medanta", location: "Cybercity", healthScore: 78 }
];

export const mockAlerts = [
  { param: "Fasting Blood Sugar", value: 104.1, unit: "mg/dL", range: "70–100", risk: "low_risk" },
  { param: "Serum Globulin", value: 2.30, unit: "g/dL", range: "2.4–3.5", risk: "low_risk" }
];

export const mockTrendData: Record<string, { date: string; lab: string; value: number }[]> = {
  "Fasting Blood Sugar": [
    { date: "Dec 2018", lab: "Medanta", value: 97 },
    { date: "Aug 2021", lab: "Medanta", value: 89 },
    { date: "May 2023", lab: "Medanta", value: 87 },
    { date: "Apr 2025", lab: "Medanta", value: 101 }
  ],
  "Total Cholesterol": [
    { date: "Aug 2021", lab: "Medanta", value: 210 },
    { date: "May 2023", lab: "Medanta", value: 209 },
    { date: "Apr 2025", lab: "Medanta", value: 159 }
  ],
  "LDL Cholesterol": [
    { date: "Aug 2021", lab: "Medanta", value: 141 },
    { date: "May 2023", lab: "Medanta", value: 133 },
    { date: "Apr 2025", lab: "Medanta", value: 82 }
  ],
  "Hemoglobin": [
    { date: "Aug 2021", lab: "Medanta", value: 14.3 },
    { date: "May 2023", lab: "Medanta", value: 15.1 },
    { date: "Apr 2025", lab: "Medanta", value: 14.8 }
  ],
  "Vitamin D": [
    { date: "Apr 2025", lab: "Medanta", value: 51.2 }
  ],
  "TSH": [
    { date: "Apr 2025", lab: "Medanta", value: 2.31 }
  ],
  "Uric Acid": [
    { date: "Aug 2021", lab: "Medanta", value: 9.0 },
    { date: "May 2023", lab: "Medanta", value: 7.0 },
    { date: "Apr 2025", lab: "Medanta", value: 6.9 }
  ]
};

export const trendReferenceRanges: Record<string, { low: number; high: number; unit: string }> = {
  "Fasting Blood Sugar": { low: 70, high: 100, unit: "mg/dL" },
  "Total Cholesterol": { low: 0, high: 200, unit: "mg/dL" },
  "LDL Cholesterol": { low: 0, high: 100, unit: "mg/dL" },
  "Hemoglobin": { low: 13, high: 17, unit: "g/dL" },
  "Vitamin D": { low: 30, high: 100, unit: "ng/mL" },
  "TSH": { low: 0.4, high: 4.05, unit: "µIU/mL" },
  "Uric Acid": { low: 3.5, high: 8.5, unit: "mg/dL" }
};

export const mockTestProfiles = [
  { id: "1", name: "Complete Blood Count", status: "Healthy", score: 94, totalParams: 8, outOfRange: 0, expanded: false },
  { id: "2", name: "Liver Function Test", status: "Healthy", score: 91, totalParams: 10, outOfRange: 1, expanded: false,
    details: [{ param: "Serum Globulin", value: 2.30, unit: "g/dL", range: "2.4–3.5", explanation: "Your serum globulin is slightly below the reference range. This is often a benign finding in isolation. Your doctor may recommend a repeat test in 3–6 months.", symptoms: ["Usually asymptomatic"], lifestyleTips: ["Ensure adequate protein intake", "Repeat test in 3 months"] }]
  },
  { 
    id: "3", 
    name: "Kidney Function Test", 
    status: "Unable to Assess", 
    score: null, 
    totalParams: 3, 
    outOfRange: 0, 
    expanded: false,
    details: [
      { param: "Blood Urea", value: 30, unit: "mg/dL", range: "15–40", explanation: "Blood urea is within normal range.", symptoms: [], lifestyleTips: ["Stay well hydrated"] },
      { param: "Serum Creatinine", value: 0.9, unit: "mg/dL", range: "0.7–1.2", explanation: "Creatinine is within the normal range, indicating healthy kidney filtration.", symptoms: [], lifestyleTips: ["Maintain adequate hydration"] },
      { param: "Uric Acid", value: 7.0, unit: "mg/dL", range: "3.5–8.5", explanation: "Uric acid is within the normal reference range.", symptoms: [], lifestyleTips: ["Limit high-purine foods", "Stay hydrated"] }
    ]
  },
  { id: "4", name: "Electrolyte Panel", status: "Healthy", score: 96, totalParams: 3, outOfRange: 0, expanded: false },
  { 
    id: "5", 
    name: "Blood Glucose Level", 
    status: "Low Risk", 
    score: 85, 
    totalParams: 1, 
    outOfRange: 1, 
    expanded: true,
    details: [
      {
        param: "Fasting Blood Sugar",
        value: 104.1,
        unit: "mg/dL",
        range: "70–100",
        explanation: "Your fasting blood sugar is slightly above the normal range. Values between 100–125 mg/dL indicate pre-diabetes. This does not mean you have diabetes, but it's worth monitoring closely with diet and lifestyle changes.",
        symptoms: ["Increased thirst", "Fatigue", "Blurred vision"],
        lifestyleTips: ["Reduce refined carbohydrates and sugar", "Aim for 30 min brisk walk daily", "Monitor every quarter"]
      }
    ]
  },
  { id: "6", name: "Thyroid Profile", status: "Healthy", score: 93, totalParams: 3, outOfRange: 0, expanded: false },
  { id: "7", name: "Lipid Profile", status: "Healthy", score: 95, totalParams: 6, outOfRange: 0, expanded: false },
  { id: "8", name: "Vitamin D 25-Hydroxy", status: "Moderate Risk", score: 76, totalParams: 1, outOfRange: 0, expanded: false },
  { id: "9", name: "Vitamin B12", status: "Unable to Assess", score: null, totalParams: 0, outOfRange: 0, expanded: false },
  { id: "10", name: "Cancer Screening (PSA)", status: "Healthy", score: 97, totalParams: 1, outOfRange: 0, expanded: false }
];
