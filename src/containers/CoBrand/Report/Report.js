import React, { useState } from 'react';
import './Report.scss';
import { FiInfo } from 'react-icons/fi';
import ApexChart from 'react-apexcharts';

function Report() {

    

    const [activeSubsState] = useState({
        series: [83],
        options: {
            chart: {
                type: 'radialBar',
            },
            plotOptions: {
            radialBar: {
                hollow: {
                    size: '60%'
                },
                track: {
                    show: true,
                    startAngle: undefined,
                    endAngle: undefined,
                    background: '#ccc',
                    strokeWidth: '97%',
                    opacity: 1,
                    margin: 1, 
                    dropShadow: {
                        enabled: false,
                        top: 0,
                        left: 0,
                        blur: 3,
                        opacity: 0.5
                    }
                },
                dataLabels: {
                    show: true,
                    value: {
                        show: true,
                        fontSize: '3.5rem',
                        fontFamily: undefined,
                        fontWeight: 400,
                        color: '#1e917b',
                        offsetY: 16,
                        formatter: function (val) {
                            return val + '%'
                        }
                    },
                }
            },
            },
            colors: ['#1e917b'],
            labels: [''],
        }
    });

    const [newSubsState] = useState({
        series: [{
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          colors: ['#1e917b'],
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          title: {
            text: '',
            align: 'left'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
    });

    const [subsState] = useState({
        series: [{
            name: 'Inflation',
            data: [2.3, 3.1, 4.0, 10.1, 4.0, 3.6, 3.2, 2.3, 1.4, 0.8, 0.5, 0.2]
          }],
          options: {
            chart: {
              height: 350,
              type: 'bar',
              width: '100%'
            },
            colors: ['#1e917b'],
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '60%',
                dataLabels: {
                  position: 'top', // top, center, bottom
                },
              }
            },
            dataLabels: {
              enabled: true,
              formatter: function (val) {
                return val + "%";
              },
              offsetY: -20,
              style: {
                fontSize: '12px',
                colors: ["#304758"]
              }
            },
            
            xaxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              position: 'top',
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false
              },
              crosshairs: {
                fill: {
                  type: 'gradient',
                  gradient: {
                    colorFrom: '#D8E3F0',
                    colorTo: '#BED1E6',
                    stops: [0, 100],
                    opacityFrom: 0.4,
                    opacityTo: 0.5,
                  }
                }
              },
              tooltip: {
                enabled: true,
              }
            },
            yaxis: {
              axisBorder: {
                show: false
              },
              axisTicks: {
                show: false,
              },
              labels: {
                show: false,
                formatter: function (val) {
                  return val + "%";
                }
              }
            
            },
            title: {
              text: '',
              floating: true,
              offsetY: 330,
              align: 'center',
              style: {
                color: '#444'
              }
            }
          }
    })



    return (
        <div className="Report">
            <h1>REPORT</h1>

            <h2 className="Report__subs__heading">Subscriber</h2>
            <div className="Report__activesubscriber card_report">
                <div className="card_report_heading">
                    <h3>Active Subscriber</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    <div id="chart">
                        <ApexChart options={activeSubsState.options} series={activeSubsState.series} type="radialBar" height={350} />
                    </div>
                </div>
            </div>
            <div className="Report__newssubscriber card_report">
                <div className="card_report_heading">
                    <h3>New Subscriber</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    <div>
                        <ApexChart options={newSubsState.options} series={newSubsState.series} height={250} />
                    </div>
                </div>
            </div>
            <div className="Report__subscriber card_report">
                <div className="card_report_heading">
                    <h3>Subscriber</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    <div>
                        <ApexChart options={subsState.options} series={subsState.series} type="bar" height={350} />
                    </div>
                </div>
            </div>

            <h2 className="Report__program__heading">Program</h2>
            <div className="Report__programcategory card_report">
                <div className="card_report_heading">
                    <h3>Program Category</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    Program Category
                </div>
            </div>
            <div className="Report__programpublish card_report">
                <div className="card_report_heading">
                    <h3>Total Program Published</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    Total Program Published
                </div>
            </div>

            <h2 className="Report__content__heading">Content</h2>
            <div className="Report__contentcategory card_report">
                <div className="card_report_heading">
                    <h3>Content Category</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    content category
                </div>
            </div>
            <div className="Report__contentpublish card_report">
                <div className="card_report_heading">
                    <h3>Total Content Published</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    total content published
                </div>
            </div>

        </div>
    )
}

export default Report
