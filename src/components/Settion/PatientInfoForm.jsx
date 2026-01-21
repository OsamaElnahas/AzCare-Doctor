import React, { useEffect, useState } from "react";
import { QrCode, Calendar } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";
import { Html5Qrcode } from "html5-qrcode";

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

const PatientInfoForm = ({ sessionData, setSessionStep }) => {
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState(false);
  const [qrResult, setQrResult] = useState("");

  useEffect(() => {
    let scanner;

    if (showScanner) {
      scanner = new Html5Qrcode("qr-reader");

      scanner.start(
        { facingMode: "environment" },
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          console.log("QR Result:", decodedText);
          setQrResult(decodedText);

          scanner.stop().then(() => {
            setShowScanner(false);
          });
        },
        () => {},
      );
    }

    return () => {
      if (scanner) {
        scanner.stop().catch(() => {});
      }
    };
  }, [showScanner]);
  return (
    <div className="max-w-5xl mx-auto">
      <ProgressIndicator sessionStep={1} />

      <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
        {/* <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          Patient Details
        </h3>
        <p className="text-gray-500">
          Enter the identification details of the person
        </p>
      </div> */}
        <button
          onClick={() => setShowScanner(true)}
          className="bg-purple-600 ml-auto text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors"
        >
          Scan QR <QrCode size={20} />
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nusuk ID (optional)
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full name*
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 ">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gender*
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none">
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth
            </label>

            <div className="relative">
              <input
                type="date"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nationality
            </label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-2 appearance-none">
              <option>Select nationality</option>
              <option>Saudi Arabia</option>
              <option>Egypt</option>
              <option>Pakistan</option>
              <option>India</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Passport Number
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <h4 className="text-lg font-bold text-gray-800 mb-4">Alert Tags</h4>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Known Conditions:
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded"
                />
                <span>Diabetes?</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded"
                />
                <span>HTN?</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 text-purple-600 rounded"
                />
                <span>Asthma?</span>
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Allergies
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Medications
            </label>
            <textarea className="w-full border border-gray-300 rounded-lg px-4 py-2 h-24" />
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => Navigate("dashboard")}
          className="text-gray-600 hover:text-gray-800"
        >
          Cancel Session
        </button>
        <div className="flex gap-3">
          <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            Back
          </button>
          <button
            onClick={() => setSessionStep(2)}
            className="px-8 py-2 bg-[#003B5C] text-white rounded-lg hover:bg-[#004A73]"
          >
            Next
          </button>
        </div>
      </div>
      {showScanner && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-[320px]">
            <div id="qr-reader" className="w-full" />
            <button
              onClick={() => setShowScanner(false)}
              className="mt-4 w-full text-sm text-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientInfoForm;
