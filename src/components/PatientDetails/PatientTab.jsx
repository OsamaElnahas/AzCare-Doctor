import React from "react";

export default function PatientTab() {
  return (
    <div className="">
      <div className="space-y-6">
        <div className="flex flex-col gap-3  mb-2">
          <div className="text-sm text-gray-500 mb-2">Full Name</div>
          <div className="font-semibold text-gray-800 text-base"></div>
        </div>

        <div className="mb-2 flex  gap-5 justify-between flex-wrap">
          <div className="flex flex-col gap-3 items-center">
            <div className="text-sm text-gray-500 mb-2">Gender</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="text-sm text-gray-500 mb-2">Age</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="text-sm text-gray-500 mb-2">Nationality</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="text-sm text-gray-500 mb-2">Patient ID</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <div className="text-sm text-gray-500 mb-2">Nusk ID</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-2">
          <div className="text-sm text-gray-500 mb-2">Known Conditions</div>
          <div className="font-semibold text-gray-800 text-base"></div>
        </div>
        <div className="flex flex-col gap-3  mb-2">
          <div className="text-sm text-gray-500 mb-2">Medications</div>
          <div className="font-semibold text-gray-800 text-base"></div>
        </div>
      </div>
    </div>
  );
}
