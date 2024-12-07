"use client";
import {
  ResponsiveContainer,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  Tooltip,
} from "recharts";
import React from "react";

const data = [
  {
    subject: "Sales",
    AllocatedBudget: 110,
    ActualSpending: 130,
  },
  {
    subject: "Marketing",
    AllocatedBudget: 130,
    ActualSpending: 100,
  },
  {
    subject: "Development",
    AllocatedBudget: 150,
    ActualSpending: 160,
  },
  {
    subject: "Customer Support",
    AllocatedBudget: 80,
    ActualSpending: 100,
  },
  {
    subject: "Technology",
    AllocatedBudget: 90,
    ActualSpending: 120,
  },
  {
    subject: "Administration",
    AllocatedBudget: 100,
    ActualSpending: 90,
  },
];

const MyRadarChart = () => {
  return (
    <div className="w-full h-[200px] md:h-[300px] lg:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Allocated Budget"
            dataKey="AllocatedBudget"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="Actual Spending"
            dataKey="ActualSpending"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyRadarChart;


