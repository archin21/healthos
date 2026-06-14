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

export const mockTrendData = {
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
  ]
};

export const mockTestProfiles = [
  { id: "1", name: "Complete Blood Count", status: "Healthy", score: 94, totalParams: 8, outOfRange: 0, expanded: false },
  { id: "2", name: "Liver Function Test", status: "Healthy", score: 91, totalParams: 10, outOfRange: 1, expanded: false },
  { id: "3", name: "Kidney Function Test", status: "Unable to Assess", score: null, totalParams: 0, outOfRange: 0, expanded: false },
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
        range: "70-100",
        explanation: "Your fasting blood sugar is slightly above the normal range. This indicates pre-diabetes, meaning your body is becoming slightly resistant to insulin. It is highly reversible with diet and exercise.",
        symptoms: ["Increased thirst", "Frequent urination", "Fatigue"],
        lifestyleTips: ["Reduce simple carbohydrates like sugar and refined flour.", "Aim for 30 minutes of brisk walking daily.", "Include more fiber in your diet."]
      }
    ]
  },
  { id: "6", name: "Thyroid Profile", status: "Healthy", score: 93, totalParams: 3, outOfRange: 0, expanded: false },
  { id: "7", name: "Lipid Profile", status: "Healthy", score: 95, totalParams: 6, outOfRange: 0, expanded: false },
  { id: "8", name: "Vitamin D 25-Hydroxy", status: "Moderate Risk", score: 76, totalParams: 1, outOfRange: 0, expanded: false },
  { id: "9", name: "Vitamin B12", status: "Unable to Assess", score: null, totalParams: 0, outOfRange: 0, expanded: false },
  { id: "10", name: "Cancer Screening (PSA)", status: "Healthy", score: 97, totalParams: 1, outOfRange: 0, expanded: false }
];
