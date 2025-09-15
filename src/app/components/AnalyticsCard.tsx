import React from "react";
import ThreeDotsIcon from "./icons/ThreeDotsIcon";
import UpArrowIcon from "./icons/UpArrowIcon";
import DownArrowIcon from "./icons/DownArrowIcon";

interface AnalyticsCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  color?: string;
}

export default function AnalyticsCard({ title, value, change, trend, color }: AnalyticsCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md border border-gray-200 relative ${color}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-gray-500 font-medium">{title}</h3>
        <ThreeDotsIcon />
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl font-bold mb-2">{value}</h2>
          <span className={`text-sm flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' ? <UpArrowIcon /> : <DownArrowIcon />}
            {change} vs last month
          </span>
        </div>
        <div className="w-24 h-12 rounded-lg bg-gray-100 flex items-center justify-center text-sm font-semibold text-gray-400">
          Graph
        </div>
      </div>
    </div>
  );
}