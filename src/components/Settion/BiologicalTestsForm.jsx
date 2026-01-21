import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Trash2, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

const AddTestModal = ({ isOpen, onClose, onAdd }) => {
  const [testData, setTestData] = useState({
    name: "",
    value: "",
    unit: "",
  });

  const handleAdd = () => {
    if (testData.name && testData.value && testData.unit) {
      onAdd(testData);
      setTestData({ name: "", value: "", unit: "" });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Add a Test Result
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={testData.name}
                onChange={(e) =>
                  setTestData({ ...testData, name: e.target.value })
                }
                placeholder="Red Blood Cell"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Value
                </label>
                <input
                  type="text"
                  value={testData.value}
                  onChange={(e) =>
                    setTestData({ ...testData, value: e.target.value })
                  }
                  placeholder="9.2"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Unit
                </label>
                <input
                  type="text"
                  value={testData.unit}
                  onChange={(e) =>
                    setTestData({ ...testData, unit: e.target.value })
                  }
                  placeholder="x10^9/L"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="flex-1 px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <Plus size={18} />
              Add
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const BiologicalTestsForm = ({ setSessionStep, setCurrentPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [biologicalTests, setBiologicalTests] = useState([
    { name: "Glucose level", value: "N/A", unit: "" },
    // { name: "Hemoglobin", value: "14.5", unit: "g/dL" },
    // { name: "White Blood Cell", value: "7.2", unit: "x10^9/L" },
    // { name: "Creatinine", value: "0.9", unit: "mg/dL" },
    // { name: "Urine Protein", value: "15", unit: "mg/dL" },
    // { name: "Calcium", value: "9.4", unit: "mg/dL" },
    // { name: "LDL Cholesterol", value: "120", unit: "mg/dL" },
    // { name: "Red Blood Cell", value: "9.2", unit: "x10^9/L" },
  ]);
  const [treatmentDecision, setTreatmentDecision] = useState(
    "Virtual Consultation with Doctor",
  );
  const navigate = useNavigate();

  const handleAddTest = (newTest) => {
    setBiologicalTests([...biologicalTests, newTest]);
  };

  const handleDeleteTest = (index) => {
    setBiologicalTests(biologicalTests.filter((_, idx) => idx !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <ProgressIndicator sessionStep={4} />
        {/* 
            <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#003B5C] rounded-full flex items-center justify-center">
                <User size={20} className="text-white" />
            </div>
            <span className="font-semibold text-[#003B5C]">Muhammad Hammad</span>
            <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
                Patient ID: 1275936
            </span>
            </div> */}

        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                Biological Tests
              </h3>
              <p className="text-sm text-gray-500">
                Result of the tests which the patient has taken
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="bg-purple-600 text-white px-5 py-2.5 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors font-medium"
            >
              Add Test Result <Plus size={18} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            {biologicalTests.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="border border-gray-200 rounded-lg p-4 relative hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => handleDeleteTest(idx)}
                  className="absolute top-2 right-2 text-red-500 hover:bg-red-50 p-1.5 rounded transition-colors"
                >
                  <Trash2 size={16} />
                </button>
                <div className="font-semibold text-gray-800 mb-2 pr-8">
                  {test.name}
                </div>
                <div className="text-2xl font-bold text-gray-800">
                  {test.value}{" "}
                  <span className="text-sm font-normal text-gray-500">
                    {test.unit}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-between items-center mb-4">
              <h4 className="text-lg font-bold text-gray-800">
                Treatment Decision
              </h4>
              <span className="text-teal-600 text-sm font-medium">
                Select One
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                "Treat in-clinic",
                "Virtual Consultation with Doctor",
                "Emergency Protocol",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => setTreatmentDecision(option)}
                  className={`border-2 rounded-lg py-3 px-4 text-sm font-medium transition-all ${
                    treatmentDecision === option
                      ? "border-purple-600 bg-purple-50 text-purple-700"
                      : "border-gray-300 hover:border-gray-400 text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentPage && setCurrentPage("dashboard")}
            className="text-gray-600 hover:text-gray-800 font-medium"
          >
            Cancel Session
          </button>
          <div className="flex gap-3">
            <button
              onClick={() => setSessionStep && setSessionStep(3)}
              className="px-6 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Back
            </button>
            <button
              onClick={() => setSessionStep(5)}
              className="px-8 py-2 bg-[#003B5C] text-white rounded-lg hover:bg-[#004A73]"
            >
              Next
            </button>
          </div>
        </div>

        <AddTestModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onAdd={handleAddTest}
        />
      </div>
    </div>
  );
};

export default BiologicalTestsForm;
