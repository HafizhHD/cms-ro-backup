import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../../../../components/UI/Heading/Heading';
import { FiArrowLeftCircle, FiCalendar, FiEdit, FiTrash2 } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewProgram.scss';
import RKLoader from '../../../../components/UI/RKLoader/RKLoader';

function ViewProgram() {

    const [program, setProgram] = useState();
    const [isLoading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState();

    const dateFormat = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }

    useEffect(() => {
        setLoading(true);
        const id = localStorage.getItem('programViewed');
        console.log(id);
        if(id) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            const params = {
                whereKeyValues: {
                    cobrandEmail: userData.email,
                    _id: id
                }
            };

            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log("Response data: ", response.data);
                setProgram(response.data.programs[0]);
                console.log("This is ", program);
                setLoading(false);
                let date = new Date(response.data.programs[0].startDate).toLocaleDateString("en-UK", dateFormat);
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
            <Heading headingName="Program" routes={[
                { path: '/program', name: 'On Going Program' },
                { path: '/program/view', name: 'View Program Detail' }
            ]} />
            <div className="action_btn">
                <NavLink to="/program">
                    <FiArrowLeftCircle />
                    <h3>Back to Program List</h3>
                </NavLink>
                <NavLink to="/program/edit">
                    <FiEdit />
                    <h3>Edit This Program</h3>
                </NavLink>
                <NavLink to="/program">
                    <FiTrash2 />
                    <h3>Delete This Program</h3>
                </NavLink>
            </div>
            <div className="program_detail">
                <div className="program_detail_top">
                    <div className="program detail_top_img">
                        <img src={program.programthumnail} className="program_detail_top_img_image"/>
                    </div>
                    <div className="program_detail_top_title">
                        <h2>{program.programName}</h2>
                    </div>
                </div>
                <div className="program_detail_bottom">
                    <div className="program_detail_bottom_date">
                        <p><FiCalendar /> Start Date: <span>{startDate}</span></p>
                    </div>
                    <div className="program_detail_bottom_description">
                        <p>{program.ProgramDescription}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProgram
