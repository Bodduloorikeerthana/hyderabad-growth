"use client";
import { useState,useEffect } from "react";
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
    const [barSize, setBarSize] = useState(30);

  useEffect(() => {
    const handleResize = () => {
      // Set bar size based on window width
      setBarSize(window.innerWidth >= 768 ? 50 : 30);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Initial check
    handleResize();

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); 
  return (     
    <div className="mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">       
      <div className="bg-white rounded-2xl shadow-lg p-5 overflow-hidden">         
        <p className="text-center font-bold text-bold text-black py-4">           
          Average Price per Square Foot (₹)         
        </p>         
        <ResponsiveContainer width="100%" height={300}>           
          <BarChart             
            data={data}             
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}           
          >             
            <CartesianGrid 
              strokeDasharray="3 3" 
              opacity={0.3} 
              vertical={false} 
            />             
            <XAxis               
              dataKey="name"               
              tick={{ fill: "#1E3A8A",  fontWeight: "bold" }}               
              angle={-45}  
              className="datakey-x"             
              textAnchor="end"               
              interval={0}
              height={70} // Increased height to accommodate rotated labels             
            />             
            <YAxis               
              tick={{ fill: "#1E3A8A",  fontWeight: "bold" }}
              width={50}
              className="datakey-y" // Reduced width to save space             
            />             
            <Tooltip               
              contentStyle={{                 
                backgroundColor: "#F9FAFB",                 
                borderRadius: "8px",                 
                borderColor: "#D1D5DB",                 
                fontSize: "12px",
                padding: "8px"               
              }}             
            />             
            <Bar               
              dataKey="price"               
              fill="#1D4ED8" 
              className=""              
              barSize={barSize}  // Further reduced bar size for better mobile fit               
              radius={[8, 8, 0, 0]}               
              label={{                 
                position: "top",                 
                fill: "#1E3A8A",                 
                fontWeight: "bold",                 
                fontSize: 10 // Smaller font for labels               
              }}             
            />           
          </BarChart>         
        </ResponsiveContainer>       
      </div>     
    </div>   
  ); 
}