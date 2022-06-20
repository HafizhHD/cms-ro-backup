import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import Heading from '../../../../components/UI/Heading/Heading';
import { FiArrowLeftCircle, FiCalendar, FiEdit, FiTrash2 } from 'react-icons/fi';
import { getContentList } from './../../../../components/API/filter';

import TableProgram from './../../../../components/UI/Table/Table';
import { useState, useEffect } from 'react';
import columns from './columns'
import axios from 'axios';
import './ViewProgram.scss';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import Warning from '../../../../components/UI/Warning/Warning'

function ViewProgram() {

    const [program, setProgram] = useState();
    const [steps, setSteps] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState();
    const [programDeleting, setProgramDeleting] = useState(null);
    const [showWarning, setShowWarning] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    
    const history = useHistory();

    const dateFormat = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }

    useEffect(() => {
        if(confirmDelete) history.push('/cms/program');
    }, [confirmDelete]);

    useEffect(() => {
        if(!showWarning && !confirmDelete) {
            localStorage.removeItem('programDeleting');
        }
    }, [showWarning, confirmDelete])

    useEffect(() => {
        setLoading(true);
        const id = localStorage.getItem('programSelected');
        console.log(id);
        if(id) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const params = {
                whereKeyValues: {
                    cobrandEmail: userData.cobrandEmail,
                    _id: id
                }
            };
            const params2 = {
                whereKeyValues: {
                    programId: id
                },
                orderKeyValues: {
                    nomerUrutTahapan: 1
                }
            };

            const promiseProgram = axios({
                method: 'post',
                url: 'https://as01.prod.ruangortu.id:8080/api/cobrand/programFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const promiseStep = getContentList(params2);
            Promise.all([promiseProgram, promiseStep]).then(response => {
                console.log("Response data: ", response[0].data);
                setProgram(response[0].data.programs[0]);
                localStorage.setItem('programCategory', response[0].data.programs[0].category);
                console.log("This is ", program);
                setSteps(response[1].data.contents);
                setLoading(false);
                let date = new Date(response[0].data.programs[0].startDate).toLocaleDateString("en-UK", dateFormat);
                setStartDate(date);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
        }
    }, []);

    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <>
            {showWarning ? <Warning setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Program"}/> : null}

            <Heading headingName="Program" routes={[
                { path: '/cms/program', name: 'On Going Program' },
                { path: '/cms/program/view', name: 'View Program Detail' }
            ]} />
            <div className="program_action_btn">
                <NavLink to="/cms/program" className="program_action_btn_nav">
                    <h3><FiArrowLeftCircle /> Back to Program List</h3>
                </NavLink>
                <NavLink to="/cms/program/edit" className="program_action_btn_nav">
                    <h3><FiEdit /> Edit This Program</h3>
                </NavLink>
                <span 
                    onClick={() => {
                        // if(localStorage.getItem('programDeleting')) {
                        //     setProgramDeleting(localStorage.getItem('programDeleting'));
                        //     localStorage.removeItem('programDeleting');
                        // }
                        
                        localStorage.setItem('programDeleting', JSON.stringify([program._id, program.programName]));
                        setShowWarning(true);
                        document.body.style.overflow = 'hidden';
                    }}><NavLink to="/cms/program/view" className="program_action_btn_nav">
                    <h3><FiTrash2 /> Delete This Program</h3>
                </NavLink></span>
            </div>
            <div className="program_detail">
                <div className="program_detail_top">
                    <div className="program_detail_top_img">
                        <img src={program.programthumnail} className="program_detail_top_img_image"/>
                    </div>
                    <div className="program_detail_top_title">
                        <h2>{program.programName}</h2>
                    </div>
                </div>
                <div className="program_detail_bottom">
                    <div className="program_detail_bottom_date">
                        <p className="program_detail_group"><FiCalendar /> Start Date: <span>{startDate}</span></p>
                    </div>
                    <div className="program_detail_bottom_description">
                        <p>{program.ProgramDescription}</p>
                    </div>
                </div>
            </div>
            <div className="Program__table">
                <TableProgram 
                    COLUMNS={columns} 
                    DATA={steps}  
                />
            </div>
        </>
    )
}

export default ViewProgram
