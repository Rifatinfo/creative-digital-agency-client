"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";


const data = [
  { name: "Mon", uv: 120 },
  { name: "Tue", uv: 180 },
  { name: "Wed", uv: 150 },
  { name: "Thu", uv: 220 },
  { name: "Fri", uv: 170 },
  { name: "Sat", uv: 260 },
  { name: "Sun", uv: 190 },
];


const Chart = () => {
  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
        >
          {/* Grid */}
          <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />

          {/* Axes */}
          <XAxis
            dataKey="name"
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={{ stroke: "#e5e7eb" }}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#64748b", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip */}
          <Tooltip
            cursor={{ fill: "rgba(199, 52, 80, 0.08)" }}
            contentStyle={{
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              border: `1px solid "#c73450"`,
              boxShadow: "0 10px 20px rgba(0,0,0,0.08)",
            }}
            labelStyle={{ color: "#c73450", fontWeight: 600 }}
          />

          {/* Legend */}
          <Legend
            wrapperStyle={{
              paddingTop: 10,
              fontSize: "12px",
            }}
          />

          {/* Bar */}
          <Bar
            dataKey="uv"
            name="Revenue"
            fill="#c73450"
            barSize={48}
            radius={[6, 6, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
