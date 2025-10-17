import React from "react";
import ThreeDotsIcon from "./icons/ThreeDotsIcon";
import UpArrowIcon from "./icons/UpArrowIcon";
import DownArrowIcon from "./icons/DownArrowIcon";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface AnalyticsCardProps {
  className?: string;
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  color?: string;
  data: { name: string; value: number }[];
  lineColor?: string;
}

export default function AnalyticsCard({ title, value, change, trend, color, data, lineColor }: AnalyticsCardProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md border border-gray-200 relative ${color}`}>
      <div className="flex justify-between items-start mb-4">
        <h3 className="dark:text-black font-medium">{title}</h3>
        <ThreeDotsIcon />
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-4xl dark:text-black font-bold mb-2">{value}</h2>
          <span className={`text-sm flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
            {trend === 'up' ? <UpArrowIcon /> : <DownArrowIcon />}
            {change} vs last month
          </span>
        </div>
        <div className="w-40 h-30 rounded-lg bg-gray-100 flex float-left text-sm font-semibold text-gray-400">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={lineColor} stopOpacity={0.4} />
                  <stop offset="95%" stopColor={lineColor} stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Tooltip cursor={false} />
              <Area
                type="monotone"
                dataKey="value"
                stroke={lineColor}
                strokeWidth={3}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}