"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

const data = [
  { name: "Gachibowli", price: 8200 },
  { name: "Financial District", price: 7500 },
  { name: "Kokapet", price: 5800 },
  { name: "Kukatpally", price: 5000 },
  { name: "Madhapur", price: 4590 },
  { name: "Miyapur", price: 3750 },
];

export default function HyderabadLandPrices() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full bg-white p-4 rounded-2xl shadow-2xl">
        <p className="text-center text-black text-lg mb-4 font-bold">
          Average Price per Square Foot (₹)
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, left: 10, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
            <XAxis
              dataKey="name"
              tick={{ fill: "#1E3A8A", fontSize: 12, fontWeight: "bold" }}
              angle={-10}
              textAnchor="end"
              interval={0} // Ensures every label is displayed
            />
            <YAxis
              tick={{ fill: "#1E3A8A", fontSize: 12, fontWeight: "bold" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#F9FAFB",
                borderRadius: "8px",
                borderColor: "#D1D5DB",
                color: "#111827",
              }}
            />
            <Legend
              verticalAlign="top"
              align="center"
              height={40}
              wrapperStyle={{
                fontSize: "14px",
                fontWeight: "bold",
                color: "#1E3A8A",
              }}
            />
            <Bar
              dataKey="price"
              fill="#1D4ED8"
              barSize={40} // Reduced bar size for mobile
              radius={[12, 12, 0, 0]}
              label={{
                position: "top",
                fill: "#1E3A8A",
                fontWeight: "bold",
                fontSize: 12, // Smaller font for labels
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
