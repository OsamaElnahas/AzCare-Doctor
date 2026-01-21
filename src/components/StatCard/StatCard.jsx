import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function StatCard({ title, value, change, isNegative }) {
  return (
    <div className="bg-white px-6 py-2 rounded-xl border border-gray-200 shadow-sm">
      <div className="text-gray-500 text-sm mb-2">{title}</div>
      <div className="flex items-end justify-between">
        <div className="text-3xl font-bold text-gray-900">{value}</div>
        <div
          className={`flex items-center gap-1 text-sm font-medium ${isNegative ? "text-red-500" : "text-green-600"}`}
        >
          {isNegative ? <TrendingDown size={16} /> : <TrendingUp size={16} />}
          {change}
        </div>
      </div>
    </div>
  );
}
