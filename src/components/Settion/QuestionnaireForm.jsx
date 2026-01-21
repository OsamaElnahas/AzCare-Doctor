import React, { useState } from "react";
import { User } from "lucide-react";

/* ---------------- Progress Indicator ---------------- */
const ProgressIndicator = ({ sessionStep }) => {
  const steps = [
    "Patient Info",
    "Questionnaire",
    "Clinical Assessment",
    "Biological Tests",
  ];

  return (
    <div className="flex items-center md:justify-end mb-6 gap-3 flex-wrap">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div
            className={`text-sm font-medium ${
              sessionStep === idx + 1 ? "text-teal-600" : "text-gray-400"
            }`}
          >
            {step}
          </div>

          {idx < steps.length - 1 && (
            <div
              className={`w-12 h-1 rounded ${
                sessionStep > idx + 1 ? "bg-teal-600" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

/* ---------------- Questionnaire Form ---------------- */
const QuestionnaireForm = ({ setSessionStep, setCurrentPage }) => {
  const [mainProblem, setMainProblem] = useState("");
  const [severity, setSeverity] = useState("");
  const [duration, setDuration] = useState("");

  return (
    <div className="max-w-5xl mx-auto">
      <ProgressIndicator sessionStep={2} />

      {/* Patient Info */}
      {/* <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
          <User size={20} className="text-teal-600" />
        </div>
        <span className="font-semibold text-gray-800">Muhammad Hammad</span>
        <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
          Patient ID: 1275936
        </span>
      </div> */}

      <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8">
        {/* Main Problem */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">Main Problem</h4>
            <span className="text-teal-600 text-sm">Select One</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Checkup",
              "Wound",
              "Stomach",
              "Chest",
              "Heat",
              "Breathing",
              "Pain",
              "Other",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setMainProblem(item)}
                className={`border-2 rounded-lg py-2 px-4 text-sm font-medium transition-colors
                  ${
                    mainProblem === item
                      ? "border-purple-600 bg-purple-50 text-purple-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Symptoms (Checkboxes عادي) */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">Symptoms:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Dehydration",
              "Blisters",
              "Cough",
              "Weakness",
              "Heat Exhaustion",
              "Cuts",
              "Sore Throat",
              "Rash",
              "Sunburn",
              "Burns",
              "Runny Nose",
              "Wheezing",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer flex-wrap"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded"
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Emergency Flags */}
        <div>
          <h4 className="text-lg font-bold text-gray-800 mb-4">
            Emergency flags:
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Bleeding Heavily",
              "Can't Breathe",
              "Chest Pain Spreading",
              "Unconscious Earlier",
              "Can't Walk",
              "High fever with confusion",
            ].map((item) => (
              <label
                key={item}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded"
                />
                <span className="text-sm">{item}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Severity */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">Severity</h4>
            <span className="text-teal-600 text-sm">Select One</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {["Mild", "Moderate", "Severe"].map((item) => (
              <button
                key={item}
                onClick={() => setSeverity(item)}
                className={`border-2 rounded-lg py-3 px-6 text-sm font-medium transition-colors
                  ${
                    severity === item
                      ? "border-purple-600 bg-purple-50 text-purple-700"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Duration */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-bold text-gray-800">Duration</h4>
            <span className="text-teal-600 text-sm">Select One</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["< 1 Hour", "1-6 Hours", "6-24 Hours", "> 1 Day"].map((item) => (
              <button
                key={item}
                onClick={() => setDuration(item)}
                className={`border-2 rounded-lg py-3 px-6 text-sm font-medium transition-colors
                    ${
                      duration === item
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setCurrentPage("dashboard")}
          className="text-gray-600 hover:text-gray-800"
        >
          Cancel Session
        </button>

        <div className="flex gap-3">
          <button
            onClick={() => setSessionStep(1)}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Back
          </button>

          <button
            onClick={() => setSessionStep(3)}
            className="px-8 py-2 bg-[#003B5C] text-white rounded-lg hover:bg-[#004A73]"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireForm;
