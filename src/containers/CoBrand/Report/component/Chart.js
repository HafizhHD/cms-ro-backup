import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const Chart = (props) => {

    console.log(props.chartType);

    const [subsState] = useState({
        series: props.chartData,
        options: {
            chart: {
                width: 380,
                type: props.chartType
            },
            labels: props.chartLabel,
            legend: {
                position: 'bottom'
            }
        }
    });

    console.log(subsState);


    return <ApexCharts options={subsState.options} series={subsState.series} type={props.chartType} height={350} />
}

export default Chart;
