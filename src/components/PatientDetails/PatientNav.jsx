import React, { useState } from "react";
import { QuestionsTab } from "./Questions";
import { BiologicalTestsSidebar } from "./BiologicalTest";
import PatientTab from "./PatientTab";
import Vitals from "./Vitals";

export default function PatientNav() {
  const [activeTab, setActiveTab] = useState("patient");
  const Tabs = [
    { id: "patient", label: "Patient" },
    { id: "questions", label: "Questions" },
    { id: "vitals", label: "Vitals" },
    { id: "biological", label: "Biological Tests" },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 w-full">
      <div className="mb-2 border-b border-gray-300 flex items-center flex-wrap justify-between w-full">
        {Tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}{" "}
      </div>

      {activeTab === "patient" && <PatientTab />}
      {activeTab === "questions" && <QuestionsTab />}
      {activeTab === "vitals" && <Vitals />}
      {activeTab === "biological" && <BiologicalTestsSidebar />}
    </div>
  );
}
