import React from "react";
import {
  Search,
  Bell,
  User,
  TrendingUp,
  TrendingDown,
  Clock,
  Users,
  Stethoscope,
  AlertCircle,
  Plus,
  QrCode,
  Calendar,
  ChevronDown,
  Trash2,
  Upload,
  ChartArea,
  Menu,
} from "lucide-react";
import { useAuth } from "../AuthContext";

export default function Header({ title, toggleSidebar }) {
  const { userName } = useAuth();
  return (
    <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between flex-wrap">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu size={20} className="text-gray-600" />
        </button>
        <div className="lg:text-2xl font-bold text-gray-800">{title}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-green-600">
          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          <span className="text-sm font-medium">Online</span>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Search size={20} className="text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={18} className="text-gray-600" />
          </div>
          <span className="text-sm font-medium text-teal-600">
            Dr. {userName || "User"}
          </span>
          <ChevronDown size={16} className="text-gray-600" />
        </div>
      </div>
    </div>
  );
}
