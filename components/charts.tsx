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
    <div className="flex flex-col items-center bg-gradient-to-b from-blue-100 to-white p-10 rounded-3xl shadow-2xl w-full max-w-5xl mx-auto">
      <p className="text-gray-600 text-lg mb-5 font-medium">
        Average Price per Square Foot (₹)
      </p>
      <p className="text-gray-600 text-lg mb-8 font-medium">
        Top Area in Hyderabad (2023-2025)
      </p>
      <div className="w-full bg-white p-6 rounded-2xl shadow-lg">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 50 }}
          >
            <CartesianGrid strokeDasharray="3 3" opacity={0.4} />
            <XAxis
              dataKey="name"
              tick={{ fill: "#1E3A8A", fontSize: 16, fontWeight: "bold" }}
              angle={-15}
              textAnchor="end"
            />
            <YAxis
              tick={{ fill: "#1E3A8A", fontSize: 16, fontWeight: "bold" }}
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
                fontSize: "16px",
                fontWeight: "bold",
                color: "#1E3A8A",
              }}
            />
            <Bar
              dataKey="price"
              fill="#1D4ED8"
              barSize={55}
              radius={[12, 12, 0, 0]}
              label={{
                position: "top",
                fill: "#1E3A8A",
                fontWeight: "bold",
                fontSize: 16,
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
