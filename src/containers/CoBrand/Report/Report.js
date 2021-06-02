import React, { useState } from 'react';
import './Report.scss';
import { FiInfo } from 'react-icons/fi';
import ApexChart from 'react-apexcharts';

function Report() {

    

    const [activeSubsState, setActiveSubsState] = useState({
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
                        fontSize: '4.5rem',
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
        },
        
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
                    New Subscriber
                </div>
            </div>
            <div className="Report__subscriber card_report">
                <div className="card_report_heading">
                    <h3>Subscriber</h3>
                    <FiInfo className="card_report_heading-icon" />
                </div>
                <div className="card_report_content">
                    New Subscriber
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
