import React from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);



function LineChart({chartData})
 {
    return <Line type='line' data={chartData}  />;
}

export default LineChart;   