import React from 'react';
import './Dashboard.scss';
import { FiArrowRightCircle } from 'react-icons/fi';

function Dashboard() {
    return (
        <div className="Dashboard">
            <h1>SUBSCRIBER REPORT</h1>

            {/* Dashboard Cards  */}
            <div className="Dashboard__cards">
                <div className="Dashboard__cards_item">
                    <h3>New Subsriber</h3>
                    <h1>31</h1>
                    <div className="Dashboard__cards_item-details">
                        <a>Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </a>
                    </div>
                </div>
                <div className="Dashboard__cards_item">
                    <h3>Active Subs</h3>
                    <h1>4213</h1>
                    <div className="Dashboard__cards_item-details">
                        <a>Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </a>
                    </div>
                </div>
                <div className="Dashboard__cards_item">
                    <h3>Inactive Subs</h3>
                    <h1>125</h1>
                    <div className="Dashboard__cards_item-details">
                        <a>Lihat Detail <FiArrowRightCircle className="Dashboard__cards_item-icon" /></a>
                    </div>
                </div>
            </div>
            {/* End Dashboard Cards  */}


            {/* Program */}
            <h1>ONGOING PROGRAM</h1>

            <div className="Dashboard__programs">
                <div className="Dashboard__programs__list">
                    
                    <h3>Belajar Matematika</h3>
                    
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="Dashboard__programs__list">
                    <h3>Belajar kompetisi Kreatif</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="Dashboard__programs__list">
                    <h3>Donasi</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
                <div className="Dashboard__programs__list">
                    <h3>Study Tour Bersama</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
            {/* End Program */}


            {/* Content */}
            <h1>CONTENT LIST</h1>
            {/* <div className="Dashboard__contents">
                <div className="Dashboard__contents__list">
                    <img 
                        src={'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1560&q=80'} 
                        alt="Card photo 1" 
                        className="Dashboard__contents__list-img"
                    />
                    <h3>Mangga Senyum Menarik</h3>
                    <div className="Dashboard__contents__description">
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div> */}

        </div>
    )
}

export default Dashboard
