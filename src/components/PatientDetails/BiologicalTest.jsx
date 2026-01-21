export const BiologicalTestsSidebar = () => {
  const tests = [
    { name: "Glucose", value: "120", unit: "mg/dL" },
    { name: "White Blood Cell", value: "6,500", unit: "cells/mcL" },
    { name: "Hemoglobin A1c", value: "5.7", unit: "%" },
    { name: "Triglycerides", value: "150", unit: "mg/dL" },
    { name: "Creatinine", value: "1.0", unit: "mg/dL" },
    { name: "Liver Enzymes (ALT)", value: "30", unit: "U/L" },
    { name: "Thyroid Hormone", value: "2.5", unit: "mIU/L" },
    { name: "Vitamin D", value: "29", unit: "ng/mL" },
  ];

  return (
    <div>
      {/* <h3 className="font-semibold text-gray-800 mb-4">Biological Tests</h3> */}
      <div className="space-y-3 md:grid grid-cols-2 gap-2 items-center ">
        {tests.map((test, idx) => (
          <div
            key={idx}
            className="flex justify-between items-start bg-gray-50 p-2 rounded-lg"
          >
            <div className="flex-1">
              <div className="font-semibold text-gray-800 text-sm">
                {test.name}
              </div>
              <div className="text-xs text-gray-500">
                {test.value} <span className="text-gray-400">{test.unit}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
