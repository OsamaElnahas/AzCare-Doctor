import React from "react";

export default function Vitals() {
  return (
    <div className="">
      <div className="space-y-6">
        <div className="mb-2 grid grid-cols-2  gap-5">
          <div className="flex  flex-col gap-3 ">
            <div className="text-sm text-gray-500 mb-2">Blood Pressure</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="text-sm text-gray-500 mb-2">Pulse Rate</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="text-sm text-gray-500 mb-2">Respiratory Rate</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="text-sm text-gray-500 mb-2">Sp02</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="text-sm text-gray-500 mb-2">Body Temperature</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="text-sm text-gray-500 mb-2">Hight</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
          <div className="flex flex-col gap-3 ">
            <div className="text-sm text-gray-500 mb-2">weight</div>
            <div className="font-semibold text-gray-800"></div>
          </div>
        </div>

        <div className="flex flex-col gap-3  mb-2">
          <div className="text-sm text-gray-500 mb-2">Examination Notes</div>
          <div className="font-semibold text-gray-800 text-base"></div>
        </div>
      </div>
    </div>
  );
}
