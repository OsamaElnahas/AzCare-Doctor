import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Layout from "../Layout/Layout";
import Dashboard from "../Dashboard/Dashboard";
import PatientInfoForm from "./PatientInfoForm";
import QuestionnaireForm from "./QuestionnaireForm";
import ClinicalAssessment from "./ClinicalAssessment";
import BiologicalTestsForm from "./BiologicalTestsForm";
import DoctorConsultation from "./DoctorConsultation";

export default function Settion() {
  const [currentPage, setCurrentPage] = useState("newSession");
  const [sessionStep, setSessionStep] = useState(1);
  const [sessionData] = useState({
    patientInfo: {
      nusukId: "",
      fullName: "Muhammad Hammad",
      gender: "Male",
      dateOfBirth: "",
      nationality: "",
      passportNumber: "",
      diabetes: true,
      htn: true,
      asthma: false,
      allergies: "Nuts Allergy, Lactose Intolerant.",
      medications:
        "Amlodipine 5mg daily, Atorvastatin 20mg at night, and Lisinopril 10mg in the morning.",
    },
    questionnaire: {
      mainProblem: "Breathing",
      symptoms: ["Dehydration", "Cough", "Sore Throat", "Weakness"],
      emergencyFlags: ["Unconscious Earlier", "Can't Breathe", "Can't Walk"],
      severity: "Severe",
      duration: "1-6 Hours",
    },
    clinicalAssessment: {
      bloodPressure: "120/80",
      pulseRate: "72",
      sp02: "72",
      respiratoryRate: "17",
      bodyTemp: "37.3",
      height: "182",
      weight: "83",
      notes: "2 tabs of Panadol were given.",
    },
    biologicalTests: [
      { name: "Cholesterol", value: "190", unit: "mg/dL" },
      { name: "Hemoglobin", value: "14.5", unit: "g/dL" },
      { name: "White Blood Cell", value: "7.2", unit: "x10^9/L" },
      { name: "Creatinine", value: "0.9", unit: "mg/dL" },
      { name: "Urine Protein", value: "15", unit: "mg/dL" },
      { name: "Calcium", value: "9.4", unit: "mg/dL" },
      { name: "LDL Cholesterol", value: "120", unit: "mg/dL" },
    ],
    treatmentDecision: "Virtual Consultation with Doctor",
  });

  return (
    <AnimatePresence mode="wait">
      {currentPage === "dashboard" && <Dashboard key="dashboard" />}
      {currentPage === "newSession" && sessionStep === 1 && (
        <PatientInfoForm
          key="patientInfo"
          sessionData={sessionData}
          setSessionStep={setSessionStep}
        />
      )}
      {currentPage === "newSession" && sessionStep === 2 && (
        <QuestionnaireForm
          key="questionnaire"
          sessionData={sessionData}
          setSessionStep={setSessionStep}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "newSession" && sessionStep === 3 && (
        <ClinicalAssessment
          key="clinicalAssessment"
          sessionData={sessionData}
          setSessionStep={setSessionStep}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "newSession" && sessionStep === 4 && (
        <BiologicalTestsForm
          key="biologicalTests"
          sessionData={sessionData}
          setSessionStep={setSessionStep}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === "newSession" && sessionStep === 5 && (
        <DoctorConsultation
          key="doctorConsultation"
          sessionData={sessionData}
          setSessionStep={setSessionStep}
          setCurrentPage={setCurrentPage}
        />
      )}
    </AnimatePresence>
  );
}
