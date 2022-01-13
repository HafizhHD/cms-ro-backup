import React from 'react';
import { NavLink } from 'react-router-dom';
import Heading from '../../../../components/UI/Heading/Heading';
import { FiArrowLeftCircle, FiCalendar, FiEdit, FiFileText, FiTrash2, FiLink } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ViewContent.scss';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';

function ViewContent() {

    const [content, setContent] = useState();
    const [isLoading, setLoading] = useState(true);
    const [startDate, setStartDate] = useState();
    const [isActive, setActive] = useState(true);

    const dateFormat = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    }

    useEffect(() => {
        setLoading(true);
        const id = localStorage.getItem('contentSelected');
        console.log(id);
        if(id) {
            const userData = JSON.parse(localStorage.getItem('userData'));
            let params = {
                whereKeyValues: {
                    cobrandEmail: userData.email,
                    _id: id,
                    status: {"$in" : ["active", "inactive"]}
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
                if(response.data.contents[0].status === 'active') setActive(true);
                    else setActive(false);
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
        <div className="container">
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
                <span 
                    onClick={() => {
                        localStorage.setItem('contentDeleting', content._id);
                    }}><NavLink to="/content" className="action_btn_nav">
                    <h3><FiTrash2 /> Delete This Content</h3>
                </NavLink></span>
                <div className="action_btn_switch">
                    <p className="action_btn_switch_status">Status:</p>
                    <p className="action_btn_switch_inactive">Inactive</p>
                    <label className="action_btn_switch_switch">
                        <input type="checkbox" className="action_btn_switch_switch_checkbox"
                            defaultChecked={isActive}
                            onChange={() => {
                                let changedStatus = isActive ? "inactive" : "active";
                                let param = {
                                    whereValues: {
                                        _id: content._id
                                    },
                                    newValues: {
                                        status: changedStatus
                                    }
                                }
                                console.log(param);
                                axios({
                                    method: 'post',
                                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentUpdate',
                                    data: param,
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                })
                                .then(response => {
                                    console.log("Response data: ", response.data);
                                })
                                .catch(error => {
                                    console.log(error);
                                    setLoading(false);
                                });
                                setActive(!isActive);
                            }}></input>
                        <span className="action_btn_switch_switch_slider"></span>
                    </label>
                    <p className="action_btn_switch_active">Active</p>
                </div>
            </div>
            <div className="section_title">
                <h2>Content Detail</h2>
                <h2>Content Preview pada Aplikasi Smartphone</h2>
            </div>
            <div className="content">
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
                            <p className="content_detail_group"><FiCalendar /> Start Date: <span>{startDate}</span></p>
                            <p className="content_detail_group"><FiFileText /> Type: <span>{content.contentType}</span> </p>
                            <p className="content_detail_group"><FiLink /> Source: <span>{content.contentSource}</span> </p>
                        </div>
                        <div className="content_detail_bottom_description">
                            <p className="content_detail_group">Description:</p>
                            <p>{content.contentDescription}</p>
                        </div>
                        <div className="content_detail_bottom_contents">
                            <p className="content_detail_group">Contents:</p>
                            <div className='pdf-style' dangerouslySetInnerHTML={{__html: content.contents}}></div>
                        </div>
                    </div>
                </div>
                <div className="content_preview">
                    <div className="content_preview_smartphone">
                        <div className="content_preview_smartphone_display">
                            <div className="content_preview_smartphone_display_top">
                                <img src={content.contentThumbnail} className="content_preview_smartphone_display_top_img"/>
                                <div className="content_preview_smartphone_display_top_title">
                                    <h2>{content.contentName}</h2>
                                    <br/>
                                    <p>{startDate}</p>
                                    <p>Sumber: {content.contentSource}</p>
                                </div>
                            </div>
                            <div className="content_preview_smartphone_display_html" dangerouslySetInnerHTML={{__html: content.contents}}></div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContent
