import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const DonutChart = (props) => {

    const [subsState] = useState({
        series: props.data,
        options: {
            chart: {
                width: props.width,
                type: 'donut'
            },
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                showAlways: true,
                                show: true
                            }
                        }
                    }
                }
            },
            labels: props.label,
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
          
          
        
    });

    if(props.data.length === 0) return <h2>No Data</h2>
    return <ApexCharts options={subsState.options} series={subsState.series} type={subsState.options.chart.type} />
}

export default DonutChart;
