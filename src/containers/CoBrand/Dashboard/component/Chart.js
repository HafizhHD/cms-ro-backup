import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const Chart = (props) => {

    let data = [], label = [];

    // console.log(props);

    props.chartData.forEach((value, i) => {
        if(value !== 0) {
            data.push(value);
            label.push(props.chartLabel[i]);
        }
    })

    // console.log('data: ', data);
    // console.log('label: ', label);

    const [subsState] = useState({
        series: data,
        options: {
            chart: {
                width: 380,
                type: props.chartType
            },
            labels: label,
            legend: {
                position: 'bottom'
            }
        }
    });

    if(data.length === 0) return <h2>No Data</h2>
    return <ApexCharts options={subsState.options} series={subsState.series} type={props.chartType} height={350} />
}

export default Chart;
