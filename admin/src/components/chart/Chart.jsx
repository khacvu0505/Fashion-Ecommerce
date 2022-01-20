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
} from "recharts";

// Css
import "./Chart.css";

export default function Chart({ title, data, dataKey, grid }) {
  return (
    <div className="chart">
      <h3 className="chartTitle">{title}</h3>
      {/*aspect={4 / 1}:chỗ này nghĩa là chiều rộng 4 đơn vị thì chiều cao 1 đơn vị */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="#5550bd" />
          {/* <YAxis /> */}
          <Tooltip />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#5550bd"
            activeDot={{ r: 8 }}
          />
          {grid && <CartesianGrid strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
