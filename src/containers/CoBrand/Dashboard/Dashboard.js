import React from 'react';
import './Dashboard.scss';
import { FiArrowRightCircle, FiAlertCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Heading from '../../../components/UI/Heading/Heading';

function Dashboard() {
    return (
        <div className="Dashboard">
            <Heading headingName="SUBSCRIPTION" />
            

            {/* Dashboard Cards  */}
            <div className="Dashboard__cards">
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>New Subsriber</h3>
                        <FiAlertCircle className="Dashboard__cards_item-icon" />
                    </div>
                    <h1>31</h1>
                    
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Active Devices</h3>
                        <FiAlertCircle className="Dashboard__cards_item-icon" />
                    </div>
                    <h1>4213</h1>
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Inactive Subs</h3>
                        <FiAlertCircle className="Dashboard__cards_item-icon" />
                    </div>
                    <h1>125</h1>
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/">
                            Lihat Detail <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
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
            <div className="Dashboard__contents">
                <div className="Dashboard__contents__item">
                    <div className="Dashboard__contents__cover">
                        <img 
                            src={'https://images.unsplash.com/photo-1573246123716-6b1782bfc499?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1560&q=80'} 
                            alt="Content 1" 
                            className="Dashboard__contents__cover-img"
                        />
                        <div className="Dashboard__contents__shadow"></div>
                    </div>
                    <div className="Dashboard__contents__description">
                        <h3>Mangga Senyum Menarik</h3>
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>

                <div className="Dashboard__contents__item">
                    <div className="Dashboard__contents__cover">
                        <img 
                            src={'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80'} 
                            alt="Content 2" 
                            className="Dashboard__contents__cover-img"
                        />
                        <div className="Dashboard__contents__shadow"></div>
                    </div>
                    <div className="Dashboard__contents__description">
                        <h3>Burger mengandung banyak kegunaan </h3>
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>


                <div className="Dashboard__contents__item">
                    <div className="Dashboard__contents__cover">
                        <img 
                            src={'https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} 
                            alt="Content 3" 
                            className="Dashboard__contents__cover-img"
                        />
                        <div className="Dashboard__contents__shadow"></div>
                    </div>
                    <div className="Dashboard__contents__description">
                        <h3>Enaknya menyantap seafood di bulan puasa</h3>
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                    
                </div>

                <div className="Dashboard__contents__item">
                    <div className="Dashboard__contents__cover">
                        <img 
                            src={'https://images.unsplash.com/photo-1621570169694-4867389dcc66?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} 
                            alt="Content 4" 
                            className="Dashboard__contents__cover-img"
                        />
                        <div className="Dashboard__contents__shadow"></div>
                    </div>
                    <div className="Dashboard__contents__description">
                        <h3>Cinta menyatukan kita</h3>
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>

                <div className="Dashboard__contents__item">
                    <div className="Dashboard__contents__cover">
                        <img 
                            src={'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'} 
                            alt="Content 5" 
                            className="Dashboard__contents__cover-img"
                        />
                        <div className="Dashboard__contents__shadow"></div>
                    </div>
                    <div className="Dashboard__contents__description">
                        <h3>Ayo belajar</h3>
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>

                <div className="Dashboard__contents__item">
                    <div className="Dashboard__contents__cover">
                        <img 
                            src={'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80'} 
                            alt="Content 6" 
                            className="Dashboard__contents__cover-img"
                        />
                        <div className="Dashboard__contents__shadow"></div>
                    </div>
                    <div className="Dashboard__contents__description">
                        <h3>Kebersamaan di tengah pandemic</h3>
                        <p>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <NavLink to="/">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>

                
                
            </div>

        </div>
    )
}

export default Dashboard
