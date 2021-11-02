import React, {useState, useEffect} from 'react';
import './Dashboard.scss';
import { FiArrowRightCircle, FiAlertCircle } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import Heading from '../../../components/UI/Heading/Heading';
import axios from 'axios';
import RKLoader from '../../../components/UI/RKLoader/RKLoader';
import { useHistory } from 'react-router';

function Dashboard() {

    const [isLoading, setLoading] = useState(true);
    const [programList, setProgramList] = useState();
    const [contentList, setContentList] = useState();
    const [countVariable, setCountVariable] = useState();

    const history = useHistory();

    const userData = JSON.parse(localStorage.getItem('userData'));
    const programParams = {
        whereKeyValues: {
            cobrandEmail: userData.email
        },
        orderKeyValues: {
            startDate: -1
        },
        limit: 4
    };
    const contentParams = {
        whereKeyValues: {
            cobrandEmail: userData.email
        },
        orderKeyValues: {
            startDate: -1
        },
        limit: 6
    }

    useEffect(() => {
        setLoading(true);
        axios({
            method: 'post',
            url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
            data: programParams,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            let programs = response.data.programs.map((d) => (
                <div className="Dashboard__programs__list">
                    <h3 onClick={() => {
                        localStorage.setItem('programSelected', d._id);
                        history.push('/program/view');
                    }}>{d.programName}</h3>
                    <p>{d.ProgramDescription}</p>
                </div>
            ));
            setProgramList(programs);
            console.log(programs);
            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentFilter',
                data: contentParams,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                let contents = response.data.contents.map((d) => (
                    <div className="Dashboard__contents__item">
                        <div className="Dashboard__contents__cover">
                            <img 
                                src={d.contentThumbnail} 
                                className="Dashboard__contents__cover-img"
                            />
                            <div className="Dashboard__contents__shadow"></div>
                        </div>
                        <div className="Dashboard__contents__description">
                            <h3>{d.contentName}</h3>
                            <p>
                                {d.contentDescription}
                            </p>
                            <NavLink to="/content/view"
                                onClick={() => {
                                    localStorage.setItem('contentSelected', d._id)
                                }}>Lihat Detail 
                                <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                            </NavLink>
                        </div>
                    </div>
                ));
                setContentList(contents);
                console.log(contents);
                let countingVariable = {
                    countProgram: 0,
                    countContent: 0
                }
                let params1 = {
                    whereKeyValues: {
                        cobrandEmail: userData.email
                    }
                }
                const promiseP = axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
                    data: params1,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const promiseC = axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentFilter',
                    data: params1,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
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

    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <div className="Dashboard">
            <Heading headingName="YOUR CO-BRAND DATA" />
            

            {/* Dashboard Cards  */}
            <div className="Dashboard__cards">
                <div className="Dashboard__cards_item">
                    <div className="Dashboard__cards_item-heading">
                        <h3>Programs Added</h3>
                        <FiAlertCircle className="Dashboard__cards_item-icon" />
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
                        <FiAlertCircle className="Dashboard__cards_item-icon" />
                    </div>
                    <h1>{countVariable.countContent}</h1>
                    <div className="Dashboard__cards_item-details">
                        <NavLink to="/content">Lihat Detail 
                            <FiArrowRightCircle className="Dashboard__cards_item-icon" />
                        </NavLink>
                    </div>
                </div>
                {/*<div className="Dashboard__cards_item">
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
                </div>*/}
            </div>
            {/* End Dashboard Cards  */}


            {/* Program */}
            <h1>ONGOING PROGRAM</h1>

            <div className="Dashboard__programs">
                {programList.length === 0 ? (
                    <h3>Tidak Ada Program</h3>
                ) : programList}
            </div>
            {/* End Program */}


            {/* Content */}
            <h1>CONTENT LIST</h1>
            <div className="Dashboard__contents">
                {contentList.length === 0 ? (
                    <h3>Tidak Ada Konten</h3>
                ) : contentList}

                
                
            </div>

        </div>
    )
}

export default Dashboard
