"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
} from "recharts";

const MyChart = () => {
  const data = [
    { time: "00:00", blueLine: 20, greenLine: 10, orangeLine: 15 },
    { time: "01:00", blueLine: 30, greenLine: 40, orangeLine: 20 },
    { time: "02:00", blueLine: 25, greenLine: 35, orangeLine: 40 },
    { time: "03:00", blueLine: 50, greenLine: 30, orangeLine: 20 },
    { time: "04:00", blueLine: 70, greenLine: 40, orangeLine: 25 },
    { time: "05:00", blueLine: 50, greenLine: 60, orangeLine: 30 },
    { time: "06:00", blueLine: 80, greenLine: 70, orangeLine: 40 },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="0" vertical={false} />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="blueLine" stroke="blue" dot={false} />
          <Line
            type="monotone"
            dataKey="greenLine"
            stroke="green"
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="orangeLine"
            stroke="orange"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MyChart;
