import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../../../../components/UI/Heading/Heading';
import { FiArrowLeftCircle, FiCalendar, FiEdit, FiFileText, FiTrash2 } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewContent.scss';
import RKLoader from '../../../../components/UI/RKLoader/RKLoader';

function ViewContent() {

    const [content, setContent] = useState();
    const [isLoading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState();

    const dateFormat = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }

    useEffect(() => {
        setLoading(true);
        const id = localStorage.getItem('contentSelected');
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
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log("Response data: ", response.data);
                setContent(response.data.contents[0]);
                console.log("This is ", content);
                setLoading(false);
                let date = new Date(response.data.contents[0].startDate).toLocaleDateString("en-UK", dateFormat);
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
            <Heading headingName="Content" routes={[
                { path: '/content', name: 'On Going Content' },
                { path: '/content/view', name: 'View Content Detail' }
            ]} />
            <div className="action_btn">
                <NavLink to="/content" className="action_btn_nav">
                    <h3><FiArrowLeftCircle /> Back to Content List</h3>
                </NavLink>
                <NavLink to="/content/edit" className="action_btn_nav">
                    <h3><FiEdit /> Edit This Content</h3>
                </NavLink>
                <NavLink to="/content" className="action_btn_nav">
                    <h3><FiTrash2 /> Delete This Content</h3>
                </NavLink>
            </div>
            <div className="content_detail">
                <div className="content_detail_top">
                    <div className="content_detail_top_img">
                        <img src={content.contentThumbnail} className="content_detail_top_img_image"/>
                    </div>
                    <div className="content_detail_top_title">
                        <h2>{content.contentName}</h2>
                    </div>
                </div>
                <div className="content_detail_bottom">
                    <div className="content_detail_bottom_detail">
                        <p><FiCalendar /> Start Date: <span>{startDate}</span></p>
                        <p><FiFileText /> Type: <span>{content.contentType}</span> </p>
                    </div>
                    <div className="content_detail_bottom_description">
                        <p>Description:</p>
                        <p>{content.contentDescription}</p>
                    </div>
                    <div className="content_detail_bottom_contents">
                        <p>Contents:</p>
                        <p>{content.contents}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewContent
