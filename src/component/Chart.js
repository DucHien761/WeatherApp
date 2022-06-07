import React from "react";
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title);



function LineChart({chartData})
 {
    return <Line height="350" width="1200"  viewBox="0 0 2000 200" type='line' data={chartData}  sun={chartData}/>;
}

export default LineChart;   