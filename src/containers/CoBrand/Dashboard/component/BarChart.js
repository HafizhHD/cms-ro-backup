import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const StackedChart = (props) => {

    const [subsState] = useState({
        series: props.data,
        options: {
            chart: {
              type: 'bar',
              height: props.height
            },
            plotOptions: {
              bar: {
                borderRadius: 4,
                horizontal: true,
              }
            },
            dataLabels: {
              enabled: false
            },
            xaxis: {
                categories: props.label
            },
        }
    });

    if(props.data.length === 0) return <h2>No Data</h2>
    return <ApexCharts options={subsState.options} series={subsState.series} type={subsState.options.chart.type} height={subsState.options.chart.height} />
}

export default StackedChart;
