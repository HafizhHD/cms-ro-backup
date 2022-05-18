import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import { FiArrowRightCircle, FiAlertCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Heading from '../../../components/UI/Heading/Heading';
import axios from 'axios';
import RKLoader from '../../../components/UI/RKLoaderInner/RKLoader';
import { useHistory } from 'react-router';
import { getContentList, getProgramList } from '../../../components/API/filter';
import {FaWhatsapp} from 'react-icons/fa'

function Dashboard() {

    const [isLoading, setLoading] = useState(true);
    const [programList, setProgramList] = useState();
    const [contentList, setContentList] = useState();
    const [countVariable, setCountVariable] = useState();

    const [userType, setUserType] = useState('5');
    const [userRegSelect, setUserRegSelect] = useState('5')
    const [userReg, setUserReg] = useState(18)

    const [programTotalSelect, setProgramTotalSelect] = useState('5')
    const [programTotal, setProgramTotal] = useState(123)

    const [contentTotalSelect, setContentTotalSelect] = useState('5')
    const [contentTotal, setContentTotal] = useState(250)

    const [isUpdatingActive, setUpdatingActive] = useState(false);

    const history = useHistory();

    const userData = JSON.parse(localStorage.getItem('userData'));

    const contentView = [250, 209, 125, 23, 9]
    const programView = [123, 20, 12, 8, 3]

    const programParams = {
        whereKeyValues: {
            cobrandEmail: userData.email,
            status: 'active'
        },
        orderKeyValues: {
            startDate: 1
        },
        limit: 5
    };
    const contentParams = {
        whereKeyValues: {
            cobrandEmail: userData.email,
            status: 'active'
        },
        orderKeyValues: {
            startDate: 1
        },
        limit: 5
    }

    useEffect(() => {
        setLoading(true);
        getProgramList(programParams)
        .then(response => {
            let programs = response.data.programs.map((d, idx) => (
                
                <div className="Dashboard__programs__list">
                    <h3 onClick={() => {
                        localStorage.setItem('programSelected', d._id);
                        history.push('/program/view');
                    }}>{d.programName + " (" + programView[idx]+" views)"}</h3>
                    <p>{d.ProgramDescription}</p>
                </div>
            ));
            console.log(response.data.programs)
            setProgramList(programs);
            console.log(programs);
            getContentList(contentParams)
            .then(response => {
                let contents = response.data.contents.map((d, idx) => (
                    <div className="Dashboard__programs__list">
                        <h3 onClick={() => {
                            localStorage.setItem('contentSelected', d._id);
                            history.push('/content/view');
                        }}>{d.contentName + " (" + contentView[idx]+" views)"}</h3>
                        <p>{d.contentDescription.substring(0,100)}</p>
                    </div>)
                    // ({/*<div className="Dashboard__contents__item">
                    //     <div className="Dashboard__contents__cover">
                    //         <img 
                    //             src={d.contentThumbnail} 
                    //             className="Dashboard__contents__cover-img"
                    //         />
                    //         <div className="Dashboard__contents__shadow"></div>
                    //     </div>
                    //     <div className="Dashboard__contents__description">
                    //         <h3>{d.contentName}</h3>
                    //         <p>
                    //             {d.contentDescription}
                    //         </p>
                    //         <NavLink to="/content/view"
                    //             onClick={() => {
                    //                 localStorage.setItem('contentSelected', d._id)
                    //             }}>Lihat Detail 
                    //             <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                    //         </NavLink>
                    //     </div>
                    //         </div>*/})
                );
                setContentList(contents);
                console.log(contents);
                let countingVariable = {
                    countProgram: 0,
                    countContent: 0
                }
                let params1 = {
                    whereKeyValues: {
                        cobrandEmail: userData.email
                    },
                    limit: Number.MAX_SAFE_INTEGER
                }
                const promiseP = getProgramList(params1);
                const promiseC = getContentList(params1);
                Promise.all([promiseP, promiseC]).then(response => {
                    countingVariable.countProgram = response[0].data.programs.length;
                    countingVariable.countContent = response[1].data.contents.length;
                    setCountVariable(countingVariable);
                    setLoading(false);
                });
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
        })
        .catch(error => {
            console.log(error);
            setLoading(false);
        });
        
    }, []);

    useEffect(() => {
        if(userType === '1') {
            let countingVariable = {
                countProgram: 1,
                countContent: 0
            }
            setCountVariable(countingVariable);
        }
        else if(userType === '2') {
            let countingVariable = {
                countProgram: 1,
                countContent: 1
            }
            setCountVariable(countingVariable);
        }
        else if(userType === '3') {
            let countingVariable = {
                countProgram: 1,
                countContent: 5
            }
            setCountVariable(countingVariable);
        }
        else if(userType === '4') {
            let countingVariable = {
                countProgram: 1,
                countContent: 9
            }
            setCountVariable(countingVariable);
        }
        else if(userType === '5') {
            let countingVariable = {
                countProgram: 1,
                countContent: 14
            }
            setCountVariable(countingVariable);
        }

        if(userRegSelect === '1') setUserReg(1)
        else if(userRegSelect === '2') setUserReg(5)
        else if(userRegSelect === '3') setUserReg(6)
        else if(userRegSelect === '4') setUserReg(17)
        else if(userRegSelect === '5') setUserReg(24)

        if(programTotalSelect === '1') setProgramTotal(12)
        else if(programTotalSelect === '2') setProgramTotal(23)
        else if(programTotalSelect === '3') setProgramTotal(48)
        else if(programTotalSelect === '4') setProgramTotal(123)
        else if(programTotalSelect === '5') setProgramTotal(123)

        if(contentTotalSelect === '1') setContentTotal(contentView[4]*7)
        else if(contentTotalSelect === '2') setContentTotal(contentView[3]*7)
        else if(contentTotalSelect === '3') setContentTotal(contentView[2]*7)
        else if(contentTotalSelect === '4') setContentTotal(contentView[1]*7)
        else if(contentTotalSelect === '5') setContentTotal(contentView[0]*7)

        setUpdatingActive(false)
    }, [isUpdatingActive]);

    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <div className="Dashboard">
            <div className='div1'>
                <Heading headingName="YOUR CO-BRAND DATA" />
                <a className='wa2' href='http://wa.me/628119004410' target="_blank"><FaWhatsapp className='whatshap'/> Need Help? Click Here!</a>
            </div>
            

            {/* Dashboard Cards  */}
            <div className="Dashboard__cards">
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Programs Added</h3>
                        <select
                            name="userTypeProgram">
                            <option value="1">Today</option>
                            <option value="2">Last 7 Days</option>
                            <option value="3">Last 30 Days</option>
                            <option value="4">Last 365 Days</option>
                            <option value="5">All Time</option>
                        </select>
                    </div>
                    <h1>{countVariable.countProgram}</h1>
                    
                    
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/program">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Contents Added</h3>
                        <select
                            name="userType"
                            value={userType}
                            onChange={(e) => {
                                console.log('bruh');
                                console.log(e.currentTarget.value);
                                setUserType(e.currentTarget.value);
                                setUpdatingActive(true);
                            }}>
                            <option value="1">Today</option>
                            <option value="2">Last 7 Days</option>
                            <option value="3">Last 30 Days</option>
                            <option value="4">Last 365 Days</option>
                            <option value="5">All Time</option>
                        </select>
                    </div>
                    <h1>{countVariable.countContent}</h1>
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/content">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Total Users Registered</h3>
                        <select
                            name="userRegSelect"
                            value={userRegSelect}
                            onChange={(e) => {
                                console.log('bruh');
                                console.log(e.currentTarget.value);
                                setUserRegSelect(e.currentTarget.value);
                                setUpdatingActive(true);
                            }}>
                            <option value="1">Today</option>
                            <option value="2">Last 7 Days</option>
                            <option value="3">Last 30 Days</option>
                            <option value="4">Last 365 Days</option>
                            <option value="5">All Time</option>
                        </select>
                    </div>
                    <h1>{userReg}</h1>
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/">
                            Lihat Detail <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* End Dashboard Cards  */}

            {/* Dashboard Cards  */}
            <div className="Dashboard__cards">
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Total Program Views</h3>
                        <select
                            name="programTotalSelect"
                            value={programTotalSelect}
                            onChange={(e) => {
                                console.log('bruh');
                                console.log(e.currentTarget.value);
                                setProgramTotalSelect(e.currentTarget.value);
                                setUpdatingActive(true);
                            }}>
                            <option value="1">Today</option>
                            <option value="2">Last 7 Days</option>
                            <option value="3">Last 30 Days</option>
                            <option value="4">Last 365 Days</option>
                            <option value="5">All Time</option>
                        </select>
                    </div>
                    <h1>{programTotal}</h1>
                    
                    
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/program">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Total Content Views</h3>
                        <select
                            name="contentTotalSelect"
                            value={contentTotalSelect}
                            onChange={(e) => {
                                console.log('bruh');
                                console.log(e.currentTarget.value);
                                setContentTotalSelect(e.currentTarget.value);
                                setUpdatingActive(true);
                            }}>
                            <option value="1">Today</option>
                            <option value="2">Last 7 Days</option>
                            <option value="3">Last 30 Days</option>
                            <option value="4">Last 365 Days</option>
                            <option value="5">All Time</option>
                        </select>
                    </div>
                    <h1>{contentTotal}</h1>
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/content">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
            </div>
            {/* End Dashboard Cards  */}


            {/* Program */}
            <h1>TOP 5 MOST VIEWED PROGRAMS</h1>

            <div className="Dashboard__programs">
                {programList.length === 0 ? (
                    <h3>Tidak Ada Program</h3>
                ) : programList}
            </div>
            {/* End Program */}


            {/* Content */}
            <h1>TOP 5 MOST VIEWED CONTENTS</h1>
            <div className="Dashboard__programs">
                {contentList.length === 0 ? (
                    <h3>Tidak Ada Konten</h3>
                ) : contentList}
            </div>

        </div>
    )
}

export default Dashboard
