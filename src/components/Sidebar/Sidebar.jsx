import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/WhatsApp Image 2026-01-21 at 1.55.16 AM.jpeg";
import { Users, Clock, AlertCircle, Plus, LogOut } from "lucide-react";
import { useAuth } from "../AuthContext";

export default function Sidebar({ isOpen, onToggle }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const links = [
    {
      name: "",
      icon: Users,
      to: ".",
    },
    {
      name: "",
      icon: Clock,
      to: "history",
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 bg-opacity-30 z-40 lg:hidden"
          onClick={onToggle}
        ></div>
      )}

      <div
        className={`w-24 bg-white border-r border-gray-200 h-screen fixed top-0 left-0 z-50 flex flex-col transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static lg:flex lg:transition-none`}
      >
        {/* Close button on mobile */}
        <div className="flex justify-end lg:hidden">
          <button
            onClick={onToggle}
            className="px-2 py-1 hover:bg-gray-100 rounded-lg transition-colors text-gray-600 font-bold"
          >
            ✕
          </button>
        </div>

        {/* Logo */}
        <div className="px-1 py-2 lg:py-[22.5px] border-b border-gray-200 m-auto">
          <div className="flex items-center gap-2 justify-center ">
            <div className="px-4  rounded-full m-auto flex items-center justify-center">
              <img
                src={logo}
                className="w-full h-full border m-auto border-white rounded-full bg-white"
                alt="Logo"
              />
            </div>
            {/* <div>
              <div className="font-bold text-gray-800">Medical</div>
              <div className="text-xs text-gray-500">Solutions&</div>
            </div> */}
          </div>
        </div>

        {/* Start Session
        <button
          onClick={() => {
            navigate("settion");
          }}
          className="mx-4 mt-6 bg-[#003B5C] text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#004A73] transition-colors"
        >
          Start Session <Plus size={18} />
        </button>
         */}

        {/* Navigation */}
        <nav className="flex-1 p-2 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.to}
              className={({ isActive }) =>
                `w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#E8EEF7] text-[#003B5C]"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <link.icon size={20} />
              <span>{link.name}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="py-2 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2 p-2 box-border  rounded-lg text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <LogOut size={12} className="text-black" />
            <span>Logout</span>
          </button>
        </div>

        {/* Emergency Section */}
        {/* <div className="p-4 border-t border-gray-200">
          <div className="text-sm font-semibold text-gray-800 mb-2">
            Clinic ID: Mina-001
          </div>
          <div className="text-xs text-gray-500 mb-3">
            In case of an absolute Emergency
          </div>
          <div className="space-y-4 mt-5">
            <button className="w-full border-2 text-white border-red-500 bg-red-500 py-2 px-2 rounded-lg flex items-center justify-center gap-1 hover:bg-red-400 transition-colors text-sm">
              <AlertCircle size={18} />
              Emergency Consultation
            </button>
            <button className="w-full border-2 text-white border-red-500 bg-red-500 py-2 px-2 text-sm rounded-lg flex items-center justify-center gap-2 hover:bg-red-400 transition-colors">
              <AlertCircle size={18} />
              Call an Ambulance
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}
