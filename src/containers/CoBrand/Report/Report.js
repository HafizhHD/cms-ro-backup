import React from 'react';
import './Report.scss';
import { FiInfo } from 'react-icons/fi';

function Report() {
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
                    Active Subscriber
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
