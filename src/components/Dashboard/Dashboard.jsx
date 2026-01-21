import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Search,
  ChevronDown,
  Printer,
  Download,
  ExternalLink,
  Play,
  Pause,
  Mic,
  MicOff,
  Video,
  VideoOff,
  Volume2,
  VolumeX,
  PhoneCall,
  X,
} from "lucide-react";
import { BiologicalTestsSidebar } from "../PatientDetails/BiologicalTest";
import PatientNav from "../PatientDetails/PatientNav";
import { useNavigate } from "react-router-dom";

// ==================== TAB NAVIGATION COMPONENT ====================
export const TabNavigation = ({ activeTab, onTabChange, stage }) => {
  const tabs =
    stage === "consulting"
      ? [
          { id: "video", label: "Live Video Call" },
          { id: "attachments", label: "Attachments" },
        ]
      : [
          { id: "prescription", label: "Prescription" },
          { id: "notes", label: "Notes & Instructions" },
        ];

  return (
    <div className="flex gap-6 border-b border-gray-200 bg-white px-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`py-3 px-1 text-sm font-medium border-b-2 transition-colors ${
            activeTab === tab.id
              ? "border-purple-600 text-purple-600"
              : "border-transparent text-gray-600 hover:text-gray-800"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// ==================== STETHOSCOPE RECORDINGS ====================
export const StethoscopeRecordings = ({ audioEnabled = true }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [playingIndex, setPlayingIndex] = useState(null);

  const recordings = [{ duration: "0:19", waveform: true }];

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-teal-600">
          {audioEnabled ? "Stethoscope" : "Stethoscope Recordings"}
        </h3>
        {audioEnabled && (
          <button className="flex items-center gap-2 text-red-600 text-sm font-medium">
            <Volume2 size={16} />
            Audio On
          </button>
        )}
      </div>

      <div className="space-y-3">
        {recordings.map((rec, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <button
              onClick={() => setPlayingIndex(playingIndex === idx ? null : idx)}
              className="text-red-500 hover:text-red-600"
            >
              {playingIndex === idx ? <Pause size={20} /> : <Play size={20} />}
            </button>
            <div className="flex-1 h-12 flex items-center gap-0.5">
              {Array.from({ length: 60 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${
                    rec.waveform && playingIndex === idx && i < 30
                      ? "bg-red-500"
                      : "bg-gray-200"
                  }`}
                  style={{
                    height: `${Math.random() * 100}%`,
                    minHeight: "4px",
                  }}
                />
              ))}
            </div>
            <span className="text-sm text-red-500 font-medium w-12">
              {rec.duration}
            </span>
          </div>
        ))}
      </div>

      {audioEnabled && (
        <button
          onClick={() => setIsRecording(!isRecording)}
          className={`w-full mt-4 py-2 px-4 rounded-lg flex items-center justify-center gap-2 font-medium ${
            isRecording
              ? "bg-red-500 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <div
            className={`w-3 h-3 rounded-full ${isRecording ? "bg-white" : "bg-red-500"}`}
          />
          {isRecording ? "Stop Recording" : "Start Recording"}
        </button>
      )}
    </div>
  );
};

// ==================== NOTES & INSTRUCTIONS TAB ====================
export const NotesInstructionsTab = ({ onSubmitFinal }) => {
  const [doctorNotes, setDoctorNotes] = useState(
    "Continue current medication regimen and Monitor blood pressure and cholesterol levels.",
  );
  const [medicationInstructions, setMedicationInstructions] = useState(
    "Take Amlodipine 5mg every morning, Atorvastatin 20mg each evening, and Lisinopril 10mg when you wake up.",
  );
  const [warningSign, setWarningSign] = useState(
    "Report any dizziness, muscle weakness, or persistent headaches immediately to your healthcare provider.",
  );
  const [followUp, setFollowUp] = useState("Follow up in 4 Days");

  return (
    <div className="p-6 space-y-6">
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">Doctor Notes</h3>
        <textarea
          onChange={(e) => setDoctorNotes(e.target.value)}
          className=" w-full border border-gray-300 rounded-lg p-3 h-16  focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">
          Medication Instructions
        </h3>
        <textarea
          onChange={(e) => setMedicationInstructions(e.target.value)}
          className=" w-full border border-gray-300 rounded-lg p-3 h-16  focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">
          Warning Signs to watch for
        </h3>
        <textarea
          onChange={(e) => setWarningSign(e.target.value)}
          className=" w-full border border-gray-300 rounded-lg p-3 h-16  focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div>
        <h3 className="font-semibold text-gray-800 mb-2">
          Follow-up Instructions
        </h3>
        <textarea
          onChange={(e) => setFollowUp(e.target.value)}
          className=" w-full border border-gray-300 rounded-lg p-3 h-16  focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <button
        className="w-full  bg-[#003B5C] text-white py-3 rounded-lg font-medium hover:bg-[#004A73] transition-colors"
        onClick={onSubmitFinal}
      >
        Submit Prescription & Notes
      </button>
    </div>
  );
};

// ==================== PRESCRIPTION TAB ====================
export const PrescriptionTab = ({ onSubmitFinal }) => {
  const [medications, setMedications] = useState([
    { name: "Panadol", size: "500", dosage: "3 Times per Day" },
    { name: "Panadol", size: "500", dosage: "3 Times per Day" },
  ]);

  const addMedication = () => {
    setMedications([
      ...medications,
      { name: "", size: "", dosage: "3 Times per Day" },
    ]);
  };

  const removeMedication = (index) => {
    setMedications(medications.filter((_, idx) => idx !== index));
  };

  const EmptyState = () => (
    <div className="text-center py-12">
      <h3 className="text-2xl font-semibold text-teal-600 mb-4">
        Nothing prescribed Yet
      </h3>
      <button
        onClick={addMedication}
        className="inline-flex items-center gap-2 px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
      >
        <Plus size={18} />
        Add Medicine
      </button>
    </div>
  );

  return (
    <div className="p-6">
      {medications.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {medications.map((med, idx) => (
            <div
              key={idx}
              className="grid grid-cols-12 gap-4 items-center bg-gray-50 p-4 rounded-lg"
            >
              <div className="col-span-5">
                <label className="block text-xs text-gray-600 mb-1">
                  Medication Name
                </label>
                <div className="relative">
                  <Search
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    value={med.name}
                    onChange={(e) => {
                      const updated = [...medications];
                      updated[idx].name = e.target.value;
                      setMedications(updated);
                    }}
                    placeholder="Panadol"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              <div className="col-span-3">
                <label className="block text-xs text-gray-600 mb-1">
                  Size (Mg)
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>500</option>
                  <option>250</option>
                  <option>1000</option>
                </select>
              </div>
              <div className="col-span-3">
                <label className="block text-xs text-gray-600 mb-1">
                  Dosage
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>3 Times per Day</option>
                  <option>2 Times per Day</option>
                  <option>Once Daily</option>
                  <option>As Needed</option>
                </select>
              </div>
              <div className="col-span-1 pt-5">
                <button
                  onClick={() => removeMedication(idx)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          <button
            onClick={addMedication}
            className="flex items-center gap-2 text-gray-700 font-medium hover:text-gray-900"
          >
            <Plus size={18} />
            Add Medicine
          </button>
        </div>
      )}
      <button
        onClick={onSubmitFinal}
        className="w-full mt-10 bg-[#003B5C] text-white py-3 rounded-lg font-medium hover:bg-[#004A73]"
      >
        Submit Prescription & Notes
      </button>
    </div>
  );
};

// ==================== ATTACHMENTS TAB ====================
export const AttachmentsTab = ({ onFinish }) => {
  const documents = [
    {
      title: "X-Ray Report",
      uploadedBy: "",
      date: "dddd/mmmm/yyyy",
    },
    {
      title: "Ultra Sound Report",
      uploadedBy: "",
      date: "dddd/mmmm/yyyy",
    },
    {
      title: "Current medications of patient",
      uploadedBy: "",
      date: "dddd/mmmm/yyyy",
    },
    {
      title: "Required medications",
      uploadedBy: "",
      date: "dddd/mmmm/yyyy",
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-start gap-8 flex-wrap mb-6">
        <div className="flex-1">
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-purple-700 transition-colors mb-6">
            <Plus size={18} />
            New Document
          </button>

          <div className="space-y-2">
            {documents.map((doc, idx) => (
              <div
                key={idx}
                className="py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer border border-transparent hover:border-gray-200"
              >
                <div className="font-medium text-gray-800 text-sm">
                  {doc.title}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  Uploaded By: {doc.uploadedBy}
                </div>
                <div className="text-xs text-gray-500">{doc.date}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="bg-white border border-gray-200 rounded-lg py-3 px-3">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-2">
                <button className="flex items-center gap-1 text-sm px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50">
                  <Printer size={14} />
                  Print
                </button>
                <button className="flex items-center gap-1 text-sm px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50">
                  <Download size={14} />
                  Download
                </button>
                <button className="p-1.5 text-red-500 hover:bg-red-50 rounded">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg p-8 border border-gray-200">
              <div className="bg-white p-6 rounded shadow-sm">
                <div className="text-sm  text-gray-600">
                  <div>Patient:</div>
                  <div>Date: dddd/mmmmm/yyyyy</div>
                  <div className="mt-4">
                    <div className="font-semibold"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="
    w-full sm:w-auto
    px-4 bg-[#003B5C] text-white
    py-3 rounded-lg font-medium
    hover:bg-[#004A73]
    transition-colors
    mt-6
  "
          onClick={onFinish}
        >
          End Consultation and Proceed to Prescription
        </button>
      </div>
    </div>
  );
};

// ==================== LIVE VIDEO CALL TAB ====================
export const LiveVideoCallTab = ({ onFinish }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);

  return (
    // <div className="p-6">
    //   <div
    //     className="relative bg-gray-800 rounded-lg overflow-hidden"
    //     style={{ aspectRatio: "16/9" }}
    //   >
    //     <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
    //       <div className="text-white text-center">
    //         <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
    //           <Video size={40} />
    //         </div>
    //         <div className="text-xl font-semibold">Dr.</div>
    //         <div className="text-sm opacity-75 mt-1">Connected</div>
    //       </div>
    //     </div>

    //     <div
    //       className="absolute bottom-4 left-4 bg-gray-900 rounded-lg overflow-hidden shadow-xl"
    //       style={{ width: "200px", aspectRatio: "16/9" }}
    //     >
    //       <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-900 to-blue-900">
    //         <div className="text-white text-center">
    //           <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
    //             <Video size={20} />
    //           </div>
    //           <div className="text-xs mt-2">You</div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
    //       <button
    //         onClick={() => setIsMuted(!isMuted)}
    //         className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
    //           isMuted
    //             ? "bg-red-500 text-white"
    //             : "bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-90"
    //         }`}
    //       >
    //         {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
    //       </button>
    //       <button
    //         onClick={() => setIsVideoOff(!isVideoOff)}
    //         className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
    //           isVideoOff
    //             ? "bg-red-500 text-white"
    //             : "bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-90"
    //         }`}
    //       >
    //         {isVideoOff ? <VideoOff size={20} /> : <Video size={20} />}
    //       </button>
    //     </div>
    //   </div>
    //   <div className="flex justify-end">
    //     <button className="px-3 ml-auto bg-[#003B5C] text-white py-3 rounded-lg font-medium hover:bg-[#004A73] transition-colors mt-6">
    //       End Consultation and Proceed to Prescription
    //     </button>
    //   </div>
    // </div>
    <div className="p-3 sm:p-6">
      {/* Main Video Container */}
      <div className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video">
        {/* Doctor Video */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 to-purple-900">
          <div className="text-white text-center">
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Video size={32} />
            </div>
            <div className="text-lg sm:text-xl font-semibold">Dr.</div>
            <div className="text-xs sm:text-sm opacity-75 mt-1">Connected</div>
          </div>
        </div>

        {/* Self Video */}
        <div
          className="
            absolute bottom-3 left-3
            w-24 sm:w-28 md:w-36
            aspect-video
            bg-gray-900 rounded-lg overflow-hidden shadow-xl
          "
        >
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-900 to-blue-900">
            <div className="text-white text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto">
                <Video size={18} />
              </div>
              <div className="text-xs mt-1 sm:mt-2">You</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div
          className="
            absolute
            bottom-4 sm:bottom-6
            left-1/2 -translate-x-1/2
            flex gap-2 sm:gap-3
          "
        >
          <button
            onClick={onFinish}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${
              isMuted
                ? "bg-red-500 text-white"
                : "bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-90"
            }`}
          >
            {isMuted ? <MicOff size={14} /> : <Mic size={14} />}
          </button>

          <button
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-colors ${
              isVideoOff
                ? "bg-red-500 text-white"
                : "bg-gray-800 bg-opacity-70 text-white hover:bg-opacity-90"
            }`}
          >
            {isVideoOff ? <VideoOff size={14} /> : <Video size={14} />}
          </button>
        </div>
      </div>

      {/* End Call Button */}
      <div className="flex justify-end">
        <button
          className="
    w-full sm:w-auto
    px-4 bg-[#003B5C] text-white
    py-3 rounded-lg font-medium
    hover:bg-[#004A73]
    transition-colors
    mt-6
  "
          onClick={onFinish}
        >
          End Consultation and Proceed to Prescription
        </button>
      </div>
    </div>
  );
};

// ==================== INCOMING CONSULTATION MODAL ====================
export const IncomingConsultationModal = ({ isOpen, onAccept, onReject }) => {
  const [countdown, setCountdown] = useState(9);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          onAccept();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onAccept]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl p-8 w-full max-w-md shadow-2xl"
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
            <PhoneCall size={40} className="text-teal-600" />
          </div>
        </div>

        <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Incoming Consultation Request
        </h3>
        <p className="text-gray-600 text-center mb-8">
          Video Call From Clinic : Mina-001
        </p>

        <div className="flex gap-3 mb-4">
          <button
            onClick={onReject}
            className="flex-1 py-3 px-6 border-2 border-red-500 text-red-500 rounded-lg font-medium hover:bg-red-50 transition-colors flex items-center justify-center gap-2"
          >
            <X size={18} />
            Reject
          </button>
          <button
            onClick={onAccept}
            className="flex-1 py-3 px-6 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
          >
            <PhoneCall size={18} />
            Accept
          </button>
        </div>

        <p className="text-center text-sm text-gray-500">
          Auto Accepting in: {countdown}s
        </p>
      </motion.div>
    </div>
  );
};

// ==================== READY TO CONSULT SCREEN ====================
export const ReadyToConsultScreen = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#003B5C] mb-4">
          Ready to Consult
        </h1>
        <p className="text-2xl text-teal-600">Waiting for a Call</p>
        <div className="mt-8 flex justify-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-teal-500 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// ==================== MAIN DEMO APP ====================
export default function DoctorConsultationApp() {
  const [activeTab, setActiveTab] = useState("video");
  const [appStage, setAppStage] = useState("ready");
  // ready | incoming | consulting | finished
  useEffect(() => {
    if (appStage !== "ready") return;

    const timer = setTimeout(() => {
      setAppStage("incoming");
    }, 5000);

    return () => clearTimeout(timer);
  }, [appStage]);
  const handleFinalSubmit = () => {
    setActiveTab("video");
    setAppStage("ready");
  };

  // 1Ready
  if (appStage === "ready") {
    return <ReadyToConsultScreen />;
  }

  // Incoming Call
  if (appStage === "incoming") {
    return (
      <IncomingConsultationModal
        isOpen={true}
        onAccept={() => {
          setAppStage("consulting");
          setActiveTab("video");
        }}
        onReject={() => setAppStage("ready")}
      />
    );
  }
  if (appStage === "consulting") {
    return (
      <div className="mx-auto">
        <div className="md:grid grid-cols-12 gap-6 px-6">
          {/* LEFT */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <PatientNav />
            <StethoscopeRecordings audioEnabled={activeTab === "video"} />
          </div>

          {/* RIGHT */}
          <div className="md:col-span-7 lg:col-span-8 bg-white rounded-lg border border-gray-200">
            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
              stage={appStage}
            />

            {activeTab === "video" && (
              <LiveVideoCallTab
                onFinish={() => {
                  setAppStage("finished");
                  setActiveTab("prescription");
                }}
              />
            )}

            {activeTab === "attachments" && (
              <AttachmentsTab
                onFinish={() => {
                  setAppStage("finished");
                  setActiveTab("prescription");
                }}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
  if (appStage === "finished") {
    return (
      <div className="mx-auto">
        <div className="md:grid grid-cols-12 gap-6 px-6">
          {/* LEFT */}
          <div className="md:col-span-5 lg:col-span-4 space-y-4">
            <PatientNav />
            <StethoscopeRecordings audioEnabled={false} />
          </div>

          {/* RIGHT */}
          <div className="md:col-span-7 lg:col-span-8 bg-white rounded-lg border border-gray-200">
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === "prescription" && (
              <PrescriptionTab onSubmitFinal={handleFinalSubmit} />
            )}

            {activeTab === "notes" && (
              <NotesInstructionsTab onSubmitFinal={handleFinalSubmit} />
            )}
          </div>
        </div>
      </div>
    );
  }

  // return (
  //   <div>
  //     <div className=" mx-auto">
  //       <div className="md:grid grid-cols-12 gap-6 px-6">
  //         <div className=" md:col-span-5 lg:col-span-4 space-y-4">
  //           <PatientNav />
  //           <StethoscopeRecordings audioEnabled={activeTab === "video"} />
  //         </div>

  //         <div className="md:col-span-7 lg:col-span-8 bg-white rounded-lg border border-gray-200">
  //           <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

  //           {activeTab === "video" && <LiveVideoCallTab />}
  //           {activeTab === "attachments" && <AttachmentsTab />}

  //           {activeTab === "prescription" && <PrescriptionTab />}
  //           {activeTab === "notes" && <NotesInstructionsTab />}
  //         </div>
  //       </div>
  //     </div>

  //     <IncomingConsultationModal
  //       isOpen={showIncomingCall}
  //       onAccept={() => {
  //         setShowIncomingCall(false);
  //         setActiveTab("video");
  //       }}
  //       onReject={() => setShowIncomingCall(false)}
  //     />
  //   </div>
  // );
}
