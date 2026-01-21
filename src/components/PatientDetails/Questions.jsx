export const QuestionsTab = () => {
  return (
    <div className="">
      <div className="space-y-6">
        <div>
          <div className="text-sm text-gray-500 mb-2">Main Problem</div>
          <div className="font-semibold text-gray-800 text-lg">Breathing</div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Symptoms</div>
          <div className="space-y-1">
            <div className="font-semibold text-gray-800">Dehydration</div>
            <div className="font-semibold text-gray-800">Cough</div>
            <div className="font-semibold text-gray-800">Sore Throat</div>
            <div className="font-semibold text-gray-800">Weakness</div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500 mb-2">Emergency Flags</div>
          <div className="space-y-1">
            <div className="font-semibold text-gray-800">Can't Breathe</div>
            <div className="font-semibold text-gray-800">Can't Walk</div>
            <div className="font-semibold text-gray-800">
              Unconscious Earlier
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-sm text-gray-500 mb-2">Severity</div>
            <div className="font-semibold text-gray-800 text-lg">Severe</div>
          </div>
          <div>
            <div className="text-sm text-gray-500 mb-2">Duration</div>
            <div className="font-semibold text-gray-800 text-lg">1-6 Hours</div>
          </div>
        </div>
      </div>
    </div>
  );
};
