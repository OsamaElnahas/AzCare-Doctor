import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { User, Search, Bell, ChevronDown } from "lucide-react";

const ProgressIndicator = ({ sessionStep }) => {
  const steps = [
    "Patient Info",
    "Questionnaire",
    "Clinical Assessment",
    "Biological Tests",
    "Doctor Consultation",
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

const DoctorConsultation = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev === "...") return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 p-8">
        <div className="max-w-5xl mx-auto">
          <ProgressIndicator sessionStep={5} />

          {/* <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#003B5C] rounded-full flex items-center justify-center">
              <User size={20} className="text-white" />
            </div>
            <span className="font-semibold text-[#003B5C]">
              Muhammad Hammad
            </span>
            <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full">
              Patient ID: 1275936
            </span>
          </div> */}

          <div className="flex items-center justify-center min-h-[500px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h2 className="text-5xl font-bold text-[#003B5C] mb-4">
                  Calling Doctor
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p className="text-2xl text-teal-600 font-semibold">
                  Dr. Ahmed ElHadad
                </p>
              </motion.div>

              <motion.div
                className="mt-8 flex justify-center items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex gap-1">
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
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">
                    Connecting{dots}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorConsultation;
