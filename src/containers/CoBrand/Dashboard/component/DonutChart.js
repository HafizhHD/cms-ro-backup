import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const DonutChart = (props) => {

    const [subsState] = useState({
        series: props.data,
        options: {
            colors: props.colors,
            chart: {
                width: props.width,
                type: 'donut',
                toolbar: {
                  show: true
                },
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
            tooltip: {
                enabled: true,
                custom: ({ series, seriesIndex, dataPointIndex, w }) => {
                    let total = 0;
                    for (let x of series) { total += x; }
                    let selected = series[seriesIndex];
                    return '<div style="color:white;padding:5px;background-color:' + props.colors[seriesIndex] + ';font-weight:bold" >' + w.config.labels[seriesIndex] + ": " + selected + " (" + (selected / total * 100).toFixed(1) + "%)" + '</div>';
                }
            },
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
