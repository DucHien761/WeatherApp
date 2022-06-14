import React from "react";
import {
  ComposedChart,
  ResponsiveContainer,
  Line,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import MoonSVG from "./moonSVG";
import SunSVG from "./sunSVG";

const TideSunChart = () => {
  const data = [
    {
      name: "6h",
      sun: 0,
      tide: 1400,
    },
    {
      name: "8h",
      sun: 3000,
      tide: 1506,
    },
    {
      name: "10h",
      sun: 4500,
      tide: 989,
    },
    {
      name: "12h",
      sun: 5000,
      tide: 1228,
    },
    {
      name: "14h",
      sun: 4500,
      tide: 1100,
    },
    {
      name: "16h",
      sun: 3000,
      tide: 1700,
    },
    {
      name: "18h",
      sun: 0,
      tide: 1400,
    },
    {
      name: "20h",
      sun: 868,
      tide: 1506,
    },
    {
      name: "22h",
      sun: 868,
      tide: 989,
    },
    {
      name: "0h",
      sun: 868,
      tide: 1228,
    },
    {
      name: "2h",
      sun: 868,
      tide: 1100,
    },
    {
      name: "4h",
      sun: 868,
      tide: 1700,
    },
    {
      name: "6h",
      sun: 868,
      tide: 1700,
    },
  ];
  const CustomizedDot = (props) => {
    const { cx, cy, value } = props;
    if (value > 1350 || value === 0) {
      return <SunSVG cx={cx} cy={cy} />;
    }
    return <MoonSVG cx={cx} cy={cy} />;
  };
  return (
    <>
      <div className="chart-title">
        <span class="blue-title">Tide</span>
        <span class="orange-title">Sunrise &amp; Sunset</span>
      </div>
      <ResponsiveContainer data-test="chart" width={1200} height={350}>
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="tide" stroke="#8884d8" />
          <Line
            type="monotone"
            dataKey="sun"
            stroke="#ff7300"
            dot={<CustomizedDot />}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </>
  );
};

export default TideSunChart;
