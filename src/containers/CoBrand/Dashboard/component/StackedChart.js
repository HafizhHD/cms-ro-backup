import React, { useState } from 'react';
import ApexCharts from 'react-apexcharts';

const StackedChart = (props) => {

    const [subsState] = useState({
        series: props.data,
        options: {
            colors: props.colors,
            chart: {
                type: "bar",
                height: props.height,
                stacked: true,
                toolbar: {
                    show: true
                },
                zoom: {
                    enabled: true
                }
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                        position: "bottom",
                        offsetX: -10,
                        offsetY: 0
                        }
                    }
                }
            ],
            plotOptions: {
                bar: {
                    horizontal: false
                }
            },
            xaxis: {
                type: "category",
                categories: props.label,
                decimalsInFloat: 0
            },
            yaxis: [
                {
                    labels: {
                        formatter: function(val) {
                            return val.toFixed(0);
                        }
                    }
                }
            ],
            legend: {
                position: "bottom",
                offsetX: -10
            },
            fill: {
                opacity: 1
            }
        }
    });

    if(props.data.length === 0) return <h2>No Data</h2>
    return <ApexCharts options={subsState.options} series={subsState.series} type={subsState.options.chart.type} height={subsState.options.chart.height} />
}

export default StackedChart;
