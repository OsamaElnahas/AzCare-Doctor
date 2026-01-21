import React from "react";
import { User, Calendar, Plus } from "lucide-react";

export default function PatientCard({ patient }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200">
      <div className="flex flex-col items-center mb-4 bg-white rounded-t-xl      border-gray-200">
        <div className="bg-gray-200  p-4 w-full flex flex-col items-center rounded-t-xl">
          <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
            <User size={32} className="text-blue-950" />
          </div>
          <div className="text-sm font-bold text-blue-900 mb-2">
            Patient ID: {patient.id}
          </div>
        </div>

        <div className="bg-white p-4 w-full">
          <div className="flex items-center gap-2 text-xs text-gray-500 mb-2 ">
            <Calendar size={14} />
            {patient.visits} Visits Previously
          </div>
          <div className="font-semibold text-gray-800">{patient.name}</div>
          <div className="text-sm text-gray-500">{patient.gender}</div>
          <div className="text-sm text-gray-500">{patient.age} Years Old</div>
        </div>
        <div className="btns p-4 w-full flex flex-col items-center">
          <button className="w-full bg-white border border-gray-300 text-gray-700 py-2 rounded-lg  m-2 hover:bg-gray-50 transition-colors">
            View Details
          </button>
          <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center justify-center gap-2">
            Start Session <Plus size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
