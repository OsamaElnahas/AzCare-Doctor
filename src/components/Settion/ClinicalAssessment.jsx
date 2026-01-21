import React from "react";
import { User, Upload } from "lucide-react";

const ProgressIndicator = ({ sessionStep }) => {
  const steps = [
    "Patient Info",
    "Questionnaire",
    "Clinical Assessment",
    "Biological Tests",
  ];
  return (
    <div className="flex items-center justify-end mb-6 gap-3">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div
            className={`text-sm font-medium ${sessionStep === idx + 1 ? "text-teal-600" : "text-gray-400"}`}
          >
            {step}
          </div>
          {idx < steps.length - 1 && (
            <div
              className={`w-12 h-1 rounded ${sessionStep > idx + 1 ? "bg-teal-600" : "bg-gray-300"}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

const ClinicalAssessment = ({
  sessionData,
  setSessionStep,
  setCurrentPage,
}) => (
  <div className="max-w-5xl mx-auto">
    <ProgressIndicator sessionStep={3} />

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
      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h4 className="text-lg font-bold text-gray-800">Vital Signs</h4>
            <p className="text-sm text-gray-500">
              Physiological measurements of the Patient
            </p>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            Fetch from Device
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Blood Pressure
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pulse Rate
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Sp02
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Respiratory Rate
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Body Temperature (Celsius)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Height(cm)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Weight(kg)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <h4 className="text-lg font-bold text-gray-800">
              Examination Notes
            </h4>
            <p className="text-sm text-gray-500">
              Write your diagnosis below & Attach files
            </p>
          </div>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700">
            Attach Documents <Upload size={18} />
          </button>
        </div>
        <textarea className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32" />
      </div>
    </div>

    <div className="flex justify-between mt-6">
      <button
        onClick={() => setCurrentPage("dashboard")}
        className="text-gray-600 hover:text-gray-800"
      >
        Cancel Session
      </button>
      <div className="flex gap-3">
        <button
          onClick={() => setSessionStep(2)}
          className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={() => setSessionStep(4)}
          className="px-8 py-2 bg-[#003B5C] text-white rounded-lg hover:bg-[#004A73]"
        >
          Next
        </button>
      </div>
    </div>
  </div>
);

export default ClinicalAssessment;
